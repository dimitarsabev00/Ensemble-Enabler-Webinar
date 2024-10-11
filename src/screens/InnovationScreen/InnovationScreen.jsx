import "./InnovationScreen.scss";

import PlayCircleIcon from "../../assets/icons/play-circle-icon.svg";

import BoehringerLogo from "../../assets/icons/boehringer-logo.svg";
import NokiaLogo from "../../assets/icons/nokia-logo.svg";
import SIXLogo from "../../assets/icons/six-logo.svg";
import GeberitLogo from "../../assets/icons/geberit-logo.svg";
import ThorlabsLogo from "../../assets/icons/thorlabs-logo.svg";

import ConnectionIcon from "../../assets/icons/p1-p2p-connection.svg";
import StatsPressIcon from "../../assets/icons/p1-stats-pres.svg";
import GroupIdeaIcon from "../../assets/icons/p1-group-idea.svg";
import IdeaBulbIcon from "../../assets/icons/p1-idea-bulb.svg";

import ArrowRightIcon from "../../assets/icons/arrow-right.svg";

import Section4Wallpaper1 from "../../assets/images/section4-wallpaper1.png";
import Section4Wallpaper2 from "../../assets/images/section4-wallpaper2.png";
import Section4Wallpaper3 from "../../assets/images/section4-wallpaper3.png";

import Section5BookMockup from "../../assets/images/section5-book-mockup.png";

import ProfileImageJeffreyBeeson from "../../assets/images/profileImage-jeffrey-beeson.png";

import Section6Illustration from "../../assets/images/section6-illustration.png";

import BulletIcon from "../../assets/icons/bullet-icon.svg";
const InnovationScreen = () => {
  return (
    <>
      <section className="section-1">
        <div className="background-color-container">
          <div className="background-image-container">
            <div className="section-1-content-left">
              <h2>
                Meaningful connections spark ideas for successful innovation
              </h2>
              <div className="description-in-section-2">
                <p>
                  Network Leadership unleashes the potential of your
                  organization.
                  <br />
                </p>
                <p>Leadership powered by Networks.</p>
              </div>

              <a href="#" className="cta-button">
                <img src={PlayCircleIcon} alt="" />
                <span>View our 30 second webinar trailer</span>
              </a>
            </div>
          </div>
        </div>

        <div className="image-container"></div>
      </section>

      <section className="section-2">
        <div className="section-2-content">
          <h2>Helping the most successful businesses make better decisions</h2>
          <div className="logos-wrapper">
            <div className="logos-container">
              <img src={BoehringerLogo} alt="Boehringer Ingelheim" />
              <img src={NokiaLogo} alt="Nokia" />
              <img src={SIXLogo} alt="SIX" />
              <img src={GeberitLogo} alt="Geberit" />
              <img src={ThorlabsLogo} alt="ThorLabs" />
            </div>
          </div>
        </div>
      </section>

      <section className="section-3">
        <div className="background-color-container">
          <div className="background-image-container">
            <div className="section-3-content-left">
              <h2>Connections are the new currency of our time</h2>
              <blockquote>
                “It’s a profound thought; how every person is a new door,
                opening up into other worlds.”
                <cite>Jon Guaré</cite>
              </blockquote>
            </div>

            <div className="section-3-content-right">
              <h3>Innovation is a network issue:</h3>
              <ul>
                <li>
                  <img src={ConnectionIcon} alt="Icon" />
                  Network connections eliminate the gap between you and your
                  customer.
                </li>
                <li>
                  <img src={StatsPressIcon} alt="Icon" />
                  Connections unite diverse perspectives for superior insights.
                </li>
                <li>
                  <img src={GroupIdeaIcon} alt="Icon" />
                  Serendipitous ideas arise from strong and meaningful
                  connections.
                </li>
                <li>
                  <img src={IdeaBulbIcon} alt="Icon" />
                  Diverse ideas spark the innovation that drives breakthroughs.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section-4">
        <div className="section-4-content">
          <h2>
            This network-centric approach shifts the focus to the key issues
            that matter.
          </h2>
          <a href="#" className="cta-button">
            <span>View Full Webinar</span>
            <img src={ArrowRightIcon} alt="" />
          </a>

          <div className="three-columns-container">
            <div className="three-columns-inner-container">
              <div className="column">
                <img src={Section4Wallpaper1} alt="Connections" />
                <h3>Connections</h3>
                <p>
                  The way people are connected with each other shapes the
                  organization’s effectiveness and success.
                </p>
              </div>
              <div className="column">
                <img
                  src={Section4Wallpaper2}
                  alt="Flow of Information + Energy"
                />
                <h3>Flow of Information + Energy</h3>
                <p>
                  The communication and transmission of ideas through networks
                  serve as an organization’s unique lifeblood.
                </p>
              </div>
              <div className="column">
                <img
                  src={Section4Wallpaper3}
                  alt="Advancing a Dynamic Organization"
                />
                <h3>Advancing a Dynamic Organization</h3>
                <p>
                  Networks harness collective creativity to drive growth and
                  amplify organizational impact.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-5">
        <div className="background-color-container">
          <div className="background-image-container"></div>
          <img
            src={Section5BookMockup}
            alt="Network Leadership Book"
            className="section5-book-mockup"
          />
          <div className="section-5-content">
            <div className="left-content">
              <h2>Benefit from the wisdom of a seasoned professional</h2>
              <div className="profile">
                <img
                  src={ProfileImageJeffreyBeeson}
                  alt="Jeffrey Beeson Profile"
                />
                <div className="profile-info">
                  <h3>Jeffrey Beeson, MBA/MA</h3>
                  <p>Chief Enabling Officer, Ensemble Enabler</p>
                </div>
              </div>
              <p className="profile-description">
                His business experience spans the worlds of strategy,
                organizational culture, and leadership development.
              </p>
              <a href="#" className="cta-button">
                View LinkedIn Profile
                <img src={ArrowRightIcon} alt="Arrow" />
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="section-6">
        <div className="background-color-container">
          <div className="background-image-container">
            <div className="section-6-content">
              <div className="left-content">
                <img
                  src={Section6Illustration}
                  alt="Course Image"
                  className="course-image"
                />
              </div>

              <div className="right-content">
                <span className="course-tag">ONLINE COURSE</span>
                <h2>Transform The Way You Lead</h2>
                <p className="course-description">
                  In this course you will learn:
                </p>
                <ul className="course-benefits">
                  <li>
                    <img src={BulletIcon} alt="Check" />
                    <span>Strategies</span> to effectively navigate and
                    capitalize on change
                  </li>
                  <li>
                    <img src={BulletIcon} alt="Check" />
                    <span>Insights</span> into how to leverage strategic
                    relationships to drive success
                  </li>
                  <li>
                    <img src={BulletIcon} alt="Check" />
                    <span>Methods</span> to foster seamless collaboration and
                    maximize productivity
                  </li>
                  <li>
                    <img src={BulletIcon} alt="Check" />
                    <span>Practices</span> to boost employee engagement and
                    retain top talent
                  </li>
                  <li>
                    <img src={BulletIcon} alt="Check" />
                    <span>Processes</span> to strengthen resilience against
                    unforeseen challenges
                  </li>
                  <li>
                    <img src={BulletIcon} alt="Check" />
                    <span>Structures</span> designed to nurture a culture of
                    continuous innovation
                  </li>
                </ul>
                <p className="final-description">
                  Discover the benefits of becoming a Network Leader.
                </p>
                <a href="#" className="cta-button">
                  Learn more
                  <img src={ArrowRightIcon} alt="Arrow" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default InnovationScreen;
