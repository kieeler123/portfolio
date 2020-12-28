$(function(){
    /*메뉴바 상단고정*/
      var timer;
        $(".logo>h1").animate({marginTop:"6px"},1400, "swing");
        $(".h1Hide>h1").animate({marginTop:"0px"},1400, "swing");
        $(".h2Hide>h2").animate({marginTop:"0px"},1400, "swing");
        $("#second .item").click(function(){
          console.log($(this).index());
          if($(this).index()==2){
            $(this).append("<img src='img/section2/img01.png'>");
          }else if($(this).index()==3){
            $(this).append("<img src='img/section2/img02.png'>");
          }else if($(this).index()==4){
            $(this).append("<img src='img/section2/img03.png'>");
          }else if($(this).index()==5){
            $(this).append("<img src='img/section2/img04.png'>");
          }
          // for(var i=0; i<$(this).index(); i++){
          //   $(this).append("<img src='img/section2/img0"+i+".png'>");
          // }
        })
        
        $(window).scroll(function(){
          if($(this).scrollTop() > $(window).height()){
            $("header").css("position","fixed");
            $("header").css("top","0");
            $("header").css("opacity",".8");
            $("header").css("transition","1.2s");
          }else{
            $("header").css("position","static");
            $("header").css("opacity","1");
          }
          var wHeight = $(window).height();
          var thisScrollTop = $(this).scrollTop();
          $("section").each(function(){
            var thisOffset = $(this).offset();
            if( thisOffset.top <= thisScrollTop-600 && thisScrollTop <= thisOffset.top + wHeight ){
              // timer = setInterval(function(){
              //   $("#third .item>.img").animate({marginTop:"-2394px"},3000,"swing");
              // })
              $(".item:nth-of-type(2)").addClass("html");
              $(".item:nth-of-type(3)").addClass("css");
              $(".item:nth-of-type(4)").addClass("jQuery");
              $(".item:nth-of-type(5)").addClass("sass");
            }
          })
        })
        $("#third a").hover(function(){
          console.log($(this).index());
          if($(this).index()==1){
            $(".img:nth-of-type(2)").fadeOut();
            $(".img:nth-of-type(1)").fadeIn();
          }else if($(this).index()==2){
            $(".img:nth-of-type(1)").fadeOut();
            $(".img:nth-of-type(2)").fadeIn();      
          }
        })
  
      /*전체동작*/
      window.onload = function(){
        var wid = document.querySelectorAll(".ani");
        var pos = 100;
        var mid = 1;
        var id = setInterval(mov,10);
  
        function mov(){
          pos=pos+1*mid;
          if(pos>=200||pos<=100){mid=mid*(-1);}
          for(var i=0; i<wid.length; i++){wid[i].style.width = pos+'px';}
        }
      }
  
      // $(function(){
      // $('.ani').animate({width:300});
      // $('.ani').animate({width:0});
      // });
  
      /*.avi 첫번째꺼동작*/
      // window.onload = function(){
      //     var wid = document.getElementsByClassName("ani")[0];
      //     var pos=0;
      //     var min=200;
      //     var id = setInterval(mov,10);
      //     function mov(){
      //         if(pos>=200){
      //           min--;
      //           wid.style.width = min+"px";
      //         }else if(pos>=0){
      //           pos++;
      //           wid.style.width = pos+"px";
      //         }
      //     }
      // }
  
  
      //스크롤 위치 확인
      // $(window).scroll(function () {
        // var scrollValue = $(document).scrollTop();
        // console.log(scrollValue);
      // });
  
      /*마지막 스크롤 위치*/
      // window.addEventListener('scroll', () => {
        //    let scrollLocation = document.documentElement.scrollTop; // 현재 스크롤바 위치
        //    let windowHeight = window.innerHeight; // 스크린 창
        //    let fullHeight = document.body.scrollHeight; //  margin 값은 포함 x
      //
        //    if(scrollLocation + windowHeight >= fullHeight){
          //        console.log('끝')
        //       }
      //    })
})