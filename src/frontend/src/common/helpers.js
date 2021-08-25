import { DOUGH_TYPE } from "./constants";
import { INGREDIENTS_NAME } from "./constants";
import { SAUCES } from "./constants";
import { SIZE } from "./constants";

export const findDoughType = (dough) => {
  const item = DOUGH_TYPE.find((item) => dough.name === item.name);
  return {
    ...dough,
    id: 1,
    size: item.size,
    style: item.style,
  };
};

export const findIngredientsName = (ingredients) => {
  const item = INGREDIENTS_NAME.find((item) => ingredients.name === item.name);
  return {
    ...ingredients,
    quantity: 0,
    alias: item.alias,
  };
};

export const findSize = (itemSize) => {
  const item = SIZE.find((item) => itemSize.multiplier === item.multiplier);
  return {
    ...itemSize,
    id: 3,
    size: item.size,
  };
};

export const findSauces = (sauces) => {
  const item = SAUCES.find((item) => sauces.name === item.name);
  return {
    ...sauces,
    id: 2,
    value: item.value,
  };
};

export const prepareAdditionals = (additionals) => {
  return additionals.map((additional) => {
    return {
      ...additional,
      quantity: 0,
    };
  });
};
