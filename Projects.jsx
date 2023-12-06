const Projects = () => {
  // Sample project data (you can replace this with your own data)
  const projects = [
    {
      id: 1,
      title: "DeeCom",
      description:
        "Mitigating breaches and theft in supply chains using decentralized smart contracts.",
      techStack: "Solidity, Ether, JavaScript, Hardhat.js",
      imageUrl:
        "data:image/jpeg;base64,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", // Replace with actual image URL
    },
    {
      id: 2,
      title: "PyPred",
      description:
        "Machine learning-based trading investment strategy predicting stock trends.",
      techStack: "Keras, Scikit-Learn, NumPy, Pandas, Matplotlib, yFinance",
      imageUrl:
        "https://builtin.com/sites/www.builtin.com/files/styles/og/public/2022-07/ai-graphs-ai-trading-stock-market-tech.png", // Replace with actual image URL
    },
    {
      id: 3,
      title: "WeatherGo",
      description:
        "Sleek and user-friendly weather application providing real-time weather updates.",
      techStack: "Js.DOM, Weather API",
      imageUrl:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAjVBMVEUAAAD+/v7////8/Pzl5eVQUFAEBAT7+/u8vLzBwcFlZWX29vbT09OioqLs7Ozd3d3y8vJeXl7Y2NhCQkKqqqqEhISNjY2enp6srKwwMDBHR0dZWVnMzMx2dnbi4uKWlpYPDw97e3sYGBg1NTUcHBwoKCi0tLQkJCRMTEyHh4e/vb5ERESTkZJsbGw7OzvmHlD0AAAJcElEQVR4nO2cfXuqPA/AIXUUh4KvqNM5dZtu99y+/8d72tICOqblpUXPk98fu87FQWhIm6ZJWsdBEARBEARBEARBEARBEARBEARBEARBEARB/jk2bTfAJMOOGz233QijdMEF+KdF9MElsG67FSZhErpup+1WmIRLCP++hFHbrTCJkLDXditMghLePyjh/YMS3j8o4f3zfyLhqO1WmOTePG/v1z+uUVJC9txdiacbgL27TydlJdTvpZ4zhemuUtMaYwQuzHVv9pw5sPtn+o+P2e3thgQmfM3ORfQ01bgPqO4HYY88Atf5tnLzGkBEJVyYaN7u5f5q3HwEKj9ge3yAElHfHOjd6Ykuyp89WFRtXX1YP3oUrRBabNbkcQ22LqAYfN+iHQT6TsMyvgBhfRTC1yYfWoFMi319c6PzWGFkmAbbFjDpqKBEbOypTIPCyARtdtGMnBabwXNmiQbDn6YeWYtMi7NmhmKmwacGnlYfPviGDXZU9rw+ECHgT6suaZ4TLdZ9lpc4StQNxg00rSFYq4aNicgEZBoE3kW9m9Eh1+JSzs+1H7Vk34oQl97GGEzxnKSjNpB1eRK94UaMTA6Pf3zWt/b1HzVjz7k1DXL4WAwGl4bh+8Nzf+6vRtHKnw0vWZEpbd+TKeKSy7b7fumGBPIEq7jYX0meczsmRofHVSCEcvNwIbuiZuG+hClgGp7JlsrIp4T5Q9vtq8tD5w/5Uk2uhm23sRYvF+VLhCSNr57t8Rqdy6fszOnF8LHtllbCc7YUzqWjYYcRnAkJbnyXWuzDiXQDfzteyOju4SdenwhJW40YVoKv8VTzCQXo/rInD/sgExGCx7vT4meu+dAtXKsvurl7wrc7E/E51/j1n3PeY6bGu8u5+ZD2v4tLxllqjZpw2q2yZ03nK1l6ZSY49FIRP+20rCQXxs5/bHLQCeiKNb0Q8TYia7/Y7MZP49fD2+lVLjmzJNHuWpjYEwvCRMIbLFocT/e9kMrlUCfyZ88PG35dCfWx1DKQe6lFuK0p4xCvBsI3ATWnC6/FDfdpHbenG+iXdonUj/I0A294PJLSidj0uXPWi9UyVjOVMWo6bF4H1uTFnMrgYTHsuuuXinYukn4K9O36vRbouyLxdRkAXz+r4iknVjubbAyemc25k8SlJ4rkgc6cjPsSCbe1FLH1teJTB2heCKDRahLH2+007vujwdmqKBhqt3cpM62z9iQUL54BKDXx0Nl6duZyfn2u3LyQ2nUUniN9m2DTbLPLsekBpVJCgHD2XnjXcy+Tkeh6m55Ml7sQN9jgsryHzMIwCUXiJPpOGnZKMuy+fC4jEQMVehudZ7PfyS+3arbRZXgdgLIvEH5fuXcFPEEmtNjRXPmtmsrtVMNzltk6x9WYmB9D9T14plOHmZxiv2o2tSqvnVTAzofWL3yxfHKTegMNLcpFc+HmPQv29b2XqqSr+5upsjgw2GjcPpQS/mGbPIXu60vip/b/Rf9H41CokejVF35AgamxNjnGVM7z5TaAbqLE36Q6FvJVSnhSBu45i0l/xuhL5hNG8w76OHApKTWDy+bJRQPVicLsinXYK/Ltmy1XZO2MEk+GwrH0ryPVu6dXV/skMab+6WVSkPmAsHQ7Lr7ZOYKY5iuFw3YDZaGWV+7cuIVFOYUSNhx6fEsGE6lWZP+R6J9cNai74oKVwl7acBJgpb5itex6rKIwV3rAAoqN9az7i4Z916Ga1Y4VbfdIhQsvf6GllFBHP81OIlKF1TeCPKlP1L3Ysq18T+F4NTkvPqlOVj0b3VXhuKXz7Y8CVxZj9OPnTe4umawC6/sr9nJGqxGu/VEfKewAUBXhFqwnB6Wg5Du0sL2CSGNfPRPNC2KVWOmfjN5YhsjXom7MeoLmu+4oFM2XCxPi/oIQ4HO8UCNPi4P18hP/Dxtejsci5WUTeCjH+LgDQQNtLkcgh1DNkvLoV2z8RMQkTuo5m17fdqxNLdrquknTy3U1ANFrS2HEvgy3l3e5T1mcFmb8qqohQK/5rYYYyUBtceCwBCJsQ0SYdeTP4s+XSTfMC8kc7HYK16VnXz8Axj8VE6gzyanqsI0AUvsK4ab2W8qjIgv1t1/7POl2zEfdhMKWWfiY2s8Be5mvWD8l1CezYnP8nKs4sR8NfqO1fVIFTycWD7NDlGmx3qxbDh5yiGUi1LQ33FX5LKi4BK2E5zhZpYvpAZKWf1nsp57zFqZmznx6PSuhslWO4TmLQTYv11hX6NJNpwzjr5J4g1yulxpelPIxr/I+dlZP2XJHzoYWlt3DtJ8+W+mnWeUn84knV5KFzdBTw97KwSDHTMCeWJEa/6qe85VOGRb2PD0oAYlrsf7aV9Ec//q9NfEGqQaXFvNbB6VDavhFnuNLT4ZaPUuVH3ySliia5TG1ake7BUpp5Niod8okCsUIJNR+oeCAWpgSPbZgokLCFoo9pSNs1g32nCQxTQh8Wg8qqF02dGPyLe+JmSHEtX8+01YNRKOnYci4BWnj3Dhl40CvYKciL0rCqcm3FKN8U2L0NIW9krCFzQ9qK1FQO3Z5CbWwt58/SPuPCweTb1FV821stJorW2r0LTLwdSUjbQIv/bpmw0Jy6Qv/tRBiD1wLPk1Oh5bxxKkm4t1m3cXMc7KuQ7WJzex0qGaLNmxpKGdDw69WqUywfrxIumozPEDSRZp1n6an1t2mU6XKoNnOA6XBIeOxNl+tnix3UxWhbSDPdRF+aleyArY8I6ZBGgtrmiSKwXxvexsfPCdO6/otnNIWq3dZPJVancBASp31WpWN2v1jz69RLrfYE2Qhvv4CBNQHNQ6T5y1NxdrI4yWJJ1ctgy2kusb7rKrG2qHIYyBUVuePfsx2m20vVzZksdxkK0QU+3ncBs56/IvlPDjZcBpY3Mn9DckmGT5p0PyJY+OH+nwtFj/L79mKZucVCAGp1eM8P6ibZrkBQr6b+bPvR50GWKen77l5IBjbdDE85z07p4v119xZArVhwpBfpabsK75b36jez/Ztm4aChbRoAYvu9fPkmoDptdvWibo/K9MyigGwX7R4ksLHyKSMvFB/0G/1mAh+em502Wzk+ON/ii7Ji/KAz7bPwniI51EvCgdBEFAaDMIwZCY/itZhQM9sq0s7q1XUGQTnwmZ/1aUBhN3j3R/tyXSzex9vTq7sFot83uWWTk1CEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEOTG+B8k21+Ha9uGcgAAAABJRU5ErkJggg==", // Replace with actual image URL
    },
    {
      id: 4,
      title: "StellarMed",
      description:
        "Remote Patient Monitoring to reduce physical doctor visits.",
      techStack: "Tailwind CSS, Material UI, Firebase, Scikit-Learn, Streamlit",
      imageUrl:
        "data:image/png;base64,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", // Replace with actual image URL
    },
  ];

  return (
    <div className="bg-gradient-to-r from-blue-200 to-pink-300 py-12">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center text-white-500">
          Projects
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-lg overflow-hidden shadow-md transform hover:scale-105 transition duration-300 sm:hover:scale-110 sm:transition-none sm:duration-500 sm:px-4 md:px-6 lg:px-8"
            >
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
                <p className="text-gray-600 mb-2">{project.description}</p>
                <p className="text-gray-600">{project.techStack}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
