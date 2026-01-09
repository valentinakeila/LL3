import './LibraryTabs.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
 faHeart
} from '@fortawesome/free-regular-svg-icons';

function LibraryTabs() {
  return (
    <div className="library-tabs">

      <div className="tabs-left">
        <button className="tab">Product documents</button>
        <button className="tab active">QC Education</button>
        <button className="tab">Technical documents</button>
      </div>
      <div className='favorites-container'>
      <button className="favorites-btn"> 
        <FontAwesomeIcon icon={faHeart} /> Favorites
      </button>
      </div>

    </div>
  );
}

export default LibraryTabs;
