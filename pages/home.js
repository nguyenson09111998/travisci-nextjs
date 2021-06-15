import React from 'react';
import { connect } from 'react-redux'
import FirstSection from "../pages-sections/home/FirstSection";
import Header from "../components/Header/Header";
import HeaderLinksPTE from "../components/Header/HeaderLinksPTE";
import logo from "../assets/img/New-pte-magic-logo-1.png"
import SecondSection from "../pages-sections/home/SecondSection";
import FourthSection from "../pages-sections/home/FourthSection";
import FifthSection from "../pages-sections/home/FifthSection";
import SixthSection from "../pages-sections/home/SixthSection";
import SeventhSection from "../pages-sections/home/SeventhSection";
import EighthSection from "../pages-sections/home/EighthSection";
import NinethSection from "../pages-sections/home/NinethSection";
import TenthSection from "../pages-sections/home/TenthSection";
import EleventhSection from "../pages-sections/home/EleventhSection";
import TwelfthSection from "../pages-sections/home/TwelfthSection";
import PTEFooter from "../components/Footer/PTEFooter";
import ThirdSection from "../pages-sections/home/ThirdSection";
import ThirteenthSection from "../pages-sections/home/ThirteenthSection";


import { getPost } from '../store/blog/actions'

const Home = (props) => {

  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    props.getPost()
  }, []);
  return (
    <div>
      <Header
        brand={<img src={logo} alt={"logo"} />}
        color="transparent"
        links={<HeaderLinksPTE />}
        fixed
        changeColorOnScroll={{
          height: 0,
          color: "white"
        }}
      />
      <FirstSection />
      <SecondSection />

      <ThirdSection />
      <FourthSection />
      <FifthSection />
      <SixthSection />
      <SeventhSection />
      <EighthSection />
      <NinethSection />
      <TenthSection />
      <EleventhSection />
      <TwelfthSection />
      <ThirteenthSection />
      <PTEFooter />
    </div>
  )
}

const mapStateToProps = (state, props) => {
  console.log(state);
  return {};
};

const mapDispatchToProps = { getPost };

export default connect(mapStateToProps, mapDispatchToProps)(Home);