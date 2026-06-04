import bcrypt from "bcrypt";
import db from "./config/Database.js";
import User from "./models/UserModel.js";

const seedAdmin = async () => {
  try {
    await db.authenticate();
    console.log("Database Connected");

    const existingAdmin = await User.findOne({
      where: {
        email: "admin@gmail.com",
      },
    });

    if (existingAdmin) {
      console.log("Admin sudah ada");
      process.exit();
    }

    const hashPassword = await bcrypt.hash("123456", 10);

    await User.create({
      name: "Administrator",
      email: "admin@gmail.com",
      password: hashPassword,
      role: "admin",
    });

    console.log("Admin berhasil dibuat");
    console.log("Email    : admin@gmail.com");
    console.log("Password : 123456");

    process.exit();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

seedAdmin();