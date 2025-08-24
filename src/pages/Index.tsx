import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary to-primary/80 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              <h1 className="text-4xl lg:text-6xl font-heading font-bold leading-tight">
                Цурикова <span className="text-blue-200">Наталья</span>
              </h1>
              <p className="text-xl lg:text-2xl font-medium text-blue-100">
                Специалист по мужской восковой депиляции и моментальному загару
              </p>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <p className="text-lg text-blue-50 font-medium">
                  "Я профи с 8-летним стажем. Делаю процедуры безболезненно и качественно. 
                  Ваше доверие и комфорт — моя главная задача."
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-white text-primary hover:bg-gray-100 font-semibold px-8 py-3 text-lg animate-scale-in">
                  <Icon name="MessageCircle" size={20} className="mr-2" />
                  Записаться в Telegram
                </Button>
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary font-semibold px-8 py-3 text-lg">
                  <Icon name="MapPin" size={20} className="mr-2" />
                  Адрес салона
                </Button>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-400 to-purple-400 rounded-full blur-3xl opacity-30 -z-10 scale-110"></div>
              <img 
                src="img/4516258f-9fec-4802-89aa-45ce4ec131c9.jpg" 
                alt="Наталья Цурикова - специалист" 
                className="rounded-lg shadow-2xl w-full max-w-md mx-auto border-4 border-white/20"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-foreground mb-4">
              Мои услуги
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Профессиональные процедуры для мужчин в комфортной обстановке
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon name="Scissors" size={32} className="text-primary" />
                </div>
                <h3 className="text-2xl font-heading font-semibold mb-4 text-foreground">
                  Восковая депиляция
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Профессиональное удаление нежелательных волос воском. Безболезненно, 
                  быстро и эффективно. Результат сохраняется до 4-6 недель.
                </p>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-center justify-center">
                    <Icon name="Check" size={16} className="text-green-500 mr-2" />
                    <span>Полная стерильность</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <Icon name="Check" size={16} className="text-green-500 mr-2" />
                    <span>Индивидуальный подход</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <Icon name="Check" size={16} className="text-green-500 mr-2" />
                    <span>Профессиональные материалы</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon name="Sun" size={32} className="text-primary" />
                </div>
                <h3 className="text-2xl font-heading font-semibold mb-4 text-foreground">
                  Моментальный загар
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Безопасное получение красивого загара без солнца и солярия. 
                  Естественный результат уже через 2-3 часа после процедуры.
                </p>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-center justify-center">
                    <Icon name="Check" size={16} className="text-green-500 mr-2" />
                    <span>Равномерное покрытие</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <Icon name="Check" size={16} className="text-green-500 mr-2" />
                    <span>Натуральный оттенок</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <Icon name="Check" size={16} className="text-green-500 mr-2" />
                    <span>Держится до 10 дней</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-foreground mb-4">
              Частые вопросы
            </h2>
            <p className="text-lg text-muted-foreground">
              Отвечаю на самые популярные вопросы клиентов
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto animate-fade-in">
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="pain" className="border border-gray-200 rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold text-lg hover:no-underline py-6">
                  Болезненна ли восковая депиляция?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6">
                  При профессиональном выполнении дискомфорт минимален. Я использую качественный воск 
                  и специальные техники, которые значительно снижают болевые ощущения. Многие клиенты 
                  отмечают, что процедура проходит намного легче, чем ожидалось.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="duration" className="border border-gray-200 rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold text-lg hover:no-underline py-6">
                  Сколько времени занимает процедура?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6">
                  Восковая депиляция занимает 30-60 минут в зависимости от зоны. Моментальный загар — 
                  15-20 минут на нанесение. Я всегда работаю качественно, не торопясь, 
                  чтобы результат был идеальным.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="preparation" className="border border-gray-200 rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold text-lg hover:no-underline py-6">
                  Как подготовиться к процедуре?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6">
                  Для депиляции: длина волосков должна быть 5-7 мм, за сутки желательно сделать скрабинг. 
                  Для загара: кожа должна быть чистой, без остатков дезодорантов и кремов. 
                  Подробные рекомендации дам при записи.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="result" className="border border-gray-200 rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold text-lg hover:no-underline py-6">
                  Как долго сохраняется результат?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6">
                  Эффект от восковой депиляции длится 4-6 недель. Моментальный загар держится 7-10 дней, 
                  постепенно светлеет. При регулярных процедурах волосы становятся тоньше, 
                  а промежутки между сеансами увеличиваются.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="comfort" className="border border-gray-200 rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold text-lg hover:no-underline py-6">
                  Комфортно ли мужчинам у женщины-специалиста?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6">
                  Абсолютно! Я работаю исключительно с мужской аудиторией уже 8 лет. 
                  Создаю максимально комфортную атмосферу, подхожу профессионально и деликатно. 
                  Большинство клиентов становятся постоянными именно благодаря комфортной обстановке.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-foreground mb-4">
              Контакты и запись
            </h2>
            <p className="text-lg text-muted-foreground">
              Свяжитесь со мной для записи на процедуру
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="bg-white shadow-lg animate-fade-in">
              <CardContent className="p-8">
                <h3 className="text-2xl font-heading font-semibold mb-6 text-foreground">
                  Запись и консультация
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                      <Icon name="MessageCircle" size={20} className="text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Telegram</p>
                      <p className="text-muted-foreground">@natasha_beauty_expert</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                      <Icon name="Clock" size={20} className="text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Режим работы</p>
                      <p className="text-muted-foreground">Пн-Вс: 9:00 - 21:00</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-white shadow-lg animate-fade-in">
              <CardContent className="p-8">
                <h3 className="text-2xl font-heading font-semibold mb-6 text-foreground">
                  Расположение
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                      <Icon name="MapPin" size={20} className="text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Адрес салона</p>
                      <p className="text-muted-foreground">ул. Центральная, 25, 2 этаж</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                      <Icon name="Car" size={20} className="text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Парковка</p>
                      <p className="text-muted-foreground">Бесплатная парковка рядом</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center mt-12 animate-fade-in">
            <div className="bg-primary/5 border border-primary/20 rounded-lg p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-heading font-semibold mb-4 text-foreground">
                Готовы попробовать?
              </h3>
              <p className="text-muted-foreground mb-6">
                Запишитесь на первую процедуру и убедитесь в качестве моей работы. 
                Индивидуальный подход к каждому клиенту гарантирован.
              </p>
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-3 text-lg animate-scale-in">
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