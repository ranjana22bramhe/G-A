const Home = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>🎉 Welcome to your website!</h1>
      <p style={styles.text}>
        You are successfully logged in.!
      </p>
    </div>
  );
};

const styles = {
  container: {
    textAlign: "center",
    marginTop: "100px",
    backgroundColor: "#f5f5f5"
  },
  heading: {
    fontSize: "3rem",
    color: "#1a73e8",
    marginTop: "10px"
  },
  text: {
    fontSize: "2rem",
    color: "#555",
  },
};

export default Home;
