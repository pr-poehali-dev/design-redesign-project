const PortfolioSection = () => {
  const projects = [
    {
      id: 1,
      title: "Современная квартира",
      category: "Дизайн интерьера",
      image:
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=400&fit=crop",
    },
    {
      id: 2,
      title: "Стейджинг пентхауса",
      category: "Хоум-стейджинг",
      image:
        "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&h=400&fit=crop",
    },
    {
      id: 3,
      title: "Минималистичная студия",
      category: "Дизайн интерьера",
      image:
        "https://images.unsplash.com/photo-1567767292278-a4f21aa2d36e?w=600&h=400&fit=crop",
    },
    {
      id: 4,
      title: "Семейный дом",
      category: "Полный дизайн",
      image:
        "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=600&h=400&fit=crop",
    },
    {
      id: 5,
      title: "Офисное пространство",
      category: "Коммерческий дизайн",
      image:
        "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop",
    },
    {
      id: 6,
      title: "Лофт-апартаменты",
      category: "Стейджинг",
      image:
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=400&fit=crop",
    },
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 font-montserrat">
            Портфолио
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto font-open-sans">
            Реализованные проекты, которые вдохновляют и создают атмосферу
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group cursor-pointer overflow-hidden rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <span className="text-gray-700 text-sm font-medium uppercase tracking-wide">
                  {project.category}
                </span>
                <h3 className="text-xl font-bold text-gray-800 mt-2 font-montserrat">
                  {project.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
