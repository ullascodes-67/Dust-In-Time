import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import NavBar from "./comp/NavBar";
import Home from "./pages/Home";
import PackageDetails from "./pages/PackageDetails";
import Packages from "./pages/Packages";
import Contact from "./pages/Contact";
import FAQ from "./pages/FAQ";
import BuildPlan from "./pages/BuildPlan";
import Subscription from "./pages/Subscription";

function SplashScreen() {
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const fadeTimer = setTimeout(() => {
      setFade(true);
    }, 1000);

    return () => clearTimeout(fadeTimer);
  }, []);

  return (
    <div
      className={`fixed inset-0 bg-white flex items-center justify-center z-50 transition-opacity duration-500 ${
        fade ? "opacity-0" : "opacity-100"
      }`}
    >
      <img
        src="/logo.png"
        alt="Logo"
        className="w-52 h-52 object-contain"
      />
    </div>
  );
}

export default function App() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (showSplash) {
    return <SplashScreen />;
  }

  return (
    <>
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/package/:type" element={<PackageDetails />} />
        <Route path="/packages" element={<Packages />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/FAQ" element={<FAQ />} />
        <Route path="/build-plan" element={<BuildPlan />} />
        <Route path="/subscription" element={<Subscription />}
/>
      </Routes>
    </>
  );
}