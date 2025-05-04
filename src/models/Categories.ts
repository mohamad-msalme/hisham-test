import { Status } from "./Product";

export interface Categories {
  id: number;
  name: string;
  parent_id: number;
  description: string | null;
  status: Status;
  order: number;
  image: string;
  is_featured: number;
  created_at: string;
  updated_at: string;
  icon: string;
  icon_image: string | null;
  pivot: {
    product_id: number;
    category_id: number;
  };
  products_count: number;
  active_children: Categories[];
}
