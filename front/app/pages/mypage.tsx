export default function MyPage() {
  return (
    <div>
      <div className="grid grid-rows-5 grid-cols-4 gap-5 h-screen mx-auto px-10 py-12">
        <div className="nm-flat-slate-100-lg rounded-lg p-8 text-center max-w-sm w-full row-span-4 col-span-1">
          <h2 className="text-2xl font-bold leading-tight mb-4">Card title</h2>
          <p>
            どうもこんにちは
          </p>
          <a href="#" className="rounded-full bg-green-500 shadow-gray-400 leading-5 px-8 py-4 uppercase font-bold tracking-widest text-white inline-block mt-4">Find out more</a>
        </div>
        <div className="nm-flat-slate-100-lg rounded-lg p-8 row-span-1 col-span-3">
        </div>
        <div className="nm-flat-slate-100-lg rounded-lg row-span-4 col-span-3"></div>
        <div className="nm-flat-slate-100-lg rounded-lg row-span-1 col-span-1"></div>
      </div>
    </div>
  )
}
