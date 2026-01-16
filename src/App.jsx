import DetailAcara from './components/DetailAcara'
import FirstPage from './components/FirstPage'
import InfoBayi from './components/InfoBayi'
import BukuTamu from './components/BukuTamu'
// import './index.css'
import FooterSection from './components/FooterSection'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div className='bg-orange-50 h-auto pt-4' id="containerApp">
        {/* <FirstPage nama={"Nononoa"} /> */}
        <main className="mx-[5vw] md:mx-[10vw] h-auto lg:mx-[25vw]">
          {/* <InfoBayi className="mt-20" id="info" />
          <DetailAcara /> */}
          <BukuTamu />
        </main>
        <FooterSection />
      </div>
    </>
  )
}

export default App
