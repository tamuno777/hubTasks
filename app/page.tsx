import TopHeader from './components/TopHeader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Partners from './components/Partners';
import FeaturedCollections from './components/FeaturedCollections';
import CustomerExperience from './components/CustomerExperience';
import SeasonedCollections from './components/SeasonedCollections';
import NewArrivals from './components/NewArrivals';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';

export default function Home() {
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
