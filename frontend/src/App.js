
import './App.css';
import Contact from './components/Contact';
import Signup from './components/Signup';

import Courses from './courses/Courses';
import { Home } from './home/Home';

import { Route, Routes } from 'react-router-dom';
import PrivetComponent from './components/PrivetComponent';
import Admin from './components/Admin';
import Buy from './components/Buy';



function App() {
   const auth = localStorage.getItem('user')

   return (
      <>

         <div className='dark:bg-slate-900 dark:text-white'>
            <Routes>
               <Route path='/' element={<Home />} />

               <Route element={<PrivetComponent />} >

                  <Route path='/course' element={<Courses />} />
               </Route>
               <Route path='/signup' element={<Signup />} />
               <Route path='/contact' element={<Contact />} />
               <Route path='/admin' element={<Admin />} />
               <Route path='/buy/:id' element={<Buy />} />
            </Routes>
         </div>
        
      </>
   );
}

export default App;
