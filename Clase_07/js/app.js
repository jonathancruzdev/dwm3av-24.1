/* ---------------------------- Instancia de Vue ---------------------------- */
const app = Vue.createApp({
    // El modelo
    data(){
        return {
            titulo: 'Componentes',
            lista: [
                {id:1 , name: 'Gatito 1', img: 'images/gatito1.jpg', age: 1, description: 'Gatito Pequeño'},
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

/* Registro de Componentes */
app.component('titulo', Titulo);
app.component('card', Card);
app.component('favorito', Favorito);




app.mount('#app');