import { Categories } from "./Categories";
import { Slugable, StoreStatus } from "./Store";

export interface Status {
  value: string;
  label: string;
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

export interface Product {
  id: number;
  name: string;
  description: string;
  content: string;
  status: {
    value: string;
    label: string;
  };
  images: string[];
  sku: string;
  order: number;
  quantity: number | null;
  allow_checkout_when_out_of_stock: number;
  with_storehouse_management: number;
  is_featured: number;
  brand_id: number;
  is_variation: number;
  sale_type: number;
  price: number;
  sale_price: number | null;
  start_date: string | null;
  end_date: string | null;
  length: number | null;
  wide: number;
  height: number;
  weight: number;
  tax_id: number | null;
  views: number;
  created_at: string;
  updated_at: string;
  stock_status: StoreStatus;
  created_by_id: number;
  created_by_type: string;
  image: string;
  product_type: {
    value: string;
    label: string;
  };
  barcode: string;
  cost_per_item: number | null;
  generate_license_code: number;
  store_id: number;
  approved_by: number;
  have_sample: number;
  sample_price: number | null;
  order_request: number;
  per_unit: number | null;
  final_price: number;
  reviews_count: number;
  reviews_avg: number | null;
  is_in_wishlist: number;
  original_price: number;
  front_sale_price: number;
  slugable: Slugable;
  default_variation: {
    id: number;
    product_id: number;
    configurable_product_id: number;
    is_default: number;
  };
  product_collections: Record<string, string>[];
  product_labels: Record<string, string>[];
  store: Store;
  categories: Categories[];
  brand: Record<string, string>[];
  reviews: Record<string, string>[];
  variations: {
    id: number;
    product_id: number;
    configurable_product_id: number;
    is_default: number;
    product: Product;
    product_attributes: {
      id: number;
      attribute_set_id: number;
      title: string;
      slug: string;
      color: string;
      image: string;
      is_default: number;
      order: number;
      created_at: string;
      updated_at: string;
      pivot: {
        variation_id: number;
        attribute_id: number;
      };
      product_attribute_set: {
        id: number;
        title: string;
        slug: string;
        display_layout: string;
        is_searchable: number;
        is_comparable: number;
        is_use_in_product_listing: number;
        status: {
          value: string;
          label: string;
        };
        order: number;
        created_at: string;
        updated_at: string;
        use_image_from_product_variation: number;
      };
    }[];
  }[];
  options: Record<string, string>[];
}
