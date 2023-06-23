export default function Product({setShowMenu}){
  return(
    <div onClick={() => setShowMenu(false)} className="h-screen flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold">Product</h1>
    </div>
  )
}