import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun } from "@fortawesome/free-solid-svg-icons";
import { faMoon } from "@fortawesome/free-solid-svg-icons";

const Header = ({onMode,theme}) => {
    const modeIcon=theme ? <FontAwesomeIcon icon={faSun}/>:<FontAwesomeIcon icon={faMoon}/>;
    const modeText=theme ?"Light":"Dark";

    const modeToggle=(mode)=>(
        mode = !mode
    );

    return ( 
        <div className="header">
            <h1>Notes</h1>
            <button onClick={()=>{onMode(modeToggle)}}>
                {modeIcon}
                <span className="theme">{modeText} Theme</span>
            </button>
        </div>
     );
}
 
export default Header;