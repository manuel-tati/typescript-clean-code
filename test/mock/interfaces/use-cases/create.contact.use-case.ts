import { Contact } from "../../models/contact";

export interface ICreateContactUseCase {
  create(contact: Contact): void;
}
