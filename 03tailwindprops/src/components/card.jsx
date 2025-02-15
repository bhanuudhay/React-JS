function Card({name ,titletxt="visit me"})
{
    console.log(name);
    return (
        <>
            <div className="max-w-xs p-6 rounded-md shadow-md bg-black">
        <img
          src="https://images.pexels.com/photos/29421579/pexels-photo-29421579.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load"
          alt=""
          className="object-cover object-center w-60px rounded-md h-72 bg-gray-500" 
        />
        <div className="mt-6 mb-2">
          <span className="block text-sm font-medium font-mono tracking-widest uppercase text-indigo-400">
            {titletxt }
          </span>
          <h2 className="text-xl font-semibold tracking-wide">{name}</h2>
        </div>
        <p className="text-gray-300">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio tempora ipsum soluta
          amet
        </p>
      </div>
        </>
    )
}
export default Card;