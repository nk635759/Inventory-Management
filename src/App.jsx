
import { Outlet } from 'react-router-dom';
import Header from './component/Header';

function App() {

  return (
    <>
      <Header/>
      {/* Render the nested routes */}
      <Outlet />
    </>
  );
}

export default App;
