import express from "express";
import { login, me, register } from "../controllers/authController.js";
import { allowRoles, verifyToken } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);

router.get("/me", verifyToken, me);

router.get("/admin", verifyToken, allowRoles("admin"), (req, res) => {
  res.json({
    message: "Selamat datang admin",
    user: req.user,
  });
});

router.get("/user", verifyToken, allowRoles("admin", "user"), (req, res) => {
  res.json({
    message: "Selamat datang user",
    user: req.user,
  });
});

export default router;