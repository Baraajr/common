import { Subjects } from './subjects';

// to make sure the class consistent subject and data related to that subject
export interface TicketUpdatedEvent {
  subject: Subjects.TicketUpdated;
  data: {
    id: string;
    title: string;
    price: number;
    userId: string;
  };
}
