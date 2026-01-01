import { Outlet } from 'react-router-dom';

const AppLayout = () => {
  return (
    <div className="container">
      <nav>header</nav>
      <div>
        <Outlet />
      </div>
      <nav>footer</nav>
    </div>
  );
};

export default AppLayout;
