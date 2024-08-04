import React from 'react'
import Card from './Card'

const data =[
  {id: 1, img:"/square.png", imgPosition: { bottom: '59px', left: '54px',width:"275px",height:"156px" }, textPosition: { top: '32px'},buttonStyle:{left:"16%" }},
  {id: 2, img:"/square1.png", imgPosition: { bottom: '-15px', right: '-55px', borderRadius: "100%",width:"252px",height:"252px"}, textPosition: { top: '10%',color: 'black', textAlign:"left", paddingRight: "100px"},buttonStyle:{backgroundColor:"#272526",padding:"10px",borderRadius: "6px",color:"#feaa07",left:"8%" }},
  {id: 3,img:"/square2.png", imgPosition: { bottom: '100px', right: '20px', borderRadius: "100%",width:"180px",height:"180px"}, textPosition: { top: '10%', textAlign:"left", paddingRight: "200px"},buttonStyle:{backgroundColor:"white",padding:"10px",borderRadius: "6px",color:"#3b9ecb",left:"8%" }},
  {id: 4,img:"/square3.png", imgPosition: { bottom: '31px', left: '27px', borderRadius: "100%",width:"170px",height:"170px"}, textPosition: { top: '8%',  },descPosition:{color:"black"},buttonStyle:{backgroundColor:"#44c9f6",padding:"10px",borderRadius: "6px",color:"white",right:"5%" }},
]
function Homepage() {
  return (
    <div className=' px-40 py-10'>
      <div className='flex flex-wrap  gap-10 relative justify-center'>
      {data.map((e: any) => (
            <Card key={e.id} bg={e.img} imgPosition={e.imgPosition} textPosition={e.textPosition} descPosition={e.descPosition} buttonStyle={e.buttonStyle} />
        ))}
      </div>

                
    </div>
  )
}

export default Homepage