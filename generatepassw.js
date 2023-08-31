const passwordInput=document.getElementById("password");
const length=10;//length of passw
const Uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const Lowercase="abcdefghijklmnopqrstuvwxyz";
const number="0123456789";
const symbol="!@#$%Z^&*()_+|{}[]<>?/-=\/~";
const otherchar=Uppercase+Lowercase+number+symbol;
function createPassword(){
    let password="";
    //adding all 4 characters  
    password+=Uppercase[Math.floor(Math.random()*Uppercase.length)];
    password+=Lowercase[Math.floor(Math.random()*Lowercase.length)];
    password+=number[Math.floor(Math.random()*number.length)];
    password+=symbol[Math.floor(Math.random()*symbol.length)];
    //but we need 10 char length password 
    while(length>password.length){
        password+=otherchar[Math.floor(Math.random()*otherchar.length)];

    }
    //display generated pass in box
    passwordInput.value=password;
}
 //to copy the generated passw
 function copyPassword(){
    passwordInput.select();
    //depricated : execCommand()
    //latest: contentEditable()
    document.execCommand("copy");
    alert("password copied to clipboard!!");
}