import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { SparklesText } from "@/components/ui/sparkles-text";
import { useState } from "react";

const Index = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  return (
    <div className="min-h-screen bg-white font-inter">
      {/* Header */}
      <header className="bg-white border-b border-gray-100 px-6 py-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Icon name="Bot" size={28} className="text-blue-600" />
            <span className="text-xl font-semibold text-black" style={{ color: '#000000' }}>БотоМагия</span>
          </div>
          <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
            <Icon name="Menu" size={24} className="text-gray-600" />
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <SparklesText 
              text="ИИ чат-боты нового поколения"
              className="text-5xl font-bold leading-tight"
              colors={{ first: "#0066FF", second: "#4FC3F7" }}
              sparklesCount={15}
            />
            <p className="text-xl text-gray-600 leading-relaxed">
              Создаем умных ботов на базе ChatGPT для интеграции в любой сайт и мессенджеры. 
              Революционная цена — всего 1 рубль в месяц.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-3">
                <Icon name="Zap" size={20} className="mr-2" />
                Создать бота
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-3">
                <Icon name="Play" size={20} className="mr-2" />
                Посмотреть демо
              </Button>
            </div>
          </div>

        </div>
      </section>



      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-6 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <SparklesText 
            text="Революционная цена"
            className="text-4xl font-bold mb-4"
            colors={{ first: "#0066FF", second: "#10B981" }}
            sparklesCount={8}
          />
          <p className="text-xl text-gray-600 mb-12">Доступные технологии для каждого</p>
          
          <div className="relative max-w-md mx-auto">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
              <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                ПОПУЛЯРНО
              </span>
            </div>
            <Card className="p-8 border-2 border-blue-600 relative">
            <CardContent className="p-0 text-center">
              <div className="mb-6">
                <div className="text-6xl font-bold text-blue-600 mb-2">1₽</div>
                <div className="text-gray-600">в месяц</div>
              </div>
              <ul className="space-y-3 mb-8 text-left">
                <li className="flex items-center">
                  <Icon name="Check" size={20} className="text-green-500 mr-3" />
                  <span>Интеграция в любые сайты</span>
                </li>
                <li className="flex items-center">
                  <Icon name="Check" size={20} className="text-green-500 mr-3" />
                  <span>Подключение к мессенджерам</span>
                </li>
                <li className="flex items-center">
                  <Icon name="Check" size={20} className="text-green-500 mr-3" />
                  <span>ИИ на базе ChatGPT</span>
                </li>
                <li className="flex items-center">
                  <Icon name="Check" size={20} className="text-green-500 mr-3" />
                  <span>Техническая поддержка</span>
                </li>
              </ul>
              <Button size="lg" className="w-full bg-blue-600 hover:bg-blue-700 text-lg py-3">
                Начать за 1₽
              </Button>
            </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-12 px-6 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardContent className="p-0 text-center">
                <Icon name="ShoppingCart" size={48} className="text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Интернет-магазин</h3>
                <p className="text-gray-600">Бот-консультант для помощи в выборе товаров и оформлении заказов</p>
              </CardContent>
            </Card>
            
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardContent className="p-0 text-center">
                <Icon name="Heart" size={48} className="text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Медицинская клиника</h3>
                <p className="text-gray-600">Автоматическая запись на прием и ответы на частые вопросы</p>
              </CardContent>
            </Card>
            
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardContent className="p-0 text-center">
                <Icon name="GraduationCap" size={48} className="text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Образовательная платформа</h3>
                <p className="text-gray-600">ИИ-помощник для студентов с поддержкой курсов и заданий</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-blue-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-4">Готовы создать своего ИИ-бота?</h2>
          <p className="text-xl mb-8 opacity-90">
            Свяжитесь с нами и получите персональную консультацию
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-3">
              <Icon name="Phone" size={20} className="mr-2" />
              Позвонить
            </Button>
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-3">
              <Icon name="Mail" size={20} className="mr-2" />
              Написать
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <Icon name="Bot" size={28} className="text-blue-600" />
            <span className="text-xl font-semibold text-zinc-800">БотоМагия</span>
          </div>
          <p className="text-gray-400 mb-6">
            Создаем будущее общения с клиентами уже сегодня
          </p>
          <div className="flex justify-center space-x-6">
            <Icon name="Github" size={24} className="text-gray-400 hover:text-white cursor-pointer transition-colors" />
            <Icon name="Twitter" size={24} className="text-gray-400 hover:text-white cursor-pointer transition-colors" />
            <Icon name="Linkedin" size={24} className="text-gray-400 hover:text-white cursor-pointer transition-colors" />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;