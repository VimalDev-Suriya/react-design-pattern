import type React from 'react';

interface Card {
  cardHeader: React.ReactNode;
  cardBody: React.ReactNode;
  cardFooter: React.ReactNode;
}

const Card: React.FC<{ slots: Card }> = ({ slots }) => {
  return (
    <div>
      <div className="card-header">{slots.cardHeader}</div>
      <div className="card-body">{slots.cardBody}</div>
      <div className="card-footer">{slots.cardFooter}</div>
    </div>
  );
};

export default Card;
