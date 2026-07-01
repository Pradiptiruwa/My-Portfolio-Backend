const Contact = require("../models/Contact");
exports.saveContact = async (req, res) => {
  try {

    const Contact = new Contact(req.body);

    await Contact.save();

    res.status(201).json({
      message: "Message Sent Successfully"
    });

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
};
