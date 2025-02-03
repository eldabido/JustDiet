<!-- Основной файл App. -->

<script setup>
import Header from './components/Header.vue';
</script>

<template>
  <!-- Здесь подключается то, что будет общи для всего сайта. Например, Header (шапка сайта). -->
  <div class="bg-white w-4/5 m-auto rounded-xl shadow-xl mt-14">
    <Header />
  </div>
  <!-- Использование Vue Router для подключения перехода между страницами. -->
  <router-view></router-view>
</template>

<style></style>
