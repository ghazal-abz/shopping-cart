import Cart from "./components/Cart/cart"
import Navbar from "./components/Navbar/navbar"

function App() {
    return (
        <div className="flex flex-col min-h-screen bg-[#E5E5E5] font-yekan">
            <Navbar/>
            <Cart/>
        </div>
    )
}

export default App
