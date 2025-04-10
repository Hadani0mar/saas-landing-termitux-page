
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

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
              حول Termux الى أداة قوية للإنتاجية
            </h1>
            <p className="text-lg sm:text-xl text-gray-700 mb-8 max-w-2xl mx-auto lg:mr-0">
              منصة متكاملة تمكنك من إدارة وتخصيص تجربة Termux بكفاءة عالية، مع مجموعة من الأدوات المتطورة للمطورين والمستخدمين المتقدمين.
            </p>
            <div className="flex flex-wrap gap-4 justify-center lg:justify-end">
              <Button size="lg" className="btn-gradient text-lg px-8">
                جرب مجاناً
                <ArrowRight className="mr-2" size={20} />
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 border-brand-300 text-brand-700 hover:bg-brand-50">
                اكتشف المزيد
              </Button>
            </div>
          </div>
          <div className="flex-1 relative">
            <div className="relative bg-white shadow-xl rounded-2xl border border-gray-100 p-4 w-full max-w-lg mx-auto">
              <div className="bg-gray-900 rounded-lg overflow-hidden">
                <div className="flex items-center bg-gray-800 px-4 py-2">
                  <div className="flex space-x-2 rtl:space-x-reverse">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="mx-auto text-gray-300 text-sm">Termux</div>
                </div>
                <div className="p-4 font-mono text-sm text-green-400 bg-black h-64 overflow-hidden">
                  <p>$ <span className="typing-animation">termisaas --install</span></p>
                  <p className="mt-2">Installing TermiSaaS plugin...</p>
                  <p className="mt-1">[####################] 100%</p>
                  <p className="mt-2">Setup complete!</p>
                  <p className="mt-1">$ <span className="typing-animation">termisaas --start</span></p>
                  <p className="mt-2">Starting TermiSaaS service...</p>
                  <p className="mt-1">TermiSaaS is running on http://localhost:8080</p>
                  <p className="mt-2 text-brand-400">Welcome to TermiSaaS - Enjoy the power!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
