const db=require('./db')

//get all employee
getAllEmployees=()=>{
 return db.Employee.find().then(users=>{
    if(users){
return{
    status:true,
    statusCode:200,
    message:users
}
    }else{
        return{
            status:false,
            statusCode:400,
            message:'no employee present'
        }
    }
 })
}

//get single employee(view)
getEmployees=(id)=>{
return db.Employee.findOne({id}).then(employee=>{
    if(employee){
        return{
            status:true,
            statusCode:200,
            message:employee
        }
    }else{
        return{
            status:false,
            statusCode: 400,
            message:'no employee present'
        }
    }

})
}






//add new employee

addNewEmployee=(id,name,designation,salary,experience)=>{
   return db.Employee.findOne({id}).then(employee=>{
        if(employee){
            return{
            status:false,
            statusCode: 400,
            message:' employee already present'
        }
        }else{
newEmployee= new db.Employee({
    id,
    name,
    designation,
    salary,
    experience
})
newEmployee.save()
return{
            status:true,
            statusCode:200,
            message:'new employee added'
        }
        }
    })
}



//edit new employee

editEmployee=(id,name,designation,salary,experience)=>{
 return   db.Employee.findOne({id}).then(employee=>{
        if(employee){

            employee.name=name,
            employee.designation=designation,
            employee.salary=salary,
            employee.experience=experience

            employee.save()
            return{
                status:true,
                statusCode:200,
                message:"employee data updated"
            }

        }else{
            return{
            status:false,
            statusCode: 400,
            message:'no employee present'
        }            
        }
    })
}

//delete employee
removeEmployee=(id)=>{
    return db.Employee.deleteOne({id}).then(data=>{
        if(data){
            return{
                status:true,
                statusCode:200,
                message:'employee deleted'
            }
        }else{
            return{
                status:false,
                statusCode:400,
                message:'no employee present'
            }
        }
    })
}





module.exports={
    getAllEmployees,getEmployees,removeEmployee,addNewEmployee,editEmployee
}