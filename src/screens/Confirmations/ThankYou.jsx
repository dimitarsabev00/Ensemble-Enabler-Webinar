import React from "react";
import images from "../../images";
import "./Confirmations.scss";

function ThankYou() {
  return (
    <div className="ty-section">
      <div className="wrapper">
        <div className="ty-section-inner">
          <div className="profile-img">
            <img src={images.jeffreyTy} alt="Jeffrey Beeson Image" />
          </div>
          <div className="text-content">
            <h1>Thank you for your confirmation!</h1>
            <h2>Your video link is waiting for you.</h2>
            <ul>
              <li>
                We have sent you another e-mail with the requested link to the
                webinar recording. Just open it up, click on the link and enjoy
                the watch!
              </li>
            </ul>
            <p>
              If you have any questions, you can reach us at: <br />
              <a href="mailto:value@ensembleenabler.com">
                {" "}
                value@ensembleenabler.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ThankYou;
