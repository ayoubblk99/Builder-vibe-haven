import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import ServiceCard from "@/components/ServiceCard";
import TestimonialCard from "@/components/TestimonialCard";
import AlgeriaMap from "@/components/AlgeriaMap";
import { Button } from "@/components/ui/button";

const Home = () => {
  const serviceItems = [
    {
      title: "Études de marché & sondages",
      description:
        "Études digitalisées, interactives et en temps réel pour des données immédiatement exploitables et fiables.",
      icon: (
        <svg
          className="h-10 w-10"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
          />
        </svg>
      ),
      link: "/services#studies",
    },
    {
      title: "Clients mystères digitalisés",
      description:
        "Enquêtes de satisfaction en temps réel avec observations géolocalisées dans les 58 wilayas d'Algérie.",
      icon: (
        <svg
          className="h-10 w-10"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      ),
      link: "/services#mystery",
    },
    {
      title: "Audit produits & merchandising",
      description:
        "Mesurez la visibilité et disponibilité de vos produits avec des outils technologiques avancés.",
      icon: (
        <svg
          className="h-10 w-10"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
          />
        </svg>
      ),
      link: "/services#audit",
    },
    {
      title: "PLV créative et connectée",
      description:
        "Création de supports interactifs et analyse de la performance de vos PLV avec tracking digital.",
      icon: (
        <svg
          className="h-10 w-10"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
          />
        </svg>
      ),
      link: "/services#plv",
    },
    {
      title: "Bases de données fiables",
      description:
        "Création et gestion de bases de données solides et vérifiées, avec couverture nationale.",
      icon: (
        <svg
          className="h-10 w-10"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
          />
        </svg>
      ),
      link: "/services#database",
    },
    {
      title: "Design d'expérience client",
      description:
        "Créez des interactions immersives et engageantes avec vos consommateurs, en ligne et en point de vente.",
      icon: (
        <svg
          className="h-10 w-10"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      link: "/services#experience",
    },
  ];

  const testimonials = [
    {
      quote: "Ils ont compris notre ADN en 48h. Le reste ? Que du résultat.",
      author: "Client X",
      company: "Entreprise Leader",
    },
    {
      quote: "Plus qu'une agence. Une vraie extension de notre équipe.",
      author: "Client Y",
      company: "Marque Internationale",
    },
    {
      quote:
        "Une réactivité exceptionnelle et des données fiables qui ont directement impacté nos ventes.",
      author: "Client Z",
      company: "FMCG Company",
    },
  ];

  const clients = [
    {
      name: "Unilever",
      image:
        "https://images.unsplash.com/photo-1614028674026-a65e31bfd27c?q=80&w=300&auto=format&fit=crop",
    },
    {
      name: "Palmary",
      image:
        "https://images.unsplash.com/photo-1557683311-eac922347aa1?q=80&w=300&auto=format&fit=crop",
    },
    {
      name: "Coca-Cola",
      image:
        "https://images.unsplash.com/photo-1629203432180-71e9b18d855a?q=80&w=300&auto=format&fit=crop",
    },
    {
      name: "Nike",
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=300&auto=format&fit=crop",
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="min-h-screen relative flex items-center pt-20 overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-gray-100" />

        {/* Background decoration */}
        <div className="absolute inset-0">
          <div className="absolute top-20 right-10 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
          <div className="absolute top-40 left-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
          <div className="absolute bottom-40 right-20 w-72 h-72 bg-indigo-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000" />
        </div>

        <div className="container mx-auto px-4 relative z-10 pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4">
                The solution you need
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
                Transformons vos <span className="text-blue-600">idées</span> en
                résultats <span className="text-blue-600">mesurables</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-8">
                SB-ILIVIK n'est pas une simple agence marketing. C'est un moteur
                d'impact, un accélérateur de croissance, un allié stratégique.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700"
                >
                  <Link to="/services">
                    Découvrir nos services
                    <svg
                      className="ml-2 -mr-1 w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/contact">Contactez-nous</Link>
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative overflow-hidden rounded-xl shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1400&auto=format&fit=crop"
                  alt="Digital Marketing Team"
                  className="w-full h-auto object-cover rounded-xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                    Depuis 2011
                  </span>
                  <p className="text-white text-lg mt-2">
                    Leader du marketing digital en Algérie
                  </p>
                </div>
              </div>

              {/* Stats Cards */}
              <div className="absolute -bottom-8 -right-8 bg-white rounded-lg shadow-xl p-4 md:p-6">
                <div className="flex items-center gap-4">
                  <div className="text-center">
                    <p className="text-3xl font-bold text-blue-600">58</p>
                    <p className="text-gray-600 text-sm">Wilayas</p>
                  </div>
                  <div className="h-10 w-px bg-gray-200"></div>
                  <div className="text-center">
                    <p className="text-3xl font-bold text-blue-600">200+</p>
                    <p className="text-gray-600 text-sm">Enquêteurs</p>
                  </div>
                  <div className="h-10 w-px bg-gray-200"></div>
                  <div className="text-center">
                    <p className="text-3xl font-bold text-blue-600">98%</p>
                    <p className="text-gray-600 text-sm">Fiabilité</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Qui sommes-nous
            </h2>
            <p className="text-xl text-gray-600">
              Une agence indépendante, créative dans l'âme, stratégique par
              conviction, et digitale dans l'exécution.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <div className="relative rounded-xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1400&auto=format&fit=crop"
                  alt="SB-ILIVIK Team"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent"></div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4">
                Notre histoire
              </span>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Tout a commencé en 2011
              </h3>
              <div className="space-y-4 text-gray-600">
                <p>
                  SB-ILIVIK a été fondée avec une vision simple et ambitieuse :
                  rendre la stratégie marketing aussi accessible qu'efficace et
                  offrir aux marques les moyens de mieux communiquer, mieux
                  vendre, mieux exister.
                </p>
                <p>
                  Lancée à Alger, notre agence a connu une croissance portée par
                  la recommandation avant de s'ouvrir naturellement à
                  l'international.
                </p>
                <p>
                  Aujourd'hui, notre obsession reste la même : le résultat.
                  Notre force : la vision.
                </p>
              </div>
              <div className="mt-8">
                <Button asChild className="bg-blue-600 hover:bg-blue-700">
                  <Link to="/about">
                    En savoir plus sur nous
                    <svg
                      className="ml-2 -mr-1 w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </Link>
                </Button>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4">
              Nos services
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              L'intelligence du terrain et la puissance du digital
            </h2>
            <p className="text-xl text-gray-600">
              Des solutions stratégiques et innovantes pour maximiser votre
              impact sur le marché algérien.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceItems.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                icon={service.icon}
                link={service.link}
                index={index}
              />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button asChild variant="outline" size="lg">
              <Link to="/services">
                Voir tous nos services
                <svg
                  className="ml-2 -mr-1 w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Coverage Map Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4">
              Présence nationale
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Notre couverture en Algérie
            </h2>
            <p className="text-xl text-gray-600">
              Une présence active dans toutes les principales villes, avec des
              experts locaux qui comprennent les spécificités de chaque région.
            </p>
          </AnimatedSection>

          <AnimatedSection>
            <AlgeriaMap />
          </AnimatedSection>

          <AnimatedSection className="mt-12 bg-blue-50 rounded-xl p-6 max-w-3xl mx-auto">
            <div className="flex flex-col md:flex-row items-center">
              <div className="mb-6 md:mb-0 md:mr-8">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                  <svg
                    className="w-8 h-8"
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
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-blue-900 mb-2">
                  Présence active en:
                </h3>
                <p className="text-blue-800">
                  Alger • Oran • Sétif • Constantine • Annaba et partout en
                  Algérie
                </p>
                <p className="mt-2 text-blue-700">
                  Notre réseau de plus de 200 enquêteurs couvre les 58 wilayas
                  d'Algérie, garantissant une connaissance de marché à 360°.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4">
              Témoignages
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Ils nous font confiance
            </h2>
            <p className="text-xl text-gray-600">
              Des startups ambitieuses. Des marques établies. Des projets qui
              ont du sens.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                quote={testimonial.quote}
                author={testimonial.author}
                company={testimonial.company}
                index={index}
              />
            ))}
          </div>

          {/* Clients Logos */}
          <AnimatedSection className="mt-20">
            <p className="text-center text-gray-500 mb-8">
              Ils travaillent avec nous
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
              {clients.map((client, index) => (
                <motion.div
                  key={index}
                  className="grayscale hover:grayscale-0 transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <img
                    src={client.image}
                    alt={client.name}
                    className="h-12 object-contain"
                  />
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0">
          <svg
            className="absolute right-0 top-0 h-full w-1/2 translate-x-1/2 transform text-blue-500 opacity-20"
            fill="none"
            viewBox="0 0 400 400"
          >
            <defs>
              <pattern
                id="pattern-circles"
                width="20"
                height="20"
                patternUnits="userSpaceOnUse"
                patternContentUnits="userSpaceOnUse"
              >
                <circle
                  id="pattern-circle"
                  cx="10"
                  cy="10"
                  r="1.6257413380501518"
                  fill="currentColor"
                ></circle>
              </pattern>
            </defs>
            <rect
              width="100%"
              height="100%"
              fill="url(#pattern-circles)"
            ></rect>
          </svg>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col items-center text-center">
            <AnimatedSection>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Prêt à faire décoller votre marque ?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl">
                SB-ILIVIK est prêt à transformer vos défis en opportunités.
                Contactez-nous pour découvrir comment nous pouvons vous aider à
                atteindre vos objectifs.
              </p>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-white hover:bg-blue-50 text-blue-600 border-white"
              >
                <Link to="/contact">
                  Contactez-nous
                  <svg
                    className="ml-2 -mr-1 w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </Link>
              </Button>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
