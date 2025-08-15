import Head from "next/head"
import { useState, useEffect } from "react"
import Header from "@/components/Header"
import Dashboard from "@/components/Dashboard"
import Sidebar from "@/components/Sidebar"


const Home = () => {
  const [assets, setAssets] = useState([])
  const [searchTerm, setSearchTerm] = useState("")

  const getData = async() => {
    try {
      const data = await fetch(`/api/assets?${searchTerm}`)
      const media = await data.json()
      setAssets(media)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getData()
  }, [searchTerm])

  console.log(assets)

  const onHandleNewUpload = (asset) => {
    setAssets(prev => [asset, ...prev])
  }
  return (
    <>
      <Head>
        <title>Nimbus</title>
        <meta name="description" content="Main page of Nimbus" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Header/>
      <div className="main-container">
        <Sidebar onHandleNewUpload={onHandleNewUpload}/>
        <Dashboard assets={assets} searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
      </div>
    </>
  )
}
export default Home