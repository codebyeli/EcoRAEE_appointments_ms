import { Prop, SchemaFactory, Schema } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
export type AppointmentDocument = Appointment & Document;

@Schema({ timestamps: true })
export class Appointment {
  @Prop({type: mongoose.Schema.Types.ObjectId, ref: 'Login'})
  profileId: mongoose.Schema.Types.ObjectId;
  @Prop()
  date: string;
  @Prop()
  time: string;
  @Prop()
  description: string;
  @Prop()
  latitude: number;
  @Prop()
  longitude: number;
  @Prop()
  confirmed: boolean;
}
export const AppointmentSchema = SchemaFactory.createForClass(Appointment);