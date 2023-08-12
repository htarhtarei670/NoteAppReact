import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Search = ({onSearch}) => {
    return (
        <div className="search">
            <FontAwesomeIcon icon={faSearch}/>
            <input 
                type="text" 
                placeholder="Search notes..." 
                onChange={(e)=>onSearch(e.target.value)}
            />
        </div>
    );
}

export default Search;