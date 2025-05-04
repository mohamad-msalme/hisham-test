export interface StoreStatus {
  value: string;
  label: string;
}

export interface StockStatus extends StoreStatus {}

export interface Slugable {
  id: number;
  key: string;
  reference_type: string;
  reference_id: number;
  prefix: string;
}

export interface Store {
  id: number;
  name: string;
  email: string | null;
  phone: string;
  address: string;
  country: string | null;
  state: string | null;
  city: string | null;
  customer_id: number;
  logo: string | null;
  description: string;
  content: string;
  status: StoreStatus;
  vendor_verified_at: string | null;
  created_at: string;
  updated_at: string;
  zip_code: string | null;
  company: string | null;
  slugable: Slugable;
}
