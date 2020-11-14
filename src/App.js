import React, { useState } from "react";

function App() {

  const [value,setValue] = useState("")
  const [results,setResults] = useState([])

  const fetchImages = () => {
    fetch(`https://api.unsplash.com/search/photos/?client_id=l6IQcyhiia9DEz2idn8TaSclBCMPMj9CE3r68Ai0AGY&query=${value}&orientation=squarish&per_page=12`)
    .then(res=>res.json())
    .then(data=>{
      console.log(data)
      setResults(data.results)
    })
  }

  return (
    <>
      <div className="App">
      <h1>WallSplaz<span style={{color:"red"}}>.</span></h1>
        <div className="search">
          <input type="text" value={value} onChange={(e)=>setValue(e.target.value)} placeholder="Search Anything" />
          <button onClick={()=>fetchImages()}>Search</button>
        </div>
        <div className="gallery">
          {
            results.map((item)=>{
              return <img className="item" key={item.id} src={item.urls.regular} />
            })
          }
        </div>
      </div>
    </>
  );
}

export default App;
