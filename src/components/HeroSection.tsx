import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-white px-6">
      <div className="max-w-4xl text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-gray-800 mb-6 font-montserrat">
          Дизайн Интерьеров
          <span className="block text-gray-900 mt-2">& Хоум-стейджинг</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto font-open-sans leading-relaxed">
          Создаем пространства, которые вдохновляют. Профессиональный дизайн
          интерьеров и подготовка недвижимости для продажи в Москве.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg font-medium rounded-xl"
          >
            Получить консультацию
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-primary text-primary hover:bg-primary hover:text-white px-8 py-4 text-lg font-medium rounded-xl"
          >
            Посмотреть портфолио
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
