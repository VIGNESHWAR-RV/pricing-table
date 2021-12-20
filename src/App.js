//import logo from './logo.svg';
import './App.css';

const pricing = [{
  plan:"FREE",
  cost:"$0",
  duration:"/month",
  user:{user:"single User",status:"enabled"},
  data:{data:"5GB Storage",status:"enabled"},
  pub:{projects:"Unlimited Public Projects",status:"enabled"},
  access:{access:"Community Access",status:"enabled"},
  priv:{projects:"Unlimited Private Projects",status:"disabled"},
  support:{support:"Dedicated Phone Support",status:"disabled"},
  subDomain:{subDomain:"Free Subdomain",status:"disabled"},
  reports:{reports:"Monthly Status Reports",status:"disabled"}},
  
{plan:"PLUS",
cost:"$9",
duration:"/month",
user:{user:"5 Users",status:"enabled"},
data:{data:"50GB Storage",status:"enabled"},
pub:{projects:"Unlimited Public Projects",status:"enabled"},
access:{access:"Community Access",status:"enabled"},
priv:{projects:"Unlimited Private Projects",status:"enabled"},
support:{support:"Dedicated Phone Support",status:"enabled"},
subDomain:{subDomain:"Free Subdomain",status:"enabled"},
reports:{reports:"Monthly Status Reports",status:"disabled"}},

{plan:"PRO",
cost:"$49",
duration:"/month",
user:{user:"Unlimited Users",status:"enabled"},
data:{data:"150GB Storage",status:"enabled"},
pub:{projects:"Unlimited Public Projects",status:"enabled"},
access:{access:"Community Access",status:"enabled"},
priv:{projects:"Unlimited Private Projects",status:"enabled"},
support:{support:"Dedicated Phone Support",status:"enabled"},
subDomain:{subDomain:"Unlimited Free Subdomain",status:"enabled"},
reports:{reports:"Monthly Status Reports",status:"enabled"}}];

export default function App() {


  return (
    <div className="App">
    {pricing.map((prices,index)=><Table key={index} plan={prices.plan} cost={prices.cost} duration={prices.duration} user={prices.user} data={prices.data} pub={prices.pub} access={prices.access} priv={prices.priv} support={prices.support} subDomain={prices.subDomain} reports={prices.reports}/>)}
 </div>
  );
}

function Table({plan,cost,duration,user,data,pub,access,priv,support,subDomain,reports}){
 
  

  return(
    <div className="table">
      <div className="heading">
        <h1>{plan}</h1>
        <p><strong>{cost}</strong><sub>{duration}</sub></p>
      </div>
      <div className="details">
        <ul className="fa-ul">
        <li><span className="fa-li"><i className="fas fa-check"></i></span>{user.user}</li>
        <li><span className="fa-li"><i className="fas fa-check"></i></span>{data.data}</li>
        <li><span className="fa-li"><i className="fas fa-check"></i></span>{pub.projects}</li>
        <li><span className="fa-li"><i className="fas fa-check"></i></span>{access.access}</li>
        {(priv.status==="enabled")?<li><span className="fa-li"><i className="fas fa-check"></i></span>{priv.projects}</li> : <li style={{color:"grey"}}><span className="fa-li"><i className="fas fa-times"></i></span>{priv.projects}</li> }
        {(support.status==="enabled")?<li><span className="fa-li"><i className="fas fa-check"></i></span>{support.support}</li> : <li style={{color:"grey"}}><span className="fa-li"><i className="fas fa-times"></i></span>{support.support}</li>}
        {(subDomain.status==="enabled")?<li><span className="fa-li"><i className="fas fa-check"></i></span>{subDomain.subDomain}</li> : <li style={{color:"grey"}}><span className="fa-li"><i className="fas fa-times"></i></span>{subDomain.subDomain}</li>}
        {(reports.status==="enabled")? <li><span className="fa-li"><i className="fas fa-check"></i></span>{reports.reports}</li> : <li style={{color:"grey"}}><span className="fa-li"><i className="fas fa-times"></i></span>{reports.reports}</li>}
        </ul>
        <button>Button</button>
      </div>
    </div>
  );
}


