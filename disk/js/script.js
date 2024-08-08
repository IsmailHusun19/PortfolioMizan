    const menuBarSatu = document.querySelector(".logo");
    const ul = document.querySelector("ul");
    const nav = document.querySelector("nav");
    window.addEventListener("scroll", () => {
        if (window.scrollY >= 1) {
            nav.classList.add("nav-scroll")
        } else nav.classList.remove("nav-scroll")
        console.log("aa");
    });

    window.addEventListener("scroll", () => {
        if (window.scrollY >= 1) {
            ul.classList.add("nav-scroll-bar")
        } else ul.classList.remove("nav-scroll-bar")
        console.log("aa");
    });

    menuBarSatu.addEventListener("click", () => {
        if (ul.click) {
            ul.classList.toggle("aktif");
            console.log("dikik")
        }
    });