import React from "react";

function UserCard(props) {
  const {first_name, last_name, email, id} = props.user;
  console.log(props.user);
  return (
    <div className="userCard" id={id}>
      <h2>
        Name: {first_name} {last_name}
      </h2>
      <p>contact: {email}</p>
    </div>
  );
}

export default UserCard;
