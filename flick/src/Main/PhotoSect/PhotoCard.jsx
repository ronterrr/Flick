import { useState } from "react";
import Modal from "../Modals/Modal";

function PhotoCard({ photo, caption, username }) {
  const [isZoomed, setIsZoomed] = useState(false);

  return (
    <>
      <div className="photo-card">
        <img
          src={photo}
          onClick={() => {
            setIsZoomed(true);
          }}
        />
        <p className="caption">{caption}</p>
        <p className="username">~ {username}</p>
      </div>

      <Modal isOpen={isZoomed} onClose={()=>{setIsZoomed(false)}}>
          <div className="zoomed-container">
            <img src={photo} className="zoomed-image"/>
            <p className="caption">{caption}</p>
            <p className="username">~ {username}</p>
          </div>
      </Modal>
    </>
  );
}

export default PhotoCard;
