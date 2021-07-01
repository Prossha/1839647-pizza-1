<template>
  <!DOCTYPE html>
  <html lang="ru">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link
        rel="preload"
        href="fonts/roboto-bold.woff2"
        as="font"
        type="font/woff2"
        crossorigin="anonymous"
      />
      <link
        rel="preload"
        href="fonts/roboto-regular.woff2"
        as="font"
        type="font/woff2"
        crossorigin="anonymous"
      />
      <link
        rel="preload"
        href="fonts/roboto-light.woff2"
        as="font"
        type="font/woff2"
        crossorigin="anonymous"
      />
      <link
        rel="preload"
        href="fonts/roboto-bold.woff"
        as="font"
        type="font/woff"
        crossorigin="anonymous"
      />
      <link
        rel="preload"
        href="fonts/roboto-regular.woff"
        as="font"
        type="font/woff"
        crossorigin="anonymous"
      />
      <link
        rel="preload"
        href="fonts/roboto-light.woff"
        as="font"
        type="font/woff"
        crossorigin="anonymous"
      />
      <link rel="stylesheet" href="css/style.min.css" />
      <title>V!U!E! Pizza - главная</title>
    </head>
    <body>
      <header class="header">
        <div class="header__logo">
          <a href="index.html" class="logo">
            <img
              src="img/logo.svg"
              alt="V!U!E! Pizza logo"
              width="90"
              height="40"
            />
          </a>
        </div>
        <div class="header__cart">
          <a href="cart.html">0 ₽</a>
        </div>
        <div class="header__user">
          <a href="#" class="header__login"><span>Войти</span></a>
        </div>
      </header>

      <main class="content">
        <form action="#" method="post">
          <div class="content__wrapper">
            <h1 class="title title--big">Конструктор пиццы</h1>

            <div class="content__dough">
              <div class="sheet">
                <h2 class="title title--small sheet__title">Выберите тесто</h2>

                <div
                  v-for="(item, index) in pizza.dough"
                  :key="index"
                  class="sheet__content dough"
                >
                  <label
                    class="dough__input"
                    :class="`dough__input--${item.size}`"
                  >
                    <input
                      type="radio"
                      name="dought"
                      value="light"
                      class="visually-hidden"
                      checked
                    />
                    <b>{{ item.name }}</b>
                    <span>{{ item.description }}</span>
                  </label>
                </div>
              </div>
            </div>

            <div class="content__diameter">
              <div class="sheet">
                <h2 class="title title--small sheet__title">Выберите размер</h2>

                <div
                  v-for="(item, index) in pizza.sizes"
                  :key="index"
                  class="sheet__content diameter"
                >
                  <label
                    class="diameter__input diameter__input--small"
                    :class="`diameter__input--${decodeSize(item.multiplier)}`"
                  >
                    <input
                      type="radio"
                      name="diameter"
                      value="small"
                      class="visually-hidden"
                    />
                    <span>{{ item.name }}</span>
                  </label>
                </div>
              </div>
            </div>

            <div class="content__ingridients">
              <div class="sheet">
                <h2 class="title title--small sheet__title">
                  Выберите ингридиенты
                </h2>

                <div class="sheet__content ingridients">
                  <div class="ingridients__sauce">
                    <p>Основной соус:</p>

                    <label
                      v-for="(item, index) in pizza.sauces"
                      :key="index"
                      class="radio ingridients__input"
                    >
                      <input type="radio" name="sauce" :value="item.value" />
                      <span>{{ item.name }}</span>
                    </label>
                  </div>

                  <div class="ingridients__filling">
                    <p>Начинка:</p>

                    <ul class="ingridients__list">
                      <li
                        v-for="(item, index) in pizza.ingredients"
                        :key="index"
                        class="ingridients__item"
                      >
                        <span class="filling" :class="`filling--${item.alias}`">
                          {{ item.name }}
                        </span>

                        <div
                          class="counter counter--orange ingridients__counter"
                        >
                          <button
                            type="button"
                            class="
                              counter__button
                              counter__button--disabled
                              counter__button--minus
                            "
                          >
                            <span class="visually-hidden">Меньше</span>
                          </button>
                          <input
                            type="text"
                            name="counter"
                            class="counter__input"
                            value="0"
                          />
                          <button
                            type="button"
                            class="counter__button counter__button--plus"
                          >
                            <span class="visually-hidden">Больше</span>
                          </button>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div class="content__pizza">
              <label class="input">
                <span class="visually-hidden">Название пиццы</span>
                <input
                  type="text"
                  name="pizza_name"
                  placeholder="Введите название пиццы"
                />
              </label>

              <div class="content__constructor">
                <div class="pizza pizza--foundation--big-tomato">
                  <div class="pizza__wrapper">
                    <div class="pizza__filling pizza__filling--ananas"></div>
                    <div class="pizza__filling pizza__filling--bacon"></div>
                    <div class="pizza__filling pizza__filling--cheddar"></div>
                  </div>
                </div>
              </div>

              <div class="content__result">
                <p>Итого: 0 ₽</p>
                <button type="button" class="button button--disabled" disabled>
                  Готовьте!
                </button>
              </div>
            </div>
          </div>
        </form>
      </main>
    </body>
  </html>
</template>

<script>
import misc from "../static/misc.json";
import pizza from "../static/pizza.json";
import user from "../static/user.json";

export default {
  name: "Idnex",

  data() {
    return {
      misc,
      pizza,
      user,
    };
  },

  methods: {
    decodeSize(id) {
      if (id === 1) return "small";
      if (id === 2) return "normal";
      if (id === 3) return "big";
    },
  },
};
</script>

<style scoped></style>
