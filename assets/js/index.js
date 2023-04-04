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
        let timeTransition = 500
        let timeAutoNext = 7000

        let _this = this
        let slideItemLength = this.slideItems.length -2
        let indexSlide = 1
        let setAutoNext 
        // create slide dot
        let dotElement = handleSlideDot(slideItemLength)

        // next,prev
        this.nextSlide.onclick = () =>{
          next();
        }
        this.prevSlide.onclick = () =>{
          prev();
        }
        function next(){
          indexSlide++
          updateSlide();
        }
        function prev(){
          indexSlide--
          updateSlide();
        }

        // auto next slide
        autoNextSlide();

        // handle slide dot
        function handleSlideDot(length){
          // create dotElement
          for(let i=0; i < length; i++){
            let dotElement = document.createElement("span")
            dotElement.classList.add("dot")
            if(i === 0) dotElement.classList.add("active")
            dotElement.onclick = () =>{
              clearInterval(setAutoNext)
              autoNextSlide();
              // next slide
              indexSlide = i + 1
              updateSlide();
            }
            _this.slideDot.appendChild(dotElement);
          }
          return $$(".slide-dot .dot")
        }
        //  auto next
        function autoNextSlide(){
          setAutoNext = setTimeout(() => {
            next();
          }, timeAutoNext);
        }
        function updateSlide(){
          // reset auto next slide
          clearInterval(setAutoNext);
          autoNextSlide();
          // update style
          Object.assign(_this.slideBar.style,{
            transition: `transform ${timeTransition}ms linear`,
            transform: `translateX(-${indexSlide * 100}%)`,
          });
          // active
          _this.slideDot.querySelector(".dot.active").classList.remove("active")
          if(indexSlide > slideItemLength){
            dotElement[0].classList.add("active")
          }else if(indexSlide <= 0){
            dotElement[slideItemLength - 1].classList.add("active")
          }else dotElement[indexSlide - 1].classList.add("active")
          setTimeout(()=>{
            if(indexSlide > slideItemLength){
              indexSlide = 1;
              Object.assign(_this.slideBar.style,{
                transition: `transform 0ms linear`,
                transform: `translateX(-${indexSlide * 100}%)`,
              });
            }
          },timeTransition);
        }
        // handle drag slide
        function handleDragSlide(){
          _this.slideBar.onmousedown = _this.slideBar.ontouchstart =
          function(e){
            clearInterval(setAutoNext)

            const xDragLocation =
              e.x || Math.floor(e.touches[0].clientX);
              const slideBarWidth = this.offsetWidth;
              let deviant = 0
              
              this.onmousemove = this.ontouchmove = function(e){
                  const currentXDragLocation =
                    e.x || Math.floor(e.touches[0].clientX)
                    deviant = currentXDragLocation - xDragLocation

                    this.style = `transform: translateX(calc(-${
                      indexSlide *100
                    }% + ${deviant}px))`
              }
              this.onmouseup = this.onmouseleave
               = this.ontouchend =
                  function (){
                    if(Math.abs(deviant) >= slideBarWidth / 3){
                      deviant <0 ? next() : prev()
                    }else{
                      updateSlide();
                    }
                    this.onmousemove = this.onmouseup
                    = this.onmouseleave = this.ontouchmove
                     = this.ontouchend = null
                  }
          }
        }      
        handleDragSlide();
      }
};

MY_STORY.start();












