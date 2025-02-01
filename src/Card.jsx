import profilePic from "./assets/garfielopt200x.jpg"

function Card() {
    return(
        <div className="card">
            <img className="card-image" src={profilePic} alt="profile picture" />
            <h2 className="card-title">Mr Garfield</h2>
            <p className="card-text">I make code to gain money</p>
        </div>
    );
}

export default Card;