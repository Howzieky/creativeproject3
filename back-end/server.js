const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require("body-parser");


mongoose.connect('mongodb://localhost:27017/creativeproject4', {
  useUnifiedTopology: true,
  useNewUrlParser: true
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

const Business = mongoose.model('Businesses', mongoose.Schema({
  name: String,
  id: Number,
  issues: Number,
  projects: Number,
  customFields: Number,
  licensedUsers: Number,
  issueTypes: Number,
  statuses: Number,
  attachments: Number,
  resolutions: Number,
  workflows: Number,
  comments: Number
}));

app.get('/businesses', async (req, res) => {
  let businesses = await Business.find();
  res.send(businesses);
});

app.post('/businesses', async (req, res) => {
  const business = new Business({
    name: req.body.name,
    id: req.body.id,
    issues: req.body.issues,
    projects: req.body.projects,
    customFields: req.body.customFields,
    licensedUsers: req.body.licensedUsers,
    issueTypes: req.body.issueTypes,
    statuses: req.body.statuses,
    attachments: req.body.attachments,
    resolutions: req.body.resolutions,
    workflows: req.body.workflows,
    comments: req.body.comments
  });
  try {
    await business.save();
    res.send({
      name: name,
      id: id,
      issues: issues,
      projects: projects,
      customFields: customFields,
      licensedUsers: licensedUsers,
      issueTypes: issueTypes,
      statuses: statuses,
      attachments: attachments,
      resolutions: resolutions,
      workflows: workflows,
      comments: comments
    });
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

app.put('/businesses', (req, res) => {
  res.send('I am updated.\n');
});

app.delete('/businesses', (req, res) => {
  res.send('All my memories have been deleted. Are you happy now?\n');
});

app.listen(3000, () => console.log('Server listening on port 3000!'));
