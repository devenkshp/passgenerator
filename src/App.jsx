import { useEffect, useRef, useState } from "react";

import "./index.css";
import Footer from "./components/Footer";
import ButtonRounded from "./components/ButtonRounded";
import StrengthBars from "./components/StrengthBars";
import Checkbox from "./components/Checkbox";

import getPassword from "./helper";

function App() {
  const [password, setPassword] = useState("");
  const [passwordStrength, setPasswordStrength] = useState(0);
  const [passwordLength, setPasswordLength] = useState(12);
  const [charset, setCharset] = useState({
    uppercase: true,
    lowercase: true,
    numbers: true,
    symbols: true,
  });
  const [error, setError] = useState("");
  const [right, setRight] = useState("-110%");
  const [top, setTop] = useState("0");
  const inputRef = useRef();

  useEffect(() => {
    generatePassword();
  }, []);

  useEffect(() => {}, [error]);

  const increseLength = () => {
    if (passwordLength < 32) {
      setPasswordLength(passwordLength + 1);
      generatePassword();
    }
  };

  const decreaseLength = () => {
    if (passwordLength > 6) {
      setPasswordLength(passwordLength - 1);
      generatePassword();
    }
  };

  const generatePassword = () => {
    const include = [];
    Object.keys(charset).forEach((item) =>
      charset[item] ? include.push(item) : null
    );

    const { password, strength } = getPassword(passwordLength, include);

    setPassword(password);
    setPasswordStrength(strength);
  };

  const handleCharsetChange = (value) => {
    let includedCharset = 0;
    Object.keys(charset).forEach((key) => {
      if (charset[key]) includedCharset++;
    });

    // Prevent from deselecting all charsets
    if (includedCharset == 1 && value[Object.keys(value)[0]] == false) return;

    setCharset(Object.assign(charset, value));
    generatePassword();
  };

  const handleCopy = () => {
    setError("");
    if (password !== "") {
      inputRef.current.select();
      navigator.clipboard.writeText(password);
      setTop("-100%");
      setTimeout(() => setTop("0"), 2000);
    } else {
      setError("There no password to copy!");
      setRight("0");
      setTimeout(() => setRight("-110%"), 2000);
    }
  };

  return (
    <div className="h-svh flex flex-col">
      <main className="flex flex-1 flex-col justify-center mx-auto max-w-sm p-2">
        <p className="text-center font-bold text-3xl sm:text-4xl mb-2">
          Password Generator
        </p>
        <p className="text-center">
          Generate an{" "}
          <span className="font-bold text-green-600">nu6r3@k@6l3</span> password
        </p>
        <div className="mt-28 overflow-hidden">
          <div className="flex bg-gray-600 rounded-full items-center m-auto overflow-hidden">
            <div className="flex flex-1">
              <div className="w-full pl-5">
                <div
                  className="transition-all ease-in-out duration-300 h-12 flex flex-1 flex-col"
                  style={{ transform: `translateY(${top})` }}
                >
                  <input
                    type="text"
                    name="password"
                    ref={inputRef}
                    value={password}
                    disabled
                    className="min-h-full overflow-hidden text-ellipsis bg-transparent text-lg font-bold w-full outline-0"
                  />
                  <button
                    className="min-h-12 flex items-center text-green-600"
                    title="Click to copy the password"
                  >
                    Copied!
                  </button>
                </div>
              </div>
              <button
                className="h-12 px-2 bg-gray-400 text-gray-800 font-normal hover:bg-gray-200 z-50"
                onClick={handleCopy}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 0 1-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 0 1 1.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 0 0-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 0 1-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H9.75"
                  />
                </svg>
              </button>
            </div>
            <button
              className="h-12 w-12 text-xl bg-green-700 hover:bg-green-600 rounded-r-full z-50"
              onClick={() => generatePassword()}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="h-6 w-6 fill-white mx-auto"
              >
                <title>regenerate</title>
                <path d="M2 12C2 16.97 6.03 21 11 21C13.39 21 15.68 20.06 17.4 18.4L15.9 16.9C14.63 18.25 12.86 19 11 19C4.76 19 1.64 11.46 6.05 7.05C10.46 2.64 18 5.77 18 12H15L19 16H19.1L23 12H20C20 7.03 15.97 3 11 3C6.03 3 2 7.03 2 12Z" />
              </svg>
            </button>
          </div>
          <div className="mt-4 mx-auto w-4/5 text-center">
            <StrengthBars strength={passwordStrength} />
          </div>
          <div className="mt-16 px-3">
            <div className="mb-3 font-bold">
              <span className="text-green-600">Length</span>
            </div>
            <div className="flex items-center">
              <input
                type="text"
                value={passwordLength}
                readOnly
                className="w-12 mr-4 bg-gray-600 border-none text-center py-1 rounded-md outline-none"
              />
              <ButtonRounded
                label="-"
                bgColor="bg-red-700 hover:bg-red-600"
                handlePress={decreaseLength}
              />
              <div className="flex-1 px-3">
                <input
                  type="range"
                  name="length"
                  id="length"
                  min={6}
                  max={32}
                  value={passwordLength}
                  onChange={(e) => {
                    setPasswordLength(parseInt(e.target.value));
                    generatePassword();
                  }}
                  className="w-full"
                />
              </div>
              <ButtonRounded
                label="+"
                bgColor="bg-green-700 hover:bg-green-600"
                handlePress={increseLength}
              />
            </div>
          </div>
          <div className="mt-8 grid px-3 font-bold grid-cols-4">
            <p className="col-span-4 text-green-700">Include</p>
            <Checkbox
              id="uppercase"
              name="uppercase"
              label="ABC"
              checked={charset.uppercase}
              setValue={handleCharsetChange}
            />
            <Checkbox
              id="lowercase"
              name="lowercase"
              label="abc"
              checked={charset.lowercase}
              setValue={handleCharsetChange}
            />
            <Checkbox
              id="numbers"
              name="numbers"
              label="123"
              checked={charset.numbers}
              setValue={handleCharsetChange}
            />
            <Checkbox
              id="symbols"
              name="symbols"
              label="@$%"
              checked={charset.symbols}
              setValue={handleCharsetChange}
            />
          </div>
          <div className="header"></div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
