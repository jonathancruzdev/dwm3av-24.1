const app = Vue.createApp( {
    data(){
        return {
            products: []
        }
    },
    created(){
        console.log('Inicio');
        this.getJSON();
    },
    methods: {
        async getJSON(){
            try {
                const resp = await fetch('api/products.json');
                const json = await resp.json();

                console.log(json);

                this.products = json.lista;
            } catch (error) {
                console.error(error);
                this.showMsgBox('Upss ocurrio un error', 'error')
            }
        },
        showMsgBox( msg, type ){
            Swal.fire({
                title: "Tienda Vue",
                text: msg,
                icon: type
            });
        }
    }
})

app.mount('#app');

