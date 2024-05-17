const Favorito = {
    props: {
        name: String,
        count: Number
    },
    template: // html
        `<li class="list-group-item">
            <span>{{ name }}</span> <span> x {{ count }}</span>
        </li>`
}