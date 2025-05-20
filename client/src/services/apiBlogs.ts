import api from "./axiosInstance.ts";

const BASE_URL: string = "http://localhost:5000/";

export async function getBlogById(blogId: string) {
  try {
    const response = await api.get(`blog/${blogId}`);
    return response.data.data[0];
  } catch (error) {
    console.log(error);
  }
}

export async function getAllBlogs() {
  try {
    const response = await api.get("blog/");
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export async function updateBlog(blogId: string, newData: any) {
  try {
    const response = await api.patch(`blog/${blogId}`, newData);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export async function deleteBlog(blogId: string) {
  try {
    const response = await api.delete(`blog/${blogId}`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}
