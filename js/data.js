var storage = {};
storage.hospital = [

	['area','level','type','name','address','phone','imgUrl','time'],

	['朝阳区','三级甲等','卫生部直属医院','首都儿科研究所附属儿童医院','北京市朝阳区雅宝路2号','010-85695756','img/hospital-1.jpg','14:30'],

	['朝阳区','三级甲等','卫生部直属医院','中日友好医院','北京市朝阳区樱花东路2号','84205288','img/hospital-2.jpg','8:30'],
	['西城区','三级甲等','卫生部直属医院','首都医科大学附属北京友谊医院','北京市西城区永安路95号','63016616','img/hospital-3.jpg','9:30'],
	['朝阳区','三级甲等','卫生部直属医院','首都医科大学附属北京地坛医院B附属','北京市朝阳区樱花东路2号','84205288','img/hospital-4.jpg','8:30'],
	['朝阳区','三级合格','北京区县属医院','空军总医院','北京市朝阳区樱花东路2号','84205288','img/hospital-5.jpg','8:30'],
	['海淀区','三级合格','北京区县属医院','航天中心医院(原721医院)','北京市海淀区玉泉路15号','59971160','img/hospital-6.jpg','8:30'],
	['丰台区','三级甲等','北京区县属医院','北京中医药大学东方医院','北京丰台区方庄芳星园一区6号','67689655','img/hospital-1.jpg','8:30'],

	['丰台区','三级合格','北京区县属医院','北京电力医院','北京市丰台区太平桥西里甲1号','84205288','img/hospital-2.jpg','8:30'],
	['顺义区','三级甲等','北京区县属医院','北京中医医院顺义医院','北京市顺义区站前东街5号','84205288','img/hospital-3.jpg','8:30'],
	['通州区','三级甲等','其他','首都医科大学附属北京潞河医院三级综合医院','北京市通州区新华南路82号','69543901','img/hospital-4.jpg','8:30'],
	
];

storage.department = [
	['hospitalName', ['departmentName'] ],

	['首都儿科研究所附属儿童医院',['儿科a','儿科b','儿科d'] ],
	['中日友好医院',['科室a','科室b','科室c','科室d'] ],

	['首都医科大学附属北京友谊医院', ['departmentName-1'] ],
	['首都医科大学附属北京地坛医院B附属', ['departmentName-2'] ],
	['空军总医院',['departmentName-3'] ],
	['航天中心医院(原721医院)', ['departmentName-4'] ],
	['北京中医药大学东方医院', ['departmentName-5'] ],
	['北京电力医院', ['departmentName-6'] ],
	['北京中医医院顺义医院', ['departmentName-7'] ] ,
	['首都医科大学附属北京潞河医院三级综合医院', ['departmentName-8'] ] 

]
var AjaxRemoteGetData = {};
AjaxRemoteGetData.getDistinctArea = function() {
	var area = ["医院地区"];
	var map = {};
	for(var i = 1;i<storage.hospital.length; i++){
		var _area = storage.hospital[i][0];
		map[_area] = 1;
	}
	for(var k in map){
		area.push(k);
	}
	return area;
}
// console.log(AjaxRemoteGetData.getDistinctArea())

AjaxRemoteGetData.getLeveByArea  = function( area ){
	var level = ["医院等级"];
	var map = {};
	for(var i = 1; i <storage.hospital.length; i++){
		
		if(area === storage.hospital[i][0]){
			var _level = storage.hospital[i][1]; 
			map[_level] = 1;
		}
	}
	for(var k in map){
		level.push(k)
	}
	return level;
}
// console.log(AjaxRemoteGetData.getLeveByArea("朝阳区"));

AjaxRemoteGetData.getNameByAreaAndLevel = function( area , level ){
	var name = ["医院名称"];
	var map = {};
	for(var i = 1; i <storage.hospital.length; i++){
		
		if(area === storage.hospital[i][0] && level === storage.hospital[i][1]){
			var _name = storage.hospital[i][3]; 
			map[_name] = 1;
		}
	}
	for(var k in map){
		name.push(k)
	}
	return name;
}
// console.log(AjaxRemoteGetData.getNameByAreaAndLevel("朝阳区","三级合格"))


AjaxRemoteGetData.getDepartmentArrByHospitalName = function(name){
	var department = ["医院部门"];
	for(var i = 1; i <storage.hospital.length; i++){
		if(name === storage.department[i][0]){
			var _department = storage.department[i][1]; 
			department.push.apply(department,_department)
		}
	}

	return department;
}

// console.log(AjaxRemoteGetData.getDepartmentArrByHospitalName('首都儿科研究所附属儿童医院'))
AjaxRemoteGetData.getHospitalArrByFilter=function(type,level,area){
	var hospitalList = ['医院列表'];
	for(var i = 1; i< storage.hospital.length ;i++){
		var _type = storage.hospital[i][2];
		var _level = storage.hospital[i][1];
		var _area = storage.hospital[i][0];
		if(
			(type===_type || type ==="全部")
			&& (level === _level || level ==="全部")
			&& (area === _area || area === "全部")
        ){
			hospitalList.push(storage.hospital[i])
		}
	}
	return hospitalList;
};
// console.log(AjaxRemoteGetData.getHospitalArrByFilter("全部","三级合格","全部"));