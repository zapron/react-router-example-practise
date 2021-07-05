import { Link } from "react-router-dom";
function Home() {
  return (
    <div>
      <h1>Welcome to Home</h1>
      <p>The link on this page is by using Link</p>
      <Link to="contacts"> Contacts </Link>
      <br />
      <Link to="about"> About </Link>
      <br />
      <Link to="/"> Home </Link>
    </div>
  );
}
export default Home;
