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

async function AddBasic() {
    let business = await Business.find({id:0});
    if (business == []) {
        const business = new Business({
            name: "Add New Business",
            id: 0,
            issues: 0,
            projects: 0,
            customFields: 0,
            licensedUsers: 0,
            issueTypes: 0,
            statuses: 0,
            attachments: 0,
            resolutions: 0,
            workflows: 0,
            comments: 0
        });
        try {
          business.save();
        }
        catch (e) {
            console.log(e);
        }
    }
}

AddBasic();

app.get('/businesses', async (req, res) => {

    let businesses = await Business.find();
    res.send(businesses);
});

app.post('/businesses', async (req, res) => {
  if (req.body.id < 100) {
    req.body.id = Math.floor(Math.random() * 3000 + 100);
  }
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
      comments: req.body.comments,
    });
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

app.put('/businesses/:_id', async(req, res) => {
    var item = await Business.findOne({
        id: req.params._id
    });
    item.name = req.body.name;
    item.id = req.body.id;
    item.issues = req.body.issues;
    item.projects = req.body.projects;
    item.customFields = req.body.customFields;
    item.licensedUsers = req.body.licensedUsers;
    item.issueTypes = req.body.issueTypes;
    item.statuses = req.body.statuses;
    item.attachments = req.body.attachments;
    item.resolutions = req.body.resolutions;
    item.workflows = req.body.workflows;
    item.comments = req.body.comments;
    item.save()
    res.sendStatus(200);
});

app.delete('/businesses/:_id', async (req, res) => {
    await Business.deleteOne({
        id: req.params._id
    });
    res.sendStatus(200);
});

app.listen(3000, () => console.log('Server listening on port 3000!'));
