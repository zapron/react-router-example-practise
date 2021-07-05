import { Link } from "react-router-dom";

function About() {
  return (
    <div>
      <h1>Welcome to About</h1>
      <p>
        The link here is a simple slower anchor link to <a href="/">Home</a>
      </p>

      <p>
        The link here is a faster <b> Link </b> to{" "}
        <Link to="/contacts">Contacts</Link>
      </p>
    </div>
  );
}
export default About;
