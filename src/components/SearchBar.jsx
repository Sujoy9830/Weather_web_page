import { useState } from "react";

export default function SearchBar({ onSearch }) {
  const [location, setLocation] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (location.trim()) {
      onSearch(location);
      setLocation("");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex justify-center items-center mt-6"
    >
      <input
        type="text"
        placeholder="Enter city..."
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        className="px-4 py-2 rounded-xl border border-gray-300 focus:outline-none w-64 mr-1 text-white"
      />
      <button
        type="submit"
        className="bg-emerald-400 text-white px-4 py-2 rounded-xl hover:bg-emerald-600 transition"
      >
        Search
      </button>
    </form>
  );
}
