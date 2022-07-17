import { contacts } from "./data/contacts.mock.data";

describe("GET ALL CONTACTS USE CASE", () => {
  type Contacts = {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
  };

  interface IContactsRepository {
    findAll(): Contacts[];
    save(contacts: Contacts): void;
  }

  class MockContactsRepository implements IContactsRepository {
    save(contacts: Contacts): void {
      throw new Error("Method not implemented.");
    }
    findAll(): Contacts[] {
      return contacts;
    }
  }

  interface GetAllContactsUseCase {
    findAll(): Contacts[];
  }

  class GetAllContacts implements GetAllContactsUseCase {
    constructor(private repository: IContactsRepository) {}

    findAll(): Contacts[] {
      return this.repository.findAll();
    }
  }

  test("Should return all contacts", async () => {
    const mockContactsRepository = new MockContactsRepository();
    const expectedData = [
      {
        id: 1,
        firstName: "Mazal",
        lastName: "Kaillan",
        email: "mazal@test.com",
        phone: "123",
      },
      {
        id: 2,
        firstName: "Tumelia",
        lastName: "Kaillan",
        email: "tumelia@test.com",
        phone: "321",
      },
    ];
    const getAllContacts = new GetAllContacts(mockContactsRepository);
    const result = await getAllContacts.findAll();
    expect(result).toStrictEqual(expectedData);
  });
});
