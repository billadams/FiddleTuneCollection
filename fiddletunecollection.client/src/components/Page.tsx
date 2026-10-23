import Sidebar from './Sidebar';
import Home from '../pages/Home';



function Page() {

  return (
        <div className='content'>
        <main>
          <Home />
        </main>
        <Sidebar />
      </div>
  );
}

export default Page;