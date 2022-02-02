import express from "express";
import {
  deleteProduct,
  getVacants,
  postProduct,
  postLogin,
  editProduct,
  getPizza,
  getBurger,
  getSauce,
  getDessert,
  getDrink,
  editMenu,
  getMenu,
  postRegister,
  postVacant,
  deleteVacant,
} from "../Controllers/productControllers.js";
// import requireAuth from "../helper/Auth.js";
import upload from "../helper/fileHelper.js";
const router = express.Router();

router.get("/vacancy", getVacants);
router.get("/menus", getMenu);
router.get("/pizza", getPizza);
router.get("/burger", getBurger);
router.get("/sauce", getSauce);
router.get("/dessert", getDessert);
router.get("/drink", getDrink);

router.post("/postproduct", upload.single("img"), postProduct);
router.post("/postvacant", upload.single("img"), postVacant);
router.post("/register", postRegister);
router.post("/login", postLogin);

router.put("/updatemenu", upload.single("img"), editMenu);
router.put("/updateproduct", upload.single("img"), editProduct);

router.delete("/deleteproduct", deleteProduct);
router.delete("/deletevacant", deleteVacant);

export default router;
