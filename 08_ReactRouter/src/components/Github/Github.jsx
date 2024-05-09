import React, { useEffect, useState } from "react";
// import { useLoaderData } from "react-router-dom";

function Github() {
  //   const data = useLoaderData();

  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://api.github.com/users/Nautiyal-Ashish")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setData(data);
      });
  }, []);
  return (
    <div className="text-center margin-4 bg-gray-500 text-white text-3xl">
      <img
        className="bg-gray-600 m-4 text-center text-white text-3xl"
        src={data.avatar_url}
        alt="Git Picture"
        width={300}
      />
      Github Followers : {data.followers}
    </div>
  );
}

export default Github;

// export const githubInfoLoader = async () => {
//   const response = fetch("https://api.github.com/users/Nautiyal-Ashish");
//   return response.json;
// };
