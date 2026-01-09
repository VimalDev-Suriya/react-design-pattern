/**
 * Usage of the Tab component
 *
 * <TabContainer>
 *      <Tab label="tab1">{...JSX goes here...}</Tab>
 *      <Tab label="tab2"></Tab>
 * </TabContainer>
 */

import { useState } from "react";

// * Very basic tab
const TabContainer = (props) => {
  const { children } = props;

  const [activeTabIdx, setActiveTabIdx] = useState(0);

  const tabs = Array.isArray(children) ? children : [children];

  console.log("tabs", tabs);

  const handleClick = (idx) => {
    console.log("idx", idx);
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
              <li key={`${label}-${idx}`}>
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
