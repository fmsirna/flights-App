
import React from 'react';
import  Card  from './Card.js';

export default function ListCards({ cards,refresh }) {


  return (
    <div className='list-container'>
      <div className="list">  
        {
          cards.length > 0
            ? cards.map((item) =>  <Card key={item.tags} info={item} refresh={refresh} />)
            : <div className="empty-list">No flights available with those parameters</div>
        }
      </div>
    </div>
  );
}
