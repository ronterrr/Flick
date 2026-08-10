import data from "../Data/temp.json";
import PhotoCard from "./PhotoCard";

function PhotoSection({ filteredData }) {
  if (filteredData === "" || !filteredData) {
    filteredData = data;
  }
  return (
    <>
      <div className="photo-section">
        {filteredData.map((i) => {
          return (
            <PhotoCard
              key={i.id}
              photo={i.photo}
              caption={i.caption}
              username={i.username}
              likeCount={i.likeCount}
            />
          );
        })}
      </div>
      <div className="no-results">
        {filteredData.length === 0 ? (
          <h3>No Search Results Found. Keep Flick-ing!</h3>
        ) : null}
      </div>
    </>
  );
}

export default PhotoSection;
