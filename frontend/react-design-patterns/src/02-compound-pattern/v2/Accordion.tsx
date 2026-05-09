import type { Accordion, AccordionContent, AccordionItem } from '../types';
import '../accordion.css';
import { AccordionContext } from '../context';
import React, { useContext, useState } from 'react';

const AccordionItem: React.FC<AccordionItem> = ({ title, children, index }) => {
  const { setOpenIdx } = useContext(AccordionContext);

  return (
    <div className="accordion-item">
      <p
        className="accordion-title"
        onClick={() => {
          setOpenIdx(index);
        }}
      >
        {title}
      </p>
      <div>
        {React.Children.map(children, (child) => {
          if (React.isValidElement(child)) {
            return React.cloneElement(child as React.ReactElement, { index });
          }
        })}
      </div>
    </div>
  );
};

const AccordionContent: React.FC<AccordionContent> = ({ children, index }) => {
  const { openIds } = useContext(AccordionContext);
  console.log('COntent', index);
  return (
    <div className={`accordion-content ${openIds !== index ? 'hidden' : ''}`}>
      {children}
    </div>
  );
};

// * Main Component
const Accordion: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [activeIdx, setActiveIdx] = useState(0);

  const handleActiveIdx = (id) => {
    setActiveIdx(id);
  };

  const accordionItems = React.Children.map(children, (child, index) => {
    if (React.isValidElement(child) && child.type === Accordion.Item) {
      return React.cloneElement(child as React.ReactElement, { index });
    }
  });

  return (
    <AccordionContext
      value={{
        openIds: activeIdx,
        setOpenIdx: handleActiveIdx,
      }}
    >
      <div className="accordion">{accordionItems}</div>;
    </AccordionContext>
  );
};

Accordion.Item = AccordionItem;
Accordion.Content = AccordionContent;

export default Accordion;
