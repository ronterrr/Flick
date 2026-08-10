import { useState } from "react";
import Modal from "../Modals/Modal";

import likeBtn from "../../assets/images/heart.svg";
import filledLikeBtn from "../../assets/images/filled-heart.svg";
import commentBtn from "../../assets/images/comment.svg";
import saved from "../../assets/images/save-true.svg";
import unsaved from "../../assets/images/save-false.svg";
import "./photocard.css";

function PhotoCard({ photo, caption, username, likeCount }) {
  const [isZoomed, setIsZoomed] = useState(false);

  const [liked, setLiked] = useState(false);
  const [saveStatus, setSaveStatus] = useState(false);

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

      <Modal
        isOpen={isZoomed}
        onClose={() => {
          setIsZoomed(false);
        }}
      >
        <div className="zoomed-container">
          <img src={photo} className="zoomed-image" />
          <div className="post-info">
            <p className="username">{username}</p>
            <p className="caption">{caption}</p>
            <div className="post-metrics">
              <div className="likes">
                <img
                  src={liked === true ? filledLikeBtn : likeBtn}
                  className="like-btn"
                  onClick={() => {
                    setLiked(!liked);
                  }}
                />
                <p>{liked === true ? likeCount + 1 : likeCount}</p>
              </div>
              <div className="comments">
                <img src={commentBtn} className="comment-btn" />
              </div>
              <div className="post-save">
                <img
                  src={saveStatus === true ? saved : unsaved}
                  className="save-btn"
                  onClick={()=>{
                    setSaveStatus(!saveStatus);
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
}

export default PhotoCard;
