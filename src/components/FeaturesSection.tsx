
import React from "react";
import { Terminal, Shield, Zap, Package, Settings, Code, Smartphone, Lock } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const features = [
  {
    icon: <Terminal className="h-10 w-10 text-brand-500" />,
    title: "واجهة مستخدم متقدمة",
    description: "واجهة سهلة الاستخدام تمكنك من إدارة مشاريعك وأدواتك بكفاءة عالية.",
  },
  {
    icon: <Package className="h-10 w-10 text-brand-500" />,
    title: "إدارة الحزم",
    description: "تثبيت وإدارة حزم البرامج بسهولة وبدون تعقيدات تقنية.",
  },
  {
    icon: <Shield className="h-10 w-10 text-brand-500" />,
    title: "حماية متطورة",
    description: "تشفير متقدم وحماية لبياناتك مع نظام أذونات ذكي.",
  },
  {
    icon: <Code className="h-10 w-10 text-brand-500" />,
    title: "محرر أكواد مدمج",
    description: "محرر متطور يدعم العديد من لغات البرمجة مع تلوين نحوي ذكي.",
  },
  {
    icon: <Zap className="h-10 w-10 text-brand-500" />,
    title: "أداء عالي",
    description: "محسن للأداء على جميع الأجهزة حتى ذات المواصفات المنخفضة.",
  },
  {
    icon: <Smartphone className="h-10 w-10 text-brand-500" />,
    title: "متوافق مع الأجهزة المحمولة",
    description: "يعمل بكفاءة على جميع أجهزة الأندرويد مع دعم خاص لتطبيق Termux.",
  },
  {
    icon: <Settings className="h-10 w-10 text-brand-500" />,
    title: "قابلية تخصيص عالية",
    description: "خصص كل جانب من جوانب التطبيق ليناسب احتياجاتك الخاصة.",
  },
  {
    icon: <Lock className="h-10 w-10 text-brand-500" />,
    title: "تحكم بالأذونات",
    description: "نظام أذونات متقدم لإدارة الوصول إلى الموارد والأدوات.",
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 bg-gray-50" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 heading-gradient">
            مميزات قوية لتجربة Termux متطورة
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            صمم خصيصاً لتحسين إنتاجيتك وتبسيط سير عملك مع واجهة سهلة الاستخدام
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
