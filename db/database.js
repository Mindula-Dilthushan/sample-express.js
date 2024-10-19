const mysql = require("mysql2");

const database = mysql.createConnection({
    host: "localhost",
    user: "root",
    password : "1023",
    database: "onsty_db",
    port: 3306
})

database.connect((err) => {
    if(err){
        console.log("database connecting error!");
        return;
    }else{
        console.log("database connected!");
        
    }
})

module.exports = database;