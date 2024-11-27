import { Laptop2, MessageSquare } from "lucide-react";
import { Link } from "react-router-dom";

const NoChatSelected = () => {
  return (
    <div className="w-full flex flex-1 flex-col items-center justify-center p-16 bg-base-100/50">
      <div className="max-w-md text-center space-y-6">
        {/* Icon Display */}
        <div className="flex justify-center gap-4 mb-4">
          <div className="relative">
            <div
              className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center
             justify-center animate-bounce"
            >
              <MessageSquare className="w-8 h-8 text-primary " />
            </div>
          </div>
        </div>

        {/* Welcome Text */}
        <h2 className="text-2xl font-bold">Welcome to Babble!</h2>
        <p className="text-base-content/60">
          Select a conversation from the sidebar to start chatting
        </p>
        <Link
          to={"/dev"}
          className={`
              btn btn-sm gap-2 transition-colors rounded-full`}
        >
          <Laptop2 className="w-4 h-4" />
          <span className="hidden sm:inline">
            <span className="text-sm">Say Hi! to the</span> Developer
          </span>
        </Link>
      </div>
    </div>
  );
};

export default NoChatSelected;
