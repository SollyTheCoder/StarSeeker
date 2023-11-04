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
