import Navbar from "../components/Navbar";

function Signup() {
  return (
    <div>
      <Navbar />
      <h1>Signup</h1>
      <form>
        <p>email</p>
        <input type="text" placeholder="email" />
        <p>username</p>
        <input type="text" placeholder="username" />
        <p>password</p>
        <input type="password" placeholder="password" />
        <button type="submit">signup</button>
      </form>
    </div>
  );
}

export default Signup;
