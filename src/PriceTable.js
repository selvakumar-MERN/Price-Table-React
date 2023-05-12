import React from "react";
import "./common.css"
function Pricetable(props){
    return(
        <div className='row'>
        { props.Price.map((items)=>{
           return (
                  <div className='col-lg-4'>
                    <div class="card mb-5 mb-lg-0">
                     <div className="card-body">
           
                      <h5 className="card-title text-muted text-uppercase text-center">{items.title}</h5>
                      <h6 className="card-price text-center">{items.price}<span className="period">/{items.period}</span></h6>
                      <hr></hr>
                      <ul class="fa-ul">
                             { items.feature.map((values)=>{

                           return (
                            <li className={values.listclass}><span class={values.spanclass}><i class={values.icon}></i></span>{values.details}</li>
                           )
                    })
                        }
                      </ul>
                      <div class="d-grid">
                       <a href="#" class="btn btn-primary text-uppercase">Button</a>
                      </div>
                        
                      </div>
                    </div>
                 </div>
           ) 
        }
        )}
          </div>
    )
}
                
export default Pricetable