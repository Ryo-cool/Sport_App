export default function SignUp() {
  return (
    <div>
      <div className="container h-screen mx-auto px-10 py-12 flex justify-center">
        <div className="nm-flat-slate-100-lg rounded-lg p-8 text-center max-w-xl w-full h-160">
          <h2 className="text-2xl font-bold leading-tight mb-4">Sign Up</h2>
          <div className="mt-8">
            <label htmlFor="DeGrom" className="uppercase font-bold text-sm tracking-widest mb-1 sm:mb-0 sm:mr-8 sm:w-1/3">Full name</label>
            <input name="DeGrom" id="name" type="text" className="rounded-full nm-inset-slate-100 leading-5 my-4 px-8 py-4 sm:w-2/3" placeholder="Jacob DeGrom"></input>
          </div>
          <div>
            <label htmlFor="Judge" className="uppercase font-bold text-sm tracking-widest mb-1 sm:mb-0 sm:mr-8 sm:w-1/4">Full name</label>
            <input name="Judge" id="name" type="text" className="rounded-full nm-inset-slate-100 leading-5 my-4 px-8 py-4 sm:w-2/3" placeholder="Aaron Judge"></input>
          </div>
          <div>
            <label htmlFor="Ohtani" className="uppercase font-bold text-sm tracking-widest mb-1 sm:mb-0 sm:mr-8 sm:w-1/4">Full name</label>
            <input name="Ohtani" id="name" type="text" className="rounded-full nm-inset-slate-100 leading-5 my-4 px-8 py-4 sm:w-2/3" placeholder="Shohei Ohtani"></input>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center mt-4">
            <label htmlFor="dogs-or-cats" className="uppercase font-bold text-sm tracking-widest mb-1 sm:mb-0 sm:mr-8 sm:w-1/3">Dogs or cats?</label>
            <div className="rounded-full nm-flat-slate-100-lg leading-5 flex-grow sm:w-2/3 relative">
              <select name="dogs-or-cats" id="dogs-or-cats" className="appearance-none w-full px-8 py-4 bg-transparent font-semibold">
                <option selected={true} disabled={true}>Please select...</option>
                <option value="dogs">Dogs</option>
                <option value="cats">Cats</option>
              </select>
              <div className="absolute right-0 top-0 h-full pr-8 flex flex-col justify-center items-center pointer-events-none">
                <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" className="fill-current">
                  <path d="M24 24H0V0h24v24z" fill="none" opacity=".87"></path>
                  <path d="M15.88 9.29L12 13.17 8.12 9.29c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41l4.59 4.59c.39.39 1.02.39 1.41 0l4.59-4.59c.39-.39.39-1.02 0-1.41-.39-.38-1.03-.39-1.42 0z"></path>
                </svg>
              </div>
            </div>
          </div>
          <div className="flex justify-center mx-3 mt-20 text-blue-300">
              <button className="rounded-full nm-flat-slate-100 hover:nm-flat-slate-100-lg leading-5 px-8 py-4 uppercase font-bold tracking-widest transition duration-200 ease-in-out transform hover:scale-110">
              Submit
              </button>
          </div>
          {/* <a href="#" className="rounded-full bg-green-500 shadow-gray-400 leading-5 px-8 py-4 uppercase font-bold tracking-widest text-white inline-block mt-4">Find out more</a> */}
        </div>
      </div>
    </div>
  )
}
