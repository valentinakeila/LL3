import NavBar from './components/navbar/NavBar';
import Sidebar from './components/sidebar/Sidebar';
import Library from './pages/Library';

import './AppLayout.css';

function AppLayout() {
  return (
    <div className="app-root">
      <NavBar />

      <div className="app-body">
        <Sidebar />

        <div className="app-content">
          <Library />
        </div>
      </div>
    </div>
  );
}

export default AppLayout;
