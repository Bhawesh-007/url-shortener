import { Router } from "express";
import shortener from "../controllers/short";
import urlSchema from "../models/url";
// now i will make a common route for / so that whenever a user goes to this /
//then he can get a shorten id of his url
const router = Router();
router.post('/',shortener);
export default router;