import data from "./temp.json";
import PhotoCard from "./PhotoCard";

function PhotoSection() {
  return (
    <>
      {data.map((i) => {
        return (
          <PhotoCard
            photo={i.photo}
            caption={i.caption}
            username={i.username}
          />
        );
      })}
    </>
  );
}

export default PhotoSection;
