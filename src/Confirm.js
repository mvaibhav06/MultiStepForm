import React from "react";

const Confirm = ({
  userData,
  personalData,
  continueButton,
  settingTitle,
  lastPage,
}) => {
  const handleBack = () => {
    continueButton();
  };

  const handleSubmit = () => {
    settingTitle("Success");
    lastPage();
  };

  return (
    <div class="container mt-5">
      <div class="row">
        <div class="col-md-6">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">First Name</h5>
              <p class="card-text">{userData.fname}</p>
            </div>
          </div>
        </div>

        <div class="col-md-6">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Last Name</h5>
              <p class="card-text">{userData.lname}</p>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Occupation</h5>
              <p className="card-text">{personalData.occupation}</p>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">City</h5>
              <p className="card-text">{personalData.city}</p>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Bio</h5>
              <p className="card-text">{personalData.bio}</p>
            </div>
          </div>
        </div>
      </div>

      <button onClick={handleSubmit} className="btn btn-primary">
        Confirm & Continue
      </button>
      <button onClick={handleBack} className="btn btn-secondary">
        Back
      </button>
    </div>
  );
};

export default Confirm;
