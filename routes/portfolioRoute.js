const router = require("express").Router();
const {
  Intro,
  About,
  Project,
  Contact,
  Experience,
  Course,
} = require("../models/portfolioModel");
// get all portfolio data
router.get("/get-portfolio-data", async (req, res) => {
  try {
    const intros = await Intro.find();
    const abouts = await About.find();
    const projects = await Project.find();
    const contacts = await Contact.find();
    const experiences = await Experience.find();
    const courses = await Course.find();

    res.status(200).send({
      intro: intros[0],
      about: abouts[0],
      projects: projects,
      contact: contacts[0],
      experiences: experiences,
      courses: courses,
    });
  } catch (error) {
    res.status(500).send(error, req);
  }
});

// add intro
router.post("/add-intro", async (req, res) => {
  try {
    const intro = new Intro(req.body);
    await intro.save();
    res.status(200).send({
      data: intro,
      success: true,
      message: "Intro added successfully",
    });
  } catch (error) {
    res.status(500).send(error);
  }
});

// update intro
router.post("/update-intro", async (req, res) => {
  try {
    const intro = await Intro.findOneAndUpdate(
      { _id: req.body._id },
      req.body,
      { new: true }
    );
    res.status(200).send({
      data: intro,
      success: true,
      message: "Intro updated successfully",
    });
  } catch (error) {
    res.status(500).send(error);
  }
});

// delete intro
router.post("/delete-intro", async (req, res) => {
  try {
    const intro = await Intro.findOneAndDelete({ _id: req.body._id });
    res.status(200).send({
      data: intro,
      success: true,
      message: "Intro deleted successfully",
    });
  } catch (error) {
    res.status(500).send(error);
  }
});

// add about
router.post("/add-about", async (req, res) => {
  try {
    const about = new About(req.body);
    await about.save();
    res.status(200).send({
      data: about,
      success: true,
      message: "About added successfully",
    });
  } catch (error) {
    res.status(500).send(error);
  }
});

// update about
router.post("/update-about", async (req, res) => {
  try {
    const about = await About.findOneAndUpdate(
      { _id: req.body._id },
      req.body,
      { new: true }
    );
    res.status(200).send({
      data: about,
      success: true,
      message: "Abouts updated successfully",
    });
  } catch (error) {
    res.status(500).send(error);
  }
});

// delete about
router.delete("/delete-about", async (req, res) => {
  try {
    const about = await About.findOneAndDelete({ _id: req.body._id });
    res.status(200).send({
      data: about,
      success: true,
      message: "About deleted successfully",
    });
  } catch (error) {
    res.status(500).send(error);
  }
});

// add experience
router.post("/add-experience", async (req, res) => {
  try {
    const experience = new Experience(req.body);
    await experience.save();
    res.status(200).send({
      data: experience,
      success: true,
      message: "Experience added successfully",
    });
  } catch (error) {
    res.status(500).send(error);
  }
});

// update experience
router.post("/update-experience", async (req, res) => {
  try {
    const experience = await Experience.findOneAndUpdate(
      { _id: req.body._id },
      req.body,
      { new: true }
    );
    res.status(200).send({
      data: experience,
      success: true,
      message: "Experience updated successfully",
    });
  } catch (error) {
    res.status(500).send(error);
  }
});

// delete experience
router.post("/delete-experience", async (req, res) => {
  try {
    const experience = await Experience.findOneAndDelete({ _id: req.body._id });
    res.status(200).send({
      data: experience,
      success: true,
      message: "Experience deleted successfully",
    });
  } catch (error) {
    res.status(500).send(error);
  }
});

// add project
router.post("/add-project", async (req, res) => {
  try {
    const project = new Project(req.body);
    await project.save();
    res.status(200).send({
      data: project,
      success: true,
      message: "Project added successfully",
    });
  } catch (error) {
    res.status(500).send(error);
  }
});

// update project
router.post("/update-project", async (req, res) => {
  try {
    const project = await Project.findOneAndUpdate(
      { _id: req.body._id },
      req.body,
      { new: true }
    );
    res.status(200).send({
      data: project,
      success: true,
      message: "Project updated successfully",
    });
  } catch (error) {
    res.status(500).send(error);
  }
});

// delete project
router.post("/delete-project", async (req, res) => {
  try {
    const project = await Project.findOneAndDelete({ _id: req.body._id });
    res.status(200).send({
      data: project,
      success: true,
      message: "Project deleted successfully",
    });
  } catch (error) {
    res.status(500).send(error);
  }
});

// add contact 
router.post("/add-contact", async (req, res) => {
  try {
    const contact = new Contact(req.body);
    await contact.save();
    res.status(200).send({
      data: contact,
      success: true,
      message: "Contact added successfully",
    });
  } catch (error) {
    res.status(500).send(error);
  }
});

// update contact
router.post("/update-contact", async (req, res) => {
  try {
    const contact = await Contact.findOneAndUpdate(
      { _id: req.body._id },
      req.body,
      { new: true }
    );
    res.status(200).send({
      data: contact,
      success: true,
      message: "Contact updated successfully",
    });
  } catch (error) {
    res.status(500).send(error);
  }
});

// delete contact
router.post("/delete-contact", async (req, res) => {
  try {
    const contact = await Contact.findOneAndDelete({ _id: req.body._id });
    res.status(200).send({
      data: contact,
      success: true,
      message: "Contact deleted successfully",
    });
  } catch (error) {
    res.status(500).send(error);
  }
});
module.exports = router;