import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-black text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gold/20 to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              <h1 className="text-4xl lg:text-6xl font-heading font-bold leading-tight">
                Наталья <span className="text-gold">Цурикова</span>
              </h1>
              <p className="text-xl lg:text-2xl font-medium text-gray-300">
                Мастер депиляции с 2021 года
              </p>
              <div className="bg-steel/20 backdrop-blur-sm rounded-lg p-6 border border-gold/30">
                <p className="text-lg text-gray-100 font-medium leading-relaxed">
                  "Я — Натали, мастер депиляции с 2021 года. Работаю исключительно с мужчинами. 
                  Гарантирую безболезненные процедуры и идеальный результат. 
                  Создаю атмосферу комфорта для каждого клиента."
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-gold text-black hover:bg-gold/90 font-semibold px-8 py-3 text-lg animate-scale-in shadow-lg">
                  <Icon name="MessageCircle" size={20} className="mr-2" />
                  Записаться в Telegram
                </Button>
                <Button variant="outline" size="lg" className="border-gold text-gold hover:bg-gold hover:text-black font-semibold px-8 py-3 text-lg">
                  <Icon name="MapPin" size={20} className="mr-2" />
                  Адрес салона
                </Button>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <div className="absolute inset-0 bg-gradient-to-tr from-gold/40 to-steel/20 rounded-full blur-3xl opacity-40 -z-10 scale-110"></div>
              <div className="relative overflow-hidden rounded-2xl shadow-2xl border-4 border-gold/30">
                <img 
                  src="https://cdn.poehali.dev/files/b9477b19-c005-4c80-bae3-e3cef491c416.jpeg" 
                  alt="Наталья Цурикова - мастер депиляции" 
                  className="w-full max-w-md mx-auto object-cover h-96"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-black mb-4">
              Что я делаю
            </h2>
            <p className="text-lg text-steel max-w-2xl mx-auto">
              Две основные процедуры, которыми владею в совершенстве
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in border-l-4 border-l-gold">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon name="Scissors" size={32} className="text-gold" />
                </div>
                <h3 className="text-2xl font-heading font-semibold mb-4 text-black">
                  Мужская депиляция воском
                </h3>
                <p className="text-steel mb-6 leading-relaxed">
                  Удаляю нежелательные волосы качественным воском. 
                  Делаю это быстро и практически безболезненно. 
                  Эффект держится до 6 недель.
                </p>
                <div className="space-y-3 text-sm text-steel">
                  <div className="flex items-center justify-center">
                    <Icon name="Check" size={16} className="text-gold mr-2" />
                    <span>Стерильность на 100%</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <Icon name="Check" size={16} className="text-gold mr-2" />
                    <span>Комфорт во время процедуры</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <Icon name="Check" size={16} className="text-gold mr-2" />
                    <span>Профессиональные материалы</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in border-l-4 border-l-gold">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon name="Sun" size={32} className="text-gold" />
                </div>
                <h3 className="text-2xl font-heading font-semibold mb-4 text-black">
                  Моментальный загар
                </h3>
                <p className="text-steel mb-6 leading-relaxed">
                  Наношу профессиональный автозагар, который даёт естественный оттенок. 
                  Результат виден уже через 2-3 часа. Никакого вреда для кожи.
                </p>
                <div className="space-y-3 text-sm text-steel">
                  <div className="flex items-center justify-center">
                    <Icon name="Check" size={16} className="text-gold mr-2" />
                    <span>Равномерное нанесение</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <Icon name="Check" size={16} className="text-gold mr-2" />
                    <span>Естественный цвет</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <Icon name="Check" size={16} className="text-gold mr-2" />
                    <span>Держится 7-10 дней</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-black mb-4">
              Отвечаю на вопросы
            </h2>
            <p className="text-lg text-steel">
              То, что обычно интересует моих клиентов
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto animate-fade-in">
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="pain" className="border border-gray-200 rounded-lg px-6 bg-white">
                <AccordionTrigger className="text-left font-semibold text-lg hover:no-underline py-6 text-black">
                  Болезненна ли восковая депиляция?
                </AccordionTrigger>
                <AccordionContent className="text-steel pb-6">
                  У меня процедура проходит практически безболезненно. Я использую качественный воск 
                  и работаю быстро. Большинство клиентов удивляются, что всё оказалось намного легче, 
                  чем они ожидали. Многие засыпают во время процедуры.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="duration" className="border border-gray-200 rounded-lg px-6 bg-white">
                <AccordionTrigger className="text-left font-semibold text-lg hover:no-underline py-6 text-black">
                  Сколько времени занимает процедура?
                </AccordionTrigger>
                <AccordionContent className="text-steel pb-6">
                  Депиляция воском — 30-60 минут в зависимости от зоны. Автозагар наношу за 15-20 минут. 
                  Работаю качественно, но не тороплюсь. Важен результат, а не скорость.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="preparation" className="border border-gray-200 rounded-lg px-6 bg-white">
                <AccordionTrigger className="text-left font-semibold text-lg hover:no-underline py-6 text-black">
                  Как подготовиться к процедуре?
                </AccordionTrigger>
                <AccordionContent className="text-steel pb-6">
                  Для депиляции: волоски должны быть 5-7 мм, за день до процедуры желательно сделать скраб. 
                  Для загара: кожа должна быть чистой, без кремов и дезодорантов. 
                  Все подробности расскажу при записи.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="result" className="border border-gray-200 rounded-lg px-6 bg-white">
                <AccordionTrigger className="text-left font-semibold text-lg hover:no-underline py-6 text-black">
                  Как долго держится результат?
                </AccordionTrigger>
                <AccordionContent className="text-steel pb-6">
                  Депиляция воском — 4-6 недель. Загар — 7-10 дней, постепенно светлеет. 
                  При регулярных процедурах волосы становятся тоньше и растут медленнее.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="comfort" className="border border-gray-200 rounded-lg px-6 bg-white">
                <AccordionTrigger className="text-left font-semibold text-lg hover:no-underline py-6 text-black">
                  Комфортно ли мужчинам у женщины-мастера?
                </AccordionTrigger>
                <AccordionContent className="text-steel pb-6">
                  Я работаю только с мужчинами уже 3 года. Создаю максимально комфортную атмосферу — 
                  никакого смущения или неловкости. Подхожу профессионально и деликатно. 
                  95% клиентов становятся постоянными.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-black text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-white mb-4">
              Связаться со мной
            </h2>
            <p className="text-lg text-gray-300">
              Записывайтесь и задавайте вопросы
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="bg-steel/20 border border-gold/30 shadow-lg animate-fade-in">
              <CardContent className="p-8">
                <h3 className="text-2xl font-heading font-semibold mb-6 text-gold">
                  Запись и вопросы
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center mr-4">
                      <Icon name="MessageCircle" size={20} className="text-black" />
                    </div>
                    <div>
                      <p className="font-semibold text-white">Telegram</p>
                      <p className="text-gray-300">@natasha_beauty_master</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center mr-4">
                      <Icon name="Clock" size={20} className="text-black" />
                    </div>
                    <div>
                      <p className="font-semibold text-white">Работаю</p>
                      <p className="text-gray-300">Каждый день: 10:00 - 20:00</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-steel/20 border border-gold/30 shadow-lg animate-fade-in">
              <CardContent className="p-8">
                <h3 className="text-2xl font-heading font-semibold mb-6 text-gold">
                  Где меня найти
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center mr-4">
                      <Icon name="MapPin" size={20} className="text-black" />
                    </div>
                    <div>
                      <p className="font-semibold text-white">Салон красоты</p>
                      <p className="text-gray-300">ул. Центральная, 25, 2 этаж</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center mr-4">
                      <Icon name="Car" size={20} className="text-black" />
                    </div>
                    <div>
                      <p className="font-semibold text-white">Парковка</p>
                      <p className="text-gray-300">Бесплатная, рядом с салоном</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center mt-12 animate-fade-in">
            <div className="bg-gold/10 border border-gold/30 rounded-lg p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-heading font-semibold mb-4 text-gold">
                Готовы попробовать?
              </h3>
              <p className="text-gray-300 mb-6">
                Запишитесь на первую процедуру. Гарантирую — вы останетесь довольны результатом. 
                Если что-то не понравится — верну деньги.
              </p>
              <Button size="lg" className="bg-gold text-black hover:bg-gold/90 font-semibold px-8 py-3 text-lg animate-scale-in shadow-lg">
                <Icon name="MessageCircle" size={20} className="mr-2" />
                Написать в Telegram
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;