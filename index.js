require('./lib/prisma');
const express = require('express');

const hbsConfig = require('./hbsConfig');
const expressConfig = require('./expressConfig');
const routes = require('./routes');

const app = express();
const port = 3000;

hbsConfig(app);
expressConfig(app);

app.use(routes);

app.listen(port, () => console.log(`The app is running on http://localhost:${port}...`));

