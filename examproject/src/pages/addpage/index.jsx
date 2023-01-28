import React from 'react'
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import {Helmet} from "react-helmet"
const NotarySchema = Yup.object().shape({
    imgurl : Yup.string()
    .min(2, 'Too Short!')
    .max(5066, 'Too Long!')
    .required('Required'),
    name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
    job: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
    about: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
    price: Yup.number()
    .min(2, 'Too Short!')
    .max(5057337, 'Too Long!')
    .required('Required'),
});
const AddPage = () => {
  return (
    <div>
             <Helmet>
                <meta charSet="utf-8" />
                <title>Add Page</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
        <Formik
       initialValues={{
        imgurl  : '',
        name: '',
        job: '',
        about:'',
        price:'',
       }}
       validationSchema={NotarySchema}
       onSubmit={(values,{resetForm}) => {
         axios.post("http://localhost:8080/notaries/",values)
         console.log(values);
         resetForm()
       }}
     >
       {({ errors, touched }) => (
         <Form style={{display:'flex',alignItems:'center', justifyContent:"center", padding:"40px", flexDirection:"column"}}>
           <Field name="imgurl" className={  errors.imgurl && touched.imgurl ? "border-red" : null } placeholder={'Img Url...'}/>
           {errors.imgurl && touched.imgurl ? (
             <div style={{color:'red'}}>{errors.imgurl}</div>
           ) : null}<br></br>
           <Field name="name" className={  errors.name && touched.name ? "border-red" : null }  placeholder={'Name...'}/>
           {errors.name && touched.name ? (
             <div style={{color:'red'}}>{errors.name}</div>
           ) : null}<br></br>
         <Field name="job" className={  errors.job && touched.job ? "border-red" : null }  placeholder={'Job...'}/>
           {errors.job && touched.job ? (
             <div style={{color:'red'}}>{errors.job}</div>
           ) : null}<br></br>
            <Field name="about" className={  errors.about && touched.about ? "border-red" : null }  placeholder={'About...'}/><br></br>
           {errors.about && touched.about ? (
             <div style={{color:'red'}}>{errors.about}</div>
           ) : null}<br></br>
            <Field name="price" className={  errors.price && touched.price ? "border-red" : null }  placeholder={'Name...'}/>
           {errors.price && touched.price ? (
             <div style={{color:'red'}}>{errors.price}</div>
           ) : null}<br></br>
           <button type="submit" className='sectionBtn'>Submit</button>
         </Form>
       )}
     </Formik>
    </div>
  )
}

export default AddPage