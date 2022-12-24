import { Router } from "express"; //expres router
import { sender } from "./nodemailer.js";

const router = Router();

router.get("/", (req, res) => {
    res.json("server working");
});

router.post("/send", (req, res) => {
    res.json(req.body);
    const { name, email, content } = req.body;
    // Because phone is an optional param
    sender(name, req.body.phone ? req.body.phone : "none", email, content);
});

export default router;
