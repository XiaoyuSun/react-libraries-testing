import React from "react";
import { User } from "../helper";

/**
 * A card displaying user information.
 * @param props The user information to display
 * @returns A React element
 */
const UserCard = ({ user }: { user: User }): React.JSX.Element => {
  return (
    <div className="bg-white p-4 border border-gray-200 mb-2">
      {user.name} - {user.id}
    </div>
  );
};

export default UserCard;
