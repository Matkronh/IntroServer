//imports
const path = require("path");
const PORT = process.env.PORT || 3500;

const express = require("express")
const app = express()

app.get("/", (req, res) => {
    res.sendfile(path.join(__dirname, "view", "index.html"))
})

app.get("/new-page.html", (req, res) => {
    res.sendfile(path.join(__dirname, "view", "new-page.html"))
})
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));