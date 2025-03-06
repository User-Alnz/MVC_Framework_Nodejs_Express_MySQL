import { Router } from "express";

const router = Router();

router.get("/test/", (req, res) => {

    const { name } = req.body;
    
    if(!name)
        throw new Error("params are required");

    res.send("working");


});

import middlewareExample from "./middleware/middlewareExample";

router.get("/testAsync", middlewareExample.AsyncRead);
router.get("/testSync", middlewareExample.SyncRead);

export default router;