import Button from "../ui/Button";
import SearchBar from "./searchbar/SearchBar";

import classes from "./NavBar.module.css";

const NavBar = () => {
   return (<header className = {classes.navbar}>
         <ul>
            <li><h1>BocetoLab</h1></li>
            <li><Button name ="EXPLORE"/></li>
            <li className = {classes.searchbar}><SearchBar/></li>
            <li><Button name ="LOGIN"/></li>
            <li><Button name ="SIGN UP"/></li>
            <li><Button name ="UPLOAD"/></li>
         </ul>
   </header>);
};

export default NavBar;