import app from "./app.js";

app.listen(app.get("PORT"), () => {
    console.log(`server on port ${app.get("PORT")}`);
});
