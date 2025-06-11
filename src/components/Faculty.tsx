import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Faculty = () => {
  const faculty = [
    {
      name: "Аванесов Артур Григорьевич",
      experience: "18 лет в образовании",
    },
    {
      name: "Климова Елена Владимировна",
      experience: "15 лет в образовании",
    },
    {
      name: "Масленникова Евгения Валерьевна",
      experience: "12 лет в образовании",
    },
    {
      name: "Хачикян Виола Арменовна",
      experience: "10 лет в образовании",
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
                <div className="w-24 h-24 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 text-2xl font-bold">
                    {member.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </span>
                </div>
                <CardTitle className="text-lg font-montserrat text-slate-900">
                  {member.name}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-600">{member.experience}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faculty;
