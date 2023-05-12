import Pricetable from './PriceTable';
import "./common.css"

function App() {
  const Price=[{
    title:"FREE",
    price:"$0",
    period:"month",
    feature:[
      {listclass:"",spanclass:"fa-li",icon:"fa fa-check",details:"Single User"},
      {listclass:"",spanclass:"fa-li",icon:"fa fa-check",details:"5GB Storage"},
      {listclass:"",spanclass:"fa-li",icon:"fa fa-check",details:"Unlimited Public Projects"},
      {listclass:"",spanclass:"fa-li",icon:"fa fa-check",details:"Community Access"},
      {listclass:"text-muted",spanclass:"fa-li",icon:"fa fa-times",details:"Unlimited Private Projects"},
      {listclass:"text-muted",spanclass:"fa-li",icon:"fa fa-times",details:"Dedicated Phone Support"},
      {listclass:"text-muted",spanclass:"fa-li",icon:"fa fa-times",details:"Free Subdomain"},
      {listclass:"text-muted",spanclass:"fa-li",icon:"fa fa-times",details:"Monthly Status Reports"},
    ]
  },
  {
    title:"PLUS",
    price:"$9",
    period:"month",
    feature:[
      {listclass:"",spanclass:"fa-li",icon:"fa fa-check",details:"5 Users"},
      {listclass:"",spanclass:"fa-li",icon:"fa fa-check",details:"50GB Storage"},
      {listclass:"",spanclass:"fa-li",icon:"fa fa-check",details:"Unlimited Public Projects"},
      {listclass:"",spanclass:"fa-li",icon:"fa fa-check",details:"Community Access"},
      {listclass:"",spanclass:"fa-li",icon:"fa fa-check",details:"Unlimited Private Projects"},
      {listclass:"",spanclass:"fa-li",icon:"fa fa-check",details:"Dedicated Phone Support"},
      {listclass:"",spanclass:"fa-li",icon:"fa fa-check",details:"Free Subdomain"},
      {listclass:"text-muted",spanclass:"fa-li",icon:"fa fa-times",details:"Monthly Status Reports"},
    ]

  },
  {
    title:"PRO",
    price:"$49",
    period:"month",
    feature:[
      {listclass:"",spanclass:"fa-li",icon:"fa fa-check",details:"Unlimited User"},
      {listclass:"",spanclass:"fa-li",icon:"fa fa-check",details:"150GB Storage"},
      {listclass:"",spanclass:"fa-li",icon:"fa fa-check",details:"Unlimited Public Projects"},
      {listclass:"",spanclass:"fa-li",icon:"fa fa-check",details:"Community Access"},
      {listclass:"",spanclass:"fa-li",icon:"fa fa-check",details:"Unlimited Private Projects"},
      {listclass:"",spanclass:"fa-li",icon:"fa fa-check",details:"Dedicated Phone Support"},
      {listclass:"",spanclass:"fa-li",icon:"fa fa-check",details:"Unlimited Free Subdomain"},
      {listclass:"",spanclass:"fa-li",icon:"fa fa-check",details:"Monthly Status Reports"},
    ]

  }
  
]
  return (

    <div className='pricing'>
    <div className="container">
      
          <Pricetable Price={Price}/>
          
          
         </div>
      </div>
    
  );
}

export default App;
