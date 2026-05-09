import Accordion from './Accordion';

const AccordionContainerV2 = () => {
  return (
    <div>
      <Accordion>
        <Accordion.Item title="Is this pattern cool?">
          <Accordion.Content>Yes, it's very flexible!</Accordion.Content>
        </Accordion.Item>

        <Accordion.Item title="Why use it?">
          <Accordion.Content>
            To avoid prop drilling and complex config objects.
          </Accordion.Content>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default AccordionContainerV2;
