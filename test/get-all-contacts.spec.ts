import MockContactsRepository from "./mock/repositories/mock.contact.repository";
import { GetAllContactsUseCase } from "./mock/use-cases/get.all.contacts.use-case";

describe("GET ALL CONTACTS USE CASE", () => {
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
    const getAllContacts = new GetAllContactsUseCase(mockContactsRepository);
    const result = await getAllContacts.findAll();
    expect(result).toStrictEqual(expectedData);
  });
});
