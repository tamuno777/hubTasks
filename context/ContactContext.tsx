'use client';
import React from "react";

import { createContext, useContext, useState } from "react";

const ContactContext = createContext<any>(null);

export const ContactProvider = ({ children }: { children: React.ReactNode }) => {
  const [status, setStatus] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const sendMessage = async (name: string, email: string, message: string) => {
    setLoading(true);
    setStatus(null);

    try {
      const res = await fetch("http://localhost:5000/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      if (!res.ok) throw new Error("Failed to send message");

      setStatus("Message sent successfully! ✅");
    } catch (error) {
      setStatus("Error sending message. ❌");
    } finally {
      setLoading(false);

      // Clear status message after 3 seconds
      setTimeout(() => setStatus(null), 3000);
    }
  };

  return (
    <ContactContext.Provider value={{ sendMessage, status, loading }}>
      {children}
    </ContactContext.Provider>
  );
};

export const useContact = () => useContext(ContactContext);
