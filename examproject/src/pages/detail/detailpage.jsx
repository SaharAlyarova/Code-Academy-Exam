import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {Helmet} from "react-helmet"
const DetailPage = () => {
    const [data, setData] = useState([])
    const {_id}=useParams()
    const getDetailData= async()=>{
 const data= await axios.get(`http://localhost:8080/notaries/${_id}`)
 setData(data.data)
    }
    useEffect(() => {
        getDetailData()
    }, [])
    
  return (
    <div className='container'>
         <Helmet>
                <meta charSet="utf-8" />
                <title>Detail Page</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <br></br>
       <div style={{width:"300px", height:"350px", columnGap:"15px",color:'black', margin:"0 auto", backgroundColor:"#FEE2B3",padding:"10px"}}>
<div style={{display:"flex", alignItems:"center", justifyContent:"center"}}>
<img src={data.imgurl} alt="" className='avatar'/>
<div style={{display:'flex', alignItems:"center", justifyContent:"center", flexDirection:"column"}} >
<h5>{data.name}</h5>
<p style={{color:"gray"}}>{data.job}</p>
</div>

</div>
<p>{data.about}</p>
<p>{data.price}$</p>

    </div><br></br>
    </div>
  )
}

export default DetailPage
