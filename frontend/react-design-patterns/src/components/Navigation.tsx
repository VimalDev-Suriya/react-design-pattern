import { Link } from 'react-router';

const TableOfContent = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Link to="/container-presentation-design-pattern">
        Container Presentation Pattern
      </Link>
      <Link to="/compound-design-pattern">Compound Design Pattern</Link>
      <Link to="/compound-design-pattern/v2">Compound Design Pattern V2</Link>
      <Link to="/higher-order-design-pattern">Higher Order Pattern</Link>
      <Link to="/custom-hook-design-pattern">Custom Hook Pattern</Link>
      <Link to="/optimistic-design-pattern">Optimistic Pattern</Link>
      <Link to="/pub-sub-design-pattern">Pub Sub Pattern</Link>
      <Link to="/state-reducer-design-pattern">State Reducer Pattern</Link>
      <Link to="/slot-design-pattern">SLot Pattern</Link>
      <Link to="/error-boundary">Error Boundary</Link>
    </div>
  );
};

export default TableOfContent;
