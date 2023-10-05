import { Link } from "react-router-dom";
import styles from "./Card.module.css";
import { addFav, removeFav } from "../../redux/actions";
import { connect } from "react-redux";
import { useState, useEffect } from "react";
const Card = (props) => {
    const { id, name, species, image,gender, onClose, addFav, removeFav, myFavorites } = props;

    const [isFav, setIsFav] = useState(false);

    const handleFavorite = () => {
        isFav ? removeFav(id) : addFav(props);
        setIsFav(!isFav);
    }

    useEffect(() => {
        myFavorites.forEach((fav) => {
            if (fav.id === props.id) {
                setIsFav(true);
            }
        });
    }, [myFavorites]);

    return (
        <div className="col">
            <div className="card mb-4 rounded-3 shadow-sm">
                {
                    isFav ? (<button onClick={handleFavorite}>❤️</button>) : (<button onClick={handleFavorite}>🤍</button>)
                }

                <div className="card-header py-3">
                    <Link to={`/detail/${id}`}>
                        <h2 className="my-0 fw-normal">{name}</h2>
                    </Link>
                </div>
                <img className="img-fluid" src={image} alt="" />
                <div className="card-body">
                    <p>{species}</p>
                    <p>{gender}</p>

                    <button className="w-100 btn btn-sm btn-outline-primary" onClick={() => onClose(id)}>X</button>
                </div>
            </div>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        addFav: (character) => {
            dispatch(addFav(character))
        },
        removeFav: (id) => {
            dispatch(removeFav(id))
        }
    }
}

const mapStateToProps = (state) => {
    return {
        myFavorites: state.myFavorites,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);