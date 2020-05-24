import React, { useState } from "react";
import { auth } from "firebase/app";
import { Link, Redirect } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";

export const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const [user] = useAuthState(auth());
  const onSubmit = (e) => {
    e.preventDefault();
    auth()
      .signInWithEmailAndPassword(email, password)
      .catch((err) => {
        setError(err.message);
      });
  };
  if (user) return <Redirect to="/listings" />
  return (
    <main className="container mx-auto px-4">
      <section className="mt-6 w-full md:w-1/2 mx-auto">
        <div className="bg-gray-600 rounded-tr-lg rounded-tl-lg py-2">
          <h1 className="text-center text-white font-display text-2xl">
            Water Exchange Login
          </h1>
        </div>
        <div className="w-full">
          <form
            className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
            onSubmit={(e) => onSubmit(e)}
          >
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="username"
              >
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="example@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="********"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            {error && error}
            <div className="flex items-center justify-between">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Sign In
              </button>
              <Link
                className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                to="/forgot-password"
              >
                Forgot Password?
              </Link>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
};
