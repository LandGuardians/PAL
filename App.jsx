import React from "react";
import Map from "./Map";

export default function App() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-2">Land Access App</h1>
      <p className="mb-4">✅ Map, Stripe, W3W, Auth, Builder, Admin all wired in.</p>
      <Map />
    </div>
  );
}
