<template>
  <main class="content">
    <form action="#" method="post" @submit.prevent="handleSubmit">
      <div class="content__wrapper">
        <h1 class="title title--big">Конструктор пиццы</h1>

        <BuilderDoughSelector />

        <BuilderSizeSelector />

        <BuilderIngredientsSelector />

        <BuilderPizzaView />
      </div>
    </form>
  </main>
</template>

<script>
import { mapActions, mapGetters, mapMutations, mapState } from "vuex";

import BuilderDoughSelector from "../modules/builder/BuilderDoughSelector";
import BuilderSizeSelector from "../modules/builder/BuilderSizeSelector";
import BuilderIngredientsSelector from "../modules/builder/BuilderIngredientsSelector";
import BuilderPizzaView from "../modules/builder/BuilderPizzaView";

export default {
  name: "Index",

  components: {
    BuilderDoughSelector,
    BuilderSizeSelector,
    BuilderIngredientsSelector,
    BuilderPizzaView,
  },

  computed: {
    ...mapState("Builder", {
      pizza: "pizza",
    }),
    ...mapState("Cart", ["pizzas"]),

    ...mapGetters("Builder", {
      pizzaPrice: "pizzaPrice",
    }),
  },

  methods: {
    ...mapActions("Builder", {
      addPizza: "addPizza",
    }),

    ...mapMutations("Cart", {
      updateReadyPizza: "updateReadyPizza",
    }),

    handleSubmit() {
      if (this.pizzas) {
        const hasPizza = this.pizzas.find(
          (item) => item.name === this.pizza.name
        );
        this.pizza.price = this.pizzaPrice;
        this.pizza.quantity = 1;
        if (hasPizza) {
          this.updateReadyPizza({
            name: hasPizza.name,
            item: this.pizza,
          });
          this.$router.push("/cart");
        } else {
          this.addPizza();
        }
      }
    },
  },
};
</script>
