import { Button } from "@/components/ui/button";

export const Hero = () => {
  const scrollToForm = () => {
    document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative min-h-[80vh] flex items-center bg-gradient-to-br from-primary to-secondary/90 text-white px-4 py-20">
      <div className="container mx-auto">
        <div className="max-w-2xl animate-fadeIn">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Secure Your Future with Expert Financial Planning
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            Personalized strategies for wealth building, retirement planning, and life insurance protection.
          </p>
          <Button 
            onClick={scrollToForm}
            size="lg" 
            className="bg-white text-primary hover:bg-gray-100 text-lg"
          >
            Get Your Free Consultation
          </Button>
        </div>
      </div>
    </div>
  );
};