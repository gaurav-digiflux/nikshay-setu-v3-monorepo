export interface User {
  address: any[]; // You might want to specify a more specific type for address
  age: number;
  bank: any[]; // Similarly, specify a more specific type for bank
  birthDate: string;
  bloodGroup: string;
  company: any[]; // Specify a more specific type for company
  crypto: any[]; // Specify a more specific type for crypto
  ein: string;
  email: string;
  eyeColor: string;
  firstName: string;
  gender: string;
  hair: any[]; // Specify a more specific type for hair
  height: number;
  id: number;
  image: string;
  ip: string;
  lastName: string;
  macAddress: string;
  maidenName: string;
  password: string;
  phone: string;
  role: string;
  ssn: string;
  university: string;
  userAgent: string;
  username: string;
  weight: number;
}

// export interface UserResponsePayload {
//   limit: number;
//   skip: number;
//   total: number;
//   users: User[];
// }

interface DataItem {
  name: string;
}

interface Data {
  data: DataItem[];
}

interface UserResponsePayload {
  data: Data;
  status: number;
}
