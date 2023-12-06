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
    }, 3000); // Change the time interval here (milliseconds)

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="bg-gradient-to-r from-blue-400 to-purple-600 min-h-screen flex items-center justify-center relative">
      <div className="text-center text-white z-10">
        <h1
          onMouseEnter={moveElement}
          onMouseLeave={resetElement}
          className="text-6xl font-bold mb-4"
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
          className="fixed top-0 left-0 h-full overflow-y-auto"
        >
          <div className="bg-gray-800 bg-opacity-75 h-80 p-8">
            <ul>
              <li className="mb-4">
                <a
                  onMouseEnter={moveElement}
                  onMouseLeave={resetElement}
                  href="your-linkedin-url"
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
                  href="your-instagram-url"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white text-lg block py-2 px-4 rounded-lg bg-pink-500 hover:bg-pink-600 transition-colors duration-300"
                >
                  Instagram
                </a>
              </li>
              <li className="mb-4">
                <a
                  onMouseEnter={moveElement}
                  onMouseLeave={resetElement}
                  href="your-twitter-url"
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
                  href="your-github-url"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white text-lg block py-2 px-4 rounded-lg bg-gray-500 hover:bg-gray-600 transition-colors duration-300"
                >
                  GitHub
                </a>
              </li>
              {/* Add other social links */}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default WelcomePage;