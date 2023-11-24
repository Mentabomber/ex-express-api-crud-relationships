const express = require("express");
const dotenv = require("dotenv");
const postsRouter = require("./routers/posts");
const categoriesRouter = require("./routers/categories");

dotenv.config();

const app = express();
const port = process.env.PORT || 3306;
app.use(express.json());


app.use("/posts", postsRouter);

app.use("/categories", categoriesRouter);


app.listen(port, () => {
    console.log(`Example app listening on http://localhost:${port}`);
});