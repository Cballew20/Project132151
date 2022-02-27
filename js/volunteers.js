var $ = function (id) { return document.getElementById(id); };

var volunteerArray = [];

var displayVolunteers = function () {   

// display volunteers in Text area
var volunteerListString="";
index=0;
for (var i = 0; i < volunteerArray.length; i++) {
   index= i+1;  
   volunteerListString = volunteerListString + index + "." +volunteerArray[i]+ "\n";
}    
// display the volunteers in the text area
    $("volunteerList").value = volunteerListString;

};

var addVolunteer = function () {
    // get the data from the form
    var volunteerString = $("first_name").value + " " + $("last_name").value;

    // store the data in an array
    volunteerArray.push(volunteerString);
    
    // display the volunteers and clear the add form
    displayVolunteers();
    
    // get the add form ready for next entry
    $("first_name").value = "";
    $("last_name").value = "";
    $("first_name").focus();
};

var deleteVolunteer = function () {
var volunteerString = $("first_name").value + " " + $("last_name").value;
// remove the string from the array
for (var i = 0; i < volunteerArray.length; i++) {
   if(volunteerArray[i].trim() == volunteerString.trim()){
            volunteerArray.splice(i,1);
    }

}   
 // display the volunteers and clear the add form
    displayVolunteers();
    
    // get the delete form ready for next entry
    $("first_name").value = "";
    $("last_name").value = "";
    $("first_name").focus();
};

var clearList = function () {   
    volunteerArray = [];
    $("volunteerList").value = "";
    $("first_name").focus();
};


//When the page is fully loaded, the buttons will be mapped to the JavaScript functions
window.onload = function () {
    $("add_button").onclick = addVolunteer;
	$("delete_button").onclick = deleteVolunteer;
    $("clear_button").onclick = clearList;      
    $("first_name").focus();
};