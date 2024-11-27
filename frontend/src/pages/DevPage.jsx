import { Github, Home, Instagram, Linkedin, Twitter } from "lucide-react";
import { useNavigate } from "react-router-dom";

const DeveloperCreditPage = () => {
  const navigate = useNavigate();

  return (
    <div className="h-full w-full pt-32">
      <div className=" flex flex-col items-center">
        <div className="w-full max-w-5xl flex flex-col lg:flex-row justify-between items-center gap-8">
          <div className="flex flex-col sm:flex-row items-center space-y-6 sm:space-y-0 sm:space-x-6">
            <img
              src="dev.jpg"
              alt="Developer Avatar"
              className="w-40 h-40 rounded-md"
            />

            <div className="text-center sm:text-left">
              <span className=" text-sm uppercase btn btn-sm p-1 px-4 rounded-full animate-pulse">
                Developer
              </span>
              <h1 className="text-3xl font-bold  mt-2">Ayush Pandey</h1>
              <p className=" mt-2">Connect Me on</p>
              <div className="flex justify-center sm:justify-start space-x-4 mt-2">
                {[
                  {
                    href: "https://www.linkedin.com/in/ayush-pandey-654486291/",
                    Icon: Linkedin,
                  },
                  { href: "https://github.com/ayushxcodes", Icon: Github },
                  {
                    href: "https://instagram.com/ayushpandey4257",
                    Icon: Instagram,
                  },
                ].map(({ href, Icon }) => (
                  <a
                    key={href}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-sm rounded-full"
                  >
                    <Icon className="w-8 h-8 p-2 rounded-sm" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="w-full max-w-5xl border-t border-neutral-700 my-8"></div>

        <div className="w-full max-w-5xl px-4 sm:px-8">
          <h2 className="text-2xl font-bold ">About</h2>
          <p className=" mt-4">
            Hi there! I&apos;m Ayush, a 3rd-year Medi-caps University BTech CS student
            who combines creativity and code to create powerful digital
            experiences. Possessing a talent for both front-end and back-end
            development, I&apos;m extending my knowledge with Three.js and 3D web
            development while exploring MERN and Next.js.
          </p>
          <p className=" mt-4">
            I&apos;m now honing my development abilities as an intern at{" "}
            <a href="https://expelee.com" target="_blank" className="btn btn-sm rounded-full">
              @Expelee
            </a>{" "}
            and assisting others in their coding journey as a Tech Mentor at{" "}
            <a href="https://muacm.vercel.app" target="_blank" className="">
              @MU-ACM
            </a>
            . Not only I code, but I&apos;m also a passionate graphic designer, video
            editor, and UI/UX designer, so I can offer a complete creative
            package to any project.
          </p>
          <p className=" mt-4">
            When I’m not coding or designing, I’m often found sharing my
            insights as a public speaker, empowering others with tech knowledge
            and hands-on experience.
          </p>
          <div className="mt-4">
            <h3 className=" font-bold">🎯 Key Skills:</h3>
            <ul className=" list-disc list-inside mt-2 space-y-1">
              <li>
                <span className="">Full Stack Development</span> (MERN &
                Next.js)
              </li>
              <li>UI/UX Design</li>
              <li>Front-End Development</li>
              <li>Video Editing & Graphic Design</li>
              <li>Public Speaking & Mentorship</li>
            </ul>
          </div>
          <p className=" mt-4">
            I’m always eager to learn and collaborate on innovative projects, so
            feel free to reach out if you’d like to connect or work together!
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8 px-4 sm:px-0 pb-32 ">
          <button
            onClick={() => navigate("/")}
            className=" btn rounded-lg w-full sm:w-auto animate-bounce"
          >
            <Home className="mr-2 h-4 w-4" />
            Back to Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeveloperCreditPage;
