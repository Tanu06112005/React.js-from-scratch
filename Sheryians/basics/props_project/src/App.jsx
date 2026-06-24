import React from 'react'
import Card from './components/card.jsx'

const App = () => {

 const jobs = [
  {
    sal: "$ 120/hr",
    desig: "San Francisco, CA",
    company: "Amazon",
    jobRole: "Senior UI/UX Designer",
    t1: "Part-time",
    t2: "Senior level",
    img: "https://tse4.mm.bing.net/th/id/OIP.3U8Vg47N2B98ulAT1-TqbQHaHa?pid=Api&P=0&h=180"
  },
  {
    sal: "150-220k",
    desig: "Mountain View, CA",
    company: "Google",
    jobRole: "Graphic Designer",
    t1: "Full-time",
    t2: "Flexible Schedule",
    img: "https://tse1.mm.bing.net/th/id/OIP._YRByM7l5SCayIje5TRfuwHaHj?pid=Api&rs=1&c=1&qlt=95&w=121&h=124"
  },
  {
    sal: "$ 85/hr",
    desig: "New York, NY",
    company: "Dribbble",
    jobRole: "Software Developer",
    t1: "Contract",
    t2: "Remote",
    img: "https://tse1.mm.bing.net/th/id/OIP.uyWlpZArGUIgQ349t4dyqAHaEH?pid=Api&P=0&h=180"
  },
  {
    sal: "342/hr",
    desig: "Austin, TX",
    company: "Meta",
    jobRole: "Data Analyst",
    t1: "Part-time",
    t2: "In office",
    img: "https://tse2.mm.bing.net/th/id/OIP.N6q1UQrBEZ2PVWg-HcjjyQHaHa?pid=Api&P=0&h=180"
  },
  {
    sal: "100-500k/hr",
    desig: "Seattle, WA",
    company: "Airbnb",
    jobRole: "Senior UI/UX Designer",
    t1: "Part-time",
    t2: "Senior level",
    img: "https://tse2.mm.bing.net/th/id/OIP.cb18-isomRiGzOTvIu6eUQHaHa?pid=Api&P=0&h=180"
  },
  {
    sal: "89k",
    desig: "Cupertino, CA",
    company: "Apple",
    jobRole: "DevOps Engineer",
    t1: "Contract",
    t2: "Remote",
    img: "https://tse4.mm.bing.net/th/id/OIP.KzOFPzLnbMPTb4zlzxi8PgHaHa?pid=Api&P=0&h=180"
  },
  {
    sal: "65-75k",
    desig: "Redmond, WA",
    company: "Microsoft",
    jobRole: "Cloud Engineer",
    t1: "Part-time",
    t2: "Senior level",
    img: "https://tse1.mm.bing.net/th/id/OIP.VhknVB80Wi7s22YHKKfsvwHaHa?pid=Api&rs=1&c=1&qlt=95&w=115&h=115"
  },
  {
    sal: "$ 180/hr",
    desig: "Bangalore, India",
    company: "Flipkart",
    jobRole: "AI / ML Engineer",
    t1: "Full-time",
    t2: "Flexible Schedule",
    img: "https://tse3.mm.bing.net/th/id/OIP.vBmeNfhXI1Sue8fAfAmKWAHaEK?pid=Api&P=0&h=180"
  },
  {
    sal: "$ 120-170/hr",
    desig: "Hyderabad, India",
    company: "Cognizant",
    jobRole: "Full Stack Developer",
    t1: "Part-time",
    t2: "Senior level",
    img: "https://tse2.mm.bing.net/th/id/OIP.XeCInlyjxFrMO-d9peZIlAHaHa?pid=Api&P=0&h=180"
  }
];

//array.map((value, index, array) => {})
  return (
    <>
    <h1><center>User Cards</center></h1>
        <h3><center>(A Basic Project On Props Implementation)</center></h3>

    <div className="container">
      {/* therefore we use maps and for loops to iteratie over the array of objects and passing the values to the cards : for simplicity (yehi pe hi to react bohot kaam ata h ) */}
      {jobs.map(function (elem,indx) {
        return (
          <div key={indx}>
            <Card sal={elem.sal} desig={elem.desig} company={elem.company} jobRole={elem.jobRole} t1={elem.t1} t2={elem.t2} img={elem.img}/>
          </div>
        )
      })}




      {/* This is a very time comsuming process....:- */}

      {/* <Card sal='$ 120/hr' desig='San Francisco' company='Amazon' jobRole='Senior UI/UX Dssigner' t1='Part-time' t2='Senior level' img='https://tse4.mm.bing.net/th/id/OIP.3U8Vg47N2B98ulAT1-TqbQHaHa?pid=Api&P=0&h=180'/>
      <Card sal='150-220k' desig='Mountain View, CA' company='Google' jobRole='Graphic Designer' t1='Full-time' t2='Flexible Schedule' img='https://tse1.mm.bing.net/th/id/OIP._YRByM7l5SCayIje5TRfuwHaHj?pid=Api&rs=1&c=1&qlt=95&w=121&h=124'/>
      <Card sal='$ 85/hr' desig='San Francisco' company='Dribble' jobRole='Software Developer' t1='contact' t2='Remote' img='https://tse1.mm.bing.net/th/id/OIP.uyWlpZArGUIgQ349t4dyqAHaEH?pid=Api&P=0&h=180'/>
      <Card sal='342/hr' desig='San Francisco' company='Meta' jobRole='Data Analyst' t1='Part-time' t2='In office' img='https://tse2.mm.bing.net/th/id/OIP.N6q1UQrBEZ2PVWg-HcjjyQHaHa?pid=Api&P=0&h=180'/>
      <Card sal='100-500k/hr' desig='San Francisco' company='Airbnb' jobRole='Senior UI/UX Dssigner' t1='Part-time' t2='Senior level' img='https://tse2.mm.bing.net/th/id/OIP.cb18-isomRiGzOTvIu6eUQHaHa?pid=Api&P=0&h=180'/>
      <Card sal='89k' desig='San Francisco' company='Apple' jobRole='DevOps Engineer'   t1='contact' t2='Remote' img='https://tse4.mm.bing.net/th/id/OIP.KzOFPzLnbMPTb4zlzxi8PgHaHa?pid=Api&P=0&h=180'/>
      <Card sal='65-75k' desig='San Francisco' company='Microsoft' jobRole='Cloud Engineerr' t1='Part-time' t2='Senior level' img='https://tse1.mm.bing.net/th/id/OIP.VhknVB80Wi7s22YHKKfsvwHaHa?pid=Api&rs=1&c=1&qlt=95&w=115&h=115'/>
      <Card sal='$ 180/hr' desig='San Francisco' company='Flipcart' jobRole='AI / ML Engineer' t1='Full-time' t2='Flexible Schedule' img='https://tse3.mm.bing.net/th/id/OIP.vBmeNfhXI1Sue8fAfAmKWAHaEK?pid=Api&P=0&h=180'/>
      <Card sal='$ 120-170/hr' desig='San Francisco' company='Cognizant' jobRole='Full Stack Developer' t1='Part-time' t2='Senior level' img='https://tse2.mm.bing.net/th/id/OIP.XeCInlyjxFrMO-d9peZIlAHaHa?pid=Api&P=0&h=180'/>
      <Card />
      <Card /> */}
      


    </div>
    </>
  )
}

export default App