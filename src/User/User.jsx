import { useParams } from "react-router-dom";
const User = () => {
  const { userid } = useParams();
  return (
    <div className="text-center items-center text-5xl  font-bold">
      <h1 className=" m-5 p-5">
        <span className=" text-white bg-orange-700 rounded-lg ">
          User:
        </span>
       <span className="text-gray-700">{userid}</span> 
      </h1>
    </div>
  );
};

export default User;
