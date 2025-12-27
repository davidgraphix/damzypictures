declare module '@emailjs/browser' {
  export function init(userId?: string): void;

  export interface SendResult {
    status: number;
    text: string;
  }

  export function send(
    serviceID: string,
    templateID: string,
    templateParams?: Record<string, any>,
    userId?: string,
  ): Promise<SendResult>;

  const emailjs: {
    init: typeof init;
    send: typeof send;
  };

  export default emailjs;
}
