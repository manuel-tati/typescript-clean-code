import { IGetAllContactsUseCase } from "../interfaces/use-cases/get.all.contacts.use-case";
import { Contact } from "../models/contact";
import { IContactsRepository } from "./../interfaces/repositories/contact";

export class GetAllContactsUseCase implements IGetAllContactsUseCase {
  constructor(private repository: IContactsRepository) {}

  findAll(): Contact[] {
    return this.repository.findAll();
  }
}
