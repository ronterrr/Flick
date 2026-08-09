function PhotoCard({ photo, caption, username }) {
  return (
    <>
      <div className="photo-card">
        <img src={photo} />
        <p className="caption">{caption}</p>
        <p className="username">~ {username}</p>
      </div>
    </>
  );
}

export default PhotoCard;
