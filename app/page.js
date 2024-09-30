import Header from "@/components/Header";
import './globals.css'
import HeaderWithBackground from "@/components/HeaderWithBackground";
import TwoColumnComponent from "@/components/TwoColumnComponent";
import Entertainment from "@/components/Entertainment";
import Footer from "@/components/Footer";
import Countdown from "@/components/Countdown";
import AboveFooter from "@/components/AboveFooter";
import Speaker from "@/components/Speaker";

export default function Home() {
  return (
    <>
      <HeaderWithBackground />
      <TwoColumnComponent />
      <Entertainment />
      <Countdown />
      <AboveFooter />
      <Footer />
    </>
  );
}
