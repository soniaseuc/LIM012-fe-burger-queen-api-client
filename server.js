const express = require ('express');
const app = express();

app.use(express.static('./dist/lim012-fe-burger-queen-api-client'));
app.get('/*', function(req, res) {
    res.sendFile('index.html', {root: 'dist/lim012-fe-burger-queen-api-client/'}
);
  });
  app.listen(process.env.PORT || 8080);