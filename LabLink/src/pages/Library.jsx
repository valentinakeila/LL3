import { useState } from 'react';

import PageHeader from '../components/pageheader/PageHeader';
import WelcomeBanner from '../components/welcomebanner/WelcomeBanner';
import WebinarsSection from '../components/webinarssection/WebinarsSection';
import LibraryTabs from '../components/librarytabs/LibraryTabs';
import QCResources from '../components/qcresources/QCResources';
import WebinarHeader from '../components/webinarheader/WebinarHeader';
import ProductsSection from '../components/productssection/ProductsSection';

import './Library.css';

function Library() {
  const [activeTab, setActiveTab] = useState('qc'); 
  // 'qc' | 'products'

  return (
    <main className="library-page">
      <PageHeader />
      <WelcomeBanner />

      <LibraryTabs
        activeTab={activeTab}
        onChange={setActiveTab}
      />

      {activeTab === 'qc' && (
        <>
          <WebinarHeader />

          <div className="library-two-columns">
            <WebinarsSection />
            <QCResources />
          </div>
        </>
      )}

      {activeTab === 'products' && (
        <ProductsSection />
      )}
    </main>
  );
}

export default Library;
