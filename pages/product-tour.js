/*eslint-disable*/
import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import InputAdornment from "@material-ui/core/InputAdornment";
import NavPills from "../components/NavPills/NavPills";
import ScrollAnimation from "react-animate-on-scroll";
import logo from "assets/img/New-pte-magic-logo-1.png";
import bg12 from "assets/img/bg12.jpg";

// core components

import {
  mrAuto,
  mlAuto,
  blackColor,
  whiteColor,
  grayColor,
  hexToRgb,
} from "assets/jss/nextjs-material-kit-pro.js";

import HeaderLinksPTE from "components/Header/HeaderLinksPTE";
import Header from "components/Header/Header";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import InfoArea from "components/InfoArea/InfoArea";
import InfoAreaNumber from "components/InfoArea/InfoAreaNumber";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import CustomInput from "components/CustomInput/CustomInput.js";

// sections for this page
import SectionDescription from "pages-sections/home/SectionDescription";
import SectionComponents from "pages-sections/presentation-page/SectionComponents.js";
import SectionCards from "pages-sections/presentation-page/SectionCards.js";
import SectionContent from "pages-sections/presentation-page/SectionContent.js";
import SectionSections from "pages-sections/presentation-page/SectionSections.js";
import SectionExamples from "pages-sections/presentation-page/SectionExamples.js";
import SectionFreeDemo from "pages-sections/presentation-page/SectionFreeDemo.js";
import SectionOverview from "pages-sections/presentation-page/SectionOverview.js";
import SectionPricing from "pages-sections/presentation-page/SectionPricing.js";

import presentationStyle from "assets/jss/nextjs-material-kit-pro/pages/presentationStyle.js";

import ViewCarousel from "@material-ui/icons/ViewCarousel";
import Mail from "@material-ui/icons/Mail";

import Code from "@material-ui/icons/Code";
import FormatPaint from "@material-ui/icons/FormatPaint";
import Dashboard from "@material-ui/icons/Dashboard";
import AccessTime from "@material-ui/icons/AccessTime";
import AttachMoney from "@material-ui/icons/AttachMoney";
import VpnKeyIcon from "@material-ui/icons/VpnKey";
import MicNoneIcon from "@material-ui/icons/MicNone";
import ReceiptIcon from "@material-ui/icons/Receipt";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import PermContactCalendarIcon from "@material-ui/icons/PermContactCalendar";

import bg9 from "assets/img/bg9.jpg";
import ecommerceHeader from "assets/img/examples/ecommerce-header.jpg";
import banner from "assets/img/benit/banner.svg";

import LanguageIcon from "@material-ui/icons/Language";
import GroupAddIcon from "@material-ui/icons/GroupAdd";
import EventNoteIcon from "@material-ui/icons/EventNote";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import FingerprintIcon from "@material-ui/icons/Fingerprint";
import CollectionsBookmarkIcon from "@material-ui/icons/CollectionsBookmark";

const styles = {
  ...presentationStyle,
  mrAuto,
  mlAuto,
  sectionTitle: {
    fontWeight: 700,
    margin: "32px 0",
    textAlign: "center",
    fontSize: 32,
  },
  about: {
    "& h1, & h4": {
      color: "white !important",
    },
  },
  titleHeader: {
    textAlign: "center",
  },
  cardIntroduce: {
    maxwidth: "100%",
    border: "1px solid black",
    borderRadius: "10px",
    boxShadow: "0 0.5rem 2rem rgba(0, 0, 0, 0.2)",
    marginBottom: "40px",
  },
  cardHeader: {
    maxwidth: "100%",
    height: "72px",
    lineHeight: "2",
    backgroundColor: "#f8d380",
    borderTopRightRadius: "10px",
    borderTopLeftRadius: "10px",
    "& h4": {
      fontSize: "28px",
      color: "black",
      textAlign: "center",
    },
  },
  imgCard: {
    maxWidth: "289px",
    height: "289px",
    marginLeft: "50px",
  },
  cardBody: {
    marginTop: "30px",
    "& p": {
      fontSize: "17px",
      paddingRight: "40px",
    },
    "& h4": {
      textAlign: "center",
      fontWeight: "550",
      color: "gold",
    },
  },
  helpCustomer: {
    maxwidth: "100%",
    marginBottom: "60px",
  },
  headerHelpCustomer: {
    maxwidth: "100%",
    height: "72px",
    lineHeight: "2",
    "& h4": {
      fontSize: "28px",
      color: "black",
      textAlign: "center",
    },
  },
  contentHelpCustomer: {
    "& p": {
      textAlign: "center",
      fontSize: "17px",
      fontWeight: "550",
      lineHeight: "1",
    },
  },
  titleDifferent: {
    textAlign: "center",
    color: "white",
    fontSize: "28px",
    paddingTop: "10px",
  },
  different: {
    backgroundColor: "#6930c3",
    maxWidth: "100%",
    height: "400px",
    marginBottom: "50px",
    position: " relative",
  },
  formDifferent: {
    maxWidth: "100%",
    backgroundColor: "white",
    borderRadius: "10px",
  },
  contentDifferent: {
    textAlign: "center",
    marginTop: "5px",
    "& p": {
      fontSize: "17px",
      fontWeight: "550",
    },
  },
  svgIcon: {
    fontSize: "100px",
  },
  formStep: {
    maxWidth: "100%",
    backgroundColor: "white",
    borderRadius: "10px",
    display: "flex",
    alignItems: "center",
  },
};

const useStyles = makeStyles(styles);

export default function PresentationPage() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  });
  const classes = useStyles();
  return (
    <div>
      <Header
        brand={<img src={logo} alt={"logo"} />}
        color="gold"
        links={<HeaderLinksPTE />}
        fixed
        changeColorOnScroll={{
          height: 0,
          color: "white",
        }}
      />
      <Parallax image={require("assets/img/bg9.jpg")} filter="dark" small>
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem
              md={8}
              sm={8}
              className={classNames(
                classes.mlAuto,
                classes.mrAuto,
                classes.textCenter,
                classes.about
              )}
            >
              <h1 className={classes.sectionTitle}>Product Tour</h1>
              <h4 className={classes.textCustomer}>
                Stories from some of our fastest-growing customers
              </h4>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div>
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem xs={12} md={8} sm={8}>
              <h2 className={classes.titleHeader}>
                PTE Academic Exam Preparation
              </h2>
              <h4 className={classes.titleHeader}>
                We have PTE courses designed to suit every English background
                and your PTE Target score.
              </h4>
            </GridItem>
          </GridContainer>
        </div>
        <div className={classes.container}>
          <GridContainer justify="center" className={classes.cardIntroduce}>
            <GridItem xs={12} md={12} sm={12} className={classes.cardHeader}>
              <h4>
                Introducing&nbsp;<i>PTE Magic Online</i>
              </h4>
            </GridItem>
            <GridContainer>
              <GridItem xs={12} md={4} sm={6}>
                <img
                  src="https://www.englishteacheradriana.com/wp-content/uploads/2020/07/Untitled-design-8.jpg"
                  className={classes.imgCard}
                />
              </GridItem>
              <GridItem xs={12} md={8} sm={6} className={classes.cardBody}>
                <p>
                  The Fluency Academy is the number #1 online English school
                  designed to improve <b>all areas of English</b>, Reading,
                  Listening, Vocabulary, Grammar, Writing, Pronunciation and
                  most importantly your confidence speaking English.
                </p>
                <p>
                  Its not just a boring online course with no speaking practice
                  and human interaction!
                </p>
                <b>
                  The Academy is full of daily speaking practice you can do
                  independently or with real online native English teachers!
                </b>

                <p>
                  PLUS in this exclusive online training program you will get
                  live support, step-by step lessons, daily speaking classes, &
                  group chats with real English speakers and guidance from
                  native English teachers to ensure that you see drastic
                  improvements in as little as 7 days!
                </p>
              </GridItem>
            </GridContainer>
          </GridContainer>
          <GridContainer justify="center" className={classes.helpCustomer}>
            <GridItem
              xs={12}
              md={12}
              sm={12}
              className={classes.headerHelpCustomer}
            >
              <h4>The PTE Magic will help you:</h4>
            </GridItem>
            <GridContainer>
              <GridItem
                xs={12}
                md={4}
                sm={6}
                className={classes.contentHelpCustomer}
              >
                <p>
                  ⭐Have a clear plan to quickly advance your English speaking
                  proficiency
                </p>
              </GridItem>
              <GridItem
                xs={12}
                md={4}
                sm={6}
                className={classes.contentHelpCustomer}
              >
                <p>
                  ⭐Quickly improve your level and become more comfortable
                  speaking with others
                </p>
              </GridItem>
              <GridItem
                xs={12}
                md={4}
                sm={6}
                className={classes.contentHelpCustomer}
              >
                <p>
                  ⭐Stop being scared to speak by identifying your mistakes and
                  working on a clear learning plan to your needs
                </p>
              </GridItem>
              <GridItem
                xs={12}
                md={4}
                sm={6}
                className={classes.contentHelpCustomer}
              >
                <p>
                  ⭐Be understood by English Speakers so you can have natural
                  conversations
                </p>
              </GridItem>
              <GridItem
                xs={12}
                md={4}
                sm={6}
                className={classes.contentHelpCustomer}
              >
                <p>
                  ⭐Learn at your own pace and get support when you need help or
                  are stuck
                </p>
              </GridItem>
              <GridItem
                xs={12}
                md={4}
                sm={6}
                className={classes.contentHelpCustomer}
              >
                <p>
                  ⭐connect and communicate with other English speakers, even if
                  you live in a non-English speaking country
                </p>
              </GridItem>
            </GridContainer>
          </GridContainer>
        </div>
        <div className={classes.different}>
          <h3 className={classes.titleDifferent}>
            How is PTE Magic different?
          </h3>
          <div className={classes.container}>
            <GridContainer justify="center" className={classes.formDifferent}>
              <GridItem
                xs={12}
                md={4}
                sm={6}
                className={classes.contentDifferent}
              >
                <div>
                  <VpnKeyIcon className={classes.svgIcon} />
                </div>
                <p>THE TEACHING METHOD</p>
              </GridItem>
              <GridItem
                xs={12}
                md={4}
                sm={6}
                className={classes.contentDifferent}
              >
                <div>
                  <MicNoneIcon className={classes.svgIcon} />
                </div>
                <p>DAILY SPEAKING CLASSES</p>
              </GridItem>
              <GridItem
                xs={12}
                md={4}
                sm={6}
                className={classes.contentDifferent}
              >
                <div>
                  <ReceiptIcon className={classes.svgIcon} />
                </div>
                <p>THE DAILY LEARNING PLAN</p>
              </GridItem>
              <GridItem
                xs={12}
                md={4}
                sm={6}
                className={classes.contentDifferent}
              >
                <div>
                  <SupervisorAccountIcon className={classes.svgIcon} />
                </div>
                <p>REAL NATIVE ENGLISH TEACHERS</p>
              </GridItem>
              <GridItem
                xs={12}
                md={4}
                sm={6}
                className={classes.contentDifferent}
              >
                <div>
                  <MicNoneIcon className={classes.svgIcon} />
                </div>
                <p>FEEDBACK AND CORRECTION</p>
              </GridItem>
              <GridItem
                xs={12}
                md={4}
                sm={6}
                className={classes.contentDifferent}
              >
                <div>
                  <PermContactCalendarIcon className={classes.svgIcon} />
                </div>
                <p>LIVE WEEKLY FLUENCY WORKSHOPS</p>
              </GridItem>
            </GridContainer>
          </div>
        </div>
        <div className={classes.container}>
          <GridContainer ustify="center" className={classes.cardIntroduce}>
            <GridItem xs={12} md={4} sm={6}>
              <img
                src="https://www.englishteacheradriana.com/wp-content/uploads/2019/09/unnamed-4.jpg"
                className={classes.imgCard}
                style={{ marginTop: "100px" }}
              />
            </GridItem>
            <GridItem xs={12} md={8} sm={6} className={classes.cardBody}>
              <h4>I’m Adriana (Your Speaking Coach!)</h4>
              <p>
                I know what it feels like to feel shy, scared, and even
                frustrated that you cannot speak a second language fluently,
                having gone through the learning process myself moving from
                Australia to Croatian and learning Croatian as a second
                language. You don’t have to feel like that, there is an easy way
                to drastically improve your confidence speaking English and I
                want to show you how.
              </p>
              <p>
                I help English learners breakthrough their fear of speaking
                English to be able to drastically improve your confidence
                speaking English in less than 30 minutes a day. My approach is
                different from old boring methods. I give my students a
                step-by-step plan, access to impactful resources, daily LIVE
                support, group chats, and most importantly, and most importantly
                you will never learn alone!
              </p>
              <p>
                I’ve created The Fluency Academy, an easy daily proven
                successful step-by-step daily learning plan for YOU which you
                can do anywhere from the world in less than 30 minutes a day!
              </p>
              <p>
                To finally Speak English Confidently➞ You must be regularly
                improving your level of English and speaking (using) your
                English as much as possible!
              </p>
              <p>That is exactly how you learn in The Fluency Academy</p>
            </GridItem>
          </GridContainer>
        </div>
        <div className={classes.different}>
          <h3 className={classes.titleDifferent}>
            How many steps to improve in PTE Magic?
          </h3>
          <div className={classes.container}>
            <GridContainer justify="center" className={classes.formStep}>
              <GridItem
                xs={12}
                md={12}
                sm={12}
                className={classes.titleDifferent}
              >
                <h4
                  style={{ color: "black" }}
                  className={classes.titleDifferent}
                >
                  4 easy steps to improve in PTE Magic!
                </h4>
              </GridItem>
              <GridItem
                xs={12}
                md={3}
                sm={6}
                className={classes.contentDifferent}
              >
                <div>
                  <VpnKeyIcon className={classes.svgIcon} />
                </div>
                <p>1 ) Easy 30-minute daily learning plan</p>
              </GridItem>
              <GridItem
                xs={12}
                md={3}
                sm={6}
                className={classes.contentDifferent}
              >
                <div>
                  <VpnKeyIcon className={classes.svgIcon} />
                </div>
                <p>2 ) Daily Speaking Classes with a native English speaker</p>
              </GridItem>
              <GridItem
                xs={12}
                md={3}
                sm={6}
                className={classes.contentDifferent}
              >
                <div>
                  <VpnKeyIcon className={classes.svgIcon} />
                </div>
                <p>3) Complete self-study courses</p>
              </GridItem>
              <GridItem
                xs={12}
                md={3}
                sm={6}
                className={classes.contentDifferent}
              >
                <div>
                  <VpnKeyIcon className={classes.svgIcon} />
                </div>
                <p>4) Daily Speaking Practice + Feedback</p>
              </GridItem>
            </GridContainer>
          </div>
        </div>
      </div>
      <Footer
        theme="dark"
        content={
          <div>
            <div className={classes.left}>
              <List className={classes.list}>
                <ListItem className={classes.inlineBlock}>
                  <a
                    href="https://www.creative-tim.com/presentation?ref=njsmkp-e-ecommerce"
                    target="_blank"
                    className={classes.block}
                  >
                    Home
                  </a>
                </ListItem>
                <ListItem className={classes.inlineBlock}>
                  <a
                    href="http://blog.creative-tim.com/?ref=njsmkp-e-ecommerce"
                    target="_blank"
                    className={classes.block}
                  >
                    Blog
                  </a>
                </ListItem>
                <ListItem className={classes.inlineBlock}>
                  <a
                    href="#pablito"
                    onClick={(e) => e.preventDefault()}
                    className={classes.block}
                  >
                    Ebook
                  </a>
                </ListItem>
                <ListItem className={classes.inlineBlock}>
                  <a
                    href="#pablito"
                    onClick={(e) => e.preventDefault()}
                    className={classes.block}
                  >
                    PTE Course
                  </a>
                </ListItem>
                <ListItem className={classes.inlineBlock}>
                  <a
                    href="https://www.creative-tim.com/contact-us?ref=njsmkp-e-ecommerce"
                    target="_blank"
                    className={classes.block}
                  >
                    Contact us
                  </a>
                </ListItem>
              </List>
            </div>
            <div className={classes.right}>
              Copyright &copy; {1900 + new Date().getYear()}{" "}
              <a
                href="https://benit.io/"
                target="_blank"
                className={classes.aClasses}
              >
                BENIT
              </a>{" "}
              All Rights Reserved.
            </div>
          </div>
        }
      >
        <GridContainer>
          <GridItem xs={12} sm={4} md={4}>
            <h5>Getting Started</h5>
            <ul className={classes.linksVertical}>
              <li>
                <a href="#pablo">How To Use Magic Platform</a>
              </li>
              <li>
                <a href="#pablo">About Us</a>
              </li>
              <li>
                <a href="#pablo">FAQs</a>
              </li>
            </ul>
          </GridItem>
          <GridItem xs={12} sm={4} md={4}>
            <h5>PTE Practice Test Resources</h5>
            <ul className={classes.linksVertical}>
              <li>
                <a href="#pablo">PTE Practice Test</a>
              </li>
              <li>
                <a href="#pablo">Exam Tips</a>
              </li>
              <li>
                <a href="#pablo">PTE Speaking</a>
              </li>
              <li>
                <a href="#pablo">PTE Reading</a>
              </li>
              <li>
                <a href="#pablo">PTE Listening</a>
              </li>
            </ul>
          </GridItem>
          <GridItem xs={12} sm={4} md={4}>
            <h5>Follow Us</h5>
            <ul className={classes.socialButtons}>
              <li>
                <Button justIcon simple href="#pablo" color="twitter">
                  <i className="fab fa-twitter" />
                </Button>
              </li>
              <li>
                <Button justIcon simple href="#pablo" color="facebook">
                  <i className="fab fa-facebook-square" />
                </Button>
              </li>
              <li>
                <Button justIcon simple href="#pablo" color="dribbble">
                  <i className="fab fa-dribbble" />
                </Button>
              </li>
              <li>
                <Button justIcon simple href="#pablo" color="google">
                  <i className="fab fa-google-plus-g" />
                </Button>
              </li>
              <li>
                <Button justIcon simple href="#pablo" color="instagram">
                  <i className="fab fa-instagram" />
                </Button>
              </li>
            </ul>
            <h5>Numbers Don{"'"}t Lie</h5>
            <h4>
              100,000+ <small>members</small>
            </h4>
          </GridItem>
        </GridContainer>
      </Footer>
    </div>
  );
}
