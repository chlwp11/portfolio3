(function ($) {

    var gallery = {

    
        init: function () {
           
            
            //this.section1Fn();
            this.section2Fn();

            this.goTopFn();
            this.quickMenuFn();

        },

        section2Fn:function(){
        
            var $galBtn = $('#section2 .gal-btn');              
            var $galUl  = $('#gallery-wrap > ul');             
            var $galLi  = $('#gallery-wrap > ul > li');        
            var $galCnt = $('#gallery-wrap .gallery-content')  
            var n       = $('#gallery-wrap > ul > li').length; 
            
            var winW     = $(window).innerWidth();
            var cols    = 4;
            var imgW    = (winW / cols) ;
        
            var imgH   =  386.125;

            var rows    = Math.ceil(n/cols); // 자리올림 반드시 줄수(2) = 이미지 총 갯수($galLi.length) / 칸수(cols);
            var btnNum  = 0;  

            function responseGalFn(){

                winW    = $(window).innerWidth();

                if (winW > 1200){
                    cols = 4;
                }
                else if (winW > 980){
                    cols = 2;
                }
                else if (winW > 680){
                    cols = 1;
                }
                imgW    = winW / cols ;

                
                imgH   = 386.125 ;



                if(btnNum == 0){
                    n = 15;
                    rows    = Math.ceil(n/cols);
                    $galUl.css({width: winW, height:imgH*rows});
                    $galLi.css({width: imgW, height:imgH});
                    $galCnt.removeClass('addZoom');

                    if(cols == 4){
                        $galLi.eq(0) .stop().show().animate({left: imgW *0, top: imgH*0},300);
                        $galLi.eq(1) .stop().show().animate({left: imgW *1, top: imgH*0},300);
                        $galLi.eq(2) .stop().show().animate({left: imgW *2, top: imgH*0},300);
                        $galLi.eq(3) .stop().show().animate({left: imgW *3, top: imgH*0},300);
                        $galLi.eq(4) .stop().show().animate({left: imgW *0, top: imgH*1},300);
                        $galLi.eq(5) .stop().show().animate({left: imgW *1, top: imgH*1},300);
                        $galLi.eq(6) .stop().show().animate({left: imgW *2, top: imgH*1},300);
                        $galLi.eq(7) .stop().show().animate({left: imgW *3, top: imgH*1},300);
                        $galLi.eq(8) .stop().show().animate({left: imgW *0, top: imgH*2},300);
                        $galLi.eq(9) .stop().show().animate({left: imgW *1, top: imgH*2},300);
                        $galLi.eq(10).stop().show().animate({left: imgW *2, top: imgH*2},300);
                        $galLi.eq(11).stop().show().animate({left: imgW *3, top: imgH*2},300);
                        $galLi.eq(12).stop().show().animate({left: imgW *0, top: imgH*3},300);
                        $galLi.eq(13).stop().show().animate({left: imgW *1, top: imgH*3},300);
                        $galLi.eq(14).stop().show().animate({left: imgW *2, top: imgH*3},300);
                        $galLi.eq(15).stop().show().animate({left: imgW *3, top: imgH*3},300);
                    }

                    $galCnt.eq(0).addClass('addZoom');
                    $galCnt.eq(1).addClass('addZoom');
                    $galCnt.eq(2).addClass('addZoom');
                    $galCnt.eq(3).addClass('addZoom');
                    $galCnt.eq(4).addClass('addZoom');
                    $galCnt.eq(5).addClass('addZoom');
                    $galCnt.eq(6).addClass('addZoom');
                    $galCnt.eq(7).addClass('addZoom');
                    $galCnt.eq(8).addClass('addZoom');
                    $galCnt.eq(9).addClass('addZoom');
                    $galCnt.eq(10).addClass('addZoom');
                    $galCnt.eq(11).addClass('addZoom');
                    $galCnt.eq(12).addClass('addZoom');
                    $galCnt.eq(13).addClass('addZoom');
                    $galCnt.eq(14).addClass('addZoom');
                    $galCnt.eq(15).addClass('addZoom');



                }

                else if(btnNum == 1){
                    n = 5;
                    rows    = Math.ceil(n/cols);
                    $galUl.css({width: winW, height:imgH*rows});
                    $galLi.css({width: imgW, height:imgH});
                     $galCnt.removeClass('addZoom'); 
                     

                    if(cols == 4){
                      
                        $galLi.eq(4) .stop().show().animate({left: imgW *0, top: imgH*0},300);
                        $galLi.eq(5) .stop().show().animate({left: imgW *1, top: imgH*0},300);
                        $galLi.eq(7) .stop().show().animate({left: imgW *2, top: imgH*0},300);
                        $galLi.eq(9) .stop().show().animate({left: imgW *3, top: imgH*0},300);
                        $galLi.eq(11).stop().show().animate({left: imgW *0, top: imgH*1},300);
                        $galLi.eq(12).stop().show().animate({left: imgW *1, top: imgH*1},300);
                        $galLi.eq(13).stop().show().animate({left: imgW *2, top: imgH*1},300);
                        $galLi.eq(14).stop().show().animate({left: imgW *3, top: imgH*1},300);

                    
                    }


                    $galCnt.eq(4).addClass('addZoom');
                    $galCnt.eq(5).addClass('addZoom');
                    $galCnt.eq(7).addClass('addZoom');
                    $galCnt.eq(9).addClass('addZoom');
                    $galCnt.eq(11).addClass('addZoom');
                    $galCnt.eq(12).addClass('addZoom');
                    $galCnt.eq(13).addClass('addZoom');
                    $galCnt.eq(14).addClass('addZoom');

    

                }
                else if(btnNum == 2){
                    n = 5;
                    rows    = Math.ceil(n/cols);
                    $galUl.css({width: winW, height:imgH*rows});
                    $galLi.css({width: imgW, height:imgH});

                    $galCnt.removeClass('addZoom'); 
                

                    if(cols == 4){
                      

  
                        $galLi.eq(13) .stop().show().animate({left: imgW *0, top: imgH*0},300);
                        $galLi.eq(5) .stop().show().animate({left: imgW *1, top: imgH*0},300);
                        $galLi.eq(6) .stop().show().animate({left: imgW *2, top: imgH*0},300);
                        $galLi.eq(7) .stop().show().animate({left: imgW *3, top: imgH*0},300);
                        $galLi.eq(11).stop().show().animate({left: imgW *0, top: imgH*1},300);
                        $galLi.eq(9).stop().show().animate({left: imgW *1, top: imgH*1},300);
                        $galLi.eq(12).stop().show().animate({left:  imgW *2, top: imgH*1},300);
                        $galLi.eq(15).stop().show().animate({left:  imgW *3, top: imgH*1},300);
                        
                    }


                    $galCnt.eq(5).addClass('addZoom');
                    $galCnt.eq(6).addClass('addZoom');
                    $galCnt.eq(7).addClass('addZoom');
                    $galCnt.eq(15).addClass('addZoom');
                    $galCnt.eq(9).addClass('addZoom');
                    $galCnt.eq(11).addClass('addZoom');
                    $galCnt.eq(12).addClass('addZoom');
                    $galCnt.eq(13).addClass('addZoom');




 
                    

                }
                else if(btnNum == 3){
                    n = 8;
                    rows    = Math.ceil(n/cols);
                    $galUl.css({width: winW, height:imgH*rows});
                    $galLi.css({width: imgW, height:imgH});

                    $galCnt.removeClass('addZoom');
              

                    if(cols == 4){
                      
                        $galLi.eq(14) .stop().show().animate({left: imgW *0, top: imgH*0},300);
                        $galLi.eq(8) .stop().show().animate({left: imgW *1, top: imgH*0},300);
                        $galLi.eq(7) .stop().show().animate({left: imgW *2, top: imgH*0},300);
                        $galLi.eq(9) .stop().show().animate({left: imgW *3, top: imgH*0},300);

                    }

                    $galCnt.eq(14).addClass('addZoom');
                    $galCnt.eq(8).addClass('addZoom');
                    $galCnt.eq(7).addClass('addZoom');
                    $galCnt.eq(9).addClass('addZoom');

       

                }
                else if(btnNum == 4){
                    n = 5;
                    rows    = Math.ceil(n/cols);
                    $galUl.css({width: winW,  height:imgH*rows});
                    $galLi.css({width: imgW, height:imgH});

                    $galCnt.removeClass('addZoom'); 
            

                    if(cols == 4){
                      
                        $galLi.eq(15) .stop().show().animate({left: imgW *0, top: imgH*0},300);
                        $galLi.eq(9) .stop().show().animate({left: imgW *1, top: imgH*0},300);
                        $galLi.eq(11) .stop().show().animate({left: imgW *2, top: imgH*0},300);
                        $galLi.eq(14) .stop().show().animate({left: imgW *0, top: imgH*1},300);
                        $galLi.eq(8) .stop().show().animate({left: imgW *3, top: imgH*0},300);
                        $galLi.eq(10) .stop().show().animate({left: imgW *1, top: imgH*1},300);

                    }

                    $galCnt.eq(15).addClass('addZoom');
                    $galCnt.eq(9).addClass('addZoom');
                    $galCnt.eq(11).addClass('addZoom');
                    $galCnt.eq(14).addClass('addZoom');
                    $galCnt.eq(8).addClass('addZoom');
                    $galCnt.eq(10).addClass('addZoom');

                }
            }
                responseGalFn();

                $(window).resize(function(){
                    responseGalFn();
                });


                //갤러리 버튼 이벤트
                $galBtn.each(function(idx){
                    $(this).on({
                        click:function(){
                            btnNum = idx;
                            responseGalFn();
                            $galBtn.removeClass('addNav');
                            $(this).addClass('addNav');
                        }
                    });
                });
            
            


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

    gallery.init();

})(jQuery);