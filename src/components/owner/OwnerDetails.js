import React, { useState, useEffect } from "react";
import OwnerManager from "../../modules/OwnerManager";
import "./OwnerDetails.css";

const OwnerDetail = props => {
  const [owner, setOwner] = useState({ name: "", contact: "" });
  const [isLoading, setIsLoading] = useState(false);

  const handleDelete = () => {
      setIsLoading(false);
      OwnerManager.delete(props.ownerId).then(() =>
      props.history.push("/owner")
      );
  };

  useEffect(() => {
    OwnerManager.get(props.ownerId).then(owner => {
      setOwner({
        name: owner.name,
        phoneNumber: owner.phoneNumber
      });
      setIsLoading(true);
    });
  }, [props.ownerId]);

  return (
    <div className="card">
      <div className="card-content">
        <h3>
          Name: <span style={{ color: "darkslategrey" }}>{owner.name}</span>
        </h3>
        <h3>
          Contact:{" "}
          <span style={{ color: "darkslategrey" }}>{owner.phoneNumber}</span>
        </h3>
        <button type="button" disabled={isLoading} onClick={handleDelete}>
            Terminate
        </button>
      </div>
    </div>
  );
};
export default OwnerDetail;
