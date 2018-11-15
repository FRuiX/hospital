($(function(){
     var hospitalType = '全部';
     var hospitalLevel = '全部';
     var hospitalArea = '全部';
//     当筛选条件被点击的时候 高亮；
    AjaxRemoteGetData.getHospitalArrByFilter(hospitalType,hospitalLevel,hospitalArea);
    $('.container .group').on('click',function(e){
        $(this).children('.condition').removeClass('active');
        $(e.target).addClass('active');
        hospitalType = $('.container .group').eq(0).find('.active').text();
        hospitalLevel = $('.container .group').eq(1).find('.active').text();
        hospitalArea = $('.container .group').eq(2).find('.active').text();
        AjaxRemoteGetData.getHospitalArrByFilter(hospitalType,hospitalLevel,hospitalArea);
        var hospitalListGroup = AjaxRemoteGetData.getHospitalArrByFilter(hospitalType,hospitalLevel,hospitalArea);
        template(hospitalListGroup)
    });
//  信息展示
    function template(hospitalListGroup){
        $(".hospital-list").empty();
        for(var index = 1 ;index < hospitalListGroup.length;index++){
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
                "            </div>")
            $(".hospital-list").append(el);
        }

    }

}));