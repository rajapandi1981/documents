

const GlobalData = {
	constants: {
		isAddPreToPara: false,
	},
	nonHtmlAttr: ["innerText", "innerHTML", "id", "tagname"],
	
};

function CreateElementFromObject(jsonObject)
{
	var jsonObj = JSON.parse(JSON.stringify(jsonObject));
	
	if (jsonObj.hasOwnProperty("tagname")) {
		  console.log("tagname ${jsonObj.tagname}");
		  
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
	console.log(`Input - ${JSON.stringify(jsonObject)}`);
	
	var jsonObj = JSON.parse(JSON.stringify(jsonObject));
	
	if (jsonObj.hasOwnProperty("name")) {
		  console.log("name ${jsonObj.name}");
		  
		  var pagename = jsonObj["name"];
		  var pageElem = document.createElement("div");
		  pageElem.id = jsonObj["id"];
		  var elementList = jsonObj.elements;
		  var elementListSorted = elementList.sort((a, b) => a.seq - b.seq);
		  
		  for (const elemObj of elementListSorted) {
					  console.log(JSON.stringify(elemObj));
					  //console.log(`${key}: ${jsonObj[key]}`);

					  //console.log(`${key.toString()}: ${jsonObj[key.toString()].toString()}`);
						  var htmlElem = CreateElementFromObject(elemObj);
						  pageElem.appendChild(htmlElem);
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



function CreatePagesFromObjectList(jsonObjectList)
{
	console.log("CreatePagesFromObjectList - Start");
	console.log(`Input - ${JSON.stringify(jsonObjectList)}`);
	//console.log(JSON.stringify(jsonObjectList));
	var jsonObjList = JSON.parse(JSON.stringify(jsonObjectList));
	
	var jsonObjListSorted = jsonObjList.sort((a, b) => a.seq - b.seq);
	//console.log(JSON.stringify(jsonObjList));
	
		  var pageListElem = document.createElement("div");
		  
		  for (const pageData of jsonObjListSorted) {
					  console.log(JSON.stringify(pageData));
					  //console.log(`${key}: ${jsonObj[key]}`);

					  //console.log(`${key.toString()}: ${jsonObj[key.toString()].toString()}`);
						  var pageElem = CreatePageFromObject(pageData);
						  pageListElem.appendChild(pageElem);
						  pageListElem.appendChild(document.createElement("br"));
						  pageListElem.appendChild(document.createElement("br"));
					  }
					  
	console.log("CreatePagesFromObjectList - End");
		  return pageListElem;
		
}