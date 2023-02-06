import { Schema, model } from 'mongoose';
import { IJog } from 'src/types/jog';

const jogSchema = new Schema<IJog>(
  {
    start: { type: Date, default: null },
    end: { type: Date, default: null },
    name: String,
    userId: { type: Schema.Types.ObjectId, ref: 'User' },
  },
  { timestamps: true },
);

export default model<IJog>('Jog', jogSchema);
