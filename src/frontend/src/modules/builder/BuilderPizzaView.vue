<template>
  <div class="content__pizza">
    <BaseInput
      name="pizza_name"
      placeholder="Введите название пиццы"
      @inputData="setPizzaName"
    >
      <span class="visually-hidden">Название пиццы</span>
    </BaseInput>

    <BaseDrop @drop="addIngredient">
      <div class="content__constructor">
        <div :class="`pizza pizza--foundation--${pizzaDough}-${pizzaSauce}`">
          <div class="pizza__wrapper">
            <div
              v-for="ingredient in selectIngredients"
              :key="ingredient.alias"
              :class="getIngredientClasses(ingredient)"
            ></div>
          </div>
        </div>
      </div>
    </BaseDrop>

    <div class="content__result">
      <p>Итого: {{ pizzaPrice }} ₽</p>
      <BaseButton type="submit" :disabled="!pizzaDone">Готовьте!</BaseButton>
    </div>
  </div>
</template>

<script>
import BaseInput from "../../common/components/BaseInput";
import BaseButton from "../../common/components/BaseButton";
import BaseDrop from "../../common/components/BaseDrop";
import { mapState, mapGetters, mapMutations } from "vuex";

export default {
  name: "BuilderPizzaView",

  components: {
    BaseInput,
    BaseButton,
    BaseDrop,
  },

  computed: {
    ...mapState("Builder", {
      pizza: "pizza",
    }),

    ...mapGetters("Builder", {
      pizzaPrice: "pizzaPrice",
      pizzaDone: "pizzaDone",
      selectIngredients: "selectedIngredients",
    }),

    pizzaSauce() {
      return this.pizza.sauce?.value ?? "tomato";
    },

    pizzaDough() {
      return this.pizza.dough?.style ?? "big";
    },

    pizzaSize() {
      return this.pizza.size?.multiplier ?? 1;
    },
  },

  methods: {
    ...mapMutations("Builder", {
      updatePizzaIngredient: "updatePizzaIngredient",
      setPizzaParam: "setPizzaParam",
    }),

    getIngredientClasses({ quantity, alias }) {
      return [
        "pizza__filling",
        `pizza__filling--${alias}`,
        `${this.getQuantityClass(quantity)}`,
      ];
    },

    addIngredient({ name }) {
      this.updatePizzaIngredient({
        name: name,
        type: "add",
      });
    },

    setPizzaName(val) {
      this.setPizzaParam({ param: "name", value: val });
    },

    getQuantityClass(count) {
      switch (count) {
        case 2:
          return "pizza__filling--second";
        case 3:
          return "pizza__filling--third";
        default:
          return "";
      }
    },
  },
};
</script>
