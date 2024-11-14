const menu = document.getElementById("menu")
menu.addEventListener("click", () => {
    document.querySelector(".navcontent").style.display = "flex";
    document.querySelector(".gris").style.display = "flex";
})

const exit = document.getElementById("exit")
exit.addEventListener("click", () => {
    document.querySelector(".navcontent").style.display = "none";
    document.querySelector(".gris").style.display = "none";
})