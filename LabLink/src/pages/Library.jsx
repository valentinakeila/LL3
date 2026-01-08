import PageHeader from '../components/pageheader/PageHeader';
import WelcomeBanner from '../components/welcomebanner/WelcomeBanner';
import WebinarsSection from '../components/webinarssection/WebinarsSection';

function Library() {
  return (
    <main style={{ flex: 1 }}>
      <PageHeader />
      <WelcomeBanner />
       <WebinarsSection />
    </main>
  );
}

export default Library;
