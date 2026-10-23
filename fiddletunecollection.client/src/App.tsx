import Header from './components/Header';
import Footer from './components/Footer';
import Page from './components/Page';
import './styles/reset.css';
import './styles/layout.css';
import './App.css';

function App() {

  return (
    <div className='page'>
      <Header />
      <Page />
      <Footer />
    </div>
  )
}

export default App;
     