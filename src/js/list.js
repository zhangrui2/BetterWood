define(["jquery","js/screen","js/calendar","js/dialog"],function($, screen, calendar, dialog){
    var _cal = new calendar({});
    var Dialog = new dialog();
    var s = new screen({
        brand:["北京天安瑞安酒店","北京汉庭酒店","北京翠微酒店","广州天安瑞安酒店"],
        price:[200,300,400,500],
        stars:["一星","二星","三星","四星","五星"]
    });

    function renderList(data){
        var str = "";
        $(data).each(function(i,c){
            str += '<li class="list-item" dataDistance="'+ c.distance +'" dataBrand="'+ c.name +'" dataStars="'+ c.stars +'" dataPrice="'+ c.low_price/100+ '">'+
                '<div class="list-img"><img src="'+ c.image+'" alt=""></div>'+
                '<div class="list-detail">'+
                '<p>'+ c.name+'</p>'+
                '<p><span><em>4.6分</em><em class="list-icon color-y">礼</em><em class="list-icon color-r">促</em><em class="list-icon color-b">返</em></span>'+
                '<span><em class="list-price">￥'+ c.low_price/100 +'</em><em>起</em></span></p>'+
                '<p class="service-info"><span class="">'+ c.stars+'</span><span></span><span>P</span></p>'+
                '<p><span>'+ c.addr+'</span><span>'+ c.distance/1000 +'km</span></p></div></li>'
        });
        return str;
    }

    /*$.ajax({
        url:"data/hotel.json",
        type:"post",
        dataType:"json",
        timeout: 7000,
        success:function(data){
            var _data = data.result.hotel_list;
            $(".list-wrap ul").html(renderList(_data));
        },
        error:function(info){

        }
    });*/


    $(".list-bar").on('click',"li",function(){

        var flag = $(this).attr("data");

        if($(this).hasClass("down-arrow")){
            s.hide();
        }else{
            $(this).addClass("down-arrow").removeClass("up-arrow").siblings().addClass("up-arrow").removeClass("down-arrow");
            s.show($(this).attr("data"));
        }

    });


    var startDate,endDate;
    $(".list-date-in").on('click',function(){//xxxx-xx-xx
        var _date = new Date(),
            _span = $(this).find("span");
        var txt = _date.getFullYear() +"-"+ _span.text();
        _cal.show({
            _class : ".list-date-in span",
            _date: txt,
            callback:function(data){
                startDate = data;
                _span.text(data.substr(5));
                if(!check(startDate,endDate)){
                    Dialog._alert("出发日期不能晚于到达日期", function () {

                    })
                }
            }
        });
    });

    $(".list-date-out").on('click',function(){//xxxx-xx-xx
        var _date = new Date(),
            _span = $(this).find("span");
        var txt = _date.getFullYear() +"-"+ _span.text();
        _cal.show({
            _class : ".list-date-out span",
            _date: txt,
            callback:function(data){
                endDate = data;
                _span.text(data.substr(5));
                if(!check(startDate,endDate)){
                    Dialog._alert("出发日期不能晚于到达日期", function () {

                    })
                }
            }
        });
    });

    function check(s,e){
        if( s==undefined || e==undefined )return true;
        var _s = new Date(s);
        var _e = new Date(e);
        return _s-_e <= 0;
    }

});