import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getCharacterDetail, cleanDetail } from "../redux/actions";

const useCharacter = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const character = useSelector((state) => state.characterDetail);
    console.log("hook", character)

    useEffect(() => {
        dispatch(getCharacterDetail(id));

        return () => {
            dispatch(cleanDetail());
        }
    }, [id]);

    return character;
}

export default useCharacter
