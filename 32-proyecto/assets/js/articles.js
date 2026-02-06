let articles = document.querySelector(".layout__articles");

let posts = [
    {
        title: "Articulo de prueba 1",
        date: "19/01/2027",
        body: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil, animi veritatis placeat nulla unde dolores officia voluptatibus porro molestias culpa quaerat quisquam iure? Odio laborum cupiditate ut quisquam, veritatis vel"
    },

    {
        title: "Articulo de prueba 2",
        date: "23/05/2027",
        body: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil, animi veritatis placeat nulla unde dolores officia voluptatibus porro molestias culpa quaerat quisquam iure? Odio laborum cupiditate ut quisquam, veritatis vel"
    },

    {
        title: "Articulo de prueba 3",
        date: "03/06/2027",
        body: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil, animi veritatis placeat nulla unde dolores officia voluptatibus porro molestias culpa quaerat quisquam iure? Odio laborum cupiditate ut quisquam, veritatis vel"
    },

    {
        title: "Articulo de prueba 4",
        date: "12/12/2027",
        body: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil, animi veritatis placeat nulla unde dolores officia voluptatibus porro molestias culpa quaerat quisquam iure? Odio laborum cupiditate ut quisquam, veritatis vel"
    },
    {
        title: "Master en React de Natalia Nistor",
        date: "08/06/2029",
        body: "El mejor curso para aprender React que existe en español"
    }
]

posts.forEach(article => {

    articles.innerHTML += `
            <article class="articles__article">
                <h3 class="article__title">${article.title}</h3>

                <span class="article__date">${article.date}</span>

                <p class="article__body">${article.body}</p>

                <a href="#" class="article__btn">Leer más</a>
            </article>
    `
})