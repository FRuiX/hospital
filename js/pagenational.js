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
//    将所有事件绑定在筛选按钮点击上
    $('.container .group').on('click',function(e){
        $(this).children('.condition').removeClass('active');
        $(e.target).addClass('active');
        getHospitalListBycondition('.container .group');
        allPageCount(getHospitalListBycondition('.container .group'));
        currentPageActive(1);
        e.preventDefault();
    });
    //页面按钮被点击执行高亮，并且返回当前页面值
    $('.page-wrap').on('click',function getCurrent(e){
        // debugger;
        currentPageActive($(e.target).text());
        template(getHospitalListBycondition('.container .group'),$(e.target).text()-1);
        return false;
    });
    //分页条的页数确定
    function allPageCount(arr){
        var length = Math.round(arr.length/3);
        $('.page-wrap').empty();
        for(var index = 1;index<length+1;index++){
            var el = $('<a href="" class="page">'+index+'</a>');
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
        for(index = current*3 ;index < current*3+3;index++){
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
                "                <a href=\"\" class=\"button\">&nbsp;</a>\n" +
                "            </div>");
            $(".hospital-list").append(el);
        }

    }

}));