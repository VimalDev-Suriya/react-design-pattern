import { createContext } from 'react';

export const AccordionContext = createContext({
  openIds: 0,
  setOpenIdx: (id: number) => {},
});
