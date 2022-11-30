import AnimalShow from "./animalsShow";
import {useState} from 'react'

function getRadomAnimal()
{
  const animals = ["lion","tiger","cat","cow","dog"]

  return animals[Math.floor(Math.random()*animals.length)]
}

// create component
function App()
{
  const [animals,setAnimals] = useState()

  function handleRequest()
  {
    setAnimals([...animals,getRadomAnimal])

  }

  console.log(animals);

  const renderedAnimal = animals?.map((animal,index)=>
  {
    return <AnimalShow type={animal} key={index}/>
  })

    return (

      <div>
       <button onClick={handleRequest}>show animals</button> 
       <div>{renderedAnimal}</div>
      </div>
      );
    
}

export default App