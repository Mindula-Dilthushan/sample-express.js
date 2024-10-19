const express = require("express");

const app = express();

const PORT = 5000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send("Root Server...!");
})

app.listen(PORT, () => {
    console.log(`Server is runing on PORT ${PORT}`);
})

