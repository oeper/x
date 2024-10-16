import React from 'react';

    const Tweet = ({ text, author }) => {
      return (
        <div>
          <p>{text}</p>
          <p>By {author}</p>
        </div>
      );
    };

    export default Tweet;
