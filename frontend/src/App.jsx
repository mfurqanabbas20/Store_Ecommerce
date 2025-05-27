import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Account from './pages/Account'
import Cart from './pages/Cart.jsx'
import Checkout from './pages/Checkout'
import Error from './pages/Error'
import ProductDetails from './pages/ProductDetails'
import About from './pages/About'
import Contact from './pages/Contact'
import {Provider} from 'react-redux'
import {store} from './redux/store.js'
function App() {

  return (
    <Provider store={store}>
    <BrowserRouter>
    <Header/>
    <Routes>
     <Route path='/' element={<Home/>} />
     <Route path='/about' element={<About/>}/>
     <Route path='/contact' element={<Contact/>}/>
     <Route path='/login' element={<Login/>}/>
     <Route path='/signup' element={<Signup/>}/>
     <Route path='/account' element={<Account/>}/>
     <Route path='/cart' element={<Cart/>}/>
     <Route path='/checkout' element={<Checkout/>}/>
     <Route path='/product/:id' element={<ProductDetails/>}/>
     <Route path='*' element={<Error/>}/>
     </Routes>
     <Footer/>
    </BrowserRouter>
    </Provider>

  )
}

export default App
