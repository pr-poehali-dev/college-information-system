import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Programs = () => {
  const programs = [
    {
      title: "Экономика и бухгалтерский учет (по отраслям)",
      code: "38.02.01",
      duration: "2 года 10 месяцев",
      level: "СПО",
      description:
        "Подготовка специалистов в области финансов, бухгалтерского учета и экономического анализа",
      icon: "Calculator",
      popular: true,
    },
    {
      title: "Банковское дело",
      code: "38.02.07",
      duration: "2 года 10 месяцев",
      level: "СПО",
      description:
        "Современные банковские технологии, кредитование и финансовые услуги",
      icon: "Building2",
      popular: false,
    },
    {
      title: "Коммерция (по отраслям)",
      code: "38.02.04",
      duration: "2 года 10 месяцев",
      level: "СПО",
      description:
        "Торговая деятельность, коммерческие операции и управление продажами",
      icon: "ShoppingCart",
      popular: false,
    },
    {
      title: "Информационные системы и программирование",
      code: "09.02.07",
      duration: "3 года 10 месяцев",
      level: "СПО",
      description: "Разработка и администрирование информационных систем",
      icon: "Computer",
      popular: true,
    },
    {
      title: "Туризм",
      code: "43.02.10",
      duration: "2 года 10 месяцев",
      level: "СПО",
      description:
        "Организация туристической деятельности и гостиничного сервиса",
      icon: "Plane",
      popular: false,
    },
    {
      title: "Дизайн (по отраслям)",
      code: "54.02.01",
      duration: "3 года 10 месяцев",
      level: "СПО",
      description: "Графический дизайн, веб-дизайн и визуальные коммуникации",
      icon: "Palette",
      popular: false,
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 font-playfair text-corporate-dark">
            Образовательные программы
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Аккредитованные программы среднего профессионального образования,
            соответствующие федеральным государственным образовательным
            стандартам
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((program, index) => (
            <Card
              key={index}
              className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg relative overflow-hidden"
            >
              {program.popular && (
                <div className="absolute -top-2 -right-2 z-10">
                  <Badge className="bg-corporate-gold text-corporate-dark font-semibold">
                    Популярная
                  </Badge>
                </div>
              )}

              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-corporate-blue/10">
                    <Icon
                      name={program.icon}
                      size={24}
                      className="text-corporate-blue"
                    />
                  </div>
                  <div className="text-right">
                    <Badge variant="secondary" className="mb-1 block">
                      {program.level}
                    </Badge>
                    <span className="text-xs text-slate-500">
                      {program.code}
                    </span>
                  </div>
                </div>
                <CardTitle className="text-lg font-montserrat text-corporate-dark leading-tight">
                  {program.title}
                </CardTitle>
              </CardHeader>

              <CardContent>
                <p className="text-slate-600 mb-4 text-sm leading-relaxed">
                  {program.description}
                </p>

                <div className="flex items-center text-sm text-slate-500 mb-4">
                  <Icon name="Clock" size={16} className="mr-2" />
                  Срок обучения: {program.duration}
                </div>

                <Button
                  variant="outline"
                  size="sm"
                  className="w-full border-corporate-blue text-corporate-blue hover:bg-corporate-blue hover:text-white"
                >
                  Подробнее о программе
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            size="lg"
            className="bg-corporate-blue hover:bg-blue-800 px-8 py-3"
          >
            <Icon name="FileText" className="mr-2" size={20} />
            Все программы и условия поступления
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Programs;
