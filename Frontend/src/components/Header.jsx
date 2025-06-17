import Robo from '../assets/robo.png'

export default function Header(){
    return(
        <>
            <div className="flex items-center justify-between bg-purple-500 text-white p-4 rounded-t-lg">
          <div className="flex items-center">
            <div className="bg-white p-2 rounded-full mr-3">
            <img src={Robo} alt="Robo" />
            </div>
            <div>
              <h3 className="font-semibold text-lg">LeadBot</h3>
              <p className="text-sm flex items-center">
                <span className="h-2 w-2 bg-green-400 rounded-full mr-1"></span>
                Online Now
              </p>
            </div>
          </div>
          <div className="flex space-x-3">
            <button className="text-white hover:text-gray-200 h-4 w-4">
              ...
            </button>
            <button className="text-white hover:text-gray-200 h-4 w-4">
              X
            </button>
          </div>
        </div>
        </>
    )
}