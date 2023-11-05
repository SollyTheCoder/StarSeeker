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

export type RouteInputs = {
  toGate: string;
  fromGate: string;
};

export type RouteResult = {
  from: {
    updatedAt: null | number;
    createdAt: number;
    uuid: string;
    links: {
      hu: string;
      code: string;
    }[];
    name: string;
    code: string;
  };
  to: {
    updatedAt: null | number;
    createdAt: number;
    uuid: string;
    links: {
      hu: string;
      code: string;
    }[];
    name: string;
    code: string;
  };
  route: string[];
  totalCost: number;
};

export type GateListItem = {
  key: string;
  value: string;
};
