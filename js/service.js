(function ($) {

    var service = {


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
            //this.footerFn();
            //this.smoothScrollFn();
            //this.mouseWheelEventFn();
            this.goTopFn();
            this.quickMenuFn();

        },

        section1Fn:function(){
           
          
        },
        section2Fn:function(){
           
            var $section2 = $('#section2');
            var t = 0;

            function scrollFn(){
                $section2.addClass('addScroll')
            };

            $(window).scroll(function(){
                if($(this).scrollTop() > 10){
                    if( t == 0){
                        t=1;
                        scrollFn();
                    }
                }
            });




        },
        section3Fn:function(){
          
            var $section3Top = $('#section3').offset().top;
            var col = $('#section3 .content>ul>li');
            var t =0;

            function scrollFn(){
                col.eq(0).stop().animate({opacity:1},600,function(){
                    col.eq(1).stop().animate({opacity:1},800,function(){
                        col.eq(2).stop().animate({opacity:1},1000,function(){

                        })
                    })
                })
            }

            $(window).scroll(function(){

                if($(this).scrollTop() == 0){
                    t = 0 ;
                    col.stop().animate({opacity:0},0)
                }

                if($(this).scrollTop() > $section3Top-200 ){
                    if(t == 0){
                        t =1;
                        scrollFn();
                    }
                }

            })


        },
        section4Fn:function(){
            var $slideWrap = $('#section4 .slide-wrap');
            var $slideW = $('#section4 .slide').innerWidth();
            var $nextBtn = $('#section4 .next-btn'); 
            var $prevBtn = $('#section4 .prev-btn'); 
            var n = $('#section4 .slide').length-7;
            var setId = null;
            var setId2 = null;
            var cnt = 0;
            var $slideView = $('#section4 .slide-view');

            var $section4 = $('#section4');
            var t = 0;

            var $section4Top = $('#section4').offset().top;


            $(window).scroll(function(){
                if($(this).scrollTop() == 0){
                    t = 0;
                    $section4.removeClass('addScroll');
                }
                if($(this).scrollTop() > $section4Top-400){
                    if(t == 0){
                        t = 1;
                        scrollFn()
                    }
                }
            })



           function scrollFn(){
                $section4.addClass('addScroll');
            }

          

            $(window).resize(function(){
                slideW = $('#section3 .slide').innerWidth();
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


            $nextBtn.on({
                click:function(){
                    timerFn();
                    nextSlideCountFn();
                }
            })

            $prevBtn.on({
                click:function(){
                    timerFn();
                    prevSlideCountFn();
                }
            })

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
        section5Fn:function(){
           
            var $section5Top = $('#section5').offset().top;
            var col = $('#section5 .content>ul>li');
            var t =0;

            function scrollFn(){
                col.eq(0).stop().animate({opacity:1},400,function(){
                    col.eq(1).stop().animate({opacity:1},500,function(){
                        col.eq(2).stop().animate({opacity:1},600,function(){
                        col.eq(3).stop().animate({opacity:1},700,function(){
                        col.eq(4).stop().animate({opacity:1},800,function(){
                        col.eq(5).stop().animate({opacity:1},900,function(){

                        })
                        })
                        })
                        })
                    })
                })
            }

            $(window).scroll(function(){

                if($(this).scrollTop() == 0){
                    t = 0 ;
                    col.stop().animate({opacity:0},0)
                }

                if($(this).scrollTop() > $section5Top-200 ){
                    if(t == 0){
                        t =1;
                        scrollFn();
                    }
                }

            })

        },
        section6Fn:function(){

            var $section6Top = $('#section6').offset().top;
            var col = $('#section6 .content > ul > li');
            var t =0;
           
            function scrollFn(){
                col.eq(1).stop().animate({opacity:1},800,function(){
                    col.eq(0).stop().animate({opacity:1},1000,function(){
                        col.eq(2).stop().animate({opacity:1},1000,function(){

                    })
                })
               })
            }
        
            $(window).scroll(function(){

                if($(this).scrollTop() == 0){
                    t = 0 ;
                    col.stop().animate({opacity:0},0)
                }

                if($(this).scrollTop() > $section6Top-200 ){
                    if(t == 0){
                        t =1;
                        scrollFn();
                    }
                }

            })
            
        },
        section7Fn:function(){
            var $section7Top = $('#section7').offset().top;
            var col = $('#section7 .content > ul > li');
            var t =0;
         
            function scrollFn(){
                col.eq(0).stop().animate({opacity:1},800,function(){
                    col.eq(1).stop().animate({opacity:1},900,function(){
                        col.eq(2).stop().animate({opacity:1},1000,function(){

                    })
                })
               })
            }
        
            $(window).scroll(function(){

                if($(this).scrollTop() == 0){
                    t = 0 ;
                    col.stop().animate({opacity:0},0)
                }

                if($(this).scrollTop() > $section7Top-300 ){
                    if(t == 0){
                        t =1;
                        scrollFn();
                    }
                }

            })


        },
        section8Fn:function(){
            var $slideWrap = $('#section8 .slide-wrap');
            var $slideW = $('#section8 .slide').innerWidth()+70;
            var n = $('#section8 .slide').length-25;
            var cnt = 0

            
            $(window).resize(function(){
                $slideW = $('#section8 .slide').innerWidth()+70;
            });
            
            function mainSlideFn(){
                $slideWrap.stop().animate({left:-$slideW*cnt},600,function(){
                    if(cnt>n){cnt=0}
                    if(cnt<0){cnt=n}
                $slideWrap.stop().animate({left:-$slideW*cnt},0)
                });
            };

            function nextSlideCountFn(){
                cnt ++;
                mainSlideFn()
            }


            function autoPlay(){
                setId = setInterval(nextSlideCountFn,1000);
            }

             autoPlay(); 
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

    service.init();

})(jQuery);