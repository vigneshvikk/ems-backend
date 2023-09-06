const express=require('express')
const server=express()
const cors=require('cors')
server.use(cors({origin:'http://localhost:3000'}))
server.use(express.json())

const logicfile=require('./services/logic')



server.listen(8081,()=>{
console.log('-----------------emsServer start at port 8000--------------------');
})
logicfile.getAllEmployees



//get all employee
server.get('/getEmployees',(req,res)=>{
    logicfile.getAllEmployees().then(result=>{
    res.status(result.statusCode).json(result)
    })
    })

    //get single employee
server.get('/get-employees/:id',(req,res)=>{
    logicfile.getEmployees(req.params.id).then(result=>{
    res.status(result.statusCode).json(result)
    })
    })


    //remove
    server.delete('/deleteemployee/:id',(req,res)=>{
        logicfile.removeEmployee(req.params.id).then(result=>{
        res.status(result.statusCode).json(result)
        })
        })   


//add
server.post('/addemployee',(req,res)=>{
    logicfile.addNewEmployee(req.body.id,req.body.name,req.body.designation,req.body.salary,req.body.experience).then(result=>{
    res.status(result.statusCode).json(result)
    })
    }) 
    
//edit
server.post('/editemployee',(req,res)=>{
    logicfile.editEmployee(req.body.id,req.body.name,req.body.designation,req.body.salary,req.body.experience).then(result=>{
    res.status(result.statusCode).json(result)
    })
    }) 