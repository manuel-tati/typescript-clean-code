import { Contact } from "../models/contact";
import { IContactsRepository } from "./../interfaces/repositories/contact";
import { ICreateContactUseCase } from "./../interfaces/use-cases/create.contact.use-case";

class CreateContactUseCase implements ICreateContactUseCase {
  constructor(private repository: IContactsRepository) {}

  create(contact: Contact): void {
    this.validateEmail(contact.email);
    this.validatePhoneNumber(contact.phone);
    this.checkIfEmailAlreadyExists(contact.email, contact.id);
    this.repository.save(contact);
  }

  private validateEmail = (email: string) => {
    var pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    if (String(email).search(pattern)) throw new Error("Invalid email");
  };

  private validatePhoneNumber = (phoneNumber: string) => {
    var patternPhoneNumber =
      /^\+?([0-9]{3})\)?[ . ]?([0-9]{3})[ . ]?([0-9]{3})[ . ]?([0-9]{3})$/;
    if (String(phoneNumber).search(patternPhoneNumber))
      throw new Error("Invalid phone number");
  };

  private checkIfEmailAlreadyExists = (email: string, id?: number) => {
    const contact: any = this.repository.findByEmail(email);

    if (contact !== undefined && contact.id !== id) {
      throw new Error("There is already a contact with that email");
    }
  };
}
export default CreateContactUseCase;
