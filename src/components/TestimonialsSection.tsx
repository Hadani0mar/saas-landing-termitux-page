
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "استخدم TermiSaaS منذ إطلاقه، وقد غير تمامًا طريقة تفاعلي مع Termux. التحسين في الإنتاجية مذهل!",
    author: "أحمد محمود",
    title: "مطور برمجيات",
    avatar: "https://i.pravatar.cc/150?img=1",
    stars: 5,
  },
  {
    quote:
      "كمسؤول نظام، أصبحت إدارة خوادمي أسهل بكثير مع TermiSaaS. واجهة المستخدم بديهية والأدوات قوية جدًا.",
    author: "ليلى الهاشمي",
    title: "مهندسة أنظمة",
    avatar: "https://i.pravatar.cc/150?img=5",
    stars: 5,
  },
  {
    quote:
      "تطبيق رائع حقًا! لقد وفر علي الكثير من الوقت في إدارة مشاريعي وأتمتة المهام الروتينية.",
    author: "خالد العمري",
    title: "مطور تطبيقات موبايل",
    avatar: "https://i.pravatar.cc/150?img=3",
    stars: 4,
  },
  {
    quote:
      "أنا مبتدئ في استخدام Termux، وقد ساعدني TermiSaaS كثيرًا في تبسيط العمليات المعقدة. شكرًا للفريق!",
    author: "نور الدين",
    title: "طالب علوم حاسوب",
    avatar: "https://i.pravatar.cc/150?img=4",
    stars: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-brand-50 to-white" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 heading-gradient">
            ماذا يقول عملاؤنا
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            آراء المستخدمين الحقيقيين الذين يستخدمون TermiSaaS يوميًا
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="bg-white border border-gray-100 shadow-sm overflow-hidden card-hover"
            >
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {Array(5)
                    .fill(null)
                    .map((_, starIndex) => (
                      <Star
                        key={starIndex}
                        className={`h-5 w-5 ${
                          starIndex < testimonial.stars
                            ? "text-yellow-400 fill-yellow-400"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                </div>
                <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center">
                  <div className="ml-4">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.author}
                      className="h-12 w-12 rounded-full object-cover"
                    />
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-900">
                      {testimonial.author}
                    </h5>
                    <p className="text-gray-500 text-sm">{testimonial.title}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
