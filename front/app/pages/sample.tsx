// import Header from '../components/header'


import sharedStyles from '../styles/shared.module.css'
import contactStyles from '../styles/contact.module.css'



export default function Sample() {
  return (
    <>
      {/* <Header  /> */}
      <div className="relative bg-gray-100" style={{width: 325, height: 188,}}>
          <div className="inline-flex space-x-40 items-start justify-end h-56 pb-2.5 absolute left-0 top-0">
              <div className="w-14 h-20 bg-gray-100 shadow rounded"/>
              <div className="w-6 h-6">
                  <div className="relative bg-gray-100 shadow rounded" style={{width: 24, height: 24,}}>
                      <div className="w-5 h-5 absolute left-0 top-0 bg-gray-100 shadow-inner rounded"/>
                      {/* <img className="w-3 h-3 absolute m-auto inset-0 rounded-full" src="https://via.placeholder.com/12x12"/> */}
                  </div>
              </div>
              <div className="w-7 h-7 bg-gray-100 shadow rounded-full"/>
              <div className="transform rotate-45 w-6 h-6 bg-gray-100 shadow-inner rounded-full"/>
              <div className="transform rotate-45 w-9 h-1/6 bg-gray-100 shadow-inner rounded-2xl"/>
          </div>
          <div className="w-12 h-6 absolute" style={{left: 105, top: 27,}}>
              <div className="relative bg-gray-100 shadow rounded-full" style={{width: 48, height: 24,}}>
                  <div className="w-12 h-5 absolute left-0 top-0 bg-gray-100 shadow-inner rounded-full"/>
                  <div className="inline-flex items-center justify-center w-4 h-4 p-0.5 absolute left-0 top-0">
                      <div className="flex-1 h-full bg-gray-100 shadow rounded-full"/>
                  </div>
              </div>
          </div>
          <div className="w-6 h-6 absolute" style={{left: 35, top: 77,}}>
              <div className="relative bg-gray-100 shadow rounded" style={{width: 24, height: 24,}}>
                  <div className="w-5 h-5 absolute left-0 top-0 bg-gray-100 shadow-inner rounded"/>
                  <div className="inline-flex items-center justify-center w-3 h-3 px-0.5 absolute m-auto inset-0">
                      {/* <img className="flex-1 h-3 rounded-full" src="https://via.placeholder.com/9.000000953674316x12.000000953674316"/> */}
                  </div>
              </div>
          </div>
          <div className="w-28 h-2 absolute" style={{left: 45, top: 133,}}>
              <div className="relative bg-gray-100 shadow rounded-full" style={{width: 120, height: 8,}}>
                  <div className="w-28 h-1.5 absolute m-auto inset-0 bg-gray-100 shadow-inner rounded-full"/>
              </div>
          </div>
          <div className="inline-flex items-center justify-center p-0.5 absolute bg-gray-100 shadow rounded" style={{left: 15, top: 16,}}>
              <div className="w-5 h-full">
                  <div className="flex items-center justify-center flex-1 h-full py-2 pl-2 pr-2.5 rounded">
                      <div className="w-1 h-2 bg-pink-900 bg-opacity-50 border-2 rounded-full border-green-300"/>
                  </div>
              </div>
              <div className="flex space-x-0.5 items-center justify-center w-0.5 h-4 pb-0.5">
                  <div className="w-1/3 h-4 bg-gray-100 shadow rounded-sm"/>
                  <div className="w-1/3 h-4 bg-gray-100 shadow rounded-sm"/>
              </div>
              <div className="w-5 h-full">
                  <div className="flex items-center justify-center flex-1 h-full px-2.5 py-2 rounded">
                      <div className="w-1 h-2 bg-pink-900 bg-opacity-50 border-2 rounded-full border-green-300"/>
                  </div>
              </div>
          </div>
          <div className="inline-flex space-x-0.5 items-start justify-start p-0.5 absolute bg-gray-100 shadow rounded" style={{left: 186, top: 17,}}>
              <div className="flex items-center justify-center w-5 h-full p-0.5">
                  {/* <img className="flex-1 h-full rounded-full" src="https://via.placeholder.com/16x16"/> */}
              </div>
              <div className="inline-flex flex-col items-center justify-end w-5 h-full px-2 pt-1.5 pb-1">
                  <p className="text-xs font-medium tracking-wide leading-3 text-indigo-500">1</p>
                  <div className="w-1/2 h-1/5 bg-indigo-500 shadow-inner rounded-full"/>
              </div>
              <div className="inline-flex flex-col items-center justify-end w-5 h-full pl-2 pr-1.5 pt-1.5 pb-1">
                  <p className="text-xs font-medium tracking-wide leading-3 text-indigo-500">2</p>
              </div>
              <div className="flex items-start justify-end w-5 h-full pl-96 pb-80">
                  {/* <img className="transform rotate-180 w-4 h-full rounded-full" src="https://via.placeholder.com/16x16"/> */}
              </div>
          </div>
          <div className="inline-flex flex-col space-y-2 items-center justify-end w-36 h-12 absolute" style={{left: 87, top: 60,}}>
              <div className="inline-flex items-center justify-center w-full h-8 px-6 py-2.5 bg-gray-100 shadow rounded-full">
                  <p className="flex-1 h-full text-xs font-medium text-gray-400">Neumorphism UI Kit</p>
              </div>
              <p className="w-full h-1.5 text-xs text-center text-gray-400">Button / Switch / Progress / Pagination/ Selector ... and more</p>
          </div>
          <div className="w-24 h-6 absolute" style={{left: 209, top: 116,}}>
              <div className="flex space-x-8 items-center justify-end flex-1 h-full px-2 py-1.5 bg-gray-100 shadow rounded">
                  <p className="text-xs font-medium tracking-wide leading-3 text-purple-400">Sunday</p>
                  {/* <img className="w-3 h-2 rounded-full" src="https://via.placeholder.com/12x8"/> */}
              </div>
          </div>
      </div>
    </>
  )
}