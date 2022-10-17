let username="";

while(username=="")
{
    username = window.prompt("Enter your name");
}
document.getElementById("Usergreeting").innerHTML = "Hello "+username;


let firstname
document.getElementById("submitbutton").onclick=function()
{
    firstname = document.getElementById("fname").value;
    window.alert("Hello "+firstname+" ,Thank You for sending your details, will reach out to you as soon possible");
}
