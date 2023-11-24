const express = require("express");
const dotenv = require("dotenv");
const postsRouter = require("./routers/posts");
const categoriesRouter = require("./routers/categories");
const tagsRouter = require("./routers/tags");

dotenv.config();

const app = express();
const port = process.env.PORT || 3306;
app.use(express.json());


app.use("/posts", postsRouter);

app.use("/categories", categoriesRouter);

app.use("/tags", tagsRouter);


app.listen(port, () => {
    console.log(`Example app listening on http://localhost:${port}`);
});