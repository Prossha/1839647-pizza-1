<template>
  <header class="header">
    <BaseLogo></BaseLogo>
    <div class="header__cart">
      <router-link to="/cart">0 ₽</router-link>
    </div>
    <div class="header__user">
      <router-link to="/login" class="header__login">
        <span> Войти </span>
      </router-link>
    </div>
  </header>
</template>

<script>
export default {
  name: "AppLayoutHeader",
};
</script>
