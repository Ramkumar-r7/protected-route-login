import { useNavigate} from "react-router-dom";
import React from "react";

function HomePage() {
  const navigate = useNavigate();

  const handlelogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <div>
      <p>Home page</p>
      <button className="btn btn-primary" onClick={handlelogout}>
        logout
      </button>
    </div>
  );
}

export default HomePage;
