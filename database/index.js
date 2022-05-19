const mongoose = require('mongoose');

exports.clientP = mongoose
  .connect('mongodb+srv://public:public-password@sweetter.zuhtu.mongodb.net/Sweetter?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(m => m.connection.getClient())
  .then(console.log('Connexion a MongoDB réussie !'))
  .catch(() => console.log('Connexion a MongoDB échouée...'));
