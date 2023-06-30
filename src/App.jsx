import React, { useState, useEffect } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

export default function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const baseURL = import.meta.env.VITE_API_KEY;

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      await axios.post(`${baseURL}/api/form`, {
        name: name,
        email: email,
      });
      setName("");
      setEmail("");
      toast.success("Form Submitted !");
      setLoading(false);
    } catch (error) {
      toast.error("Try Again !");
      setLoading(false);
    }
  };

  return (
    <div className="bg-lime-100 h-[100vh] flex justify-center">
      <Toaster />
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center space-y-5 p-4 bg-fuchsia-100 w-80"
      >
        <h1 className="text-center text-5xl">Form</h1>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your Name..."
          required
          className="w-60 bg-white outline-none p-2 border-2 rounded-xl border-black"
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your Email..."
          required
          className="w-60 bg-white outline-none p-2 border-2 rounded-xl border-black"
        />
        <button
          type="submit"
          disabled={loading}
          className="bg-black text-2xl text-yellow-100 border-2 border-black px-2 w-60 rounded-lg hover:bg-white hover:text-black transition-all duration-200 delay-75 ease-in"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
