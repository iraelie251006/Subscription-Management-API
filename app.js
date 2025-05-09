import express from "express";

const app = express();

app.get("/", (req, res) => {
    res.send("Welcome to SubDub API")
})

app.listen(4000, () => {
    console.log("Server is running on http://localhost:4000")
})

export default app