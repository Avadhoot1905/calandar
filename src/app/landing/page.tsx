"use client";

import React, { useState, useEffect } from "react";
import NavBar from "../../components/NavBar";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";

const LandingPage: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Client-side sign-in function
  const handleSignIn = async () => {
    try {
      await signIn("google");
    } catch (error) {
      console.error("Sign-in failed:", error);
    }
  };

  return (
    <div>
      <div className="max-w-6xl mx-auto flex justify-center">
        <NavBar
          className={`fixed top-0 transition-all duration-300 ${
            scrolled ? "bg-white/80 backdrop-blur-md shadow-md rounded-xl p-2" : "bg-transparent"
          }`}
        />
      </div>

      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <Card className="w-full max-w-xl p-6 text-center bg-white shadow-lg rounded-lg">
          <p className="text-sm text-gray-500 mb-2">Cal.com launches v5.0</p>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            The better way to schedule your meetings
          </h1>
          <p className="text-gray-600 mb-6">
            A fully customizable scheduling experience for individuals, businesses taking calls, and developers building scheduling platforms where users meet users.
          </p>

          {/* Using onClick instead of form */}
          <Button onClick={handleSignIn} className="w-full bg-black text-white hover:bg-gray-800 mb-3">
            Sign up with Google
          </Button>

          <Button variant="outline" className="w-full">
            Sign up with email
          </Button>
          <p className="text-xs text-gray-500 mt-3">No credit card required</p>
        </Card>
      </div>

      {/* New Section */}
      <div className="bg-gray-100 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900">With us, scheduling is easy</h2>
          <p className="text-gray-600 mt-2">
            Effortless scheduling for individuals, powerful solutions for fast-growing modern companies.
          </p>
        </div>

        <div className="max-w-4xl mx-auto flex justify-center gap-6 mt-8 px-6">
          <Card className="w-1/3 p-6 bg-white shadow-md rounded-lg text-center">
            <span className="text-gray-500 text-sm font-bold">01</span>
            <h3 className="text-xl font-semibold mt-2">Connect your calendar</h3>
            <p className="text-gray-600 mt-2">
              We'll handle all the cross-referencing, so you don't have to worry about double bookings.
            </p>
          </Card>

          <Card className="w-1/3 p-6 bg-white shadow-md rounded-lg text-center">
            <span className="text-gray-500 text-sm font-bold">02</span>
            <h3 className="text-xl font-semibold mt-2">Set your availability</h3>
            <p className="text-gray-600 mt-2">
              Want to block off weekends? Set up any buffers? We make that easy.
            </p>
          </Card>

          <Card className="w-1/3 p-6 bg-white shadow-md rounded-lg text-center">
            <span className="text-gray-500 text-sm font-bold">03</span>
            <h3 className="text-xl font-semibold mt-2">Choose how to meet</h3>
            <p className="text-gray-600 mt-2">
              It could be a video chat, phone call, or a walk in the park!
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
