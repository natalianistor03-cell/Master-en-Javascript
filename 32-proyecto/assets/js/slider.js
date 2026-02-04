window.addEventListener("load", () => {

    let btnPrev = document.querySelector(".slider__btn-prev");
    let btnNext = document.querySelector(".slider__btn-next");
    let slides = document.querySelector(".slides__item");

    let counter = 0;
    let allSlides = slides.length;

    // Boton siguiente
    btnNext.addEventListener("click", () => {

        counter++;

        if(counter >= allSlides){
            counter = 0;
        }

        clearActives();

        slides[counter].classList.add("slides__item--active");
    });


    // Boton anterior
    btnPrev.addEventListener("click", () => {

        counter--;

        if(counter < 0) {
            counter = allSlides - 1; // ultimo slide
        }

       activeSlide(counter);

    });

    // Activar slide
    let activeSlide = (index) => {
        clearActives();

        slides[index].classList.add("slides__item--active");
    }



    // Limpiar activados
    let clearActives = () => {
        slides.forEach(slide => {
            slide.classList.remove("slides__item--active");
        })
    }
})