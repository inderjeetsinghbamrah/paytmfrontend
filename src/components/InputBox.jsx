function InputBox({label, placeholder, onchange}) {
  return (
    <div className="flex flex-col items-start gap-2 pb-2 text-sm">
        <div className="font-bold">{label}</div>
        <input type="text" onChange={onchange} placeholder={placeholder} className="w-full border rounded border-slate-400 py-1 px-2"/>
    </div>
  )
}

export default InputBox
