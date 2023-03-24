// background
var container = document.getElementById("container");

var images = ["./assets/imgs/family/1.jpg","./assets/imgs/family/2.jpg","./assets/imgs/family/4.jpg","./assets/imgs/family/5.jpg","./assets/imgs/family/6.jpg","./assets/imgs/family/7.jpg","./assets/imgs/family/8.jpg","./assets/imgs/family/3.jpg","./assets/imgs/family/9.jpeg","./assets/imgs/family/10.jpeg"];

for (var i = 0; i < images.length; i++) {
  var img = document.createElement("img");
  img.src = images[i];
  container.appendChild(img);
  moveImage(img);
}

function moveImage(img) {
  var maxX = container.offsetWidth - img.width;
  var maxY = container.offsetHeight - img.height;
  var posX = Math.floor(Math.random() * maxX);
  var posY = Math.floor(Math.random() * maxY);
  var dirX = Math.random() < 0.5 ? -1 : 1;
  var dirY = Math.random() < 0.5 ? -1 : 1;
  var speedX = Math.floor(Math.random() * 1.5) + 1;
  var speedY = Math.floor(Math.random() * 1.5) + 1;
  setInterval(function() {
    posX += speedX * dirX;
    posY += speedY * dirY;
    if (posX < 0 || posX > maxX) {
      dirX = -dirX;
    }
    if (posY < 0 || posY > maxY) {
      dirY = -dirY;
    }
    img.style.left = posX + "px";
    img.style.top = posY + "px";
  }, 20);
}
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const MY_STORY = {
  // nav
    nav: $(".info__body #nav"),
    navItem: $$("#nav .nav-item"),
    // content
    content: $(".info__body #content"),
    contentItem: $$("#content .content-item"),
    // slide
    slideBar: $(".slider .slide-main .slide-bar"),
    slideItems: $$(".slide-bar .slide-item"),
    // dot
    slideDot: $(".slider .slide-dot"),
    // prev,next slider
    prevSlide: $(".slider #prev-slide"),
    nextSlide: $(".slider #next-slide"),
    // skill
    skillElement: $(".skill"),

    start: function(){
      this.handleClickNav();
      this.handleScroll();
      this.handleSlider();
    },
    // function handleClickNav
    handleClickNav: function(){
      this.navItem.forEach((item,index) => {
        item.onclick = () => {
            // cancel if is current item
            if (item.classList.contains("active")) return;
            // Active current nav
            this.nav.querySelector(".nav-item.active")
                .classList.remove("active");
            item.classList.add("active");
            // Active tab content and scroll content to top view
            this.content.querySelector(".content-item.active")
                .classList.remove("active")
            this.contentItem[index].classList
                .add("active")
            this.content.scrollIntoView({
              behavior:"smooth",
              block:"start"
            })
        }
      });
    },
    // function handleScroll
    handleScroll: function(){
        window.onscroll = () =>{
          let contentTop = this.content.offsetTop
          let scrollTop =
				      window.scrollY || document.documentElement.offsetTop;
          if (scrollTop > contentTop) {
              nav.classList.add("fixed");
          }else if (scrollTop <= contentTop - 24) {
              nav.classList.remove("fixed");
          }
          // Show skill progress when scroll to view
			    let skillElementToTop =
          this.skillElement.getBoundingClientRect().top;
          if (skillElementToTop < window.innerHeight) {
            this.skillElement.setAttribute(
              "style",
              "--animation-progress: skill-progress 1s forwards"
            );
          } else {
            this.skillElement.removeAttribute("style");
          }
        }
    },
    // function handleSlider
    handleSlider: function(){
      // config
        let timeTransition = 500
        let timeAutoNext = 7000

        let _this = this;
        let slideItemLength = this.slideItems.length - 2;
        let indexSlide =  1
        let setAutoNext ;
        // create slide dot
        let dotElement = this.handleSlideDot(slideItemLength)
        // event next,prev slide
        this.nextSlide.onclick = () =>{
          next();
        }
        this.prevSlide.onclick = () =>{
          prev();
        }
        autoNextSlide();
        // function
        function autoNextSlide(){
          setAutoNext = setTimeout(()=>{
              next();
          },timeAutoNext)
        }
        function next() {
          indexSlide++;
          updateSlide();
        }
        function prev() {
          indexSlide--;
          updateSlide();
        }
        function updateSlide(){
          // reset auto next slide
          clearInterval(setAutoNext);
			    autoNextSlide();
          // update style
          Object.assign(_this.slideBar.style, {
            transition: `transform ${timeTransition}ms linear`,
            transform: `translateX(-${indexSlide * 100}%)`,
          });
          // active dot
          _this.slideDot.querySelector(".dot.active")
          .classList.remove("active");
          if (indexSlide > slideItemLength)
            dotElement[0].classList.add("active");
          else if (indexSlide <= 0)
            dotElement[slideItemLength - 1].classList.add("active");
          else dotElement[indexSlide - 1].classList.add("active");
            }
    }
};

MY_STORY.start();




































