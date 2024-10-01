'use client'

import { useEffect, useState } from "react";
import Header from "@/components/Header";
import "./globals.css";
import HeaderWithBackground from "@/components/HeaderWithBackground";
import TwoColumnComponent from "@/components/TwoColumnComponent";
import Entertainment from "@/components/Entertainment";
import Footer from "@/components/Footer";
import Countdown from "@/components/Countdown";
import AboveFooter from "@/components/AboveFooter";
import Rcards from "@/components/Rcards";
import FAQ from "@/components/FAQ";
import Speaker from "@/components/Speaker";
import Loader from "@/components/Loader";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading process
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500); // Show loader for 3 seconds

    return () => clearTimeout(timer); // Cleanup the timer
  }, []);

  return (
    <>
      {loading ? (
        <Loader /> // Show loader while loading
      ) : (
        <>
          <HeaderWithBackground />
          <TwoColumnComponent />
          <Entertainment />
          <Countdown />
          <Speaker />
          <Rcards />
          <FAQ />
          <AboveFooter />
          <Footer />
        </>
      )}
    </>
  );
}
