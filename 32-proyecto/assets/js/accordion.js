let collapse = document.querySelectorAll(".accordion__collapse");

collapse.forEach(collapse => {

    let header = collapse.querySelector(".collapse__header");

    header.addEventListener("click", () => {
        collapse.classList.toggle("accordion__collapse--open");
    });
});