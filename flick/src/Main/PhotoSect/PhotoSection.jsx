import data from "../Data/temp.json";
import PhotoCard from "./PhotoCard";

function PhotoSection() {
  return (
    <>
      <div className="photo-section">
        {data.map((i) => {
          return (
            <PhotoCard
            key={i.id}
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
