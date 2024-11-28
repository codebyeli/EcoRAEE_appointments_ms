export class CreateAppointmentDto {
    profileId: string;
    date: string;
    time: string;
    description: string;
    latitude: number;
    longitude: number;
    confirmed: boolean;
}
