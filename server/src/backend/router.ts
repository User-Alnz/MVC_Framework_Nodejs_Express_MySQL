import { Router } from "express";

const router = Router();

/* Example to config router */
import middlewareExample from "./middleware/middlewareExample";

router.get("/testAsync", middlewareExample.AsyncRead);
router.get("/testSync", middlewareExample.SyncRead);

export default router;