import Icon from "@/components/ui/icon";

const ServicesSection = () => {
  const services = [
    {
      icon: "Home",
      title: "Дизайн интерьеров",
      description:
        "Полный цикл создания интерьера от концепции до реализации. Авторский подход к каждому проекту.",
    },
    {
      icon: "Sparkles",
      title: "Хоум-стейджинг",
      description:
        "Подготовка недвижимости к продаже. Увеличиваем привлекательность и стоимость объекта.",
    },
    {
      icon: "Palette",
      title: "Декорирование",
      description:
        "Финальные штрихи, которые делают пространство уютным и стильным. Подбор аксессуаров и текстиля.",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 font-montserrat">
            Наши услуги
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto font-open-sans">
            Комплексные решения для создания идеального пространства
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-purple-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center mb-6 mx-auto">
                <Icon name={service.icon} size={32} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center font-montserrat">
                {service.title}
              </h3>
              <p className="text-gray-600 text-center font-open-sans leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
