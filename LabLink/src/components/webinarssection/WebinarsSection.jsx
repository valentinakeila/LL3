import './WebinarsSection.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCalendarDays,
  faClock,
  faPenToSquare,
  faCaretDown
} from '@fortawesome/free-solid-svg-icons';
import lab from './lab.jpg';

function WebinarsSection() {
  return (
    <section className="webinars-section">

      <div className="webinars-header">
        <div>
          <h3>Webinars</h3>
          <p>
            Unlock valuable insights and learn directly from our experts
            through our engaging webinar series.
          </p>
        </div>

        <div className='sort-container'>
          <p>
            Sort by:
          </p>
        <button className="sort-button">
          Recently added
          <FontAwesomeIcon icon={faCaretDown} />
        </button>
         </div>
      </div>

      <div className="webinar-card">

   
       <div className="webinar-image-wrapper">
        <span className="badge-new">New</span>
         <img
         src={lab}
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
    </section>
  );
}

export default WebinarsSection;
