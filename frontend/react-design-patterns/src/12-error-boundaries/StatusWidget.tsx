const StatusWidget = () => {
  // * Manually introducing the error
  if (Math.random() > 0.5) {
    throw new Error('Status Widget Crashed');
  }

  return (
    <div>
      <h2>Status Widget</h2>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit
        accusantium explicabo omnis pariatur recusandae.
      </p>
    </div>
  );
};

export default StatusWidget;
