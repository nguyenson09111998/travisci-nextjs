/*eslint-disable*/
import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react components used to create a google map
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// core components
import Header from "components/Header/Header.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";

import contactUsStyle from "assets/jss/nextjs-material-kit-pro/pages/contactUsStyle.js";
import "assets/css/nextjs-material-kit-pro.css";
import PhoneIcon from "components/Icon/PhoneIcon.jsx";
import AddressIcon from "components/Icon/AddressIcon.jsx";
import ClockIcon from "components/Icon/ClockIcon.jsx";
import MailIcon from "components/Icon/MailIcon.jsx";
import PinIcon from "components/Icon/PinIcon.jsx";
import Banner from "components/Parallax/Banner.js";
import logo from "assets/img/New-pte-magic-logo-1.png";
import HeaderLinksPTE from "components/Header/HeaderLinksPTE";
import Footer from "components/Footer/Footer.js";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import PTEFooter from "../components/Footer/PTEFooter";
import BlogCard from "pages-sections/blog-posts/BlogCard.js";

const styles = (theme) => ({
  ...contactUsStyle,
  container: {
    display: "flex",
    justifyContent: "center",
  },
  section: {
    maxWidth: "1240px",
    marginTop: 100,
  },
  //   contactContent: {
  //     maxWidth: 1240,
  //   },
  //   contactContainer: {
  //     display: "flex",
  //     justifyCOntent: "space-between",
  //     marginLeft: "-15px",
  //     "& p": {
  //       fontSize: "16px",
  //       marginBottom: "25px",
  //       color: "#677294",
  //     },
  //   },
  blogListItem: {
    position: "relative",
  },
  imgFluid: {
    maxWidth: "100%",
    marginTop: "50px",
    borderRadius: "6px",
    marginLeft: "15px",
    [theme.breakpoints.down("xs")]: {
      maxWidth: "90%",
    },
  },
  postDate: {
    position: "absolute",
    width: "83px",
    height: "71px",
    //margin: "10px 0 0 10px",
    borderRadius: "4px",
    backgroundColor: "#fbfbfd",
    left: "45px",
    top: "65px",
    borderRadius: "4px",
    textAlign: "center",
    color: "#5e2ced",
    zIndex: "1",
    "& h2": {
      fontSize: "35px",
      fontWeight: "600",
      marginTop: "4.5px",
      lineHeight: "1em",
    },
    "& span": {
      display: "block",
      fontSize: "15px",
      fontWeight: "400",
      marginTop: "-5px",
    },
    [theme.breakpoints.down("xs")]: {
      left: "45px",
    },
    [theme.breakpoints.up("xl")]: {
      left: "45px",
    },
  },
  blogContent: {
    "&p": {
      fontFamily: " Poppins, sans-serif",
      fontSize: 16,
      marginBottom: 25,
      fontWeight: 400,
    },
  },
  blockQuote: {
    borderRadius: "10px",
    boxShadow: "0 0.5rem 1rem rgba(0, 0, 0, 0.15)",
    borderLeft: "3px solid #5e2ced",
    padding: "25px 10px 25px 25px",
    "& i": {
      fontSize: "30px",
      color: "#5e2ced",
      paddingBottom: "12px",
      display: "inline-block",
      fontWeight: "900",
    },
    "& p": {
      fontFamily: " Poppins, sans-serif",
      fontSize: 20,
      fontWeight: 600,
      marginBottom: 0,
      color: "#525c7c",
    },
  },
  btnLink: {
    display: "flex",
    justifyContent: "space-between",
    marginLeft: "-15px",
    marginRight: "5px",
    lineHeight: "1",
  },
  share: {
    display: "flex",
    color: "#677294",
    paddingLeft: "0px",
  },
  listIconShare: {
    "& a": {
      margin: "0 15px 0 0 ",
      color: "#677294",
      [theme.breakpoints.down("xs")]: {
        margin: "0 9px 0 0 ",
      },
    },
  },
  btnText: {
    fontSize: "13px",
    paddingRight: "0px",
    color: "#677294",
  },
  postTags: {
    marginTop: "20px",
    paddingLeft: "0px",
    "& a": {
      color: "#07070a",
      padding: "0px 16px",
      fontSize: "12px",
      background: "#f0f2f9",
      borderRadius: "4px",
      margin: "5px 4px",
      display: "inline-block",
      transition: "all 0.2s linear",
      fontWeight: "300",
    },
  },
  postAuthor: {
    background: "#f3f5fa",
    borderRadius: "4px",
    padding: "35px 40px",
    alignItems: "center",
    display: "flex",
    margin: "20px",
    [theme.breakpoints.down("xs")]: {
      margin: "10px",
      flexDirection: "column",
    },
  },
  imgRounded: {
    borderRadius: "50%",
    width: "100px",
    height: "100px",
    marginRight: "30px",
  },
  blogTitles: {
    fontWeight: 600,
    fontSize: "24px",
    color: "#282835",
    marginBottom: "30px",
  },
  commentReply: {
    float: "right",
    marginTop: "-55px",
  },
  commentInner: {
    marginRight: "0px",
    paddingLeft: "15px",
  },
  emailForm: {
    width: "100%",
  },
  searchForm: {
    position: "relative",
    display: "flex",
    alignItems: "stretch",
    width: "100%",
    borderRadius: "10px",
    "&:hover": {
      border: "1px solid #007bff",
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
      border: "1px solid #007bff",
    },
  },
  formComment: {
    height: "120px",
    width: "100%",
    padding: " 20px 30px",
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
      border: "1px solid #007bff",
    },
  },
});

const useStyles = makeStyles(styles);

export default function ContactUsPage() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  });
  const classes = useStyles();
  return (
    <div style={{ lineHeight: "28px", fontFamily: " Poppins, sans-serif" }}>
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
        title="Why I say old chap that is spiffing bodge, blag pardon."
        subtitle=""
      />
      <div className={classNames(classes.main)}>
        <div className={classes.container}>
          <GridContainer className={classes.section}>
            <GridItem xs={12} md={12} className={classes.blogListItem}>
              <img
                className={classes.imgFluid}
                src="https://onepage.saasland.droitthemes.com/wp-content/uploads/2019/01/image.png"
              />
              <GridItem className={classes.postDate}>
                <a href="https://onepage.saasland.droitthemes.com/2018/11/14/">
                  {" "}
                  <h2>
                    14 <span> Nov </span>
                  </h2>{" "}
                </a>
              </GridItem>{" "}
              <GridItem className={classes.blogContent}>
                <p>
                  Cras mush pardon you knees up he lost his bottle it’s all gone
                  to pot faff about porkies arse, barney argy-bargy cracking
                  goal loo cheers spend a penny bugger all mate in my flat,
                  hunky-dory well get stuffed mate David morish bender lavatory.
                  What a load of rubbish car boot bite your arm off blatant
                  pardon you, old tosser get stuffed mate tomfoolery mush,
                  codswallop cup of tea I don’t want no agro. Off his nut show
                  off show off pick your nose and blow.!
                </p>
                <p>
                  Why I say old chap that is, spiffing jolly good a load of old
                  tosh spend a penny tosser arse over tit, excuse my French owt
                  to do with me up the kyver matie boy at public school. Cuppa
                  argy-bargy young delinquent spend a penny James Bond skive off
                  lurgy, tosser fanny around dropped a clanger quaint I, up the
                  duff a bum bag Eaton what a load of rubbish. Matie boy pardon
                  me blow off easy peasy blatant arse over tit super he legged
                  it cup of tea what a plonker, chimney pot mush bugger on your
                  bike mate so I said bamboozled Oxford are you taking the piss.
                  Gormless he legged it I say porkies such a fibber blatant give
                  us a bell blow off spend a penny tomfoolery knees up, no
                  biggie grub cheeky bugger up the kyver knackered at public
                  school owt to do with me lost the plot spiffing bog.
                </p>
                <blockquote className={classes.blockQuote}>
                  <i class="fas fa-quote-left"></i>
                  <p>
                    Elizabeth ummm I’m telling bodge spend a penny say wellies
                    say James Bond, bubble and squeak a such a fibber you mug
                    quaint cack what.!
                  </p>
                </blockquote>
                <p>
                  Bloke cracking goal the full monty get stuffed mate posh
                  wellies fantastic knackered tickety-boo Harry porkies, mush
                  excuse my French bender down the pub Oxford bum bag gutted
                  mate car boot pukka loo it’s your round, cor blimey guvnor is
                  on your bike mate cup of char some dodgy chav blag happy days
                  nancy boy hotpot.
                </p>
                <p>
                  Cras chinwag brown bread Eaton cracking goal so I said a load
                  of old tosh baking cakes, geeza arse it’s your round grub
                  sloshed burke, my good sir chancer he legged it he lost his
                  bottle pear shaped bugger all mate. Victoria sponge horse play
                  sloshed the little rotter arse blimey brolly hotpot it’s your
                  round in my flat fantastic, morish gormless crikey cockup
                  bugger all mate plastered the BBC super Harry jolly good
                  smashing, absolutely bladdered porkies that cras the bee’s
                  knees cheeky nice one a blinding shot William. Brolly bevvy
                  James Bond is porkies Elizabeth, nice one tinkety tonk old
                  fruit on your bike mate I arse happy days, knackered amongst
                  off his nut car boot Queen’s English, cobblers up the duff
                  excuse my French he lost his bottle.
                </p>
                <GridItem className={classes.btnLink}>
                  <GridItem xs={8} md={10} className={classes.share}>
                    Share:
                    <GridItem xs={12} className={classes.listIconShare}>
                      <a href="https://facebook.com/sharer/sharer.php?u=https://onepage.saasland.droitthemes.com/why-i-say-old-chap-that-is-spiffing-bodge-blag-pardon/">
                        <i class="fab fa-facebook-f"></i>
                      </a>

                      <a href="https://facebook.com/sharer/sharer.php?u=https://onepage.saasland.droitthemes.com/why-i-say-old-chap-that-is-spiffing-bodge-blag-pardon/">
                        <i class="fab fa-twitter"></i>
                      </a>

                      <a href="https://facebook.com/sharer/sharer.php?u=https://onepage.saasland.droitthemes.com/why-i-say-old-chap-that-is-spiffing-bodge-blag-pardon/">
                        <i class="fab fa-pinterest-p"></i>
                      </a>

                      <a href="https://facebook.com/sharer/sharer.php?u=https://onepage.saasland.droitthemes.com/why-i-say-old-chap-that-is-spiffing-bodge-blag-pardon/">
                        <i class="fab fa-linkedin-in"></i>
                      </a>
                    </GridItem>
                  </GridItem>
                  <GridItem xs={4} md={2} className={classes.btnText}>
                    <a
                      href="https://old.ptemagicpractice.com/pte-crashing-tips-ebook/#comments"
                      className={classes.btnText}
                    >
                      <i class="far fa-comment"></i> No Comments
                    </a>
                  </GridItem>
                </GridItem>
                <GridItem className={classes.postTags}>
                  {" "}
                  TAGS :{" "}
                  <a
                    href="https://onepage.saasland.droitthemes.com/tag/saasland/"
                    rel="tag"
                  >
                    Saasland
                  </a>{" "}
                  <a
                    href="https://onepage.saasland.droitthemes.com/tag/ui-ux-design/"
                    rel="tag"
                  >
                    UI/UX Design
                  </a>{" "}
                  <a
                    href="https://onepage.saasland.droitthemes.com/tag/wheels/"
                    rel="tag"
                  >
                    Wheels
                  </a>
                </GridItem>
              </GridItem>
            </GridItem>
            <GridItem xs={12} md={12} className={classes.postAuthor}>
              <img
                alt="Shahadat"
                src="https://secure.gravatar.com/avatar/29bcdc9972fc678d8c132abc15cce0a8?s=90&d=mm&r=g"
                srcSet="https://secure.gravatar.com/avatar/80c3cc14437943a483dac71412fd304d?s=180&d=mm&r=g 2x"
                className={classes.imgRounded}
              />
              <div className={classes.mediaBody}>
                <div className={classes.commentInfo}>
                  <h3> Shahadat </h3>
                </div>
                <p>
                  {" "}
                  Magnam laudantium, eligendi quo maxime ultrices repudiandae
                  odit rerum et eleifend, molestiae penatibus? Natus, cillum
                  eros, mattis occaecat condimentum lorem nulla expedita ut
                  natus!{" "}
                </p>
              </div>
            </GridItem>
            <GridItem xs={12} md={12} className={classes.blogRelatedPost}>
              <h2 className={classes.blogTitles}> Related Post </h2>
              <GridContainer>
                <GridItem xs={12} md={4} sm={6}>
                  <BlogCard
                    title="Doloremque velit sapien labore eius lopren itna"
                    subtitle="James Bond skive off lurgy, tosser fanny around dropped a clanger quaint I, up the duff"
                    day="14"
                    month="Jan"
                    img="https://onepage.saasland.droitthemes.com/wp-content/uploads/2018/11/099.jpg"
                    href="/blog-single-post"
                  />
                </GridItem>
                <GridItem xs={12} md={4} sm={6}>
                  <BlogCard
                    title="Doloremque velit sapien labore eius lopren itna"
                    subtitle="James Bond skive off lurgy, tosser fanny around dropped a clanger quaint I, up the duff"
                    day="14"
                    month="Jan"
                    img="https://onepage.saasland.droitthemes.com/wp-content/uploads/2018/11/099.jpg"
                    href="/blog-single-post"
                  />
                </GridItem>
                <GridItem xs={12} md={4} sm={6}>
                  <BlogCard
                    title="Doloremque velit sapien labore eius lopren itna"
                    subtitle="James Bond skive off lurgy, tosser fanny around dropped a clanger quaint I, up the duff"
                    day="14"
                    month="Jan"
                    img="https://onepage.saasland.droitthemes.com/wp-content/uploads/2018/11/099.jpg"
                    href="/blog-single-post"
                  />
                </GridItem>
              </GridContainer>
            </GridItem>
            <GridItem xs={12} md={12} className={classes.commentInner}>
              <h2 className={classes.blogTitles}> 3 Comments </h2>
              <GridItem
                Itemxs={12}
                md={12}
                style={{ marginLeft: "0px" }}
                className={classes.postAuthor}
              >
                <img
                  alt="Shahadat"
                  src="https://secure.gravatar.com/avatar/29bcdc9972fc678d8c132abc15cce0a8?s=90&d=mm&r=g"
                  srcSet="https://secure.gravatar.com/avatar/80c3cc14437943a483dac71412fd304d?s=180&d=mm&r=g 2x"
                  className={classes.imgRounded}
                />
                <div className={classes.mediaBody}>
                  <div className={classes.commentInfo}>
                    <h3> Shahadat </h3>
                  </div>
                  <div className={classes.commentDate}> November 5, 2019 </div>
                  <a
                    rel="nofollow"
                    className={classes.commentReply}
                    href="/why-i-say-old-chap-that-is-spiffing-bodge-blag-pardon/?replytocom=21#respond"
                  >
                    Reply
                    <i class="fas fa-arrow-right"></i>
                  </a>
                  <p>
                    {" "}
                    Magnam laudantium, eligendi quo maxime ultrices repudiandae
                    odit rerum et eleifend, molestiae penatibus? Natus, cillum
                    eros, mattis occaecat condimentum lorem nulla expedita ut
                    natus!{" "}
                  </p>
                </div>
              </GridItem>
              <GridItem
                xs={12}
                md={12}
                style={{ marginLeft: "0px" }}
                className={classes.postAuthor}
              >
                <img
                  alt="Shahadat"
                  src="https://secure.gravatar.com/avatar/29bcdc9972fc678d8c132abc15cce0a8?s=90&d=mm&r=g"
                  srcSet="https://secure.gravatar.com/avatar/80c3cc14437943a483dac71412fd304d?s=180&d=mm&r=g 2x"
                  className={classes.imgRounded}
                />
                <div className={classes.mediaBody}>
                  <div className={classes.commentInfo}>
                    <h3> Shahadat </h3>
                  </div>
                  <div className={classes.commentDate}> November 5, 2019 </div>
                  <a
                    rel="nofollow"
                    className={classes.commentReply}
                    href="/why-i-say-old-chap-that-is-spiffing-bodge-blag-pardon/?replytocom=21#respond"
                  >
                    Reply
                    <i class="fas fa-arrow-right"></i>
                  </a>
                  <p>
                    {" "}
                    Magnam laudantium, eligendi quo maxime ultrices repudiandae
                    odit rerum et eleifend, molestiae penatibus? Natus, cillum
                    eros, mattis occaecat condimentum lorem nulla expedita ut
                    natus!{" "}
                  </p>
                </div>
              </GridItem>
              <GridItem
                xs={12}
                md={12}
                style={{ marginLeft: "0px" }}
                className={classes.postAuthor}
              >
                <img
                  alt="Shahadat"
                  src="https://secure.gravatar.com/avatar/29bcdc9972fc678d8c132abc15cce0a8?s=90&d=mm&r=g"
                  srcSet="https://secure.gravatar.com/avatar/80c3cc14437943a483dac71412fd304d?s=180&d=mm&r=g 2x"
                  className={classes.imgRounded}
                />
                <div className={classes.mediaBody}>
                  <div className={classes.commentInfo}>
                    <h3> Shahadat </h3>
                  </div>
                  <div className={classes.commentDate}> November 5, 2019 </div>
                  <a
                    rel="nofollow"
                    className={classes.commentReply}
                    href="/why-i-say-old-chap-that-is-spiffing-bodge-blag-pardon/?replytocom=21#respond"
                  >
                    Reply
                    <i class="fas fa-arrow-right"></i>
                  </a>
                  <p>
                    {" "}
                    Magnam laudantium, eligendi quo maxime ultrices repudiandae
                    odit rerum et eleifend, molestiae penatibus? Natus, cillum
                    eros, mattis occaecat condimentum lorem nulla expedita ut
                    natus!{" "}
                  </p>
                </div>
              </GridItem>
            </GridItem>
            <GridItem xs={12} md={12} className={classes.commentInner}>
              <h2 className={classes.blogTitles}>Leave a Comment </h2>
              <GridContainer>
                <GridItem xs={12} md={6}>
                  <form
                    action="https://old.ptemagicpractice.com/"
                    className={classes.emailForm}
                  >
                    {" "}
                    <input
                      className={classes.formControl}
                      placeholder="Email"
                    />{" "}
                  </form>
                </GridItem>
                <GridItem xs={12} md={6}>
                  <form
                    action="https://old.ptemagicpractice.com/"
                    className={classes.namelForm}
                  >
                    {" "}
                    <input
                      className={classes.formControl}
                      placeholder="Name"
                    />{" "}
                  </form>
                </GridItem>
                <GridItem xs={12} md={12}>
                  <form
                    action="https://old.ptemagicpractice.com/"
                    className={classes.namelForm}
                  >
                    {" "}
                    <input
                      className={classes.formControl}
                      placeholder="Website"
                    />{" "}
                  </form>
                </GridItem>
                <GridItem xs={12} md={12}>
                  <input type="checkbox" defaultValue="yes" />
                  <label>
                    Save my name, email, and website in this browser for the
                    next time I comment.
                  </label>
                </GridItem>
                <GridItem xs={12} md={12}>
                  <form
                    action="https://old.ptemagicpractice.com/"
                    className={classes.namelForm}
                  >
                    {" "}
                    <textarea
                      className={classes.formComment}
                      placeholder="Comment"
                      defaultValue={""}
                    />
                  </form>
                </GridItem>
              </GridContainer>
            </GridItem>
          </GridContainer>
        </div>
      </div>
      <PTEFooter />
    </div>
  );
}
