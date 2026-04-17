import { Router, type IRouter } from "express";
import healthRouter from "./health";
import candyMachineRouter from "./candy-machine";

const router: IRouter = Router();

router.use(healthRouter);
router.use(candyMachineRouter);

export default router;
