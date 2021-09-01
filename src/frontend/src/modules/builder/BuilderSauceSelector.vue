<template>
  <div class="ingridients__sauce">
    <p>Основной соус:</p>
    <label
      class="radio ingridients__input"
      v-for="(item, index) in data.sauces"
      :key="index"
    >
      <input
        type="radio"
        name="sauce"
        :value="item.value"
        :checked="isChecked(item.name)"
        @change="selectSauce(item)"
      />
      <span>
        {{ item.name }}
      </span>
    </label>
  </div>
</template>

<script>
import { mapMutations, mapState } from "vuex";

export default {
  name: "BuilderSauceSelector",

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
      return name === this.pizza.sauce.name;
    },

    selectSauce(sauce) {
      this.setPizzaParam({ param: "sauce", value: sauce });
    },
  },
};
</script>
