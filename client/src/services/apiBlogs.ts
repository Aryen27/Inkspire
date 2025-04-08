const BASE_URL: string = 'http://localhost:5000/';

function getReqOptions(m: string, body: any) {
  const token = localStorage.getItem('token');
  if (!token) {
    throw new Error('Token not found');
  }

  let reqOptions: any;
  if (!body) { 
    reqOptions = {
      method: m,
      headers: {
        "Content-Type": "application/json",
        "Authorization": 'Bearer '+localStorage.getItem('token'),
      },
      credentials: "include",
    };
  }
  else {
    reqOptions = {
      method: m,
      headers: {
        "Authorization": 'Bearer '+token,
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(body),
    };
  }
  return reqOptions
}


export async function getBlogById(blogId) {

  const reqOptions = getReqOptions("GET");
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
  const reqOptions = getReqOptions("PATCH", newData);

  const res = await fetch(`${BASE_URL}blog/${blogId}`, reqOptions);
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



