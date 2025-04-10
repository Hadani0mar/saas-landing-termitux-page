
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Laptop, Smartphone, Monitor, ShoppingBag } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="pt-28 pb-20 bg-white dark:bg-gray-900 pattern-grid relative overflow-hidden" dir="rtl">
      {/* Background decorative elements */}
      <div className="absolute top-20 right-0 w-72 h-72 bg-blue-200 dark:bg-blue-800 rounded-full filter blur-3xl opacity-30 animate-float"></div>
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-blue-300 dark:bg-blue-700 rounded-full filter blur-3xl opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="flex-1 text-center lg:text-right">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-blue-700 dark:from-blue-400 dark:to-blue-600">
              تقنية متطورة لمستقبل أعمالك
            </h1>
            <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 mb-8 max-w-2xl mx-auto lg:mr-0">
              سيلا، رائدة في حلول التكنولوجيا المتكاملة وأنظمة نقاط البيع المتطورة في مصراتة. نقدم أجهزة كمبيوتر ذات جودة عالية وحلول ذكية لكافة الأعمال.
            </p>
            <div className="flex flex-wrap gap-4 justify-center lg:justify-end">
              <Button size="lg" className="bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white text-lg px-8">
                تواصل معنا
                <ArrowRight className="mr-2" size={20} />
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 border-blue-300 dark:border-blue-700 text-blue-700 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/30">
                منتجاتنا
              </Button>
            </div>
          </div>
          <div className="flex-1 relative">
            <div className="relative glass-card p-4 w-full max-w-lg mx-auto">
              <div className="flex items-center justify-around p-6">
                <div className="text-center">
                  <Laptop className="h-16 w-16 text-blue-500 dark:text-blue-400 mx-auto mb-2" />
                  <span className="text-sm font-medium text-gray-600 dark:text-gray-300">أجهزة محمولة</span>
                </div>
                <div className="text-center">
                  <Monitor className="h-16 w-16 text-blue-600 dark:text-blue-500 mx-auto mb-2" />
                  <span className="text-sm font-medium text-gray-600 dark:text-gray-300">شاشات</span>
                </div>
                <div className="text-center">
                  <Smartphone className="h-16 w-16 text-blue-700 dark:text-blue-600 mx-auto mb-2" />
                  <span className="text-sm font-medium text-gray-600 dark:text-gray-300">هواتف ذكية</span>
                </div>
                <div className="text-center">
                  <ShoppingBag className="h-16 w-16 text-blue-800 dark:text-blue-700 mx-auto mb-2" />
                  <span className="text-sm font-medium text-gray-600 dark:text-gray-300">نظم المبيعات</span>
                </div>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/40 dark:to-blue-800/40 rounded-lg p-6">
                <h3 className="text-center text-xl font-bold text-blue-800 dark:text-blue-300 mb-2">نظام نقاط البيع المتكامل</h3>
                <p className="text-center text-gray-700 dark:text-gray-300">أحدث تقنيات إدارة المبيعات والمخزون لتطوير أعمالك</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
