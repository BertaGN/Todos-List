import { useState } from "react";
import { useUser } from "../../Context/UserContext";



export const Login = () => {

  const { createUser, loginUser } = useUser();


const [registerValues, setRegisterValues] = useState({
    email: "",
    fullName: "",
    password: "",
    repPassword: "",
  });

  const [LoginValues, setLoginValues] = useState({
    email: "",
    password: "",
  })

  const handleChangeRegisterValues = (e) => {
    setRegisterValues({ ...registerValues, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createUser(registerValues);
  };

  const handleChangeLoginValues = (e) => {
    setLoginValues ({ ...LoginValues, [e.target.name]: e.target.value});
  }

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    loginUser(LoginValues);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="email"
          value={registerValues.email}
          name="email"
          onChange={handleChangeRegisterValues}
        />
        <input
          type="text"
          placeholder="Fullname"
          value={registerValues.fullName}
          name="fullName"
          onChange={handleChangeRegisterValues}
        />
        <input
          type="password"
          placeholder="Password"
          value={registerValues.password}
          name="password"
          onChange={handleChangeRegisterValues}
        />
        <input
          type="password"
          placeholder="Repeat password"
          value={registerValues.repPassword}
          name="repPassword"
          onChange={handleChangeRegisterValues}
        />
        <button>Register</button>
      </form>
      <p>Login</p>
        <form onSubmit={handleLoginSubmit}>
        <input
          type="text"
          placeholder="email"
          value={LoginValues.email}
          name="email"
          onChange={handleChangeLoginValues}
        />
        <input
          type="password"
          placeholder="Password"
          value={LoginValues.password}
          name="password"
          onChange={handleChangeLoginValues}
        />
        <button>Login</button>
        </form>
    </div>
  );
}