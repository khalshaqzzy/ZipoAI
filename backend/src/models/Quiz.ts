import mongoose, { Document, Schema } from 'mongoose';
import { IQuestion, QuestionSchema } from './Question';

/**
 * Represents a quiz taken by a user.
 * It contains the quiz structure, user's answers, and results.
 */


export interface IQuiz extends Document {
  /** The ID of the user who is taking the quiz. */
  userId: mongoose.Schema.Types.ObjectId;
  /** The title of the quiz, often derived from the source documents. */
  title: string;
  /** The current status of the quiz. */
  status: 'active' | 'completed';
  /** An array of question sub-documents. */
  questions: IQuestion[];
  /** A map storing the user's answers, with question ID as the key. */
  answers: Map<string, number | number[] | string>;
  /** The final score, calculated upon submission. */
  score?: number;
  /** The total time limit for the quiz in minutes. */
  timeLimit: number; 
  /** The remaining time for the quiz in seconds. */
  timeLeft: number; 
  /** The timestamp when the quiz was created. */
  createdAt: Date;
  /** The timestamp when the quiz was completed. */
  completedAt?: Date;
}

const QuizSchema: Schema = new Schema({
  /** Reference to the User who owns this quiz. */
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  /** The title of the quiz. */
  title: { type: String, required: true },
  /** The current state of the quiz. */
  status: { 
    type: String, 
    enum: ['active', 'completed'], 
    default: 'active' 
  },
  /** The array of embedded question documents. */
  questions: [QuestionSchema],
  /** 
   * A map to store user answers. The key is the question's _id and the value is the answer.
   * Using a Map allows for flexible answer types (number, array of numbers).
   */
  answers: {
    type: Map,
    of: Schema.Types.Mixed,
    default: {},
  },
  /** The calculated score after the quiz is submitted. */
  score: { type: Number },
  /** The total time allocated for the quiz in minutes. */
  timeLimit: { type: Number, required: true },
  /** The remaining time in seconds, updated periodically. */
  timeLeft: { type: Number, required: true }, 
  /** The date the quiz was marked as completed. */
  completedAt: { type: Date },
}, { timestamps: true });

export const Quiz = mongoose.model<IQuiz>('Quiz', QuizSchema);
