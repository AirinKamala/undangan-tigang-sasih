import DetailAcara from './components/DetailAcara'
import FirstPage from './components/FirstPage'
import InfoBayi from './components/InfoBayi'
import BukuTamu from './components/BukuTamu'
import FooterSection from './components/FooterSection'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function HomePage({nama}) {
  const undangan = nama
  return (<>
    <div className='bg-orange-50 h-auto pt-4' id="containerApp">
      <FirstPage nama={undangan} />
      <main className="mx-[5vw] md:mx-[10vw] h-auto lg:mx-[25vw]">
        <InfoBayi className="mt-20" id="info" />
        <DetailAcara />
        <BukuTamu />
      </main>
      <FooterSection />
    </div>
  </>)
}

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<HomePage nama={'Teman-teman'} />} />
        <Route path="/nononoaaa" element={<HomePage nama={'Nononoaaa'} />} />
        <Route path="/osis-family" element={<HomePage nama={'OSIS FAMILY'} />} />
      </Routes>
    </Router>

    </>
  )
}

export default App


//gsap sempurnakan
//galleri