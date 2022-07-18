export interface Contact {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
}

export class ContactBuilder {
  constructor(private readonly contact: Contact) {}

  id(id: number): ContactBuilder {
    this.contact.id = id;
    return this;
  }

  firstName(firstName: string): ContactBuilder {
    this.contact.firstName = firstName;
    return this;
  }

  lastName(lastName: string): ContactBuilder {
    this.contact.lastName = lastName;
    return this;
  }

  email(email: string): ContactBuilder {
    this.contact.email = email;
    return this;
  }

  phone(phone: string): ContactBuilder {
    this.contact.phone = phone;
    return this;
  }
}
