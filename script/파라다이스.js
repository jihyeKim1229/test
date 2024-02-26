$(function (){
  $(".clickmenu").click(function(){
    $(".mobile_menu").animate({
      right : '0'
    },500)
  });
  $(".close_btn").click(function(){
    $(".mobile_menu").animate({
      right : '-100%'
    })
  });

  $(".specialoffers .event1 .img1").on({
    mouseover : function(){
      $(".specialoffers .event1 .img1").css({
        scale : '120%'
      })
    },
    mouseout : function(){
      $(".specialoffers .event1 .img1").css({
        scale : '100%'
      })
    }
  });

  $(".specialoffers .event2 .img2").on({
    mouseover : function(){
      $(".specialoffers .event2 .img2").css({
        scale : '120%'
      })
    },
    mouseout : function(){
      $(".specialoffers .event2 .img2").css({
        scale : '100%'
      })
    }
  });

  $(".specialoffers .event3 .img3").on({
    mouseover : function(){
      $(".specialoffers .event3 .img3").css({
        scale : '120%'
      })
    },
    mouseout : function(){
      $(".specialoffers .event3 .img3").css({
        scale : '100%'
      })
    }
  });

  $(".specialoffers .event4 .img4").on({
    mouseover : function(){
      $(".specialoffers .event4 .img4").css({
        scale : '120%'
      })
    },
    mouseout : function(){
      $(".specialoffers .event4 .img4").css({
        scale : '100%'
      })
    }
  });
  ///////////////////////
})