(function ($) {

    var notice = {

    
        init: function () {
           
      
            this.section1Fn();

            this.goTopFn();
            this.quickMenuFn();

        },

        section1Fn:function(){
            
            var $tbody = $('.board tbody');      
            var $prevBtn = $('.prev-btn');           
            var $nextBtn = $('.next-btn');    
            var $pageBtn = $('.page-btn');  
            var $pageNumberBox = $('.page-number-box ul');  
            
            var a = [];
            var txt = '';
            var list = 8; //한 화면의 목록 갯수

            var total = null; 
            var totalPageNum = null; 
            var pageNumList = 5; //페이지그룹
            var pageGroupNum = Math.ceil(totalPageNum / pageNumList ); 

            var startNum = 0;
            var endNum = list;
            
            var groupCnt = 0; //그룹페이지 다음화살 클릭 시 1씩 증가 카운트 변수
            var groupStartNum = groupCnt * pageNumList;  //그룹 시작번호 0
            var groupEndNum = groupStartNum + pageNumList; //그룹 끝번호 10
            

            function ajaxFn(){
                $.ajax({
                    url:'./data/board.json',
                    dataType:'json',
                    success:function(result){
                        $.each(result.notice,function(idx,obj){

                            a[idx] = [];

                            a[idx][0] = obj.NO;
                            a[idx][1] = obj.제목;
                            a[idx][2] = obj.날짜;
                            a[idx][3] = obj.조회수;

                        });

                        total = a.length;

                        function listOutputFn(){
                            txt ='';
                            $tbody.empty(); //테이블 내용 삭제

                            for(var i=startNum; i<endNum; i++){
                                txt += "<tr>";
                                for(var j=0; j<=3; j++){
                                    txt += "<td>" + a[i][j] + "</td>";
                                }
                                txt +=  "</tr>";
                            }

                            $tbody.html(txt);

                            txt = '';
                            totalPageNum = Math.ceil (total/list);
                        }

                        listOutputFn();

                        groupEndNum = groupStartNum + pageNumList;
                        pageGroupNum = Math.ceil(totalPageNum / pageNumList);

                        function pageNation(){

                            $pageNumberBox.html('');
                            txt = '';

                            console.log('페이지네이션 카운트', groupCnt );

                            groupStartNum = groupCnt * pageNumList;
                            groupEndNum = groupStartNum + pageNumList;

                            console.log(groupStartNum)
                            console.log(groupEndNum)


                            if(groupEndNum > totalPageNum){
                                groupEndNum = totalPageNum;
                            }

                            for(var i=groupStartNum; i<groupEndNum; i++){

                                if(i % pageNumList == 0){
                                    txt += '<li><a href="javascript:" class="page-btn addPage">' + (i+1) + '</a></li>'
                                }
                                else{
                                  txt += '<li><a href="javascript:" class="page-btn">' + (i+1) + '</a></li>'
                                }
                            }

                            $pageNumberBox.html(txt);
                            
                            $pageBtn = $('.page-btn');

                            startNum = (parseInt($pageBtn.eq(0).text())-1) * list;
                            endNum = startNum + list;

                            if(endNum>total){
                                endNum = total;
                            }
                            listOutputFn();

                        }

                        setTimeout(pageNation,100);

                        //좌우 화살 그룹 버튼 클릭 이벤트

                         $prevBtn.on({
                           click:function(){
                             groupCnt--;
                             if(groupCnt<0){
                               groupCnt=0
                               }
                               pageNation(); //그룹 페이지 호출
                             }
                         });

                         $nextBtn.on({
                           click:function(){
                             groupCnt++;
                               if(groupCnt>pageGroupNum-1){
                                 groupCnt=pageGroupNum-1;  
                                 return false; //우측 끝에서 버튼 클릭 취소
                               }
                               
                               pageNation(); 
                             }
                         });    


                         $(document).on('mouseenter','.page-btn',function(){
                             $pageBtn.each(function(idx){
                                 $(this).on({
                                     click:function(e){
                                         e.preventDefault();

                                         $pageBtn.removeClass('addPage');
                                         $(this).addClass('addPage');

                                         startNum = (parseInt($(this).text())-1) * list;
                                         endNum = startNum + list;

                                         if(endNum > total){
                                             endNum = total;
                                         }

                                         listOutputFn();
                                     }
                                 })
                             })
                         })

                    },
                    error:function(){
                        alert('error');
                    }
                })
            }
            ajaxFn();

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

    notice.init();

})(jQuery);