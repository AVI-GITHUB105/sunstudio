
export const hoverEffect = () => {
    const elems = document.querySelectorAll(".elem");
    const fixedImage = document.querySelector(".fixed-image");
    
    elems.forEach((elem) => {
      elem.addEventListener("mouseenter", () => {
        let image = elem.getAttribute("data-image");
        fixedImage.style.backgroundImage = `url(${image})`;
        fixedImage.style.display = "block";
      });
      
      elem.addEventListener("mouseleave", () => {
        fixedImage.style.display = "none";
      });
    });
  };
  
  export const fullscr = () => {
    var menu = document.querySelector("nav h3")
    var whitemenu = document.querySelector(".fullscr .white .whitemenu h3")
    var full = document.querySelector(".fullscr")
    var navimg = document.querySelector("nav img")
    var flag = 0

    menu.addEventListener("click", function () {
        if (flag == 0) {
            full.style.top = 0
            navimg.style.opacity = 0
            flag = 1
        } else {
            full.style.top = "-100%"
            navimg.style.opacity = 1
            flag = 0
        }
    })

    // whitemenu.addEventListener("click",function() {
    //     if (flag == 1) {
    //         full.style.top = "-110%"
    //         navimg.style.opacity = 1
    //         flag = 0
    //     }

    // })
  };

  export const loaderani = () => {
    var loader = document.querySelector(".loader");
    setTimeout(function () {
      loader.style.top = "-100%";
  }, 4200)
  };

