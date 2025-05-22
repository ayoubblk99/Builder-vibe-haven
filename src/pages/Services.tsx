import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Services = () => {
  const location = useLocation();
  const hash = location.hash;

  // References for scroll
  const studiesRef = useRef<HTMLDivElement>(null);
  const mysteryRef = useRef<HTMLDivElement>(null);
  const auditRef = useRef<HTMLDivElement>(null);
  const plvRef = useRef<HTMLDivElement>(null);
  const databaseRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (hash) {
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, [hash]);

  const services = [
    {
      id: "studies",
      ref: studiesRef,
      title: "Études de marché & sondages en ligne",
      subtitle: "Insights digitaux en temps réel",
      description:
        "Nos études de marché sont désormais digitalisées, interactives et permettent un suivi en temps réel. Nous utilisons des applications mobiles et QR codes pour des enquêtes en ligne, avec suivi instantané via dashboard sécurisé et précision géolocalisée.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1400&auto=format&fit=crop",
      features: [
        "Enquêtes en ligne via applications mobiles et QR codes",
        "Suivi instantané des réponses via dashboard sécurisé",
        "Précision géolocalisée par wilayas et typologies de consommateurs",
        "Taux de fiabilité et de véracité de plus de 98%",
      ],
    },
    {
      id: "mystery",
      ref: mysteryRef,
      title: "Clients mystères digitalisés & connectés",
      subtitle: "Évaluation expérience client moderne",
      description:
        "Notre approche de client mystère est modernisée avec l'intégration de tablettes et applications mobiles. Ces outils permettent des enquêtes de satisfaction en temps réel, des observations géolocalisées et des réponses instantanées sur la qualité du service.",
      image:
        "https://images.unsplash.com/photo-1573497620053-ea5300f94f21?q=80&w=1400&auto=format&fit=crop",
      features: [
        "Enquêtes de satisfaction en temps réel",
        "Observations géolocalisées dans les 58 wilayas",
        "Réponses instantanées sur la qualité du service",
        "Rapports détaillés avec indicateurs de performance mesurables",
      ],
    },
    {
      id: "audit",
      ref: auditRef,
      title: "Audit produits & merchandising augmenté",
      subtitle: "Visibilité produit en temps réel",
      description:
        "L'audit de vos produits sur le terrain prend une nouvelle dimension avec SB-ILIVIK. Nous utilisons des outils technologiques avancés pour mesurer la visibilité, la disponibilité et le positionnement de vos produits dans les points de vente à travers l'Algérie.",
      image:
        "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=1400&auto=format&fit=crop",
      features: [
        "Relevés instantanés via tablettes et apps mobiles",
        "Remontée de données en temps réel",
        "Géolocalisation précise des produits dans toutes les wilayas",
        "Suivi photo et analyse détaillée",
      ],
    },
    {
      id: "plv",
      ref: plvRef,
      title: "PLV créative et connectée",
      subtitle: "Publicité sur lieu de vente innovante",
      description:
        "Nous réinventons la PLV (publicité sur le lieu de vente) en alliant créativité, technologie, et suivi en temps réel. Création de supports interactifs, analyse de la performance avec des outils de tracking digital et suivi des interactions clients.",
      image:
        "https://images.unsplash.com/photo-1618004912476-29818d81ae2e?q=80&w=1400&auto=format&fit=crop",
      features: [
        "Supports interactifs (totems, écrans digitaux, QR codes)",
        "Tracking digital pour analyser la performance",
        "Suivi des interactions clients via dispositifs mobiles",
        "Rapports détaillés sur l'impact des activations en magasin",
      ],
    },
    {
      id: "database",
      ref: databaseRef,
      title: "Bases de données fiables & couverture nationale",
      subtitle: "Données vérifiées à l'échelle nationale",
      description:
        "SB-ILIVIK est experte dans la création et la gestion de bases de données solides et vérifiées, grâce à notre réseau de plus de 200 enquêteurs répartis dans les 58 wilayas d'Algérie. Nos processus garantissent une qualité et une fiabilité de données incomparables.",
      image:
        "https://images.unsplash.com/photo-1542744095-291d1f67b221?q=80&w=1400&auto=format&fit=crop",
      features: [
        "Validation des contacts par vérification manuelle et digitale",
        "Segmentation par zone géographique, démographie, comportement d'achat",
        "Bases dynamiques constamment mises à jour",
        "Taux de fiabilité supérieur à 98% dans la collecte des données",
      ],
    },
    {
      id: "experience",
      ref: experienceRef,
      title: "Design d'expérience client & activation créative",
      subtitle: "Interactions immersives et engageantes",
      description:
        "Nous créons des activations de marque qui s'appuient sur une compréhension fine du comportement des consommateurs et une utilisation poussée des technologies mobiles et digitales, pour créer des expériences qui transforment l'engagement client.",
      image:
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1400&auto=format&fit=crop",
      features: [
        "Interactions immersives en ligne et en point de vente",
        "Mesure d'impact en temps réel par reporting instantané",
        "Technologies innovantes et design expérientiel",
        "Augmentation mesurable de l'engagement client",
      ],
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4">
                Nos services
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Insights & Activation Terrain 2.0
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                L'intelligence du terrain, enrichie par la technologie et des
                bases de données fiables.
              </p>

              <div className="flex flex-wrap justify-center gap-4 mt-8">
                {services.map((service) => (
                  <a
                    key={service.id}
                    href={`#${service.id}`}
                    className="px-4 py-2 bg-white text-blue-600 rounded-full border border-blue-200 hover:bg-blue-50 transition-colors shadow-sm text-sm font-medium"
                  >
                    {service.title.split("&")[0]}
                  </a>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Details */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="space-y-32">
            {services.map((service, index) => (
              <div
                key={service.id}
                id={service.id}
                ref={service.ref}
                className="scroll-mt-24"
              >
                <div
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                    index % 2 === 1 ? "lg:grid-flow-col lg:grid-cols-2" : ""
                  }`}
                >
                  <AnimatedSection
                    className={index % 2 === 1 ? "lg:order-2" : ""}
                  >
                    <div className="relative">
                      <div className="absolute inset-0 bg-blue-600 rounded-xl transform rotate-3 scale-105 opacity-10"></div>
                      <img
                        src={service.image}
                        alt={service.title}
                        className="relative rounded-xl shadow-lg w-full h-auto object-cover aspect-[4/3]"
                      />
                      <div className="absolute -bottom-5 -right-5 bg-blue-600 text-white p-4 rounded-lg shadow-lg">
                        <span className="text-sm md:text-base font-medium">
                          {service.id === "studies"
                            ? "Depuis 2014"
                            : service.id === "mystery"
                              ? "58 wilayas"
                              : service.id === "audit"
                                ? "+30% visibilité"
                                : service.id === "plv"
                                  ? "PLV interactive"
                                  : service.id === "database"
                                    ? "98% fiabilité"
                                    : "Expérience immersive"}
                        </span>
                      </div>
                    </div>
                  </AnimatedSection>

                  <AnimatedSection
                    delay={0.2}
                    className={index % 2 === 1 ? "lg:order-1" : ""}
                  >
                    <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4">
                      {service.subtitle}
                    </span>
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">
                      {service.title}
                    </h2>
                    <p className="text-gray-600 mb-8">{service.description}</p>

                    <div className="bg-gray-50 rounded-xl p-6 mb-8">
                      <h3 className="text-lg font-semibold text-gray-800 mb-4">
                        Caractéristiques principales
                      </h3>
                      <ul className="space-y-3">
                        {service.features.map((feature, i) => (
                          <li key={i} className="flex items-start">
                            <svg
                              className="h-5 w-5 text-blue-600 mt-0.5 mr-3"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                            <span className="text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Button asChild className="bg-blue-600 hover:bg-blue-700">
                      <Link to="/contact">
                        Demander plus d'informations
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
            ))}
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4">
              Notre méthodologie
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Une approche en 5 étapes clés
            </h2>
            <p className="text-xl text-gray-600">
              Une méthodologie rigoureuse, fondée sur la précision et
              l'innovation.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {[
              {
                step: "Audit stratégique",
                description:
                  "Analyse approfondie de votre marché, positionnement, concurrence et comportements consommateurs.",
                icon: (
                  <svg
                    className="h-8 w-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    />
                  </svg>
                ),
              },
              {
                step: "Définition des KPIs",
                description:
                  "Établissement d'indicateurs de performance adaptés à vos besoins et objectifs spécifiques.",
                icon: (
                  <svg
                    className="h-8 w-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                ),
              },
              {
                step: "Idéation stratégique",
                description:
                  "Développement d'une stratégie créative et ciblée, basée sur les données récoltées.",
                icon: (
                  <svg
                    className="h-8 w-8"
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
                step: "Exécution et production",
                description:
                  "Mise en œuvre des actions avec suivi en temps réel grâce à nos outils connectés.",
                icon: (
                  <svg
                    className="h-8 w-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                ),
              },
              {
                step: "Analyse et optimisation",
                description:
                  "Évaluation des résultats et ajustement continu pour garantir performance optimale.",
                icon: (
                  <svg
                    className="h-8 w-8"
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
            ].map((item, index) => (
              <AnimatedSection
                key={index}
                delay={index * 0.1}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <div className="text-blue-600 mb-4">{item.icon}</div>
                <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-600 font-bold mb-4">
                  {index + 1}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {item.step}
                </h3>
                <p className="text-gray-600">{item.description}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                value: "10K+",
                label: "Points de vente touchés",
                description: "lors des recensements FMCG",
              },
              {
                value: "500+",
                label: "Pharmacies suivies",
                description: "lors de campagnes Healthcare",
              },
              {
                value: "25%",
                label: "Augmentation des ventes",
                description: "dans les zones de lancement",
              },
              {
                value: "35%",
                label: "Croissance de visibilité",
                description: "grâce à nos campagnes ciblées",
              },
            ].map((stat, index) => (
              <AnimatedSection
                key={index}
                delay={index * 0.1}
                className="text-center"
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-blue-100 rounded-full transform scale-110 opacity-20"></div>
                  <div className="relative bg-white rounded-lg shadow-md p-6">
                    <div className="text-4xl font-bold text-blue-600 mb-2">
                      {stat.value}
                    </div>
                    <div className="text-lg font-medium text-gray-900 mb-1">
                      {stat.label}
                    </div>
                    <div className="text-sm text-gray-500">
                      {stat.description}
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
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
                Transformez vos données en actions stratégiques
              </h2>
              <p className="text-xl text-blue-100 mb-8">
                Chez SB-ILIVIK, nous maximisons l'impact de vos campagnes et
                optimisons constamment vos résultats grâce à notre expertise et
                notre technologie avancée.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  asChild
                  size="lg"
                  className="bg-white hover:bg-blue-50 text-blue-600"
                >
                  <Link to="/contact">Demander un devis</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-blue-500"
                >
                  <Link to="/about">En savoir plus sur nous</Link>
                </Button>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
