/*
This is empty on purpose! Your code to build the resume will go here.
 */

//$("#main").append("Jiazhen Li");

/*
var awesomeThoughts = "I am Jiazhen and I am AWESOME!";

console.log(awesomeThoughts);

var funThoughts = awesomeThoughts.replace("AWESOME","FUN");

$("#main").append(funThoughts);
*/


var name = "Li Jiazhen";
var role = "Web Developer";

var formattedName = HTMLheaderName.replace("%data%",name);
var formattedRole = HTMLheaderRole.replace("%data%",role);


/*
$("#header").append(formattedName);
$("#header").append(formattedRole);
*/


$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

/*
var skills = ["awesomeness","programming","teaching","JS"];
*/

//$("#main").append(skills.length);

/*
var bio = {
	name:"Li Jiazhen",
	role:"nothing",
	contacts:{
		mobile:"18961720637",
		email:"693293920@qq.com",
		github:"hilook87",
		location:"Wuxi"
	},
	welcomeMessage:"hi,welcome",
	skills:skills,
	bioPic:"images/me.jpg"
};

$("#main").append(bio.name);

*/

/*
var work = {};
work.position = "Application Developer";
work.employer = "CPIC Wuxi";
work.years = 8;
*/

/*
var education = {};
education["name"] = "NUPT";
education["years"] = "2005-2009";
education["city"] = "Nanjing";
*/

//console.log(work[position]);
//console.log(education.name);

/*
$("#main").append(work["position"]);
$("#main").append(education.name);
*/


var work = {
	"jobs":[
		{"employer":"无锡浪潮世科信息技术有限公司","title":"技术支持、软件开发","location":"无锡","dates":"2009/07-2010/05","description":"技术支持，主要负责公司软硬件维修，网络维护，数据分析处理，数据导入，数据整理，后期又做软件外包开发。"},
		{"employer":"无锡郎奇软件有限公司","title":"需求工程师","location":"无锡","dates":"2010/05-2010/10","description":"了解客户的软件需求，编辑成需求说明书和软件规格文档，给开发人员开发。"},
		{"employer":"无锡太平洋人寿","title":"应用开发","location":"无锡","dates":"2010/11-至今","description":"负责公司数据处理和应用程序开发。"}
	]
};


var projects = {
	"projects":[
		{
			"title":"信息管理平台",
			"dates":"2015",
			"description":"分公司的一个主要用于查询各种数据的系统",
			"images":["images/images1.jpg"]
		},
		{
			"title":"电子日志系统",
			"dates":"2016",
			"description":"分公司的一个主要用于业务员登记日志的系统",
			"images":["images/images2.jpg","images/me.jpg"]
		}
	]
};


var bio = {
	"name":"Li Jiazhen",
	"role":"nothing",
	"welcomeMessage":"hi,welcome",
	"bioPic":"images/me.jpg",
	"contacts":{
		"mobile":"18961720637",
		"email":"693293920@qq.com",
		"github":"hilook87",
		"location":"无锡"
	},
	"skills":["awesomeness","programming","teaching","JS"]
};


var education = {
	"schools":[
		{
			"name": "NUPT",
			"location": "Nanjing",
			"degree": "Bachelor",
			"major": ["计算机科学与技术","java"],
			"dates": "2005-2009",
			"url": "http://example.com"
		},
		{
			"name": "test e name",
			"location": "test e city",
			"degree": "test e degree",
			"major": ["test e major1","test e major2"],
			"dates": "2017",
			"url": "http://example.com"
		}
	],
	"onlineCourses":[
		{
			"title": "Web Develop",
			"school": "Udacity",
			"dates": "2017",
			"url": "http://www.udacity.com"
		},
		{
			"title": "Test Develop",
			"school": "TestUdacity",
			"dates": "2016",
			"url": "http://www.XXX.com"
		}
	]
};


//var HTMLcontactGeneric = '<li class="flex-item"><span class="orange-text">%contact%</span><span class="white-text">%data%</span></li>';

var formattedMobile = HTMLmobile.replace("%data%",bio.contacts.mobile);
var formattedEmail = HTMLemail.replace("%data%",bio.contacts.email);
var formattedGithub = HTMLgithub.replace("%data%",bio.contacts.github);
var formattedLocation = HTMLlocation.replace("%data%",bio.contacts.location);

//$("#header").append(HTMLcontactGeneric);
$("#header").append(formattedMobile);
$("#header").append(formattedEmail);
$("#header").append(formattedGithub);
$("#header").append(formattedLocation);


var formattedBioPic = HTMLbioPic.replace("%data%",bio.bioPic);
var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage);

$("#header").append(formattedWelcomeMsg);
$("#header").append(formattedBioPic);

if(bio.skills.length > 0){
	$("#header").append(HTMLskillsStart);

//	var formattedSkill;

	for(var i = 0;i < bio.skills.length;i++ ){
		var formattedSkill = HTMLskills.replace("%data%",bio.skills[i]);
		$("#skills").append(formattedSkill);
	}
	
};

function displayWork(){
	//不要使用for in
	//for(job in work.jobs){
	for(var job = 0; job <  work.jobs.length; job++){	
		$("#workExperience").append(HTMLworkStart);

		var formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[job].title);
		var formattedEmployerTitle = formattedEmployer+formattedTitle;
		$(".work-entry:last").append(formattedEmployerTitle);

		var formattedDates = HTMLworkDates.replace("%data%",work.jobs[job].dates);
		$(".work-entry:last").append(formattedDates);

		var formattedDescription = HTMLworkDescription.replace("%data%",work.jobs[job].description);
		$(".work-entry:last").append(formattedDescription);	

	}
};


displayWork();

/*
$(document).click(function(loc) {
  // 在此处编写你的代码
  var x = loc.pageX;
  var y = loc.pageY;

  logClicks(x,y);

});
*/

//国际化
function inName(name){
	name = name.trim().split(" ");
	console.log(name);
	name[1] = name[1].toUpperCase();
	name[0] = name[0].slice(0,1).toUpperCase() + 
		name[0].slice(1).toLowerCase();

	return name[0]+" "+name[1];
}

$('#main').append(internationalizeButton);

//you want to see a map? here's a map.
$('#mapDiv').append(googleMap);


//封装
projects.display = function(){
	for(project in projects.projects){
		$("#projects").append(HTMLprojectStart);

		var formattedTitle = HTMLprojectTitle.replace("%data%",projects.projects[project].title);
		$(".project-entry:last").append(formattedTitle);

		var formattedDates = HTMLprojectDates.replace("%data%",projects.projects[project].dates);
		$(".project-entry:last").append(formattedDates);

		var formattedDescription = HTMLprojectDescription.replace("%data%",projects.projects[project].description);
		$(".project-entry:last").append(formattedDescription);

		if(projects.projects[project].images.length > 0){
			for(image in projects.projects[project].images){
				var formattedImage = HTMLprojectImage.replace("%data%",projects.projects[project].images[image]);
				$(".project-entry:last").append(formattedImage);
			}
		}

	}
};

projects.display();


var HTMLschoolStart = '<div class="education-entry"></div>';
var HTMLschoolName = '<a href="#">%data%';
var HTMLschoolDegree = ' -- %data%</a>';
var HTMLschoolDates = '<div class="date-text">%data%</div>';
var HTMLschoolLocation = '<div class="location-text">%data%</div>';
var HTMLschoolMajor = '<em><br>Major: %data%</em>';

var HTMLonlineClasses = '<h3>Online Classes</h3>';
var HTMLonlineTitle = '<a href="#">%data%';
var HTMLonlineSchool = ' - %data%</a>';
var HTMLonlineDates = '<div class="date-text">%data%</div>';
var HTMLonlineURL = '<br><a href="#">%data%</a>';

for(var school = 0; school <  education.schools.length; school++){	

	$("#education").append(HTMLschoolStart);

	var formattedSchoolName = HTMLschoolName.replace("%data%",education.schools[school].name);
	var formattedSchoolDegree = HTMLschoolDegree.replace("%data%",education.schools[school].degree);
	var formattedSchoolTitle = formattedSchoolName+formattedSchoolDegree;

	$(".education-entry:last").append(formattedSchoolTitle);

	var formattedSchoolDates = HTMLschoolDates.replace("%data%",education.schools[school].dates);
	$(".education-entry:last").append(formattedSchoolDates);

	var formattedSchoolLocation = HTMLschoolLocation.replace("%data%",education.schools[school].location);
	$(".education-entry:last").append(formattedSchoolLocation);	

	var formattedSchoolMajor = HTMLschoolMajor.replace("%data%",education.schools[school].major);
	$(".education-entry:last").append(formattedSchoolMajor);		

}


for(var onlineCourse = 0; onlineCourse <  education.onlineCourses.length; onlineCourse++){	

	if(onlineCourse === 0){
		$(".education-entry:last").append(HTMLonlineClasses);
	}
	
	var formattedOnlineTitle = HTMLonlineTitle.replace("%data%",education.onlineCourses[onlineCourse].title);
	var formattedOnlineSchool = HTMLonlineSchool.replace("%data%",education.onlineCourses[onlineCourse].school);
	var formattedOnlineTS = formattedOnlineTitle+formattedOnlineSchool;

	$(".education-entry:last").append(formattedOnlineTS);

	var formattedOnlineDates = HTMLonlineDates.replace("%data%",education.onlineCourses[onlineCourse].dates);
	$(".education-entry:last").append(formattedOnlineDates);

	var formattedOnlineURL = HTMLonlineURL.replace("%data%",education.onlineCourses[onlineCourse].url);
	$(".education-entry:last").append(formattedOnlineURL);

}

//匿名函数
/*
$(document).click(function(loc){
	console.log(loc.pageX,loc.pageY);
});
*/
