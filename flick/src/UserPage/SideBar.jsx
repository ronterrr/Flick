import './sidebar.css'

function SideBar() {
  return (
    <>
      <div className="side-bar">
        <h3>Settings</h3>
        <hr />
        <h4>Account</h4>
        <h4>Privacy & Safety</h4>
        <h4>Security & Login</h4>
        <h4>Notifications</h4>
        <h4>Content & Display Preferences</h4>
        <h4>Support & Legal</h4>
        <h4 className="signout-btn">SIGN OUT</h4>
      </div>
    </>
  );
}

export default SideBar;
