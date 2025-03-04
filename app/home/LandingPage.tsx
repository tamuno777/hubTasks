import React from "react";
import ContactUs from "../components/ContactUs";
import CustomerExperience from "../components/CustomerExperience";
import FeaturedCollections from "../components/FeaturedCollections";
import Footer from "../components/sharedLayout/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import NewArrivals from "../components/NewArrivals";
import Partners from "../components/Partners";
import SeasonedCollections from "../components/SeasonedCollections";
import TopHeader from "../components/TopHeader";


export default function LandingPage() {
  return (
    <main className="w-full">
      <TopHeader />
      <Navbar />
      <Hero />
      <Partners />
      <FeaturedCollections />
      <CustomerExperience />
      <SeasonedCollections />
      <NewArrivals />
      <ContactUs />
      <Footer />
    </main>
  );
}
