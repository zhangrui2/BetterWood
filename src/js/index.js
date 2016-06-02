define(["lib/fastclick","js/city","js/dialog","js/calendar","js/swiper"],function(FastClick, city, dialog, calendar,swiper){
    FastClick.attach(document.body);
    var City = new city();
    var Dialog = new dialog();
    var Cal = new calendar({});
    var Swiper = new swiper(".banner");

    $(".get-city").on("click",function(){
        City.show("1");
    });

    $(".date-in").on("click",function(){
        var txt = $(this).find(".sel-date-in").text();
        Cal.show({
            _class : ".sel-date-in",
            _date: txt,
            callback:function(){
                //获取相应的文本转为日期对象比较
                /*Dialog._alert("好好学习天天向上",function(){
                    alert("callback called");
                });*/
            }
        });
    });

    $(".date-out").on("click",function(){
        Cal.show({
            _class : ".sel-date-out"
        });
    });

    var dateIn = "",
        dateOut = "",
        city = "",
        hotel = "";
    $(".search-btn").on("click",function(){
         window.location.href = "list.html?dataIn="+dateIn+"&dateOut="+dateOut+"&city="+city+"&hotel="+hotel;
    })
});