$(function () {
    $("#denglubtn").click(function () {
        $(".heizi").block();
    });

    $("#closebtn").click(function () {
        $(".heizi").hide();
    });
});

$(function () {
    $(".zhucebtn").click(function () {
        var son = $(".singin");
        var yangshi = son.css("margin-left");
        var yangshizhuanhuan = parseInt(yangshi);
        if (yangshizhuanhuan<0){
            son.animate({"margin-left":"0px"}) ;
        }
        else {
            son.animate({"margin-left":"-400px"}) ;
        }

    })
});

// $(function () {
//     $(".switch").click(function () {
//         var scrollWrapper = $(".scroll-wrapper");
//         var currentLeft = scrollWrapper.css("margin_left");
//         currentLeft = parseInt(currentLeft);
//         if(currentLeft < 0){
//             scrollWrapper.animate({"left":'0'});
//         }else{
//             scrollWrapper.animate({"left":"-400px"});
//         }
//     });
// });
//
// $(function () {
//     $("#zhucebtn").click(function () {
//         var hezihuoqu = $(".singin");
//         var heziyangshi = hezihuoqu.css("margin-left");
//         hezizhuanhuan = parseInt(heziyangshi);
//         if (hezizhuanhuan=0){
//             hezihuoqu.animate({"margin-left":"0px"});
//         }
//         else {
//             hezihuoqu.animate({"margin-left":"-400px"});
//         }
//     })
// });
