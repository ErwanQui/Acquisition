// var data;

// fetch("euh.jpg").then(() => {
//   console.log("hggg");
// })

// fetch("Data/data.json").then(results => results.json()).then((jsonData) => {
//   data = jsonData;

// console.log(data);
// console.log("et bah");
// console.log(Object.keys(data).length);
// document.dispatchEvent(new Event("dataLoaded"));  
// })


// // include html
// function includeHTML() {
// 	document.addEventListener("dataLoaded", () => {
// 	  var z, i, elmnt, file, xhttp;
// 	  /* Loop through a collection of all HTML elements: */
// 	  z = document.getElementsByTagName("*");
// 	  for (i = 0; i < z.length; i++) {
// 	    elmnt = z[i];
// 	    /*search for elements with a certain atrribute:*/
// 	    file = elmnt.getAttribute("w3-include-html");
// 	    if (file) {
// 		      /* Make an HTTP request using the attribute value as the file name: */
// 		      xhttp = new XMLHttpRequest();
// 		      xhttp.onreadystatechange = function() {
// 		        if (this.readyState == 4) {
// 		          if (this.status == 200) {

// 		          	// on y passe nbSound fois pour avoir le nombre de blocs correspondants dans le code html

// 		          	for (var j = 0; j < Object.keys(data).length; j++) {
// 		          		console.log(this.responseText)
// 		          		elmnt.innerHTML += this.responseText;	          	
// 		          	}
// 		          }
// 		          if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
// 		    	  elmnt.removeAttribute("w3-include-html");
// 		          includeHTML();
// 		        }
// 		      }
// 		      xhttp.open("GET", file, true);
// 		      xhttp.send();
// 		      /* Exit the function: */
// 		      return;
// 	    }
// 	  }
// 	})
// }

function CategoryChoose(name) {
	document.getElementById("CategoryName").style.visibilty = "hidden";
	document.getElementById("CategoryName").style.position = "absolute";
	document.getElementById("ObjectsList").style.visibilty = "visible";
	document.getElementById("ObjectsList").style.position = "relative";
	console.log(data.name)
	var object;
	for(let i = 0; i < data[name]length; i++) {
		object = document.createElement("input");
		object.type = "button";
		object.value = data[name][i][0];
		//htmlButton.addEventListener("click", () => {CategoryChoose(Object.keys(data)[i]); });
		document.getElementById("ObjectsList").appendChild(object);
	}
	console.log(data);
	console.log(name);
}