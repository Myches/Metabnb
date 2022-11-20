import React from 'react-router-dom'
import Navs from './pages/Navs.js'
import Home from './pages/Home.js'
import Place  from './pages/Place.js'
import NFTs from './pages/NFTs.js'
import community from './pages/community.js'
import {BrowserRouter,Route,Routes,} from 'react-router-dom'
import './pages/myApp.css';

function App() {
return (
    <BrowserRouter>

     <div className='wrapper'>

      <Navs />
   <div>
   <Routes>
   <Route path ="/" element={<Home />}  />
	 <Route path ="/Place"  element={<Place />}  />
	 <Route path ="/NFTs" element={<NFTs />}  />
   <Route path ="/community" element={<community />}  />

   </Routes>
  
   </div>
  
  
     
      
  </div>
  </BrowserRouter>
  )
}

export default App;
