import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

function PopUp({content}){
    <Popup trigger={<button className="button"> Open Modal </button>} modal>
      <span> {content} </span>
    </Popup>
};

export default PopUp;