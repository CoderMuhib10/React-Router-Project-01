import { useEffect, useState } from "react";

const Github = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    let fetchData = async () => {
      const raw = await fetch("https://api.github.com/users/CoderMuhib10");
      const data = await raw.json();
      setData(data);
    };
    fetchData();
  }, []);
  return (
    <div className=" text-4xl p-4 bg-blue-600 items-center text-white flex font-semibold justify-around">
      <img className="h-64 rounded-3xl" src={data.avatar_url} />
      <div className="">    <h4>My Github: <span className="text-gray-900">{data.name}</span> </h4>
      <br />
      <h4>My Github Repositories:<span className="text-gray-900">{data.public_repos}</span></h4>
      <br />
      <h4>My Github Followers:<span className="text-gray-900">{data.following}</span></h4></div>
  
    </div>
  );
};

export default Github;
