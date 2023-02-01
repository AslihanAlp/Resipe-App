import { BrowserRouter, Link } from 'react-router-dom'
import Pages from './Pages/Pages'
import Category from './Components/Category'
import './index.css'
import Search from './Components/Search'
import styled from 'styled-components'
import { GiKnifeFork } from 'react-icons/gi'

function App() {
  return (
    <div>
   
      <BrowserRouter>
      <Nav>
        <GiKnifeFork />
        <Logo to={"/"} >deliciouss</Logo>
      </Nav>
      <Search />
        <Category />
        <Pages />
      </BrowserRouter>
    </div>
  )
}

const Logo = styled(Link)`
text-decoration: none;
font-size: 2rem;
font-weight: 400;
font-family: "Lopster Two", cursive;
`
;

const Nav= styled.div`
padding: 4rem 0rem;
display: flex;
justify-content: flex-start
align-items: center;
svg{
  font-size: 2rem;
 
}`

export default App