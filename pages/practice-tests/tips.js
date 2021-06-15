/*eslint-disable*/
import React, { useRef, useState } from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Banner from "components/Parallax/Banner.js";
import logo from "assets/img/New-pte-magic-logo-1.png";
import HeaderLinksPTE from "components/Header/HeaderLinksPTE";
import Header from "components/Header/Header";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import PTEFooter from "components/Footer/PTEFooter";
import Head from "next/head";

// sections for this page

import presentationStyle from "assets/jss/nextjs-material-kit-pro/pages/presentationStyle.js";

const styles = (theme) => ({
  ...presentationStyle,
  section: {
    maxWidth: "1240px",
  },
  main: {
    marginTop: 100,
  },
  container: {
    display: "flex",
    justifyContent: "center",
    marginBottom: 100,
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
  important: {
    textAlign: "center",
    fontFamily: "Montserrat",
  },
  cardFooter: {
    borderTop: "1px solid rgba(61,68,89,.1)",
    justifyContent: "center",
    fontFamily: "Montserrat",
    color: "rgba(61,68,89,.5)",
    fontSize: "14px",
    fontWeight: 400,
    position: "absolute",
    bottom: 0,
    width: "100%",
  },
  searchForm: {
    position: "relative",
    display: "flex",
    alignItems: "stretch",
    width: "100%",
    borderRadius: "10px",
    "& button": {
      position: "absolute",
      background: "0 0",
      padding: "0",
      border: "0",
      right: "30px",
      top: "51%",
      transform: "translateY(-50%)",
      fontSize: "16px",
      color: "#282835",
      zIndex: "0",
    },
    "&:hover": {
      border: "1px solid #9fd6f1",
      transition: "all .3s",
    },
  },
  formControl: {
    height: "60px",
    width: "100%",
    padding: " 0 30px",
    background: "#f3f4f9",
    borderRadius: "10px",
    fontSize: "15px",
    color: "#677294",
    boxShadow: "none",
    position: "relative",
    zIndex: " 0",
    borderColor: "transparent",
    transition: "all 0.5s",
    "&:hover": {
      backgroundColor: "#fff",
      transition: "all 0.8s",
    },
  },
  widgetTitle: {
    marginBottom: "35px",
    "& h3": {
      fontSize: "20px",
      fontWeight: "600",
      color: "#282835",
      marginBottom: "30px",
      paddingBottom: "30px",
      borderBottom: "1px solid black",
    },
  },
  mediaImage: {
    paddingLeft: "0px",
    width: "100%",
    height: 70,
    borderRadius: "5px",
    margin: "20px 0px 0px 0",
  },
  mediaBody: {
    margin: "20px 0px 0 0",
    paddingLeft: 0,
    "& h4": {
      marginTop: 0,
      fontSize: 15,
      fontWeight: "500",
      color: "#000",
      "&:hover": {
        color: "#9c27b0",
      },
    },
  },
  categories: {
    fontWeight: "200 !important",
  },
  btnLink: {
    display: "flex",
    justifyContent: "space-between",
    marginLeft: "-15px",
    marginRight: "5px",
    lineHeight: "1",
  },

  blogListItem: {
    marginTop: "40px",
    position: "relative",
  },
  postDate: {
    position: "absolute",
    width: "47px",
    height: "41px",
    borderRadius: "4px",
    backgroundColor: "#fbfbfd",
    left: "10px",
    top: "60px",
    borderRadius: "4px",
    textAlign: "center",
    color: "#5e2ced",
    zIndex: "1",
    "& h2": {
      fontSize: "18px",
      fontWeight: "600",
      marginTop: "2.5px",
      lineHeight: "1em",
    },
    "& span": {
      fontSize: "15px",
      fontWeight: "400",
    },
  },
  imgFluid: {
    maxWidth: "100%",
    marginTop: "50px",
    borderRadius: "6px",
  },
  emojiImg: {
    maxWidth: "16px",
    height: "16px",
  },
  stickyLabel: {
    marginTop: "-45px",
  },
  popupYoutube: {
    position: "absolute",
    left: "50%",
    top: "50%",
  },
  contentDisplay: {
    margin: "0 30px",
  },
  contentSection: {
    "& h2": {
      color: "#000",
      fontWeight: "500",
      "&:hover": {
        color: "#9c27b0",
      },
    },
    "& p": {
      color: "#677294",
    },
  },
});

const useStyles = makeStyles(styles);

export default function TipsPage() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  });

  const classes = useStyles();

  return (
    <div>
      <Head>
        <title>PTE Practice Test Tips</title>
      </Head>
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
      <Banner title="PTE Practice Test Tips" className={classes.banner}/>

      <div className={classNames(classes.main)}>
        <GridContainer className={classes.container}>
          <GridContainer className={classes.section}>
            <GridItem md={7} sm={12} className={classes.contentDisplay}>
              <div className={classes.contentSection}>
                <a href="https://old.ptemagicpractice.com/pte-crashing-tips-ebook/">
                  <h2> March PTE Exam Memories from PTE 90 SCORER</h2>{" "}
                </a>
                <p>
                  Table of Contents Hello everyone, This is Moni. I did my PTE
                  test on the 20th March 2021 at Sydney Pearson Bridge Street to
                  test if our tips are still working. The result came after only
                  3 hours and once again. I got 90 all bands for PTE Speaking,
                  Listening, Reading and Writing. I will
                </p>
              </div>
              <GridItem className={classes.btnLink}>
                <a href="#pablo" className={classes.btnText}>
                  Read more &rarr;
                </a>
                <a href="#pablo" className={classes.btnText}>
                  <i class="far fa-comment"></i>
                  No Comments
                </a>
              </GridItem>
              <div className={classes.blogListItem}>
                <div className={classes.postDate}>
                  <h2>
                    {" "}
                    08 <span> Jun </span>
                  </h2>
                </div>{" "}
                <a href="https://old.ptemagicpractice.com/pte-crashing-tips-ebook/">
                  {" "}
                  <img
                    src="https://old.ptemagicpractice.com/wp-content/uploads/2020/06/blog-test-pte-magic-770x480.png"
                    className={classes.imgFluid}
                    alt="PTE Self-study Guidline & Templates - PTE One-Week Crashing Tips by PTE Magic"
                    loading="lazy"
                    srcSet="https://old.ptemagicpractice.com/wp-content/uploads/2020/06/blog-test-pte-magic-770x480.png 770w, https://old.ptemagicpractice.com/wp-content/uploads/2020/06/blog-test-pte-magic-300x188.png 300w, https://old.ptemagicpractice.com/wp-content/uploads/2020/06/blog-test-pte-magic-1024x640.png 1024w, https://old.ptemagicpractice.com/wp-content/uploads/2020/06/blog-test-pte-magic-768x480.png 768w, https://old.ptemagicpractice.com/wp-content/uploads/2020/06/blog-test-pte-magic.png 1200w"
                  />{" "}
                </a>
                <div className={classes.contentSection}>
                  {" "}
                  <a
                    className="blog_title"
                    href="https://old.ptemagicpractice.com/pte-crashing-tips-ebook/"
                  >
                    <h2 className="blog_title"> PTE Crashing Tips eBook</h2>{" "}
                  </a>
                  <p>
                    {" "}
                    Check out PTE Magic eBook{" "}
                    <img
                      draggable="false"
                      role="img"
                      className={classes.emojiImg}
                      alt="📚"
                      src="https://s.w.org/images/core/emoji/13.0.1/svg/1f4da.svg"
                    />{" "}
                    with updated crashing tips in PTE speaking, reading, writing
                    and listening.
                  </p>
                </div>
                <GridItem className={classes.btnLink}>
                  <a
                    href="https://old.ptemagicpractice.com/pte-crashing-tips-ebook/"
                    className={classes.btnText}
                  >
                    Read more &rarr;
                  </a>
                  <a
                    href="https://old.ptemagicpractice.com/pte-crashing-tips-ebook/#comments"
                    className={classes.btnText}
                  >
                    <i class="far fa-comment"></i>
                    No Comments
                  </a>
                </GridItem>
              </div>
              <div className={classes.blogListItem}>
                <div className={classes.postDate}>
                  <h2>
                    {" "}
                    05 <span> Jun </span>
                  </h2>
                </div>{" "}
                <a href="https://old.ptemagicpractice.com/pte-tips-updated-frequently/">
                  {" "}
                  <img
                    src="https://old.ptemagicpractice.com/wp-content/uploads/2020/06/Magic-PTE-tips-updated-frequently-770x480.jpg"
                    className={classes.imgFluid}
                    alt="Magic PTE practice tips updated frequently with pte materials"
                    loading="lazy"
                    srcSet="https://old.ptemagicpractice.com/wp-content/uploads/2020/06/Magic-PTE-tips-updated-frequently-770x480.jpg 770w, https://old.ptemagicpractice.com/wp-content/uploads/2020/06/Magic-PTE-tips-updated-frequently-300x188.jpg 300w, https://old.ptemagicpractice.com/wp-content/uploads/2020/06/Magic-PTE-tips-updated-frequently-1024x640.jpg 1024w, https://old.ptemagicpractice.com/wp-content/uploads/2020/06/Magic-PTE-tips-updated-frequently-768x480.jpg 768w, https://old.ptemagicpractice.com/wp-content/uploads/2020/06/Magic-PTE-tips-updated-frequently.jpg 1200w"
                  />{" "}
                </a>
                <div className={classes.contentSection}>
                  {" "}
                  <a
                    className="blog_title"
                    href="https://old.ptemagicpractice.com/pte-crashing-tips-ebook/"
                  >
                    <h2 className={classes.blogTitle}>
                      {" "}
                      PTE Tips Updated frequently
                    </h2>{" "}
                  </a>
                  <p>
                    {" "}
                    We try to keep updates and share all Premimum PTE materials
                    such as eBook, exam templates, video and many more.&nbsp;
                    *2020* PTE Crashing Tips Speaking Tips NEW – Improve
                    Frequency *Note: If you want to share or contribute your
                    materials with us, please email at info@ptemagicpractice.com
                  </p>
                </div>
                <GridItem className={classes.btnLink}>
                  <a
                    href="https://old.ptemagicpractice.com/pte-tips-updated-frequently/"
                    className={classes.btnText}
                  >
                    Read more &rarr;
                  </a>
                  <a
                    href="https://old.ptemagicpractice.com/pte-tips-updated-frequently/#comments"
                    className={classes.btnText}
                  >
                    <i class="far fa-comment"></i>
                    No Comments
                  </a>
                </GridItem>
              </div>
              <div className={classes.blogListItem}>
                <div className={classes.postDate}>
                  <h2>
                    {" "}
                    02 <span> Jun </span>
                  </h2>
                </div>{" "}
                <div className={classes.videoPost}>
                  <img
                    src="https://old.ptemagicpractice.com/wp-content/uploads/2020/06/PTE-Listening-Secrets-Moni-Vuong-770x480.jpg"
                    className={classes.imgFluid}
                    alt="PTE Listening Secrets Moni Vuong | PTE Magic"
                    loading="lazy"
                  />{" "}
                  <a
                    className={classes.popupYoutube}
                    href="https://www.youtube.com/watch?v=oSp2HqJnZ_0"
                  >
                    <i class="fas fa-caret-circle-right"></i>
                  </a>
                </div>
                <div className={classes.contentSection}>
                  {" "}
                  <a
                    className="blog_title"
                    href="https://old.ptemagicpractice.com/pte-crashing-tips-ebook/"
                  >
                    <h2 className={classes.blogTitle}>
                      {" "}
                      How to get 90 PTE LISTENING?
                    </h2>{" "}
                  </a>
                </div>
                <GridItem className={classes.btnLink}>
                  <a
                    href="https://old.ptemagicpractice.com/pte-tips-updated-frequently/"
                    className={classes.btnText}
                  >
                    Read more &rarr;
                  </a>
                  <a
                    href="https://old.ptemagicpractice.com/pte-tips-updated-frequently/#comments"
                    className={classes.btnText}
                  >
                    <i class="far fa-comment"></i>
                    No Comments
                  </a>
                </GridItem>
              </div>
              <div className={classes.blogListItem}>
                <div className={classes.postDate}>
                  <h2>
                    {" "}
                    22 <span> May </span>
                  </h2>
                </div>{" "}
                <a href="https://old.ptemagicpractice.com/pte-speaking-common-mistakes/">
                  {" "}
                  <img
                    src="https://old.ptemagicpractice.com/wp-content/uploads/2020/06/PTE-Speaking-Tips-How-to-improve-your-fluency-770x480.jpg"
                    className={classes.imgFluid}
                    alt="PTE Speaking Tips How to improve your fluency | PTE Magic"
                    loading="lazy"
                  />
                </a>
                <div className={classes.contentSection}>
                  {" "}
                  <a
                    className="blog_title"
                    href="https://old.ptemagicpractice.com/pte-crashing-tips-ebook/"
                  >
                    <h2 className={classes.blogTitle}>
                      {" "}
                      2020 New PTE Speaking Tips
                    </h2>{" "}
                  </a>
                  <p>
                    {" "}
                    Do you want to improve your PTE Speaking Fluency? I have
                    been coaching PTE at Magic for many students since 2018. I
                    understand that students with English as their
                    second-language finding difficulties in PTE Practice Test
                    Speaking Fluency.&nbsp; Some most common mistakes in
                    Speaking, check out how you can improve: Mistake 1: Too Slow
                    and
                  </p>
                </div>
                <GridItem className={classes.btnLink}>
                  <a
                    href="https://old.ptemagicpractice.com/pte-tips-updated-frequently/"
                    className={classes.btnText}
                  >
                    Read more &rarr;
                  </a>
                  <a
                    href="https://old.ptemagicpractice.com/pte-tips-updated-frequently/#comments"
                    className={classes.btnText}
                  >
                    <i class="far fa-comment"></i>
                    No Comments
                  </a>
                </GridItem>
              </div>
            </GridItem>
            <GridItem md={4} sm={12} className={classes.title}>
              <GridItem className={classes.searchWidget}>
                <form
                  action="https://old.ptemagicpractice.com/"
                  className={classes.searchForm}
                >
                  {" "}
                  <input
                    className={classes.formControl}
                    placeholder="Search"
                  />{" "}
                  <span className="input-group-addon">
                    <button type="submit">
                      <i class="fas fa-search"></i>
                    </button>
                  </span>
                </form>
              </GridItem>
              <GridItem className={classes.recentWidget}>
                <GridItem className={classes.widgetTitle}>
                  <h3>Recent Posts</h3>
                  <div className={classes.borderBottom} />
                </GridItem>
                <GridItem className={classes.postItem1}>
                  <div className={classes.mediaBody}>
                    {" "}
                    <a
                      href="https://old.ptemagicpractice.com/march-pte-exam-memories-from-pte-90-scorer/"
                      title="PTE Practice Test Listening"
                    >
                      <h4> PTE Practice Test Listening</h4>
                    </a>
                  </div>
                  <div className={classes.mediaBody}>
                    {" "}
                    <a
                      href="https://old.ptemagicpractice.com/highlight-incorrect-words/"
                      title="PTE Practice Test Reading"
                    >
                      <h4> PTE Practice Test Reading</h4>
                    </a>
                  </div>
                </GridItem>
                <GridContainer className={classes.itemLink}>
                  <GridItem xs={4} md={5}>
                    <a href="https://old.ptemagicpractice.com/short-answer-question/">
                      {" "}
                      <img
                        src="https://old.ptemagicpractice.com/wp-content/uploads/2020/07/PTE-Speaking-Short-Question-PTE-MAGIC-PRACTICE-85x70.jpg"
                        className={classes.mediaImage}
                        alt="PTE Speaking Test Short Question PTE Practice Test Magic"
                        loading="lazy"
                        srcSet="https://old.ptemagicpractice.com/wp-content/uploads/2020/07/PTE-Speaking-Short-Question-PTE-MAGIC-PRACTICE-85x70.jpg 85w, https://old.ptemagicpractice.com/wp-content/uploads/2020/07/PTE-Speaking-Short-Question-PTE-MAGIC-PRACTICE-370x300.jpg 370w, https://old.ptemagicpractice.com/wp-content/uploads/2020/07/PTE-Speaking-Short-Question-PTE-MAGIC-PRACTICE-240x200.jpg 240w"
                      />{" "}
                    </a>
                  </GridItem>
                  <GridItem xs={8} md={7}>
                    <div className={classes.mediaBody}>
                      {" "}
                      <a
                        href="https://old.ptemagicpractice.com/short-answer-question/"
                        title="PTE Speaking Short Answer Question – Exam Structure and Sample Question"
                      >
                        <h4>
                          {" "}
                          PTE Speaking Short Answer Question – Exam Structure
                          and Sample Question
                        </h4>
                      </a>
                    </div>
                  </GridItem>
                </GridContainer>
                <GridContainer className={classes.itemLink}>
                  <GridItem xs={4} md={5}>
                    <a href="https://old.ptemagicpractice.com/pte-reading-test-tips/">
                      {" "}
                      <img
                        src="https://old.ptemagicpractice.com/wp-content/uploads/2020/07/PTE-READING-TIPS-PTE-MAGIC-PRACTICE-85x70.jpg"
                        className={classes.mediaImage}
                        alt="PTE READING TIPS PTE Practice Test PTE Magic"
                        loading="lazy"
                        srcSet="https://old.ptemagicpractice.com/wp-content/uploads/2020/07/PTE-READING-TIPS-PTE-MAGIC-PRACTICE-85x70.jpg"
                      />{" "}
                    </a>
                  </GridItem>
                  <GridItem xs={8} md={7}>
                    <div className={classes.mediaBody}>
                      {" "}
                      <a
                        href="https://old.ptemagicpractice.com/pte-reading-test-tips/"
                        title="PTE Reading Test Tips"
                      >
                        <h4> PTE Reading Test Tips</h4>
                      </a>
                    </div>
                  </GridItem>
                </GridContainer>
                <GridContainer className={classes.itemLink}>
                  <GridItem xs={4} md={5}>
                    <a href="https://old.ptemagicpractice.com/multiple-choice-single-answer/">
                      {" "}
                      <img
                        src="https://old.ptemagicpractice.com/wp-content/uploads/2020/07/PTE-READING-MULTIPLE-CHOICE-SINGLE-ANSWER-PTE-MAGIC-PRACTICE-85x70.jpg"
                        className={classes.mediaImage}
                        alt="PTE READING Test MULTIPLE CHOICE SINGLE ANSWER PTE PRACTICE TEST PTE MAGIC"
                        loading="lazy"
                        srcSet="https://old.ptemagicpractice.com/wp-content/uploads/2020/07/PTE-READING-MULTIPLE-CHOICE-SINGLE-ANSWER-PTE-MAGIC-PRACTICE-85x70.jpg 85w, https://old.ptemagicpractice.com/wp-content/uploads/2020/07/PTE-READING-MULTIPLE-CHOICE-SINGLE-ANSWER-PTE-MAGIC-PRACTICE-370x300.jpg 370w, https://old.ptemagicpractice.com/wp-content/uploads/2020/07/PTE-READING-MULTIPLE-CHOICE-SINGLE-ANSWER-PTE-MAGIC-PRACTICE-240x200.jpg 240w"
                      />{" "}
                    </a>
                  </GridItem>
                  <GridItem xs={8} md={7}>
                    <div className={classes.mediaBody}>
                      {" "}
                      <a
                        href="https://old.ptemagicpractice.com/multiple-choice-single-answer/"
                        title="PTE Speaking Short Answer Question – Exam Structure and Sample Question"
                      >
                        <h4>
                          {" "}
                          PTE Reading – Multiple Choice Single Answer – Sample
                          Question & Exam Structure
                        </h4>
                      </a>
                    </div>
                  </GridItem>
                </GridContainer>

                {/* </GridItem> */}
                <GridItem className={classes.widgetTitle}>
                  <h3>Categories</h3>
                  <div className={classes.borderBottom} />
                </GridItem>
                <GridItem className={classes.postItem1}>
                  <div className={classes.mediaBody}>
                    {" "}
                    <a href="#pablo" title="PTE Practice Test Listening">
                      <h4 className={classes.categories}>
                        {" "}
                        PTE Practice Test Listening
                      </h4>
                    </a>
                  </div>
                  <div className={classes.mediaBody}>
                    {" "}
                    <a href="#pablo" title="PTE Practice Test Reading">
                      <h4 className={classes.categories}>
                        {" "}
                        PTE Practice Test Reading
                      </h4>
                    </a>
                  </div>
                  <div className={classes.mediaBody}>
                    {" "}
                    <a href="#pablo" title="PTE Practice Test Speaking">
                      <h4 className={classes.categories}>
                        {" "}
                        PTE Practice Test Speaking
                      </h4>
                    </a>
                  </div>
                  <div className={classes.mediaBody}>
                    {" "}
                    <a href="#pablo" title="PTE Practice Test Tips">
                      <h4 className={classes.categories}>
                        {" "}
                        PTE Practice Test Tips
                      </h4>
                    </a>
                  </div>
                </GridItem>
              </GridItem>
            </GridItem>
          </GridContainer>
        </GridContainer>
      </div>
      <PTEFooter/>
    </div>
  );
}
