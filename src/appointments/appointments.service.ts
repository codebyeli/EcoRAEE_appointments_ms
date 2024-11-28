import { Injectable } from '@nestjs/common';
import { CreateAppointmentDto } from './dto/create-appointment.dto';
import { UpdateAppointmentDto } from './dto/update-appointment.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Appointment, AppointmentDocument } from './schema/appointments.schema';

@Injectable()
export class AppointmentsService {

  constructor(@InjectModel(Appointment.name) private readonly appointmentModel: Model<AppointmentDocument>) {
    
  }
  async create(createAppointmentDto: CreateAppointmentDto) {
    const createAppointment = await this.appointmentModel.create(createAppointmentDto);
    return createAppointment.save();
  }

  async findAll() {
    const allAppointments = await this.appointmentModel.find();
    return allAppointments;
  }

  async findAllConfirmed() {
    const allConfirmedAppointments = await this.appointmentModel.find().where('confirmed').equals(true);
    return allConfirmedAppointments;
  }

  async findAllUnconfirmed() {
    const allUnconfirmedAppointments = await this.appointmentModel.find().where('confirmed').equals(false);
    return allUnconfirmedAppointments;
  }

  async findAllByProfile(id:string) {
    const allAppointmentsByProfile = await this.appointmentModel.find({profileId: id});
    return allAppointmentsByProfile;
  }

  async findOne(id: string) {
    const oneAppointment = await this.appointmentModel.findOne({_id: id});
    return oneAppointment;
  }

  async update(id: string, updateAppointmentDto: UpdateAppointmentDto) {
    const updateAppointment = await this.appointmentModel.findByIdAndUpdate(id, updateAppointmentDto, {new: true});
    return updateAppointment;
  }

  async remove(id: string) {
    const deleteAppointment = await this.appointmentModel.findByIdAndDelete(id);
    return deleteAppointment;
  }

  async confirm(id: string) {
    const oneAppointment = await this.appointmentModel.findOne({_id: id});
    if (oneAppointment) {
      oneAppointment.confirmed = true;
      return oneAppointment.save();
    }
    throw new Error('Appointment not found');
  }
}
