const BASE_URL: string = 'http://localhost:5000/';

function getReqOptions() {
  const reqOptions: any = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Authorization": 'Bearer '+localStorage.getItem('token'),
    },
    credentials: "include",
  };
  return reqOptions
}


export async function getBlogById(blogId) {

  const reqOptions = getReqOptions();
  const res = await fetch(BASE_URL + 'blog/' + blogId, reqOptions);
  if (!res.ok) {
    const errorText = await res.text(); 
    console.error(`Error ${res.status}:`, errorText);
    return;
  }

  const resData = await res.json();
  // console.log(resData.data[0]);
  return (resData.data[0]);
}

export async function getAllBlogs() {
  const res = await fetch(BASE_URL + 'blog/');
  if (!res.ok) {
    const errorText = await res.text(); 
    console.error(`Error ${res.status}: ${errorText}`);
    return;
  }
  const resData = await res.json();
  console.log(resData);
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
  return(resData);
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



