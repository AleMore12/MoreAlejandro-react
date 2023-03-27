import React from 'react';
import Landing from './components/Landing';
import  Navbar  from './components/NavBar/Navbar';
// import { Results } from './components/Results/Results';
// import React, { useEffect, useState } from 'react';



// import { BrowserRouter } from 'react-router-dom';
// import { AppRoutes } from './AppRoutes';

function App() {


    // const [search, setSearch] = useState("")
    // const [results, setResults] = useState([])

    // // Llamando a la api
    // useEffect(() => {
    //   // "!=" : distinto 
    //   // search sea distinto al "" string vacío y que solo haga el fetch cuando tenga contenido
    //   if (search != "") { 
    //     // Usar backsticks
    //   fetch(`https://api.mercadolibre.com/sites/MLA/search?q= ${search}`)
    //   .then((res) => res.json())
    //   .then((data) => setResults(data.results))
    //   }
    // }, [search])
    


    // Muestro por consola para corroborar 
// console.log(results)


  return (
    <div>

    {/* <BrowserRouter>  */}

          <Landing/> 
          {/* <Navbar/> */}
          {/* <Navbar setSearch={setSearch}/> */}
          {/* <Results results={results}/>  */}

          {/* <AppRoutes/> */}


    {/* </BrowserRouter> */}
    </div>
    
  );
}

export default App;
