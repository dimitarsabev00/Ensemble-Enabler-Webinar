import React from "react";
import images from "../../images";
import "./Confirmations.scss";
import { useEffect } from "react";

function ThankYou() {
  useEffect(() => {
    // LinkedIn Partner ID Setup
    const script1 = document.createElement("script");
    script1.type = "text/javascript";
    script1.innerHTML = `
      _linkedin_partner_id = "1841161";
      window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
      window._linkedin_data_partner_ids.push(_linkedin_partner_id);
    `;
    document.head.appendChild(script1);

    // LinkedIn Tracking Script
    const script2 = document.createElement("script");
    script2.type = "text/javascript";
    script2.innerHTML = `
      (function(l) {
          if (!l) {
              window.lintrk = function(a, b) {
                  window.lintrk.q.push([a, b]);
              };
              window.lintrk.q = [];
          }
          var s = document.getElementsByTagName("script")[0];
          var b = document.createElement("script");
          b.type = "text/javascript";
          b.async = true;
          b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
          s.parentNode.insertBefore(b, s);
      })(window.lintrk);
    `;
    document.head.appendChild(script2);

    // NoScript Fallback (this does not need to be a script, but appended as a noscript tag)
    const noScript = document.createElement("noscript");
    noScript.innerHTML = `
      <img height="1" width="1" style="display:none;" alt=""
      src="https://px.ads.linkedin.com/collect/?pid=1841161&fmt=gif" />
    `;
    document.body.appendChild(noScript);

    // Cleanup the scripts and noscript when the component is unmounted
    return () => {
      document.head.removeChild(script1);
      document.head.removeChild(script2);
      document.body.removeChild(noScript);
    };
  }, []);

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
