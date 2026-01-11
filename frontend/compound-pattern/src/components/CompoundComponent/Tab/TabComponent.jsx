/**
 * Usage of the Tab component
 *
 * <TabContainer>
 *      <Tab label="tab1">{...JSX goes here...}</Tab>
 *      <Tab label="tab2"></Tab>
 * </TabContainer>
 */

import { useEffect, useState } from "react";

// * Very basic tab
const TabContainer = (props) => {
  const { children, activeTab: activeTabLabel } = props;

  const [activeTabIdx, setActiveTabIdx] = useState(0);

  const tabs = Array.isArray(children) ? children : [children];

  useEffect(() => {
    const idx = tabs.findIndex((child) => child.props.active);

    if (idx !== -1) {
      setActiveTabIdx(idx);
    }
  }, []);

  useEffect(() => {
    if (activeTabLabel) {
      const activeTabIdxFromTabContainer = tabs.findIndex(
        (child) => child.props.label === activeTabLabel
      );

      activeTabIdxFromTabContainer !== -1
        ? setActiveTabIdx(activeTabIdxFromTabContainer)
        : null;
    }
  }, [activeTabLabel]);

  const handleClick = (idx) => {
    setActiveTabIdx(idx);
  };

  const activeContent = tabs[activeTabIdx].props.children;

  return (
    <div className="tab-container">
      <div className="tab-header">
        <ul>
          {tabs.map((child, idx) => {
            const { label } = child.props;

            return (
              <li
                key={`${label}-${idx}`}
                className={`${idx === activeTabIdx ? "active" : ""}`}
              >
                <button onClick={() => handleClick(idx)}>{label}</button>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="tab-body">{activeContent}</div>
    </div>
  );
};

export default TabContainer;
