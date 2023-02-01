import { useState,useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import styled from 'styled-components';

function Searched() {
const[searchedRecipes, setSearchedRecipes]= useState([])
let params = useParams() 

    const getSearched= async(name)=>{
    const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=ec2cded8e4c14d0f92a6234d78163d46&query=${name}`)
    const recipes= await data.json();
    setSearchedRecipes(recipes.results)}


    useEffect(()=>{
     getSearched(params.search)
    },[params.search])

  return (
    <Grid>
        {searchedRecipes.map((item)=>{
          return(
          <Card key={item.id}>
            <Link to='/recipe/ + recipe.id'>
            <img src={item.image} alt= ""/>
            <h4>{item.title }</h4>
            </Link>
          </Card>)
        })}
         
    </Grid>
  )
}

const Grid = styled.div`
display: grid;
grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
grid-gap: 3 rem;
`;

const Card= styled.div`

img{
  width: 100%;
  padding: 0rem 1rem;
  border-radius: 2rem;
  }

a{
  text-decoration: none;
}

h4{
  text-align: center;
  padding: 1rem;
};`
export default Searched