const Header = () => {
  const headerStyle = {
    padding: "20px 0",
    lineHeight: "1.5em",
  };
  return (
    <header style={headerStyle}>
      <h1
        style={{
          fontSize: "4rem",
          fontWeight: "600",
          marginBottom: "2rem",
          lineHeight: "1em",
          color: "#000",
          textAlign: "center",
        }}
      >
        Todo App
      </h1>
    </header>
  );
};

export default Header;
