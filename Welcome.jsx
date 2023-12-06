import { useState, useRef, useEffect } from "react";

const WelcomePage = () => {
  const [showSocialLinks, setShowSocialLinks] = useState(false);
  const leftPanelRef = useRef(null);

  const toggleSocialLinks = () => {
    setShowSocialLinks(!showSocialLinks);
  };

  const getRandomDirection = () => {
    const directions = ["top", "bottom", "left", "right"];
    const randomDirection =
      directions[Math.floor(Math.random() * directions.length)];
    return randomDirection;
  };

  const moveElement = () => {
    const direction = getRandomDirection();

    leftPanelRef.current.style.transition = "transform 0.3s ease";

    switch (direction) {
      case "top":
        leftPanelRef.current.style.transform = "translateY(-10px)";
        break;
      case "bottom":
        leftPanelRef.current.style.transform = "translateY(10px)";
        break;
      case "left":
        leftPanelRef.current.style.transform = "translateX(-10px)";
        break;
      case "right":
        leftPanelRef.current.style.transform = "translateX(10px)";
        break;
      default:
        break;
    }
  };

  const resetElement = () => {
    leftPanelRef.current.style.transition = "transform 0.3s ease";
    leftPanelRef.current.style.transform = "none";
  };

  useEffect(() => {
    const interval = setInterval(() => {
      moveElement();
      setTimeout(resetElement, 300);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div className="bg-gradient-to-r from-blue-400 to-purple-600 min-h-screen flex flex-col md:flex-row items-center justify-center relative">
        <div className="text-center text-white z-10 p-4 md:p-0 md:flex-1">
          <h1
            onMouseEnter={moveElement}
            onMouseLeave={resetElement}
            className="text-4xl md:text-6xl font-bold mb-4"
          >
            Developer by Day, Dreamer by Night
          </h1>
          <p
            onMouseEnter={moveElement}
            onMouseLeave={resetElement}
            className="text-xl mb-8"
          >
            Come, Discover a spectrum of my coding skills,
          </p>
          <p
            onMouseEnter={moveElement}
            onMouseLeave={resetElement}
            className="text-xl mb-8"
          >
            from front-end finesse to back-end robustness, woven into real-world
            applications.
          </p>
          <button
            onMouseEnter={moveElement}
            onMouseLeave={resetElement}
            onClick={toggleSocialLinks}
            className="bg-white text-black py-2 px-6 rounded-full shadow-lg hover:bg-gray-200 transition-colors duration-300"
          >
            Get in Touch
          </button>
        </div>
        {showSocialLinks && (
          <div
            ref={leftPanelRef}
            className="fixed top-20 md:top-10 md:left-10 w-40 md:w-auto h-80 md:h-auto overflow-y-auto"
          >
            <div className="bg-gray-800 bg-opacity-75 h-80 p-8">
              <ul>
                <li className="mb-4">
                  <a
                    onMouseEnter={moveElement}
                    onMouseLeave={resetElement}
                    href="https://www.linkedin.com/in/arya-bhattacharyya-538872261/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white text-lg block py-2 px-4 rounded-lg bg-blue-500 hover:bg-blue-600 transition-colors duration-300"
                  >
                    LinkedIn
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    onMouseEnter={moveElement}
                    onMouseLeave={resetElement}
                    href="https://devfolio.co/profile"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white text-lg block py-2 px-4 rounded-lg bg-pink-500 hover:bg-pink-600 transition-colors duration-300"
                  >
                    DevFolio
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    onMouseEnter={moveElement}
                    onMouseLeave={resetElement}
                    href="https://twitter.com/AryaBhatta81219"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white text-lg block py-2 px-4 rounded-lg bg-green-500 hover:bg-green-600 transition-colors duration-300"
                  >
                    Twitter
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    onMouseEnter={moveElement}
                    onMouseLeave={resetElement}
                    href="https://github.com/aryab2003"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white text-lg block py-2 px-4 rounded-lg bg-gray-500 hover:bg-gray-600 transition-colors duration-300"
                  >
                    GitHub
                  </a>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default WelcomePage;
