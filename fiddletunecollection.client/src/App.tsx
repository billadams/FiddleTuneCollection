import { Outlet } from 'react-router';
import Header from './components/Header';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import './styles/reset.css';
import './styles/layout.css';
import './App.css';

function App() {

  return (
    <div className='page'>
      <Header />
      <div className='content'>
        <Sidebar />
        <main>
          <Outlet />
        </main>
      </div>
      <Footer />
    </div>
  )
}

export default App;
     