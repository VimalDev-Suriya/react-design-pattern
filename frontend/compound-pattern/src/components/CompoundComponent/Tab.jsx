const Tab = () => {
  const { children, label } = props;

  return <div label={label}>{children}</div>;
};

export default Tab;
