import { Mail } from "../models/MailModels.js";

export const saveSentEmails = async (req, res) => {
  try {
    const email = new Mail(req.body);
    await email.save();
    res.status(200).json({ message: "email saved successfully" });
  } catch (error) {
    res.status(500).json(error.message);
  }
};

export const getEmails = async (req, res) => {
  try {
    let emails;
    if (req.params.type === "bin") {
      emails = await Mail.find({ bin: true });
    } else if (req.params.type === "allmail") {
      emails = await Mail.find({});
    } else if (req.params.type === "starred") {
      emails = await Mail.find({ starred: true, bin: false });
    } else {
      emails = await Mail.find({ type: req.params.type });
    }
    return res.status(200).json(emails);
  } catch (error) {
    console.log(error.message);
    return res.status(500).json(error.message);
  }
};

export const moveMailsToBin = async (req, res) => {
  try {
    const mailBin = await Mail.updateMany(
      { _id: { $in: req.body } },
      { $set: { bin: true, type: "", starred: false } }
    );
    return res.status(200).json("Emails Deleted Successfully!!");
  } catch (error) {
    console.log(error.message);
    return res.status(500).json(error.message);
  }
};

export const mailStarred = async (req, res) => {
  try {
    const mail = await Mail.updateOne(
      { _id: req.body.id },
      {
        $set: { starred: req.body.value },
      }
    );
    console.log("hello from 2nd starred function");
    return res.status(200).json("Emails starred Successfully!!");
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

export const deleteMails = async (req, res) => {
  try {
    const mail = await Mail.deleteMany({ _id: { $in: req.body } });
    return res.status(200).json("Emails Deleted Successfully!!");
  } catch (error) {
    return res.status(500).json(error.message);
  }
};
