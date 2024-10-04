import React, {useState} from 'react';
import axios from 'axios';


interface NewUserData {
  email: string;
  username: string;
  password: string;
}

function Register() {
    const [newUser, setNewUser] = useState<NewUserData | null>(null);

    const handleRegisterUser = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const formData = new FormData(e.currentTarget);
      const email = formData.get('email') as string;
      const username = formData.get('username') as string;
      const password = formData.get('password') as string;

      const newUser: NewUserData = { email, username, password };

      try {
      const response = await axios.post("/api/register", newUser);
      console.log("User registered successfully:", response.data);
      } catch (error) {
      console.log("Error in registering new user: ", error);
      }
    }

    return (
        <div>
            <h1>Signup</h1>
            <form onSubmit={handleRegister}>
                <label>Email</label>
                <input type="email" name="email" placeholder="johndoe@example.com" />
                <label>Username</label>
                <input type="text" name="username" placeholder="John" />
                <label>Password</label>
                <input type="password" name="password" placeholder="*******" />
                <button type="submit">Register</button>
            </form>
        </div>
    ); 
}

export default Register;
