import { Link } from "react-router-dom";
function Contacts() {
  return (
    <div>
      <h1>Welcome to Contacts</h1>
      <p>
        Return to <Link to="/">Home</Link>
      </p>
      <br />
      <p>
        Return to <Link to="/about">About</Link>
      </p>
    </div>
  );
}
export default Contacts;
