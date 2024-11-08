import "./AIScreen.scss";
import images from "../../images";
import { useState, useEffect } from "react";
import BoehringerLogo from "../../assets/icons/boehringer-logo.svg";
import NokiaLogo from "../../assets/icons/nokia-logo.svg";
import SIXLogo from "../../assets/icons/six-logo.svg";
import GeberitLogo from "../../assets/icons/geberit-logo.svg";
import ThorlabsLogo from "../../assets/icons/thorlabs-logo.svg";

const AIScreen = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === "Escape") {
        setIsModalOpen(false);
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, []);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const hotjar = document.createElement("script");
  hotjar.type = "text/javascript";
  hotjar.innerHTML = `
    (function(h,o,t,j,a,r){
        h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
        h._hjSettings={hjid:5191199,hjsv:6};
        a=o.getElementsByTagName('head')[0];
        r=o.createElement('script');r.async=1;
        r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
        a.appendChild(r);
    })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
  `;
  document.head.appendChild(hotjar);

  return (
    <>    
      <div className="hero-container">
        <div className="wrapper">
        <div className="hero-inner-container">
          <div className="text-content-wrap">
            <div className="text-content-inner">
              <div className="text-content">
                <h1>
                Strategy and people take precedence over
                AI strategy
                </h1>
                <p>
                  Network Leadership unleashes the potential of your
                  organization. <br />
                  <em>Leadership powered by Networks.</em>
                </p>
                <div className="cta-button-wrap">
                  <a className="cta-button" onClick={openModal}>
                    <span className="icon">
                      <img src={images.playIcon} alt="Play Button Icon" />
                    </span>
                    View our 30 second webinar trailer
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="image-wrapper">
            <img src={images.aiHeroImg} alt="Innovation Hero Image" />
          </div>
        </div>
        </div>
      </div>

      {isModalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <a className="close-button" onClick={closeModal}>
              <img src={images.closeIcon} alt="CloseIcon" />
            </a>
            <div className="video-wrapper">
              <iframe
                src="https://player.vimeo.com/video/1014073509?autoplay=1&title=0&byline=0&portrait=0"
                frameBorder="0"
                allow="autoplay; fullscreen"
                allowFullScreen
                title="Webinar Trailer"
              ></iframe>
            </div>
          </div>
        </div>
      )}

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
            <div className="left-side ai">
              <h2>
                A successful AI strategy relies on enhancing people's skills and
                capabilities rather than replacing them
              </h2>
              <div className="quote-wrap">
                <p className="quote-text">
                  “It’s a leader’s job to create work conditions that motivate
                  employees to be curious about how AI can help them perform
                  better.”
                </p>
                <p className="quote-author">David de Cremer</p>
                <p className="pos">Author of “The AI-Savvy Leader”</p>
              </div>
            </div>
            <div className="right-side ai">
              <h3>Successful AI implementation is a network issue:</h3>
              <h4>A network leader…</h4>
              <div className="icon-list-wrap">
                <ul className="icon-list">
                  <li>
                    <img src={images.aiIcon1Svg} alt="Innovation Icon" />
                    <p>
                      Crafts a clear vision to integrate AI within the
                      organization.
                    </p>
                  </li>
                  <li>
                    <img src={images.aiIcon2Svg} alt="Innovation Icon" />
                    <p>
                      Utilizes engagement catalyst questions to enhance
                      stakeholder involvement.
                    </p>
                  </li>
                  <li>
                    <img src={images.aiIcon3Svg} alt="Innovation Icon" />
                    <p>
                      Explores innovative approaches, empowering stakeholders to
                      influence the evolving applications of AI throughout the
                      organization.
                    </p>
                  </li>
                  <li>
                    <img src={images.aiIcon4Svg} alt="Innovation Icon" />
                    <p>
                      Commits to ongoing investment to up-skill and build
                      capacity building of all team members.
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
                        action="https://ensembleenabler.us17.list-manage.com/subscribe/post?u=23a3dfcbb4365f882ab8a864e&amp;id=b1e67698ee&amp;f_id=0032e8e3f0"
                        method="post"
                        id="mc-embedded-subscribe-form"
                        name="mc-embedded-subscribe-form"
                        className="validate"
                        target="_self"
                        noValidate
                      >
                        <div id="mc_embed_signup_scroll">
                          <div className="indicates-required">
                            <span className="asterisk">*</span> indicates
                            required
                          </div>
                          <div className="mc-field-group">
                            <label htmlFor="mce-EMAIL">
                              E-Mail <span className="asterisk">*</span>
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
                          <div hidden>
                            <input
                              type="hidden"
                              name="tags"
                              value="8333021,8333023"
                            />
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
                              name="b_23a3dfcbb4365f882ab8a864e_b1e67698ee"
                              tabIndex="-1"
                              defaultValue=""
                            />
                          </div>
                          <div className="clear">
                            <input
                              type="submit"
                              name="subscribe"
                              id="mc-embedded-subscribe"
                              className="button"
                              value="Subscribe"
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
                <h2>
                  Transform The <br /> Way You Lead
                </h2>
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
                  Discover the benefits <br /> of becoming a Network Leader.
                </h3>
                <div className="cta-link">
                  <a
                    className="cta-button"
                    href="https://cli.re/Network-Leadership-Quest"
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
};

export default AIScreen;
