const app = Vue.createApp({
    // El modelo
    data(){
        return {
            titulo: 'Componentes',
            gatitos: [
                {id:1 , name: 'Gatito 1', img: 'images/gatito1.jpg'},
                {id:2 , name: 'Gatito 2', img: 'images/gatito2.jpg'},
                {id:3 , name: 'Gatito 3', img: 'images/gatito3.jpg'},

            ]
        }
    },
    created(){
        console.log('Created');
    },
    // Métodos
    methods: {
        
    }
})

app.mount('#app');