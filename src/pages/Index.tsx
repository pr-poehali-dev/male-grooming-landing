import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section with Background Image */}
      <section 
        className="relative py-20 overflow-hidden text-white min-h-screen"
        style={{
          backgroundImage: "url('https://cdn.poehali.dev/files/1e345896-784d-4147-a1c0-6145871dfccb.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'right center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        
        {/* Desktop Layout */}
        <div className="hidden lg:flex container mx-auto px-4 relative z-10 min-h-screen">
          <div className="flex items-center justify-start w-full">
            <div className="max-w-2xl space-y-8 ml-8">
              <h1 className="text-4xl lg:text-6xl font-heading font-bold leading-tight text-gold">
                "Я — Натали, мастер депиляции с 2021 года"
              </h1>
              <div className="bg-black/40 backdrop-blur-sm rounded-lg p-6 border border-gold/30">
                <p className="text-xl text-white font-medium leading-relaxed">
                  Работаю исключительно с мужчинами. 
                  Гарантирую безболезненные процедуры и идеальный результат. 
                  Создаю атмосферу комфорта для каждого клиента.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <a href="https://t.me/sugar_TS" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="bg-gold text-black hover:bg-gold/90 font-semibold px-8 py-3 text-lg animate-scale-in shadow-lg">
                    <Icon name="MessageCircle" size={20} className="mr-2" />
                    Записаться @sugar_TS
                  </Button>
                </a>
                <Button variant="outline" size="lg" className="border-gold text-gold hover:bg-gold hover:text-black font-semibold px-8 py-3 text-lg">
                  <Icon name="MapPin" size={20} className="mr-2" />
                  Екатеринбург
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="lg:hidden container mx-auto px-4 relative z-10 min-h-screen flex flex-col">
          <div className="flex-1"></div>
          <div className="flex-1 flex flex-col justify-end pb-20 space-y-6">
            <div className="text-center space-y-6">
              <h1 className="text-3xl sm:text-4xl font-heading font-bold leading-tight text-gold">
                "Я — Натали, мастер депиляции с 2021 года"
              </h1>
              <div className="bg-black/60 backdrop-blur-sm rounded-lg p-6 border border-gold/30">
                <p className="text-lg text-white font-medium leading-relaxed">
                  Работаю исключительно с мужчинами. 
                  Гарантирую безболезненные процедуры и идеальный результат. 
                  Создаю атмосферу комфорта для каждого клиента.
                </p>
              </div>
              <div className="flex flex-col gap-4 items-center">
                <a href="https://t.me/sugar_TS" target="_blank" rel="noopener noreferrer" className="w-full max-w-xs">
                  <Button size="lg" className="w-full bg-gold text-black hover:bg-gold/90 font-semibold px-8 py-3 text-lg animate-scale-in shadow-lg">
                    <Icon name="MessageCircle" size={20} className="mr-2" />
                    Записаться @sugar_TS
                  </Button>
                </a>
                <Button variant="outline" size="lg" className="border-gold text-gold hover:bg-gold hover:text-black font-semibold px-8 py-3 text-lg">
                  <Icon name="MapPin" size={20} className="mr-2" />
                  Екатеринбург
                </Button>
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

      {/* Pricing Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-black mb-4">
              Мужской прайс
            </h2>
            <p className="text-lg text-steel">
              Честные цены на все процедуры
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Card className="bg-white shadow-xl border-l-4 border-l-gold">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <h3 className="text-2xl font-heading font-semibold text-black mb-6">
                      Восковая депиляция
                    </h3>
                    <div className="space-y-3 text-steel">
                      <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                        <span>Окантовка бороды</span>
                        <span className="font-semibold text-gold">1000₽</span>
                      </div>
                      <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                        <span>Уши / Нос</span>
                        <span className="font-semibold text-gold">700₽</span>
                      </div>
                      <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                        <span>Подмышки</span>
                        <span className="font-semibold text-gold">1000₽</span>
                      </div>
                      <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                        <span>Руки до локтя</span>
                        <span className="font-semibold text-gold">2000₽</span>
                      </div>
                      <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                        <span>Руки полностью</span>
                        <span className="font-semibold text-gold">2500₽</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="text-2xl font-heading font-semibold text-black mb-6">
                      Интимная зона
                    </h3>
                    <div className="space-y-3 text-steel">
                      <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                        <span>Бикини. Глубокое</span>
                        <span className="font-semibold text-gold">2500₽</span>
                      </div>
                      <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                        <span>Бикини. Классика</span>
                        <span className="font-semibold text-gold">2000₽</span>
                      </div>
                      <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                        <span>Спина / Торс</span>
                        <span className="font-semibold text-gold">3000₽</span>
                      </div>
                      <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                        <span>Ноги полностью</span>
                        <span className="font-semibold text-gold">4000₽</span>
                      </div>
                      <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                        <span>Голени</span>
                        <span className="font-semibold text-gold">2000₽</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <div className="bg-gold/10 rounded-lg p-6 text-center">
                    <h4 className="font-semibold text-black mb-2">Моментальный загар</h4>
                    <p className="text-steel">Цена зависит от зоны покрытия. Обсуждаем индивидуально при записи.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
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
              
              <AccordionItem value="tan-process" className="border border-gray-200 rounded-lg px-6 bg-white">
                <AccordionTrigger className="text-left font-semibold text-lg hover:no-underline py-6 text-black">
                  Как проходит процедура моментального загара?
                </AccordionTrigger>
                <AccordionContent className="text-steel pb-6">
                  Наношу профессиональное средство равномерными движениями по всему телу. 
                  Использую только сертифицированную косметику. Через 2-3 часа у вас уже красивый 
                  естественный оттенок. Процедура абсолютно безопасна для кожи.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="tan-duration" className="border border-gray-200 rounded-lg px-6 bg-white">
                <AccordionTrigger className="text-left font-semibold text-lg hover:no-underline py-6 text-black">
                  Как долго держится автозагар?
                </AccordionTrigger>
                <AccordionContent className="text-steel pb-6">
                  Моментальный загар держится 7-10 дней, постепенно светлея. Всё зависит от типа кожи 
                  и ухода. Рекомендую использовать увлажняющие средства для продления эффекта. 
                  Повторную процедуру можно делать через неделю.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="hygiene" className="border border-gray-200 rounded-lg px-6 bg-white">
                <AccordionTrigger className="text-left font-semibold text-lg hover:no-underline py-6 text-black">
                  Как вы соблюдаете гигиену во время процедур?
                </AccordionTrigger>
                <AccordionContent className="text-steel pb-6">
                  Строго соблюдаю все санитарные нормы. Использую одноразовые расходники, 
                  стерилизую инструменты в сухожаровом шкафу. Руки обрабатываю антисептиком 
                  перед каждым клиентом. Кабинет ежедневно дезинфицируется УФ-лампой.
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
                  Как долго держится результат депиляции?
                </AccordionTrigger>
                <AccordionContent className="text-steel pb-6">
                  Депиляция воском — 4-6 недель. При регулярных процедурах волосы становятся тоньше 
                  и растут медленнее, а промежутки между сеансами увеличиваются.
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
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
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
                      <p className="text-gray-300">@sugar_TS</p>
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
                      <p className="text-gray-300">Екатеринбург, ул. Культуры 2, кабинет 115.3, 2 этаж</p>
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


          
          <div className="text-center animate-fade-in">
            <div className="bg-gold/10 border border-gold/30 rounded-lg p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-heading font-semibold mb-4 text-gold">
                Готовы попробовать?
              </h3>
              <p className="text-gray-300 mb-6">
                Запишитесь на первую процедуру. Гарантирую — вы останетесь довольны результатом. 
                Если что-то не понравится — верну деньги.
              </p>
              <a href="https://t.me/sugar_TS" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-gold text-black hover:bg-gold/90 font-semibold px-8 py-3 text-lg animate-scale-in shadow-lg">
                  <Icon name="MessageCircle" size={20} className="mr-2" />
                  Написать @sugar_TS
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;