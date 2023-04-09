//import express from "express";
import express from "express";
//import controller
import { Home, Route1, Route2 } from "../controllers/controller_express.js";
//initialize express
const router = express.Router();
//define routes
router.get("/", Home);
router.get("/route1", Route1);
router.get("/route2", Route2);
//export router



// export default router
export default router;
