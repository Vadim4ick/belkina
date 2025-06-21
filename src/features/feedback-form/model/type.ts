import { z } from "zod";
import { feedbackSchema } from "./schema";

export type FeedbackFormData = z.infer<typeof feedbackSchema>;
