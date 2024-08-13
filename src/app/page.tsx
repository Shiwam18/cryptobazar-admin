import Image from "next/image";
import styles from "./page.module.css";
import Dashboard from "./components/Dashboard/dashboard";
import Alertify from "./components/Alertify/alertify";

export default function Home() {
  return (
    <div>
      {/* <Alertify /> */}
      <Dashboard />
    </div>
  );
}
