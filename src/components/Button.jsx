export const Button = ({label, onClick}) => {
  return (
    <button onClick={onClick} type="button" className="rounded-lg bg-gray-800 hover:bg-gray-900 focus:outline-none text-white w-full p-2 my-2 font-bold">{label}</button>
  )
}
