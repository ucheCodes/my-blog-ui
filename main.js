let searchForm = document.querySelector(".search-form");
let navbar = document.querySelector(".navbar");
let loginForm = document.querySelector(".login-form.login");
let signupForm = document.querySelector(".login-form.sign-up");

document.querySelector("#search-btn").onclick = () => {
    searchForm.classList.toggle("active");
}//here I will attach a click event handler to the search icon
//All gpt needs to do is convert me the first line of code.

document.querySelector("#login-btn").onclick = () => {
    loginForm.classList.toggle("active");
    signupForm.classList.remove("active");
}
//avoid this repetition, call one method in the other
document.querySelector("#goto-login").onclick = () => {
    loginForm.classList.toggle("active");
    signupForm.classList.remove("active");
}
document.querySelector("#goto-signup").onclick = () => {
    loginForm.classList.remove("active");
    signupForm.classList.toggle("active");
}
document.querySelector("#menu-btn").onclick = () => {
    navbar.classList.toggle("active");
}
//find window.onscroll from chat gpt for blazor
window.onscroll = () => {
    searchForm.classList.remove("active");//in c# remove this other active classes when other is clicked.
    navbar.classList.remove("active");
    loginForm.classList.remove("active");
    signupForm.classList.remove("active");
}
//available courses will work with a scroller and carousel
