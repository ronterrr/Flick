import data from "./temp.json";
import PhotoCard from "./PhotoCard";

function PhotoSection() {
  return (
    <>
      <div className="photo-section">
        {data.map((i) => {
          return (
            <PhotoCard
              photo={i.photo}
              caption={i.caption}
              username={i.username}
            />
          );
        })}
      </div>
    </>
  );
}

export default PhotoSection;
