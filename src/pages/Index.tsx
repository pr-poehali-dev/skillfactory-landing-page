import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Icon from "@/components/ui/icon";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Index = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border shadow-sm">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                <Icon name="GraduationCap" className="text-white" size={24} />
              </div>
              <span className="text-2xl font-bold text-primary">SkillFactory</span>
            </div>
            <div className="hidden md:flex items-center gap-6">
              <button onClick={() => scrollToSection('courses')} className="text-foreground hover:text-primary transition-colors">
                Курсы
              </button>
              <button onClick={() => scrollToSection('reviews')} className="text-foreground hover:text-primary transition-colors">
                Отзывы
              </button>
              <button onClick={() => scrollToSection('benefits')} className="text-foreground hover:text-primary transition-colors">
                Преимущества
              </button>
              <button onClick={() => scrollToSection('faq')} className="text-foreground hover:text-primary transition-colors">
                FAQ
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-foreground hover:text-primary transition-colors">
                Контакты
              </button>
            </div>
            <Button className="hidden md:block">Начать учиться</Button>
          </div>
        </nav>
      </header>

      <section className="relative overflow-hidden bg-gradient-to-br from-accent via-white to-muted py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <Badge className="mb-4 bg-secondary text-white">Онлайн-образование</Badge>
              <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
                Освой профессию<br />
                <span className="text-primary">будущего</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Практические курсы от экспертов индустрии. Начни карьеру в IT уже через 6 месяцев
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-lg px-8">
                  Выбрать курс
                  <Icon name="ArrowRight" className="ml-2" size={20} />
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8">
                  Пробный урок
                </Button>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center border-2 border-dashed border-primary/30">
                <div className="text-center p-8">
                  <Icon name="Box" size={80} className="text-primary/40 mx-auto mb-4" />
                  <p className="text-primary/60 font-semibold text-lg">Место для 3D модели</p>
                  <p className="text-muted-foreground text-sm mt-2">Здесь будет интерактивная 3D визуализация</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center animate-fade-in">
              <div className="text-5xl font-bold text-primary mb-2">15,000+</div>
              <div className="text-muted-foreground">Студентов</div>
            </div>
            <div className="text-center animate-fade-in" style={{animationDelay: '0.1s'}}>
              <div className="text-5xl font-bold text-primary mb-2">92%</div>
              <div className="text-muted-foreground">Трудоустройство</div>
            </div>
            <div className="text-center animate-fade-in" style={{animationDelay: '0.2s'}}>
              <div className="text-5xl font-bold text-primary mb-2">150+</div>
              <div className="text-muted-foreground">Курсов</div>
            </div>
            <div className="text-center animate-fade-in" style={{animationDelay: '0.3s'}}>
              <div className="text-5xl font-bold text-primary mb-2">4.8</div>
              <div className="text-muted-foreground">Средний рейтинг</div>
            </div>
          </div>
        </div>
      </section>

      <section id="courses" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">Популярные курсы</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Выбирайте из широкого спектра направлений и начните путь к новой профессии
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Data Science",
                icon: "BarChart3",
                duration: "10 месяцев",
                level: "С нуля",
                students: "2,340",
                price: "120,000 ₽"
              },
              {
                title: "Fullstack-разработчик",
                icon: "Code2",
                duration: "12 месяцев",
                level: "С нуля",
                students: "3,120",
                price: "140,000 ₽"
              },
              {
                title: "Python-разработчик",
                icon: "Terminal",
                duration: "8 месяцев",
                level: "С нуля",
                students: "4,230",
                price: "110,000 ₽"
              }
            ].map((course, idx) => (
              <Card key={idx} className="hover-scale group overflow-hidden border-2 hover:border-primary transition-all duration-300 hover:shadow-xl">
                <CardContent className="p-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon name={course.icon as any} className="text-white" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{course.title}</h3>
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Icon name="Clock" size={16} />
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Icon name="TrendingUp" size={16} />
                      <span>{course.level}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Icon name="Users" size={16} />
                      <span>{course.students} студентов</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between pt-4 border-t">
                    <div className="text-2xl font-bold text-primary">{course.price}</div>
                    <Button variant="outline" className="group-hover:bg-primary group-hover:text-white transition-colors">
                      Подробнее
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="benefits" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">Почему выбирают нас</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "Users",
                title: "Живое общение",
                description: "Вебинары с преподавателями и кураторами в режиме реального времени"
              },
              {
                icon: "Award",
                title: "Сертификаты",
                description: "Получите документ о прохождении курса для портфолио"
              },
              {
                icon: "Briefcase",
                title: "Помощь в трудоустройстве",
                description: "Центр карьеры поможет составить резюме и подготовиться к собеседованиям"
              },
              {
                icon: "BookOpen",
                title: "Практика",
                description: "Реальные проекты в портфолио с первых недель обучения"
              },
              {
                icon: "MessageCircle",
                title: "Поддержка 24/7",
                description: "Наставники всегда на связи и помогут с любым вопросом"
              },
              {
                icon: "Zap",
                title: "Гибкий график",
                description: "Учитесь в удобное время, все материалы в записи"
              }
            ].map((benefit, idx) => (
              <Card key={idx} className="text-center hover-scale border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center mx-auto mb-4">
                    <Icon name={benefit.icon as any} className="text-primary" size={32} />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">Отзывы выпускников</h2>
            <p className="text-xl text-muted-foreground">Истории успеха наших студентов</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Александра Петрова",
                role: "Data Scientist в Яндекс",
                text: "SkillFactory изменил мою жизнь. За 10 месяцев я освоила новую профессию и получила оффер мечты. Преподаватели — настоящие профи!",
                rating: 5
              },
              {
                name: "Дмитрий Соколов",
                role: "Fullstack Developer",
                text: "Отличная структура курса и реальные проекты. После обучения уверенно прошёл собеседования в 3 компании. Рекомендую всем!",
                rating: 5
              },
              {
                name: "Елена Морозова",
                role: "Python Developer в СберТех",
                text: "Всё было понятно даже без опыта в программировании. Кураторы помогали на каждом шагу. Спасибо за поддержку!",
                rating: 5
              }
            ].map((review, idx) => (
              <Card key={idx} className="hover-scale border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <Avatar className="w-14 h-14 border-2 border-primary">
                      <AvatarImage src="" />
                      <AvatarFallback className="bg-secondary text-white font-bold">
                        {review.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-bold">{review.name}</div>
                      <div className="text-sm text-muted-foreground">{review.role}</div>
                    </div>
                  </div>
                  <div className="flex gap-1 mb-3">
                    {Array(review.rating).fill(0).map((_, i) => (
                      <Icon key={i} name="Star" size={16} className="text-yellow-500 fill-yellow-500" />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic">"{review.text}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">Частые вопросы</h2>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="border rounded-lg px-6 shadow-sm">
              <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                Нужен ли опыт программирования?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Нет, большинство наших курсов рассчитаны на обучение с нуля. Мы начинаем с основ и постепенно переходим к сложным темам.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="border rounded-lg px-6 shadow-sm">
              <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                Сколько времени нужно уделять обучению?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Рекомендуем выделять 10-15 часов в неделю. Все материалы доступны в записи, так что вы можете учиться в удобном темпе.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="border rounded-lg px-6 shadow-sm">
              <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                Помогаете ли с трудоустройством?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Да! Наш центр карьеры поможет составить резюме, подготовиться к собеседованиям и порекомендует вакансии от партнёров.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="border rounded-lg px-6 shadow-sm">
              <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                Можно ли оплатить обучение в рассрочку?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Конечно! Мы предоставляем беспроцентную рассрочку на 6-12 месяцев без первоначального взноса.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="border rounded-lg px-6 shadow-sm">
              <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                Что если курс не подойдёт?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                У нас есть гарантия возврата денег в течение первых 14 дней обучения, если курс вам не подошёл.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      <section id="contact" className="py-20 bg-gradient-to-br from-primary to-secondary text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Свяжитесь с нами</h2>
              <p className="text-xl mb-8 text-white/90">
                Остались вопросы? Наша команда с радостью ответит на них и поможет выбрать подходящий курс
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg bg-white/20 flex items-center justify-center">
                    <Icon name="Phone" size={24} />
                  </div>
                  <div>
                    <div className="font-semibold">Телефон</div>
                    <div className="text-white/80">+7 (800) 555-35-35</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg bg-white/20 flex items-center justify-center">
                    <Icon name="Mail" size={24} />
                  </div>
                  <div>
                    <div className="font-semibold">Email</div>
                    <div className="text-white/80">info@skillfactory.ru</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg bg-white/20 flex items-center justify-center">
                    <Icon name="MapPin" size={24} />
                  </div>
                  <div>
                    <div className="font-semibold">Адрес</div>
                    <div className="text-white/80">Москва, ул. Тверская, д. 7</div>
                  </div>
                </div>
              </div>
            </div>

            <Card className="border-0 shadow-2xl">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-6">Отправить заявку</h3>
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Ваше имя</label>
                    <Input placeholder="Иван Иванов" className="bg-background" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                    <Input type="email" placeholder="ivan@example.com" className="bg-background" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Телефон</label>
                    <Input type="tel" placeholder="+7 (999) 123-45-67" className="bg-background" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Сообщение</label>
                    <Textarea placeholder="Расскажите, какой курс вас интересует..." className="bg-background min-h-24" />
                  </div>
                  <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white">
                    Отправить заявку
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-foreground text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                  <Icon name="GraduationCap" size={20} />
                </div>
                <span className="text-xl font-bold">SkillFactory</span>
              </div>
              <p className="text-white/70">Образовательная платформа для развития карьеры в IT</p>
            </div>

            <div>
              <h4 className="font-bold mb-4">Курсы</h4>
              <ul className="space-y-2 text-white/70">
                <li>Data Science</li>
                <li>Веб-разработка</li>
                <li>Python</li>
                <li>Аналитика данных</li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Компания</h4>
              <ul className="space-y-2 text-white/70">
                <li>О нас</li>
                <li>Преподаватели</li>
                <li>Карьера</li>
                <li>Блог</li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Соцсети</h4>
              <div className="flex gap-3">
                <a href="#" className="w-10 h-10 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
                  <Icon name="Facebook" size={20} />
                </a>
                <a href="#" className="w-10 h-10 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
                  <Icon name="Twitter" size={20} />
                </a>
                <a href="#" className="w-10 h-10 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
                  <Icon name="Instagram" size={20} />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-white/20 pt-8 text-center text-white/60">
            <p>&copy; 2024 SkillFactory. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;