<template>
  <div class="ingridients__sauce">
    <p>Основной соус:</p>
    <label
      class="radio ingridients__input"
      v-for="(item, index) in sauces"
      :key="index"
    >
      <input
        type="radio"
        name="sauce"
        :value="item.value"
        @change="$emit('change', item)"
      />
      <span>
        {{ item.name }}
      </span>
    </label>
  </div>
</template>

<script>
export default {
  name: "BuilderSauceSelector",

  props: {
    sauces: {
      type: Array,
      required: true,
    },
  },
};
</script>
