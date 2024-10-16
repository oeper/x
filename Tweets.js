import React, { useEffect, useState } from 'react';
    import axios from 'axios';
    import Tweet from '../Tweet/Tweet';

    const Tweets = () => {
      const [tweets, setTweets] = useState([]);

      useEffect(() => {
        const fetchTweets = async () => {
          const response = await axios.get('/tweets');
          setTweets(response.data);
        };

        fetchTweets();
      }, []);

      return (
        <div>
          {tweets.map((tweet) => (
            <Tweet key={tweet.id} text={tweet.text} author={tweet.author} />
          ))}
        </div>
      );
    };

    export default Tweets;
