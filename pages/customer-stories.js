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
    transition: "all 0.5s",
    "&:hover": {
      transform: "skewY(5deg) scale(1.1)",
      textShadow: "0.5rem 1rem 2rem rgba(0, 0, 0, 0.2)",
    },
  },
  imgCardTop: {},
  cardTitle: {
    fontWeight: "Bold",
    marginTop: "5px",
    textAlign: "justify",
    color: "",
  },
  cardContent: {
    fontWeight: "500",
    textAlign: "justify",
    display: "inline-block",
  },
  skillCard: {
    borderRadius: "10px",
    transition: "all .5s",
    "& > img": {
      borderRadius: "10px",
      height: "180px",
      width: "100%",
      display: "block",
    },
    "&:hover": {
      cursor: "pointer",
      transform: " translateY(-1rem) scale(1.03)",
    },
  },
  btnText: {
    transition: "all 0.2s",
    "&:link": {
      color: "#5a73fc",
      display: "inline-block",
      textDecoration: "none",
      borderBottom: "1px solid gold",
      padding: " .3rem",
      fontSize: "12px",
    },
    "&:visited": {
      color: "#5a73fc",
      display: "inline-block",
      textDecoration: "none",
      borderBottom: "1px solid #5a73fc",
      padding: " .3rem",
      fontSize: "12px",
    },
    "&:hover": {
      backgroundColor: "gold",
      color: "#fff",
      boxShadow: " 0 1rem 2rem rgba(0, 0, 0, 0.15)",
      transition: " translate -0.2rem",
      borderRadius: "10px",
      animation: "moveInBottom .5s ease-out .75s",
      animationFillMode: "backwards",
    },
    "&:active": {
      boxShadow: " 0 0.5rem 1rem rgba(0, 0, 0, 0.15)",
      transform: "translateY(0)",
    },
  },
  buttonLink: {
    margin: "0",
    padding: "0",
  },
  formSignUp: {
    textAlign: "center",
    marginBottom: "15px",
    marginLeft: "30px",
    width: "93%",
    borderRadius: "10px",
    boxShadow: "0 0.5rem 1rem rgba(0, 0, 0, 0.15)",
  },
  textCustomer: {
    margin: "-30px 0 0 10px",
  },
  imgCustomer: {
    "&>img": {
      width: "140px",
      height: "46px",
      backgroundSize: "auto",
    },
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
      />
      <div>
        <div className={classes.container}>
          <div className={classes.secondSection}>
            <ScrollAnimation animateIn="fadeIn" delay={300}>
              <GridContainer justify="center">
                <h2 className={classes.sectionTitle}> Customer Stories</h2>
              </GridContainer>
              <GridContainer justify="center">
                <h4 className={classes.textCustomer}>
                  Stories from some of our fastest-growing customers
                </h4>
              </GridContainer>
            </ScrollAnimation>
            <ScrollAnimation animateIn="fadeIn" delay={400}>
              <GridContainer>
                <GridItem xs={12}>
                  <GridContainer>
                    <GridItem
                      xs={12}
                      md={2}
                      sm={3}
                      className={classes.imgCustomer}
                    >
                      <img src="https://mura.heap.io/sites/default/assets/logos/Heap-RGB_Logo-Horizontal-Lockup-Color-1.svg" />
                    </GridItem>
                    <GridItem
                      xs={12}
                      md={2}
                      sm={3}
                      className={classes.imgCustomer}
                    >
                      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy4A-3GtXNAu3RygGt4Netrd-SW8-qu-duGml7r2feUb7ntWt0I4P7pkAnNOQy_mBSy9s&usqp=CAU" />
                    </GridItem>
                    <GridItem
                      xs={12}
                      md={2}
                      sm={3}
                      className={classes.imgCustomer}
                    >
                      <img src="https://lh3.googleusercontent.com/proxy/8Wubth6SoFJiVXqkHXX7xLDPvrq8j05eh0kHqcjH8D8RKvH_vvMowUQCPX8qrwRrmIXAyo_9Ba824v28LpUkE_qXrIOwLyjCKmOe_r66LpGQ33kvDJtLRBVbqATlfF9d22ewruA" />
                    </GridItem>
                    <GridItem
                      xs={12}
                      md={2}
                      sm={3}
                      className={classes.imgCustomer}
                    >
                      <img src="https://mura.heap.io/sites/default/assets/logos/Heap-RGB_Logo-Horizontal-Lockup-Color-1.svg" />
                    </GridItem>
                    <GridItem
                      xs={12}
                      md={2}
                      sm={3}
                      className={classes.imgCustomer}
                    >
                      <img src="https://liftoff.io/wp-content/uploads/2015/02/Apple_Pay_logo.svg_.png" />
                    </GridItem>
                    <GridItem
                      xs={12}
                      md={2}
                      sm={3}
                      className={classes.imgCustomer}
                    >
                      <img src="https://logovectorseek.com/wp-content/uploads/2020/05/hbo-europe-logo-vector.png" />
                    </GridItem>
                  </GridContainer>
                  <NavPills
                    className={classes.NavPillsCustomer}
                    color="warning"
                    tabs={[
                      {
                        tabButton: "Profile",
                        tabContent: (
                          <GridContainer>
                            <GridItem xs={12} md={4} sm={4}>
                              <Card
                                style={{ width: "20rem" }}
                                className={classes.skillCard}
                              >
                                <img
                                  className={classes.imgCardTop}
                                  src="https://images.ctfassets.net/lzny33ho1g45/4XbgvwFsL9Vt9lcfAtvojP/e5b0e0a1e87c4ad78b49e7018a618f34/miracle-messages-automasting-volunteer-management-00-hero.png?w=1520&fm=jpg&q=30&fit=thumb&h=760"
                                  alt="Card-img-cap"
                                />
                                <CardBody>
                                  <a href="#pablo">
                                    <h4 className={classes.cardTitle}>
                                      How a small team connects hundreds of
                                      people with long-lost loved ones
                                    </h4>
                                  </a>
                                  <p className={classes.cardContent}>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam, quis nostrud
                                    exercitation ullamco laboris nisi ut aliquip
                                    ex ea commodo consequat. Duis aute irure
                                    dolor in reprehenderit in voluptate velit
                                    esse cillum dolore eu fugiat nulla pariatur
                                  </p>
                                  <Button
                                    className={classes.buttonLink}
                                    color="primary"
                                    simple
                                  >
                                    <a
                                      href="#pablo"
                                      className={classes.btnText}
                                    >
                                      Learn more &rarr;
                                    </a>
                                  </Button>
                                </CardBody>
                                <CardFooter>
                                  <p>2 days ago</p>
                                </CardFooter>
                              </Card>
                            </GridItem>
                            <GridItem xs={12} md={4} sm={4}>
                              <Card
                                style={{ width: "20rem" }}
                                className={classes.skillCard}
                              >
                                <img
                                  className={classes.imgCardTop}
                                  src="https://images.ctfassets.net/lzny33ho1g45/4XbgvwFsL9Vt9lcfAtvojP/e5b0e0a1e87c4ad78b49e7018a618f34/miracle-messages-automasting-volunteer-management-00-hero.png?w=1520&fm=jpg&q=30&fit=thumb&h=760"
                                  alt="Card-img-cap"
                                />
                                <CardBody>
                                  <a href="#pablo">
                                    <h4 className={classes.cardTitle}>
                                      How a small team connects hundreds of
                                      people with long-lost loved ones
                                    </h4>
                                  </a>
                                  <p className={classes.cardContent}>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam, quis nostrud
                                    exercitation ullamco laboris nisi ut aliquip
                                    ex ea commodo consequat. Duis aute irure
                                    dolor in reprehenderit in voluptate velit
                                    esse cillum dolore eu fugiat nulla pariatur
                                  </p>
                                  <Button
                                    className={classes.buttonLink}
                                    color="primary"
                                    simple
                                  >
                                    <a
                                      href="#pablo"
                                      className={classes.btnText}
                                    >
                                      Learn more &rarr;
                                    </a>
                                  </Button>
                                </CardBody>
                                <CardFooter>
                                  <p>2 days ago</p>
                                </CardFooter>
                              </Card>
                            </GridItem>
                            <GridItem xs={12} md={4} sm={4}>
                              <Card
                                style={{ width: "20rem" }}
                                className={classes.skillCard}
                              >
                                <img
                                  className={classes.imgCardTop}
                                  src="https://images.ctfassets.net/lzny33ho1g45/4XbgvwFsL9Vt9lcfAtvojP/e5b0e0a1e87c4ad78b49e7018a618f34/miracle-messages-automasting-volunteer-management-00-hero.png?w=1520&fm=jpg&q=30&fit=thumb&h=760"
                                  alt="Card-img-cap"
                                />
                                <CardBody>
                                  <a href="#pablo">
                                    <h4 className={classes.cardTitle}>
                                      How a small team connects hundreds of
                                      people with long-lost loved ones
                                    </h4>
                                  </a>
                                  <p className={classes.cardContent}>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam, quis nostrud
                                    exercitation ullamco laboris nisi ut aliquip
                                    ex ea commodo consequat. Duis aute irure
                                    dolor in reprehenderit in voluptate velit
                                    esse cillum dolore eu fugiat nulla pariatur
                                  </p>
                                  <Button
                                    className={classes.buttonLink}
                                    color="primary"
                                    simple
                                  >
                                    <a
                                      href="#pablo"
                                      className={classes.btnText}
                                    >
                                      Learn more &rarr;
                                    </a>
                                  </Button>
                                </CardBody>
                                <CardFooter>
                                  <p>2 days ago</p>
                                </CardFooter>
                              </Card>
                            </GridItem>
                            <GridItem xs={12} md={4} sm={4}>
                              <Card
                                style={{ width: "20rem" }}
                                className={classes.skillCard}
                              >
                                <img
                                  className={classes.imgCardTop}
                                  src="https://images.ctfassets.net/lzny33ho1g45/4XbgvwFsL9Vt9lcfAtvojP/e5b0e0a1e87c4ad78b49e7018a618f34/miracle-messages-automasting-volunteer-management-00-hero.png?w=1520&fm=jpg&q=30&fit=thumb&h=760"
                                  alt="Card-img-cap"
                                />
                                <CardBody>
                                  <a href="#pablo">
                                    <h4 className={classes.cardTitle}>
                                      How a small team connects hundreds of
                                      people with long-lost loved ones
                                    </h4>
                                  </a>
                                  <p className={classes.cardContent}>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam, quis nostrud
                                    exercitation ullamco laboris nisi ut aliquip
                                    ex ea commodo consequat. Duis aute irure
                                    dolor in reprehenderit in voluptate velit
                                    esse cillum dolore eu fugiat nulla pariatur
                                  </p>
                                  <Button
                                    className={classes.buttonLink}
                                    color="primary"
                                    simple
                                  >
                                    <a
                                      href="#pablo"
                                      className={classes.btnText}
                                    >
                                      Learn more &rarr;
                                    </a>
                                  </Button>
                                </CardBody>
                                <CardFooter>
                                  <p>2 days ago</p>
                                </CardFooter>
                              </Card>
                            </GridItem>
                            <GridItem xs={12} md={4} sm={4}>
                              <Card
                                style={{ width: "20rem" }}
                                className={classes.skillCard}
                              >
                                <img
                                  className={classes.imgCardTop}
                                  src="https://images.ctfassets.net/lzny33ho1g45/4XbgvwFsL9Vt9lcfAtvojP/e5b0e0a1e87c4ad78b49e7018a618f34/miracle-messages-automasting-volunteer-management-00-hero.png?w=1520&fm=jpg&q=30&fit=thumb&h=760"
                                  alt="Card-img-cap"
                                />
                                <CardBody>
                                  <a href="#pablo">
                                    <h4 className={classes.cardTitle}>
                                      How a small team connects hundreds of
                                      people with long-lost loved ones
                                    </h4>
                                  </a>
                                  <p className={classes.cardContent}>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam, quis nostrud
                                    exercitation ullamco laboris nisi ut aliquip
                                    ex ea commodo consequat. Duis aute irure
                                    dolor in reprehenderit in voluptate velit
                                    esse cillum dolore eu fugiat nulla pariatur
                                  </p>
                                  <Button
                                    className={classes.buttonLink}
                                    color="primary"
                                    simple
                                  >
                                    <a
                                      href="#pablo"
                                      className={classes.btnText}
                                    >
                                      Learn more &rarr;
                                    </a>
                                  </Button>
                                </CardBody>
                                <CardFooter>
                                  <p>2 days ago</p>
                                </CardFooter>
                              </Card>
                            </GridItem>
                            <GridItem xs={12} md={4} sm={4}>
                              <Card
                                style={{ width: "20rem" }}
                                className={classes.skillCard}
                              >
                                <img
                                  className={classes.imgCardTop}
                                  src="https://images.ctfassets.net/lzny33ho1g45/4XbgvwFsL9Vt9lcfAtvojP/e5b0e0a1e87c4ad78b49e7018a618f34/miracle-messages-automasting-volunteer-management-00-hero.png?w=1520&fm=jpg&q=30&fit=thumb&h=760"
                                  alt="Card-img-cap"
                                />
                                <CardBody>
                                  <a href="#pablo">
                                    <h4 className={classes.cardTitle}>
                                      How a small team connects hundreds of
                                      people with long-lost loved ones
                                    </h4>
                                  </a>
                                  <p className={classes.cardContent}>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam, quis nostrud
                                    exercitation ullamco laboris nisi ut aliquip
                                    ex ea commodo consequat. Duis aute irure
                                    dolor in reprehenderit in voluptate velit
                                    esse cillum dolore eu fugiat nulla pariatur
                                  </p>
                                  <Button
                                    className={classes.buttonLink}
                                    color="primary"
                                    simple
                                  >
                                    <a
                                      href="#pablo"
                                      className={classes.btnText}
                                    >
                                      Learn more &rarr;
                                    </a>
                                  </Button>
                                </CardBody>
                                <CardFooter>
                                  <p>2 days ago</p>
                                </CardFooter>
                              </Card>
                            </GridItem>
                          </GridContainer>
                        ),
                      },
                      {
                        tabButton: "Settings",
                        tabContent: (
                          <GridContainer>
                            <GridItem xs={12} md={4} sm={4}>
                              <Card
                                style={{ width: "20rem" }}
                                className={classes.skillCard}
                              >
                                <img
                                  className={classes.imgCardTop}
                                  src="https://images.ctfassets.net/lzny33ho1g45/4XbgvwFsL9Vt9lcfAtvojP/e5b0e0a1e87c4ad78b49e7018a618f34/miracle-messages-automasting-volunteer-management-00-hero.png?w=1520&fm=jpg&q=30&fit=thumb&h=760"
                                  alt="Card-img-cap"
                                />
                                <CardBody>
                                  <a href="#pablo">
                                    <h4 className={classes.cardTitle}>
                                      How a small team connects hundreds of
                                      people with long-lost loved ones
                                    </h4>
                                  </a>
                                  <p className={classes.cardContent}>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam, quis nostrud
                                    exercitation ullamco laboris nisi ut aliquip
                                    ex ea commodo consequat. Duis aute irure
                                    dolor in reprehenderit in voluptate velit
                                    esse cillum dolore eu fugiat nulla pariatur
                                  </p>
                                  <Button
                                    className={classes.buttonLink}
                                    color="primary"
                                    simple
                                  >
                                    <a
                                      href="#pablo"
                                      className={classes.btnText}
                                    >
                                      Learn more &rarr;
                                    </a>
                                  </Button>
                                </CardBody>
                                <CardFooter>
                                  <p>2 days ago</p>
                                </CardFooter>
                              </Card>
                            </GridItem>
                            <GridItem xs={12} md={4} sm={4}>
                              <Card
                                style={{ width: "20rem" }}
                                className={classes.skillCard}
                              >
                                <img
                                  className={classes.imgCardTop}
                                  src="https://images.ctfassets.net/lzny33ho1g45/4XbgvwFsL9Vt9lcfAtvojP/e5b0e0a1e87c4ad78b49e7018a618f34/miracle-messages-automasting-volunteer-management-00-hero.png?w=1520&fm=jpg&q=30&fit=thumb&h=760"
                                  alt="Card-img-cap"
                                />
                                <CardBody>
                                  <a href="#pablo">
                                    <h4 className={classes.cardTitle}>
                                      How a small team connects hundreds of
                                      people with long-lost loved ones
                                    </h4>
                                  </a>
                                  <p className={classes.cardContent}>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam, quis nostrud
                                    exercitation ullamco laboris nisi ut aliquip
                                    ex ea commodo consequat. Duis aute irure
                                    dolor in reprehenderit in voluptate velit
                                    esse cillum dolore eu fugiat nulla pariatur
                                  </p>
                                  <Button
                                    className={classes.buttonLink}
                                    color="primary"
                                    simple
                                  >
                                    <a
                                      href="#pablo"
                                      className={classes.btnText}
                                    >
                                      Learn more &rarr;
                                    </a>
                                  </Button>
                                </CardBody>
                                <CardFooter>
                                  <p>2 days ago</p>
                                </CardFooter>
                              </Card>
                            </GridItem>
                            <GridItem xs={12} md={4} sm={4}>
                              <Card
                                style={{ width: "20rem" }}
                                className={classes.skillCard}
                              >
                                <img
                                  className={classes.imgCardTop}
                                  src="https://images.ctfassets.net/lzny33ho1g45/4XbgvwFsL9Vt9lcfAtvojP/e5b0e0a1e87c4ad78b49e7018a618f34/miracle-messages-automasting-volunteer-management-00-hero.png?w=1520&fm=jpg&q=30&fit=thumb&h=760"
                                  alt="Card-img-cap"
                                />
                                <CardBody>
                                  <a href="#pablo">
                                    <h4 className={classes.cardTitle}>
                                      How a small team connects hundreds of
                                      people with long-lost loved ones
                                    </h4>
                                  </a>
                                  <p className={classes.cardContent}>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam, quis nostrud
                                    exercitation ullamco laboris nisi ut aliquip
                                    ex ea commodo consequat. Duis aute irure
                                    dolor in reprehenderit in voluptate velit
                                    esse cillum dolore eu fugiat nulla pariatur
                                  </p>
                                  <Button
                                    className={classes.buttonLink}
                                    color="primary"
                                    simple
                                  >
                                    <a
                                      href="#pablo"
                                      className={classes.btnText}
                                    >
                                      Learn more &rarr;
                                    </a>
                                  </Button>
                                </CardBody>
                                <CardFooter>
                                  <p>2 days ago</p>
                                </CardFooter>
                              </Card>
                            </GridItem>
                            <GridItem xs={12} md={4} sm={4}>
                              <Card
                                style={{ width: "20rem" }}
                                className={classes.skillCard}
                              >
                                <img
                                  className={classes.imgCardTop}
                                  src="https://images.ctfassets.net/lzny33ho1g45/4XbgvwFsL9Vt9lcfAtvojP/e5b0e0a1e87c4ad78b49e7018a618f34/miracle-messages-automasting-volunteer-management-00-hero.png?w=1520&fm=jpg&q=30&fit=thumb&h=760"
                                  alt="Card-img-cap"
                                />
                                <CardBody>
                                  <a href="#pablo">
                                    <h4 className={classes.cardTitle}>
                                      How a small team connects hundreds of
                                      people with long-lost loved ones
                                    </h4>
                                  </a>
                                  <p className={classes.cardContent}>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam, quis nostrud
                                    exercitation ullamco laboris nisi ut aliquip
                                    ex ea commodo consequat. Duis aute irure
                                    dolor in reprehenderit in voluptate velit
                                    esse cillum dolore eu fugiat nulla pariatur
                                  </p>
                                  <Button
                                    className={classes.buttonLink}
                                    color="primary"
                                    simple
                                  >
                                    <a
                                      href="#pablo"
                                      className={classes.btnText}
                                    >
                                      Learn more &rarr;
                                    </a>
                                  </Button>
                                </CardBody>
                                <CardFooter>
                                  <p>2 days ago</p>
                                </CardFooter>
                              </Card>
                            </GridItem>
                            <GridItem xs={12} md={4} sm={4}>
                              <Card
                                style={{ width: "20rem" }}
                                className={classes.skillCard}
                              >
                                <img
                                  className={classes.imgCardTop}
                                  src="https://images.ctfassets.net/lzny33ho1g45/4XbgvwFsL9Vt9lcfAtvojP/e5b0e0a1e87c4ad78b49e7018a618f34/miracle-messages-automasting-volunteer-management-00-hero.png?w=1520&fm=jpg&q=30&fit=thumb&h=760"
                                  alt="Card-img-cap"
                                />
                                <CardBody>
                                  <a href="#pablo">
                                    <h4 className={classes.cardTitle}>
                                      How a small team connects hundreds of
                                      people with long-lost loved ones
                                    </h4>
                                  </a>
                                  <p className={classes.cardContent}>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam, quis nostrud
                                    exercitation ullamco laboris nisi ut aliquip
                                    ex ea commodo consequat. Duis aute irure
                                    dolor in reprehenderit in voluptate velit
                                    esse cillum dolore eu fugiat nulla pariatur
                                  </p>
                                  <Button
                                    className={classes.buttonLink}
                                    color="primary"
                                    simple
                                  >
                                    <a
                                      href="#pablo"
                                      className={classes.btnText}
                                    >
                                      Learn more &rarr;
                                    </a>
                                  </Button>
                                </CardBody>
                                <CardFooter>
                                  <p>2 days ago</p>
                                </CardFooter>
                              </Card>
                            </GridItem>
                            <GridItem xs={12} md={4} sm={4}>
                              <Card
                                style={{ width: "20rem" }}
                                className={classes.skillCard}
                              >
                                <img
                                  className={classes.imgCardTop}
                                  src="https://images.ctfassets.net/lzny33ho1g45/4XbgvwFsL9Vt9lcfAtvojP/e5b0e0a1e87c4ad78b49e7018a618f34/miracle-messages-automasting-volunteer-management-00-hero.png?w=1520&fm=jpg&q=30&fit=thumb&h=760"
                                  alt="Card-img-cap"
                                />
                                <CardBody>
                                  <a href="#pablo">
                                    <h4 className={classes.cardTitle}>
                                      How a small team connects hundreds of
                                      people with long-lost loved ones
                                    </h4>
                                  </a>
                                  <p className={classes.cardContent}>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam, quis nostrud
                                    exercitation ullamco laboris nisi ut aliquip
                                    ex ea commodo consequat. Duis aute irure
                                    dolor in reprehenderit in voluptate velit
                                    esse cillum dolore eu fugiat nulla pariatur
                                  </p>
                                  <Button
                                    className={classes.buttonLink}
                                    color="primary"
                                    simple
                                  >
                                    <a
                                      href="#pablo"
                                      className={classes.btnText}
                                    >
                                      Learn more &rarr;
                                    </a>
                                  </Button>
                                </CardBody>
                                <CardFooter>
                                  <p>2 days ago</p>
                                </CardFooter>
                              </Card>
                            </GridItem>
                          </GridContainer>
                        ),
                      },
                      {
                        tabButton: "Options",
                        tabContent: (
                          <GridContainer>
                            <GridItem xs={12} md={4} sm={4}>
                              <Card
                                style={{ width: "20rem" }}
                                className={classes.skillCard}
                              >
                                <img
                                  className={classes.imgCardTop}
                                  src="https://images.ctfassets.net/lzny33ho1g45/4XbgvwFsL9Vt9lcfAtvojP/e5b0e0a1e87c4ad78b49e7018a618f34/miracle-messages-automasting-volunteer-management-00-hero.png?w=1520&fm=jpg&q=30&fit=thumb&h=760"
                                  alt="Card-img-cap"
                                />
                                <CardBody>
                                  <a href="#pablo">
                                    <h4 className={classes.cardTitle}>
                                      How a small team connects hundreds of
                                      people with long-lost loved ones
                                    </h4>
                                  </a>
                                  <p className={classes.cardContent}>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam, quis nostrud
                                    exercitation ullamco laboris nisi ut aliquip
                                    ex ea commodo consequat. Duis aute irure
                                    dolor in reprehenderit in voluptate velit
                                    esse cillum dolore eu fugiat nulla pariatur
                                  </p>
                                  <Button
                                    className={classes.buttonLink}
                                    color="primary"
                                    simple
                                  >
                                    <a
                                      href="#pablo"
                                      className={classes.btnText}
                                    >
                                      Learn more &rarr;
                                    </a>
                                  </Button>
                                </CardBody>
                                <CardFooter>
                                  <p>2 days ago</p>
                                </CardFooter>
                              </Card>
                            </GridItem>
                            <GridItem xs={12} md={4} sm={4}>
                              <Card
                                style={{ width: "20rem" }}
                                className={classes.skillCard}
                              >
                                <img
                                  className={classes.imgCardTop}
                                  src="https://images.ctfassets.net/lzny33ho1g45/4XbgvwFsL9Vt9lcfAtvojP/e5b0e0a1e87c4ad78b49e7018a618f34/miracle-messages-automasting-volunteer-management-00-hero.png?w=1520&fm=jpg&q=30&fit=thumb&h=760"
                                  alt="Card-img-cap"
                                />
                                <CardBody>
                                  <a href="#pablo">
                                    <h4 className={classes.cardTitle}>
                                      How a small team connects hundreds of
                                      people with long-lost loved ones
                                    </h4>
                                  </a>
                                  <p className={classes.cardContent}>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam, quis nostrud
                                    exercitation ullamco laboris nisi ut aliquip
                                    ex ea commodo consequat. Duis aute irure
                                    dolor in reprehenderit in voluptate velit
                                    esse cillum dolore eu fugiat nulla pariatur
                                  </p>
                                  <Button
                                    className={classes.buttonLink}
                                    color="primary"
                                    simple
                                  >
                                    <a
                                      href="#pablo"
                                      className={classes.btnText}
                                    >
                                      Learn more &rarr;
                                    </a>
                                  </Button>
                                </CardBody>
                                <CardFooter>
                                  <p>2 days ago</p>
                                </CardFooter>
                              </Card>
                            </GridItem>
                            <GridItem xs={12} md={4} sm={4}>
                              <Card
                                style={{ width: "20rem" }}
                                className={classes.skillCard}
                              >
                                <img
                                  className={classes.imgCardTop}
                                  src="https://images.ctfassets.net/lzny33ho1g45/4XbgvwFsL9Vt9lcfAtvojP/e5b0e0a1e87c4ad78b49e7018a618f34/miracle-messages-automasting-volunteer-management-00-hero.png?w=1520&fm=jpg&q=30&fit=thumb&h=760"
                                  alt="Card-img-cap"
                                />
                                <CardBody>
                                  <a href="#pablo">
                                    <h4 className={classes.cardTitle}>
                                      How a small team connects hundreds of
                                      people with long-lost loved ones
                                    </h4>
                                  </a>
                                  <p className={classes.cardContent}>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam, quis nostrud
                                    exercitation ullamco laboris nisi ut aliquip
                                    ex ea commodo consequat. Duis aute irure
                                    dolor in reprehenderit in voluptate velit
                                    esse cillum dolore eu fugiat nulla pariatur
                                  </p>
                                  <Button
                                    className={classes.buttonLink}
                                    color="primary"
                                    simple
                                  >
                                    <a
                                      href="#pablo"
                                      className={classes.btnText}
                                    >
                                      Learn more &rarr;
                                    </a>
                                  </Button>
                                </CardBody>
                                <CardFooter>
                                  <p>2 days ago</p>
                                </CardFooter>
                              </Card>
                            </GridItem>
                            <GridItem xs={12} md={4} sm={4}>
                              <Card
                                style={{ width: "20rem" }}
                                className={classes.skillCard}
                              >
                                <img
                                  className={classes.imgCardTop}
                                  src="https://images.ctfassets.net/lzny33ho1g45/4XbgvwFsL9Vt9lcfAtvojP/e5b0e0a1e87c4ad78b49e7018a618f34/miracle-messages-automasting-volunteer-management-00-hero.png?w=1520&fm=jpg&q=30&fit=thumb&h=760"
                                  alt="Card-img-cap"
                                />
                                <CardBody>
                                  <a href="#pablo">
                                    <h4 className={classes.cardTitle}>
                                      How a small team connects hundreds of
                                      people with long-lost loved ones
                                    </h4>
                                  </a>
                                  <p className={classes.cardContent}>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam, quis nostrud
                                    exercitation ullamco laboris nisi ut aliquip
                                    ex ea commodo consequat. Duis aute irure
                                    dolor in reprehenderit in voluptate velit
                                    esse cillum dolore eu fugiat nulla pariatur
                                  </p>
                                  <Button
                                    className={classes.buttonLink}
                                    color="primary"
                                    simple
                                  >
                                    <a
                                      href="#pablo"
                                      className={classes.btnText}
                                    >
                                      Learn more &rarr;
                                    </a>
                                  </Button>
                                </CardBody>
                                <CardFooter>
                                  <p>2 days ago</p>
                                </CardFooter>
                              </Card>
                            </GridItem>
                            <GridItem xs={12} md={4} sm={4}>
                              <Card
                                style={{ width: "20rem" }}
                                className={classes.skillCard}
                              >
                                <img
                                  className={classes.imgCardTop}
                                  src="https://images.ctfassets.net/lzny33ho1g45/4XbgvwFsL9Vt9lcfAtvojP/e5b0e0a1e87c4ad78b49e7018a618f34/miracle-messages-automasting-volunteer-management-00-hero.png?w=1520&fm=jpg&q=30&fit=thumb&h=760"
                                  alt="Card-img-cap"
                                />
                                <CardBody>
                                  <a href="#pablo">
                                    <h4 className={classes.cardTitle}>
                                      How a small team connects hundreds of
                                      people with long-lost loved ones
                                    </h4>
                                  </a>
                                  <p className={classes.cardContent}>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam, quis nostrud
                                    exercitation ullamco laboris nisi ut aliquip
                                    ex ea commodo consequat. Duis aute irure
                                    dolor in reprehenderit in voluptate velit
                                    esse cillum dolore eu fugiat nulla pariatur
                                  </p>
                                  <Button
                                    className={classes.buttonLink}
                                    color="primary"
                                    simple
                                  >
                                    <a
                                      href="#pablo"
                                      className={classes.btnText}
                                    >
                                      Learn more &rarr;
                                    </a>
                                  </Button>
                                </CardBody>
                                <CardFooter>
                                  <p>2 days ago</p>
                                </CardFooter>
                              </Card>
                            </GridItem>
                            <GridItem xs={12} md={4} sm={4}>
                              <Card
                                style={{ width: "20rem" }}
                                className={classes.skillCard}
                              >
                                <img
                                  className={classes.imgCardTop}
                                  src="https://images.ctfassets.net/lzny33ho1g45/4XbgvwFsL9Vt9lcfAtvojP/e5b0e0a1e87c4ad78b49e7018a618f34/miracle-messages-automasting-volunteer-management-00-hero.png?w=1520&fm=jpg&q=30&fit=thumb&h=760"
                                  alt="Card-img-cap"
                                />
                                <CardBody>
                                  <a href="#pablo">
                                    <h4 className={classes.cardTitle}>
                                      How a small team connects hundreds of
                                      people with long-lost loved ones
                                    </h4>
                                  </a>
                                  <p className={classes.cardContent}>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam, quis nostrud
                                    exercitation ullamco laboris nisi ut aliquip
                                    ex ea commodo consequat. Duis aute irure
                                    dolor in reprehenderit in voluptate velit
                                    esse cillum dolore eu fugiat nulla pariatur
                                  </p>
                                  <Button
                                    className={classes.buttonLink}
                                    color="primary"
                                    simple
                                  >
                                    <a
                                      href="#pablo"
                                      className={classes.btnText}
                                    >
                                      Learn more &rarr;
                                    </a>
                                  </Button>
                                </CardBody>
                                <CardFooter>
                                  <p>2 days ago</p>
                                </CardFooter>
                              </Card>
                            </GridItem>
                          </GridContainer>
                        ),
                      },
                    ]}
                  />
                </GridItem>
              </GridContainer>
            </ScrollAnimation>
          </div>
        </div>
        <div className={classes.container}>
          <GridContainer>
            <GridItem className={classes.formSignUp}>
              <h2>Are you ready to join these customers?</h2>
              <h4>
                We would love to chat with you. Go ahead and request your demo
                of Heap’s Analytics platform today!
              </h4>
              <div className={classes.startForFree}>
                <Button color="primary" style={{ marginBottom: "10px" }}>
                  Get Started for free
                </Button>
              </div>
            </GridItem>
          </GridContainer>
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
