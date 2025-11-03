const express = require("express");
const router = express.Router();

const menu = require("../models/menu");

router.post("/", async (req, res) => {
  try {
    const data = req.body;
    const newMenu = new menu(data);
    const reponse = await newMenu.save();
    console.log("Menu saved:", reponse);
    res.status(201).json(reponse);
  } catch (error) {
    console.log("Error saving menu:", error);

    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.get("/", async (req, res) => {
  try {
    const menus = await menu.find();
    res.status(200).json(menus);
  } catch (error) {
    console.log("Error fetching menu:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.get("/:category", async (req, res) => {
  try {
    const category = req.params.category;
    const menus = await menu.find({ category: category });
    res.status(200).json(menus);
  } catch (error) {
    console.log("Error fetching menu:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;