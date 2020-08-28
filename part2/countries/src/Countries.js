import React from 'react'

function Countries({countries, show}) {
    return (
      countries.map(c => 
        <div key={c.alpha2Code}>
          <div>{c.name}<button onClick={() => show(c.alpha2Code)}>show</button></div>
        </div>
        )
    )
  }

export default Countries; 