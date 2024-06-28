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
                const endPointPHP = 'http://localhost/servidor/getProducts.php';
                const response = await fetch(endPointPHP);
                const json = await response.json();
                console.log(json);
                this.products = json.products;
                console.log( this.products)
            }
        }
    };
</script>

<template>
    <v-container>
        <v-carousel>
            <v-carousel-item
                src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
                cover
            ></v-carousel-item>

            <v-carousel-item
                src="https://cdn.vuetifyjs.com/images/cards/hotel.jpg"
                cover
            ></v-carousel-item>

            <v-carousel-item
                src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
                cover
            ></v-carousel-item>
        </v-carousel>
        <v-row justify="center">
        
        
            <v-col v-for="product in products" v-bind:key="product.id" class="col" md="4" sm="6" xs="12">
                <v-card
                    class="mx-auto"
                    max-width="400"
                    color="indigo"
                >
                    <v-img
                    class="align-end text-white"
                    height="200"
                    v-bind:src="product.thumbnail"
                   
                    cover
                    >
                    <v-card-title v-text="product.title"></v-card-title>
                    </v-img>

                    <v-card-subtitle class="pt-4">
                    Number 10
                    </v-card-subtitle>

                    <v-card-text>
                    <div> $ {{ product.price   }}</div>

                    <div v-text="product.description"> </div>
                    </v-card-text>

                    <v-card-actions>
                    <v-btn color="orange" text="Share"></v-btn>

                    <v-btn color="orange" text="Explore"></v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>

        </v-row>
        </v-container>





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
