import './QCResources.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowUp,
  faDownload,
} from '@fortawesome/free-solid-svg-icons';

import { faHeart} from '@fortawesome/free-regular-svg-icons';

import doc from './doc.png';
import xls from './xls.png';
import pdf from './pdf.png';

function QCResources() {
  return (
    <aside className="qc-resources">

      <h3 className="qc-title">QC Resources</h3>

     <div className="qc-tabs">
        <button className="qc-tab active">Tips</button>
        <button className="qc-tab">All</button>
        </div>


      <div className="qc-header">
        <span>Document name</span>
        <FontAwesomeIcon className="arrowUp" icon={faArrowUp} />
      </div>

      <div className="qc-list">

        <div className="qc-item active">
          <div className="qc-doc">
            <div className="qc-file doc">

                 <img
                              src={doc}
                              alt="LabLink logo"
                              className="doc-icon"
                            />
            </div>

            <div className="qc-text">
              <p>Total Error Graph Explanation Ion...</p>
              <span>8/23/2024</span>
            </div>
          </div>

          <div className="qc-actions">
            <FontAwesomeIcon  className="download-icon" icon={faDownload} />
            <FontAwesomeIcon className="heart-icon" icon={faHeart} />
          </div>
        </div>

        <div className="qc-item">
          <div className="qc-doc">
            <div className="qc-file xls">
              <img
                src={xls}
                alt="LabLink logo"
                className="xls-icon"
              />
            </div>

            <div className="qc-text">
              <p>CMS Website - Link to CLIA Brochures</p>
              <span>8/23/2024</span>
            </div>
          </div>
        </div>

        <div className="qc-item">
          <div className="qc-doc">
            <div className="qc-file pdf">
                   <img
                              src={pdf}
                            />
            </div>

            <div className="qc-text">
              <p>CMS Website - Link to CLIA Overview &</p>
              <span>8/23/2024</span>
            </div>
          </div>
        </div>

        <div className="qc-item">
          <div className="qc-doc">
            <div className="qc-file doc">
                <img
                              src={doc}
                              className="doc-icon"
                            /></div>

            <div className="qc-text">
              <p>Total Error Graph Explanation</p>
              <span>8/23/2024</span>
            </div>
          </div>
        </div>

      </div>
    </aside>
  );
}

export default QCResources;
