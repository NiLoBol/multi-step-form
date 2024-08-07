export interface FormDataSection1 {
  name: string;
  email: string;
  phone: string;
}

export interface FormDataSection2 {
  plan: "Arcade"|"Advanced"|"Pro";
  year: "m"|"y";
}

export interface FormDataSection3 {
  p1: boolean;
  p2: boolean;
  p3: boolean;
}
