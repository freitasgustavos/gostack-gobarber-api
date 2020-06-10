import IMailProvider from '../models/IMailProvider';

interface IMassage {
  to: string;
  body: string;
}

export default class FakeMailProvider implements IMailProvider {
  private message: IMassage[] = [];

  public async sendMail(to: string, body: string): Promise<void> {
    this.message.push({
      to,
      body,
    });
  }
}
