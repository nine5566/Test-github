import React from "react";

function Footer() {
  return (
    <footer style={styles.footer}>
      <p>© {new Date().getFullYear()} My Website</p>
      <p>Made with ❤️ by นาย</p>
    </footer>
  );
}

const styles = {
  footer: {
    backgroundColor: "#111",
    color: "#fff",
    textAlign: "center",
    padding: "20px",
    marginTop: "40px"
  }
};

export default Footer;