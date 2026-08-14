import userData from "../Data/userData.json";

function UserProfile({userIndex}) {
  return (
    <>
      <div className="user-profile">
        <p>{userData[userIndex].name}</p>
        <img src={userData[userIndex].src} />
      </div>
    </>
  );
}

export default UserProfile;
