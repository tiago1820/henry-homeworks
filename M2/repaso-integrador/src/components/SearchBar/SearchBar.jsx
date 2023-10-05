import { useState } from "react";
import styles from "./SearchBar.module.css";

const SearchBar = (props) => {
    const [id, setId] = useState("");
    const { onSearch } = props;
    
    const handleChange = (e) => {
        setId(e.target.value)
    }

    return (
        <header className="p-3 text-bg-light mb-2">
            <div className="container">
                <div className="d-flex flex-wrap align-items-center justify-content-center">
                    <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
                        <input onChange={handleChange} value={id} className="form-control form-control-light text-bg-light" type="search" />
                    </form>
                    <div className="text-end">
                        <button className="btn btn-outline-primary me-2" onClick={() => onSearch(id)}>Agregar</button>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default SearchBar;