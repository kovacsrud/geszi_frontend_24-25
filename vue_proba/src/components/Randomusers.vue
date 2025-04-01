<script setup>
import {ref,onMounted} from 'vue';
const users=ref([]);
import Randomuser from './Randomuser.vue';

const fetchUsers=()=>{
    fetch('https://randomuser.me/api/?results=50')
    .then(res=>res.json())
    .then(adat=>users.value=adat.results)
    .catch(err=>alert(err));
}
onMounted(fetchUsers);
</script>

<template>
    <h1 class="text-3xl text-center">Users:{{ users.length }}</h1>
    <!--<div class="flex flex-row flex-wrap items-center justify-center">
        <div v-for="user in users">
            <Randomuser :user="user" />
        </div>
    </div>-->
    <div class="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2">
        <div v-for="user in users">
            <Randomuser :user="user" />
        </div>
    </div>

</template>