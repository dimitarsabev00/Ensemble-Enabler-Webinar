import "./InnovationScreen.scss";
import images from "../../images";
import PlayCircleIcon from "../../assets/icons/play-circle-icon.svg";

import BoehringerLogo from "../../assets/icons/boehringer-logo.svg";
import NokiaLogo from "../../assets/icons/nokia-logo.svg";
import SIXLogo from "../../assets/icons/six-logo.svg";
import GeberitLogo from "../../assets/icons/geberit-logo.svg";
import ThorlabsLogo from "../../assets/icons/thorlabs-logo.svg";

function InnovationScreen() {
  return (
    <>
      <div className="hero-container">
        <div className="wrapper">
          <div className="hero-inner-container">
            <div className="text-content-wrap">
              <div className="text-content">
                <h1>
                  Meaningful connections spark ideas for successful innovation
                </h1>
                <p>
                  Network Leadership unleashes the potential of your
                  organization. <br />
                  <em>Leadership powered by Networks.</em>
                </p>
                <a className="cta-button">
                  <span className="icon">
                    <img src={images.playIcon} alt="Play Button Icon" />
                  </span>
                  View our 30 second webinar trailer
                </a>
              </div>
            </div>
            <div className="image-wrapper"></div>
          </div>
        </div>
      </div>
      <div className="clients-section">
        <div className="wrapper">
          <div className="clients-section-inner">
            <p>Helping the most successful businesses make better decisions</p>
            <div className="logos-wrapper">
              <ul className="logos-container">
                <li>
                  <img src={BoehringerLogo} alt="Boehringer Ingelheim" />
                </li>
                <li>
                  <img src={NokiaLogo} alt="Nokia" />
                </li>
                <li>
                  <img src={SIXLogo} alt="SIX" />
                </li>
                <li>
                  <img src={GeberitLogo} alt="Geberit" />
                </li>
                <li>
                  <img src={ThorlabsLogo} alt="ThorLabs" />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="connections-section">
        <div className="wrapper">
          <div className="connections-section-wrap">
            <div className="left-side">
              <h2>Connections are the new currency of our time</h2>
              <div className="quote-wrap">
                <p className="quote-text">
                  “It’s a profound thought; how every person is a new door,
                  opening up into other worlds.”
                </p>
                <p className="quote-author">Jon Guaré</p>
              </div>
            </div>
            <div className="right-side">
              <h3>Innovation is a network issue:</h3>
              <div className="icon-list-wrap">
                <ul className="icon-list">
                  <li>
                    <img
                      src={images.innovationIcon1Svg}
                      alt="Innovation Icon"
                    />
                    <p>
                      Network connections eliminate the gap between you and your
                      customer.
                    </p>
                  </li>
                  <li>
                    <img
                      src={images.innovationIcon2Svg}
                      alt="Innovation Icon"
                    />
                    <p>
                      Connections unite diverse perspectives for superior
                      insights.
                    </p>
                  </li>
                  <li>
                    <img
                      src={images.innovationIcon3Svg}
                      alt="Innovation Icon"
                    />
                    <p>
                      Serendipitous ideas arise from strong and meaningful
                      connections.
                    </p>
                  </li>
                  <li>
                    <img
                      src={images.innovationIcon4Svg}
                      alt="Innovation Icon"
                    />
                    <p>
                      Diverse ideas spark the innovation that drives
                      breakthroughs.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="centric-approach-section">
        <div className="wrapper">
          <div className="centric-approach-inner">
            <div className="intro-heading">
              <h2>
                This network-centric approach shifts the focus to the key issues
                that matter.
              </h2>
              {/* <button className="cta-button">
                View Full Webinar
                <span className="icon">
                  <img src={images.arrowRight} alt="Arrow Right Icon" />
                </span>
              </button> */}
            </div>
            <div className="centric-approach-list">
              <ul>
                <li>
                  <img
                    src={images.connectionImg}
                    alt="Centric Approach Image 1"
                  />
                  <h3>Connections</h3>
                  <p>
                    The way people are connected with each other shapes the
                    organization’s effectiveness and success
                  </p>
                </li>
                <li>
                  <img
                    src={images.flowOfInfoImg}
                    alt="Centric Approach Image 2"
                  />
                  <h3>Flow of Information + Energy</h3>
                  <p>
                    The communication and transmission of ideas though networks
                    serve as an organization’s unique lifeblood
                  </p>
                </li>
                <li>
                  <img
                    src={images.advancingImg}
                    alt="Centric Approach Image 3"
                  />
                  <h3>Advancing a Dynamic Organization</h3>
                  <p>
                    Networks harness collective creativity to drive growth and
                    amplify organizational impact
                  </p>
                </li>
              </ul>
            </div>
            <div className="subscription-section">
              <h3>
                To learn more about expanding your leadership skills and
                boosting your organization's performance, view our in-depth
                webinar:
              </h3>
              <div className="form-outer">
                <div className="webinar-img">
                  <img src={images.webinarImg} alt="Webinar Image" />
                </div>
                <div className="form-shell">
                  <div id="mc_embed_shell">
                    <div id="mc_embed_signup">
                      <form
                        action="https://ensembleenabler.us17.list-manage.com/subscribe/post?u=23a3dfcbb4365f882ab8a864e&amp;id=b1e67698ee&amp;f_id=0004e8e3f0"
                        method="post"
                        id="mc-embedded-subscribe-form"
                        name="mc-embedded-subscribe-form"
                        className="validate"
                        target="_self"
                        noValidate
                      >
                        <div id="mc_embed_signup_scroll">
                          <div className="mc-field-group">
                            <label htmlFor="mce-EMAIL">
                              Email <span className="asterisk">*</span>
                            </label>
                            <input
                              type="email"
                              name="EMAIL"
                              className="required email"
                              id="mce-EMAIL"
                              required
                              defaultValue=""
                            />
                          </div>
                          <div className="mc-field-group">
                            <label htmlFor="mce-FNAME">
                              First Name <span className="asterisk">*</span>
                            </label>
                            <input
                              type="text"
                              name="FNAME"
                              className="required text"
                              id="mce-FNAME"
                              required
                              defaultValue=""
                            />
                          </div>
                          <div className="mc-field-group">
                            <label htmlFor="mce-LNAME">
                              Last Name <span className="asterisk">*</span>
                            </label>
                            <input
                              type="text"
                              name="LNAME"
                              className="required text"
                              id="mce-LNAME"
                              required
                              defaultValue=""
                            />
                          </div>
                          <div hidden="">
                            <input type="hidden" name="tags" value="8333000" />
                          </div>
                          <div id="mce-responses" className="clear">
                            <div
                              className="response"
                              id="mce-error-response"
                              style={{ display: "none" }}
                            ></div>
                            <div
                              className="response"
                              id="mce-success-response"
                              style={{ display: "none" }}
                            ></div>
                          </div>
                          <div
                            style={{ position: "absolute", left: "-5000px" }}
                            aria-hidden="true"
                          >
                            <input
                              type="text"
                              name="b_23a3dfcbb4365f882ab8a864e_9db602db15"
                              tabIndex="-1"
                              defaultValue=""
                            />
                          </div>
                          <div className="indicates-required">
                            <span className="asterisk">*</span> indicates
                            required
                          </div>
                          <div className="clear">
                            <input
                              type="submit"
                              name="subscribe"
                              id="mc-embedded-subscribe"
                              className="button"
                              value="View Full Webinar"
                            />
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="gdpr">
                    <p>
                      We comply with all European GDPR guidelines.  Your data
                      will not be shared with any Third Parties. You can
                      unsubscribe from our e-mails at any time. By downloading
                      this flight guide you accept our privacy policy and agree
                      that we may contact you. Read more about our privacy
                      policy{" "}
                      <a
                        href="https://www.ensembleenabler.com/en/privacy-policy/"
                        target="_blank"
                      >
                        here
                      </a>
                      .
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="network-leadership-section">
        <div className="wrapper">
          <div className="network-leadership-inner">
            <div className="coral-el">
              <img src={images.colarSvg} alt="Coral Element" />
            </div>
            <div className="left-side">
              <h2>Benefit from the wisdom of a seasoned professional</h2>
              <div className="profile-wrap">
                <div className="profile-img">
                  <img
                    src={images.jeffreyBeesonPng}
                    alt="Jeffrey Beeson Image"
                  />
                </div>
                <div className="profile-credentials">
                  <h3>
                    Jeffrey Beeson,
                    <br /> MBA/MA
                  </h3>
                  <p>
                    Chief Enabling Officer, <br />
                    Ensemble Enabler
                  </p>
                </div>
              </div>
              <p>
                His business experience spans the worlds of strategy,
                organizational culture and leadership development
              </p>
              <div className="linkedin-link">
                <a
                  className="cta-button"
                  href="https://www.linkedin.com/in/jeffreybeeson/"
                  target="_blank"
                >
                  View LinkedIn Profile
                  <span className="icon">
                    <img src={images.arrowRight} alt="Arrow Right Icon" />
                  </span>
                </a>
              </div>
            </div>
            <div className="right-side">
              <div className="book-mockup">
                <img
                  src={images.bookMockupImg}
                  alt="Network Leadership Mcokup"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="transform-section">
        <div className="wrapper">
          <div className="transform-inner">
            <div className="left-side">
              <div className="lead-img">
                <img src={images.section6IllustrationPng} alt="Leader Image" />
              </div>
            </div>
            <div className="right-side">
              <div className="intro-heading">
                <p>Online Course</p>
                <h2>Transform The <br/> Way You Lead</h2>
              </div>
              <div className="course-content">
                <h3 className="coure-desc">In this course you will learn:</h3>
                <ul className="course-content">
                  <li>
                    <img src={images.coralIconSvg} alt="Coral Icon" />
                    <p>
                      <b>Strategies</b> to effectively navigate and capitalize
                      on change.
                    </p>
                  </li>
                  <li>
                    <img src={images.coralIconSvg} alt="Coral Icon" />
                    <p>
                      <b>Insights</b> into how to leverage strategic
                      relationships to drive success.
                    </p>
                  </li>
                  <li>
                    <img src={images.coralIconSvg} alt="Coral Icon" />
                    <p>
                      <b>Methods</b> to foster seamless collaboration and
                      maximize productivity.
                    </p>
                  </li>
                  <li>
                    <img src={images.coralIconSvg} alt="Coral Icon" />
                    <p>
                      <b>Practices</b> to boost employee engagement and retain
                      top talent.
                    </p>
                  </li>
                  <li>
                    <img src={images.coralIconSvg} alt="Coral Icon" />
                    <p>
                      <b>Processes</b> to strengthen resilience against
                      unforeseen challenges.
                    </p>
                  </li>
                  <li>
                    <img src={images.coralIconSvg} alt="Coral Icon" />
                    <p>
                      <b>Structures</b> designed to nurture a culture of
                      continuous innovation
                    </p>
                  </li>
                </ul>
                
              </div>
              <div className="course-cta">
                  <h3 className="cta">
                    Discover the benefits <br/> of becoming a Network Leader.
                  </h3>
                  <div className="cta-link">
                    <a
                      className="cta-button"
                      href="https://www.linkedin.com/in/jeffreybeeson/"
                      target="_blank"
                    >
                      Learn more
                      <span className="icon">
                        <img src={images.arrowRight} alt="Arrow Right Icon" />
                      </span>
                    </a>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default InnovationScreen;

// const InnovationScreen = () => {
//   return (
//     <>

//       <div className="section-1-wrapper">
//         <section className="section-1">
//           <div className="section-1-content">
//             <h1>
//               Meaningful connections spark ideas for successful innovation
//             </h1>
//             <div className="description-in-section-2">
//               <p>
//                 Network Leadership unleashes the potential of your organization.
//                 <br />
//               </p>
//               <p>Leadership powered by Networks.</p>
//             </div>

//             <a href="#" className="cta-button">
//               <img src={PlayCircleIcon} alt="" />
//               <span>View our 30 second webinar trailer</span>
//             </a>
//           </div>
//           <img src={images.innovationHeroImg} className="section1Photo" />
//         </section>
//       </div>

//       <section className="section-2">
//         <div className="section-2-content">
//           <h2>Helping the most successful businesses make better decisions</h2>
//           <div className="logos-wrapper">
//             <div className="logos-container">
//               <img src={BoehringerLogo} alt="Boehringer Ingelheim" />
//               <img src={NokiaLogo} alt="Nokia" />
//               <img src={SIXLogo} alt="SIX" />
//               <img src={GeberitLogo} alt="Geberit" />
//               <img src={ThorlabsLogo} alt="ThorLabs" />
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* <div className="section-3-wrapper">
//         <section className="section-3">
//           <div className="section-3-content-left">
//             <h2>Connections are the new currency of our time</h2>
//             <blockquote>
//               “It’s a profound thought; how every person is a new door, opening
//               up into other worlds.”
//               <cite>Jon Guaré</cite>
//             </blockquote>
//           </div>

//           <div className="section-3-content-right">
//             <h3>Innovation is a network issue:</h3>
//             <ul>
//               <li>
//                 <img src={ConnectionIcon} alt="Icon" />
//                 Network connections eliminate the gap between you and your
//                 customer.
//               </li>
//               <li>
//                 <img src={StatsPressIcon} alt="Icon" />
//                 Connections unite diverse perspectives for superior insights.
//               </li>
//               <li>
//                 <img src={GroupIdeaIcon} alt="Icon" />
//                 Serendipitous ideas arise from strong and meaningful
//                 connections.
//               </li>
//               <li>
//                 <img src={IdeaBulbIcon} alt="Icon" />
//                 Diverse ideas spark the innovation that drives breakthroughs.
//               </li>
//             </ul>
//           </div>
//         </section>
//       </div>
//       <div className="section-4-wrapper">
//         <section className="section-4">
//           <div className="section-4-content">
//             <h2>
//               This network-centric approach shifts the focus to the key issues
//               that matter.
//             </h2>
//             <a href="#" className="cta-button">
//               <span>View Full Webinar</span>
//               <img src={ArrowRightIcon} alt="" />
//             </a>

//             <div className="three-columns-container">
//               <div className="three-columns-inner-container">
//                 <div className="column">
//                   <img src={Section4Wallpaper1} alt="Connections" />
//                   <h3>Connections</h3>
//                   <p>
//                     The way people are connected with each other shapes the
//                     organization’s effectiveness and success.
//                   </p>
//                 </div>
//                 <div className="column">
//                   <img
//                     src={Section4Wallpaper2}
//                     alt="Flow of Information + Energy"
//                   />
//                   <h3>Flow of Information + Energy</h3>
//                   <p>
//                     The communication and transmission of ideas through networks
//                     serve as an organization’s unique lifeblood.
//                   </p>
//                 </div>
//                 <div className="column">
//                   <img
//                     src={Section4Wallpaper3}
//                     alt="Advancing a Dynamic Organization"
//                   />
//                   <h3>Advancing a Dynamic Organization</h3>
//                   <p>
//                     Networks harness collective creativity to drive growth and
//                     amplify organizational impact.
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>
//       </div>
//       <div className="section-5-wrapper">
//         <section className="section-5">
//           <div className="background-image-container"></div>
//           <img
//             src={Section5BookMockup}
//             alt="Network Leadership Book"
//             className="section5-book-mockup"
//           />
//           <div className="section-5-content">
//             <div className="left-content">
//               <h2>Benefit from the wisdom of a seasoned professional</h2>
//               <div className="profile">
//                 <img
//                   src={ProfileImageJeffreyBeeson}
//                   alt="Jeffrey Beeson Profile"
//                 />
//                 <div className="profile-info">
//                   <h3>Jeffrey Beeson, MBA/MA</h3>
//                   <p>Chief Enabling Officer, Ensemble Enabler</p>
//                 </div>
//               </div>
//               <p className="profile-description">
//                 His business experience spans the worlds of strategy,
//                 organizational culture, and leadership development.
//               </p>
//               <a href="#" className="cta-button">
//                 View LinkedIn Profile
//                 <img src={ArrowRightIcon} alt="Arrow" />
//               </a>
//             </div>
//           </div>
//         </section>
//       </div> */}

//       {/* <section className="section-6">
//         <div className="background-color-container">
//           <div className="background-image-container">
//             <div className="section-6-content">
//               <div className="left-content">
//                 <img
//                   src={Section6Illustration}
//                   alt="Course Image"
//                   className="course-image"
//                 />
//               </div>

//               <div className="right-content">
//                 <span className="course-tag">ONLINE COURSE</span>
//                 <h2>Transform The Way You Lead</h2>
//                 <p className="course-description">
//                   In this course you will learn:
//                 </p>
//                 <ul className="course-benefits">
//                   <li>
//                     <img src={BulletIcon} alt="Check" />
//                     <span>Strategies</span> to effectively navigate and
//                     capitalize on change
//                   </li>
//                   <li>
//                     <img src={BulletIcon} alt="Check" />
//                     <span>Insights</span> into how to leverage strategic
//                     relationships to drive success
//                   </li>
//                   <li>
//                     <img src={BulletIcon} alt="Check" />
//                     <span>Methods</span> to foster seamless collaboration and
//                     maximize productivity
//                   </li>
//                   <li>
//                     <img src={BulletIcon} alt="Check" />
//                     <span>Practices</span> to boost employee engagement and
//                     retain top talent
//                   </li>
//                   <li>
//                     <img src={BulletIcon} alt="Check" />
//                     <span>Processes</span> to strengthen resilience against
//                     unforeseen challenges
//                   </li>
//                   <li>
//                     <img src={BulletIcon} alt="Check" />
//                     <span>Structures</span> designed to nurture a culture of
//                     continuous innovation
//                   </li>
//                 </ul>
//                 <p className="final-description">
//                   Discover the benefits of becoming a Network Leader.
//                 </p>
//                 <a href="#" className="cta-button">
//                   Learn more
//                   <img src={ArrowRightIcon} alt="Arrow" />
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section> */}
//     </>
//   );
// };

// export default InnovationScreen;
