import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Contact = () => {
  const contacts = [
    {
      icon: "MapPin",
      title: "Адрес",
      content: "г. Ставрополь, просп. Карла Маркса, 7",
      action: "Показать на карте",
    },
    {
      icon: "Phone",
      title: "Телефон",
      content: "+7 (8652) 28-03-46",
      action: "Позвонить",
    },
  ];

  const workingHours = [
    { day: "Понедельник - Пятница", time: "8:00 - 17:00" },
    { day: "Суббота", time: "9:00 - 14:00" },
    { day: "Воскресенье", time: "Выходной" },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 font-playfair text-slate-900">
            Контактная информация
          </h2>
          <p className="text-lg text-slate-600">
            Приемная комиссия работает круглогодично. Консультации по
            образовательным программам и поступлению.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {contacts.map((contact, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-shadow border-0 shadow-md"
              >
                <CardHeader className="pb-2">
                  <div className="flex items-center mb-2">
                    <Icon
                      name={contact.icon}
                      size={20}
                      className="text-blue-600 mr-2"
                    />
                    <CardTitle className="text-lg font-montserrat text-slate-900">
                      {contact.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-700 mb-3 font-medium">
                    {contact.content}
                  </p>
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
                  >
                    {contact.action}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="hover:shadow-lg transition-shadow border-0 shadow-md">
            <CardHeader>
              <CardTitle className="text-lg font-montserrat flex items-center text-slate-900">
                <Icon name="Clock" size={20} className="text-blue-600 mr-2" />
                Режим работы приемной комиссии
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {workingHours.map((schedule, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center py-2 border-b border-slate-100 last:border-0"
                  >
                    <span className="text-slate-700">{schedule.day}</span>
                    <span className="font-medium text-blue-600">
                      {schedule.time}
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
            <Icon name="Phone" className="mr-2" size={20} />
            Записаться на консультацию
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
