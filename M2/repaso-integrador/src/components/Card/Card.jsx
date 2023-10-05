import styles from "./Card.module.css";
const Card = (props) => {
    const { id, name, species, image, onClose } = props;

    return (
        <div className="col">
            <div className="card mb-4 rounded-3 shadow-sm">
                <div className="card-header py-3">
                    <h2 className="my-0 fw-normal">{name}</h2>
                </div>
                <img className="img-fluid" src={image} alt="" />
                <div className="card-body">
                    <p>{species}</p>

                    <button className="w-100 btn btn-sm btn-outline-primary" onClick={() => onClose(id)}>X</button>
                </div>
            </div>
        </div>
    )
}

export default Card;