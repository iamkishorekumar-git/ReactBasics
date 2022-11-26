// import react and react DOM libraries
import React from 'react';
import ReactDOM from 'react-dom/client';


// ref to html elemet
const el = document.getElementById("root")

// tell react to take control to element 
const root = ReactDOM.createRoot(el)

// create component
function App()

{
    return (
        <input placeholder="hi there" />
      );
    
}

root.render(<App/>)