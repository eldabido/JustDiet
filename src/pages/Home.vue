<!-- Страница "Главная". -->
<script setup>
import MakeDiet from '../components/MakeDiet.vue';
import Drawer from '../components/Drawer.vue';
import MainText from '../components/MainText.vue';
import Drawer2 from '../components/Drawer2.vue';
import { ref, onMounted, reactive, provide, watch } from 'vue';

// Открытие окон создания диет.
const drawerOpen = ref(false);
const drawer2Open = ref(false);

// Для собственной диеты.
const closeDrawer = () => {
  drawerOpen.value = false;
};

const openDrawer = () => {
  drawerOpen.value = true;
};

// Для выбора из предложенных.
const close2Drawer = () => {
  drawer2Open.value = false;
};

const open2Drawer = () => {
  drawer2Open.value = true;
};

onMounted(async () => {
  provide('dietActions', {
    closeDrawer,
    openDrawer,
  });
  provide('diets', {
    close2Drawer,
    open2Drawer,
  });
});
</script>

<template>
  <Drawer v-if="drawerOpen" />
  <Drawer2 v-if="drawer2Open" />
  <div class="bg-white w-4/5 m-auto rounded-xl shadow-xl">
    <MainText />
    <div>
      <MakeDiet @openDrawer="openDrawer" @open2Drawer="open2Drawer" />
    </div>
  </div>
</template>
