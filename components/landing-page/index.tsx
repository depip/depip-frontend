import Footer from "./footer";
import Banner from "./banner";
import IpAssets from "./ip-assets";
import SharingEconomy from "./sharing-economy";
import AIPowered from "./ai-powered";
import OurApplications from "./our-applications";
import Honored from "./honored";
import Subscribe from "./subscribe";

const LandingPage = () => {
  return (
    <>
      <div className="bg-white">
        <Banner></Banner>
        <IpAssets></IpAssets>
        <SharingEconomy></SharingEconomy>
        <AIPowered></AIPowered>
        <OurApplications></OurApplications>
        <Honored></Honored>
        <Subscribe></Subscribe>
        <Footer />
      </div>
    </>
  );
};

export default LandingPage;
