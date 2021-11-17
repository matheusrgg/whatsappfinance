import express from "express";
const router = express.Router();
// import { chamadaApiFinancas1 }  from './controller/chamadaApi.js';
import { cotacaoDolar }  from './controller/chamadaApiValendo.js';
router.get("/testeDocker", (req, res) => {

  res.send("Hello World");
});


// router.get("/api", setInterval(cotacaoDolar,3000));


router.get("/api",cotacaoDolar);
export default router;