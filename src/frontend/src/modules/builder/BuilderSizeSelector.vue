<template>
  <div class="content__diameter">
    <div class="sheet">
      <h2 class="title title--small sheet__title">Выберите размер</h2>

      <div class="sheet__content diameter">
        <label
          v-for="(item, index) in data.sizes"
          :key="index"
          class="diameter__input"
          :class="`diameter__input--${item.size}`"
          @change="selectSize(item)"
        >
          <input
            type="radio"
            name="diameter"
            value="small"
            class="visually-hidden"
            :checked="isChecked(item.name)"
          />
          <span>{{ item.name }}</span>
        </label>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from "vuex";

export default {
  name: "BuilderSizeSelector",

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
      return name === this.pizza.size.name;
    },

    selectSize(sauce) {
      this.setPizzaParam({ param: "size", value: sauce });
    },
  },
};
</script>
