import { FeedbackCreateDTO } from "../dto/feedbackCreateDTO";

export interface FeedbacksRepository {
  create: (data: FeedbackCreateDTO) => Promise<void>;
}