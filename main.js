document.getElementById("register").onsubmit=function()
{
    event.preventDefault();

let FName=document.getElementById("FirstName").value;
let LName=document.getElementById("LastName").value;
let BirthDate=document.getElementById("birthDate").value;
let email=document.getElementById("email").value;
let Confirmemail=document.getElementById("ConfirmEmail").value;
let Pass=document.getElementById("Pass").value;
let ConfPass=document.getElementById("ConfirmPass").value;
let Mobile = document.getElementById("mobile").value.trim();

//fname and lname
let FnameReg=/^[a-z]+$/i;
console.log(FnameReg.test(FName));
console.log(FnameReg.test(LName));

//BirthDate
let birth = new Date(BirthDate);
let today = new Date();
if(!BirthDate) {
    console.log("Birth date is required.");
} else if(birth >= today) {
    console.log("Birth date must be in the past.");
} else {
    console.log("Birth date is valid");
}

//email

let checkMail=/(@gmail.com)/ig;
console.log(checkMail.test(email));
if(email!=Confirmemail)
{
    console.log("The email must be same")
}

//password
let Passreg=/(^[A-Z])/;
if(!Passreg.test(Pass))
{
    console.log("must be start a latter");
}

let PassRegNumber=/\d.*\d/;
if(!PassRegNumber.test(Pass))
{
    console.log("Password must contain at least two numbers");
}

let passRegexSpecial = /[!@#$%^&*(),.?":{}|<>]/;
if(!passRegexSpecial.test(Pass)) {
     console.log("Password must contain at least one special character.");
}
else
{
    console.log(passRegexSpecial.test(Pass));
}
if(Pass.length < 8 || Pass.length > 32) {
     console.log("Password length must be between 8 and 32 characters.");
}

if(Pass !== ConfPass) {
    console.log("Passwords do not match.");
}

//PHONE
let mobileRegex = /^\d{10}$/;

if(!mobileRegex.test(Mobile))
{
    console.log("Phone numbwe must be 10 digit")
}
else
{
console.log(mobileRegex.test(Mobile));
}
}

