import { Contact } from "../../models/contact";

export interface IGetContactUseCase {
  getById(id: number): Contact | null;
}
