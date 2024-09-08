
export const Balance = ({balance}) => {
  return (
    <div className="flex items-center">
        <div className="m-4 font-bold text-lg">Your Balance</div>
        <div className="font-semibold text-lg" >${balance}</div>
    </div>
  )
}
