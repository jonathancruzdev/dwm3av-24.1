const app = Vue.createApp( {
    data(){
        return {
            nombre: '',
            apellido: '',
            email: '',
            cursoId: 3,
            cursos: [],
            inscripciones: []
        }
    },
    created(){
        this.getJSON();
        this.leerLocal();
    },
    computed: {
        total() {
            return this.inscripciones.length;
        }
    },
    methods: {
        async getJSON(){
            try {
                const resp = await fetch('api/data.json');
                const json = await resp.json();
                this.cursos = json.data;
            } catch (error) {
                console.error(error);
            }
        },
        obtenerCurso(id){
            console.log(id)
            const cursoNombre = this.cursos.find( item => item.id == id );
            return cursoNombre ? cursoNombre.name : ''
        },
        inscribirse(){
            const hora = new Date().toLocaleTimeString();
            const fecha = new Date().toLocaleDateString();
            const inscripcion = {
                nombre: this.nombre,
                apellido: this.apellido,
                email: this.email,
                cursoId: this.cursoId,
                hora: hora,
                fecha: fecha
            }

            this.inscripciones.push(inscripcion);
            console.log(inscripcion, this.inscripciones);
            this.guardarLocal();
            // Limpio el formulario
            this.nombre = '';
            this.apellido = '';
            this.email = '';
            this.cursoId = '';
        },
        leerLocal(){
            const storage = JSON.parse( localStorage.getItem('data') );
            this.inscripciones = storage ? storage : [];
        },
        guardarLocal(){
            localStorage.setItem('data', JSON.stringify(this.inscripciones));
        }
    }
})

app.mount('#app');