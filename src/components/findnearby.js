import React from "react";


export default class FindNearBy extends React.Component {
 state = {
   resturant: []
  }

  //axios call
  render() {
    return (
      <ul> 
          <input type="text" placeholder="Skriv postnummer(frivilig)"/> 
          <button type="submit">Sök resturang omkring mig</button>
      
     
      </ul>
    )
  }
}