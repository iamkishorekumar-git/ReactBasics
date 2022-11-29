// create component
function App()
{
  function handleRequest()
  {

    console.error("Button clicked");

  }
    return (

      <div>
       <button onClick={handleRequest}>show animals</button> 
      </div>
      );
    
}

export default App