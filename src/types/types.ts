export type GateInfo = {
  createdAt: number;
  updatedAt: number | null;
  uuid: string;
  name: string;
  links: {
    hu: string;
    code: string;
  }[];
  code: string;
};

export type CostInputs = {
  distance: number;
  passengers: number;
  parkingDays: number;
};

export type CostResult = {
  recommendedTransport: {
    name: string;
    ratePerAu: number;
    capacity: number;
  };
  journeyCost: number;
  parkingFee: number;
  currency: string;
};
