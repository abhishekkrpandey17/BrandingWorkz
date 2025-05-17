"use client";
import { useState } from "react";
import QuoteModal from "../componets/getaquote";


export default function App() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="p-10">
      <button
        onClick={() => setShowModal(true)}
        className="bg-indigo-600 text-white px-6 py-3 rounded-lg"
      >
        Get a Quote
      </button>

      <QuoteModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </div>
  );
}
