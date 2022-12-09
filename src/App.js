import logo from './logo.svg';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import { route } from './conponts/Route/Routs/Routs';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <RouterProvider router={route}>
      <Toaster></Toaster>
    </RouterProvider>
  );
}

export default App;
