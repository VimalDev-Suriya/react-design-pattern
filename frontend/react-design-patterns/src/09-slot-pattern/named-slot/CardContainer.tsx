import Card from './Card';

const CardHeader = () => <h2>Title</h2>;

const CardBody = () => (
  <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, quis eius!
    Minima nulla accusantium blanditiis alias, nam dolorum, quos enim quasi
    laudantium amet libero minus molestiae ipsam! Itaque, voluptatum laboriosam?
  </p>
);

const CardFooter = () => <button>Click Me</button>;

const CardContainer = () => {
  return (
    <div>
      <Card
        cardHeader={<CardHeader />}
        cardBody={<CardBody />}
        cardFooter={<CardFooter />}
      />
    </div>
  );
};

export default CardContainer;
