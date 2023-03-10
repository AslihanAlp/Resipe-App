import {Routes,Route, useLocation} from 'react-router-dom'
import Home from './Home'
import Cuisine from '../Components/Cuisine'
import Searched from './Searched'
import Recipe from './Recipe'


function Pages() {
  return (
   
   <Routes >
      <Route path='/' element={<Home />}/>
      <Route path='/cuisine/:type' element={<Cuisine />} />
      <Route path= '/searched/:search'element={<Searched />} />
      <Route path= '/recipe/:name' element={<Recipe />} />
   </Routes>
  
  )
}

export default Pages