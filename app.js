const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes');
const sequelize = require('./config');

const app = express();

app.use(bodyParser.json());

app.use('/api/users', userRoutes);

sequelize.sync().then(() => {
  console.log('Database synced successfully.');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
