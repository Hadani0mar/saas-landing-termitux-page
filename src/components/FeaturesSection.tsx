
import React from "react";
import { Monitor, ShieldCheck, Zap, ShoppingCart, Settings, Smartphone, Cpu } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const features = [
  {
    icon: <Monitor className="h-10 w-10 text-blue-500 dark:text-blue-400" />,
    title: "أجهزة حاسوب متطورة",
    description: "أحدث أجهزة الكمبيوتر وملحقاتها بأفضل الأسعار وبضمان شركة سيلا.",
  },
  {
    icon: <ShoppingCart className="h-10 w-10 text-blue-500 dark:text-blue-400" />,
    title: "نظم نقاط البيع",
    description: "نظام متكامل لإدارة المبيعات والمخزون مع تقارير مفصلة لأداء العمل.",
  },
  {
    icon: <ShieldCheck className="h-10 w-10 text-blue-500 dark:text-blue-400" />,
    title: "ضمان شامل",
    description: "ضمان لمدة عامين على جميع منتجاتنا مع خدمة ما بعد البيع المتميزة.",
  },
  {
    icon: <Smartphone className="h-10 w-10 text-blue-500 dark:text-blue-400" />,
    title: "الأجهزة الذكية",
    description: "مجموعة واسعة من الهواتف والأجهزة اللوحية من أشهر العلامات التجارية.",
  },
  {
    icon: <Cpu className="h-10 w-10 text-blue-500 dark:text-blue-400" />,
    title: "قطع غيار أصلية",
    description: "توفير قطع الغيار الأصلية لجميع الأجهزة والمكونات الإلكترونية.",
  },
  {
    icon: <Zap className="h-10 w-10 text-blue-500 dark:text-blue-400" />,
    title: "دعم فني سريع",
    description: "فريق دعم فني محترف جاهز لمساعدتك في حل أي مشكلة تقنية على مدار الساعة.",
  },
  {
    icon: <Settings className="h-10 w-10 text-blue-500 dark:text-blue-400" />,
    title: "تخصيص الأنظمة",
    description: "تصميم وتخصيص أنظمة المبيعات والإدارة لتناسب متطلبات عملك الفريدة.",
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 bg-gray-50 dark:bg-gray-800 pattern-dots" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 font-cairo bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-blue-700 dark:from-blue-400 dark:to-blue-600">
            منتجات وخدمات عالية الجودة
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto font-cairo">
            نوفر لك مجموعة متكاملة من الأجهزة الذكية وحلول تقنية المعلومات لتطوير أعمالك
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="card-hover border-gray-100 dark:border-gray-700 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
              <CardHeader>
                <div className="mb-4">{feature.icon}</div>
                <CardTitle className="text-xl font-bold text-gray-800 dark:text-gray-100 font-cairo">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 dark:text-gray-400 text-base font-cairo">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
