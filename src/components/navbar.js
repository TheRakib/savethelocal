import React from "react"
import { Link } from "gatsby"


const Navbar = ()=>(

<nav>
     <ul>
         <li>  <Link to="/">Home</Link>  </li>
         
         <li>  <Link to="/login"> Login</Link>   </li>
     </ul>
</nav>

)

export default Navbar;