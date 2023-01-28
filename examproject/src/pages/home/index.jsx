import React from 'react'
import DataSection from './datasection'
import MyEndSection from './myEndSection'

const HomePage = () => {
  return (
    <div className='container'>
        <div className='onesectionimage'>
            <div>
                <h1>Notary Public & Legal Solutions</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
                <p>Veritatis cupiditate deserunt placeat necessitatibus </p>
                <p>a aliquam corrupti nisi odio aliquid, accusamus.</p>
            </div>
            <div style={{display:'flex',alignItems:'center', justifyContent:"center"}}>
              
                <form action="" className='form'>
            
               <h3>Book an Appointment</h3>
            
<input type="text" placeholder='Name' className='sectionInput'/><br></br>
<input type="text" placeholder='Email'  className='sectionInput'/><br></br>

<input type="date" placeholder='Select Date'  className='sectionInputDate'/><br></br>
<button className='sectionBtn'>Book Appointment</button>
                </form>
            </div>
        </div>
        <div style={{display:'flex',alignItems:'center', justifyContent:"center",flexWrap:'wrap',padding:"50px"}}>
            <div style={{display:'flex',alignItems:'center', justifyContent:"center",flexDirection:'column'}}>
                <h3>Practice Areas</h3>
            <p >Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
        <div className='fulldivsection'>
      
                <div style={{width:"300px",columnGap:"3%", height:"300px", boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",display:'flex',alignItems:'center', justifyContent:"center",flexWrap:'wrap'}}>
                <i class="fa-solid fa-building-columns"  style={{color:'#FEE2B3',fontSize:'60px',}}></i>
                <h3>Bankruptcy Law</h3>
                <p style={{color:'gray'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, laboriosam!</p>
                </div>
           
         
                <div style={{width:"300px", columnGap:"3%", height:"300px", boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",display:'flex',alignItems:'center', justifyContent:"center",flexWrap:'wrap'}}>
                <i class="fa-solid fa-file-invoice-dollar" style={{color:'#FEE2B3',fontSize:'60px'}}></i>
                <h3>Business Law </h3>
                <p style={{color:'gray'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, laboriosam!</p>
                </div>
            
          
                <div style={{width:"300px",columnGap:"3%", height:"300px", boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",display:'flex',alignItems:'center', justifyContent:"center",flexWrap:'wrap'}}>
                <i class="fa-solid fa-hand-holding-dollar" style={{color:'#FEE2B3',fontSize:'60px'}}></i>
                <h3>Civil Rights Law</h3>
                <p style={{color:'gray'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, laboriosam!</p>
                </div>
           
           
            <div style={{width:"300px",columnGap:"3%", height:"300px", boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",display:'flex',alignItems:'center', justifyContent:"center",flexWrap:'wrap'}}>
              
            <i class="fa-solid fa-bomb" style={{color:'#FEE2B3',fontSize:'60px'}}></i>
                <h3>Civil Rights Law</h3>
                <p style={{color:'gray'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, laboriosam!</p>
                </div>
                <div style={{width:"300px",columnGap:"3%", height:"300px", boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",display:'flex',alignItems:'center', justifyContent:"center",flexWrap:'wrap'}}>
              
            <i class="fa-solid fa-bomb" style={{color:'#FEE2B3',fontSize:'60px'}}></i>
                <h3>Immigration Law</h3>
                <p style={{color:'gray'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, laboriosam!</p>
                </div>
                <div style={{width:"300px",columnGap:"3%", height:"300px", boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",display:'flex',alignItems:'center', justifyContent:"center",flexWrap:'wrap'}}>
              
              <i class="fa-solid fa-bomb" style={{color:'#FEE2B3',fontSize:'60px'}}></i>
                  <h3>Family Law</h3>
                  <p style={{color:'gray'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, laboriosam!</p>
                  </div>
            
        </div>
        </div>
     <div className='controll'>
     <div className='twoimagesection'>
            <div><img src="https://preview.colorlib.com/theme/notary/images/atty_1.jpg" alt="" /></div>
            <div><img src="https://preview.colorlib.com/theme/notary/images/atty_2.jpg" alt="" /></div>
            <div>
                <h1>We Provide Highly Reliable & Effective Legal Solutions</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae, explicabo iste a labore id est quas, doloremque veritatis! Provident odit pariatur dolorem quisquam, voluptatibus voluptates optio accusamus, vel quasi quidem!</p>
                <button className='sectionBtn'>Book Appointment</button>
            </div>
        </div>
     </div>
     <DataSection/>
     <MyEndSection/>
    </div>
  )
}

export default HomePage