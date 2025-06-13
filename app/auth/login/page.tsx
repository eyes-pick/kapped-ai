"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

/** Basic login form posting credentials to the auth API */
export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        const res = await fetch("/api/auth/[...nextauth]", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, password }),
        });
        if (res.redirected) router.push(res.url);
      }}
      className="flex flex-col gap-2 max-w-sm mx-auto mt-10"
    >
      <input
        className="border p-2"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        className="border p-2"
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit" className="bg-black text-white p-2">
        Login
      </button>
    </form>
  );
}
