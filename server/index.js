import express from "express"
import mysql from "mysql"


const app = express();

const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"Sharan@123",
    database:"emp_demo"
})
// if you get like {"code":"PROTOCOL_ENQUEUE_AFTER_FATAL_ERROR","fatal":false} open MySql command line paste it 
// ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password';

app.use(express.json()) // add this is not send throgth postman 

app.get("/getEmp",(req,res)=>{
    const q = "SELECT * FROM employee"
    db.query(q,(err,data)=>{
        if(err) return res.json(err)
            return res.json(data)

    })
})


app.get("/getData",(req,res)=>{
    res.json("Hello Get method")
})


app.post("/createEmp",(req,res)=>{
    const q = "INSERT INTO employee (`id`,`des`,`name`,`passwoprd`,`phone`,`sal`) VALUES (?)";
    // const values =[
    //     "2",
    //     "SDE",
    //     "Sharan",
    //     "@123",
    //     "9742595070",
    //     "35000"
    // ]

    const values =[
        req.body.id,
        req.body.des,
        req.body.name,
        req.body.passwoprd,
        req.body.phone,
        req.body.sal,
    ]

    db.query(q,[values],(err,data)=>{
        if(err) return res.json(err)
            return res.json("employee are created")
    })
})









app.listen(8787,()=>{
    console.log("Server Connecetd");
    
})

