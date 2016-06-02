require.config({
    baseUrl: "../src",
    paths: {
        "jquery": "lib/jQuery",
        "common": "js/common"
    }

});

// 开始使用jQuery 模块
require(["jquery", "js/index", "js/list","js/fillorder"], function ($, C) {
    //console.log(C);
});