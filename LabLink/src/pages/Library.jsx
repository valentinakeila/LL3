import PageHeader from '../components/pageheader/PageHeader';
import WelcomeBanner from '../components/welcomebanner/WelcomeBanner';
import WebinarsSection from '../components/webinarssection/WebinarsSection';
import LibraryTabs from '../components/librarytabs/LibraryTabs';
import QCResources from '../components/qcresources/QCResources';
import WebinarHeader from '../components/webinarheader/WebinarHeader';

import './Library.css';

function Library() {
  return (
    <main className="library-page">
      <PageHeader />
      <WelcomeBanner />
      <LibraryTabs />
      <WebinarHeader />

      <div className="library-two-columns">
        <WebinarsSection />
        <QCResources />
      </div>
    </main>
  );
}

export default Library;
