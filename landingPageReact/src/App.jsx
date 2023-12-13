import { useEffect, useState } from "react"
import Background from "./Components/Background/Background.jsx"
import Navbar from "./Components/Navbar/Navbar.jsx"
import Hero from "./Components/Hero/Hero.jsx"

const App = () => {
  let heroData = [
    {text1:'Dive into',text2:'what you love'},
    {text1:'Move',text2:'smoothly'},
    {text1:'Give in to',text2:'style'},
  ]
  const [heroCount, setHeroCount] = useState(0)
  const [playStatus, setPlayStatus]= useState(false)

  useEffect(()=>{
    setInterval(()=>{
    setHeroCount((count)=>{return count===2?0:count+1})
    }, 3000);
  },[])

  return (
    <div>
      <Background playStatus={playStatus} heroCount={heroCount}/>
      <Navbar/>
      <Hero setPlayStatus={setPlayStatus}
        playStatus={playStatus}
        heroData={heroData[heroCount]}
        heroCount={heroCount}
        setHeroCount={setHeroCount}
      />
    </div>
  )
}

export default App