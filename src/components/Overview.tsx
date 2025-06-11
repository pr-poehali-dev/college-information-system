import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Overview = () => {
  const achievements = [
    {
      icon: "Award",
      title: "Бренд Ставрополя",
      description:
        "Официальный статус, подтверждающий высокое качество образовательных услуг",
      badge: "2023",
    },
    {
      icon: "Shield",
      title: "Лицензированное учреждение",
      description: "Государственная лицензия на образовательную деятельность",
      badge: "Лицензия",
    },
    {
      icon: "Star",
      title: "Аккредитация",
      description: "Государственная аккредитация образовательных программ",
      badge: "Аккредитован",
    },
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 font-playfair text-corporate-dark">
            О колледже
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            ЧПОУ колледж «Современная Школа Бизнеса» – престижное
            образовательное учреждение, официально признанное брендом
            Ставропольского края. Мы предоставляем качественное профессиональное
            образование, соответствующее современным требованиям рынка труда и
            международным стандартам.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {achievements.map((achievement, index) => (
            <Card
              key={index}
              className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white"
            >
              <CardContent className="pt-8 text-center">
                <div className="relative mb-6">
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-corporate-blue/10 mb-4">
                    <Icon
                      name={achievement.icon}
                      size={36}
                      className="text-corporate-blue"
                    />
                  </div>
                  <Badge className="absolute -top-2 -right-2 bg-corporate-gold text-corporate-dark">
                    {achievement.badge}
                  </Badge>
                </div>
                <h3 className="text-xl font-bold mb-4 font-montserrat text-corporate-dark">
                  {achievement.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {achievement.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-gradient-to-r from-corporate-blue to-slate-700 rounded-xl p-8 text-white text-center">
          <Icon
            name="Quote"
            size={48}
            className="text-corporate-gold mx-auto mb-4"
          />
          <blockquote className="text-xl italic mb-4 font-playfair">
            "Наша миссия — подготовка высококвалифицированных специалистов,
            способных успешно конкурировать на современном рынке труда"
          </blockquote>
          <cite className="text-corporate-gold font-semibold">
            Руководство колледжа
          </cite>
        </div>
      </div>
    </section>
  );
};

export default Overview;
