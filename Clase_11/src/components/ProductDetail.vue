<script>

    export default {
        name: 'ProductsDetail',
        data() {
            return {
                name: '',
                price: '',
                category: '',
                description:'',
                stock: '',
                thumbnail: []
            }
        },
        created(){
            console.log('Create');
            const id = this.$route.params.id;
            console.log(id)
            /this.getProductById(id)
        },  
        mounted(){
            
        },
        methods: {
            async getProductById(id){
                const endPoint = 'https://dummyjson.com/products/'+id;
                const response = await fetch(endPoint);
                const json = await response.json();
                console.log(json);
                this.name = json.title;
                this.price = json.price;
                this.category = json.category;
                this.description = json.description;
                this.stock = json.stock;
                this.thumbnail = json.thumbnail;
                this.images = json.images
            }
        }
    };
</script>

<template>
    <div>
        <h2> Detalle {{name }}</h2>
        <p>{{ description }}</p>
        <img v-bind:src="thumbnail" v-bind:alt="name">
    </div>


</template>

<style scoped>


.card {
    border: 1px solid snow;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.btn {
    border: 2px solid teal;
    padding: 10px;
    background-color: rgb(45, 45, 45);
    border-radius: 5px;

}
</style>
