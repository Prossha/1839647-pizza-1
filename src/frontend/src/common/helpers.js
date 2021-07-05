import { DOUGH_TYPE } from "./constants";
import { INGREDIENTS_NAME } from "./constants";
import { SAUCES } from "./constants";
import { SIZE } from "./constants";

export const findDoughType = (dough) => {
  const item = DOUGH_TYPE.find((item) => dough.name === item.name);
  return {
    ...dough,
    size: item.size,
  };
};

export const findIngredientsName = (ingredients) => {
  const item = INGREDIENTS_NAME.find((item) => ingredients.name === item.name);
  return {
    ...ingredients,
    alias: item.alias,
  };
};

export const findSize = (itemSize) => {
  const item = SIZE.find((item) => itemSize.multiplier === item.multiplier);
  return {
    ...itemSize,
    value: item.size,
  };
};

export const findSauces = (sauces) => {
  const item = SAUCES.find((item) => sauces.name === item.name);
  return {
    ...sauces,
    value: item.value,
  };
};
