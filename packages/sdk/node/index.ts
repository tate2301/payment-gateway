interface Payments {
  create: () => void;
  authorize: () => void;
}

class GatewayPayments implements Payments {
  api_key: string;

  create = () => null;
  authorize = () => null;

  constructor(api_key: string) {
    this.api_key = api_key;
  }
}

export default class Gateway {
  api_key: string;
  payments!: Payments;

  constructor(api_key: string) {
    this.api_key = api_key;
    this.init();
  }

  init = () => {
    this.payments = new GatewayPayments("");
  };
}

const gateway = new Gateway("");

gateway.payments.create();
