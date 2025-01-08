export const Testimonials = () => {
  const testimonials = [
    {
      quote: "The personalized financial strategy they created has put me on track for a comfortable retirement.",
      author: "Sarah M.",
      title: "Client since 2021",
    },
    {
      quote: "They helped me secure my family's future with the right life insurance coverage.",
      author: "Michael R.",
      title: "Client since 2020",
    },
    {
      quote: "Their expertise in financial planning has been invaluable for my family's future.",
      author: "David L.",
      title: "Client since 2022",
    },
  ];

  return (
    <div className="py-20 bg-primary text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          What Our Clients Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white/10 p-6 rounded-lg backdrop-blur-sm animate-fadeIn"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <p className="text-lg mb-4">"{testimonial.quote}"</p>
              <div>
                <p className="font-semibold">{testimonial.author}</p>
                <p className="text-sm opacity-75">{testimonial.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};