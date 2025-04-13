import { Suspense } from "react";
import "./App.css";
import DaisyNav from "./components/DaisyNav/DaisyNav";
import Navbar from "./components/navbar/Navbar";
import PricingOptions from "./components/pricing_options/PricingOptions";
import ResultChart from "./components/result_chart/ResultChart";
import axios from "axios";
import MarksChart from "./components/marks_chart/MarksChart";

const pricingPromise = fetch("pricingData.json").then((res) => res.json());
const marksPromise = axios.get("marksData.json");
function App() {
  return (
    <>
      <header>
        <Navbar></Navbar>
        {/* <DaisyNav></DaisyNav> */}
      </header>

      <main>
        <Suspense
          fallback={
            <span className="loading loading-spinner loading-lg"></span>
          }
        >
          <PricingOptions pricingPromise={pricingPromise}></PricingOptions>
        </Suspense>

        <Suspense fallback={<p>Loading....</p>}>
          <MarksChart marksPromise={marksPromise}></MarksChart>
        </Suspense>

        <ResultChart></ResultChart>
      </main>
    </>
  );
}

export default App;
