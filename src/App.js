import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import "./styles.css";
import UserDetails from "./UserDetails";
import PersonalInfo from "./PersonalInfo";
import Confirm from "./Confirm";
import Success from "./Success";

function App() {
  const [header, setHeader] = useState("Enter User Details");
  const [showUserDetails, setShowUserDetails] = useState(true);
  const [showPersonalDtls, setShowPersonalDtls] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [finalPage, setShowFinalPage] = useState(false);

  const [userInfo, setUserInfo] = useState({});
  const setUserData = (name, value) => {
    setUserInfo({ ...userInfo, [name]: value });
  };

  const [personalDetails, setPersonalDetails] = useState({});
  const setPersonalData = (name, value) => {
    setPersonalDetails({ ...personalDetails, [name]: value });
  };

  const renderingUserDetails = () => {
    if (showUserDetails) {
      setShowUserDetails(false);
      setShowPersonalDtls(true);
    } else {
      setShowUserDetails(true);
      setShowPersonalDtls(false);
    }
  };

  const continueButton = () => {
    if (showPersonalDtls) {
      setShowPersonalDtls(false);
      setShowUserDetails(false);
      setShowConfirm(true);
    } else {
      setShowPersonalDtls(true);
      setShowConfirm(false);
    }
  };

  const settingTitle = (title) => {
    setHeader(title);
  };

  const lastPage = () => {
    setShowPersonalDtls(false);
    setShowConfirm(false);
    setShowFinalPage(true);
  };

  return (
    <div>
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid center-div">
          <span className="navbar-text text">{header}</span>
        </div>
      </nav>

      <br />
      <br />
      {showUserDetails && (
        <UserDetails
          renderingUserDetails={renderingUserDetails}
          settingTitle={settingTitle}
          setUserData={setUserData}
          userData={userInfo}
        />
      )}

      {showPersonalDtls && (
        <PersonalInfo
          renderingUserDetails={renderingUserDetails}
          settingTitle={settingTitle}
          continueButton={continueButton}
          personalDetails={personalDetails}
          setPersonalData={setPersonalData}
        />
      )}

      {showConfirm && (
        <Confirm
          personalData={personalDetails}
          userData={userInfo}
          continueButton={continueButton}
          settingTitle={settingTitle}
          lastPage={lastPage}
        />
      )}

      {finalPage && <Success />}
    </div>
  );
}

export default App;
