import userData from "../Data/userData.json";

function UserProfile() {
  return (
    <>
      <div className="user-profile">
        <p>{userData[0].name}</p>
        <img src={userData[0].src} />
      </div>
    </>
  );
}

export default UserProfile;
