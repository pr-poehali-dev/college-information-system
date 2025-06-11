import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Overview = () => {
  const features = [
    {
      icon: "Target",
      title: "Наша миссия",
      description:
        "Подготовка высококвалифицированных специалистов для современной экономики",
    },
    {
      icon: "Lightbulb",
      title: "Инновации в образовании",
      description:
        "Современные методы обучения и актуальные образовательные программы",
    },
    {
      icon: "Users",
      title: "Индивидуальный подход",
      description:
        "Персональное сопровождение каждого студента на пути к успеху",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-6 font-montserrat text-gray-800">
            О колледже
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            ЧПОУ колледж «Современная Школа Бизнеса» – это динамично
            развивающееся образовательное учреждение, которое готовит
            специалистов в области экономики, бизнеса, информационных технологий
            и других востребованных направлений. Мы гордимся высоким качеством
            образования и успехами наших выпускников.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="text-center hover:shadow-lg transition-shadow border-none bg-gray-50"
            >
              <CardContent className="pt-8">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 mb-6">
                  <Icon
                    name={feature.icon}
                    size={32}
                    className="text-blue-600"
                  />
                </div>
                <h3 className="text-xl font-bold mb-4 font-montserrat text-gray-800">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Overview;
