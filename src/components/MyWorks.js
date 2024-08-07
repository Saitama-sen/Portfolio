import React, { useState } from "react";
import Summery from "./Summery";
import ReactMe from "./ReactMe";
import JavascriptMe from "./JavascriptMe";

const menuWorksItems = ["About Me", "React", "javaScript"];
export default function MyWorks() {
  const [selectedMenu, setSelectedMenu] = useState("");

  return (
    <>
      <div className="black">
        <ul className="menu-works">
          {menuWorksItems.map((item, i) => {
            return (
              <li onClick={() => setSelectedMenu(item)} key={i}>
                {item}
              </li>
            );
          })}
        </ul>
        {selectedMenu === "" && <Summery />}
        {selectedMenu === "About Me" && <Summery />}
        {selectedMenu === "React" && <ReactMe />}
        {selectedMenu === "javaScript" && <JavascriptMe />}
      </div>
    </>
  );
}
