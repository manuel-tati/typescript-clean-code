import MockContactsRepository from "./mock/repositories/mock.contact.repository";
import GetContactUseCase from "./mock/use-cases/get.contact.use-case";

describe("GET CONTACT USE CASES", () => {
  test("Should return a contact for ID", () => {
    const mockContactsRepository = new MockContactsRepository();

    const getContactUseCase = new GetContactUseCase(mockContactsRepository);
    const response = getContactUseCase.getById(2);
    expect(response).not.toBe(null);
    // expect(response).toStrictEqual(null);
  });
});
