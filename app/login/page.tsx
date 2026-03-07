"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAppDispatch } from "@/lib/rudux/hooks";
import { login } from "@/lib/rudux/authSlice";

export default function LoginPage() {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    // mocked authentication
    if (email === "esraa@test.com" && password === "123456") {
      dispatch(login({ user: "Admin", token: "mock-token" }));
        document.cookie = "authToken=mock-token; path=/";

      router.push("/dashboard");
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-950 px-4">
      
      <div className="w-full max-w-md bg-slate-900 p-8 rounded-2xl border border-slate-700 shadow-lg">

        <h1 className="text-2xl font-bold text-white text-center mb-6">
          Dashboard Login
        </h1>

        <form onSubmit={handleLogin} className="space-y-4">
            <label  className="text-gray-300"htmlFor="email"> email</label>
          <input
          id="email"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 rounded-lg bg-slate-800 text-white border border-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
            <label className="text-gray-300" htmlFor="password">password</label>

          <input
          id="password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 rounded-lg bg-slate-800 text-white border border-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />

          {error && (
            <p className="text-red-400 text-sm">{error}</p>
          )}

          <button
            type="submit"
            className="w-full cursor-pointer py-2 bg-indigo-600 hover:bg-indigo-700 rounded-lg text-white font-medium transition"
          >
            Login
          </button>

        </form>

        <p className="text-xs text-slate-400 text-center mt-6">
          Demo: esraa@test.com / 123456
        </p>

      </div>
    </div>
  );
}