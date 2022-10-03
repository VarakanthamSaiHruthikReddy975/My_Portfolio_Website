window.alert("Hello Everyone, Thank You for clicking on my website, For more please click ok ");
let firstname
document.getElementById("submitbutton").onclick=function()
{
    firstname = document.getElementById("fname").value;
    window.alert("Hello "+firstname+" ,Thank You for sending your details, will reach out to you as soon possible");
}
