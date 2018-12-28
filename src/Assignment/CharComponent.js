import React from 'react';

const CharComponent = (props) => {
    const styleForCharComponent = {
        display: 'inline-block',
        padding: '16px',
        textAlign: 'center',
        margin: '16px',
        border: '1px solid black'
      };

    return (
        <div onClick={props.deleteLetterFromText} style={styleForCharComponent}>
            <p>{props.letterFromText}</p>
        </div>
    );
};

export default CharComponent;