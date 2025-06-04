

import { GoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";

const GoogleButton = () => {
  const navigate = useNavigate();

  const handleSuccess = (res) => {
    console.log("Google Login Success:", res);
    alert("Login successful!");
    navigate("/home");
  };

  const handleError = () => {
    console.log("Google Login Failed");
    alert("Login failed. Please try again.");
  };

  return (
    <div style={{ marginTop: "20px" }}>
      <GoogleLogin onSuccess={handleSuccess} onError={handleError} />
    </div>
  );
};

export default GoogleButton;
