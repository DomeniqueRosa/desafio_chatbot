import Robo from "../assets/robo.png";

export default function Message({ msg }) {
  return (
    <>
      <div
        className={`flex ${
          msg.user === "user" ? "justify-end pr-2" : "justify-start"
        } items-start space-x-3 pt-2`}
      >
        <div className="flex-shrink-0 bg-white p-2 rounded-full">
          {msg.user == "bot" && <img src={Robo} alt="imgem de um robo" />}
        </div>

        <div className=" max-w-[75%]">
          {msg.user == "bot" && (
            <p className="bold text-gray-400 p-2">LeatBot</p>
          )}
          <p
            className={`${
              msg.user === "bot"
                ? "bg-gray-100 text-gray-800"
                : " text-white bg-purple-500 "
            } p-3 rounded-xl bold`}
          >
            {msg.msg}
          </p>
        </div>
      </div>
    </>
  );
}
