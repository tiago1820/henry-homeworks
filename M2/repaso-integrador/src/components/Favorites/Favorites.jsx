import { connect } from "react-redux";
import { Card } from "../../components";
import { filterCards, orderCards, showAllcharacters } from "../../redux/actions";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { removeFav } from "../../redux/actions";

const Favorites = (props) => {
    const dispatch = useDispatch();
    const { myFavorites } = props;

    const [aux, setAux] = useState(false);

    const handleOrder = (e) => {
        dispatch(orderCards(e.target.value));
        setAux(!aux);

    }

    const handleFilter = (e) => {
        const selectedValue = e.target.value;
        if (selectedValue === "All") {
            dispatch(showAllcharacters());
        } else {
            dispatch(filterCards(selectedValue));
        }
    }

    return (
        <div>
            <select onChange={handleOrder}>
                <option value="A">Ascendente</option>
                <option value="D">Descendente</option>
            </select>
            <select onChange={handleFilter}>
                <option value="All">All</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Genderless">Genderless</option>
                <option value="unknown">unknown</option>
            </select>
            {myFavorites.map((char) => {
                return (
                    <Card
                        key={char.id}
                        id={char.id}
                        name={char.name}
                        status={char.status}
                        species={char.species}
                        gender={char.gender}
                        origin={char.origin?.name}
                        image={char.image}
                        onClose={() => dispatch(removeFav(char.id))}
                    />
                )
            })}

        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        myFavorites: state.myFavorites,
    }
}

export default connect(mapStateToProps, null)(Favorites);
