const express = require('express');

const app = express();
const port = 3000;

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port', port);
});
