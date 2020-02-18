import React from 'react';
import FocusCard from '../../components/FocusCard';


const Focuses = ({ focuses }) => {
  return (
    <div>
      <FocusCard focuses={focuses}/>
    </div>
  );
};

export default Focuses;