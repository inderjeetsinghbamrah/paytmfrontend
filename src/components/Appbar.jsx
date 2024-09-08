export const Appbar = () => {
  return (
    <div className="flex justify-between h-14 shadow">
        <div className="flex flex-col font-bold m-4 text-xl">
            Payments App
        </div>
        <div className="flex items-center gap-2">
            <div className="h-full mr-4 flex flex-col justify-center">
                Hello, User
            </div>
            <div className="rounded-full bg-slate-200 mr-2 mt-1 w-12 h-12 flex justify-center items-center">
                <div className="text-xl h-full flex flex-col justify-center">
                    U
                </div>
            </div>
        </div>
    </div>
  )
}
