import { Contact } from "./mock/models/contact";
import MockContactsRepository from "./mock/repositories/mock.contact.repository";
import CreateContactUseCase from "./mock/use-cases/create.contact.use-case";

describe("CREATE CONTACT", () => {
  test("Should return error if phone number is invalid", () => {
    const newContact: Contact = {
      id: 3,
      firstName: "Tume",
      lastName: "Kaillan",
      email: "mazal@test.com",
      phone: "+244-901-001-001",
    };
    const mockContactsRepository = new MockContactsRepository();
    const createContactUseCase = new CreateContactUseCase(
      mockContactsRepository
    );

    expect(() => createContactUseCase.create(newContact)).toThrow(
      "Invalid phone number"
    );
  });
  test("Should validate if contact email is valid", () => {
    const newContact: Contact = {
      id: 3,
      firstName: "Tume",
      lastName: "Kaillan",
      email: "tume.com",
      phone: "+244 901 001 001",
    };
    const mockContactsRepository = new MockContactsRepository();
    const createContactUseCase = new CreateContactUseCase(
      mockContactsRepository
    );

    expect(() => createContactUseCase.create(newContact)).toThrow();
  });

  test("Should return error if email already exists", () => {
    const newContact: Contact = {
      id: 3,
      firstName: "Tume",
      lastName: "Kaillan",
      email: "mazal@test.com",
      phone: "+244 901 001 001",
    };
    const mockContactsRepository = new MockContactsRepository();
    const createContactUseCase = new CreateContactUseCase(
      mockContactsRepository
    );

    expect(() => createContactUseCase.create(newContact)).toThrow(
      "There is already a contact with that email"
    );
  });

  test("Should return 3 as contacts size", () => {
    const newContact: Contact = {
      id: 3,
      firstName: "Tume",
      lastName: "Kaillan",
      email: "tume@test.com",
      phone: "+244 901 001 001",
    };
    const mockContactsRepository = new MockContactsRepository();
    const createContactUseCase = new CreateContactUseCase(
      mockContactsRepository
    );
    createContactUseCase.create(newContact);
    expect(mockContactsRepository.findAll().length).toEqual(3);
  });
});
