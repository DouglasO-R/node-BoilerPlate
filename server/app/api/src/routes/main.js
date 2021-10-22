import { Router } from "express";
import { mainController } from "../controllers";
import { ValidateMiddleware } from "../utils/joiValidate";

const router = Router();

router.get('/',mainController.index);
router.get('/:id',mainController.show);
router.post('/',ValidateMiddleware,mainController.create);
router.put('/:id',mainController.update);
router.delete('/:id',mainController.delet);


export default router;