import { Contact } from "../models/contact";
import { IContactsRepository } from "./../interfaces/repositories/contact";
import { ICreateContactUseCase } from "./../interfaces/use-cases/create.contact.use-case";

class CreateContactUseCase implements ICreateContactUseCase {
  constructor(private repository: IContactsRepository) {}

  create(contact: Contact): void {
    this.checkIfEmailIsValid(contact.email);
    this.checkIfEmailAlreadyExists(contact.email, contact.id);
    this.repository.save(contact);
  }

  private checkIfEmailIsValid = (email: string) => {
    var pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    if (String(email).search(pattern)) throw new Error("Invalid email");
  };

  private checkIfEmailAlreadyExists = (email: string, id?: number) => {
    const contact: any = this.repository.findByEmail(email);
    console.log(contact);

    if (contact !== undefined && contact.id !== id) {
      throw new Error("There is already a contact with that email");
    }
  };
}
export default CreateContactUseCase;
