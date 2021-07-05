import { DOUGH_TYPE } from "./constants";
import { INGREDIENTS_NAME } from "./constants";

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
