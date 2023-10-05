import { Card } from "../../components";
const Cards = (props) => {
    const { characters, onClose } = props;
    console.log(characters);


    return (
        <div className="row row-cols-1 row-cols-md-3 mb-3 text-center">
            {characters.map((char) => {
                return (
                    <Card
                        key={char.id}
                        id={char.id}
                        name={char.name}
                        // abilities={char.status}
                        // moves={char.species}
                        species={char.species}
                        image={char.image}
                        onClose={onClose}
                    />
                )
            })}

        </div>

    )

}

export default Cards;