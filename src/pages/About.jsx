import React, { useEffect, useState, useCallback } from "react";
import Spinner from "../components/Spinner";

const About = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchUser = useCallback(async () => {
    setLoading(true);
    setError(null);
    setUser(null);

    try {
      const res = await fetch("https://randomuser.me/api/");
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }

      const data = await res.json();
      setUser(data.results[0]);
    } catch (err) {
      setError(err.message || "Something went wrong while fetching user.");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchUser();
  }, [fetchUser]);

  if (loading) {
    return <Spinner />;
  }

  if (error) {
    return (
      <div className="about ">
        <div className="about--error">
          <h2>Oops! Failed to load user </h2>
          <button className="about__retry" onClick={fetchUser}>
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="about">
      <div className="about__card">
        <img
          src={user.picture.large}
          alt={`${user.name.first} ${user.name.last}`}
          className="about__image"
        />
        <h2 className="about__name">
          {user.name.first} {user.name.last}
        </h2>
        <p className="about__bio">
          Hi, I'm {user.name.first} and I love Eco-efficiency in Waste
          Management and Power Generation
        </p>
        <div className="about__contact">
          <p>
            <strong>Email:</strong> {user.email}
          </p>
          <p>
            <strong>Phone:</strong> {user.phone}
          </p>
          <p>
            <strong>Location:</strong> {user.location.city},{" "}
            {user.location.country}
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
