
import React from "react";
import { Github, Twitter, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-bold mb-4">TermiSaaS</h3>
            <p className="text-gray-400 mb-4">
              منصة متكاملة لتحويل Termux إلى أداة إنتاجية قوية للمطورين والمستخدمين المتقدمين.
            </p>
            <div className="flex space-x-4 rtl:space-x-reverse">
              <a href="#" className="text-gray-400 hover:text-white">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">الروابط السريعة</h3>
            <ul className="space-y-2">
              <li>
                <a href="#features" className="text-gray-400 hover:text-white">الميزات</a>
              </li>
              <li>
                <a href="#pricing" className="text-gray-400 hover:text-white">الأسعار</a>
              </li>
              <li>
                <a href="#testimonials" className="text-gray-400 hover:text-white">آراء العملاء</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">التوثيق</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">المدونة</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">الدعم الفني</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white">مركز المساعدة</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">الأسئلة الشائعة</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">التواصل معنا</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">الشروط والأحكام</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">سياسة الخصوصية</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">اتصل بنا</h3>
            <ul className="space-y-2">
              <li className="flex items-center text-gray-400">
                <Mail className="h-5 w-5 ml-2" />
                <span>info@termisaas.com</span>
              </li>
              <li className="mt-4">
                <h4 className="text-white font-semibold mb-2">النشرة الإخبارية</h4>
                <form className="flex">
                  <input
                    type="email"
                    placeholder="بريدك الإلكتروني"
                    className="px-4 py-2 rounded-r-md flex-1 bg-gray-800 text-white border-gray-700 focus:outline-none focus:ring-2 focus:ring-brand-500 text-right"
                  />
                  <button
                    type="submit"
                    className="bg-brand-500 hover:bg-brand-600 px-4 py-2 rounded-l-md"
                  >
                    اشترك
                  </button>
                </form>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <p className="text-center text-gray-500">
            © {new Date().getFullYear()} TermiSaaS. جميع الحقوق محفوظة
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
