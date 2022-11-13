// sign in? sign up functionality

let signup_data_arr = JSON.parse(localStorage.getItem("signup_data")) || [];

document.querySelector("#form").addEventListener("submit", singinfunc);

function singinfunc(event) {
  event.preventDefault();
  if (signup_data_arr.length === 0) {
    alert("no user till now");
    return;
  }
  let password = document.querySelector("#password").value;
  let email = document.querySelector("#email").value;

  let login_obj = {
    email: email,
    password: password,
  };
  signup_data_arr.forEach((elem, index) => {
    if (
        login_obj.email == elem.email &&
        login_obj.password == elem.password
    ) {
      alert("LogIn Successfully");
      window.location.href = "itemsList.html";
      return;
    } else {
      alert("Please fill the correct input");
    }
  });
}
document.querySelector("#register_main").addEventListener("click", ()=>{
    event.preventDefault();
    window.location.href="signup.html"
})
document.querySelector("#fb").addEventListener("click", ()=>{
  event.preventDefault();
  window.location.href="https://www.facebook.com/login/"
})
document.querySelector("#ggl").addEventListener("click", ()=>{
  event.preventDefault();
  window.location.href="https://accounts.google.com/signup/v2/webcreateaccount?continue=https%3A%2F%2Fmyaccount.google.com%3Futm_source%3Daccount-marketing-page%26utm_medium%3Dcreate-account-button&flowName=GlifWebSignIn&flowEntry=SignUp"
})