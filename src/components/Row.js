import React, { useState } from 'react'

export default function Row({entry}) {
    const [isColor, setIsColor] = useState(false)
    return  <tr style={{backgroundColor : isColor ? "#d1f1fb" : "white"}} onClick={() => setIsColor(prev => !prev)}>
        {
          Object.entries(entry).map((key, index) => {
            return <td 
            style={{color : key[0] === "status" ? (key[1] ? "green" : "red") : "black"}}
            key={index}
            >{String(key[1])}</td>
          })
        }
      </tr>
}
