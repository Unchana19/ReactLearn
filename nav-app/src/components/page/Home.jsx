export default function Home({setShowMenu}){
  return(
    <div onClick={() => setShowMenu(false)} className="h-screen flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold">Studio 2099</h1>
      <p className="text-xl font-semibold tracking-widest text-orange-700 mt-5">Website Developer</p>
    </div>
  )
}