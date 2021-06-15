/*eslint-disable*/
import React, { useRef, useState } from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Banner from "components/Parallax/Banner.js";
import logo from "assets/img/New-pte-magic-logo-1.png";

// core components

import HeaderLinksPTE from "components/Header/HeaderLinksPTE";
import Header from "components/Header/Header";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import PTEFooter from "components/Footer/PTEFooter";

// sections for this page

import presentationStyle from "assets/jss/nextjs-material-kit-pro/pages/presentationStyle.js";
import question from "assets/img/short-question.jpg";
import lecture from "assets/img/lecture.jpg";
import speaking from "assets/img/speaking.jpg";
import multipleChoice from "assets/img/multiple-choice.jpg";
import reOrder from "assets/img/re-order.jpg";
import reading from "assets/img/reading-tips.jpg";

const styles = (theme) => ({
  ...presentationStyle,
  section: {
    maxWidth: "1240px",
  },
  main: {
    marginTop: 100,
  },
  banner: {
    width: "100vw",
    height: "530px",
    backgroundColor: "#16163f",
    opacity: "0.8",
    display: "flex",
    justifyContent: "center",
    margin: "100px 0",
    "& p": {
      marginTop: "auto",
      marginBottom: "auto",
      marginLeft: "auto",
      marginRight: "auto",
      maxWidth: "600px",
      lineHeight: "50px",
      textAlign: "center",
      fontSize: "50px",
      fontWeight: "300",
      color: "#fff",
      fontFamily: "Merriweather",
    },
  },
  bannerBottom: {
    width: "100vw",
    height: "530px",
    backgroundColor: "#16163f",
    opacity: "0.8",
    display: "flex",
    justifyContent: "center",
    margin: "100px 0 0 0",
    "& p": {
      marginTop: "auto",
      marginLeft: "auto",
      marginRight: "auto",
      maxWidth: "600px",
      lineHeight: "50px",
      textAlign: "center",
      fontSize: "50px",
      fontWeight: "300",
      color: "#fff",
      fontFamily: "Merriweather",
    },
  },
  container: {
    display: "flex",
    justifyContent: "center",
  },
  speakingSection: {
    textAlign: "center",
    display: "flex",
    marginLeft: "5%",
    marginRight: "5%",
  },
  speaking: {
    textAlign: "left !important",
    fontSize: "18px",
    paddingLeft: "0 !important",
    fontWeight: "200",
    fontFamily: "Montserrat",
    color: "#4a4a4a",
    lineHeight: "30px",
  },
  speakingTitle: {
    marginTop: "20px",
    marginBottom: "40px",
    fontSize: "50px",
    fontFamily: '"Merriweather"',
    lineHeight: "50px",
    fontWeight: "100",
    color: "#16163f",
  },
  tipsTitle: {
    borderBottom: "solid 1px #000",
    fontFamily: '"Merriweather"',
    minWidth: "100%",
    textAlign: "left",
    margin: "50px 0",
    fontSize: "30px",
    lineHeight: "45px",
    paddingBottom: "20px",
    color: "#16163f",
  },
  tipsSection: {
    textAlign: "left",
    margin: "0 20px",
    display: "flex",
    justifyContent: "center",
    color: "#000",
    "& h3": {
      fontWeight: "500",
    },
  },
  tip: {
    [theme.breakpoints.down("sm")]: {
      maxWidth: "400px",
    },
    [theme.breakpoints.up("sm")]: {
      maxWidth: "350px",
      margin: "0 50px",
    },
    [theme.breakpoints.up("md")]: {
      maxWidth: "250px",
      margin: "0 50px",
    },
    fontFamily: "Montserrat",
  },
  cardImg: {
    width: "258px",
    borderRadius: "10px 10px 0 0",
    "&:hover": {
      opacity: "0.5",
    },
  },
  card: {
    border: "1px solid #bab8b8",
    fontSize: "18px",
    fontFamily: "Poppins",
    maxWidth: "260px",
    textAlign: "left",
    borderRadius: "10px",
    marginRight: "20px",
    marginTop: "20px",
    "& p": {
      padding: 10,
      color: "#677294",
    },
    "& h5": {
      fontFamily: '"Poppins" serif',
      fontWeight: "500",
      padding: 10,
      color: "#303133",
      "&:hover": {
        cursor: "pointer",
      },
    },
  },
  contact: {
    textAlign: "center",
  },
  contactBtn: {
    backgroundColor: "#d3b574",
    color: "#16163f",
    textAlign: "center",
    borderRadius: "0 !important",
    "&:hover": {
      backgroundColor: "#fff",
      color: "#16163f",
    },
    "& i": {
      marginLeft: "15px",
    },
  },
  bigHead: {
    margin: "0 80px",
  },
  bigHeadTitle: {
    fontSize: "50px",
    padding: "0 0 0 30px",
    border: "solid #d3b574",
    borderWidth: "0 0 0 4px",
    lineHeight: "1.4em",
    color: "#16163f",
    fontWeight: "500",
    fontFamily: `"Merriweather", sans-serif`,
  },
  headDetail: {
    fontFamily: '"Times New Roman", serif',
    fontSize: "16px",
    textAlign: "justify",
    color: "#4a4a4a",
    lineHeight: "30px",
    "& span": {
      fontFamily: '"Roboto", sans-serif',
      fontWeight: "200",
      fontSize: "16px",
      color: "#000",
    },
  },
  important: {
    textAlign: "center",
    fontFamily: "Montserrat",
  },
});

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
        color="transparent"
        links={<HeaderLinksPTE />}
        fixed
        changeColorOnScroll={{
          height: 0,
          color: "white",
        }}
      />
      <div className={classes.bigHeader}></div>
      <Banner
        title="PTE PRACTICE TEST"
        subtitle="Are you searching for where to learn more facts about PTE practice
      test? Do you know that not every PTE practice tutorial can prove
      helpful? Your score in a PTE practice test is a reflection of how
      you will likely perform in the real PTE test. This post will be
      aiming to reveal some powerful tips on how you can score very high
      in such practice test. The sky will be your limits if you can get
      it right."
      />

      <div className={classNames(classes.main)}>
        <GridContainer className={classes.container}>
          <GridContainer className={(classes.bigHead, classes.section)}>
            <GridItem xs={12} md={4} className={classes.bigHeadTitle}>
              'BEST' PTE Practice Test-PTE Magic
            </GridItem>
            <GridItem xs={12} md={4} className={classes.headDetail}>
              The advent of <span>PTE practice test</span> is to enable people
              pass the real PTE examination without any problem. The function of
              such test has gone beyond making materials available through which
              people can use to improve their reading, writing, listening and
              speaking skills. In addition to such, they can also ensure proper
              time management which most PTE students consider as major
              nightmare. <br />
              <br />
            </GridItem>
            <GridItem xs={12} md={4} className={classes.headDetail}>
              Furthermore, you will also discover why PTE Magic is a trusted
              platform when it comes to getting some of the most updated PTE
              practice tips and materials. We have proven to be steps ahead of
              others in the past with lots of standard mock questions to test
              your grammar accuracy.{" "}
            </GridItem>
          </GridContainer>
          <div className={classes.banner}>
            <p>“Your Limitation—It's Only Your Imagination.”</p>
          </div>
          <div className={classes.section}>
            <div className={classes.important}>
              Important Things You Should Know
            </div>
            <GridContainer className={classes.speakingSection}>
              <GridItem xs={12} md={12} className={classes.speakingTitle}>
                PTE Practice Test <b>Speaking</b> Section
              </GridItem>
              <GridItem xs={12} md={6} className={classes.speaking}>
                It is shocking to find out that even native English speakers
                usually struggle when it comes to scoring high during a PTE
                speaking practice section. Furthermore, the system put together
                by PTE Magic is based on an advanced and sophisticated{" "}
                <b>Artificial Intelligence (AI)</b>. The marking isn’t just
                automated but completely{" "}
              </GridItem>
              <GridItem xs={12} md={6} className={classes.speaking}>
                {" "}
                fair just like what applies in the real PTE exam. It records
                your voice and awards the deserved score. This is one of the
                easiest sections if you know what to do. You will be expected to
                read a passage aloud. Below are some effective strategies to
                help you out.
              </GridItem>

              <div className={classes.tipsTitle}>
                Some PTE <b>Speaking</b> Tips
              </div>
              <GridContainer className={classes.tipsSection}>
                <GridItem className={classes.tip} xs={12} sm={12} md={4}>
                  <h3>1 – Timing is crucial</h3>
                  <p>
                    Don’t ever make the mistake of starting when the recording
                    hasn’t started. This means you voice isn’t going to be
                    recorded. Always start as soon as the recording commences.
                  </p>
                </GridItem>
                <GridItem className={classes.tip} xs={12} md={4}>
                  <h3>2 – Avoid repetitions</h3>
                  <p>
                    Most people make the mistake of repeating words over and
                    over again. Just like the real PTE exam, this is going to
                    affect your score to a great extent. Even if you don’t know
                    understand something, don’t try to stop as such can affect
                    your fluency.
                  </p>
                </GridItem>
                <GridItem className={classes.tip} xs={12} md={4}>
                  <h3>3 – Watch out for punctuation marks</h3>
                  <p>
                    Your oral fluency will suffer once punctuations are ignored.
                    These could be commas, full stop, colon, semi colon and
                    more. Practice intonation and syllables to know the right
                    time they can be used.
                  </p>
                </GridItem>
              </GridContainer>
              <div className={classes.tipsTitle}>
                PTE <b>Speaking</b> Practice Test Sample Questions And Materials
              </div>
              <div className={classes.card}>
                <img className={classes.cardImg} src={question} />
                <h5>
                  PTE Speaking Short Answer Question – Exam Structure and Sample
                  Question
                </h5>
                <p>
                  Table of Contents PTE speaking Short Answer Question part
                  includes...
                </p>
              </div>
              <div className={classes.card}>
                <img className={classes.cardImg} src={speaking} />
                <h5>
                  PTE Speaking Short Answer Question – Exam Structure and Sample
                  Question
                </h5>
                <p>
                  Table of Contents PTE speaking Short Answer Question part
                  includes...
                </p>
              </div>
              <div className={classes.card}>
                <img className={classes.cardImg} src={lecture} />
                <h5>
                  PTE Speaking Short Answer Question – Exam Structure and Sample
                  Question
                </h5>
                <p>
                  Table of Contents PTE speaking Short Answer Question part
                  includes...
                </p>
              </div>
            </GridContainer>
          </div>
          <div className={classes.banner}>
            <p>“With PTE Magic 79+ Is In Your Hand”</p>
          </div>
          <div className={classes.section}>
            <div className={classes.important}>
              Important Things You Should Know
            </div>
            <GridContainer className={classes.speakingSection}>
              <GridItem xs={12} md={12} className={classes.speakingTitle}>
                PTE Practice Test <b>Listening</b> Section
              </GridItem>
              <GridItem xs={12} md={6} className={classes.speaking}>
                PTE listening practice section is all about listening
                effectively to a particular lecture. In the end, you will be
                expected to summarize the most important ideas/key points. There
                are times when you can listen{" "}
              </GridItem>
              <GridItem xs={12} md={6} className={classes.speaking}>
                {" "}
                effectively to the questions being asked but don’t really know
                how to provide the expected answers. In such case, your score
                will be negatively affected. Below are some tips to help you
                score high.
              </GridItem>

              <div className={classes.tipsTitle}>
                Some PTE <b>Listening</b> Tips
              </div>
              <GridContainer className={classes.tipsSection}>
                <GridItem className={classes.tip} xs={12} sm={12} md={4}>
                  <h3>1 – Reading the question</h3>
                  <p>
                    The importance of doing this in a PTE listening practice
                    section is to ensure you accurately summarize the spoken
                    text. Improve your reading speed before starting this
                    section. This is because time is always limited.
                  </p>
                </GridItem>
                <GridItem className={classes.tip} xs={12} sm={12} md={4}>
                  <h3>2 – Be patient</h3>
                  <p>
                    For every wrong answer you give out in this section, your
                    mark will be deducted. Always ensure that you have selected
                    the correct answers. Most times, the first answers are
                    revealed once the keywords have been spoken. Wait for the
                    next answer to be revealed after the first.
                  </p>
                </GridItem>
                <GridItem className={classes.tip} xs={12} sm={12} md={4}>
                  <h3>3 – Taking note</h3>
                  <p>
                    Just like the real PTE test, it is very important you take
                    note of what is being said. Don’t forget that you will be
                    listening to an audio. This means there is a very high
                    chance of living important details that may lead to the
                    expected answers. Therefore, take note of important keywords
                    and concepts to make things easier.
                  </p>
                </GridItem>
              </GridContainer>
              <div className={classes.tipsTitle}>
                PTE <b>Listening</b> Practice Test Sample Questions And
                Materials
              </div>
              <div className={classes.card}>
                <img className={classes.cardImg} src={question} />
                <h5>PTE Listening – Highlight Incorrect Words</h5>
                <p>
                  Table of Contents Highlight Incorrect Words is one of the
                  type...
                </p>
              </div>
            </GridContainer>
          </div>
          <div className={classes.banner}>
            <p>“I ❤️ Reading.”</p>
          </div>
          <div className={classes.section}>
            <div className={classes.important}>
              Important Things You Should Know
            </div>
            <GridContainer className={classes.speakingSection}>
              <GridItem xs={12} md={12} className={classes.speakingTitle}>
                PTE Practice Test <b>Reading</b> Section
              </GridItem>
              <GridItem xs={12} md={6} className={classes.speaking}>
                Most people are finding PTE reading practice sections to be very
                difficult and complicated. The truth is that just like any other
                section in PTE practice test, it is possible to score very high.
                As a matter of fact, if you can understand the strategies to get
                high score during such practice section, the real PTE reading
                test will become a complete walk in the park. Below are some
                tips to keep you going.{" "}
              </GridItem>
              <GridItem xs={12} md={6} className={classes.speaking}>
                {" "}
                PTE Magic has proven to be one of the best when it comes to
                making not just numerous real exam questions to be available on
                PTE reading. Also, they are regularly updated to ensure users
                like you develop their reading skills as expected
              </GridItem>

              <div className={classes.tipsTitle}>
                Some PTE <b>Reading </b>Tips
              </div>
              <GridContainer className={classes.tipsSection}>
                <GridItem className={classes.tip} xs={12} sm={12} md={4}>
                  <h3>1 – Development of vocabulary</h3>
                  <p>
                    Similar to the real PTE reading section, your vocabulary
                    should be sound. Therefore, ensure that you are pronouncing
                    words as expected. The good part is that building a nice
                    vocabulary isn’t difficult to achieve. You can start by
                    reading lots of academic journals and articles on daily
                    basis.
                  </p>
                </GridItem>
                <GridItem className={classes.tip} xs={12} sm={12} md={4}>
                  <h3>2 – Using the right words</h3>
                  <p>
                    Don’t ever make use of words that you don’t know their
                    meanings. This can hurt your score during a PTE reading
                    practice section. You will always get to that point where
                    words will be required to complete sentences. One of easiest
                    ways to do this effectively is looking at the context in
                    which such words have been used. For instance, “predict” and
                    “foresee” may mean the same thing but they are used in
                    different contexts.
                  </p>
                </GridItem>
                <GridItem className={classes.tip} xs={12} sm={12} md={4}>
                  <h3>3 – Evaluating your options</h3>
                  <p>
                    This is involves trying to select the right words in other
                    to see the one that is a perfect fit for a given sentence.
                    You have to be very fast about it though. This tip becomes
                    useful when you can’t find the right answer during a PTE
                    reading practice section.
                  </p>
                </GridItem>
              </GridContainer>
              <div className={classes.tipsTitle}>
                PTE <b>Reading</b> Practice Test Sample Questions And Materials
              </div>
              <div className={classes.card}>
                <img className={classes.cardImg} src={reading} />
                <h5>PTE Reading Test Tips</h5>
                <p>
                  Table of Contents To evaluate the ability of a candidate...
                </p>
              </div>
              <div className={classes.card}>
                <img className={classes.cardImg} src={multipleChoice} />
                <h5>
                  PTE Reading – Multiple Choice Single Answer – Sample Question
                  & Exam Structure
                </h5>
                <p>
                  Table of Contents In PTE reading section, Multiple-Choice
                  Single Answer...
                </p>
              </div>
              <div className={classes.card}>
                <img className={classes.cardImg} src={reOrder} />
                <h5>
                  PTE Reading – Reorder Paragraphs with exam structure & sample
                  question
                </h5>
                <p>
                  Table of Contents The Reorder task examines the way you...
                </p>
              </div>
            </GridContainer>
          </div>
          <div className={classes.banner}>
            <p>“Practice Makes Perfect”</p>
          </div>

          <div className={classes.section}>
            <div className={classes.important}>
              Important Things You Should Know
            </div>
            <GridContainer className={classes.speakingSection}>
              <GridItem xs={12} md={12} className={classes.speakingTitle}>
                PTE Practice Test <b>Writing</b> Section
              </GridItem>
              <GridItem xs={12} md={6} className={classes.speaking}>
                Most of the time, you score low during a PTE writing practice
                section due to some factors which could have been easily
                controlled. If you{" "}
              </GridItem>
              <GridItem xs={12} md={6} className={classes.speaking}>
                {" "}
                make these mistakes during a PTE practice test, they are bound
                to be repeated during the real PTE exams.
              </GridItem>

              <div className={classes.tipsTitle}>
                Some PTE <b>Writing</b> Tips
              </div>
              <GridContainer className={classes.tipsSection}>
                <GridItem className={classes.tip} xs={12} sm={12} md={4}>
                  <h3>1 – Always follow instructions</h3>
                  <p>
                    Don’t ever make the mistake of starting when the recording
                    hasn’t started. This means you voice isn’t going to be
                    recorded. Always start as soon as the recording commences.
                  </p>
                </GridItem>
                <GridItem className={classes.tip} xs={12} sm={12} md={4}>
                  <h3>2 – Know that time is very limited</h3>
                  <p>
                    Most people make the mistake of repeating words over and
                    over again. Just like the real PTE exam, this is going to
                    affect your score to a great extent. Even if you don’t know
                    understand something, don’t try to stop as such can affect
                    your fluency.
                  </p>
                </GridItem>
                <GridItem className={classes.tip} xs={12} sm={12} md={4}>
                  <h3>
                    3 – Understand what such essay is all about before writing
                  </h3>
                  <p>
                    Your oral fluency will suffer once punctuations are ignored.
                    These could be commas, full stop, colon, semi colon and
                    more. Practice intonation and syllables to know the right
                    time they can be used.
                  </p>
                </GridItem>
              </GridContainer>
              <div className={classes.tipsTitle}>
                PTE <b>Writing</b> Practice Test Sample Questions And Materials
              </div>
              <div className={classes.card}>
                <img className={classes.cardImg} src={question} />
                <h5>
                  PTE Speaking Short Answer Question – Exam Structure and Sample
                  Question
                </h5>
                <p>
                  Table of Contents PTE speaking Short Answer Question part
                  includes...
                </p>
              </div>
              <div className={classes.card}>
                <img className={classes.cardImg} src={speaking} />
                <h5>
                  PTE Speaking Short Answer Question – Exam Structure and Sample
                  Question
                </h5>
                <p>
                  Table of Contents PTE speaking Short Answer Question part
                  includes...
                </p>
              </div>
              <div className={classes.card}>
                <img className={classes.cardImg} src={lecture} />
                <h5>
                  PTE Speaking Short Answer Question – Exam Structure and Sample
                  Question
                </h5>
                <p>
                  Table of Contents PTE speaking Short Answer Question part
                  includes...
                </p>
              </div>
            </GridContainer>
          </div>
          <div className={classes.bannerBottom}>
            <GridContainer>
              <p>We Will Help You Every Step Of The Way</p> <br />
              <GridItem xs={12} md={12} lg={12} className={classes.contact}>
                <Button className={classes.contactBtn}>
                  {" "}
                  Contact Us{" "}
                  <i
                    aria-hidden="true"
                    class="fas fa-long-arrow-alt-right"
                  ></i>{" "}
                </Button>
              </GridItem>
            </GridContainer>
          </div>
        </GridContainer>
      </div>
      <PTEFooter />
    </div>
  );
}
