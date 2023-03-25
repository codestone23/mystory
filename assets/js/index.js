
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

// my story
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
    // container img
    container: $(".sub-item #container"),
    images: $$("#container .imgs"),
    // more hide
    afterItem:$$(".sub-item .after-item"),
    buttonDown: $(".sub-item .button-down"),
    buttonUp: $(".sub-item .button-up"),



    start: function(){
      this.handleClickNav();
      this.handleScroll();
      this.handleSlider();
      this.handleClickImg();
      for (let i of this.images) {
          this.handleMoveImage(i);
      };
      this.handleMore();
      this.handleHide();
    },
    // moveImage
    handleMoveImage: function(img) {
        let maxX = this.container.offsetWidth - img.width;
        let maxY = this.container.offsetHeight - img.height;
        let posX = Math.floor(Math.random() * maxX);
        let posY = Math.floor(Math.random() * maxY);
        let dirX = Math.random() < 0.5 ? -1 : 1;
        let dirY = Math.random() < 0.5 ? -1 : 1;
        let speedX = Math.floor(Math.random() * 1.5) + 1;
        let speedY = Math.floor(Math.random() * 1.5) + 1;
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
    },
    // mousemove
    handleClickImg: function(){
      this.images.forEach((item,index) =>{
        item.addEventListener('mousemove', function() {
          item.style.transform = 'scale(1.2)'; 
        });
        item.addEventListener('mouseleave', function() {
          item.style.transform = 'scale(1)'; 
        });
      })
    },
    // more item
    handleMore : function(){
      this.buttonDown.onclick = () =>{
          this.afterItem.forEach((item,index)=>{
              item.classList.remove("hide-item")
          })
          this.buttonDown.setAttribute("style","display:none")
          this.buttonUp.removeAttribute("style")
      }
  },
    // hide item
    handleHide : function(){
        this.buttonUp.onclick = () =>{
          this.afterItem.forEach((item,index)=>{
            item.classList.add("hide-item")
        })
        this.buttonUp.setAttribute("style","display:none")
        this.buttonDown.removeAttribute("style")
        }
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
      
    }
};

MY_STORY.start();






































