const BASE_URL: string = 'http://localhost:5000/';

export async function getAllBlogs() {
  const res = await fetch(BASE_URL+'blog/');
  const resData = await res.json();
  return (resData);
}

export async function getBlogById(blogId) {
  const res = await fetch(BASE_URL+'blog/'+blogId);
  const resData = await res.json();
  return (resData);
}

async function updateBlog(blogId, newData) {
  const reqOptions:any = {
    method: 'PATCH',
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newData),
    credentials: "include",
  }

  const res = await fetch(BASE_URL + 'blog/' + blogId, reqOptions);
  const resData = await res.json();
  console.log(resData);
}

getAllBlogs();

