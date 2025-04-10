
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Mail } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-800 to-blue-900 text-white relative overflow-hidden" dir="rtl">
      {/* Glass patterns */}
      <div className="absolute inset-0 pattern-grid opacity-10"></div>
      <div className="absolute top-10 left-10 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"></div>
      <div className="absolute bottom-10 right-10 w-64 h-64 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float" style={{ animationDelay: '3s' }}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 font-cairo">
            حلول تقنية متكاملة لتطوير أعمالك
          </h2>
          <p className="text-xl mb-8 text-gray-200 font-cairo">
            تواصل مع فريقنا المتخصص اليوم للحصول على استشارة مجانية حول أفضل الحلول التقنية لمشروعك
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <Button size="lg" className="bg-white text-blue-900 hover:bg-gray-100 text-lg px-8 group font-cairo">
              اتصل بنا
              <Phone className="mr-2 group-hover:animate-bounce" size={20} />
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10 text-lg px-8 group font-cairo">
              راسلنا
              <Mail className="mr-2 group-hover:animate-bounce" size={20} />
            </Button>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center">
                <h3 className="font-bold text-xl mb-2 font-cairo">العنوان</h3>
                <p className="text-gray-200 font-cairo">مصراتة، الشارع الرئيسي، بجوار مصرف الجمهورية</p>
              </div>
              <div className="text-center">
                <h3 className="font-bold text-xl mb-2 font-cairo">ساعات العمل</h3>
                <p className="text-gray-200 font-cairo">السبت - الخميس: 9:00 ص - 9:00 م</p>
              </div>
              <div className="text-center">
                <h3 className="font-bold text-xl mb-2 font-cairo">تواصل معنا</h3>
                <p className="text-gray-200 font-cairo">هاتف: 123-456-7890</p>
                <p className="text-gray-200 font-cairo">البريد الإلكتروني: info@sila.ly</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
