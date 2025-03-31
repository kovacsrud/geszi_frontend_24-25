<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
    <div class="navbar bg-slate-300 shadow-sm">
  <div class="flex-1">
    <RouterLink to="/" class="btn btn-ghost text-xl">Főoldal</RouterLink>
  </div>
  <div class="flex-none">
    <ul class="menu menu-horizontal px-1">
        <li><RouterLink to="/typicode">Typicode</RouterLink></li>
        <li><RouterLink to="/randomusers">Randomusers</RouterLink></li>
      <li>
        <details>
          <summary>Parent</summary>
          <ul class="bg-base-100 rounded-t-none p-2">
            <li><a>Typicode</a></li>
            <li><a>Randomusers</a></li>
          </ul>
        </details>
      </li>
    </ul>
  </div>
</div>
    
</template>