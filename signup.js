// login page js part

document.querySelector("#form").addEventListener("submit", formfunc);
let signup_data_arr = JSON.parse(localStorage.getItem("signup_data")) || [];
function formfunc(event) {
  event.preventDefault();
  let name = document.querySelector("#name").value;
  let email = document.querySelector("#email").value;
  let confirm_email = document.querySelector("#confirm_email").value;
  let password = document.querySelector("#password").value;
  let confirm_password = document.querySelector("#confirm_password").value;
  let number = document.querySelector("#number").value;
  if (password !== confirm_password) {
    alert("password doesn't match to your entered password");
    return;
  }
  if (email !== confirm_email) {
    alert("password doesn't match to your entered password");
    return;
  }
  let obj = {
    name: name,
    email: email,
    confirm_email: confirm_email,
    password: password,
    confirm_password: confirm_password,
    number: number,
  };
  console.log(obj);
  signup_data_arr.push(obj);
  localStorage.setItem("signup_data", JSON.stringify(signup_data_arr));
  name= "";
  email= "";
  confirm_email= "";
  password= "";
  confirm_password= "";
  number= "";
  window.location.href="signin.html"
}

// document.querySelector("#login").addEventListener("click", ()=>{
//     event.preventDefault();
    
// })

document.querySelector("#facebook").addEventListener("click", ()=>{
    event.preventDefault();
    window.location.href="https://www.facebook.com/login/"
})
document.querySelector("#google").addEventListener("click", ()=>{
    event.preventDefault();
    window.location.href="https://accounts.google.com/signup/v2/webcreateaccount?continue=https%3A%2F%2Fmyaccount.google.com%3Futm_source%3Daccount-marketing-page%26utm_medium%3Dcreate-account-button&flowName=GlifWebSignIn&flowEntry=SignUp"
})
document.querySelector("#logo").addEventListener("click", ()=>{
    event.preventDefault();
    window.location.href="index.html"
})
