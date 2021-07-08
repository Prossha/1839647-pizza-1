<template>
  <div class="content__dough">
    <div class="sheet">
      <h2 class="title title--small sheet__title">Выберите тесто</h2>

      <div class="sheet__content dough">
        <label
          v-for="(item, index) in dough"
          :key="index"
          class="dough__input"
          :class="`dough__input--${item.size}`"
          @change="$emit('selectDough', item)"
        >
          <input
            type="radio"
            name="dought"
            class="visually-hidden"
            :value="item.value"
          />
          <b>{{ item.name }}</b>
          <span>{{ item.description }}</span>
        </label>
      </div>
    </div>
  </div>
</template>

<script>
import { findDoughType } from "../../common/helpers";

export default {
  name: "BuilderDoughSelector.vue",

  props: {
    pizza: {
      type: Object,
      required: true,
    },
  },

  data() {
    return {
      dough: this.pizza.dough.map((item) => findDoughType(item)),
    };
  },
};
</script>
