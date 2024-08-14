"use client"
import Image from "next/image";
import styles from "./page.module.css";
import Dashboard from "./components/Dashboard/dashboard";
import Alertify from "./components/Alertify/alertify";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const handleLogin = () => {
    router.push("/login")
  }
  return (
    <div className="vw-100 vh-100 d-flex align-items-center justify-content-center ">

      <button className="border-0 rounded-pill bg-black text-white px-3 py-2" onClick={handleLogin}>Login</button>
      
    </div>
  );
}
