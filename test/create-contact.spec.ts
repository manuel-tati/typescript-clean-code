import { Contact } from "./mock/models/contact";
import MockContactsRepository from "./mock/repositories/mock.contact.repository";
import CreateContactUseCase from "./mock/use-cases/create.contact.use-case";

describe("CREATE CONTACT", () => {
  test("Should return 3 as contacts size", () => {
    const newContact: Contact = {
      id: 3,
      firstName: "Tume",
      lastName: "Kaillan",
      email: "tume@test.com",
      phone: "54321",
    };
    const mockContactsRepository = new MockContactsRepository();
    const createContactUseCase = new CreateContactUseCase(
      mockContactsRepository
    );
    createContactUseCase.create(newContact);
    expect(mockContactsRepository.findAll().length).toEqual(3);
  });
});
