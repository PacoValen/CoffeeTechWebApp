import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface Subsection {
  title: string;
  content: JSX.Element | string;
}

interface SectionProps {
  title: string;
  subsections: Subsection[];
}

export const Section = ({ title, subsections }: SectionProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [openSubsections, setOpenSubsections] = useState<number[]>([]);

  const toggleSection = () => setIsOpen(!isOpen);

  const toggleSubsection = (index: number) => {
    setOpenSubsections((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <div className="mb-4 rounded-lg overflow-hidden shadow-md w-full md:max-w-2xl lg:max-w-4xl mx-auto">
      <button
        className="flex justify-between items-center w-full py-4 sm:py-6 px-4 sm:px-6 text-left focus:outline-none bg-[#7A939E] hover:bg-[#6A8290] transition-colors duration-200"
        onClick={toggleSection}
      >
        <span className="text-lg font-medium text-white">{title}</span>
        {isOpen ? <ChevronUp className="h-5 w-5 text-white" /> : <ChevronDown className="h-5 w-5 text-white" />}
      </button>
      {isOpen && (
        <div className="bg-white">
          {subsections.map((subsection, index) => (
            <div key={index} className="border-t border-gray-200">
              <button
                className="flex justify-between items-center w-full py-2 sm:py-3 px-4 sm:px-6 text-left focus:outline-none hover:bg-gray-50 transition-colors duration-200"
                onClick={() => toggleSubsection(index)}
              >
                <span className="text-md font-medium text-gray-700">{subsection.title}</span>
                {openSubsections.includes(index) ? (
                  <ChevronUp className="h-4 w-4 text-gray-500" />
                ) : (
                  <ChevronDown className="h-4 w-4 text-gray-500" />
                )}
              </button>
              {openSubsections.includes(index) && (
                <div className="px-4 sm:px-6 py-3 bg-gray-50">
                  <p className="text-gray-600">{subsection.content}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
