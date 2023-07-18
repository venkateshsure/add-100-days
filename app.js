let add = require("date-fns/addDays");
let express = require("express");
let app = express();
app.get("/", (req, res) => {
  let today = new Date();
  let date = add(
    new Date(today.getFullYear(), today.getMonth(), today.getDate()),
    100
  );
  res.send(`${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`);
});
//console.log(date);
app.listen(3000);
module.exports = app;
