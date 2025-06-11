import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Faculty = () => {
  const faculty = [
    {
      name: "Иванова Елена Петровна",
      position: "Директор колледжа",
      experience: "20 лет в образовании",
      specialization: "Управление образованием",
      avatar:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
    },
    {
      name: "Петров Михаил Александрович",
      position: "Зам. директора по учебной работе",
      experience: "15 лет в образовании",
      specialization: "Экономика и финансы",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    },
    {
      name: "Сидорова Анна Владимировна",
      position: "Зав. кафедрой экономики",
      experience: "12 лет в образовании",
      specialization: "Бухгалтерский учет",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    },
    {
      name: "Козлов Дмитрий Сергеевич",
      position: "Преподаватель IT-дисциплин",
      experience: "8 лет в образовании",
      specialization: "Информационные технологии",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    },
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 font-playfair text-slate-900">
            Преподавательский состав
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Опытные преподаватели с высшим образованием и практическим опытом
            работы. Постоянное повышение квалификации и внедрение современных
            методик обучения.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {faculty.map((member, index) => (
            <Card
              key={index}
              className="text-center hover:shadow-lg transition-shadow border-0 shadow-md"
            >
              <CardHeader className="pb-4">
                <Avatar className="w-24 h-24 mx-auto mb-4">
                  <AvatarImage src={member.avatar} alt={member.name} />
                  <AvatarFallback className="bg-blue-100 text-blue-600 text-lg">
                    {member.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <CardTitle className="text-lg font-montserrat text-slate-900">
                  {member.name}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-blue-600 font-medium mb-2 text-sm">
                  {member.position}
                </p>
                <p className="text-sm text-slate-600 mb-2">
                  {member.specialization}
                </p>
                <p className="text-xs text-slate-500">{member.experience}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faculty;
