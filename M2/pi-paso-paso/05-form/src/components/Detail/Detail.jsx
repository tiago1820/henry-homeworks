import axios from "axios";
import { useParams } from "react-router";
import { useState, useEffect } from "react";
import styles from './Detail.module.css';

const Detail = () => {

  const { id } = useParams();
  const [character, setCharacter] = useState({});

  useEffect(() => {
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
      if (data.name) {
        setCharacter(data);
      } else {
        window.alert('No hay personajes con ese ID');
      }
    });
    return setCharacter({});
  }, [id]);

  return (
    // Hacer un loader en caso no exista el character
    <div className={styles.link}>
      <div className={styles.card}>
        <img className={styles.image} src={character?.image} alt='' />
        <div className={styles.cardContent}>
          <div className={styles.name}>{character?.name}</div>
          <div>
            <div>{character?.species}</div>
            <div>{character?.gender}</div>
            <div className={styles.origin}>{character.origin?.name}</div>
          </div>
        </div>
      </div>
      <div className={styles.status}>{character?.status}</div>
    </div>
  )
}

export default Detail
