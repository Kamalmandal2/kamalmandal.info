


$(document).ready(function()
{
    $("#name").val(""); 
    $("#number").val(""); 
    $("#email").val(""); 
    $("#gender").val(""); 
    $("#address").val(""); 
    $("#message").val(""); 
});



function validateForm() 
{
    
    var name=document.getElementById("name").value; 
    var number=document.getElementById("number").value; 
    var email=document.getElementById("email").value; 
    var gender=document.getElementById("gender").value; 
    var address=document.getElementById("address").value; 
    var message=document.getElementById("message").value; 
    if (name == "") {
        alert("Name must be filled out");
        return false;
    }
    else if (number == "") {
        alert("number must be filled out");
        return false;
    }
    else if (email == "") {
        alert("email must be filled out");
        return false;
    }
    else if (gender == "") {
        alert("gender must be filled out");
        return false;
    }
    else if (address == "") {
        alert("address must be filled out");
        return false;
    }
    else if (message == "") {
        alert("message must be filled out");
        return false;
    }
    else
    {
    	alert(name+" , Successfully Sumbited Your Request , we will contact you very soon.......");
        $("#name").val(""); 
        $("#number").val(""); 
        $("#email").val(""); 
        $("#gender").val(""); 
        $("#address").val(""); 
        $("#message").val(""); 
    	return true;
    }
}








