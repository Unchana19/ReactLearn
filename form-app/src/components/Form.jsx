import { useState } from "react";

export default function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [errorName, setErrorName] = useState(0);
  const [errorEmail, setErrorEmail] = useState(0);
  const [errorPassword, setErrorPassword] = useState(0);
  const [errorConfirmPassword, setErrorConfirmPassword] = useState(0);

  const [nameColor, setNameColor] = useState("violet");
  const [emailColor, setEmailColor] = useState("violet");
  const [passwordColor, setPasswordColor] = useState("violet");
  const [confirmPasswordColor, setConfirmPasswordColor] = useState("violet");

  const validateForm = (e) => {
    e.preventDefault();

    if (name.length > 5) {
      setErrorName(0);
      setNameColor("teal");
    } else {
      setErrorName(100);
      setNameColor("red");
    }

    if (email.includes("@")) {
      setErrorEmail(0);
      setEmailColor("teal");
    } else {
      setErrorEmail(100);
      setEmailColor("red");
    }

    if (password.length > 8) {
      setErrorPassword(0);
      setPasswordColor("teal");
    } else {
      setErrorPassword(100);
      setPasswordColor("red");
    }

    if (confirmPassword === password && confirmPassword !== '') {
      setErrorConfirmPassword(0);
      setConfirmPasswordColor("teal");
    } else {
      setErrorConfirmPassword(100);
      setConfirmPasswordColor("red");
    }
  };

  return (
    <div className="w-3/5  items-center text-center justify-center relative">
      <h1 className="w-full text-4xl font-semibold text-gray-50 tracking-wider">
        Register
      </h1>
      <div className="my-10 pb-10 card bg-slate-900 drop-shadow-[0_0_1.5rem_rgba(255,199,255,0.15)]">
        <form className="" onSubmit={validateForm}>
          <div className="my-5 rounded-xl pt-2 relative">
            <label className="absolute text-xs text-indigo-600">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={`w-3/5 bg-transparent text-lg px-2 pt-6 pb-1 border-b-2 border-b-${nameColor}-900 outline-none text-white`}
            />
            <small className={`block mt-1 mb-0 text-red-700 opacity-${errorName}`}>
              Length of name must have more 8 character
            </small>
          </div>
          <div className="my-10 rounded-xl pt-2 relative">
            <label className="absolute text-xs text-indigo-600">Email</label>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`w-3/5 bg-transparent text-lg px-2 pt-6 pb-1 border-b-2 border-b-${emailColor}-900 outline-none text-white`}
            />
            <small className={`block my-1 text-red-700 opacity-${errorEmail}`}>
              Email is invalid
            </small>
          </div>
          <div className="my-10 rounded-xl pt-2 relative">
            <label className="absolute text-xs text-indigo-600">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={`w-3/5 bg-transparent text-lg px-2 pt-6 pb-1 border-b-2 border-b-${passwordColor}-900 outline-none text-white`}
            />
            <small className={`block my-1 text-red-700 opacity-${errorPassword}`}>Length of password must have more 8 character</small>
          </div>
          <div className="my-10 rounded-xl pt-2 relative">
            <label className="absolute text-xs text-indigo-600">
              Confirm Password
            </label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className={`w-3/5 bg-transparent text-lg px-2 pt-6 pb-1 border-b-2 border-b-${confirmPasswordColor}-900 outline-none text-white`}
            />
            <small className={`block my-1 text-red-700 opacity-${errorConfirmPassword}`}>password is not macth</small>
          </div>
          <button
            type="submit"
            className="w-2/5 bg-indigo-950 mb-2 p-3 text-violet-100 font-semibold rounded-xl ease-out duration-300 drop-shadow-[0_0_.75rem_rgba(0,0,0,0.1)] hover:drop-shadow-[0_0_.75rem_rgba(255,199,255,0.15)]"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
}
