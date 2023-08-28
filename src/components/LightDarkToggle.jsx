import { useState, useEffect } from "react";
import { CiLight } from "react-icons/ci";
import { MdDarkMode } from "react-icons/md";

const LightDarkToggle = () => {
  const [islightMode, setLightMode] = useState(false);

  const toggleMode = () => {
    setLightMode(!islightMode);
  };
  /*
    --bg-color: #131a22;
    --bg2-color: #232f3e19;
    --hl-color: #48a3c6;
    --hl2-color: #e47911;
    --text-color: #f3f3f3;
    --secondary-text-color: #999999;
    --grey: #9f9f9f76;
    --spacing: 50px;
    --sm-spacing: 30px;
      */

  useEffect(() => {
    const colors = !islightMode
      ? {
          "--bg-color": "#131a22",
          "--bg2-color": "#232f3e19",
          "--hl-color": "#48a3c6",
          "--hl2-color": "#e47911",
          "--text-color": "#f3f3f3",
          "--secondary-text-color": "#999999",
          "--grey": "#9f9f9f76",
        }
      : {
          "--bg-color": "#101010",
          "--bg2-color": "#121212",
          "--hl-color": "#48a3c6",
          "--hl2-color": "#e47911",
          "--text-color": "#f3f3f3",
          "--secondary-text-color": "#9f9f9f",
          "--grey": "#9f9f9f76",
        };

    for (const property in colors) {
      const value = colors[property];
      document.documentElement.style.setProperty(property, value);
    }
  }, [islightMode]);

  return (
    <button className="toggleMode" onClick={toggleMode}>
      {islightMode ? <CiLight className="toggleIcon" /> : <MdDarkMode className="toggleIcon" />}
    </button>
  );
};

export default LightDarkToggle;
