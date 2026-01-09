import './LibraryTopBar.css';
import LibraryTabs from '../librarytabs/LibraryTabs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

function LibraryTopBar({ activeTab, onChange, showSearch }) {
  return (
    <div className="library-topbar">
      <LibraryTabs
        activeTab={activeTab}
        onChange={onChange}
      />

      {showSearch && (
        <div className="library-search-wrapper">
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            className="library-search-icon"
          />
          <input
            type="text"
            className="library-search"
            placeholder="Search by product name"
          />
        </div>
      )}
    </div>
  );
}

export default LibraryTopBar;
