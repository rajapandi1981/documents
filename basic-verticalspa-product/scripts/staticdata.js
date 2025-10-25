
//const StaticData = "yesy";


const StaticData = {
	constants: {
		appName: "My Website",
		headerLogoImage: { tagname: "img", id: "headerLogoImage", name:"headerLogoImage"
			, src:"images/html5logo.png", onclick:"window.location='demo-index.html';", seq:1, isActive: "Y"},
		headerTitleText: { tagname: "h1", id: "headerTitleText", name:"headerTitleText", innerText:"Sample Industrial Solutions"
		, seq:1, isActive: "Y"},
	},
	menuList: [
		{ id: 1, name:"Home", innerText:"Home", href:"javascript:openMenu('page1','#title1' );", seq:1, isActive: "Y"},
		{ id: 2, name:"AboutUs", innerText:"About Us", href:"javascript:openMenu('page2','#page2' );", seq:2, isActive: "Y"},
		{ id: 3, name:"Services", innerText:"Services", href:"javascript:openMenu('page3','#page3' );", seq:3, isActive: "Y"},
		{ id: 8, name:"ContactUs", innerText:"Contact Us", href:"javascript:openMenu('page8','#page8' );", seq:9, isActive: "Y"},
		
		]
};


const PageList = [
		{ id: "page1", name:"Home", seq:1, type:"verticalelements", class:"slidetobottom",
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
		{ id: "page2", name:"AboutUs", seq:2, type:"verticalelements", class:"slidetoright",
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
		{ id: "page3", name:"services", seq:3, type:"verticalelements", class:"slidetoright",
		addBreaks:1,
			elements : [
			{ seq:10, id: "title1", tagname: "div",  isActive: "Y", name:"Title"
			, innerText:"Our Services"
			, class:"page-title-small"},
			{ seq:11, id: "title2", tagname: "h2",  isActive: "Y", name:"Title"
			, innerText:"SERVICE OF INDUSTRIAL ELECTRONICS"
			, class:"page-title"},
			
			{ seq:21, id: "textContent1", tagname: "p",  isActive: "Y", name:"textContent1"
			, innerText:"WELDING TIMER CONTROLLER"
			, class:"page-title-small"},
			{ seq:22, id: "ulContent1", tagname: "ul",  isActive: "Y", name:"ulContent1"
			, innerText:"Rexroth timer controller PCB service , Chowel timer controller PCB service, Tucker timer controller PCB service, Obara timer controller PCB service, Also we servicing any welding controller make PCB's, Optimized Template"
			, class:"page-list-tick"},
			
			]
		},
		{ id: "page4", name:"services-slide", seq:3, type:"horizontalslideshow"
		, class:"", slidestyle: "max-height: 400px;", isDisplayNumber:true
		, isDisplayCaption:true
		, addBreaks:5,
			elements : [
			{ seq:11, id: "imgContent1", tagname: "img",  isActive: "Y", name:"imgContent1"
			, src:"images/page3/services1.png", captiontext :"Slide 1"
			, class:"slideshow.center-fit"},
			{ seq:12, id: "imgContent1", tagname: "img",  isActive: "Y", name:"imgContent1"
			, src:"images/page3/services2.png", captiontext :"Slide 2"
			, class:"page-content"},
			{ seq:13, id: "imgContent1", tagname: "img",  isActive: "Y", name:"imgContent1"
			, src:"images/page3/services3.png", captiontext :"Slide 3"
			, class:"page-content"},
			{ seq:14, id: "imgContent1", tagname: "img",  isActive: "Y", name:"imgContent1"
			, src:"images/page3/services4.png", captiontext :"Slide 3"
			, class:"page-content"},
			
			
			]
		},
		{ id: "page8", name:"ContactUs", seq:8, type:"verticalelements", class:"slidetoright",
			elements : [
			{ seq:10, id: "title1", tagname: "div",  isActive: "Y", name:"Title"
			, innerText:"Contact Us"
			, class:"page-title-small"},
			{ seq:11, id: "title2", tagname: "h2",  isActive: "Y", name:"Title"
			, innerText:"Get In Touch With Us Now"
			, class:"page-title"},
			{ seq:20, id: "map", tagname: "iframe",  isActive: "Y", name:"Title"
			, src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.049172797469!2d80.17663203600787!3d13.096070187283962!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5263523b385457%3A0x2bfaa0f994ec5aed!2sAMEN%20INDUSTRIAL%20SOLUTIONS!5e0!3m2!1sen!2sin!4v1761239234610!5m2!1sen!2sin"
			, class:"page-content", loading:"lazy", style: "width: 100%;", addBreaks:2},
			
			{ seq:30, id: "imgContent1", tagname: "img",  isActive: "Y", name:"imgContent1"
			, src:"images/page9/phone-icon.png"
			, class:"page-image-center", addBreaks:1},
			{ seq:31, id: "link1", tagname: "a",  isActive: "Y", name:"link1"
			, innerText:"+91 90030 xxxxx", href:"tel:+91 90030 xxxx"
			, class:"page-link-center", addBreaks:1},
			
			{ seq:32, id: "imgContent1", tagname: "img",  isActive: "Y", name:"imgContent1"
			, src:"images/page9/whatsapp-icon.png"
			, class:"page-image-center", addBreaks:1},
			{ seq:33, id: "link1", tagname: "a",  isActive: "Y", name:"link1"
			, innerText:"+91 90030 xxxxx", href:"https://wa.me/+9190030xxxxx/?text=Hello%20Company"
			, class:"page-link-center", addBreaks:1},
			
			{ seq:50, id: "imgContent3", tagname: "img",  isActive: "Y", name:"imgContent1"
			, src:"images/page9/location-icon.png"
			, class:"page-image-center", addBreaks:1},
			{ seq:51, id: "link2", tagname: "a",  isActive: "Y", name:"link2"
			, innerText:"SAMPLE INDUSTRIAL SOLUTIONS", href:"https://maps.app.goo.gl/zZrpXTnW6az3ZQnK8"
			, class:"page-link-center", addBreaks:1},
			
			{ seq:70, id: "textContent1", tagname: "p",  isActive: "Y", name:"textContent1"
			, innerText:"Area we serve"
			, class:"page-title-small"},
			{ seq:71, id: "ulContent1", tagname: "ul",  isActive: "Y", name:"ulContent1"
			, innerText:"CHENNAI , SRIPERUMBUDUR, CHENGALPATTU, THIRUVALLUR, KANCHEEPURAM"
			, class:"page-list-tick"},
			
			]
		},
		
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