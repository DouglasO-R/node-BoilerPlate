import { Router } from "express";
import mainRoutes from "./main";
import errorHandler from "../utils/errorHandler";



const router = Router();

router.use('/main', mainRoutes);
router.use(errorHandler);

export {router};