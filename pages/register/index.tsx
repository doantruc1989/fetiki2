import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import axiosAll from "../components/other/axiosAll";
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [matchPwd, setMatchPwd] = useState('');
  const [validMatch, setValidMatch] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e :any) => {
    e.preventDefault();
    try {
      const response = await axiosAll.post(
        "/auth/signup",
        JSON.stringify({ email, password, name: username })
      );
        setSuccess(true);
        setUsername("");
        setPassword("");
        setEmail("");
      
    } catch (error: any) {
            if(error){
                toast(`${error?.response.data.message}. Please try again`, {
                    position: toast.POSITION.TOP_RIGHT,
                    type: toast.TYPE.ERROR,
                    className: "toast-message",
                  });}
    }
  };
  console.log(validMatch);

  const handleChangeEmail = (e: any) => {
    setEmail(e.target.value);
  };

  const handleChangeUsername = (e: any) => {
    setUsername(e.target.value);
  };

  const handleChangePassword = (e: any) => {
    setPassword(e.target.value);
  };

  useEffect(() => {
    setValidMatch(password === matchPwd);
}, [password, matchPwd])

  return (
    <div className="my-10 md:flex items-center justify-center w-11/12 mx-auto">
      {success ? (
        <section className="text-lg text-center uppercase font-semibold">
          <h1>Success!</h1>
          <p>
            <Link href="/login">to Login page</Link>
          </p>
        </section>
      ) : (
        <form className="flex flex-col gap-4 md:w-2/4">
          <ToastContainer />
          <h1 className="text-lg text-center uppercase font-semibold">
            Register
          </h1>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="email2" value="Your email" />
            </div>
            <TextInput
              id="email2"
              type="email"
              placeholder="enter your email"
              value={email}
              required={true}
              shadow={true}
              onChange={handleChangeEmail}
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="username" value="Your username" />
            </div>
            <TextInput
              id="username2"
              type="text"
              placeholder="enter your username"
              value={username}
              required={true}
              shadow={true}
              onChange={handleChangeUsername}
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="password2" value="Your password" />
            </div>
            <TextInput
              id="password2"
              type="password"
              required={true}
              value={password}
              shadow={true}
              onChange={handleChangePassword}
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="repeat-password" value="Repeat password" />
            </div>
            <TextInput
              id="repeat-password"
              type="password"
              required={true}
              value={matchPwd}
              shadow={true}
              onChange={(e:any) =>setMatchPwd(e.target.value)}
            />
          </div>
          <div className="flex items-center gap-2">
            <Checkbox id="agree" />
            <Label htmlFor="agree">
              I agree with the{" "}
              <a
                href="/forms"
                className="text-blue-600 hover:underline dark:text-blue-500"
              >
                terms and conditions
              </a>
            </Label>
          </div>
          <Button type="submit" onClick={handleSubmit} disabled={!validMatch}>
            Register new account
          </Button>
          <div className='flex items-center justify-center gap-4'>
                    <p>Already have an account?</p>
                    <Link href={'/login'} className="font-medium text-blue-700">Login here</Link>
                </div>
        </form>
      )}
    </div>
  );
};

export default Register;
