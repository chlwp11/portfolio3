(function ($) {

    var about = {


        init: function () {
           
            //this.headerFn();
            this.section1Fn();
            this.section2Fn();
            this.section3Fn();
            this.section4Fn();
            this.section5Fn();
            this.section6Fn();
            this.section7Fn();
            //this.section8Fn();
            //this.footerFn();
            //this.smoothScrollFn();
            //this.mouseWheelEventFn();
            this.goTopFn();

        },

        section1Fn:function(){
           
        },
        section2Fn:function(){
           
            var $slideWrap = $('#section3 .slide-wrap');
            var $slideW = $('#section3 .slide').innerWidth()+30;
            var n = $('#section3 .slide').length-9;
            var setId = null;
            var cnt = 0;
            var $slideView = $('#section3 .slide-view');

            console.log($slideW)

            $(window).resize(function(){
                slideW = $('#section3 .slide').innerWidth()+30;
            });

            function mainSlideFn(){
                $slideWrap.stop().animate({left:-$slideW*cnt},600, function(){

                    if(cnt>n){cnt=0}
                    
                    if(cnt<0){cnt=n}

                    $slideWrap.stop().animate({left:-$slideW*cnt},0);
                });
            }
            
            function prevSlideCountFn(){
                cnt --;
                mainSlideFn();
            
            }
            
            function nextSlideCountFn(){
                cnt ++;
                mainSlideFn();
            }

            function autuPlay(){
                setId = setInterval(nextSlideCountFn,2000);
            }

            autuPlay()

            var start = 0;
            var end   = 0;
            var mouseDown = 0;
            $slideView.on({
                mousedown:function(e){
                    e.preventDefault();
                    start = e.pageX;
                },
                start:function(e){
                    e.preventDefault();
                    start = e.originalEvent.changedTouches[0].pageX;
                },
                mouseup:function(e){
                  e.preventDefault();
                  end = e.pageX;
                  touchSwipeFn();  
                },
                end:function(e){
                    e.preventDefault();
                    end = e.originalEvent.changedTouches[0].pageX;
                    touchSwipeFn();
                },
                mouseleave:function(){
                    if(mouseDown == 1){
                        mouseDown = 0;
                        end = e.pageX;
                        touchSwipeFn();
                    }
                }
            })

            function touchSwipeFn(){
                if(start-end > 0){
                    if(!$slideWrap.is(':animated')){
                       
                        nextSlideCountFn();
                    }
                }
                if(start-end < 0){
                    if(!$slideWrap.is(':animated')){
                       
                        prevSlideCountFn();
                    }
                }
            }
            


        },
        section3Fn:function(){
        
        },
        section4Fn:function(){
           
        },
        section5Fn:function(){
           
        },
        section6Fn:function(){
           
        },
        section7Fn:function(){
            
            var $slideWrap = $('#section7 .slide-wrap');
            var $slideView = $('#section7 .slide-view');
            var $slideW    = $('#section7 .slide-box').innerWidth();
            var n          = $('#section7 .slide-box').length-13;
            var cnt        = 0;
            var setId      = null;
            var setId2      = null;
            var mouseDown  = 0;
            function responseFn(){

                $slideW  = $('#section7 .slide-box').innerWidth();
            }
            setTimeout(responseFn, 100);

            $(window).resize(function(){
                responseFn();
            })

            function mainSlideFn(){
                $slideWrap.stop().animate({left:-$slideW*cnt},600,function(){

                    if(cnt>n){ cnt = 0}

                    if(cnt<0){ cnt = n}

                    $slideWrap.stop().animate({left:-$slideW*cnt},0);                        
                });
            }
           

            function nextSlideCountFn(){
                cnt ++;
                mainSlideFn();    
            }
            
            function prevSlideCountFn(){
                cnt --;
                mainSlideFn();
            }

            var start = 0;
            var end   = 0;

            $slideView.on({
                mousedown:function(e){
                    e.preventDefault();
                    start = e.pageX;
                },
                start:function(e){
                    e.preventDefault();
                    start = e.originalEvent.changedTouches[0].pageX;
                },
                mouseup:function(e){
                  e.preventDefault();
                  end = e.pageX;
                  touchSwipeFn();  
                },
                end:function(e){
                    e.preventDefault();
                    end = e.originalEvent.changedTouches[0].pageX;
                    touchSwipeFn();
                },
                mouseleave:function(){
                    if(mouseDown == 1){
                        mouseDown = 0;
                        end = e.pageX;
                        touchSwipeFn();
                    }
                }
            })

            function touchSwipeFn(){
                if(start-end > 0){
                    if(!$slideWrap.is(':animated')){
                        timerFn()
                        nextSlideCountFn();
                    }
                }
                if(start-end < 0){
                    if(!$slideWrap.is(':animated')){
                        timerFn()
                        prevSlideCountFn();
                    }
                }
            }
            
            function autoFn(){
                setId = setInterval(nextSlideCountFn,4000);
            }
            autoFn();

            function timerFn(){
                var t =0;
                clearInterval(setId);
                clearInterval(setId2);
                setId2 = setInterval(function(){
                    t ++;
                    if(t>4){
                        clearInterval(setId);
                        clearInterval(setId2);
                        nextSlideCountFn();
                        autoFn();
                    }
                },1000);
            }
        },
 
        goTopFn:function(){
           
           var $goTopBtn = $('.goTop .goTop-btn');
           var $goTop    = $('.goTop');
           var $window   = $(window);
           var t        = 0;

           $goTopBtn.on({
               click:function(e){
                   e.preventDefault();
                   var url = $(this).attr('href');
                        $('html,body').stop().animate({scrollTop: $(url).offset().top},600);
                   
               }
           })

           $window.scroll(function(){
               if($(this).scrollTop() >= 80){
                   if(t == 0){
                       t=1;
                       $goTop.stop().fadeIn(600);
                   }

               }
               else{
                   if( t == 1){
                       t=0;
                       $goTop.stop().fadeOut(600);
                   }
               }
           });
        
        }
    
        
    }

    about.init();

})(jQuery);