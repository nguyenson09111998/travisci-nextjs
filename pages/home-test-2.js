/*eslint-disable*/
import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import InputAdornment from "@material-ui/core/InputAdornment";

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
import takeQuiz from "assets/img/take-quiz.png";
import enrollNow from "assets/img/enroll-now.png";
import ecommerceHeader from "assets/img/examples/ecommerce-header.jpg";
import banner from "assets/img/benit/banner.svg";

import LanguageIcon from "@material-ui/icons/Language";
import GroupAddIcon from "@material-ui/icons/GroupAdd";
import EventNoteIcon from "@material-ui/icons/EventNote";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import FingerprintIcon from "@material-ui/icons/Fingerprint";
import CollectionsBookmarkIcon from "@material-ui/icons/CollectionsBookmark";
import StepperSection from "../pages-sections/home/StepperSection";
import Program from "../pages-sections/home/program";
import RegisterSection from "../pages-sections/home/RegisterSection";

import useMediaQuery from "@material-ui/core/useMediaQuery";

const styles = (theme) => ({
  ...presentationStyle,
  mrAuto,
  mlAuto,
  banner: {
    color: "#3c4858",
    textAlign: "center",
    "& h1": {
      fontSize: 60,
      fontWeight: 800,
      lineHeight: "65px",
    },
    "& p": {
      fontSize: 24,
      fontWeight: 400,
      lineHeight: "30px",
    },
  },
  sectionTitle: {
    fontWeight: 700,
    margin: "32px 0",
    textAlign: "center",
    fontSize: 32,
  },
  infoArea: {
    padding: 0,
  },
  features: {
    margin: "0 0 64px",
    textAlign: "center",
  },
  pageHeader: {
    overflow: "hidden",
    backgroundPosition: "center top",
    minHeight: "550px",
    alignItems: "center",
    backgroundSize: "cover",
    position: "relative",
    display: "flex",
  },
  containerTop: {
    display: "flex",
    maxWidth: "1200px",
    margin: "auto",
    "@media (max-width: 960px)": {
      flexDirection: "column",
    },
  },
  thirdGridItem: {
    margin: "8px 0",
    "& > div": {
      border: "1px solid rgba(5,0,56,.1)",
      borderRadius: 16,
      textAlign: "center",
      boxShadow: "0 4px 12px rgb(5 0 56 / 8%)",
      padding: 16,
      "& > img": {
        width: 130,
      },
      "&> p": {
        textAlign: "left",
      },
    },
  },
  fourthGridItem: {
    margin: "0 0 24px",
    "& > div": {
      transitionTimingFunction: "ease-in-out",
      backgroundColor: "rgb(250, 250, 250)",
      border: "1px solid rgb(250, 250, 250)",
      borderLeft: "8px solid #d3b574",
      transitionDuration: "300ms",
      cursor: "pointer",
      borderRadius: 16,
      padding: 16,
      "&:hover": {
        backgroundColor: "rgb(255, 255, 255)",
        border: "1px solid rgb(230, 230, 230)",
        boxShadow: "rgb(0 0 0 / 10%) 0px 5px 10px 0px",
      },
      "&> h3": {
        fontSize: 24,
        fontWeight: 700,
        lineHeight: "30px",
      },
      "&> p": {
        fontWeight: 400,
        lineHeight: "25px",
        color: "#666666",
      },
    },
  },
  thirdSection: {
    marginTop: 80,
    marginBottom: 40,
  },
  fourthSection: {
    // background: "rgb(250, 248, 215)"
  },
  subscribeLine: {
    padding: "1.875rem 0px",
    "& $card": {
      marginTop: "30px",
    },
    "& form": { margin: "0px" },
    "&$subscribeLineImage:after": {
      position: "absolute",
      zIndex: 1,
      width: "100%",
      height: "100%",
      display: "block",
      left: 0,
      top: 0,
      content: "''",
      backgroundColor: "rgba(" + hexToRgb(blackColor) + ",0.66)",
    },
  },
  subscribeLineImage: {
    position: "relative",
    backgroundPosition: "top center",
    backgroundSize: "cover",
    "& $container": {
      zIndex: 2,
      position: "relative",
    },
    "& $title": {
      color: whiteColor,
    },
    "& $description": {
      color: grayColor[0],
    },
  },
  textCenter: {
    textAlign: "center !important",
  },
  subscribeButton: {},
  cardBody: {
    padding: "15px",
    "& form": {
      marginBottom: "0",
    },
  },
  cardForm: {
    margin: "0 0 0 14px",
    padding: 0,
    top: 10,
  },
  features5: {
    padding: "80px 0",
    backgroundSize: "cover",
    backgroundPosition: "50%",
    backgroundRepeat: "no-repeat",
    position: "relative",
    "& $title": {
      marginBottom: "30px",
    },
    "& $title,& $container": {
      position: "relative",
      zIndex: "2",
      color: whiteColor,
    },
    "&:after": {
      background: "rgba(" + hexToRgb(blackColor) + ",0.55)",
      position: "absolute",
      width: "100%",
      height: "100%",
      content: "''",
      zIndex: "0",
      left: "0px",
      top: "0px",
    },
    "& $container": {
      "& $gridContainer:last-child": {
        "& $gridItem": {
          borderBottom: "0",
        },
      },
      "& $gridItem": {
        border: "1px solid rgba(" + hexToRgb(whiteColor) + ", 0.35)",
        borderTop: "0",
        borderLeft: "0",
        "&:last-child": {
          borderRight: "0",
        },
      },
    },
    "& $infoArea5": {
      textAlign: "center",
      maxWidth: "310px",
      minHeight: "320px",
      "& h4,& p,& svg,& .fab,& .fas,& .far,& .fal,& .material-icons": {
        color: whiteColor,
      },
    },
  },
  gridContainer: {},
  gridItem: {},
  infoArea5: {},
  checkmarks: {
    margin: "8px 0",
    "&> span": {
      margin: "0 8px",
    },
    "& em": {
      padding: "0 4px",
    },
  },
  firstDescription: {
    padding: "24px 0",
  },
  takeQuiz: {
    backgroundColor: "#ffc93c",
    // height: "50vh",
    marginBottom: "10vh",
    marginTop: "5vh",
    display: "flex",
    justifyContent: "space-between",
    padding: "20px 40px",
    "& h1": {
      color: "#542e71",
    },
    "& p": {
      color: "#542e71",
      fontWeight: "400",
      fontSize: "20px",
      marginBottom: "7%",
    },
    borderRadius: "30px 0 0 0",
  },
  takeQuizImg: {
    width: "50%",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
    [theme.breakpoints.up("md")]: {
      display: "block",
    },
    [theme.breakpoints.up("xl")]: {
      display: "block",
      height: "70%",
    },
  },
  quizBtn: {
    backgroundColor: "#845ec2",
    borderRadius: "5px",
    "&:hover": {
      backgroundColor: "#ff7b54",
    },
    fontSize: "20px",
  },
  stat: {
    [theme.breakpoints.up("sm")]: {
      marginLeft: 0,
    },
    [theme.breakpoints.up("md")]: {
      marginLeft: "5%",
    },
  },
  enrollNow: {
    backgroundColor: "#6930c3",
    display: "flex",
    justifyContent: "space-between",
    width: "100vw",
    margin: "0px 0px !important",
  },
  enrollment: {
    marginTop: "auto",
    marginBottom: "auto",
    "& h1": {
      textAlign: "center",
      color: "#edc776",
    },
    "& h3": {
      color: "#edc776",
      textAlign: "center",
    },
  },
  enrollBtn: {
    fontSize: "20px",
    backgroundColor: "#6930c3",
    border: "#ffe227 5px solid",
  },
});

const useStyles = makeStyles(styles);

export default function PresentationPage() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  });
  const classes = useStyles();

  const matches = useMediaQuery("(min-width:750px)");

  return (
    <div>
      <Header
        brand={<img src={logo} alt={"logo"} />}
        color="gold"
        links={<HeaderLinksPTE />}
      />
      <div className={classes.pageHeader} style={{ background: "gold" }}>
        <div className={classes.containerTop}>
          <GridItem md={8} xs={12} sm={12}>
            <div className={classes.banner}>
              <ScrollAnimation animateIn="zoomIn">
                <h1>
                  {" "}
                  PTE Practice Test <br /> Online Platform{" "}
                </h1>
              </ScrollAnimation>
              <ScrollAnimation animateIn="fadeIn" delay={300}>
                <p className={classes.firstDescription}>
                  The most accurate PTE practice test simulation platform to
                  prepare for your PTE Academic exam with comprehensive question
                  bank and automated scoring system.
                </p>
              </ScrollAnimation>
              <ScrollAnimation animateIn="fadeInUp">
                <div className={classes.checkmarks}>
                  <span>
                    <em>✓ </em>
                    <strong>Free trial</strong>
                  </span>
                  <span>
                    <em>✓ </em>
                    <strong>No credit card required</strong>
                  </span>
                  <span>
                    <em>✓ </em>
                    <strong>Cancel anytime</strong>
                  </span>
                </div>
              </ScrollAnimation>
            </div>
          </GridItem>
          <GridItem md={4} xs={12} sm={12}>
            <RegisterSection />
          </GridItem>
        </div>
      </div>
      <div>
        <img src={banner} />
      </div>
      <div>
        <div className={classes.container}>
          <div className={classes.secondSection}>
            <ScrollAnimation animateIn="fadeIn" delay={300}>
              <GridContainer justify="center">
                <h2 className={classes.sectionTitle}>
                  {" "}
                  Number #1 for PTE Preparation{" "}
                </h2>
              </GridContainer>
            </ScrollAnimation>
            <ScrollAnimation animateIn="fadeIn" delay={500}>
              <GridContainer className={classes.stat}>
                <GridItem md={4} sm={4}>
                  <InfoAreaNumber
                    title="120+"
                    description="Countries"
                    icon={LanguageIcon}
                  />
                </GridItem>
                <GridItem md={4} sm={4}>
                  <InfoAreaNumber
                    title="2,500,000"
                    description="Test Takers"
                    icon={GroupAddIcon}
                  />
                </GridItem>
                <GridItem md={4} sm={4}>
                  <InfoAreaNumber
                    title="3,000,000"
                    description="Completed Tests"
                    icon={CollectionsBookmarkIcon}
                  />
                </GridItem>
                <GridItem md={4} sm={4}>
                  <InfoAreaNumber
                    title="100+"
                    description="Academic Tests"
                    icon={FingerprintIcon}
                  />
                </GridItem>
                <GridItem md={4} sm={4}>
                  <InfoAreaNumber
                    title="20+"
                    description="General Training Tests"
                    icon={EventNoteIcon}
                  />
                </GridItem>
                <GridItem md={4} sm={4}>
                  <InfoAreaNumber
                    title="10,000+"
                    description="Total Questions"
                    icon={VerifiedUserIcon}
                  />
                </GridItem>
              </GridContainer>
            </ScrollAnimation>
          </div>
          {/* <div className={classes.thirdSection}>
            <ScrollAnimation animateIn="fadeIn" delay={300}>
              <GridContainer justify="center">
                <h2 className={classes.sectionTitle}>Practice Tests Features That makes us top notch</h2>
              </GridContainer>
            </ScrollAnimation>

            <ScrollAnimation animateIn="fadeIn" delay={500}>
              <GridContainer >
                <GridItem xs={12} sm={4} md={4} className={classes.thirdGridItem}>
                  <div>
                    <img src="https://ptemagicpractice.com/wp-content/uploads/2020/06/AI-PTE-MAGIC.png" />
                    <h3>AI Scoring</h3>
                    <p>A Practice Tests platform has been designed with AI (Artificial Intelligence) feature. AI scoring means that test takers will be marked by the automated system which mimics the real scoring algorithm.</p>
                  </div>
                </GridItem>
                <GridItem xs={12} sm={4} md={4} className={classes.thirdGridItem}>
                  <div>
                    <img src="https://ptemagicpractice.com/wp-content/uploads/2020/05/practice-test-icon-7.png" />
                    <h3>Practice Tests </h3>
                    <p>Magic PTE Mock Test are designed to simulate the actual PTE Exam testing experience to help users familiarize themselves with the test patterns and identify weaknesses using score reports.</p>
                  </div>
                </GridItem>
                <GridItem xs={12} sm={4} md={4} className={classes.thirdGridItem}>
                  <div>
                    <img src="https://ptemagicpractice.com/wp-content/uploads/2020/06/AI-PTE-MAGIC-1.png" />
                    <h3>Real Repeated Questions</h3>
                    <p>PTE question bank are updated regularly and are collected by the PTE aspirants community from the real exams. The questions are also sorted according to their frequency repetition rate.</p>
                  </div>
                </GridItem>
              </GridContainer>
            </ScrollAnimation>
          </div> */}
          <div className={classes.takeQuiz}>
            <div className={classes.quiz}>
              <h1 className={classes.title}>Not sure where to begin?</h1>
              <p>Don't worry! We have your back.</p>
              <Button className={`bounce ${classes.quizBtn}`}>
                {" "}
                Take our quiz{" "}
              </Button>
            </div>
            <img className={classes.takeQuizImg} src={takeQuiz} />
          </div>
        </div>

        <StepperSection />

        <div
          className={classes.features5}
          style={{ backgroundImage: `url(${bg9})` }}
        >
          <GridContainer className={classes.margin0}>
            <GridItem
              xs={12}
              sm={8}
              md={8}
              className={
                classes.mlAuto + " " + classes.mrAuto + " " + classes.textCenter
              }
            >
              <h2 className={classes.title}>Why use PTE Online Tests?</h2>
            </GridItem>
            <div className={classes.container}>
              <GridContainer
                className={classes.gridContainer}
                style={{ margin: "0!important" }}
              >
                <GridItem xs={12} sm={4} className={classes.gridItem}>
                  <InfoArea
                    vertical
                    className={classes.infoArea5}
                    icon={Code}
                    title="Take recent actual PTE Tests"
                    description={
                      <p>
                        {" "}
                        Real PTE Listening and PTE Reading tests based on actual
                        PTE tests and following the Cambridge PTE book format.{" "}
                      </p>
                    }
                    iconColor="info"
                  />
                </GridItem>
                <GridItem xs={12} sm={4} className={classes.gridItem}>
                  <InfoArea
                    vertical
                    className={classes.infoArea5}
                    icon={FormatPaint}
                    title="Community-driven"
                    description={
                      <p>
                        {" "}
                        Created by our community of PTE teachers, previous PTE
                        examiners and PTE exam takers.
                      </p>
                    }
                    iconColor="danger"
                  />
                </GridItem>
                <GridItem xs={12} sm={4} className={classes.gridItem}>
                  <InfoArea
                    vertical
                    className={classes.infoArea5}
                    icon={Dashboard}
                    title="Comprehensive analytics tool"
                    description={
                      <p>
                        {" "}
                        Our PTE Analytics is a tool that allow you to set a
                        target PTE band score, analyse your progress, find how
                        to improve.
                      </p>
                    }
                    iconColor="primary"
                  />
                </GridItem>
              </GridContainer>
              <GridContainer
                className={classes.gridContainer}
                style={{ margin: "0!important" }}
              >
                <GridItem xs={12} sm={4} className={classes.gridItem}>
                  <InfoArea
                    vertical
                    className={classes.infoArea5}
                    icon={ViewCarousel}
                    title="View PTE Score and Answer Explanationss"
                    description={
                      <p>
                        {" "}
                        After taking our PTE mock tests with real audio, you can
                        check your Listening or Reading band score and view your
                        answer sheets.
                      </p>
                    }
                  />
                </GridItem>
                <GridItem xs={12} sm={4} className={classes.gridItem}>
                  <InfoArea
                    vertical
                    className={classes.infoArea5}
                    icon={AccessTime}
                    title="FREE to use"
                    description={
                      <p>
                        {" "}
                        Our online PTE tests are always free. We are here to
                        help users for study abroad, immigration and finding
                        jobs.
                      </p>
                    }
                  />
                </GridItem>
                <GridItem xs={12} sm={4} className={classes.gridItem}>
                  <InfoArea
                    vertical
                    className={classes.infoArea5}
                    icon={AttachMoney}
                    title="Increase your PTE band score"
                    description={
                      <p>
                        {" "}
                        Using our online tests for PTE preparation is proven to
                        help students improve by 0.5 - 1.5 .
                      </p>
                    }
                  />
                </GridItem>
              </GridContainer>
            </div>
          </GridContainer>
        </div>

        {/* <div className={classes.fourthSection}>
          <div className={classes.container}>
            <GridContainer justify="center">
              <h2 className={classes.sectionTitle}>The Benefits Of Doing Magic PTE Mock Test</h2>
            </GridContainer>
            <GridContainer >
              <GridItem xs={12} className={classes.fourthGridItem}>
                <div>
                  <h3>01. Perfect Your Timings</h3>
                  <p>While you may feel confident with all sections on the PTE, you also need to consider your timing. Whilst having the correct knowledge is important, if you can’t convey this knowledge in the allocated timeframe you will not score as highly as you should on the test.</p>
                </div>
              </GridItem>
              <GridItem xs={12} className={classes.fourthGridItem}>
                <div>
                  <h3>02. Identify Areas For Improvement</h3>
                  <p>With a practice test, teachers are able to identify areas where students need to improve, before taking the actual PTE Academic Exam. This gives students enough time to study and learn new information to achieve the best score possible on their PTE.</p>
                </div>
              </GridItem>
              <GridItem xs={12} className={classes.fourthGridItem} >
                <div>
                  <h3>03. Identify Where Students Are Succeeding</h3>
                  <p>Similarly to the point above, a practice test will help students identify sections of the test they are excelling in. This allows them to create an accurate revision timetable that has less time dedicated to the sections of the test they are already succeeding in.</p>
                </div>
              </GridItem>
            </GridContainer>
          </div>
        </div> */}

        <Program />
      </div>
      <GridContainer className={classes.enrollNow}>
        <GridItem xs={12} md={6}>
          {matches && <img src={enrollNow} />}
        </GridItem>
        <GridItem className={classes.enrollment} xs={12} md={6}>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
            {matches ? (
              <h1> START OUR PROGRAM FROM TODAY</h1>
            ) : (
              <h3> START OUR PROGRAM FROM TODAY</h3>
            )}
            <Button className={classes.enrollBtn}> ENROLL NOW </Button>
          </div>
        </GridItem>
      </GridContainer>

      {/* <div
        className={classNames(
          classes.subscribeLine,
          classes.subscribeLineImage
        )}
        style={{ backgroundImage: `url(${ecommerceHeader})` }}
      >
        <div className={classes.container}>
          <GridContainer>
            <GridItem
              xs={12}
              sm={6}
              md={6}
              className={classNames(classes.mlAuto, classes.mrAuto)}
            >
              <div className={classes.textCenter}>
                <h3 className={classes.title}>Subscribe to our Newsletter</h3>
                <p className={classes.description}>
                  Join our newsletter and get news in your inbox every week! We
                  hate spam too, so no worries about this.
                </p>
              </div>
              <Card raised className={classes.card}>
                <CardBody className={classes.cardBody}>
                  <form>
                    <GridContainer>
                      <GridItem xs={12} sm={6} md={6} lg={8}>
                        <CustomInput
                          id="emailPreFooter"
                          formControlProps={{
                            fullWidth: true,
                            className: classes.cardForm
                          }}
                          inputProps={{
                            startAdornment: (
                              <InputAdornment position="start">
                                <Mail />
                              </InputAdornment>
                            ),
                            placeholder: "Your Email..."
                          }}
                        />
                      </GridItem>
                      <GridItem xs={12} sm={6} md={6} lg={4}>
                        <Button
                          color="rose"
                          block
                          className={classes.subscribeButton}
                        >
                          subscribe
                        </Button>
                      </GridItem>
                    </GridContainer>
                  </form>
                </CardBody>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
      </div> */}
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
