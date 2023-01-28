const cors=require("cors")
const bodyParser=require("body-parser")
const express=require("express")
const mongoose=require("mongoose")
const app=express()
app.use(cors())
app.use(bodyParser.json())
const port=8080
const {Schema}=mongoose
const TableSchema= new Schema({
    imgurl:{type:String, required:true},
    name:{type:String, required:true},
    job:{type:String, required:true},
    about:{type:String, required:true},
    price:{type:Number, required:true},
})

const Notary=mongoose.model("notaries",TableSchema)
//get
app.get("/notaries",(req,res)=>{
    Notary.find({},(error,docs)=>{
        if(!error){
            res.send(docs)
        }else{
            res.status(500).json({message:error})
        }
    })
})


//get:id
app.get("/notaries/:id",(req,res)=>{
    const {id}=req.params
    console.log(id);
    Notary.findById(id,(error,docs)=>{
        if(!error){
        res.send(docs)
        }else{
            res.status(500).json({message:error})
        }
    })
})

//delete:id
app.delete("/notaries/:id",(req,res)=>{
    const {id}=req.params
    console.log(id);
    Notary.findByIdAndDelete(id,(error)=>{
        if(!error){
        res.send("SUCCESS!")
        }else{
            res.status(404).json({message:error})
        }
    })
})






app.post("/notaries/",(req,res)=>{
    console.log(req.body);
    const postNotary=new Notary(req.body)
    postNotary.save()
    res.send({message:"SUCCESS!"})
})

mongoose.set("strictQuery", false)
mongoose.connect(
    `mongodb+srv://sahar:sssaaa111@cluster0.opkcbok.mongodb.net/?retryWrites=true&w=majority`,
    (error)=>{
        if(!error){
app.listen(port,()=>{
    console.log(`http://localhost:${port}`)
})
        }
    }
)