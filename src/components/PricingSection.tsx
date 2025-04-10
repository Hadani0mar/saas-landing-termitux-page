
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";

const pricing = [
  {
    name: "مجاني",
    price: "0",
    description: "مثالي للمستخدمين المبتدئين",
    features: [
      "الأدوات الأساسية",
      "إدارة الحزم البسيطة",
      "3 مشاريع",
      "دعم المجتمع",
      "تحديثات محدودة",
    ],
    cta: "ابدأ مجاناً",
    isFeatured: false,
  },
  {
    name: "احترافي",
    price: "19.99",
    description: "للمطورين المحترفين والفرق الصغيرة",
    features: [
      "جميع ميزات الخطة المجانية",
      "أدوات متقدمة لإدارة المشاريع",
      "10 مشاريع",
      "دعم فني عبر البريد الإلكتروني",
      "تحديثات مستمرة",
      "بدون إعلانات",
    ],
    cta: "اشترك الآن",
    isFeatured: true,
  },
  {
    name: "مؤسسات",
    price: "49.99",
    description: "للشركات والفرق الكبيرة",
    features: [
      "جميع ميزات الخطة الاحترافية",
      "مشاريع غير محدودة",
      "دعم فني على مدار الساعة",
      "تدريب مخصص",
      "API كامل",
      "ميزات أمان متقدمة",
      "تقارير وتحليلات",
    ],
    cta: "تواصل معنا",
    isFeatured: false,
  },
];

const PricingSection = () => {
  return (
    <section id="pricing" className="py-20 bg-white" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 heading-gradient">
            خطط أسعار مناسبة للجميع
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            اختر الخطة المناسبة لاحتياجاتك وابدأ في تحسين تجربة Termux الخاصة بك اليوم
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricing.map((plan, index) => (
            <Card 
              key={index} 
              className={`${
                plan.isFeatured 
                  ? "border-brand-500 shadow-lg shadow-brand-200/40 relative" 
                  : "border-gray-200"
              } card-hover`}
            >
              {plan.isFeatured && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-brand-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                  الأكثر شعبية
                </div>
              )}
              <CardHeader>
                <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold">${plan.price}</span>
                  <span className="text-gray-500 mr-1">/شهريًا</span>
                </div>
                <CardDescription className="text-base mt-2">{plan.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <Check className="h-5 w-5 text-brand-500 ml-2 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button 
                  className={`w-full ${
                    plan.isFeatured 
                      ? "btn-gradient" 
                      : "bg-white text-brand-600 border-2 border-brand-200 hover:bg-brand-50"
                  }`}
                >
                  {plan.cta}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
