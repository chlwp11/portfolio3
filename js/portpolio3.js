(function ($) {

        var portpolio3 = {


            init: function () {
               
                //this.headerFn();
                this.navFn();
                //this.section1Fn();
                //this.section2Fn();
                //this.section3Fn();
                //this.section4Fn();
                //this.section5Fn();
                //this.section6Fn();
                this.section7Fn();
                //this.section8Fn();
                //this.footerFn();
                //this.smoothScrollFn();
                //this.mouseWheelEventFn();
                this.calendarFn();
                this.calendarbtnFn();
                this.goTopFn();
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

            },
            section7Fn:function(){
                
                

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
                   

                    console.log(nowyear , y);
                    console.log(nowmonth , m);

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
                
                $calBtn.on({
                    click:function(){
                        $calWrap.stop().toggleClass('addCal');

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
            
            }
        
            
        }

    portpolio3.init();

})(jQuery);