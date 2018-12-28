import React from 'react';

const ValidationComponent = (props) => {
    const minTextLength = 5;
    let textMessage = "Text Too Short";
    if(props.textLength >= minTextLength){
        textMessage = "Text Long Enough";
    }
    return (
        <p>{textMessage}</p>
    );
};

export default ValidationComponent;