export default function About() {
    return (
        <div>
          <div className="container h-screen mx-auto px-16 bg-slate-100">
            <div className="grid grid-rows-4 grid-flow-col gap-4">
              <div className="bg-teal-400 rounded-md col-span-2">01</div>
              <div className="bg-purple-400 rounded-md">02</div>
              <div className="bg-red-300 rounded-md">04</div>
              <div className="bg-red-300 rounded-md">05</div>
              <div className="bg-red-300 rounded-md">06</div>
              <div className="bg-red-300 rounded-md">07</div>
              <div className="bg-red-300 rounded-md">08</div>
              <div className="w-20 h-40 rounded-full">
                <div className="flex-1 h-full bg-slate-100 shadow rounded-3xl">ボタン</div>
              </div>
            </div>
          </div>
        </div>
    )
}