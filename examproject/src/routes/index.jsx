import React from 'react'
import { Route, Router, Routes } from 'react-router-dom'
import AddPage from '../pages/addpage'
import DetailPage from '../pages/detail/detailpage'
import HomePage from '../pages/home'

const RouterCom = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/addpage' element={<AddPage/>}/>
            <Route path='/detail/:_id' element={<DetailPage/>}/>
        </Routes>

    </div>
  )
}

export default RouterCom