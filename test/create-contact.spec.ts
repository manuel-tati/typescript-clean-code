import { contacts } from "./data/contacts.mock.data";

describe("CREATE CONTACT", () => {
  type Contact = {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
  };

  interface IContactsRepository {
    findAll(): Contact[];
    save(contact: Contact): void;
  }

  class MockContactsRepository implements IContactsRepository {
    save(contact: Contact): void {
      contacts.push(contact);
    }
    findAll(): Contact[] {
      return contacts;
    }
  }

  interface CreateContactUseCase {
    create(contact: Contact): void;
  }

  class CreateContact implements CreateContactUseCase {
    constructor(private repository: IContactsRepository) {}
    create(contact: Contact): void {
      this.repository.save(contact);
    }
  }

  test("Should return 3 as contacts size", () => {
    const newContact: Contact = {
      id: 3,
      firstName: "Tume",
      lastName: "Kaillan",
      email: "tume@test.com",
      phone: "54321",
    };
    const mockContactsRepository = new MockContactsRepository();
    const createContactUseCase = new CreateContact(mockContactsRepository);
    createContactUseCase.create(newContact);
    expect(mockContactsRepository.findAll().length).toEqual(3);
  });
});
