/* ---------------------------- Instancia de Vue ---------------------------- */
const app = Vue.createApp({
    // El modelo
    data(){
        return {
            nombre: 'Juan',
            logueado: true,
            titulo: 'Componentes',
            lista: [
                {id:1 , name: 'Gatito 1', img: 'images/gatito1.jpg', age: 1},
                {id:2 , name: 'Gatito 2', img: 'images/gatito2.jpg', age: 2},
                {id:3 , name: 'Gatito 3', img: 'images/gatito3.jpg', age: 1},
            ]
        }
    },
    created(){
        console.log('Creación de la instancias');
    },
    // Métodos
    methods: {
        cambio(){
            console.log('Cambio ', this.nombre);
            
        }
    }
})


/* ------------------------------- Componetes ------------------------------- */
app.component('titulo', {
    props: ['texto'],
    template: '<h2 class="text-info"> {{ texto}} </h2>'
});

app.component('gatito', {
    props: ['nombre', 'edad', 'foto'],
    data(){
        return {
            count: 0
        }
    },
    methods: {
        darLike() {
            this.count++
        }
    },
    template: 
            ` <div class="col-md-3">
                <div class="card"> 
                    <img v-bind:src="foto" class="card-img-top" alt="gatito">
                    <div class="card-body">
                        <titulo v-bind:texto="nombre"></titulo>
                        <strong>Edad: </strong> <span> {{ edad }} </span>
                        <hr>
                        <button v-on:click="darLike" class="btn btn" type="button">❤ {{count}}</button>
                    </div>
                </div>
            </div>`
})

app.mount('#app');