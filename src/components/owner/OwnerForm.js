import React, { useState } from 'react';
import OwnerManager from '../../modules/OwnerManager';
import './OwnerForm.css'

const OwnerForm = props => {
  const [owner, setOwner] = useState({ name: "", phone: "" });
  const [isLoading, setIsLoading] = useState(false);

  const handleFieldChange = evt => {
    const stateToChange = { ...owner };
    stateToChange[evt.target.id] = evt.target.value;
    setOwner(stateToChange);
  };

  /*  Local method for validation, set loadingStatus, create awner      object, invoke the AwnerManager post method, and redirect to the full awner list
  */
  const constructNewOwner = evt => {
    evt.preventDefault();
    if (owner.Name === "" || owner.phone === "") {
      window.alert("Please input an owner name and phone number");
    } else {
      setIsLoading(true);
      // Create the owner and redirect user to owner list
      OwnerManager.post(owner)
        .then(() => props.history.push("/owner"));
    }
  };

  return (
    <>
      <form>
        <fieldset>
          <div className="formgrid">
            <input
              type="text"
              required
              onChange={handleFieldChange}
              id="name"
              placeholder="Owner name"
            />
            <label htmlFor="ownerName">Name</label>
            <input
              type="text"
              required
              onChange={handleFieldChange}
              id="phone"
              placeholder="Phone Number"
            />
            <label htmlFor="phone">Phone Number</label>
          </div>
          <div className="alignRight">
            <button
              type="button"
              disabled={isLoading}
              onClick={constructNewOwner}
            >Submit</button>
          </div>
        </fieldset>
      </form>
    </>
  );
};
export default OwnerForm