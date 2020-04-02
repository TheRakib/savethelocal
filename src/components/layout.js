import React from "react";
import Footer from "../components/footer"
import Navbar from "../components/navbar"
import ".././styles/index.scss"
const Layout = (props)=>(
   <div>
    <Navbar/>
     {props.children}
    <Footer/>
   </div> 
    
)

export default Layout;