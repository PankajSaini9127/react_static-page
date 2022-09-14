import React from 'react'
import './footer.css'

export default function footer() {
  return (
    <div className="container-fluid footer">
    <div className='container '>
        <div className="row">
         <div className="col-4">
            <h5>Copyright  &copy; : adityaEngineering.com</h5>
          </div>
          <div className="col-4">
             <h5>&reg; Term & Condition</h5>
           </div>
           <div className="col-4">
           <div className="col socialicon">
                <a href=""><i class="fa fa-facebook"></i></a>
                <a href=""><i class="fa fa-instagram"></i></a>
                <a href=""><i class="fa fa-twitter"></i></a>
            
        </div>
           </div>
      </div>
    </div>
    </div>
  )
}
