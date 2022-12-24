import { Router } from "express"; //expres router
import { sender } from "./nodemailer.js";

const router = Router();

router.get("/", (req, res) => {
    res.json("server working");
});

router.post("/send", async (req, res) => {
    try {
        const { name, email, content } = req.body;
        // Because phone is an optional param
        const emailsResponse = await sender(
            name,
            req.body.phone ? req.body.phone : "none",
            email,
            content
        );

        res.status(emailsResponse.statusCode).json(emailsResponse.status);
    } catch (error) {
        res.status(500).json("Internal server error");
    }
});

export default router;
