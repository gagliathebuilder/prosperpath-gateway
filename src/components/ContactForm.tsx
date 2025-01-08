import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    toast({
      title: "Thanks for reaching out!",
      description: "We'll contact you within 24 hours to schedule your consultation.",
    });
    setFormData({ name: "", email: "", phone: "" });
  };

  return (
    <div id="contact-form" className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-md">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
          Get Your Free Consultation
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <Input
              placeholder="Your Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
              className="w-full"
            />
          </div>
          <div>
            <Input
              type="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
              className="w-full"
            />
          </div>
          <div>
            <Input
              type="tel"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              required
              className="w-full"
            />
          </div>
          <Button type="submit" className="w-full bg-secondary hover:bg-secondary/90">
            Schedule My Free Consultation
          </Button>
        </form>
      </div>
    </div>
  );
};