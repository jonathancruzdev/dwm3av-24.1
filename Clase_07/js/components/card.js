const Card = {
    props: ['id', 'nombre', 'edad', 'foto', 'descripcion'],
    data(){
        return {
            count: 0
        }
    },
    methods: {
        darLike() {
            this.count++;
            this.$emit('favorito', { id: this.id, name: this.nombre })
        }
    },
    template: // html
            ` <div class="col-md-3">
                <div class="card"> 
                    <img v-bind:src="foto" class="card-img-top" v-bind:alt="descripcion">
                    <div class="card-body">
                        <titulo v-bind:texto="nombre"></titulo>
                        <strong>Edad: </strong> <span> {{ edad }} </span>
                        <p> {{ descripcion}} </p>
                        <hr>
                        <button v-on:click="darLike" class="btn btn" type="button">❤ {{count}}</button>
                    </div>
                </div>
            </div>`
}