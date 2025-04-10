
import React from "react";
import { Monitor, ShieldCheck, Zap, ShoppingCart, Settings, Smartphone, Cpu, Database } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const features = [
  {
    icon: <Monitor className="h-10 w-10 text-brand-500" />,
    title: "أجهزة حاسوب متطورة",
    description: "أحدث أجهزة الكمبيوتر وملحقاتها بأفضل الأسعار وبضمان شركة سيلا.",
  },
  {
    icon: <ShoppingCart className="h-10 w-10 text-brand-500" />,
    title: "نظم نقاط البيع",
    description: "نظام متكامل لإدارة المبيعات والمخزون مع تقارير مفصلة لأداء العمل.",
  },
  {
    icon: <ShieldCheck className="h-10 w-10 text-brand-500" />,
    title: "ضمان شامل",
    description: "ضمان لمدة عامين على جميع منتجاتنا مع خدمة ما بعد البيع المتميزة.",
  },
  {
    icon: <Smartphone className="h-10 w-10 text-brand-500" />,
    title: "الأجهزة الذكية",
    description: "مجموعة واسعة من الهواتف والأجهزة اللوحية من أشهر العلامات التجارية.",
  },
  {
    icon: <Cpu className="h-10 w-10 text-brand-500" />,
    title: "قطع غيار أصلية",
    description: "توفير قطع الغيار الأصلية لجميع الأجهزة والمكونات الإلكترونية.",
  },
  {
    icon: <Zap className="h-10 w-10 text-brand-500" />,
    title: "دعم فني سريع",
    description: "فريق دعم فني محترف جاهز لمساعدتك في حل أي مشكلة تقنية على مدار الساعة.",
  },
  {
    icon: <Database className="h-10 w-10 text-brand-500" />,
    title: "استضافة وخدمات سحابية",
    description: "خدمات استضافة موثوقة وحلول سحابية مصممة خصيصًا لاحتياجات عملك.",
  },
  {
    icon: <Settings className="h-10 w-10 text-brand-500" />,
    title: "تخصيص الأنظمة",
    description: "تصميم وتخصيص أنظمة المبيعات والإدارة لتناسب متطلبات عملك الفريدة.",
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 bg-gray-50" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 heading-gradient">
            منتجات وخدمات عالية الجودة
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            نوفر لك مجموعة متكاملة من الأجهزة الذكية وحلول تقنية المعلومات لتطوير أعمالك
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="card-hover border-gray-100">
              <CardHeader>
                <div className="mb-4">{feature.icon}</div>
                <CardTitle className="text-xl font-bold">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-base">
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
