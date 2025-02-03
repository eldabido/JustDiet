<!-- Окно создания диеты. -->
<script setup>
import DayItem from './DayItem.vue';
import { inject } from 'vue';

const { closeDrawer } = inject('dietActions');
</script>
<template>
  <!-- Кнопка выхода из выбора диет. Картинка "стрелочки" вставлена кодом. -->
  <div class="fixed top-0 left-0 h-full w-full bg-black z-1 opacity-70"></div>
  <div class="bg-white w-full h-full fixed z-20 p-10">
    <div class="flex items-center gap-5">
      <svg
        @click="closeDrawer"
        class="opacity-30 cursor-pointer hover:opacity-100 transition hover:-translate-x-1"
        width="80px"
        height="40px"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M5 12H19M5 12L11 6M5 12L11 18"
          stroke="#000000"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
      <h2 class="text-2-xl font-bold">Создание новой диеты</h2>
    </div>
    <!-- Подключаем DayItem.vue -->
    <DayItem />
    <!-- Реализация кнопки "Создать диету". -->
    <button
      class="my-7 bg-lime-500 rounded-xl py-3 w-40 text-white disabled:bg-slate-400 hover:bg-lime-600 active:bg-lime-700 cursor-pointer"
    >
      Создать диету
    </button>
  </div>
</template>
