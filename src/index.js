// import react and react DOM libraries
import React from 'react';
import ReactDOM from 'react-dom/client';
// import app - component 
import App from './App'


// ref to html elemet
const el = document.getElementById("root")

// tell react to take control to element 
const root = ReactDOM.createRoot(el)

root.render(<App/>)