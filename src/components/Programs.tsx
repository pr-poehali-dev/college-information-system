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
          <h2 className="text-4xl font-bold mb-6 font-playfair text-slate-900">
            Образовательные программы СПО
          </h2>
          <p className="text-lg text-slate-600 max-w-4xl mx-auto leading-relaxed">
            Государственная аккредитация программ среднего профессионального
            образования. Обучение по федеральным государственным образовательным
            стандартам (ФГОС). Выдача дипломов государственного образца.
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
                  <Badge className="bg-amber-500 text-slate-900 font-semibold">
                    Востребованная
                  </Badge>
                </div>
              )}

              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-blue-50">
                    <Icon
                      name={program.icon}
                      size={24}
                      className="text-blue-600"
                    />
                  </div>
                  <div className="text-right">
                    <Badge
                      variant="secondary"
                      className="mb-1 block bg-slate-100"
                    >
                      {program.level}
                    </Badge>
                    <span className="text-xs text-slate-500 font-mono">
                      {program.code}
                    </span>
                  </div>
                </div>
                <CardTitle className="text-lg font-montserrat text-slate-900 leading-tight">
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
                  className="w-full border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
                >
                  Подробнее о программе
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 px-8 py-3">
            <Icon name="FileText" className="mr-2" size={20} />
            Правила приема и документы
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Programs;
