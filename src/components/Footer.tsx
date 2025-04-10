
import React from "react";
import { Github, Facebook, Instagram, Mail, MapPin, Phone, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white pt-16 pb-8" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center mb-4">
              <div className="font-bold text-2xl tracking-wider text-blue-400">
                <span className="text-3xl font-extrabold">S</span>
                <span className="text-2xl font-bold tracking-tight">I</span>
                <span className="text-2xl font-bold tracking-tight">L</span>
                <span className="text-3xl font-extrabold">A</span>
                <span className="text-xs align-super">®</span>
              </div>
            </div>
            <p className="text-gray-400 mb-4">
              رائدة في مجال تقنية المعلومات وبيع أجهزة الكمبيوتر والأجهزة الذكية في مصراتة. نقدم حلول متكاملة للشركات والأفراد.
            </p>
            <div className="flex space-x-4 rtl:space-x-reverse">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 text-blue-100">روابط سريعة</h3>
            <ul className="space-y-2">
              <li>
                <a href="#features" className="text-gray-400 hover:text-white hover:underline transition-colors">منتجاتنا</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white hover:underline transition-colors">حول الشركة</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white hover:underline transition-colors">الضمان</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white hover:underline transition-colors">سياسة الخصوصية</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 text-blue-100">منتجاتنا</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white hover:underline transition-colors">أجهزة كمبيوتر</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white hover:underline transition-colors">هواتف ذكية</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white hover:underline transition-colors">أنظمة نقاط البيع</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white hover:underline transition-colors">خدمات الصيانة</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white hover:underline transition-colors">قطع غيار</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 text-blue-100">اتصل بنا</h3>
            <ul className="space-y-4">
              <li className="flex items-center text-gray-400">
                <MapPin className="h-5 w-5 ml-2 text-blue-400" />
                <span>مصراتة، الشارع الرئيسي، بجوار مصرف الجمهورية</span>
              </li>
              <li className="flex items-center text-gray-400">
                <Phone className="h-5 w-5 ml-2 text-blue-400" />
                <span>123-456-7890</span>
              </li>
              <li className="flex items-center text-gray-400">
                <Mail className="h-5 w-5 ml-2 text-blue-400" />
                <span>info@sila.ly</span>
              </li>
              <li className="flex items-center text-gray-400">
                <Clock className="h-5 w-5 ml-2 text-blue-400" />
                <span>السبت - الخميس: 9:00 ص - 9:00 م</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-center md:justify-between">
            <div className="flex items-center mb-4 md:mb-0">
              <div className="font-bold text-xl tracking-wider text-blue-400 ml-2">
                <span className="text-2xl font-extrabold">S</span>
                <span className="text-xl font-bold tracking-tight">I</span>
                <span className="text-xl font-bold tracking-tight">L</span>
                <span className="text-2xl font-extrabold">A</span>
                <span className="text-xs align-super">®</span>
              </div>
              <p className="text-gray-500">
                © {new Date().getFullYear()} سيلا لتقنية المعلومات. جميع الحقوق محفوظة
              </p>
            </div>
            <div className="mt-2 md:mt-0">
              <img 
                src="/public/lovable-uploads/f95abc19-be7c-4aed-b812-d09050917630.png" 
                alt="شعار سيلا" 
                className="h-8 w-auto" 
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
