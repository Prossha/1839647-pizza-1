<template>
  <div class="content__dough">
    <div class="sheet">
      <h2 class="title title--small sheet__title">Выберите тесто</h2>

      <div class="sheet__content dough">
        <label
          v-for="(item, index) in data.doughs"
          :key="index"
          class="dough__input"
          :class="`dough__input--${item.size}`"
          @change="selectDough(item)"
        >
          <input
            type="radio"
            name="dought"
            class="visually-hidden"
            :value="item.name"
            :checked="isChecked(item.name)"
          />
          <b>{{ item.name }}</b>
          <span>{{ item.description }}</span>
        </label>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from "vuex";

export default {
  name: "BuilderDoughSelector.vue",

  computed: {
    ...mapState("Builder", {
      data: "data",
      pizza: "pizza",
    }),
  },

  methods: {
    ...mapMutations("Builder", {
      setPizzaParam: "setPizzaParam",
    }),

    isChecked(name) {
      return name === this.pizza.dough.name;
    },

    selectDough(dough) {
      this.setPizzaParam({ param: "dough", value: dough });
    },
  },
};
</script>
