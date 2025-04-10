
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-brand-800 to-brand-900 text-white" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            استعد لتحويل تجربتك مع Termux
          </h2>
          <p className="text-xl mb-8 text-gray-200">
            انضم إلى آلاف المطورين الذين يستخدمون TermiSaaS لتعزيز إنتاجيتهم وتبسيط سير عملهم. ابدأ مجانًا اليوم!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-brand-900 hover:bg-gray-100 text-lg px-8">
              ابدأ مجانًا
              <ArrowRight className="mr-2" size={20} />
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10 text-lg px-8">
              جدول عرض توضيحي
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
