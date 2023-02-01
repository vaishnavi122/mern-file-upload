import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MultipleDocs from './pages/MultipleDocs'
import MultipleImageUpload from './pages/MultipleImageUpload'
import Navbar from './pages/Navbar'
import SingleImageUpload from './pages/SingleImageUpload'
const App = () => {
  return <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path='/' element={<h1>Home Page</h1>}></Route>
      <Route path='/single' element={<SingleImageUpload />}></Route>
      <Route path='/mutiple' element={<MultipleImageUpload />}></Route>
      <Route path='/mutipledocs' element={<MultipleDocs />}></Route>
      <Route path='*' element={<h1>404 Page Not Found</h1>}></Route>
    </Routes>
  </BrowserRouter>
}

export default App