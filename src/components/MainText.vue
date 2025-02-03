<!-- Текст и картинка с главной страницы. -->
<template>
  <div class="example flex bg-lime">
    <img src="/food.png" alt="MainPhoto" width="400" />
    <div>
      <span class="head arial sans-serif">JUSTDIET</span>
      <h1>
        <p class="first flex-center">
          Веб-приложение, с помошью которого вы сможете легко и удобно следовать
          своей диете и достигать поставленных целей.
        </p>
        <p class="sec">Пользователям предлагаются следующие возможности:</p>
        <ul class="list">
          <li>Удобный интерфейс</li>
          <li>Создание своего собственного рациона</li>
          <li>Выбор из предложенных диет</li>
        </ul>
        <p class="p1">
          Ниже вы можете начать работу над своим телом. А мы поможем Вам в этом
          деле. Успехов!
        </p>
      </h1>
    </div>
  </div>
</template>

<style>
body {
  background-color: rgb(220, 300, 200);
}
.example {
  background-color: #379683;

  color: white;
  text-align: center;
}
.head {
  color: black;
  font-size: 50px;
  font-weight: 800;
  font-style: oblique;
}

.first {
  font-family: 'Trebuchet MS', Verdana, sans-serif;
  font-size: 20px;
}
.sec {
  font-family: 'Trebuchet MS', Verdana, sans-serif;
  font-size: 20px;
}
.list {
  font-size: 20px;
  font-style: oblique;

  font-family: Helvetica, Arial, sans-serif;
}

.p1 {
  font-size: 20px;
}
</style>
