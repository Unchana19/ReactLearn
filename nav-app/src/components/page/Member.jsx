export default function Member({setShowMenu}){
  return(
    <div onClick={() => setShowMenu(false)} className="h-screen flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold">Member</h1>
    </div>
  )
}