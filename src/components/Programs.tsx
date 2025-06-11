import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Programs = () => {
  const programs = [
    {
      title: "Экономика и бухгалтерский учет",
      duration: "2 года 10 месяцев",
      level: "СПО",
      description:
        "Подготовка специалистов в области финансов и бухгалтерского учета",
      icon: "Calculator",
    },
    {
      title: "Банковское дело",
      duration: "2 года 10 месяцев",
      level: "СПО",
      description: "Современные банковские технологии и финансовые услуги",
      icon: "Building2",
    },
    {
      title: "Коммерция",
      duration: "2 года 10 месяцев",
      level: "СПО",
      description: "Торговая деятельность и коммерческие операции",
      icon: "ShoppingCart",
    },
    {
      title: "Информационные системы",
      duration: "3 года 10 месяцев",
      level: "СПО",
      description: "Разработка и администрирование информационных систем",
      icon: "Computer",
    },
    {
      title: "Туризм",
      duration: "2 года 10 месяцев",
      level: "СПО",
      description: "Организация туристической деятельности",
      icon: "Plane",
    },
    {
      title: "Дизайн",
      duration: "3 года 10 месяцев",
      level: "СПО",
      description: "Графический дизайн и визуальные коммуникации",
      icon: "Palette",
    },
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 font-montserrat text-gray-800">
          Специальности
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((program, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Icon
                    name={program.icon}
                    size={24}
                    className="text-blue-600"
                  />
                  <Badge variant="secondary">{program.level}</Badge>
                </div>
                <CardTitle className="text-lg font-montserrat">
                  {program.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{program.description}</p>
                <div className="flex items-center text-sm text-gray-500">
                  <Icon name="Clock" size={16} className="mr-2" />
                  {program.duration}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;
