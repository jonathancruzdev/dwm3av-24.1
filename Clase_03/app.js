const app = Vue.createApp({
    // El modelo
    data(){
        return {
            tarea: '',
            cantidad: 100,
            tareas: [
                {fecha: '12/04/24', descripcion: 'Leer un libro', completado: false },
                {fecha: '10/04/24', descripcion: 'Pasear al perro', completado: true }

            ]
        }
    },
    // Métodos
    methods: {
        eliminar(index){
            console.log('Eliminando tarea ' , index);
            this.tareas.splice(index, 1);
        },
        guardar(){
            if( this.tarea.trim() == ''){
                alert('Completar la descripción de la tarea');
                return;
            }
            console.log('Guardando tareas');
            const fecha = new Date().toLocaleDateString();
            this.tareas.push({
                fecha: fecha,
                descripcion: this.tarea,
                completado: false
            });
            this.tarea = '';
        }
    }
})

app.mount('#app');