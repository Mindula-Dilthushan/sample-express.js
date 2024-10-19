const express = require("express");
const userRoute = require("./routes/userRoutes");

const app = express();

const PORT = 5000;

app.use(express.json());

app.use("/user", userRoute);

app.get('/', (req, res) => {
    res.send("Root Server...!");
})

app.listen(PORT, () => {
    console.log(`Server is runing on PORT ${PORT}`);
})

