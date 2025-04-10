
import React, { useState, useRef, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Terminal as TerminalIcon, Info, MapPin, Phone, X, HelpCircle } from "lucide-react";

type CommandType = "about" | "location" | "contact" | "help" | "";

const Terminal = () => {
  const [command, setCommand] = useState<CommandType>("");
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [input, setInput] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [commandHistory]);

  const handleCommand = (cmd: string) => {
    setInput("");
    
    // Convert Arabic commands to English for processing
    let processedCmd = cmd.toLowerCase();
    if (cmd.includes("الشركة") || cmd.includes("عن") || cmd.includes("about")) {
      processedCmd = "about";
    } else if (cmd.includes("موقع") || cmd.includes("location")) {
      processedCmd = "location";
    } else if (cmd.includes("اتصال") || cmd.includes("تواصل") || cmd.includes("contact")) {
      processedCmd = "contact";
    } else if (cmd.includes("مساعدة") || cmd.includes("تعليمات") || cmd.includes("help")) {
      processedCmd = "help";
    } else if (cmd.includes("مسح") || cmd.includes("clear")) {
      setCommandHistory([]);
      return;
    } else {
      setCommandHistory([...commandHistory, `$ ${cmd}`, "الأمر غير معروف. اكتب help للمساعدة"]);
      return;
    }

    setCommand(processedCmd as CommandType);
    setCommandHistory([...commandHistory, `$ ${cmd}`, getCommandOutput(processedCmd as CommandType)]);
  };

  const getCommandOutput = (cmd: CommandType): string => {
    switch (cmd) {
      case "about":
        return "سيلا هي شركة رائدة في مجال تقنية المعلومات وبيع أجهزة الكمبيوتر والأجهزة الذكية في مصراتة. نقدم أنظمة نقاط البيع المتطورة وحلول متكاملة للشركات والأفراد مع ضمان شامل لمدة عامين.";
      case "location":
        return "العنوان: مصراتة، الشارع الرئيسي، بجوار مصرف الجمهورية";
      case "contact":
        return "هاتف: 123-456-7890\nالبريد الإلكتروني: info@sila.ly\nساعات العمل: السبت - الخميس: 9:00 ص - 9:00 م";
      case "help":
        return "الأوامر المتاحة:\n- about: معلومات عن الشركة\n- location: موقع الشركة\n- contact: معلومات الاتصال\n- help: عرض قائمة الأوامر\n- clear: مسح الشاشة";
      default:
        return "";
    }
  };

  return (
    <section className="py-16 relative overflow-hidden" dir="rtl">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-blue-500/20 rounded-full filter blur-3xl opacity-30 animate-float"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-blue-300/20 rounded-full filter blur-3xl opacity-30 animate-float" style={{ animationDelay: '2s' }}></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 font-cairo bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-blue-700 dark:from-blue-400 dark:to-blue-600">
            جرب الترمينال التفاعلي
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 font-cairo">
            اكتب help للحصول على قائمة الأوامر المتاحة
          </p>
        </div>
        
        <Card className="border border-blue-100 dark:border-blue-900 bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg shadow-lg">
          <CardHeader className="border-b border-blue-100 dark:border-blue-900 bg-gradient-to-r from-blue-50 to-white dark:from-gray-800 dark:to-gray-900 flex flex-row items-center">
            <div className="flex space-x-1 rtl:space-x-reverse">
              <div className="h-3 w-3 rounded-full bg-red-500"></div>
              <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
              <div className="h-3 w-3 rounded-full bg-green-500"></div>
            </div>
            <CardTitle className="text-lg font-mono flex-1 text-center text-blue-700 dark:text-blue-300">
              <TerminalIcon className="inline-block mr-2 h-5 w-5" /> سيلا ترمينال
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <div 
              className="bg-gray-900 text-gray-100 p-4 font-mono text-sm h-64 overflow-y-auto" 
              ref={terminalRef}
            >
              <div className="pb-2 text-blue-400">
                مرحبًا بكم في ترمينال سيلا! اكتب help للحصول على قائمة الأوامر المتاحة.
              </div>
              {commandHistory.map((line, i) => (
                <div 
                  key={i} 
                  className={line.startsWith("$") ? "text-green-400" : "text-gray-200 whitespace-pre-line"}
                >
                  {line}
                </div>
              ))}
              <div className="flex items-center mt-2">
                <span className="text-green-400 mr-2">$</span>
                <input
                  type="text"
                  ref={inputRef}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && input.trim()) {
                      handleCommand(input.trim());
                    }
                  }}
                  className="flex-1 bg-transparent focus:outline-none text-gray-100"
                  placeholder="اكتب الأمر هنا..."
                  autoFocus
                />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Terminal;
