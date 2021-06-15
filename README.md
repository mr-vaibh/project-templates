### For development purpose
`npm install -g nodemon`

---

# Laying ROUTE example
## server.js
```javascript
const usersRouter = require('./routes/users');
app.use('/users', usersRouter);
```

### user.js (example)
```javascript
const router = require('express').Router();
let User = require('../models/users.model');

router.route('/').get((req, res) => {
    User.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error: ' + err))
});

module.exports = router;
```

# Creating Models
```javascript
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: { type: String, required: true, unique: true, trim: true, minlength: 3 },
    name: { type: String, required: true },
    age: { type: Number, required: true, min: 18, index: true },
    dob: { type: Date },
    bio: { type: String, match: /[a-zA-Z]/ },
}, {
    timestamps: true,
});

const User = mongoose.model('User', userSchema);

module.exports = User;
```


# Others

## For Allow-Access-Cross-Origin
Run `npm install cors`

```javascript
const cors = require('cors');

app.use(cors());
```

_NOTE: Always keep environment vars updated_