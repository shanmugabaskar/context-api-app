import React from "react";

export default function Comment(userInfo) {
  return (
    <div>
      <h3>Comment</h3>
      <p>Logged in as ...{userInfo.username}</p>
      {userInfo.isAdmin && <button>Edit Comment</button>}
    </div>
  );
}
