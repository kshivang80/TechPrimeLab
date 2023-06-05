const mongoose=require("mongoose")

const projectSchema=mongoose.Schema({

    projectname:{type:String,required:true},
    reason:{type:String,required:true},
    category:{type:String,required:true},
    type:{type:String,required:true},
    priority:{type:String,required:true},
    division:{type:String,required:true},
    department:{type:String,required:true},
    location:{type:String,required:true},
    startdate:{type:String,required:true},
    enddate:{type:String,required:true},
    status:{type:String,required:true},
    
})

ProjectModel=mongoose.model("project",projectSchema)


module.exports={
    ProjectModel
}