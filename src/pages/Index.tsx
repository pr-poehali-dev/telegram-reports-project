import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <section className="relative min-h-[90vh] flex items-center justify-center bg-gradient-to-br from-primary/5 via-background to-secondary/5 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold text-foreground leading-tight">
              Делаю доклады<br />
              <span className="text-primary">на разные темы</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
              Профессиональная подготовка докладов любой сложности.<br />
              Качественно, в срок, индивидуальный подход.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <Button 
                size="lg" 
                className="text-lg px-8 py-6 hover-scale"
                onClick={() => window.open('https://t.me/Doklad_y', '_blank')}
              >
                <Icon name="Send" className="mr-2" size={20} />
                Написать в Telegram
              </Button>
              <p className="text-sm text-muted-foreground">
                @Doklad_y • Стоимость обсудим в ЛС
              </p>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <Icon name="ChevronDown" size={32} className="text-muted-foreground" />
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-foreground">
              Услуги
            </h2>
            <p className="text-center text-muted-foreground text-lg mb-16 max-w-2xl mx-auto">
              Индивидуальный подход к каждому заказу
            </p>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="hover-scale transition-all duration-300 border-2 hover:border-primary/50">
                <CardContent className="p-8 text-center space-y-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <Icon name="FileText" size={32} className="text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">Учебные доклады</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Доклады для школ, колледжей и университетов по любым дисциплинам с учетом требований преподавателей
                  </p>
                </CardContent>
              </Card>

              <Card className="hover-scale transition-all duration-300 border-2 hover:border-primary/50">
                <CardContent className="p-8 text-center space-y-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <Icon name="Presentation" size={32} className="text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">Презентации</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Профессиональное оформление презентаций с инфографикой, схемами и визуализацией данных
                  </p>
                </CardContent>
              </Card>

              <Card className="hover-scale transition-all duration-300 border-2 hover:border-primary/50">
                <CardContent className="p-8 text-center space-y-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <Icon name="Briefcase" size={32} className="text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">Бизнес-доклады</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Подготовка докладов для конференций, совещаний и деловых мероприятий с аналитикой
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="mt-16 bg-card border-2 border-primary/20 rounded-lg p-8 md:p-12 text-center">
              <div className="max-w-3xl mx-auto space-y-6">
                <Icon name="CheckCircle2" size={48} className="text-primary mx-auto" />
                <h3 className="text-3xl font-bold text-foreground">Почему выбирают меня?</h3>
                <div className="grid md:grid-cols-2 gap-6 text-left mt-8">
                  <div className="flex gap-3">
                    <Icon name="Clock" size={24} className="text-primary flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-foreground">Соблюдение сроков</p>
                      <p className="text-sm text-muted-foreground">Всегда сдаю работу вовремя</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <Icon name="Target" size={24} className="text-primary flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-foreground">Точность требований</p>
                      <p className="text-sm text-muted-foreground">Учитываю все пожелания заказчика</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <Icon name="Award" size={24} className="text-primary flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-foreground">Качество</p>
                      <p className="text-sm text-muted-foreground">Проверенные источники и структура</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <Icon name="DollarSign" size={24} className="text-primary flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-foreground">Гибкие цены</p>
                      <p className="text-sm text-muted-foreground">Стоимость обсуждается индивидуально</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Готовы заказать доклад?
            </h2>
            <p className="text-xl text-muted-foreground">
              Свяжитесь со мной в Telegram, и мы обсудим детали вашего проекта
            </p>
            <Button 
              size="lg" 
              className="text-lg px-10 py-7 hover-scale"
              onClick={() => window.open('https://t.me/Doklad_y', '_blank')}
            >
              <Icon name="MessageCircle" className="mr-2" size={24} />
              Связаться @Doklad_y
            </Button>
          </div>
        </div>
      </section>

      <footer className="py-8 bg-card border-t">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">
            © 2025 Доклады на заказ • Telegram: @Doklad_y
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
