<!-- Реализация Header'а (шапки сайта). -->
<template>
  <!-- Вставка названия и значка. -->
  <header class="flex justify-between border-b border-slate-300 px-10 py-8">
    <!-- router-link позволяет реализовать переход между страницами. -->
    <router-link to="/">
      <div class="flex items-center gap-4">
        <img src="/pineapple-svgrepo-com.svg" alt="Logo" width="60" />
        <div>
          <h1 class="text-xl font-bold">JustDiet</h1>
        </div>
      </div>
    </router-link>
    <!-- Основные страницы сайта. -->
    <ul class="flex items-center gap-10">
      <router-link to="/">
        <li
          class="flex items-center cursor-pointer gap-3 text-slate-500 hover:text-black"
        >
          <span>Главная</span>
        </li>
      </router-link>
      <router-link to="/diet">
        <li
          class="flex items-center cursor-pointer gap-3 text-slate-500 hover:text-black"
        >
          <span>Диета</span>
        </li>
      </router-link>
      <router-link to="/contacts">
        <li
          class="flex items-center cursor-pointer gap-3 text-slate-500 hover:text-black"
        >
          <span>Контакты</span>
        </li>
      </router-link>
      <router-link to="/profile">
        <li
          class="flex items-center cursor-pointer gap-1 text-slate-500 hover:text-black"
        >
          <img src="/profile.svg" alt="Profile" width="15" />
          <span>Профиль</span>
        </li>
      </router-link>
    </ul>
  </header>
</template>
