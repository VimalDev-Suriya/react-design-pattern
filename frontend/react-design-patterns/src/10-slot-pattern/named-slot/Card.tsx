import type React from 'react';

interface Card {
  cardHeader: React.ReactNode;
  cardBody: React.ReactNode;
  cardFooter: React.ReactNode;
}

const Card: React.FC<Card> = ({ cardHeader, cardBody, cardFooter }) => {
  return (
    <div>
      <div className="card-header">{cardHeader}</div>
      <div className="card-body">{cardBody}</div>
      <div className="card-footer">{cardFooter}</div>
    </div>
  );
};

export default Card;
