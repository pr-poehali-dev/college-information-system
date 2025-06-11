import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <section className="bg-gradient-to-b from-corporate-dark via-slate-800 to-corporate-blue text-white py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%2523ffffff%22%20fill-opacity%3D%220.03%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <div className="mb-6">
            <Badge className="bg-corporate-gold text-corporate-dark font-semibold px-4 py-2 text-sm mb-4 inline-flex items-center">
              <Icon name="Award" className="mr-2" size={16} />
              БРЕНД СТАВРОПОЛЯ
            </Badge>
          </div>

          <h1 className="text-5xl lg:text-6xl font-bold mb-6 font-playfair leading-tight">
            ЧПОУ колледж
            <br />
            <span className="text-corporate-gold">
              «Современная Школа Бизнеса»
            </span>
          </h1>

          <p className="text-xl mb-8 text-slate-200 max-w-3xl mx-auto leading-relaxed">
            Ведущее частное профессиональное образовательное учреждение города
            Ставрополь. Официально признанный бренд региона с высочайшими
            стандартами образования.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-corporate-gold text-corporate-dark hover:bg-yellow-500 font-semibold px-8 py-3 text-lg"
            >
              <Icon name="BookOpen" className="mr-2" size={20} />
              Образовательные программы
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-corporate-dark px-8 py-3 text-lg"
            >
              <Icon name="Phone" className="mr-2" size={20} />
              Приемная комиссия
            </Button>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4">
              <div className="text-2xl font-bold text-corporate-gold">25+</div>
              <div className="text-slate-300">лет в образовании</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4">
              <div className="text-2xl font-bold text-corporate-gold">
                1200+
              </div>
              <div className="text-slate-300">выпускников</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4">
              <div className="text-2xl font-bold text-corporate-gold">95%</div>
              <div className="text-slate-300">трудоустройство</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
