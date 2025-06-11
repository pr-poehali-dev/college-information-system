import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Stats = () => {
  const stats = [
    {
      icon: "Users",
      value: "1200+",
      label: "Студентов",
      color: "text-blue-600",
    },
    {
      icon: "GraduationCap",
      value: "15",
      label: "Специальностей",
      color: "text-green-600",
    },
    {
      icon: "Award",
      value: "25+",
      label: "Лет опыта",
      color: "text-purple-600",
    },
    {
      icon: "Building",
      value: "95%",
      label: "Трудоустройство",
      color: "text-orange-600",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 font-montserrat text-gray-800">
          Ключевые показатели
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card
              key={index}
              className="text-center hover:shadow-lg transition-shadow"
            >
              <CardContent className="pt-6">
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 mb-4 ${stat.color}`}
                >
                  <Icon name={stat.icon} size={32} />
                </div>
                <h3 className="text-3xl font-bold mb-2 font-montserrat">
                  {stat.value}
                </h3>
                <p className="text-gray-600">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
