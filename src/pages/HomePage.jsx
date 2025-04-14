import LaunchOffer from "../components/LaunchOffer";
import OfferPopup from "../components/OfferPopup";
import Header from "../components/Header";
import Banner from "../components/Banner";
import Services from "../components/Services";
import Skills from "../components/skills";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      {/* <LaunchOffer /> */}
      <Header />
      <Banner />
      {/* <OfferPopup /> */}
      <Services />
      <Skills />
      <Footer />
    </>
  );
}

export default Home;
