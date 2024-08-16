"use client"
import { signIn, useSession } from "next-auth/react";
import { redirect, useRouter } from "next/navigation";
import { useEffect, useState } from "react"

export default function Login(){
    const session = useSession();
    const router= useRouter();
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const handleSubmit = async () => {
      console.log(username, password);
      const result =await signIn("credentials",{
        redirect: false,
        username,
        password,
      });
      if(result?.error){
        console.log(result.error);
      }
      else{
        router.push("/dashboard");
      }
    }

    useEffect(()=>{
      if(session.status=="authenticated") router.push("/dashboard");
    }, [])
    return (
<div className="wrapper-page">
  <div className="card">
    <div className="card-body">
      <div className="text-center">
        <a href="index.html" className="logo logo-admin">
          <img src="/images/logo.png" height={50} alt="logo" />
        </a>
      </div>
      <div className="px-3 pb-3">
        <form className="form-horizontal m-t-20" action={handleSubmit}>
          <div className="form-group row">
            <div className="col-12">
            
              <input
                className="form-control mb-3"
                type="text"
                required
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
          </div>
          <div className="form-group row">
            <div className="col-12">
              <input
                className="form-control mb-3"
                type="password"
                required
                placeholder="Password"
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
              />
            </div>
          </div>
          {/* <div className="form-group row">
            <div className="col-12">
              <div className="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="customCheck1"
                />
                <label className="custom-control-label ms-3" htmlFor="customCheck1">
                  Remember me
                </label>
              </div>
            </div>
          </div> */}
          <div className="form-group text-center row m-t-20">
            <div className="col-12">
              <button
                className="btn btn-danger btn-block waves-effect waves-light w-100"
                type="submit"
              >
                Log In
              </button>
            </div>
          </div>
          <div className="form-group m-t-10 mb-0 row">
            <div className="col-sm-7 m-t-20">
              <a href="pages-recoverpw.html" className="text-muted">
                <i className="mdi mdi-lock" />{" "}
                <small>Forgot your password ?</small>
              </a>
            </div>
            <div className="col-sm-5 m-t-20">
              <a href="/register" className="text-muted">
                <i className="mdi mdi-account-circle" />{" "}
                <small>Create an account ?</small>
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