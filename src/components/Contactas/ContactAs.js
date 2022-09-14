import React from "react";
import './contact.css'

export default function ContactAs() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-6 mx-auto form p-5">
          <form>
            <div class="mb-3">
              <label for="name" class="form-label">Name</label>
              <input type="email" class="form-control"  id="name"   />
            </div>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">
                Email address
              </label>
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
              <div id="emailHelp" class="form-text">
                We'll never share your email with anyone else.
              </div>
            </div>
            <div class="mb-3">
              <label for="contact" class="form-label">
               Contact No 
              </label>
              <input  type="number"  class="form-control" id="contact" />
            </div>
            <div class="mb-3">
              <label for="requirement" class="form-label">
               Requirement 
              </label>
              <textarea class="form-control" id="requirement" rows="3"></textarea>
            </div>
    
            <button type="submit" class="btn btn-primary px-2">
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
