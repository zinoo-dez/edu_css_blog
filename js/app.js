let btn = document.querySelector(".menu-icon");
let rightLinksGroup = document.querySelector(".right-links-group");

btn.addEventListener("click", () => {
     // alert('200')
     // console.log(btn.src)
     btn.src =  btn.src === "http://127.0.0.1:5500/img/svg/menu.svg" ? "http://127.0.0.1:5500/img/svg/cross.svg" : "http://127.0.0.1:5500/img/svg/menu.svg";
     rightLinksGroup.classList.toggle("show");
});
window.addEventListener("scroll", () => {
     rightLinksGroup.classList.remove("show");
     btn.src = "http://127.0.0.1:5500/img/svg/menu.svg";
});