const BASE_URL: string = 'http://localhost:5000/';

export async function getAllBlogs() {
  const res = await fetch(BASE_URL+'blog/');
  const resData = await res.json();
  return (resData);
}

getAllBlogs();

