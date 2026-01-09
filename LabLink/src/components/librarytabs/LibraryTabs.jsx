import './LibraryTabs.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
 faHeart
} from '@fortawesome/free-regular-svg-icons';

function LibraryTabs({ activeTab, onChange}) {
  return (
       <div className="library-tabs">

      <div className="tabs-left">
        <button
          className={`tab ${activeTab === 'products' ? 'active' : ''}`}
          onClick={() => onChange('products')}
        >
          Product documents
        </button>

        <button
          className={`tab ${activeTab === 'qc' ? 'active' : ''}`}
          onClick={() => onChange('qc')}
        >
          QC Education
        </button>

        <button className="tab">
          Technical documents
        </button>
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
