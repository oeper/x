const express = require('express');
    const cors = require('cors');

    const app = express();
    app.use(cors());

    app.get('/tweets', (req, res) => {
      const tweets = [
        { id: 1, text: 'First tweet!', author: 'Bolt' },
        { id: 2, text: 'Second tweet!', author: 'Bolt' },
      ];
      res.json(tweets);
    });

    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
