let btn = document.querySelector(".menu-icon");
let rightLinksGroup = document.querySelector(".right-links-group");

btn.addEventListener("click", () => {
     // alert('200')
     console.log(btn.src.includes("menu"))
     if (btn.src.includes("menu")) {
          btn.src = "./img/svg/cross.svg";
     } else {
          btn.src = "./img/svg/menu.svg";
     }
     rightLinksGroup.classList.toggle("show");
});
window.addEventListener("scroll", () => {
     rightLinksGroup.classList.remove("show");
     btn.src = "./img/svg/menu.svg";
});