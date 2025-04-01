<script setup>
import { ref,onMounted } from 'vue';

const posts=ref([]);

const fetchPosts=()=>{
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res=>res.json())
    .then(adat=>posts.value=adat)
    .catch(err=>alert(err));
}
onMounted(fetchPosts);
</script>

<template>
    <h1 class="text-center">Posts {{ posts.length }}</h1>
    <div v-for="post in posts">
        <p>{{ post.title }}</p>
    </div>
</template>