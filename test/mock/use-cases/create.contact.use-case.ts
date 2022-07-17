import { Contact } from "../models/contact";
import { IContactsRepository } from "./../interfaces/repositories/contact";
import { ICreateContactUseCase } from "./../interfaces/use-cases/create.contact.use-case";

class CreateContactUseCase implements ICreateContactUseCase {
  constructor(private repository: IContactsRepository) {}

  create(contact: Contact): void {
    this.checkIfEmailIsValid(contact.email);
    this.repository.save(contact);
  }

  private checkIfEmailIsValid = (email: string) => {
    var pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    if (String(email).search(pattern)) throw new Error("Invalid email");
    return email;
  };
}
export default CreateContactUseCase;
