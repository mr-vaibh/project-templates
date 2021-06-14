### For development purpose
`npm install -g nodemon`

---

## For ROUTES
```
const usersRouter = require('./routes/users');
app.use('/users', usersRouter);
```


### For Allow-Access-Cross-Origin
Run `npm install cors`

```
const cors = require('cors');

app.use(cors());
```

### Always keep update environ vars updated