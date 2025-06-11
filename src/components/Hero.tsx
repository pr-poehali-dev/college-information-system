import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-6 font-montserrat">
            ЧПОУ колледж «Современная Школа Бизнеса»
          </h1>
          <p className="text-xl mb-8 text-blue-100">
            Ведущее образовательное учреждение города Ставрополь
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-blue-600 hover:bg-blue-50 font-semibold"
            >
              <Icon name="BookOpen" className="mr-2" size={20} />
              Специальности
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-600"
            >
              <Icon name="Phone" className="mr-2" size={20} />
              Контакты
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
