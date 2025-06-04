


import { useState } from "react";
import GoogleButton from "./GoogleButton";

const Login = () => {
  const [isSignup, setIsSignup] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const toggleMode = () => {
    setIsSignup((prev) => !prev);
    setFormData({ email: "", password: "", confirmPassword: "" });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSignup && formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    alert(`${isSignup ? "Signup" : "Login"} successful!`);
    console.log(isSignup ? "Signup:" : "Login:", formData);
  };

  return (
    <div style={styles.container}>
      <h2>{isSignup ? "Sign Up" : "Log In"}</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          required
          value={formData.email}
          onChange={handleChange}
          style={styles.input}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          required
          value={formData.password}
          onChange={handleChange}
          style={styles.input}
        />
        {isSignup && (
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            required
            value={formData.confirmPassword}
            onChange={handleChange}
            style={styles.input}
          />
        )}
        <button type="submit" style={styles.button}>
          {isSignup ? "Create Account" : "Login"}
        </button>
      </form>

      <GoogleButton />

      <p style={{ marginTop: "10px" }}>
        {isSignup ? "Already have an account?" : "Don't have an account?"}{" "}
        <span onClick={toggleMode} style={styles.link}>
          {isSignup ? "Login" : "Sign Up"}
        </span>
      </p>
    </div>
  );
};

const styles = {
  container: {
    width: "350px",
    margin: "auto",
    marginTop: "80px",
    padding: "20px",
    boxShadow: "0 0 10px rgba(207, 223, 228, 0.1)",
    borderRadius: "15px",
    textAlign: "center",
    background: "#f0f0f0",
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  input: {
    padding: "10px",
    margin: "10px 0",
    fontSize: "16px",
    borderRadius: "5px",
  },
  button: {
    padding: "10px",
    background: "#1a73e8",
    color: "white",
    border: "none",
    cursor: "pointer",
    fontSize: "16px",
    borderRadius: "5px",
  },
  link: {
    color: "blue",
    cursor: "pointer",
    textDecoration: "underline",
  },
};

export default Login;

