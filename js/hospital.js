
($(function(){
	//搜索框
	var uiSearch = {
		select : document.getElementsByClassName('ui-search-select')[0],
		option : document.getElementsByClassName('ui-search-select-option')[0],
		optionList : document.getElementsByClassName('ui-search-select-optionList')
	}
	uiSearch.select.onclick = clickBlock;
	for(var i=0; i<uiSearch.optionList.length; i++){
		uiSearch.optionList[i].onclick = clickNone;
	}
	function clickBlock(){
		uiSearch.option.style.display = 'block';
	}
	function clickNone(){
		uiSearch.option.style.display = 'none';
		uiSearch.select.innerHTML = this.innerHTML;
	}
	//四级联动菜单
	var linkage = {
		area : $('.area'),
		level : $('.level'),
		name : $('.name'),
		department : $('.department'),
	}
	//获取一级菜单下的option，并创建节点
	function linkageAreaOption(){
		var length = AjaxRemoteGetData.getDistinctArea().length
		for(var i=0; i<length; i++){
			var item  = AjaxRemoteGetData.getDistinctArea()[i];
			var ele = $('<option>'+item+'</option>');
			linkage.area.append(ele);
		}
	}
	linkageAreaOption();
	//当一级菜单选项完成的时候获取 select的value值
	// 将value值传递到第二级 并且初始化后面的级联下拉框
	linkage.area.on('change',function(){
		var length = AjaxRemoteGetData.getLeveByArea(linkage.area.val()).length;
		linkage.level.empty();
		linkage.name.empty();
		linkage.department.empty();
		linkage.name.append('<option>医院名称</option>');
		linkage.department.append('<option>医院部门</option>');
		for(var i=0; i<length; i++){
			var item  = AjaxRemoteGetData.getLeveByArea(linkage.area.val())[i];
			var ele = $('<option>'+item+'</option>');
			linkage.level.append(ele);
		}
	})
	//当二级菜单完成选择后 ，同上
	linkage.level.on('change',function(){
		var length = AjaxRemoteGetData.getNameByAreaAndLevel(linkage.area.val(),linkage.level.val()).length;
		linkage.name.empty();
		linkage.department.empty();
		linkage.department.append('<option>医院部门</option>');
		for(var i=0; i<length; i++){
			var item  = AjaxRemoteGetData.getNameByAreaAndLevel(linkage.area.val(),linkage.level.val())[i];
			var ele = $('<option>'+item+'</option>');
			linkage.name.append(ele);
		}
	})
	//三级菜单选择后
	linkage.name.on('change',function(){
		var length = AjaxRemoteGetData.getDepartmentArrByHospitalName(linkage.name.val()).length;
		linkage.department.empty();
		for(var i=0; i<length; i++){
			var item  = AjaxRemoteGetData.getDepartmentArrByHospitalName(linkage.name.val())[i];
			var ele = $('<option value="'+item+'">'+item+'</option>');
			linkage.department.append(ele);
		}
	})

}))

















