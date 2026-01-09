import { useState } from 'react';

import PageHeader from '../components/pageheader/PageHeader';
import WelcomeBanner from '../components/welcomebanner/WelcomeBanner';
import WebinarHeader from '../components/webinarheader/WebinarHeader';
import WebinarsSection from '../components/webinarssection/WebinarsSection';
import QCResources from '../components/qcresources/QCResources';
import ProductsSection from '../components/productssection/ProductsSection';
import LibraryTopBar from '../components/librarytopbar/LibraryTopBar';

import './Library.css';

function Library() {
  const [activeTab, setActiveTab] = useState('products');

  return (
    <main className="library-page">
      <PageHeader />
      <WelcomeBanner />

      <LibraryTopBar
        activeTab={activeTab}
        onChange={setActiveTab}
        showSearch={activeTab === 'products'}
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

