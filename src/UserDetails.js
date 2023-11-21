const UserDetails = ({
  renderingUserDetails,
  settingTitle,
  setUserData,
  userData,
}) => {
  const handleFname = (event) => {
    const value = event.target.value;
    setUserData("fname", value);
  };

  const handleLname = (event) => {
    const value = event.target.value;
    setUserData("lname", value);
  };

  const handleEmail = (event) => {
    const { value } = event.target;
    setUserData("email", value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    renderingUserDetails();
    settingTitle("Enter Personal Details");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="row mb-3">
        <label for="inputEmail3" className="col-sm-2 col-form-label">
          First Name
        </label>
        <div className="col-sm-10">
          <input
            value={userData.fname}
            onChange={handleFname}
            className="form-control"
            id="inputEmail3"
          />
        </div>
      </div>
      <div className="row mb-3">
        <label className="col-sm-2 col-form-label">Last Name</label>
        <div className="col-sm-10">
          <input
            value={userData.lname}
            onChange={handleLname}
            className="form-control"
            id="inputPassword3"
          />
        </div>
      </div>

      <div className="row mb-3">
        <label className="col-sm-2 col-form-label">Email</label>
        <div className="col-sm-10">
          <input
            value={userData.email}
            onChange={handleEmail}
            className="form-control"
            id="inputPassword3"
          />
        </div>
      </div>

      <button onSubmit={handleSubmit} className="btn btn-primary">
        Continue
      </button>
    </form>
  );
};

export default UserDetails;
