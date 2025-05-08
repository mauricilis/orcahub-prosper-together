
import { LucideIcon } from "lucide-react";

interface BenefitCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  index: number;
}

const BenefitCard = ({ icon: Icon, title, description, index }: BenefitCardProps) => {
  return (
    <div 
      className={`p-6 rounded-lg shadow-md bg-white border border-gray-100 flex flex-col items-center text-center transition-all hover:shadow-lg hover:border-orca-100 ${
        index % 2 === 0 ? "animate-fade-in-left" : "animate-fade-in-right"
      }`}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="p-4 rounded-full bg-orca-100 text-orca mb-4">
        <Icon className="h-8 w-8" />
      </div>
      <h3 className="text-xl font-bold mb-2 text-gray-800">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default BenefitCard;
