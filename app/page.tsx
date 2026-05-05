import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import HomePage from "./components/homepage/HomePage";
import { Analytics } from "@vercel/analytics/next";

export default function Home() {
  return (
    <>
      <Header />
      <HomePage />
      <Footer />

      <Analytics />
    </>
  );
}