import React from "react";

const Follower = ({ avatar_url, login, html_url }) => {
  return (
    <article className="card">
      <img src={avatar_url} alt="Image" />
      <h4>{login}</h4>
      <h4>
        <a href={html_url} className="btn">
          View Profile
        </a>
      </h4>
    </article>
  );
};

export default Follower;
