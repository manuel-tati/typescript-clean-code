import { Contact } from "../models/contact";
import { IContactsRepository } from "./../interfaces/repositories/contact";
import { ICreateContactUseCase } from "./../interfaces/use-cases/create.contact.use-case";

class CreateContactUseCase implements ICreateContactUseCase {
  constructor(private repository: IContactsRepository) {}

  create(contact: Contact): void {
    this.repository.save(contact);
  }
}
export default CreateContactUseCase;
