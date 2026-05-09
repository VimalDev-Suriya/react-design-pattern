import Accordion from './Accordion';

const AccordionContainer = () => {
  return (
    <div>
      <Accordion>
        <Accordion.Item title="Is this pattern cool?" index={0}>
          <Accordion.Content index={0}>
            Yes, it's very flexible!
          </Accordion.Content>
        </Accordion.Item>

        <Accordion.Item title="Why use it?" index={1}>
          <Accordion.Content index={1}>
            To avoid prop drilling and complex config objects.
          </Accordion.Content>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default AccordionContainer;
