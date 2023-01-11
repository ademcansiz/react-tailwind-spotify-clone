import React from 'react'
import Section from 'components/Section'

function Home() {

  const items = [{
    id:1,
    title :"Müslüm GÜRSES",
    artist :"Müslüm GÜRSES",
    description: "Gel Bahtımın Kar Beyazı",
    image : "https://i.scdn.co/image/ab6761610000e5eb27b3b0e9154e12899b9ff22e",
    type : "album",
    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3"
  },
  {
    id:2,
    title :"Bülent ERSOY",
    artist :"Bülent ERSOY",
    description: "Artist",
    image : "https://i.scdn.co/image/ab67616d00001e02fe178404993bafa3cfe697b1",
    type: "artist",
    src: "../mp3/bu-yuzden.mp3"
  },
  {
    id:3,
    title :"Ferdi TAYFUR",
    artist :"Ferdi TAYFUR",
    description: "Ferdinin Podcastleri... ",
    image : "https://i.scdn.co/image/ab67616d0000b273f634e40d81228627aaed9caa",
    type : "podcast",
    src: "../mp3/bana-sor.mp3"
  },
  {
    id:4,
    title :"Sezen AKSU",
    artist :"Sezen AKSU",
    description: "İhanetten Geri Kalanlar",
    image : "https://i.scdn.co/image/ab67616d00001e02e935e29e5fd45a84a91bc3e5",
    type : "album",
    src: "../mp3/uzunlar.mp3"
  },
  {
    id:5,
    title :"Azer BÜLBÜL",
    artist :"Azer BÜLBÜL",
    description: "Duygularım",
    image : "https://i.scdn.co/image/ab67616d0000b273e43a8cef01b18891b3d37031",
    type : "album",
    src: "../mp3/kendime-yalan-soyledim.mp3"
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
