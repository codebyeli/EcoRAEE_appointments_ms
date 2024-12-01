import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AppointmentsService } from './appointments.service';
import { CreateAppointmentDto } from './dto/create-appointment.dto';
import { UpdateAppointmentDto } from './dto/update-appointment.dto';

@Controller('appointments')
export class AppointmentsController {
  constructor(private readonly appointmentsService: AppointmentsService) {}

  @Post()
  create(@Body() createAppointmentDto: CreateAppointmentDto) {
    return this.appointmentsService.create(createAppointmentDto);
  }

  @Post(':id')
  confirm(@Param('id') id: string) {
    return this.appointmentsService.confirm(id);
  }

  @Post('cancel/:id')
  cancel(@Param('id') id: string, @Body() admin: any) {
    return this.appointmentsService.cancel(id, admin);
  }

  @Get()
  findAll() {
    return this.appointmentsService.findAll();
  }

  @Get('/confirmed')
  findAllConfirmed() {
    return this.appointmentsService.findAllConfirmed();
  }


  @Get('/unconfirmed')
  findAllUnconfirmed() {
    return this.appointmentsService.findAllUnconfirmed();
  }

  @Get('/appointments-by-profile/:id')
  findAllByProfile(@Param('id') id: string)  {
    return this.appointmentsService.findAllByProfile(id);
  }


  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.appointmentsService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAppointmentDto: UpdateAppointmentDto) {
    return this.appointmentsService.update(id, updateAppointmentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.appointmentsService.remove(id);
  }
}
