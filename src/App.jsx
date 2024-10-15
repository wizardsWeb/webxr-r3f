import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import CubeContainer from './component/cube/CubeContainer'
import XrCubeContainer from './component/xr-cube/XrCubeContainer'

const App = () => {
  return (
  <>
    <Routes>
      {/* <Route path='/' element={<CubeContainer />} /> */}
      <Route path='/cube' element={<CubeContainer />} />
      <Route path='/xrcube' element={<XrCubeContainer />} />
    </Routes>
      <Link to={'/xrcube'} className='button'>
        <button style={{padding: '10px', }}>Experience AR</button>
      </Link>
  </>
  )
}

export default App
