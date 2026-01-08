import './Sidebar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHouse,
  faHardDrive,
  faFilePdf,
  faCopy,
  faCheckSquare,
  
} from '@fortawesome/free-regular-svg-icons';

import {
  faDesktop,
  faGear,
  faShareNodes,
  faTableCells,
  faUsers,

  
} from '@fortawesome/free-solid-svg-icons';

function Sidebar() {
  return (
    <aside className="sidebar">
      <ul className="sidebar-list">

        <li className="sidebar-item active">
          <FontAwesomeIcon icon={faHouse} />
        </li>

         <li className="sidebar-item">
          <FontAwesomeIcon icon={faTableCells} />
        </li>

        <li className="sidebar-item">
          <FontAwesomeIcon icon={faCheckSquare} />
        </li>

        <li className="sidebar-item">
          <FontAwesomeIcon icon={faShareNodes} />
        </li>

        <li className="sidebar-item">
          <FontAwesomeIcon icon={faUsers} />
        </li>

        <li className="sidebar-item">
          <FontAwesomeIcon icon={faHardDrive} />
        </li>

        <li className="sidebar-item">
          <FontAwesomeIcon icon={faDesktop} />
        </li>

        <li className="sidebar-item">
          <FontAwesomeIcon icon={faFilePdf} />
        </li>
        
        <li className="sidebar-item">
          <FontAwesomeIcon icon={faCopy} />
        </li>

        <li className="sidebar-item">
          <FontAwesomeIcon icon={faGear} />
        </li>

      </ul>
    </aside>
  );
}

export default Sidebar;
