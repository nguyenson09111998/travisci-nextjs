/*eslint-disable*/
import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
// @material-ui/icons
import Favorite from "@material-ui/icons/Favorite";
// core components
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Parallax from "components/Parallax/Parallax.js";
import Footer from "components/Footer/Footer.js";
// sections for this page
import SectionDescription from "pages-sections/about-us/SectionDescription.js";
import SectionTeam from "pages-sections/about-us/SectionTeam.js";
import SectionServices from "pages-sections/about-us/SectionServices.js";
import SectionOffice from "pages-sections/about-us/SectionOffice.js";
import SectionContact from "pages-sections/about-us/SectionContact.js";
import logo from "assets/img/New-pte-magic-logo-1.png";
import HeaderLinksPTE from "components/Header/HeaderLinksPTE";
import Button from "components/CustomButtons/Button.js";
import ourTeamStyle from "assets/jss/nextjs-material-kit-pro/pages/ourTeamStyle.js";
import christian from "assets/img/faces/christian.jpg";
import kendall from "assets/img/faces/kendall.jpg";
import marc from "assets/img/faces/marc.jpg";
import avatar from "assets/img/faces/avatar.jpg";
import person5 from "assets/img/faces/card-profile5-square.jpg";
import camp from "assets/img/faces/camp.jpg";
import pteValue from "assets/img/pte-value.jpg";
import Knott from "assets/img/faces/Knott.jpg";
import Link from "next/link";

const useStyles = makeStyles(ourTeamStyle);

export default function OurTeam() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  });
  const classes = useStyles();

  const [pageShow, setPageShow] = React.useState(0);

  const handleClickToQuiz = (e) => {
    e.preventDefault();
    setPageShow((prev) => prev + 1);
  };
  return (
    <div>
      <Header
        brand={<img src={logo} alt={"logo"} />}
        color="gold"
        links={<HeaderLinksPTE />}
        fixed
      />
      <Parallax
        image={require("assets/img/our-team.jpg")}
        filter="dark"
        large
        style={{ marginTop: "82px" }}
      >
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem
              md={8}
              sm={8}
              className={classNames(
                classes.mlAuto,
                classes.mrAuto,
                classes.textCenter
              )}
            >
              <h1 className={classes.title}>
                Meet your team of digital warriors, ready to harness the Force
                for good
              </h1>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <GridContainer className={classes.body}>
        <GridItem xs={12} className={classes.imageContainer}>
          <GridContainer style={{ width: "100%" }}>
            <Link href="/member">
              <GridItem xs={4} className={classes.imgBlog}>
                <div className={classes.containter}>
                  <img src={christian} alt="person" className={classes.img} />
                  <div className={classes.overlay}>
                    <div className={classes.imgName}>Nattawut Comlon</div>
                    <div className={classes.imgJob}>Teacher</div>
                  </div>
                </div>
              </GridItem>
            </Link>

            <Link href="/member">
              <GridItem xs={4} className={classes.imgBlog}>
                <div className={classes.containter}>
                  <img src={kendall} alt="person" className={classes.img} />
                  <div className={classes.overlay}>
                    <div className={classes.imgName}>Nattawut Comlon</div>
                    <div className={classes.imgJob}>Teacher</div>
                  </div>
                </div>
              </GridItem>
            </Link>

            <Link href="/member">
              <GridItem xs={4} className={classes.imgBlog}>
                <div className={classes.containter}>
                  <img src={marc} alt="person" className={classes.img} />
                  <div className={classes.overlay}>
                    <div className={classes.imgName}>Nattawut Comlon</div>
                    <div className={classes.imgJob}>Teacher</div>
                  </div>
                </div>
              </GridItem>
            </Link>
          </GridContainer>
        </GridItem>
        <GridItem xs={12} className={classes.imageContainer}>
          <GridContainer style={{ width: "100%" }}>
            <Link href="/member">
              <GridItem xs={4} className={classes.imgBlog}>
                <div className={classes.containter}>
                  <img src={avatar} alt="person" className={classes.img} />
                  <div className={classes.overlay}>
                    <div className={classes.imgName}>Nattawut Comlon</div>
                    <div className={classes.imgJob}>Mentor</div>
                  </div>
                </div>
              </GridItem>
            </Link>

            <Link href="/member">
              <GridItem xs={4} className={classes.imgBlog}>
                <div className={classes.containter}>
                  <img src={person5} alt="person" className={classes.img} />
                  <div className={classes.overlay}>
                    <div className={classes.imgName}>Nattawut Comlon</div>
                    <div className={classes.imgJob}>Mentor</div>
                  </div>
                </div>
              </GridItem>
            </Link>

            <Link href="/member">
              <GridItem xs={4} className={classes.imgBlog}>
                <div className={classes.containter}>
                  <img src={camp} alt="person" className={classes.img} />
                  <div className={classes.overlay}>
                    <div className={classes.imgName}>Nattawut Comlon</div>
                    <div className={classes.imgJob}>Mentor</div>
                  </div>
                </div>
              </GridItem>
            </Link>
          </GridContainer>
        </GridItem>
        <GridItem xs={12}>
          <h1 className={classes.community}>Our Community</h1>
          <iframe
            width="100%"
            height="600px"
            src="//www.youtube.com/embed/Ufwzpb6XZEU?autoplay=1"
          ></iframe>
        </GridItem>
        <GridItem xs={12}>
          <GridContainer style={{ margin: "0px" }}>
            <GridItem xs={6} className={classes.ourValue}>
              <div className={classes.valueHeader}>Our value</div>
              <div className={classes.valueText}>
                PTE 90 teaching staff, many years of experience in teaching PTE
                have guided thousands of students successfully. With the
                understanding of the PTE test, thoughtfulness, and dedication in
                teaching methods, Trainer helps students focus their strengths
                to achieve Target fastest and most effectively.
              </div>
            </GridItem>
            <GridItem xs={6} className={classes.valueImgContainer}>
              <img src={pteValue} alt="Our Value" style={{ width: "100%" }} />
            </GridItem>
            <GridItem xs={6} className={classes.videoFrame}>
              <iframe
                width="100%"
                height="300px"
                src="//www.youtube.com/embed/6MG8sv_Ln4Y?autoplay=1"
              ></iframe>
            </GridItem>
            <GridItem xs={6} className={classes.exprienceContainer}>
              <div className={classes.exprienceText}>Need expriences?</div>
              <div className={classes.exprienceText1}>Our team got your back!</div>
            </GridItem>
          </GridContainer>
        </GridItem>
      </GridContainer>
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
