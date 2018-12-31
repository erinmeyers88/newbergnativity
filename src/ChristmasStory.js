import React from 'react';
import Luke2 from './luke2.mp3';

const ChristmasStory = () => {

  return <div>
    Listen to the Christmas Story from Luke 2
    <audio controls id="christmasStory">
      <source src={Luke2} type="audio/mpeg"/>
    </audio>
  </div>
};

export default ChristmasStory;
