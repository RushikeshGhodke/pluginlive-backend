import mongoose from 'mongoose';

const assessmentSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    question: { type: String, required: true }, // Assessment prompt/question
    transcript: { type: String, required: true }, // Speech-to-text result
    grammarScore: { type: Number, required: true }, // Grammar evaluation score (0-100)
    fluencyScore: { type: Number, required: true }, // Fluency evaluation score (0-100)
    pronunciationScore: { type: Number, required: true }, // Pronunciation score (0-100)
    overallScore: { type: Number, required: true }, // Weighted overall score
    feedback: { type: String }, // Detailed feedback text
    recordedAt: { type: Date, default: Date.now }, // When the assessment was recorded
});

export default mongoose.model('Assessment', assessmentSchema);
