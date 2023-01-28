import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {Helmet} from "react-helmet"
import { Link } from 'react-router-dom'
const DataSection = () => {
    const [tooggle, setTooggle] = useState(true)
    const [data, setData] = useState([])
    const getData=async()=>{
        const data= await axios.get("http://localhost:8080/notaries")
        setData( data.data)
    }
useEffect(() => {
  getData()

 
}, [])
const handleDelete= async(_id)=>{
   await axios.delete(`http://localhost:8080/notaries/${_id}`).then((data)=>axios.get("http://localhost:8080/notaries").then((data)=>setData(data.data)))
}
const handleSearch=async(e)=>{
    const searchData= await axios.get("http://localhost:8080/notaries")
    setData([...searchData.data.filter((el)=>el.name.toLowerCase().includes(e.target.value.toLowerCase()))])
}
const handleSort=(arr)=>{
    setTooggle(!tooggle)
if(tooggle){
   const sortedData=arr.sort((a,b)=>b.price-a.price)
 setData([...sortedData])
}else{
   getData()
}
}
  return (
    <div className='container'>
         <Helmet>
                <meta charSet="utf-8" />
                <title>Home Page</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
       <div style={{display:'flex', alignItems:"center", justifyContent:"center", flexDirection:"column", padding:"20px"}}>
       <div>
            <div><h1>Happy Customers</h1></div>
        </div><br></br>
        <input type="text" onChange={(e)=>{handleSearch(e)}} className='myInput' placeholder='Search Name...'/><br></br>
        <button onClick={()=>handleSort(data)} className='sectionBtn'>Sort</button>
        <div style={{width:"100%",display:'flex', alignItems:"center", justifyContent:"center", columnGap:"20px"}}>
            {
                data.map((el)=>{
                    return(
<Link to={`/detail/${el._id}`}>                    
    <div style={{width:"300px", height:"350px", columnGap:"15px",color:'black'}}>
<div style={{display:"flex", alignItems:"center", justifyContent:"center"}}>
<img src={el.imgurl} alt="" className='avatar'/>
<div style={{display:'flex', alignItems:"center", justifyContent:"center", flexDirection:"column"}} >
<h5>{el.name}</h5>
<p style={{color:"gray"}}>{el.job}</p>
</div>

</div>
<p>{el.about}</p>
<p>{el.price}$</p>
<Link to={'/'}><button className='sectionBtn' onClick={()=>{handleDelete(el._id)}}>Delete</button></Link>
                        </div></Link>
                    )
                })
            }
        </div>
       </div>
    </div>
  )
}

export default DataSection