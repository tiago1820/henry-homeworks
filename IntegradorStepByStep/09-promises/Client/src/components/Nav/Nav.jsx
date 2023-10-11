import { Link } from 'react-router-dom';
import SearchBar from "../SearchBar/SearchBar";
import PATHROUTES from '../../helpers/PathRoutes.helper';

const Nav = (props) => {
    const { onSearch } = props;
    const { HOME, ABOUT, FAVORITES } = PATHROUTES;

    return (
        <div>
            {/* Experimentar el Navlink */}
            <Link to={HOME}>Home</Link>
            <Link to={ABOUT}>About</Link>
            <Link to={FAVORITES}>Favorites</Link>
            <SearchBar onSearch={onSearch} />
        </div>
    )
}

export default Nav;
