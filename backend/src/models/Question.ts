import { Schema, Document } from 'mongoose';

/**
 * Represents a single question within a Quiz.
 * This schema is designed to be a sub-document embedded within the Quiz model.
 */


export interface IQuestion extends Document {
  /** The text of the question. */
  question: string;
  /** The type of question, determining how it's rendered and graded. */
  type: 'multiple-choice' | 'true-false' | 'checkboxes';
  /** An array of possible answers for the user to choose from. */
  options: string[];
  /** 
   * The correct answer(s).
   * - For 'multiple-choice'/'true-false', it's a number (index of the correct option).
   * - For 'checkboxes', it's an array of numbers (indices of correct options).
   */
  correctAnswer: number | number[];
  /** An optional explanation for why the answer is correct, shown during review. */
  explanation?: string;
}

export const QuestionSchema = new Schema<IQuestion>({
  /** The question text itself. */
  question: { type: String, required: true },
  /** The format of the question. */
  type: { 
    type: String, 
    enum: ['multiple-choice', 'true-false', 'checkboxes'], 
    required: true 
  },
  /** The list of choices for the question. */
  options: [{ type: String }],
  /** The correct answer, which can be a single index or an array of indices. */
  correctAnswer: { type: Schema.Types.Mixed, required: true },
  /** An optional explanation for the correct answer. */
  explanation: { type: String },
});
