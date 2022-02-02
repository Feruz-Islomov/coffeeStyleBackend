import fs from "fs";

export const savePizzaData = (data) => {
  const stringifyData = JSON.stringify(data);
  fs.writeFileSync("./data/pizza.json", stringifyData);
};
export const getPizzaData = () => {
  const jsonData = fs.readFileSync("./data/pizza.json");
  return JSON.parse(jsonData);
};
export const saveBurgerData = (data) => {
  const stringifyData = JSON.stringify(data);
  fs.writeFileSync("./data/burger.json", stringifyData);
};
export const getBurgerData = () => {
  const jsonData = fs.readFileSync("./data/burger.json");
  return JSON.parse(jsonData);
};
export const saveSauceData = (data) => {
  const stringifyData = JSON.stringify(data);
  fs.writeFileSync("./data/sauce.json", stringifyData);
};
export const getSauceData = () => {
  const jsonData = fs.readFileSync("./data/sauce.json");
  return JSON.parse(jsonData);
};
export const saveDessertData = (data) => {
  const stringifyData = JSON.stringify(data);
  fs.writeFileSync("./data/dessert.json", stringifyData);
};
export const getDessertData = () => {
  const jsonData = fs.readFileSync("./data/dessert.json");
  return JSON.parse(jsonData);
};
export const saveDrinkData = (data) => {
  const stringifyData = JSON.stringify(data);
  fs.writeFileSync("./data/drink.json", stringifyData);
};
export const getDrinkData = () => {
  const jsonData = fs.readFileSync("./data/drink.json");
  return JSON.parse(jsonData);
};
export const saveMenuData = (data) => {
  const stringifyData = JSON.stringify(data);
  fs.writeFileSync("./data/menus.json", stringifyData);
};
export const getMenuData = () => {
  const jsonData = fs.readFileSync("./data/menus.json");
  return JSON.parse(jsonData);
};
export const saveAdmin = (data) => {
  const stringifyData = JSON.stringify(data);
  fs.writeFileSync("./data/admin.json", stringifyData);
};
export const getAdmin = () => {
  const jsonData = fs.readFileSync("./data/admin.json");
  return JSON.parse(jsonData);
};
export const saveVacant = (data) => {
  const stringifyData = JSON.stringify(data);
  fs.writeFileSync("./data/vacancy.json", stringifyData);
};
export const getVacant = () => {
  const jsonData = fs.readFileSync("./data/vacancy.json");
  return JSON.parse(jsonData);
};
