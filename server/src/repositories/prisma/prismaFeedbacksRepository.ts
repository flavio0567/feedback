import { FeedbackCreateDTO } from "../../dto/feedbackCreateDTO";
import { prisma } from "../../prisma";
import { FeedbacksRepository } from "../feedbacksRepository";

export class PrismaFeedbacksRepository implements FeedbacksRepository {
  async create({type, comment, screenshot}: FeedbackCreateDTO) {
    await prisma.feedback.create({
      data: {
        type,
        comment,
        screenshot,
      }
    })
  }
  
}