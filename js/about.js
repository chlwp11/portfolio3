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
            this.section8Fn();
            this.quickMenuFn();
            //this.footerFn();
            //this.smoothScrollFn();
            //this.mouseWheelEventFn();
            this.goTopFn();

        },

        section1Fn:function(){
           
        },
        section2Fn:function(){
            var $section2 = $('#section2');
            var $section2Top = $('#section2').offset().top-200;
            var t = 0;

            
            function scrollFn(){
                $section2.addClass('addScroll');
            }

            $(window).scroll(function(){
                if($(this).scrollTop() == 0){
                    t = 0;
                    $section2.removeClass('addScroll');
                }
                if($(this).scrollTop() > $section2Top){
                    if(t == 0){
                        t = 1;
                        scrollFn()
                    }
                }
            })


        },
        section3Fn:function(){
            var $slideWrap = $('#section3 .slide-wrap');
            var $slideW = $('#section3 .slide').innerWidth()+30;
            var n = $('#section3 .slide').length-9;
            var setId = null;
            var setId2 = null;
            var cnt = 0;
            var $slideView = $('#section3 .slide-view');

            var $section3 = $('#section3');
            var $section3Top = $('#section3').offset().top-200;
            var t = 0;

            
            function scrollFn(){
                $section3.addClass('addScroll');
            }

            $(window).scroll(function(){
                if($(this).scrollTop() == 0){
                    t = 0;
                    $section3.removeClass('addScroll');
                }
                if($(this).scrollTop() > $section3Top){
                    if(t == 0){
                        t = 1;
                        scrollFn()
                    }
                }
            })





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
            

            function autuPlayFn(){
                setId = setInterval(nextSlideCountFn,4000);
            }

            autuPlayFn()

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
                        autuPlayFn();
                    }
                },1000);
            }

        },
        section4Fn:function(){

            var $section4 = $('#section4');
            var $section4Top = $('#section4').offset().top-200;
            var t = 0;

            
            function scrollFn(){
                $section4.addClass('addScroll');
            }

            $(window).scroll(function(){
                if($(this).scrollTop() == 0){
                    t = 0;
                    $section4.removeClass('addScroll');
                }
                if($(this).scrollTop() > $section4Top){
                    if(t == 0){
                        t = 1;
                        scrollFn()
                    }
                }
            })

        },
        section5Fn:function(){
           
            var $section5 = $('#section5');
            var $section5Top = $('#section5').offset().top-200;
            var t = 0;

            
            function scrollFn(){
                $section5.addClass('addScroll');
            }

            $(window).scroll(function(){
                if($(this).scrollTop() == 0){
                    t = 0;
                    $section5.removeClass('addScroll');
                }
                if($(this).scrollTop() > $section5Top){
                    if(t == 0){
                        t = 1;
                        scrollFn()
                    }
                }
            })
        },
        section6Fn:function(){
            var $section6 = $('#section6');
            var $section6Top = $('#section5').offset().top;
            var t = 0;

            
            function scrollFn(){
                $section6.addClass('addScroll');
            }

            $(window).scroll(function(){
                if($(this).scrollTop() == 0){
                    t = 0;
                    $section6.removeClass('addScroll');
                }
                if($(this).scrollTop() > $section6Top){
                    if(t == 0){
                        t = 1;
                        scrollFn()
                    }
                }
            })
        },
        section7Fn:function(){
           var $section7Top = $('#section7').offset().top;
           var $col       = $('#section7 .container>ul>li');
           var t         = 0;
           
           function scrollFn(){
                $col.eq(0).stop().animate({opacity:1},600,function(){
                    $col.eq(1).stop().animate({opacity:1},800,function(){

                    });
                });
           }
        
           $(window).scroll(function(){
               if($(this).scrollTop() == 0){
                   t = 0;
                    $col.stop().animate({opacity:0},0);
               }
               if($(this).scrollTop() > $section7Top-300){
                   if(t == 0){
                       t=1;
                       scrollFn();
                   }
               }
           });


        },
        section8Fn:function(){

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
        
        },

        quickMenuFn:function(){
            var $window = $(window);
            var $quickMenu = $('.quick-Menu');
            var quickTop = ($window.innerHeight()-$quickMenu.innerHeight())/2;

            function quickMenuBoxFn(){
                $quickMenu.stop().animate({top : ($window.scrollTop() + quickTop) });
            }

            $window.scroll(function(){

                quickMenuBoxFn();
            })
        


        }


    
        
    }

    about.init();

})(jQuery);