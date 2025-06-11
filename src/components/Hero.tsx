import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.03%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-8">
            <Badge className="bg-amber-500 text-slate-900 font-semibold px-6 py-2 text-sm mb-4 inline-flex items-center">
              <Icon name="Award" className="mr-2" size={16} />
              ЛИЦЕНЗИРОВАННОЕ ОБРАЗОВАТЕЛЬНОЕ УЧРЕЖДЕНИЕ
            </Badge>
          </div>

          <h1 className="text-4xl lg:text-5xl font-bold mb-6 font-playfair leading-tight">
            Частное профессиональное
            <br />
            образовательное учреждение
            <br />
            <span className="text-amber-400">
              Колледж «Современная школа бизнеса»
            </span>
          </h1>

          <p className="text-xl mb-8 text-slate-200 max-w-4xl mx-auto leading-relaxed">
            Ведущее образовательное учреждение Ставропольского края.
            Государственная лицензия и аккредитация программ среднего
            профессионального образования. Высокие стандарты подготовки
            специалистов для современного рынка труда.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              size="lg"
              className="bg-amber-500 text-slate-900 hover:bg-amber-400 font-semibold px-8 py-3 text-lg"
            >
              <Icon name="BookOpen" className="mr-2" size={20} />
              Образовательные программы
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-3 text-lg"
            >
              <Icon name="Users" className="mr-2" size={20} />
              Поступление 2024
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="text-3xl font-bold text-amber-400 mb-2">25+</div>
              <div className="text-slate-300 text-sm">лет успешной работы</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="text-3xl font-bold text-amber-400 mb-2">15</div>
              <div className="text-slate-300 text-sm">
                образовательных программ
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="text-3xl font-bold text-amber-400 mb-2">
                1200+
              </div>
              <div className="text-slate-300 text-sm">выпускников</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="text-3xl font-bold text-amber-400 mb-2">95%</div>
              <div className="text-slate-300 text-sm">трудоустройство</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
