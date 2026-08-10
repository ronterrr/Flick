import userData from "../../PhotoFeed/Data/userData.json";

function UserProfile() {
  return (
    <>
      <div className="user-profile">
        <p>{userData.name}</p>
        <img src={userData.src} />
      </div>
    </>
  );
}

export default UserProfile;
