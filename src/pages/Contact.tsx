import { useState } from "react";
import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import ContactForm from "@/components/ContactForm";

const Contact = () => {
  const [mapLoaded, setMapLoaded] = useState(false);

  const contactInfo = [
    {
      title: "Email",
      value: "contact@sb-ilivik.com",
      icon: (
        <svg
          className="h-6 w-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
    },
    {
      title: "Téléphone",
      value: "(+213) XXXXXXXXX",
      icon: (
        <svg
          className="h-6 w-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
          />
        </svg>
      ),
    },
    {
      title: "Adresse",
      value: "Alger, Algérie",
      icon: (
        <svg
          className="h-6 w-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      ),
    },
    {
      title: "Horaires",
      value: "Dim - Jeu: 8h30 - 17h00",
      icon: (
        <svg
          className="h-6 w-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
  ];

  const offices = [
    { city: "Alger", address: "Bureau principal, Alger" },
    { city: "Oran", address: "Bureau régional, Oran" },
    { city: "Constantine", address: "Bureau régional, Constantine" },
    { city: "Sétif", address: "Bureau régional, Sétif" },
    { city: "Annaba", address: "Bureau régional, Annaba" },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4">
                Contactez-nous
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Parlons de votre projet
              </h1>
              <p className="text-xl text-gray-600">
                Chez SB-ILIVIK, chaque projet commence par une conversation.
                Nous sommes à votre écoute pour transformer vos idées en actions
                stratégiques.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Form and Info Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <AnimatedSection>
              <ContactForm />
            </AnimatedSection>

            {/* Contact Info */}
            <AnimatedSection delay={0.2}>
              <div className="bg-blue-50 rounded-lg p-8 h-full">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Nos coordonnées
                </h3>

                <div className="space-y-6 mb-8">
                  {contactInfo.map((item, index) => (
                    <div key={index} className="flex items-start">
                      <div className="text-blue-600 mt-1 mr-4">{item.icon}</div>
                      <div>
                        <h4 className="font-medium text-gray-900">
                          {item.title}
                        </h4>
                        <p className="text-gray-600">{item.value}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8">
                  <h4 className="font-medium text-gray-900 mb-4">
                    Suivez-nous sur les réseaux sociaux
                  </h4>
                  <div className="flex space-x-4">
                    <a
                      href="#"
                      className="text-gray-500 hover:text-blue-600 transition-colors"
                    >
                      <svg
                        className="h-6 w-6"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                      </svg>
                    </a>
                    <a
                      href="#"
                      className="text-gray-500 hover:text-blue-600 transition-colors"
                    >
                      <svg
                        className="h-6 w-6"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                      </svg>
                    </a>
                    <a
                      href="#"
                      className="text-gray-500 hover:text-blue-600 transition-colors"
                    >
                      <svg
                        className="h-6 w-6"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                      </svg>
                    </a>
                    <a
                      href="#"
                      className="text-gray-500 hover:text-blue-600 transition-colors"
                    >
                      <svg
                        className="h-6 w-6"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Nos bureaux en Algérie
            </h2>
            <p className="text-xl text-gray-600">
              Présence active dans les principales villes algériennes pour mieux
              vous servir
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {offices.map((office, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {office.city}
                  </h3>
                  <p className="text-gray-600 mb-4">{office.address}</p>
                  <a
                    href={`https://www.google.com/maps/search/${encodeURIComponent(office.city + ", Algérie")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 font-medium inline-flex items-center hover:text-blue-800 transition-colors"
                  >
                    Voir sur la carte
                    <svg
                      className="ml-1 w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <AnimatedSection className="max-w-5xl mx-auto">
            <div className="rounded-lg overflow-hidden shadow-lg h-96 relative">
              {/* This displays an embedded Google Map */}
              <div className="relative w-full h-full bg-gray-200">
                <div className="absolute inset-0 flex items-center justify-center bg-gray-100 text-gray-500 z-10">
                  {!mapLoaded && (
                    <div className="text-center">
                      <svg
                        className="animate-spin h-8 w-8 mx-auto mb-2 text-blue-600"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      <p>Chargement de la carte...</p>
                    </div>
                  )}
                </div>
                <iframe
                  className="absolute inset-0 w-full h-full z-20"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d102311.70838865957!2d3.0174016971984733!3d36.76649556270066!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x128fb26977ea659f%3A0x128fb26977ea659f!2sAlger!5e0!3m2!1sfr!2sdz!4v1617444239071!5m2!1sfr!2sdz"
                  allowFullScreen={true}
                  loading="lazy"
                  onLoad={() => setMapLoaded(true)}
                  title="SB-ILIVIK location map"
                ></iframe>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Questions fréquentes
            </h2>
            <p className="text-xl text-gray-600">
              Trouvez rapidement des réponses à vos questions
            </p>
          </AnimatedSection>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              {[
                {
                  question:
                    "Comment fonctionne le processus de collaboration avec SB-ILIVIK ?",
                  answer:
                    "Notre processus commence par une consultation initiale pour comprendre vos besoins. Nous élaborons ensuite une proposition sur mesure, suivie d'une stratégie détaillée et d'un plan d'exécution. Tout au long du projet, vous bénéficiez d'un suivi régulier et de rapports détaillés.",
                },
                {
                  question:
                    "Dans quelles villes êtes-vous présents en Algérie ?",
                  answer:
                    "Nous avons des bureaux à Alger, Oran, Constantine, Sétif et Annaba. Notre réseau d'enquêteurs couvre l'ensemble des 58 wilayas d'Algérie, nous permettant d'offrir une couverture nationale complète.",
                },
                {
                  question:
                    "Combien de temps faut-il pour mener une étude de marché complète ?",
                  answer:
                    "La durée varie en fonction de l'ampleur et de la complexité de l'étude. Une étude standard peut prendre entre 2 et 4 semaines, tandis qu'une étude plus approfondie peut nécessiter 6 à 8 semaines. Nous proposons également des solutions accélérées pour les besoins urgents.",
                },
                {
                  question:
                    "Comment garantissez-vous la fiabilité de vos données ?",
                  answer:
                    "Nous utilisons une méthodologie rigoureuse de vérification en plusieurs étapes, incluant une validation croisée des données, des contrôles qualité par nos superviseurs, et des outils technologiques avancés. Cela nous permet d'atteindre un taux de fiabilité supérieur à 98%.",
                },
              ].map((faq, index) => (
                <AnimatedSection
                  key={index}
                  delay={index * 0.1}
                  className="bg-white rounded-lg shadow-md p-6"
                >
                  <h3 className="text-lg font-bold text-gray-900 mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
