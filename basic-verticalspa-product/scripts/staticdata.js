
//const StaticData = "yesy";


const StaticData = {
	constants: {
		appName: "My Website",
		headerLogoImage: { tagname: "img", id: "headerLogoImage", name:"headerLogoImage"
			, src:"images/html5logo.png", onclick:"window.location='index.html';", seq:1, isActive: "Y"},
		headerTitleText: { tagname: "h1", id: "headerTitleText", name:"headerTitleText", innerText:"Sample Industrial Solutions"
		, seq:1, isActive: "Y"},
	},
	menuList: [
		{ id: 1, name:"Home", innerText:"Home", href:"#page1", seq:1, isActive: "Y"},
		{ id: 2, name:"AboutUs", innerText:"About Us", href:"#page2", seq:2, isActive: "Y"},
		{ id: 3, name:"Services", innerText:"Services", href:"#page3", seq:3, isActive: "Y"}
		
		]
};


const PageList = [
		{ id: "page1", name:"Home", seq:1,
			elements : [
			{ seq:1, id: "title1", tagname: "div",  isActive: "Y", name:"Title"
			, innerText:"Sample Industrial Solutions"
			, class:"page-title-small"},
			{ seq:2, id: "title2", tagname: "h2",  isActive: "Y", name:"Title"
			, innerText:"Vision of Sample Industrial Solutions is to save the cost"
			, class:"page-title"},
			{ seq:3, id: "textContent1", tagname: "p",  isActive: "Y", name:"textContent1"
			, innerText:"Save the cost of the Customers by servicing the electronic devices and PCB’s. Also we are guiding our Customers any type of Maintenance and Project requirements"
			, class:"page-content"},
			{ seq:40, id: "imgContent1", tagname: "img",  isActive: "Y", name:"imgContent1"
			, src:"images/page1/pcb.png"
			, class:"page-content"},
			{ seq:41, id: "imgContent2", tagname: "img",  isActive: "Y", name:"imgContent2"
			, src:"images/page1/person-search.png"
			, class:"page-content"},
			]
		},
		{ id: "page2", name:"AboutUs", seq:2,
			elements : [
			{ seq:10, id: "title1", tagname: "div",  isActive: "Y", name:"Title"
			, innerText:"About Us"
			, class:"page-title-small"},
			{ seq:11, id: "title2", tagname: "h2",  isActive: "Y", name:"Title"
			, innerText:"Who Is Sample Industrial Solutions"
			, class:"page-title"},
			{ seq:20, id: "textContent1", tagname: "p",  isActive: "Y", name:"textContent1"
			, innerText:"Many People Just Replace their Industial pcb's & Devices when it has Problems, But We Amen Industrial Solutions are one of a rare kind in Industrial Solutions, we do all kinds of services in Industrial equipments and our Speciality lies in servicing the PCB's, HMI, Servo Drives etc.."
			, class:"page-content"},
			{ seq:30, id: "imgContent1", tagname: "img",  isActive: "Y", name:"imgContent1"
			, src:"images/page2/aboutus.png"
			, class:"page-content"},
			]
		},
		{ id: "page3", name:"services", seq:3,
			elements : [
			{ seq:10, id: "title1", tagname: "div",  isActive: "Y", name:"Title"
			, innerText:"Our Services"
			, class:"page-title-small"},
			{ seq:11, id: "title2", tagname: "h2",  isActive: "Y", name:"Title"
			, innerText:"SERVICE OF INDUSTRIAL ELECTRONICS"
			, class:"page-title"},
			{ seq:20, id: "imgContent1", tagname: "img",  isActive: "Y", name:"imgContent1"
			, src:"images/page3/services1.png"
			, class:"page-content", style: "max-width: 60px;"},
			{ seq:21, id: "textContent1", tagname: "p",  isActive: "Y", name:"textContent1"
			, innerText:"WELDING TIMER CONTROLLER"
			, class:"page-title-small"},
			{ seq:22, id: "ulContent1", tagname: "ul",  isActive: "Y", name:"ulContent1"
			, innerText:"Rexroth timer controller PCB service, Chowel timer controller PCB service"
			, class:"page-list-tick"},
			
			]
		}
		
		];
	


function GetStaticDataNode(nodeName)
{
	//var codeat = str.codePointAt(ipos);
	//alert(codeat);
	//alert(String.fromCodePoint(codeat));
	//return String.fromCodePoint(codeat);
	
	//let letters = Array.from(str);
	//return letters[ipos];
	
	if (StaticData.hasOwnProperty(nodeName)) {
		  console.log("The 'name' node exists.");
		  //return StaticData[nodeName];
		  // return JSON.parse(StaticData[nodeName]); // not working
		  return JSON.parse(JSON.stringify(StaticData[nodeName]));
		} else {
		  console.log("The 'name' node does not exist.");
		  return null;
		}

	
	
}