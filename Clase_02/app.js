console.log('Clase 02');
const app = Vue.createApp({
    // El Model
    data(){
        return {
            titulo: 'Instancia de Vue',
            mensaje: 'Bienvenido a VueJS',
            foto: 'images/gatito.png',
            mascota: 'Gatito',
            logueado: true,
            activo: true
        }
    }
});

app.mount('#contenedorApp');