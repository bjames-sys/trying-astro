const Card = () => {
    const handleClick = () => {
        console.log("clicked");
    };
    return (
        <div>
            <p>Card</p>
            <button onClick={handleClick}>Click Me</button>
        </div>
    );
};
export default Card;