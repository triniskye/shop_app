import React, { useState, useEffect } from "react";

const Account = (props) => {
  let firstName = "";
  let lastName = "";
  let user = false;
  if (props.user.email != null) {
    firstName = props.user.first_name;
    lastName = props.user.last_name;
    user = true;
  } else {
    user = false;
  }
  return (
    <div>
      <h1 className="title">Account</h1>
      <div>
        {user ? (
            <div>
          <div className="accountHeaders">
            <h2 className="details"><b>Details:</b></h2>
            </div>
            <div className="userDetails">
              <h2 className="email">
                <b>Email:</b>
                <br/>
                {props.user.email}
              </h2>
              <h2 className="name">
                <b>Name:</b>
                <br />
                {firstName.charAt(0).toUpperCase() +
                  firstName.substring(1)}{" "}
                {lastName.charAt(0).toUpperCase() + lastName.substring(1)}
              </h2>
            </div>
          </div>
        ) : (
          <div>
            <h2>
              Please log in, <a href="/login">here</a>.
            </h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default Account;
