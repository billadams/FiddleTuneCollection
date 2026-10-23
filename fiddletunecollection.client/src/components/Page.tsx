import Sidebar from './Sidebar';
import Index from '../pages/Index';



function Page() {

  return (
        <div className='content'>
        <main>
          <Index />
        </main>
        <Sidebar />
      </div>
  );
}

export default Page;