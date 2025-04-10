
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Laptop, Smartphone, Monitor, ShoppingBag } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="pt-28 pb-20 bg-gradient-to-br from-brand-100 to-white relative overflow-hidden" dir="rtl">
      {/* Background decorative elements */}
      <div className="absolute top-20 right-0 w-72 h-72 bg-brand-200 rounded-full filter blur-3xl opacity-30 animate-float"></div>
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-brand-300 rounded-full filter blur-3xl opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="flex-1 text-center lg:text-right">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 heading-gradient">
              تقنية متطورة لمستقبل أعمالك
            </h1>
            <p className="text-lg sm:text-xl text-gray-700 mb-8 max-w-2xl mx-auto lg:mr-0">
              سيلا، رائدة في حلول التكنولوجيا المتكاملة وأنظمة نقاط البيع المتطورة في مصراتة. نقدم أجهزة كمبيوتر ذات جودة عالية وحلول ذكية لكافة الأعمال.
            </p>
            <div className="flex flex-wrap gap-4 justify-center lg:justify-end">
              <Button size="lg" className="btn-gradient text-lg px-8">
                تواصل معنا
                <ArrowRight className="mr-2" size={20} />
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 border-brand-300 text-brand-700 hover:bg-brand-50">
                منتجاتنا
              </Button>
            </div>
          </div>
          <div className="flex-1 relative">
            <div className="relative bg-white shadow-xl rounded-2xl border border-gray-100 p-4 w-full max-w-lg mx-auto">
              <div className="flex items-center justify-around p-6">
                <div className="text-center">
                  <Laptop className="h-16 w-16 text-brand-500 mx-auto mb-2" />
                  <span className="text-sm font-medium text-gray-600">أجهزة محمولة</span>
                </div>
                <div className="text-center">
                  <Monitor className="h-16 w-16 text-brand-600 mx-auto mb-2" />
                  <span className="text-sm font-medium text-gray-600">شاشات</span>
                </div>
                <div className="text-center">
                  <Smartphone className="h-16 w-16 text-brand-700 mx-auto mb-2" />
                  <span className="text-sm font-medium text-gray-600">هواتف ذكية</span>
                </div>
                <div className="text-center">
                  <ShoppingBag className="h-16 w-16 text-brand-800 mx-auto mb-2" />
                  <span className="text-sm font-medium text-gray-600">نظم المبيعات</span>
                </div>
              </div>
              <div className="bg-gradient-to-br from-brand-50 to-brand-100 rounded-lg p-6">
                <h3 className="text-center text-xl font-bold text-brand-800 mb-2">نظام نقاط البيع المتكامل</h3>
                <p className="text-center text-gray-700">أحدث تقنيات إدارة المبيعات والمخزون لتطوير أعمالك</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
