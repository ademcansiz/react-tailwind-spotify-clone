import React from 'react'
import Section from 'components/Section'

function Home() {

  const items = [{
    id:1,
    title :"Müslüm GÜRSES",
    description: "Küskünüm",
    image : "https://i.scdn.co/image/ab6761610000e5eb27b3b0e9154e12899b9ff22e",
    type : "album"
  },
  {
    id:2,
    title :"Bülent ERSOY",
    description: "Artist",
    image : "https://i.scdn.co/image/ab67616d00001e02fe178404993bafa3cfe697b1",
    type: "artist"
  },
  {
    id:3,
    title :"Ferdi TAYFUR",
    description: "Ferdinin Podcastleri... ",
    image : "https://i.scdn.co/image/ab67616d0000b273f634e40d81228627aaed9caa",
    type : "podcast"
  },
  {
    id:4,
    title :"Sezen AKSU",
    description: "İhanetten Geri Kalanlar",
    image : "https://i.scdn.co/image/ab67616d00001e02e935e29e5fd45a84a91bc3e5",
    type : "album"
  },
  {
    id:5,
    title :"Azer BÜLBÜL",
    description: "Duygularım",
    image : "https://i.scdn.co/image/ab67616d0000b273e43a8cef01b18891b3d37031",
    type : "album"
  },
]

  return (
    <div className='grid gap-y-8'>
      <Section title={"Son oynatılanlar"} more="#" items={items}></Section>
      <Section title={"En çok dinlenenler"} more="#" items={items}></Section>
      <Section title={"Sizin için derlendi"} more="#" items={items}></Section>
      <Section title={"Günlük müzik ihtiyacın"} more="#" items={items}></Section>
    </div>
  )
}

export default Home
