/* eslint-disable no-useless-catch */
import { Categories } from "@src/models/Categories";
import { axiosInstance } from "../client";

type SuccessResponse = {
  code: number;
  message: string;
  response: string;
  data: Categories[];
};
export const AllCatogeryQuery = () => ({
  queryKey: ["AllCatogeryQuery"],
  queryFn: async () => getAllCatogret(),
});

const getAllCatogret = async () => {
  try {
    const data = await axiosInstance.get<SuccessResponse>(
      "categories/category-list"
    );
    return data.data.data;
  } catch (error) {
    throw error;
  }
};
