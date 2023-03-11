import { Footer, Header, Main } from './components'
import { UserProvider } from './context/UserProvider'
import { Navbar } from './customComponents/navbarResponsive/Navbar'
import './styles/App.css'

function App() {

  return (
    <div className="App">
      <UserProvider>
        <Navbar />
        <Header />
        <Main />
        <Footer />
      </UserProvider>
    </div>
  )
}

export default App
