import Icon from "@/components/ui/icon";
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 font-montserrat">
            Не нашли интересующую услугу?
          </h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto font-open-sans leading-relaxed mb-8">
            Чтобы получить индивидуальную консультацию и предварительную оценку
            стоимости подходящей вам услуги, заполните, пожалуйста, форму
            запроса ниже. Это поможет нам сформулировать ваши потребности и
            более точно определить объем работ.
          </p>
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg font-medium rounded-xl"
          >
            Оставить заявку
          </Button>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mt-16">
          {/* Карта */}
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img
              src="https://cdn.poehali.dev/files/602a4878-678e-4adc-ae2c-aad8c4590f29.png"
              alt="Карта офиса"
              className="w-full h-96 object-cover"
            />
          </div>

          {/* Контакты */}
          <div className="bg-gray-50 rounded-lg p-8">
            <h3 className="text-3xl font-bold text-gray-800 mb-8 font-montserrat">
              Наши контакты
            </h3>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gray-900 rounded-lg flex items-center justify-center">
                  <Icon name="Phone" size={24} className="text-white" />
                </div>
                <div>
                  <p className="text-gray-500 text-sm font-medium">Телефон</p>
                  <a
                    href="tel:+79635265193"
                    className="text-xl font-bold text-gray-800 hover:text-gray-900 transition-colors"
                  >
                    +7963 526 5193
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gray-900 rounded-lg flex items-center justify-center">
                  <Icon name="Mail" size={24} className="text-white" />
                </div>
                <div>
                  <p className="text-gray-500 text-sm font-medium">Email</p>
                  <a
                    href="mailto:demim.ceo@gmail.com"
                    className="text-xl font-bold text-gray-800 hover:text-gray-900 transition-colors"
                  >
                    demim.ceo@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gray-900 rounded-lg flex items-center justify-center">
                  <Icon name="MapPin" size={24} className="text-white" />
                </div>
                <div>
                  <p className="text-gray-500 text-sm font-medium">Адрес</p>
                  <p className="text-xl font-bold text-gray-800">
                    Москва, Россия
                  </p>
                </div>
              </div>

              <div className="pt-4">
                <p className="text-gray-500 text-sm font-medium mb-3">
                  Социальные сети
                </p>
                <div className="flex gap-3">
                  <div className="w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center cursor-pointer hover:bg-gray-800 transition-colors">
                    <span className="text-white font-bold">Вк</span>
                  </div>
                  <div className="w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center cursor-pointer hover:bg-gray-800 transition-colors">
                    <Icon name="Send" size={20} className="text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
