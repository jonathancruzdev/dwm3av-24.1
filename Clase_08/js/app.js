const home = {
    template: '<home favoritos="favoritos"  lista=lista></home>',
    name: 'inicio'
};
const publicar = {
    template: `<publicar> </publicar>`,
    name: 'publicacion'
}
const contactos = {
    template: `<div class="alert alert-danger"> <h2> Contactos </h2> </div>`,
    name: 'contacto'
}
const notFound = {
    template: `<div Class="alert alert-warning"> <h2> Recurso no encontrado </h2> </div>`,
    name: 'error'
}

// Creamos la configuración de las rutas
const routes = [
    {
        path: '/',
        component: home
    },
    {
        path: '/publicar',
        component: publicar
    },
    {
        path: '/contactos',
        component: contactos
    },
    {
        path: '/:pathMatch(.*)*',
        component: notFound
    }
]

// Creamos una instanacia del Vue Router
const router = VueRouter.createRouter({
    history: VueRouter.createWebHistory(),
    routes
});


/* ---------------------------- Instancia de Vue ---------------------------- */
const app = Vue.createApp({
    // El modelo
    data(){
        return {
            titulo: 'Componentes',
            lista: [
                {id:1 , name: 'Gatito 1', img: 'images/gatito3.jpg', age: 1, description: 'Gatito Pequeño'},
                {id:2 , name: 'Gatito 2', img: 'images/gatito2.jpg', age: 2, description: 'Gatito Blanco'},
                {id:3 , name: 'Gatito 3', img: 'images/gatito3.jpg', age: 1, description: 'Gatito Amarillo'},
            ],
            favoritos: []
        }
    },
    created(){
        console.log('Creación de la instancias');
    },
    // Métodos
    methods: {
        // Este metodo recibe del componete hijo datos
        agregarFavorito(data){
            console.log('Agregando a Favoritos');
            console.log(data);

            const favorito = this.favoritos.find(  item => item.id == data.id);
            if( favorito ) {
                favorito.count++;
            } else {
                this.favoritos.push({
                    id: data.id,
                    name: data.name,
                    count: 1
                })
            }
        },
        guardarStorage(dataHijo){
            const datos = JSON.parse( localStorage.getItem('guardados') );
            const guardados = datos ? datos : [];
            guardados.push( dataHijo);

            console.log(guardados);

            localStorage.setItem('guardados', JSON.stringify( guardados));
        },
        cambio(){
            console.log('Cambio ', this.nombre);
        }
    }
})

// Montamos el enrutador en la app de Vue
app.use( router)


/* Registro de Componentes */
app.component('titulo', Titulo);
app.component('card', Card);
app.component('favorito', Favorito);
app.component('publicar', Publicar);
app.component('contactos', Contactos)
app.component('home', Home)
//app.component('contador', Contador)



app.mount('#app');