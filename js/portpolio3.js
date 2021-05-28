(function ($) {

        var portpolio3 = {


            init: function () {
                //this.headerFn();
                this.navFn();
                this.section1Fn();
                this.section2Fn();
                this.section3Fn();
                this.section4Fn();
                this.section5Fn();
                this.section6Fn();
                this.section7Fn();
                this.section8Fn();
                this.section9Fn();
                //this.footerFn();
                //this.smoothScrollFn();
                //this.mouseWheelEventFn();
                this.calendarFn();
                this.calendarbtnFn();
                this.goTopFn();
                this.quickMenuFn();
                //this.ajaxFn();            

            },
            
            navFn:function(){
                var $navBtn = $('#header .nav-btn');
                var $nav = $('.nav');
                var $closeBtn = $('.nav .close-btn');
                var $aniBtn = $('#header .bar');
                
                $navBtn.on({
                    click:function(){
                        $nav.addClass('addNav');
                        $aniBtn.addClass('addBar');
                    }
                })
                
                $closeBtn.on({
                    click:function(){
                        $nav.removeClass('addNav');
                        $navBtn.removeClass('addBar');
                        $aniBtn.removeClass('addBar');
                    }
                })


            
            },
            section1Fn:function(){
                var $section1 = $('#section1');
                var $slide   = $('#section1 .slide');
                var $prevBtn = $('#section1 .prev-btn');
                var $nextBtn = $('#section1 .next-btn');
                var cnt      = 0;
                var setId    = null;
                var setId2   = null;

                function mainNextSlideFn(){
                    $slide.css({zIndex:1});
                    $slide.eq(cnt==0?2:cnt-1).css({zIndex:2});
                    $slide.eq(cnt).css({zIndex:3}).stop().animate({opacity:0},0).animate({opacity:1},1500);
                }

                function mainPrevSlideFn(){
                    $slide.css({zIndex:1}).animate({opacity:1},0);
                    $slide.eq(cnt).css({zIndex:2});
                    $slide.eq(cnt==2?0:cnt+1).css({zIndex:3}).stop().animate({opacity:1},0).animate({opacity:0},1500);
                }

                function nextSlideCountFn(){
                    cnt ++;
                    if(cnt>2){
                        cnt=0;
                    }
                    mainNextSlideFn();
                }

                function prevSlideCountFn(){
                    cnt --;
                    if(cnt<0){
                        cnt=2;
                    }
                    mainPrevSlideFn();
                }

                $nextBtn.on({
                    click:function(){
                        $section1.removeClass('addtext');
                        if(!$slide.is(':animated')){
                            timerFn()
                            nextSlideCountFn();
                        }
                        $section1.addClass('addtext');
                    }
                });

                $prevBtn.on({
                    click:function(){
                        $section1.removeClass('addtext');
                        if(!$slide.is(':animated')){
                            timerFn()
                            prevSlideCountFn();
                        }
                        $section1.addClass('addtext');
                    }
                });


                function autoPlay(){
                    setId = setInterval(nextSlideCountFn,6000);
                    $section1.addClass('addtext');
                }

                autoPlay(); 

                function timerFn(){
                    var t = 0;
                    clearInterval(setId);
                    clearInterval(setId2);

                    setId2 = setInterval(function(){
                        t++;
                        if(t>4){
                            clearInterval(setId);
                            clearInterval(setId2);
                            nextSlideCountFn();
                            autoPlay();
                        }   
                    },1000)
                }


            },
            section2Fn:function(){

                var $section2 = $('#section2').offset().top-300; 
                var col = $('#section2 .content>ul>li');
                var t = 0;

                function scrollFn(){
                    
                    col.eq(0).stop().animate({opacity:1},600,function(){
                        col.eq(1).stop().animate({opacity:1},600,function(){
                            col.eq(2).stop().animate({opacity:1},600)
                        });
                    });
                    
                }

                $(window).scroll(function(){
                    if($(this).scrollTop() == 0){
                        t=0;
                        col.stop().animate({opacity:0},0);
                    }

                    if($(this).scrollTop() > $section2){
                        if( t == 0 ){
                            t=1;
                            scrollFn();
                        }
                    }
                });


            },
            section3Fn:function(){
                var section3 = $('#section3').offset().top-300;
                var col      = $('#section3 .container>ul>li');
                var t = 0;
                
                function scrollFn(){
                    col.eq(0).stop().animate({opacity:1},600,function(){
                        col.eq(1).stop().animate({opacity:1},600,function(){
                            col.eq(2).stop().animate({opacity:1},600,function(){
                                col.eq(3).stop().animate({opacity:1},600)
                        
                            })
                        })
                    })
                }

                $(window).scroll(function(){

                    if($(this).scrollTop() == 0){
                        t=0;
                        col.stop().animate({opacity:0},0);
                    }
                    if($(this).scrollTop() > section3){
                        if( t==0){
                            t = 1;
                            scrollFn();
                        }
                    }
      
                })
            },
            
            section4Fn:function(){
                var section4 = $('#section4').offset().top-300;
                var col      = $('#section4 .content>ul>li');
                var t   = 0;
                
                function scrollFn(){
                    col.eq(0).stop().animate({opacity:1},600,function(){
                        col.eq(1).stop().animate({opacity:1},600,function(){
                            col.eq(2).stop().animate({opacity:1},600,function(){
                                col.eq(3).stop().animate({opacity:1},600)
                        
                            })
                        })
                    })
                }

                $(window).scroll(function(){

                    if($(this).scrollTop() == 0){
                        t=0;
                        col.stop().animate({opacity:0},0);
                    }
                    if($(this).scrollTop() > section4){
                        if( t == 0){
                            t = 1;
                            scrollFn();
                        }
                    }
      
                })

            },
            
            section5Fn:function(){ 
                var $section5Top = $('#section5').offset().top-300;
                var $section5 = $('#section5');
                var t = 0;

                function scrollFn(){
                    $section5.addClass('addScroll')
                }

                $(window).scroll(function(){
                    if($(this).scrollTop() == 0){
                        t = 0;
                        $section5.removeClass('.addScroll');
                    }
                    if($(this).scrollTop() > $section5Top){
                        if(t == 0){
                            t = 1;
                            scrollFn()
                        }
                    }
                });
            },
        
            section6Fn:function(){

                var $section6Top = $('#section6').offset().top-300;
                var col = $('#section6 .container>ul>li');
                var t = 0;

                function scrollFn(){
                    
                    col.eq(0).stop().animate({opacity:1},600,function(){
                        col.eq(1).stop().animate({opacity:1},600,function(){
                            col.eq(2).stop().animate({opacity:1},600,function(){
                                col.eq(3).stop().animate({opacity:1},600)

                            })
                        })
                    })

                }

                $(window).scroll(function(){
                    if($(this).scrollTop() == 0){
                        t = 0;
                        col.stop().animate({opacity:0},0)
                    }
                    if($(this).scrollTop() > $section6Top){
                        if( t == 0){
                            t = 1;
                            scrollFn();
                        }
                    }
                });

            
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
                var $section7 = $('#section7');
                var $section7Top = $('#section7').offset().top-300;
                var t = 0;

                function scrollFn(){
                    $section7.stop().addClass('addScroll')
                }

                $(window).scroll(function(){
                    if($(this).scrollTop() == 0 ){
                        t = 0;
                        $section7.stop().removeClass('addScroll')
                    }
                    if($(this).scrollTop() > $section7Top){
                        if(t == 0){
                            t = 1;
                            scrollFn();
                        }
                    }
                })



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
            section8Fn:function(){

            var section8 = $('#section8');
            var section8Top = $('#section8').offset().top-300;
            var t = 0;


            function scrollFn(){
                section8.stop().addClass('addScroll');
            }

            $(window).scroll(function(){
                if($(this).scrollTop() == 0 ){
                    t = 0;
                    section8.stop().removeClass('addScroll');
                }
                if($(this).scrollTop() > section8Top){
                    if(t == 0){
                        t =1;
                        scrollFn()
                    }
                }
            })
            

            },
            section9Fn:function(){
                var $section9Top = $('#section9').offset().top-300;
                var col = $('#section9 .content>ul>li');
                var t = 0;

                function scrollFn(){
                    
                    col.eq(0).stop().animate({opacity:1},600,function(){
                        col.eq(1).stop().animate({opacity:1},700,function(){
                            col.eq(2).stop().animate({opacity:1},800,function(){
                                col.eq(3).stop().animate({opacity:1},900)

                            })
                        })
                    })

                }

                $(window).scroll(function(){
                    if($(this).scrollTop() == 0){
                        t = 0;
                        col.stop().animate({opacity:0},0)
                    }
                    if($(this).scrollTop() > $section9Top){
                        if( t == 0){
                            t = 1;
                            scrollFn();
                        }
                    }
                });
            },
            calendarFn:function(){
                  
                var year  = new Date().getFullYear();  
                var month = new Date().getMonth()+1;  


                var firstDay = null;
                var last = null;

                var y = 0;
                var m = 0;


                var col   = null;
                var prev  = null;
                var cnt   = 0;

                var $leftBtn = $('.left-btn');
                var $rightBtn = $('.right-btn');

                function calendarFn(y,m){
                    

                    col   = null;
                    prev  = null;
                    cnt   = 0;
                   

                    $('.calendar .title').html( y + '년' + m + '월' );
                    $('td').removeClass('now');

                    
                    var nowyear  =new Date().getFullYear();
                    var nowmonth =new Date().getMonth()+1;
                    var nowdate  =new Date().getDate();


                    //이달 달력 
                    
                    firstDay = new Date (y + '-' + m + '-' + 1).getDay();
                    col = firstDay;

                    prev = new Date (y, m-1, 0).getDate();

                    last = new Date (y, m , 0 ).getDate();
                                    

                    for(var i=1; i<=last; i++ ){
                        if(col !==null){
                            $('td').eq(col).html(i);

                            if( nowyear == y && nowmonth == m ){
                                if(nowdate == i){

                                    $('td').eq(col).addClass('now');
                                }
                            }

                            else {
                                $('td').removeClass('now');
                            }

                            col++;

                        }   

                    }

                    
                    //이전달 

                    for(var i=firstDay-1; i>=0; i--){
                        
                        $('td').eq(i).html(prev).addClass('black');
                        prev--;
                    }

                    //다음달

                    for(var i=col; i<$('td').length; i++){
                        cnt ++ ;
                        $('td').eq(i).html(cnt).addClass('black');
                    
                    }
                
                    
                    
                }

                calendarFn(year,month);
               
                y = year;
                m = month;

                
                $leftBtn.on({
                    click:function(){

                        m--;
                        if(m<1){
                            y--;
                            m=12;
                        }
                        $('td').removeClass('black');
                        calendarFn( y,m);
                    }
                })

                $rightBtn.on({
                    click:function(){

                        m++;
                        if(m>12){
                            y++;
                            m=1;
                        }
                        $('td').removeClass('black');
                        calendarFn( y,m);
                    }
                })





            },
            
            calendarbtnFn:function(){

                var $calWrap = $('.calendar');
                var $calBtn  = $('.calendar-btn');
                var $calBtn  = $('.calendar-btn');
                $calBtn.on({
                    click:function(){
                        $calWrap.stop().toggleClass('addCal');
                        $calBtn.stop().toggleClass('addCal');

                    }
                }) 

            

            
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

    portpolio3.init();

})(jQuery);