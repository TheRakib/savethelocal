import React from "react"

import Layout from "../components/layout"
import FindNearBy from "../components/findnearby.js"







const IndexPage = () => (

<Layout className="layout">

    <h1>Find near by resturant </h1>
     <FindNearBy />
    
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      
    </div>
   
 </Layout>
    
)

export default IndexPage
