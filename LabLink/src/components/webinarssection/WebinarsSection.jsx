import './WebinarsSection.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCalendarDays,
  faPenToSquare,
  faCirclePlay
} from '@fortawesome/free-solid-svg-icons';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import lab2 from './lab2.jpg';

function WebinarsSection() {
  return (
    <section className="webinars-section">

      <div className="webinar-card">

   
       <div className="webinar-image-wrapper">
        <span className="badge-new">New</span>
         <img
         src={lab2}
         alt="Webinar"
         />
         </div>

        <div className="webinar-content">
          <h4>
            Quality Control and High-Sensitivity Cardiac Troponin Testing:
            More than just precision targets
          </h4>

          <p>
            With the advent of high-sensitivity cardiac troponin testing,
            quality control and assurance practices for monitoring test
            performance have changed.
          </p>

          <div className="webinar-dates">
            <div className="date-chip">
              <FontAwesomeIcon icon={faCalendarDays} />
              <span>18 Oct - 2025</span>
            </div>

            <div className="date-chip">
              <FontAwesomeIcon icon={faClock} />
              <span>9:00 AM - 10:00 AM</span>
            </div>
          </div>

          <button className="register-button">
            <FontAwesomeIcon icon={faPenToSquare} />
            Register now
          </button>
        </div>

        <div className="webinar-divider" />

        <div className="webinar-speaker">
          <img
            src="https://i.pravatar.cc/48"
            alt="Speaker"
          />
          <div>
            <span>Peter Kavsak, PhD</span>
            <p>
              Professor, Department of Pathology and Molecular Medicine,
              McMaster University, Hamilton, ON
            </p>
          </div>
        </div>

      </div>


      <div className="webinar-card">

   
       <div className="webinar-image-wrapper">
         <img
         src={lab2}
         alt="Webinar"
         />
         </div>

        <div className="webinar-content">
          <h4>
            Quality Control and High-Sensitivity Cardiac Troponin Testing:
            More than just precision targets
          </h4>

          <p>
            With the advent of high-sensitivity cardiac troponin testing,
            quality control and assurance practices for monitoring test
            performance have changed.
          </p>

          <div className="webinar-dates">
            <h1></h1>
            <br />
          </div>

          <button className="register-button">
            <FontAwesomeIcon icon={faCirclePlay} />
            View Recording
          </button>
        </div>

        <div className="webinar-divider" />

        <div className="webinar-speaker">
          <img
            src="https://i.pravatar.cc/48"
            alt="Speaker"
          />
          <div>
            <span>Peter Kavsak, PhD</span>
            <p>
              Professor, Department of Pathology and Molecular Medicine,
              McMaster University, Hamilton, ON
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}

export default WebinarsSection;
