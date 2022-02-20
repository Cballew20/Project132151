function replaceContent() {
	
	var myRecipientName;
	var myHostName;
	
	myRecipientName = document.getElementById("recipientNameInput").value;
	console.log('Variable myRecipientName: ' + myRecipientName);
	
	myHostName = document.getElementById("hostNameInput").value;
	console.log('Variable myHostName: ' + myHostName);
	 
	document.getElementById("recipientNamePlaceholder").innerHTML = myRecipientName;
	
	document.getElementById("hostNamePlaceholder").innerHTML = myHostName;
} 