import { Shield, TrendingUp, Heart, Clock } from "lucide-react";

const benefits = [
  {
    icon: Shield,
    title: "Protection First",
    description: "Comprehensive life insurance solutions to protect what matters most",
  },
  {
    icon: TrendingUp,
    title: "Wealth Building",
    description: "Strategic investment planning for long-term financial growth",
  },
  {
    icon: Heart,
    title: "Family Security",
    description: "Ensure your family's financial future is protected",
  },
  {
    icon: Clock,
    title: "Retirement Ready",
    description: "Custom retirement strategies for a comfortable future",
  },
];

export const Benefits = () => {
  return (
    <div className="py-20 bg-accent">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          How We Help You Succeed
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow animate-fadeIn"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <benefit.icon className="w-12 h-12 text-secondary mb-4" />
              <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};