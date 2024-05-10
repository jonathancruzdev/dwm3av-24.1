const Favorito = {
    props: [ 'name', 'count'],
    template: // html
        `<li class="list-group-item">
            <span>{{ name }}</span> <span> x {{ count }}</span>
        </li>`
}