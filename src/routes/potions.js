const express = require("express");
const { eq } = require("drizzle-orm");

const db = require("../db/db");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const potions = await db.select().from("potions");
    return res.status(200).json(potions);
  } catch (error) {
    console.error("Error fetching potions:", error);
    return res.status(500).json({
      success: false,
      error: "Internal Server Error",
    });
  }
});
