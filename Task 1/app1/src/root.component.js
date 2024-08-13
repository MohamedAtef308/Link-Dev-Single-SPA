import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./homepage";
import Listings from "./Listings";
import News from "./News";

export default function Root(props) {
  console.log(props.name, "is mounted!");

  return <BrowserRouter>
    <Routes>
      <Route path="/" element={<Homepage/>}/>
      <Route path="/listings" element={<Listings/>}/>
      <Route path="/news/:id" element={<News />}/>
    </Routes>
  </BrowserRouter>
}
