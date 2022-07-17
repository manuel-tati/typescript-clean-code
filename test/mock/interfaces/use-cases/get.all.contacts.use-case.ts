import { Contact } from "../../models/contact";

export interface IGetAllContactsUseCase {
  findAll(): Contact[];
}
