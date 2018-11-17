($(function(){
    var btnPre = $('.time_table .left .btn_pre');
    var btnNext = $('.time_table .right .btn_next');
    var table = $('.time_table .center table');
    console.log(btnNext,btnPre ,table)
    btnNext.on("click",function(){
        var left = parseInt(table.css('left'));
        if(left>(-600)){
            table.animate({
                left : (left-300)+'px'
            })
        }else{
            table.animate({
                left : '-687px'
            })
        }
    });
    btnPre.on("click",function(){
        var left = parseInt(table.css('left'));
        if(left>=(-89)){
            table.animate({
                left : '0px'
            })

        }else{
            table.animate({
                left : (left+300)+'px'
            })
        }
    })
}));