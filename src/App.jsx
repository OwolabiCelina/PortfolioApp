import 'flowbite';
import { createBrowserRouter, RouterProvider,createRoutesFromElements, Route } from 'react-router-dom';
import RootLayout from './layouts/root-layout';
import Home from './page/home';
import About from './page/about';
import SkillsPage from './page/skillspage';

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootLayout />}>
        <Route index element={<Home />}/>
        {/* <Route path='/about' element={<About />} />
        <Route path='/skills' element={<SkillsPage />} /> */}
        
        </Route>
    )
  )

  return (
    <div className="App">
      <RouterProvider router={router}/>
      
    </div>
  );
}

export default App;
