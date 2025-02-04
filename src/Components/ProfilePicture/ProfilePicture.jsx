function ProfilePicture() {
    const imageURL = "./src/assets/garfielopt200x.jpg";
    const handleClick = (e) => e.target.style.display = "none"
    
    return(
        <img onClick={(e) => handleClick(e)} src={imageURL} alt="profile picture" />
    );
}

export default ProfilePicture