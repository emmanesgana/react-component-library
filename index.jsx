import React from 'react'
import ReactDOM from 'react-dom/client'
import Badges from './components/Badges/Badges'
import Banners from './components/Banners/Banners'
import Cards from './components/Cards/Cards'
import { HiOutlineCloudUpload } from "react-icons/hi";

function App() {
  const colors = ["grey", "red", "yellow", "green", "blue", "indigo", "purple", "pink",]

  return (
    <>
      <h1>Component Library ++</h1>
      <section className="badges">
        <h2>Square Badges</h2>
        <div className="badges-container">
          {
            colors.map(color => {
              return <Badges type="square" color={color}>Badge</Badges>
            })
          }
        </div>
        <h2>Pill Badges</h2>
        <div className="badges-container">
          {
            colors.map(color => {
              return <Badges type="pill" color={color}>Badge</Badges>
            })
          }
        </div>
      </section >
      <section className="banners">
        <h2>Banners Multi-line</h2>
        <div className="banners-container">
          <Banners
            status="success"
            title="Congratulations!"
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam." />
          <Banners
            status="warning"
            title="Attention"
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam quo totam eius aperiam dolorum." />
          <Banners
            status="error"
            title="There is a problem with your application"
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam quo totam eius aperiam dolorum." />
          <Banners
            status="neutral"
            title="Update available"
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam." />
        </div>
        <h2>Banners Single-line</h2>
        <div className="banners-container">
          <Banners
            status="success"
            title="Congratulations!" />
          <Banners
            status="warning"
            title="Attention" />
          <Banners
            status="error"
            title="There is a problem with your application" />
          <Banners
            status="neutral"
            title="Update available" />
        </div>
      </section>
      <section className="cards">
        <h2>Cards</h2>
        <div className="card-container">
          <Cards icon={<HiOutlineCloudUpload />} bgColor="#3F75FE" />
        </div>
      </section >
    </>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />)
