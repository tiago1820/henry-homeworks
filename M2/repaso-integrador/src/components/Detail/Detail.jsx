import { Link } from "react-router-dom";
import axios from "axios";
import useCharacter from "../../hooks/useCharacter";
const Detail = () => {
  const character = useCharacter();
  console.log(character)

  return (
    <div className="col">
      <div className="card mb-4 rounded-3 shadow-sm">
        <div className="card-header py-3">
          <h2 className="my-0 fw-normal">{character.name}</h2>
        </div>
        <img className="img-fluid" src={character.image} alt="" />
        <div className="card-body">
          <p>{character?.species}</p>
          <p>{character?.gender}</p>
          <p>{character.origin?.name}</p>
          <p>{character?.status}</p>
        </div>
      </div>
    </div>
  )
}

export default Detail;
