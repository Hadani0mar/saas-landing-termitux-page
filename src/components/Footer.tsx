
import React from "react";
import { Github, Facebook, Instagram, Mail, MapPin, Phone, Clock, ShoppingBag } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center mb-4">
              <ShoppingBag className="h-6 w-6 text-brand-400 ml-2" />
              <h3 className="text-xl font-bold">سيلا</h3>
            </div>
            <p className="text-gray-400 mb-4">
              رائدة في مجال تقنية المعلومات وبيع أجهزة الكمبيوتر والأجهزة الذكية في مصراتة. نقدم حلول متكاملة للشركات والأفراد.
            </p>
            <div className="flex space-x-4 rtl:space-x-reverse">
              <a href="#" className="text-gray-400 hover:text-white">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">روابط سريعة</h3>
            <ul className="space-y-2">
              <li>
                <a href="#features" className="text-gray-400 hover:text-white">منتجاتنا</a>
              </li>
              <li>
                <a href="#pricing" className="text-gray-400 hover:text-white">الأسعار</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">حول الشركة</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">الضمان</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">سياسة الخصوصية</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">منتجاتنا</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white">أجهزة كمبيوتر</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">هواتف ذكية</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">أنظمة نقاط البيع</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">خدمات الصيانة</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">قطع غيار</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">اتصل بنا</h3>
            <ul className="space-y-4">
              <li className="flex items-center text-gray-400">
                <MapPin className="h-5 w-5 ml-2" />
                <span>مصراتة، الشارع الرئيسي، بجوار مصرف الجمهورية</span>
              </li>
              <li className="flex items-center text-gray-400">
                <Phone className="h-5 w-5 ml-2" />
                <span>123-456-7890</span>
              </li>
              <li className="flex items-center text-gray-400">
                <Mail className="h-5 w-5 ml-2" />
                <span>info@sila.ly</span>
              </li>
              <li className="flex items-center text-gray-400">
                <Clock className="h-5 w-5 ml-2" />
                <span>السبت - الخميس: 9:00 ص - 9:00 م</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <p className="text-center text-gray-500">
            © {new Date().getFullYear()} سيلا لتقنية المعلومات. جميع الحقوق محفوظة
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
