<!-- Здесь реализовано окно, появляющееся при нажатии на "Выбрать диету из каталога" -->

<script setup>
import { inject, ref } from 'vue';
// При нажатии на диету будет появляться информация про неё. Это переменные, указывающие на то, что произошло нажатие.
const isTextVisible1 = ref(false);
const isTextVisible2 = ref(false);
const isTextVisible3 = ref(false);
const isTextVisible4 = ref(false);

// Функции, меняющие значение булевых переменных, для появления текста.
function toggle1Text() {
  isTextVisible1.value = !isTextVisible1.value;
}
function toggle2Text() {
  isTextVisible2.value = !isTextVisible2.value;
}
function toggle3Text() {
  isTextVisible3.value = !isTextVisible3.value;
}
function toggle4Text() {
  isTextVisible4.value = !isTextVisible4.value;
}

const { close2Drawer } = inject('diets');
</script>

<template>
  <!-- Кнопка выхода из выбора диет. Картинка "стрелочки" вставлена кодом. -->
  <div class="fixed top-0 left-0 h-full w-full bg-black z-1 opacity-70"></div>
  <div class="bg-white w-full h-full fixed z-20 p-10">
    <div class="flex items-center gap-5">
      <svg
        @click="close2Drawer"
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
      <h2 class="text-2-xl font-bold">Выбор диеты</h2>
    </div>
    <div>
      <!-- Идет перечисление всех диет. -->
      <p class="font-bold">Диеты для похудения</p>
      <ul>
        <div class="flex">
          <!-- Реализация выбора. -->
          <input
            type="checkbox"
            v-model="light"
            v-bind:true-value="on"
            v-bind:false-value="off"
          />
          <!-- Если происходит нажатие на текст, то выдвигается информация. Аналогично у остальных элементов списка. -->
          <li
            @click="toggle1Text"
            class="protein cursor-pointer clickable-text flex"
          >
            <span v-if="light === on"></span>
            <span v-else></span>
            <h1>Белковая</h1>
          </li>
        </div>
        <transition name="fade">
          <p v-if="isTextVisible1" class="hidden-text">TBA</p>
        </transition>
        <div class="flex">
          <input
            type="checkbox"
            v-model="light"
            v-bind:true-value="on"
            v-bind:false-value="off"
          />
          <span v-if="light === on"></span>
          <span v-else></span>
          <li
            @click="toggle2Text"
            class="protein cursor-pointer clickable-text"
          >
            Низкоуглеводная
          </li>
        </div>
        <transition name="fade">
          <p v-if="isTextVisible2" class="hidden-text">TBA</p>
        </transition>
        <div class="flex">
          <input
            type="checkbox"
            v-model="light"
            v-bind:true-value="on"
            v-bind:false-value="off"
          />
          <span v-if="light === on"></span>
          <span v-else></span>
          <li
            @click="toggle3Text"
            class="protein cursor-pointer clickable-text"
          >
            Низкокалорийная
          </li>
        </div>
        <transition name="fade">
          <p v-if="isTextVisible3" class="hidden-text">TBA</p>
        </transition>
        <div class="flex">
          <input
            type="checkbox"
            v-model="light"
            v-bind:true-value="on"
            v-bind:false-value="off"
          />
          <span v-if="light === on"></span>
          <span v-else></span>
          <li
            @click="toggle4Text"
            class="protein cursor-pointer clickable-text"
          >
            Детокс-диета
          </li>
        </div>
        <transition name="fade">
          <p v-if="isTextVisible4" class="hidden-text">TBA</p>
        </transition>
      </ul>
      <p class="font-bold">Диеты для набора мышечной массы</p>
      <ul>
        <li>TBA</li>
      </ul>
    </div>
    <!-- Реализация кнопки "Создать диету". -->
    <button
      class="my-7 bg-lime-500 rounded-xl py-3 w-40 text-white disabled:bg-slate-400 hover:bg-lime-600 active:bg-lime-700 cursor-pointer"
    >
      Создать диету
    </button>
  </div>
</template>

<style>
.protein {
  text-decoration: underline;
  color: green;
}
</style>
