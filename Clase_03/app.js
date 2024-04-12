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
    created(){
        console.log('Created');
        const tareas = JSON.parse( localStorage.getItem('task'));
        this. tareas = tareas ? tareas : [];
    },
    // Métodos
    methods: {
        eliminar(index){
            console.log('Eliminando tarea ' , index);
            this.tareas.splice(index, 1);
            this.guardar();
        },
        completar(task){
            console.log('Completando tarea', task);
            task.completado = true;
            this.guardar();
        },
        agregar(){
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
            this.guardar();
        },
        guardar(){
            localStorage.setItem('task', JSON.stringify( this.tareas));
        }
    }
})

app.mount('#app');