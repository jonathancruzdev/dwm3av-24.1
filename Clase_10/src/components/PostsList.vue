<script>

    export default {
        name: 'PostList',
        data() {
            return {
                posts : [
                    { id: 1, title: 'Post 1', body: 'Detalle del posteo 1'},
                    { id: 2, title: 'Post 2', body: 'Detalle del posteo 2'},
                    { id: 3, title: 'Post 3', body: 'Detalle del posteo 3'},
                    { id: 4, title: 'Post 4', body: 'Detalle del posteo 4'},
                    { id: 5, title: 'Post 5', body: 'Detalle del posteo 5'}
                ]
            }
        }
    };
</script>

<template>
    <div>
        <ul>
            <li v-for="post in posts" v-bin:key="post.id">
                <h4 v-text="post.title"></h4>
                <RouterLink to="/post/2">Ver detalles</RouterLink>
            </li>
        </ul>
    
    </div>


</template>
