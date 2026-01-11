const Tab = () => {
  const { children, label, active } = props;

  return (
    <div label={label} active={active}>
      {children}
    </div>
  );
};

export default Tab;
