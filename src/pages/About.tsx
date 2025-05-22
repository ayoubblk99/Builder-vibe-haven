import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import TeamMember from "@/components/TeamMember";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const About = () => {
  const values = [
    {
      title: "Créativité",
      description:
        "On ne répète jamais deux fois la même recette. On invente la vôtre.",
      icon: (
        <svg
          className="h-10 w-10"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
          />
        </svg>
      ),
    },
    {
      title: "Innovation",
      description:
        "Nous maîtrisons les outils, mais c'est la réflexion qui fait la différence.",
      icon: (
        <svg
          className="h-10 w-10"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
    },
    {
      title: "Excellence",
      description: "Chaque détail compte. Pas de compromis sur la qualité.",
      icon: (
        <svg
          className="h-10 w-10"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      ),
    },
    {
      title: "Transparence",
      description: "Chez nous, pas de jargon ni de survente. Juste du concret.",
      icon: (
        <svg
          className="h-10 w-10"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
          />
        </svg>
      ),
    },
    {
      title: "Proximité",
      description:
        "Nous marchons à vos côtés, pas un pas devant, pas un pas derrière.",
      icon: (
        <svg
          className="h-10 w-10"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      ),
    },
  ];

  const teamMembers = [
    {
      name: "Sarah B.",
      role: "Directrice Générale",
      imageSrc:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop",
    },
    {
      name: "Karim M.",
      role: "Directeur Marketing",
      imageSrc:
        "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=600&auto=format&fit=crop",
    },
    {
      name: "Lina T.",
      role: "Responsable Études",
      imageSrc:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=600&auto=format&fit=crop",
    },
    {
      name: "Omar H.",
      role: "Lead Développeur",
      imageSrc:
        "https://images.unsplash.com/photo-1531384441138-2736e62e0919?q=80&w=600&auto=format&fit=crop",
    },
  ];

  const timeline = [
    {
      year: "2011",
      title: "Fondation de SB-ILIVIK",
      description:
        "Création de l'agence à Alger avec une vision simple: rendre la stratégie marketing accessible et efficace.",
    },
    {
      year: "2014",
      title: "Innovation Digitale",
      description:
        "Premiers en Algérie à introduire les enquêtes digitales et audits en temps réel.",
    },
    {
      year: "2016",
      title: "Expansion Nationale",
      description:
        "Développement d'un réseau d'enquêteurs couvrant les 58 wilayas d'Algérie.",
    },
    {
      year: "2018",
      title: "Clients Internationaux",
      description:
        "Partenariats avec des marques internationales dans les secteurs FMCG et Healthcare.",
    },
    {
      year: "2020",
      title: "Révolution Technologique",
      description:
        "Intégration de solutions mobiles avancées et création de plateformes de suivi en temps réel.",
    },
    {
      year: "2023",
      title: "Leader du Marché",
      description:
        "Consolidation de notre position comme leader du marketing terrain et digital en Algérie.",
    },
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
                À Propos de Nous
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Qui sommes-nous
              </h1>
              <div className="text-xl text-gray-600 space-y-4">
                <p>
                  <span className="font-semibold">SB-ILIVIK</span>, The solution
                  you need.
                </p>
                <p>
                  SB-ILIVIK n'est pas une simple agence marketing. C'est un
                  moteur d'impact, un accélérateur de croissance, un allié
                  stratégique.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <div className="relative">
                <div className="absolute inset-0 bg-blue-600 rounded-xl transform rotate-3 scale-105 opacity-10"></div>
                <img
                  src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1400&auto=format&fit=crop"
                  alt="Notre Mission"
                  className="relative rounded-xl shadow-lg w-full h-auto"
                />
                <div className="absolute -top-4 -left-4 bg-blue-600 text-white p-3 rounded-lg shadow-lg transform -rotate-3">
                  <span className="font-medium">Depuis 2011</span>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4">
                Notre histoire
              </span>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Notre ADN
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Tout a commencé en 2011, avec une vision simple et ambitieuse
                  : rendre la stratégie marketing aussi accessible qu'efficace
                  et offrir aux marques les moyens de mieux communiquer, mieux
                  vendre, mieux exister.
                </p>
                <p>
                  Lancée à Alger, notre agence a connu une croissance portée par
                  la recommandation avant de s'ouvrir naturellement à
                  l'international.
                </p>
                <p>
                  Aujourd'hui, SB-ILIVIK, c'est une agence indépendante,
                  créative dans l'âme, stratégique par conviction, et digitale
                  dans l'exécution.
                </p>
              </div>

              <div className="mt-8 space-y-6">
                <div className="border-l-4 border-blue-600 pl-4">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Notre mission
                  </h3>
                  <p className="text-gray-600">
                    Mettre le marketing de haut niveau à la portée de ceux qui
                    veulent jouer pour gagner. SB-ILIVIK rend la stratégie plus
                    simple, plus humaine et plus efficace.
                  </p>
                </div>

                <div className="border-l-4 border-blue-600 pl-4">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Notre vision
                  </h3>
                  <p className="text-gray-600">
                    "On ne vend pas un service. On livre une performance. Et on
                    s'investit comme si c'était notre propre marque."
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4">
              Nos valeurs
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nos valeurs (et on y croit vraiment)
            </h2>
            <p className="text-xl text-gray-600">
              Des principes qui guident chacune de nos actions et façonnent
              notre identité.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {values.map((value, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <div className="bg-white rounded-lg shadow-md p-6 h-full flex flex-col">
                  <div className="text-blue-600 mb-4">{value.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 flex-grow">{value.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4">
              Notre équipe
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              L'équipe derrière la mission
            </h2>
            <p className="text-xl text-gray-600">
              Une dream team de passionnés, stratèges, créatifs et faiseurs de
              résultats. Des profils complémentaires, une synergie rare.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <TeamMember
                key={index}
                name={member.name}
                role={member.role}
                imageSrc={member.imageSrc}
                index={index}
              />
            ))}
          </div>

          <AnimatedSection className="mt-16 bg-blue-50 rounded-xl p-6 max-w-3xl mx-auto">
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
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-blue-900 mb-2">
                  Une équipe d'experts chevronnés
                </h3>
                <p className="text-blue-700">
                  25 ans d'expérience combinée, du top management, acquis en
                  Algérie, en Europe mais aussi en Amérique du Nord, mise au
                  service de nos clients/partenaires.
                </p>
                <p className="mt-2 text-blue-700">
                  Notre équipe est présente sur Alger, Oran, Sétif, Constantine
                  et Annaba, assurant une couverture nationale optimale.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* History Timeline Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4">
              Notre parcours
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Notre histoire
            </h2>
            <p className="text-xl text-gray-600">
              Découvrez les moments clés qui ont façonné SB-ILIVIK et notre
              approche innovante.
            </p>
          </AnimatedSection>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Vertical Line */}
              <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-blue-200 transform md:translate-x-px"></div>

              {/* Timeline Items */}
              <div className="space-y-12">
                {timeline.map((item, index) => (
                  <AnimatedSection key={index} delay={index * 0.15}>
                    <div
                      className={`flex flex-col md:flex-row ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}
                    >
                      {/* Content */}
                      <div className="md:w-1/2 p-4">
                        <div
                          className={`bg-white p-6 rounded-lg shadow-md ${index % 2 === 0 ? "md:mr-8" : "md:ml-8"}`}
                        >
                          <div className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-2">
                            {item.year}
                          </div>
                          <h3 className="text-xl font-bold text-gray-900 mb-3">
                            {item.title}
                          </h3>
                          <p className="text-gray-600">{item.description}</p>
                        </div>
                      </div>

                      {/* Circle on timeline */}
                      <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 mt-4 md:mt-6">
                        <div className="w-8 h-8 bg-blue-600 rounded-full border-4 border-white shadow"></div>
                      </div>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4">
              Nos clients
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Ils nous font confiance
            </h2>
            <p className="text-xl text-gray-600">
              Des startups ambitieuses. Des marques établies. Des projets qui
              ont du sens.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              "https://images.unsplash.com/photo-1614028674026-a65e31bfd27c?q=80&w=300&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1557683311-eac922347aa1?q=80&w=300&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1629203432180-71e9b18d855a?q=80&w=300&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=300&auto=format&fit=crop",
            ].map((logo, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <div className="bg-gray-50 rounded-lg h-24 flex items-center justify-center p-4">
                  <img
                    src={logo}
                    alt="Client Logo"
                    className="max-h-12 grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="mt-16 max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-blue-50 rounded-lg p-6">
                <div className="mb-4 text-blue-600">
                  <svg
                    className="w-8 h-8"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h3v10h-9zm-14 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3v10h-9z" />
                  </svg>
                </div>
                <p className="text-gray-700 italic mb-4">
                  "Ils ont compris notre ADN en 48h. Le reste ? Que du
                  résultat."
                </p>
                <div className="font-medium text-gray-900">— Client X</div>
              </div>

              <div className="bg-blue-50 rounded-lg p-6">
                <div className="mb-4 text-blue-600">
                  <svg
                    className="w-8 h-8"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h3v10h-9zm-14 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3v10h-9z" />
                  </svg>
                </div>
                <p className="text-gray-700 italic mb-4">
                  "Plus qu'une agence. Une vraie extension de notre équipe."
                </p>
                <div className="font-medium text-gray-900">— Client Y</div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute right-0 bottom-0">
          <svg
            width="404"
            height="392"
            fill="none"
            viewBox="0 0 404 392"
            className="text-blue-500 opacity-20"
          >
            <defs>
              <pattern
                id="02f20b47-fd69-4224-a62a-4c9de5c763f7"
                x="0"
                y="0"
                width="20"
                height="20"
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x="0"
                  y="0"
                  width="4"
                  height="4"
                  fill="currentColor"
                ></rect>
              </pattern>
            </defs>
            <rect
              width="404"
              height="392"
              fill="url(#02f20b47-fd69-4224-a62a-4c9de5c763f7)"
            ></rect>
          </svg>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <AnimatedSection>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Et maintenant ?
              </h2>
              <p className="text-xl text-blue-100 mb-8">
                Envie de faire décoller votre marque, de lancer un projet
                puissant ou de refondre votre image ? SB-ILIVIK est prêt. Et
                vous ?
              </p>
              <Button
                asChild
                size="lg"
                className="bg-white hover:bg-blue-50 text-blue-600"
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

export default About;
