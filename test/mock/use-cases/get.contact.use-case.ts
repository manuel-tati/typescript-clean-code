import { IContactsRepository } from "../interfaces/repositories/contact";
import { IGetContactUseCase } from "../interfaces/use-cases/get.contact.use-case";
import { Contact } from "../models/contact";

class GetContactUseCase implements IGetContactUseCase {
  constructor(private repository: IContactsRepository) {}

  getById(id: number): Contact | null {
    return this.repository.findById(id) || null;
  }
}

export default GetContactUseCase;
