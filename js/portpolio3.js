;
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
                //this.section7Fn();
                //this.section8Fn();
                //this.footerFn();
                //this.smoothScrollFn();
                //this.mouseWheelEventFn();
                //this.modalFn();
                //this.buyModalFn();
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

            }
    }

    portpolio3.init();

})(jQuery);