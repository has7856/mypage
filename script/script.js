$(function () {
    function autoType(elementClass, typingSpeed){
        var thhis = $(elementClass);
        thhis.css({
          "position": "relative",
          "display": "inline-block"
        });
        thhis.prepend('<div class="cursor" style="right: initial; left:0;"></div>');
        thhis = thhis.find(".text-js");
        var text = thhis.text().trim().split('');
        var amntOfChars = text.length;
        var newString = "";
        thhis.text("|");
        setTimeout(function(){
          thhis.css("opacity",1);
          thhis.prev().removeAttr("style");
          thhis.text("");
          for(var i = 0; i < amntOfChars; i++){
            (function(i,char){
              setTimeout(function() {        
                newString += char;
                thhis.text(newString);
              },i*typingSpeed);
            })(i+1,text[i]);
          }
        },1500);
      }
      
      autoType(".type-js",200);


      // 햄버거 메뉴 이벤트
    $("#header > div").click(function(){
        if($("#burgur").hasClass('on')){
            $("#burgur").removeClass('on');
            $("nav").animate({"right" : "-25%"});
          } else{
            $("#burgur").addClass('on');
            $("nav").animate({"right" : 0});
          }  
    });


    var flag = 0;
    $(".inner-wrap").hide();
    $(".inner-wrap").eq(0).show();
    $(window).on("wheel", function(event){
      var dir = event.originalEvent.wheelDelta;
      if(dir > 0 && flag > 0){
        flag--;
      }else if(flag < 3){
        flag++;
      }
      $(".inner-wrap").eq(flag).delay(400).fadeIn(1000);
    });
    $("#maingnb > li,#fp-nav ul li").click(function(){
      var index = $(this).index();
      flag = index;
      $(".inner-wrap").eq(flag).delay(400).fadeIn(1000);
    });
});

