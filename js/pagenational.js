($(function(){
     var hospitalType = '全部';
     var hospitalLevel = '全部';
     var hospitalArea = '全部';
     var current = 0;
    // 初始化
    AjaxRemoteGetData.getHospitalArrByFilter(hospitalType,hospitalLevel,hospitalArea);
    template(getHospitalListBycondition('.container .group'),current);
    allPageCount(getHospitalListBycondition('.container .group'));
    currentPageActive(1);
    pageCount();
//    将所有事件绑定在筛选按钮点击上
    $('.container .group').on('click','a',function(e){
        $(this).parent('.group').children('.condition').removeClass('active');
        $(this).addClass('active');
        getHospitalListBycondition('.container .group');
        allPageCount(getHospitalListBycondition('.container .group'));
        currentPageActive(1);
        template(getHospitalListBycondition('.container .group'),0);
        pageCount();
        e.preventDefault();
    });
    //页面按钮被点击执行高亮，并且返回当前页面值
    $('.page-wrap').on('click',function getCurrent(e){
        currentPageActive($(e.target).text());
        template(getHospitalListBycondition('.container .group'),$(e.target).text()-1);
        return false;
    });

    //点击上下页切换
    $('.pagenation .item-pre').on('click',function(){
        current = $('.pagenation').find('.page_active').text()-1;
        if(current===0){
            current =4;
        }
        currentPageActive(current);
        template(getHospitalListBycondition('.container .group'),current-1);
        return false;
    });

    $('.pagenation .item-next').on('click',function(){
        current =parseInt($('.pagenation').find('.page_active').text())+1;
        console.log(current)
        if(current>Math.round(getHospitalListBycondition('.container .group').length/3)){
            current =1;
        }
        currentPageActive(current);
        template(getHospitalListBycondition('.container .group'),current-1);
        return false;
    });
    //点击首位页按钮
    $('.pagenation .item-first').on('click',function(){
        current = 1;
        currentPageActive(current);
        template(getHospitalListBycondition('.container .group'),current-1);
        return false;
    });

    $('.pagenation .item-last').on('click',function(){
        current = Math.round(getHospitalListBycondition('.container .group').length/3);
        currentPageActive(current);
        template(getHospitalListBycondition('.container .group'),current-1);
        return false;
    });
    //共计多少页
    function pageCount(){
        $('.pagenation .item-count').text('共计'+Math.round(getHospitalListBycondition('.container .group').length/3)+'页')
    }

     //输入页数进入相应的页面
    $('.pagenation .input-submit').on('click',function(){
        current = $('.pagenation .input-page').val();
        var regexp=/^[0-9]*$/;
        console.log(regexp.test(current));
        if(regexp.test(current) && current>0 &&current <= Math.round(getHospitalListBycondition('.container .group').length/3)){
            currentPageActive(current);
            template(getHospitalListBycondition('.container .group'),current-1);
            $('.pagenation .input-page').val('');
            return false;
        }else{
            $('.pagenation .input-page').val('');
            return false;
        }

    });

    //分页条的页数确定
    function allPageCount(arr){
        var length = Math.round(arr.length/3);
        $('.page-wrap').empty();
        for(var index = 1;index<length+1;index++){
            var el = $('<span class="page">'+index+'</span>');
            $('.page-wrap').append(el);
        }
    }
    //当前页按钮高亮
    function currentPageActive(current){
        $('.page').removeClass('page_active').eq(current-1).addClass('page_active');
    }












//  通过筛选出的信息进行展示展示
    function getHospitalListBycondition(selector){
        hospitalType = $(selector).eq(0).find('.active').text();
        hospitalLevel = $(selector).eq(1).find('.active').text();
        hospitalArea = $(selector).eq(2).find('.active').text();
        AjaxRemoteGetData.getHospitalArrByFilter(hospitalType,hospitalLevel,hospitalArea);
        var hospitalListGroup = AjaxRemoteGetData.getHospitalArrByFilter(hospitalType,hospitalLevel,hospitalArea);
        return hospitalListGroup
    }
    //每一页展示的信息添加到模版上
    function template(hospitalListGroup,current){
        $(".hospital-list").empty();
        hospitalListGroup = hospitalListGroup.slice(1);
        var index = 0;

        if(hospitalListGroup.length>=1){
            var last = current*3+3;
            if(last >hospitalListGroup.length ){
                last = hospitalListGroup.length;
            }
            for(index = current*3 ;index < last;index++){
                var el = $("<div class=\"hospital-group\">\n" +
                    "            <img src=\""+hospitalListGroup[index][6]+"\" >\n" +
                    "            <div class=\"message\">\n" +
                    "                <div class=\"name\">\n" +
                    "                    <span class=\"hospital-name\">"+hospitalListGroup[index][3]+"</span>\n" +
                    "                    <span class=\"hospital-level\">"+hospitalListGroup[index][1]+"</span>\n" +
                    "                </div>\n" +
                    "                <div class=\"time\">"+hospitalListGroup[index][7]+"</div>\n" +
                    "                <div class=\"phone\">"+hospitalListGroup[index][5]+"</div>\n" +
                    "                <div class=\"address\">"+hospitalListGroup[index][4]+"</div>\n" +
                    "                <a href=\"./appointment.html\" class=\"button\">&nbsp;</a>\n" +
                    "            </div>");
                $(".hospital-list").append(el);
            }
        }


    }

}));