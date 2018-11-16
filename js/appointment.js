($(function(){
    var domObj={
        btnWrap  : $('.container .caption'),
        register : $('.container .caption .register'),
        introduce : $('.container .caption .introduce'),
        rule : $('.container .caption .rule'),
        stopMessage : $('.container .caption .stopMessage'),
        cancel : $('.container .caption .cancel'),
        registerWrap : $('.container .information_table .register_wrap'),
        introduceWrap : $('.container .information_table .introduce_wrap'),
        ruleWrap : $('.container .information_table .rule_wrap'),
        stopMessageWrap : $('.container .information_table .stopMessage_wrap'),
        cancelWrap : $('.container .information_table .cancel_wrap'),
        informationTable : $('.information_table')
    };
    domObj.btnWrap.on('click','span',function(){
        $(this).parent('.container .caption').children().removeClass('active');
        $(this).addClass('active');
        domObj.informationTable.children().addClass('display_none');
        domObj[$(this).attr('class').slice(0,-7)+'Wrap'].removeClass('display_none');
    })
}));