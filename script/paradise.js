$(function (){
  $(".clickmenu").click(function(){
    $(".mobile_menu").css({
      right : '0',
      display : 'block',
      transition: '0.2s'
    }),
    $("body").css({
      height : '100vh',
      overflow: 'hidden'
    })
  });
  $(".close_btn").click(function(){
    $(".mobile_menu").css({
      right : '-100%',
    })
    $("body").css({
      height : '100%',
      overflow : 'auto'
    })
  });

  $(".specialoffers .event1 .img1").on({
    mouseover : function(){
      $(".specialoffers .event1 .img1").css({
        scale : '120%',
        transition: '0.2s'
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
        scale : '120%',
        transition: '0.2s'
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
        scale : '120%',
        transition: '0.2s'
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
        scale : '120%',
        transition: '0.2s'
      })
    },
    mouseout : function(){
      $(".specialoffers .event4 .img4").css({
        scale : '100%'
      })
    }
  });

  $(window).resize(function(){
    let widthsize = innerWidth

    if(widthsize >= 1400){
      $(".mobile_menu").css({
        right : '-100%'
      })
    }
  });

  $(window).scroll(function(){
    let screenH = $(window).scrollTop();
    if(screenH>200){
      $(".top_btn").fadeIn();
    }else{
      $(".top_btn").fadeOut();
    }
  });

  $(".top_btn").click(function(){
    $(window).scrollTop(0)
  });


  let win = $(window)
  let header = $("header")
  let spot = header.offset().top
  console.log(spot)

  win.scroll(function(){
    if(win.scrollTop()>spot){
      header.addClass("fix");
    } else{
      header.removeClass("fix");
    }
  });
  ///////////////////////
})