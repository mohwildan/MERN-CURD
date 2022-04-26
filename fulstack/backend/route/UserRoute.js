import express from "express";
import { getUser, getUserById, saveUser, updateUser, deleteUser } from "../controller/UserController.js";
const router = express.Router();


router.get("/users", getUser); //dapatkan data
router.get("/users/:id", getUserById); //lihat data
router.post("/users", saveUser); // masukan data
router.patch("/users/:id", updateUser); //updata data
router.delete("/users/:id", deleteUser);// delete data







export default router;
