"use client"
import axios from "axios";
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Register(){
    const session = useSession();
    const router= useRouter();
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const handleSubmit = () => {
        if(username && password){
            const data= {
                username,
                password,
            }
            const response = axios.post("api/auth/register", {username, password});
            
        }
    }
    return(
        <div className="wrapper-page">
  <div className="card">
    <div className="card-body">
      <div className="text-center">
        <a href="index.html" className="logo logo-admin">
          <img src="images/logo.png" height={50} alt="logo" />
        </a>
      </div>
      <div className="p-3">
        <form className="form-horizontal" action={handleSubmit}>
          <div className="form-group row mb-4">
            <div className="col-12">
              <input
                className="form-control"
                type="text"
                required
                placeholder="Username"
                onChange={(e)=>setUsername(e.target.value)}
              />
            </div>
          </div>
          <div className="form-group row mb-4">
            <div className="col-12">
              <input
                className="form-control"
                type="password"
                required
                placeholder="Password"
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
              />
            </div>
          </div>
          <div className="form-group row mb-4">
            <div className="col-12">
              <div className="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="customCheck1"
                  required
                />
                <label
                  className="custom-control-label font-weight-normal ms-3"
                  htmlFor="customCheck1"
                >
                  I accept{" "}
                  <a href="#" className="text-muted ms-1">
                    Terms and Conditions
                  </a>
                </label>
              </div>
            </div>
          </div>
          <div className="form-group text-center row m-t-20">
            <div className="col-12">
              <button
                className="btn btn-danger btn-block waves-effect waves-light w-100"
                type="submit"
              >
                Register
              </button>
            </div>
          </div>
          <div className="form-group m-t-10 mb-0 row">
            <div className="col-12 m-t-20 text-center">
              <a href="/login" className="text-muted">
                Already have account?
              </a>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>

    )
}