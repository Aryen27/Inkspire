const BASE_URL: string = 'http://localhost:5000/';

export async function getAllBlogs() {
  const res = await fetch(BASE_URL + 'blog/');
  if (!res.ok) {
    const errorText = await res.text(); 
    console.error(`Error ${res.status}: ${errorText}`);
    return;
  }

  const resData = await res.json();
  return (resData);
}

export async function getBlogById(blogId) {
  const res = await fetch(BASE_URL + 'blog/' + blogId);
  if (!res.ok) {
    const errorText = await res.text(); 
    console.error(`Error ${res.status}:`, errorText);
    return;
  }

  const resData = await res.json();
  return (resData);
}

export async function updateBlog(blogId, newData) {
  const reqOptions:any = {
    method: 'PATCH',
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newData),
    credentials: "include",
  }

  const res = await fetch(BASE_URL + 'blog/' + blogId, reqOptions);
  if (!res.ok) {
    const errorText = await res.text(); 
    console.error(`Error ${res.status}:`, errorText);
    return;
  }

  const resData = await res.json();
  console.log(resData);
}

export async function deleteBlog(blogId) {
  const reqOptions:any = {
    method: 'DELETE',
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
  };

  const res = await fetch(BASE_URL + 'blog/' + blogId, reqOptions);
  if (!res.ok) {
    const errorText = await res.text(); 
    console.error(`Error ${res.status}:`, errorText);
    return;
  }

  const resData = await res.json();
  console.log(resData);
}


