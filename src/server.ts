/**
 * Node modules
 */

import express from "express";
/**
 * Custom modules
 */
import config from "./config"
/**
 * Express app initial
 */

const app = express();

app.listen(config.PORT, ()=> {
  console.log(`Server running: http://localhost:${config.PORT}`)
})