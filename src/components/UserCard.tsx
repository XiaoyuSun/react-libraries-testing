import React from "react";
import { User } from "../helper";

/**
 * A card displaying user information.
 * @param props The user information to display
 * @returns A React element
 */
const UserCard = ({ user }: { user: User }): React.JSX.Element => {
  console.log("🚀 ~ UserCard ~ props:", user);
  return (
    <div>
      {user.name} - {user.id}
    </div>
  );
};

export default UserCard;
