

const GlobalData = {
	constants: {
		isAddPreToPara: false,
		slideshowContainerClassPrefix : "slideshow",
	},
	nonHtmlAttr: ["innerText", "innerHTML", "id", "tagname"],
	
};

function CreateElementFromObject(jsonObject)
{
	console.log(`CreateElementFromObject Input - ${JSON.stringify(jsonObject)}`);
	
	var jsonObj = JSON.parse(JSON.stringify(jsonObject));
	
	if (jsonObj.hasOwnProperty("tagname")) {
		  console.log(`tagname ${jsonObj.tagname}`);
		  
		  var tagname = jsonObj["tagname"];
		  var htmlElem = document.createElement(tagname);
		  
		  for (const key in jsonObj) {
					  console.log(`${key}: ${jsonObj[key]}`);
					  //console.log(`${key}: ${jsonObj[key]}`);

					  //console.log(`${key.toString()}: ${jsonObj[key.toString()].toString()}`);
						  SetAttributeForElement(htmlElem, jsonObj, key);
					  }
					  
		  return htmlElem;
		} 
		else {
		  console.log("The 'tagname' node does not exist.");
		  return null;
		}

	
}

function SetAttrForElement(htmlElem, jsonObj, strAttrName)
{
	console.log(`SetAttrForElement Input - ${JSON.stringify(jsonObj)}`);
	
	if (jsonObj.hasOwnProperty(strAttrName)) {
	htmlElem.setAttribute (strAttrName, jsonObj[strAttrName]);
	}
	else
	{
		console.log(`Nore - ${strAttrName} not exists`);
	}
}

function SetAttributeForElement(htmlElem, jsonObj, strAttrName)
{
	var tagname = jsonObj["tagname"];
	
	if ( GlobalData.nonHtmlAttr.includes(strAttrName))
						  {
							switch(strAttrName) {
							  case "innerText":
								//htmlElem.innerText =  jsonObj[strAttrName];
								SetInnerTextAttributeForElement(htmlElem, jsonObj, strAttrName)
								/*
								if (tagname === "p" && GlobalData.constants.isAddPreToPara)
								  {
									var prehtmlElem = document.createElement("pre");
		  
									prehtmlElem.innerText =  jsonObj[strAttrName];
									htmlElem.appendChild(prehtmlElem);
								  }
								  else
									{
									htmlElem.innerText =  jsonObj[strAttrName];
								  }
								  */
								break;
							  case "innerHTML":
								  if (tagname === "p" && GlobalData.constants.isAddPreToPara)
								  {
									var prehtmlElem = document.createElement("pre");
		  
									prehtmlElem.innerHTML =  jsonObj[strAttrName];
									htmlElem.appendChild(prehtmlElem);
								  }
								  else
									{
									htmlElem.innerHTML =  jsonObj[strAttrName];
								  }
								break;
							case "id":
								htmlElem.id =  jsonObj[strAttrName];
								break;
							  default:
								// code block
							}
						  }
						  else 
						  {
							htmlElem.setAttribute (strAttrName, jsonObj[strAttrName]);
						  }
}


function SetInnerTextAttributeForElement(htmlElem, jsonObj, strAttrName)
{
	var tagname = jsonObj["tagname"];
	
	
	switch(tagname) {
	  case "p":
		if (GlobalData.constants.isAddPreToPara)
		  {
			var prehtmlElem = document.createElement("pre");

			prehtmlElem.innerText =  jsonObj[strAttrName];
			htmlElem.appendChild(prehtmlElem);
		  }
		  else
			{
			htmlElem.innerText =  jsonObj[strAttrName];
		  }
		break;
	  case "ul":
		const liArray = jsonObj[strAttrName].split(",");
		  
		  for (const li of liArray) {
			  var liElem = document.createElement("li");

			liElem.innerHTML =  li;
			htmlElem.appendChild(liElem);
			}
			
		  
		break;
	case "div":
		htmlElem.innerText =  jsonObj[strAttrName];
		break;
	  default:
		// code block
		htmlElem.innerText =  jsonObj[strAttrName];
	}
						  
}

function CreatePageFromObject(jsonObject)
{
	console.log("CreatePageFromObject - Start");
	console.log(`CreatePageFromObject Input - ${JSON.stringify(jsonObject)}`);
	
	var jsonObj = JSON.parse(JSON.stringify(jsonObject));
	
	if (jsonObj.hasOwnProperty("name")) {
		  console.log("name ${jsonObj.name}");
		  
		  var pagename = jsonObj["name"];
		  var pageElem = document.createElement("div");
		  pageElem.id = jsonObj["id"];
		  SetAttrForElement(pageElem, jsonObj, "class");
		  
		  var elementList = jsonObj.elements;
		  var elementListSorted = elementList.sort((a, b) => a.seq - b.seq);
		  
		  for (const elemObj of elementListSorted) {
					  console.log(JSON.stringify(elemObj));
					  //console.log(`${key}: ${jsonObj[key]}`);

					  //console.log(`${key.toString()}: ${jsonObj[key.toString()].toString()}`);
						  var htmlElem = CreateElementFromObject(elemObj);
						  pageElem.appendChild(htmlElem);
						  
						  if(elemObj.addBreaks)
						  {
							  for(let  i=0; i < elemObj.addBreaks; i++)
							  {
								  pageElem.appendChild(document.createElement("br"));
							  }
							  //alert(htmlElem.id);
						  
						  }
					  }
					  
					  
						  
		console.log("CreatePageFromObject - End");
		  return pageElem;
		} 
		else {
			
		  console.log("The 'name' node does not exist.");
		  console.log("CreatePageFromObject - End");
		  return null;
		}

	
}


function CreateHorSlidePageFromObject(jsonObject)
{
	console.log("CreateHorSlidePageFromObject - Start");
	console.log(`CreateHorSlidePageFromObject Input - ${JSON.stringify(jsonObject)}`);
	
	var jsonObj = JSON.parse(JSON.stringify(jsonObject));
	
	if (jsonObj.hasOwnProperty("name")) {
		  console.log("name ${jsonObj.name}");
		  
		  // Step1 - Page
		  var pagename = jsonObj["name"];
		  var pageElem = document.createElement("div");
		  pageElem.id = jsonObj["id"];
		  SetAttrForElement(pageElem, jsonObj, "class");
		  
		  var elementList = jsonObj.elements;
		  var elementListSorted = elementList.sort((a, b) => a.seq - b.seq);
		  
		  // Step2 - slideshow-container
		  var divSlideshowContainer = document.createElement("div");
		  divSlideshowContainer.setAttribute ("class", GlobalData.constants.slideshowContainerClassPrefix + "-container");
		  
		  var divDots = document.createElement("div");
			divDots.setAttribute ("style", "text-align:center");
				
		  let i =0;
		  let totSlides = elementListSorted.length;
		  for (const elemObj of elementListSorted) {
			  i++;
					  console.log(JSON.stringify(elemObj));
					  //console.log(`${key}: ${jsonObj[key]}`);
						// Step3 - slide
						var divSlide = document.createElement("div");
						var slideClass = GlobalData.constants.slideshowContainerClassPrefix + "-slide";
						slideClass = slideClass + " " + GlobalData.constants.slideshowContainerClassPrefix + "-fade";
						divSlide.setAttribute ("class", slideClass);

						// Step4 - numbertext
						var divSlideNumberText = document.createElement("div");
						var numbertextClass = GlobalData.constants.slideshowContainerClassPrefix + "-numbertext";
						divSlideNumberText.setAttribute ("class", numbertextClass);
						
						//alert(JSON.stringify(jsonObj));
						//alert(jsonObj.isDisplayNumber);
						if(jsonObj.isDisplayNumber && jsonObj.isDisplayNumber === true)
						{
							//alert(i.toString() + " / " + totSlides.toString());
							divSlideNumberText.innerText = i.toString() + " / " + totSlides.toString();
						}
						
						
					  //console.log(`${key.toString()}: ${jsonObj[key.toString()].toString()}`);
					  // Step5 - Slide Element
						  var htmlElem = CreateElementFromObject(elemObj);
						  if(jsonObj.slidestyle)
						{
							//htmlElem.style = jsonObj.slidestyle;
							htmlElem.setAttribute ("style", jsonObj.slidestyle);
						}
						  
						  // Step6 - captiontext
						var divSlideCaptionText = document.createElement("div");
						var captiontextClass = GlobalData.constants.slideshowContainerClassPrefix + "-text";
						divSlideCaptionText.setAttribute ("class", captiontextClass);
						
						if(jsonObj.isDisplayCaption && jsonObj.isDisplayCaption === true && elemObj.captiontext)
						{
							divSlideCaptionText.innerText = elemObj.captiontext;
						}
						
						
						divSlide.appendChild(divSlideNumberText);
						divSlide.appendChild(htmlElem);
						divSlide.appendChild(divSlideCaptionText);
						
						// Add Slide to slideshow-container
						divSlideshowContainer.appendChild(divSlide);
						
						// Dots Span under divDots
						var spanDot = document.createElement("span");
						var spanDotClass = GlobalData.constants.slideshowContainerClassPrefix + "-dot";
						spanDot.setAttribute ("class", spanDotClass);
						spanDot.setAttribute ("onclick", "currentSlide(" + i.toString() + ")");
						divDots.appendChild(spanDot);
						
						  if(elemObj.addBreaks)
						  {
							  for(let  i=0; i < elemObj.addBreaks; i++)
							  {
								  pageElem.appendChild(document.createElement("br"));
							  }
							  //alert(htmlElem.id);
						  
						  }
					  }
					  
				// Add Next and previous buttons to slideshow-container  -->
				var linkPrev = document.createElement("a");
				var linkPrevClass = GlobalData.constants.slideshowContainerClassPrefix + "-prev";
				linkPrev.setAttribute ("class", linkPrevClass);
				linkPrev.setAttribute ("onclick", "plusSlides(-1)");
				linkPrev.innerHTML = "&#10094;";
				
				var linkNext = document.createElement("a");
				var linkNextClass = GlobalData.constants.slideshowContainerClassPrefix + "-next";
				linkNext.setAttribute ("class", linkNextClass);
				linkNext.setAttribute ("onclick", "plusSlides(1)");
				linkNext.innerHTML = "&#10095;";
						
				divSlideshowContainer.appendChild(linkPrev);
				divSlideshowContainer.appendChild(linkNext);
				
				// Add dots/circles to slideshow-container  -->
				divSlideshowContainer.appendChild(divDots);
				
				
					  
		pageElem.appendChild(divSlideshowContainer);
		console.log("CreatePageFromObject - End");
		  return pageElem;
		} 
		else {
			
		  console.log("The 'name' node does not exist.");
		  console.log("CreatePageFromObject - End");
		  return null;
		}

	
}


function CreatePagesFromObjectList(jsonObjectList)
{
	console.log("CreatePagesFromObjectList - Start");
	console.log(`CreatePagesFromObjectList Input - ${JSON.stringify(jsonObjectList)}`);
	//console.log(JSON.stringify(jsonObjectList));
	var jsonObjList = JSON.parse(JSON.stringify(jsonObjectList));
	
	var jsonObjListSorted = jsonObjList.sort((a, b) => a.seq - b.seq);
	//console.log(JSON.stringify(jsonObjList));
	
		  var pageListElem = document.createElement("div");
		  
		  for (const pageData of jsonObjListSorted) {
					  console.log(JSON.stringify(pageData));
					  //console.log(`${key}: ${jsonObj[key]}`);
						var type = pageData.type;
						
					  //console.log(`${key.toString()}: ${jsonObj[key.toString()].toString()}`);
					  
					  if (type && type === "horizontalslideshow")
					  {
						  var pageElemSlides = CreateHorSlidePageFromObject(pageData);
						  pageListElem.appendChild(pageElemSlides);
					  }
					  else
					  {
						  var pageElem = CreatePageFromObject(pageData);
						  pageListElem.appendChild(pageElem);
					  }
						  
						  pageListElem.appendChild(document.createElement("br"));
						  pageListElem.appendChild(document.createElement("br"));
						  
						  // page level breaks
					  if(pageData.addBreaks)
						  {
							  for(let  i=0; i < pageData.addBreaks; i++)
							  {
								  pageListElem.appendChild(document.createElement("br"));
							  }
							  //alert(htmlElem.id);
						  
						  }
						  
					  }
					  
	console.log("CreatePagesFromObjectList - End");
		  return pageListElem;
		
}