
const RandomButton = (props) => {
    const { getRandomChar } = props;

    return (
        <button onClick={() => getRandomChar()}>
            Random
        </button>
    )
}

export default RandomButton;