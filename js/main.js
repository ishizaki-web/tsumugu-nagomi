// backstretch
        $(function () {
            $(".header-bg").backstretch([
                "images/en-harusky-min.jpg",
                "images/kimono-5-min.jpg",
                "images/kasa-02-min.jpg",
                "images/kasa-top-light-min.jpg",
                "images/tirimen1980-min.jpg",
            ], {
                fade: 2500,
                duration: 3000
            });
        });

// headercolor
        $(function () {
            var secPos = $("#sec1").offset().top;
            var color = $(".header a,.copy,.address");
            $(window).scroll(function () {
                if ($(window).scrollTop() > secPos - 400) {
                    $(color).css("color", "#000");
                } else {
                    $(color).css("color", "#fff");
                }
            });
          });

// slick js
        $(function () {
          $(".slick-box").slick({
              autoplay: true,
              arrows: true,
              dots: true,
              slidesToShow: 3,
              slidesToScroll: 1,
              autoplaySpeed: 4000,
              speed: 2000,
              responsive: [{
                      breakpoint: 1024,
                      setting: {
                          slidesToShow: 2,
                      }
                  },
                  {
                      breakpoint: 640,
                      settings: {
                          slidesToShow: 1,
                          arrows: false,
                      }
                  },
              ]
          });
      });

      // TOP BACKボタン
    
      $(function() {
        var topBtn = $('#page-top');    
        topBtn.hide();
        //スクロールが500に達したらボタン表示
        $(window).scroll(function () {
            if ($(this).scrollTop() > 500) {
                topBtn.fadeIn();
            } else {
                topBtn.fadeOut();
            }
        });
        
        //スクロールしてトップ
        topBtn.click(function () {
            $('body,html').animate({
                scrollTop: 0
            }, 500);
            return false;
        });
    });

    

// humburger btn  
        $(function () {
            $(".btn-open").on("click", function () {
                $(this).toggleClass("active");
                $(".header").toggleClass("panel-open");
            });
            $(".header a").click(function () {
                $(".btn-open").removeClass("active");
                $(".header").removeClass("panel-open");
            });
        });
   