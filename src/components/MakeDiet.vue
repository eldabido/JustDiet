<!-- Реализация открытия окон создания диет при нажатии на соответствующие кнопки на главной странице сайта. -->
<script setup>
const emit = defineEmits(['openDrawer', 'open2Drawer']);
</script>
<template>
  <div>
    <div
      @click="() => emit('openDrawer')"
      class="p-20 cursor-pointer transition hover:translate-y-2 hover:shadow-xl"
    >
      <img src="/plus.svg" alt="Add" width="40" />
      <p class="mt-2">Создать свою диету</p>
    </div>
    <div
      @click="() => emit('open2Drawer')"
      class="p-20 cursor-pointer transition hover:translate-y-2 hover:shadow-xl"
    >
      <img src="/plus.svg" alt="Add" width="40" />
      <p class="mt-2">Выбрать диету из каталога</p>
    </div>
  </div>
</template>
