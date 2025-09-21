import React, { useEffect, useRef, useState } from "react";
import {
  Book,
  BookOpen,
  MessageCircle,
  Info,
  LogOutIcon,
  Volume2Icon,
  VolumeOffIcon,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "./ui/button";
import { Krishna_Flute } from "@/utils/constant";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Language, useLanguage } from "@/context/Language";

export const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const { language, setLanguage } = useLanguage();

    const navItems = [
    { label: "Ask Gita", icon: MessageCircle, path: "/chat" },
    { label: "About Gita", icon: Info, path: "/about" },
    { label: "Chapters", icon: Book, path: "/chapters" },
    { label: "Verses", icon: BookOpen, path: "/verses" },
    { label: "Meditation", icon: BookOpen, path: "/meditation" },
  ];

  const handleLogOut = () => {
    localStorage.removeItem("token");
    navigate("/login"); 
  };

  const toggleSound = () => {
    if (isOpen) {
      audioRef?.current?.pause();
    } else {
      audioRef?.current?.play();
    }
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (audioRef?.current) {
      audioRef.current.volume = 1;
      audioRef.current.loop = true;
    }
  }, []);

  return (
    <nav className="">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.label}
                  onClick={() => navigate(item.path)}
                  className="flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200 text-orange-700 hover:bg-orange-100 hover:text-orange-800"
                >
                  <Icon className="w-4 h-4" />
                  <span className="text-sm font-medium">{item.label}</span>
                </button>
              );
            })}
          </div>

          <div className="flex items-center gap-3">
            <Select
              value={language}
              onValueChange={(val: Language) => setLanguage(val)}
            >
              <SelectTrigger className="w-16 md:w-24 rounded-xl border border-orange-300 hover:bg-orange-100 hover:text-orange-800 font-semibold text-orange-700">
                <SelectValue placeholder={`${language}`} />
              </SelectTrigger>
              <SelectContent className="py-2 bg-white rounded-xl shadow-lg">
                <SelectItem
                  value="en"
                  className="px-12 border-b py-2 hover:bg-orange-500 hover:text-white font-semibold"
                >
                  English
                </SelectItem>
                <SelectItem
                  value="hi"
                  className="px-12 border-b py-2 hover:bg-orange-500 hover:text-white font-semibold"
                >
                  हिन्दी
                </SelectItem>
              </SelectContent>
            </Select>

            {/* Flute Sound */}
            <audio ref={audioRef} src={Krishna_Flute} preload="auto" />
            <Button
              variant="outline"
              onClick={toggleSound}
              className="rounded-full w-8 h-8 md:w-10 md:h-10 border-orange-300 text-orange-700 hover:bg-orange-100"
            >
              {isOpen ? <Volume2Icon /> : <VolumeOffIcon />}
            </Button>

            {/* Logout */}
            <div className="relative group">
              <Button
                variant="default"
                className="rounded-full w-8 h-8 md:w-10 md:h-10 bg-orange-500 hover:bg-orange-600"
                onClick={handleLogOut}
              >
                <LogOutIcon />
              </Button>
              <p className="absolute left-1/2 -translate-x-1/2 top-12 text-sm text-white bg-orange-600 px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition">
                Logout
              </p>
            </div>
          </div>

          {/* Mobile Nav */}
          <div className="md:hidden flex items-center space-x-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.label}
                  onClick={() => navigate(item.path)}
                  className="p-2 rounded-lg transition-all duration-200 text-orange-700 hover:bg-orange-100"
                >
                  <Icon className="w-5 h-5" />
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
};
