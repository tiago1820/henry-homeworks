import { SearchBar, RandomButton } from "../../components";
const Nav = (props) => {
    const { onSearch, getRandomChar } = props;

    return (
        <>
            <nav>
                <div>
                    <RandomButton getRandomChar={getRandomChar}/>
                </div>
            </nav>
            <div>
                <SearchBar onSearch={onSearch}  />
            </div>
        </>
    )
}

export default Nav
