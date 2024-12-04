import { FaLongArrowAltRight } from "react-icons/fa";
import SocialIcons from "../SocialIcons/SocialIcons";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";


const IntroSecond = () => {
  const [longestStreak, setLongestStreak] = useState(0);
  const [totalContributions, setTotalContributions] = useState(0);
  const [repositoryCount, setRepositoryCount] = useState(0);

  useEffect(() => {
    AOS.init();
    const fetchStreakData = async () => {
      try {
        const token =import.meta.env.VITE_GITHUB_TOKEN;
        const username = import.meta.env.VITE_GITHUB_USERNAME;

        const query = `
        query {
          user(login: "${username}") {
            contributionsCollection {
              contributionCalendar {
                weeks {
                  contributionDays {
                    contributionCount
                    date
                  }
                }
              }
            }
            repositories {
              totalCount
            }
          }
        }
      `;

      const response = await axios.post(
        "https://api.github.com/graphql",
        { query },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const data = response.data.data.user;

      // Process contributions
      const days = data.contributionsCollection.contributionCalendar.weeks.flatMap(
        (week) => week.contributionDays
      );

      let currentStreak = 0;
      let maxStreak = 0;
      let totalContributionsCount = 0;

      days.forEach((day) => {
        totalContributionsCount += day.contributionCount;
        if (day.contributionCount > 0) {
          currentStreak++;
          maxStreak = Math.max(maxStreak, currentStreak);
        } else {
          currentStreak = 0;
        }
      });

      // Set state values
      setLongestStreak(maxStreak);
      setTotalContributions(totalContributionsCount);
      setRepositoryCount(data.repositories.totalCount);
    } catch (error) {
      console.error("Error fetching GitHub data:", error);
    }
  };

  fetchStreakData();
  }, []);
  const handleScrollToContact = (e) => {
    e.preventDefault();
    const contactElement = document.querySelector("#contact");
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="relative">
      <div className="lg:absolute top-0 bottom-0 lg:left-[40%] flex justify-center items-center shadow-in overflow-hidden rounded-full">
        <img
          data-aos="zoom-in"
          data-aos-delay="50"
          data-aos-duration="1000"
          className="lg:h-full md:h-[450px] sm:h-[480px] imageShadow "
          src="/najatul6.png"
          alt="profile Image"
        />
      </div>

      <div className="h-full px-4 py-5 lg:py-0 flex items-center ">
        <div
          data-aos="fade-right"
          data-aos-delay="20"
          data-aos-duration="1000"
          className="w-full flex flex-col gap-2"
        >
          <h4 className="text-lg lg:text-2xl font-semibold text-white">
            Hey There
          </h4>
          <h1 className="text-4xl md:text-6xl font-semibold font-Montserrat mt-2">
            I&apos;m{" "}
            <span className=" font-Cormorant font-extrabold text-white">
              {" "}
              Najatul{" "}
            </span>
          </h1>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white font-Cormorant">
            Islam
          </h1>
          <h4 className="text-blue-light mt-4 lg:text-2xl font-bold font-Cormorant">
            Web Developer
          </h4>

          <p className="lg:w-[70%] xs:w-full text-white text-sm mt-4 xl:text-xl">
            Experienced full-stack developer with 2+ years of expertise in
            JavaScript, ReactJS, NextJS, and Graphic Design experience.
          </p>

          <div className="flex flex-col justify-start items-start gap-5 mt-6">
            <a href="#contact" onClick={handleScrollToContact}>
              <button className="shadow-in duration-300 w-full ease-in-out rounded-xl text-xs md:text-lg lg:text-2xl font-medium px-5 py-3 hover:shadow-up hover:text-blue-light active:shadow-in active:text-blue-light">
                <p className="flex justify-center items-center gap-2">
                  Get In Touch <FaLongArrowAltRight />
                </p>
              </button>
            </a>
            <div
            
            className="py-5">
              <SocialIcons />
            </div>
          </div>
        </div>

        <div
          data-aos="fade-left"
          data-aos-delay="50"
          data-aos-duration="1000"
          className="w-full hidden lg:flex sm:flex-col xs:justify-center xs:mt-4 sm:mt-0 sm:gap-8 xs:gap-2 xs:bg-gray-700/60 sm:bg-transparent p-4 rounded-lg"
        >
          <div className="flex flex-col sm:items-end xs:items-center">
            <div className="inline-flex gap-1 items-center">
              <h2 className="xl:text-8xl md:text-7xl sm:text-6xl xs:text-3xl font-semibold">
                2
              </h2>
              <h2 className="text-blue-light xl:text-8xl md:text-7xl sm:text-6xl xs:text-3xl font-extrabold">
                +
              </h2>
            </div>
            <h4 className="xs:text-sm font-Cormorant sm:text-lg xl:text-xl xs:text-center">
              Years of Experience
            </h4>
          </div>
          <div className="flex flex-col sm:items-end xs:items-center">
            <div className="inline-flex gap-1 items-center">
              <h2 className="xl:text-8xl md:text-7xl sm:text-6xl xs:text-3xl font-semibold">
                27
              </h2>
              <h2 className="text-blue-light xl:text-8xl md:text-7xl sm:text-6xl xs:text-3xl font-extrabold">
                +
              </h2>
            </div>
            <h4 className="xs:text-sm font-Cormorant sm:text-lg xl:text-xl xs:text-center">
              Longest Streak
            </h4>
          </div>
          <div className="flex flex-col sm:items-end xs:items-center">
            <div className="inline-flex gap-1 items-center">
              <h2 className="xl:text-8xl md:text-7xl sm:text-6xl xs:text-3xl font-semibold">
                1000
              </h2>
              <h2 className="text-blue-light xl:text-8xl md:text-7xl sm:text-6xl xs:text-3xl font-extrabold">
                +
              </h2>
            </div>
            <h4 className="xs:text-sm font-Cormorant sm:text-lg xl:text-xl xs:text-center">
              Component Contribution
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroSecond;
