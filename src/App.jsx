import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Footer } from './common/footer/Footer'
import { Header } from './common/header/Header'
import { Body } from './pages/body/Body'




function App() {

  return (
    <>
      <Header/>
        <Body/>
      <Footer/>
    </>
  )
}

export default App
