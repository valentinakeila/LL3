import {faCaretDown} from '@fortawesome/free-solid-svg-icons';  
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './WebinarHeader.css';

  

function WebinarHeader() {
  return (
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

  )
};

export default WebinarHeader;