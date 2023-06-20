//your JS code here. If required.
const liElements = document.getElementsByTagName("li")
for(let i =0;i<liElements.length;i++){
	if(liElements[i].id === "level")
		alert(The level of the element is: + " " +(i+1));
}
