<template>
  <main class="content">
    <form action="#" method="post">
      <div class="content__wrapper">
        <h1 class="title title--big">Конструктор пиццы</h1>

        <div class="content__dough">
          <div class="sheet">
            <h2 class="title title--small sheet__title">Выберите тесто</h2>

            <div class="sheet__content dough">
              <label
                v-for="(item, index) in dough"
                :key="index"
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

            <div class="sheet__content diameter">
              <label
                v-for="(item, index) in sizes"
                :key="index"
                class="diameter__input"
                :class="`diameter__input--${item.size}`"
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
                  v-for="(item, index) in sauces"
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
                    v-for="(item, index) in ingredients"
                    :key="index"
                    class="ingridients__item"
                  >
                    <span class="filling" :class="`filling--${item.alias}`">
                      {{ item.name }}
                    </span>

                    <div class="counter counter--orange ingridients__counter">
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
</template>

<script>
import misc from "../static/misc.json";
import pizza from "../static/pizza.json";
import user from "../static/user.json";
import { findDoughType } from "../common/helpers";
import { findIngredientsName } from "../common/helpers";
import { findSauces } from "../common/helpers";
import { findSize } from "../common/helpers";

export default {
  name: "Index",

  data() {
    return {
      misc,
      pizza,
      dough: pizza.dough.map((item) => findDoughType(item)),
      ingredients: pizza.ingredients.map((item) => findIngredientsName(item)),
      sizes: pizza.sizes.map((item) => findSize(item)),
      sauces: pizza.sauces.map((item) => findSauces(item)),
      user,
    };
  },
};
</script>

<style scoped></style>
