
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
    // book one
    numberItemOne: $$(".one-book .slide-page .number"),
    pageFooterOne:$(".one-book .page-footer .slide-page"),
    pageItemOne: $$(".one-book .page-item"),
    pageOne: $(".page.one-book"),
    // book two
    numberItemTwo: $$(".two-book .slide-page .number"),
    pageFooterTwo:$(".two-book .page-footer .slide-page"),
    pageTwo: $(".page.two-book"),
    pageItemTwo: $$(".two-book .page-item"),
    // transfer
    transfer:$(".sub-item .transfer-type"),
    transferItem: $$(".transfer-type .fa-solid"),
    page:$(".sub-item.big-page"),
    pageItem: $$(".sub-item .page"),



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
      this.handlePageOne();
      this.handlePageTwo();
      this.handleTransferPage();
      this.handlePage();
    },
    // transfer page
    handleTransferPage:function(){
      this.transferItem.forEach((item,index)=>{
        item.onclick = () =>{
          if(item.classList.contains("active")) return
          this.transfer.querySelector(".active").classList.remove("active")
          item.classList.add("active")
          this.page.querySelector(".page.active").classList.remove("active")
          this.pageItem[index].classList.add("active")
        }
      })
    },
    // page
    handlePageOne: function(){
      this.numberItemOne.forEach((item,index)=>{
        item.onclick = () =>{
          if(item.classList.contains("active")) return
          // page one
          this.pageFooterOne.querySelector(".active").classList.remove("active")
          item.classList.add("active")
          this.pageOne.querySelector(".page-item.active")
                .classList.remove("active")
          this.pageItemOne[index].classList
                .add("active") 
          console.log((item,index))
          // page two
          this.pageFooterTwo.querySelector(".active").classList.remove("active")
          this.numberItemTwo[index].classList.add("active")
          this.pageTwo.querySelector(".page-item.active").classList.remove("active")
          this.pageItemTwo[index].classList
                .add("active") 
        }
      })
    },
    handlePageTwo: function(){
      this.numberItemTwo.forEach((item,index)=>{
        item.onclick = () =>{
          if(item.classList.contains("active")) return
          // page two
          this.pageFooterTwo.querySelector(".active").classList.remove("active")
          item.classList.add("active")
          this.pageTwo.querySelector(".page-item.active")
                .classList.remove("active")
          this.pageItemTwo[index].classList
                .add("active")  
                console.log((item,index))
          // page one
          this.pageFooterOne.querySelector(".active").classList.remove("active")
          this.numberItemOne[index].classList.add("active")
          this.pageOne.querySelector(".page-item.active").classList.remove("active")
          this.pageItemOne[index].classList
                .add("active")
        }
      })
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
          this.content.scrollIntoView({
          behavior:"smooth",
          block:"start"
        })
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






































