let username1 = "";
while(username1==""|| username1==null)
{
    username1 = window.prompt("Enter your name");
    if(username1==""||username1==null)
    {
        window.alert("Enter a valid name");
    }
}
document.getElementById("Usergreeting").innerHTML = "Hello "+username1;


let firstname
document.getElementById("submitbutton").onclick=function()
{
    firstname = document.getElementById("fname").value;
    window.alert("Hello "+firstname+" ,Thank You for sending your details, will reach out to you as soon possible");
}

//Setting timeout near About Me 
setTimeout(()=>{
    document.getElementById("change").innerHTML = "Me"
},2000);

setTimeout(()=>{
    document.getElementById("change").innerHTML = " My Academic Journey"
},4000);
