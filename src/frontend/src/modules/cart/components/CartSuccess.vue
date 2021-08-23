<template>
  <div class="popup">
    <router-link to="/" class="close">
      <span class="visually-hidden"></span>
    </router-link>
    <div class="popup__title">
      <h2 class="title">Спасибо за заказ</h2>
    </div>
    <p>Мы начали готовить Ваш заказ, скоро привезём его вам ;)</p>
    <div class="popup__button">
      <router-link to="/" class="button">Отлично, я жду!</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "CartSuccess",
};
</script>
