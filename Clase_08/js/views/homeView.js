const Home = {
    props: ['favoritos', 'lista'],
    template: // html
        `<div class="row">
        <titulo texto="Clase 09 - Vue Router"></titulo>
    
            <div class="col-md-10"></div>
            <div class="col-md-2">
                <ul class="list-group favoritos">
                    <favorito 
                        v-for="(item, index) in favoritos"
                        v-bind:name="item.name"
                        v-bind:count="item.count"
                    ></favorito>
                </ul>
            </div>

        </div>
        <div class="row">
            <card 
                v-for="(item, index) in lista"
                v-bind:id = "item.id"
                v-bind:nombre="item.name" 
                v-bind:edad="item.age" 
                v-bind:foto="item.img"
                v-bind:descripcion="item.description"
            >
            </card>

        </div>`
}
