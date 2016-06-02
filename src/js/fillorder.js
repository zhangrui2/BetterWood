define(['js/add-customer'],function(add){

    var addCustomer = new add();

    $(".choose-customer-btn").on("click",function(){
        addCustomer.show();
    });

    $(".book-btn").on("click",function(){
        var customerDetail = $(".customer-detail-info");
        var _name = customerDetail.find(".name").val(),
            _idnum = customerDetail.find(".id-num").val();
        var person = {
            name: _name,
            id: _idnum
        };

        var ls = localStorage, arr = [];

        if(ls.getItem("customerHistory") && ls.getItem("customerHistory").length>0){
            arr = JSON.parse(ls.getItem("customerHistory"));
        }
        arr.push(person);

        localStorage.setItem("customerHistory",JSON.stringify(arr));
    })
});