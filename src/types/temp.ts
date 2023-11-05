export const CostResultTemp = {
  recommendedTransport: {
    name: 'HSTC Shuttle',
    ratePerAu: 0.45,
    capacity: 5,
  },
  journeyCost: 22.5,
  parkingFee: 2.4,
  currency: 'GBP',
};

export const RouteResultTemp = {
  from: {
    updatedAt: null,
    createdAt: 1698836493508,
    uuid: 'eef58698-4db8-4b10-bdbe-6a531c931eac',
    links: [
      {
        hu: '140',
        code: 'FOM',
      },
      {
        hu: '220',
        code: 'VEG',
      },
    ],
    name: 'Altair',
    code: 'ALT',
  },
  to: {
    updatedAt: null,
    createdAt: 1698836493508,
    uuid: 'da389266-8d6b-4007-82dd-64e340efbe46',
    links: [
      {
        hu: '200',
        code: 'SOL',
      },
      {
        hu: '160',
        code: 'ALS',
      },
      {
        hu: '320',
        code: 'VEG',
      },
    ],
    name: 'Aldermain',
    code: 'ALD',
  },
  route: ['ALT', 'FOM', 'ALS', 'ALD'],
  totalCost: 150,
};
