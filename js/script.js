{
    const plElement = document.querySelector(".js-pl");
    const enElement = document.querySelector(".js-en");
    const plLang = document.querySelector(".js-plLang");
    const enLang = document.querySelector(".js-enLang");
    const plContrast = document.querySelector(".js-plContrast");
    const enContrast = document.querySelector(".js-enContrast");
    const plFont = document.querySelector(".js-plFont");
    const enFont = document.querySelector(".js-enFont");
    const plContent = document.querySelector(".js-plContent");
    const enContent = document.querySelector(".js-enContent");
    const plLink1 = document.querySelector(".js-plLink1");
    const enLink1 = document.querySelector(".js-enLink1");
    const plLink2 = document.querySelector(".js-plLink2");
    const enLink2 = document.querySelector(".js-enLink2");
    const plLink3 = document.querySelector(".js-plLink3");
    const enLink3 = document.querySelector(".js-enLink3");
    const plLink4 = document.querySelector(".js-plLink4");
    const enLink4 = document.querySelector(".js-enLink4");
    const plLink5 = document.querySelector(".js-plLink5");
    const enLink5 = document.querySelector(".js-enLink5");

    plElement.addEventListener("click", () => {

        enElement.classList.remove("nav__lang--selected")
        plElement.classList.add("nav__lang--selected")

        enLang.classList.remove("spanLang--selected")
        plLang.classList.add("spanLang--selected")

        enContrast.classList.remove("spanLang--selected")
        plContrast.classList.add("spanLang--selected")

        enFont.classList.remove("spanLang--selected")
        plFont.classList.add("spanLang--selected")

        enContent.classList.remove("spanLang--selected")
        plContent.classList.add("spanLang--selected")

        enLink1.classList.remove("spanLang--selected")
        plLink1.classList.add("spanLang--selected")

        enLink2.classList.remove("spanLang--selected")
        plLink2.classList.add("spanLang--selected")

        enLink3.classList.remove("spanLang--selected")
        plLink3.classList.add("spanLang--selected")

        enLink4.classList.remove("spanLang--selected")
        plLink4.classList.add("spanLang--selected")
        
        enLink5.classList.remove("spanLang--selected")
        plLink5.classList.add("spanLang--selected")
    });


    enElement.addEventListener("click", () => {

        plElement.classList.remove("nav__lang--selected")
        enElement.classList.add("nav__lang--selected")

        plLang.classList.remove("spanLang--selected")
        enLang.classList.add("spanLang--selected")

        plContrast.classList.remove("spanLang--selected")
        enContrast.classList.add("spanLang--selected")

        plFont.classList.remove("spanLang--selected")
        enFont.classList.add("spanLang--selected")

        plContent.classList.remove("spanLang--selected")
        enContent.classList.add("spanLang--selected")

        plLink1.classList.remove("spanLang--selected")
        enLink1.classList.add("spanLang--selected")

        plLink2.classList.remove("spanLang--selected")
        enLink2.classList.add("spanLang--selected")

        plLink3.classList.remove("spanLang--selected")
        enLink3.classList.add("spanLang--selected")

        plLink4.classList.remove("spanLang--selected")
        enLink4.classList.add("spanLang--selected")
        
        plLink5.classList.remove("spanLang--selected")
        enLink5.classList.add("spanLang--selected")
    });

    const brightElement = document.querySelector(".js-bright");
    const darkElement = document.querySelector(".js-dark");
    const containerElement = document.querySelector(".js-container");

    brightElement.addEventListener("click", () => {

        containerElement.classList.remove("container--dark")
        containerElement.classList.add("container--bright")
    });

    darkElement.addEventListener("click", () => {

        containerElement.classList.remove("container--bright")
        containerElement.classList.add("container--dark")
    });

    const smallElement = document.querySelector(".js-small");

    smallElement.addEventListener("click", () => {

        mediumElement.classList.remove("nav_fontSize--selected")
        bigElement.classList.remove("nav_fontSize--selected")
        smallElement.classList.add("nav_fontSize--selected")

        containerElement.classList.remove("container--fontSizeMedium")
        containerElement.classList.remove("container--fontSizeBig")
        containerElement.classList.add("container--fontSizeSmall")
    });

    const mediumElement = document.querySelector(".js-medium");

    mediumElement.addEventListener("click", () => {

        smallElement.classList.remove("nav_fontSize--selected")
        bigElement.classList.remove("nav_fontSize--selected")
        mediumElement.classList.add("nav_fontSize--selected")

        containerElement.classList.remove("container--fontSizeSmall")
        containerElement.classList.remove("container--fontSizeBig")
        containerElement.classList.add("container--fontSizeMedium")
    });

    const bigElement = document.querySelector(".js-big");

    bigElement.addEventListener("click", () => {

        smallElement.classList.remove("nav_fontSize--selected")
        mediumElement.classList.remove("nav_fontSize--selected")
        bigElement.classList.add("nav_fontSize--selected")

        containerElement.classList.remove("container--fontSizeSmall")
        containerElement.classList.remove("container--fontSizeMedium")
        containerElement.classList.add("container--fontSizeBig")
    });
}

