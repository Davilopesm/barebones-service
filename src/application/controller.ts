import { Router } from "express";
import databaseConnection from "../infrastructure/database/databaseConnection";
const router = Router();

router.get('/health/ping', (req, res, next) => {
  console.info("Pong!");
  res.sendStatus(200);
})

router.get('/health/check', async (req, res, next) => {
  try {
    await databaseConnection.select("*").from("table_example");
    res.sendStatus(200);
  } catch(error) {
    throw error;
  }
})

export const HealthController = router;
