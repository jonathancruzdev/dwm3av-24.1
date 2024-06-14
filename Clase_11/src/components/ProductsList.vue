<script>

    export default {
        name: 'ProductsList',
        data() {
            return {
                products: []
            }
        },
        mounted(){
            this.getProducts();
        },
        methods: {
            async getProducts(){
                const endPoint = 'https://dummyjson.com/products/search?q=phone';
                const response = await fetch(endPoint);
                const json = await response.json();
                console.log(json);
                this.products = json.products;
                console.log( this.products)
            }
        }
    };
</script>

<template>
    <div>
        <ul class="products-list">
            <li v-for="product in products" v-bin:key="product.id" class="card">
                <h4 v-text="product.title"></h4>
                <h3> Price {{ product.price   }}</h3>
                <h3> {{ product.id }}</h3>
                <img v-bind:src="product.thumbnail" alt="product.title">
                <RouterLink v-bind:to="`/product/${product.id}`" class="btn">Ver detalles</RouterLink>
            </li>
        </ul>
    
    </div>


</template>

<style scoped>

.products-list{
    display: flex;
    flex-direction: column;
    gap: 16px;
}
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
