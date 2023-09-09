import express from "express";
import {
  getEmails,
  mailStarred,
  moveMailsToBin,
  saveSentEmails,
  deleteMails,
} from "../controllers/email-controller.js";

const router = express.Router();

router.post("/save", saveSentEmails);
router.get("/email/:type", getEmails);
router.post("/save-draft", saveSentEmails);
router.post("/bin", moveMailsToBin);
router.post("/starred", mailStarred);
router.delete("/delete", deleteMails);

export default router;
