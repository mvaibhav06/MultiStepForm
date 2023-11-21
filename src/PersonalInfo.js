const PersonalInfo = ({
  renderingUserDetails,
  settingTitle,
  continueButton,
  setPersonalData,
  personalDetails,
}) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    continueButton();
    settingTitle("Confirm User Data");
  };

  const handleBack = () => {
    renderingUserDetails();
    settingTitle("Enter User Details");
  };

  const handleOccup = (event) => {
    const { value } = event.target;
    setPersonalData("occupation", value);
  };

  const handleCity = (event) => {
    const { value } = event.target;
    setPersonalData("city", value);
  };

  const handleBio = (event) => {
    const { value } = event.target;
    setPersonalData("bio", value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="row mb-3">
        <div className="col-sm-10">
          <input
            value={personalDetails.occupation}
            onChange={handleOccup}
            placeholder="Occupation"
            className="form-control"
            id="inputEmail3"
          />
        </div>
      </div>
      <div className="row mb-3">
        <div className="col-sm-10">
          <input
            value={personalDetails.city}
            onChange={handleCity}
            placeholder="City"
            className="form-control"
            id="inputPassword3"
          />
        </div>
      </div>

      <div className="row mb-3">
        <div className="col-sm-10">
          <input
            value={personalDetails.bio}
            onChange={handleBio}
            placeholder="Bio"
            className="form-control"
            id="inputPassword3"
          />
        </div>
      </div>

      <button onClick={handleSubmit} className="btn btn-primary">
        Continue
      </button>
      <button onClick={handleBack} className="btn btn-secondary">
        Back
      </button>
    </form>
  );
};

export default PersonalInfo;
