const Contact = require("../models/contact");
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
