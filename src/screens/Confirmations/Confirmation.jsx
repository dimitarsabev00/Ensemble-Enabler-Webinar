import "./Confirmations.scss";
import images from "../../images";

function Confirmation() {
  return (
    <div className="ty-section">
      <div className="wrapper">
        <div className="ty-section-inner">
          <div className="profile-img">
            <img src={images.jeffreyTy} alt="Jeffrey Beeson Image" />
          </div>
          <div className="text-content">
            <h1>Thank you very much for your interest!</h1>
            <h2>
              Please follow these steps to receive the access to the webinar
              recording:
            </h2>
            <ul>
              <li>
                1. Look in your mailbox, we have sent you an email to confirm your
                contact.
              </li>
              <li>2. Click the confirmation link in this email.</li>
              <li>
                3. Afterwards we will send you another e-mail with the download.
              </li>
            </ul>
            <p>
              If you have any questions, you can reach us at: <br/>
              <a href="mailto:value@ensembleenabler.com"> value@ensembleenabler.com</a>
              
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Confirmation;
