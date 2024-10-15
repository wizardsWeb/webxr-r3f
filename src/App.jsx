import React from 'react'
import { Route, Routes } from 'react-router-dom'
import CubeContainer from './component/cube/CubeContainer'
import XrCubeContainer from './component/xr-cube/XrCubeContainer'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<CubeContainer />} />
      <Route path='/cube' element={<CubeContainer />} />
      <Route path='/xrcube' element={<XrCubeContainer />} />
    </Routes>
  )
}

export default App
