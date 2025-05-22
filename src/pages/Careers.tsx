import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Careers = () => {
  const jobCategories = [
    { id: "cdi", label: "CDI" },
    { id: "stage", label: "Stage" },
    { id: "freelance", label: "Freelance" },
  ];

  const jobOpenings = [
    {
      title: "Responsable Marketing Digital",
      type: "CDI",
      description:
        "Développer des stratégies de marketing digital pour nos clients, analyser les données de performance des campagnes, diriger l'équipe créative pour garantir l'efficacité des actions.",
      requirements: [
        "Minimum 3 ans d'expérience en marketing digital",
        "Maîtrise des outils d'analyse et des plateformes publicitaires",
        "Compétences en gestion d'équipe",
        "Connaissance du marché algérien",
      ],
      location: "Alger",
    },
    {
      title: "Chargé(e) des Opérations",
      type: "CDI",
      description:
        "Superviser la gestion des projets, assurer la coordination des équipes internes et externes, gérer la planification et l'exécution des campagnes. Vous serez le point de contact principal pour garantir la bonne gestion des opérations.",
      requirements: [
        "Expérience en gestion de projet ou opérations",
        "Excellent sens de l'organisation",
        "Capacité à travailler sous pression",
        "Coordination d'équipes multiples",
      ],
      location: "Alger",
    },
    {
      title: "Account Manager",
      type: "CDI",
      description:
        "Gérer et développer un portefeuille client, coordonner les équipes créatives et techniques pour livrer des projets alignés aux objectifs des clients, assurer une communication fluide et une satisfaction optimale.",
      requirements: [
        "2 à 4 ans d'expérience en gestion de comptes",
        "Sens du relationnel",
        "Proactivité et capacité à gérer plusieurs projets simultanément",
        "Bilinguisme français/arabe, anglais est un plus",
      ],
      location: "Oran",
    },
    {
      title: "Commercial Terrain",
      type: "CDI",
      description:
        "Développer notre présence sur le terrain, prospecter de nouveaux clients, négocier des partenariats et des contrats dans le secteur FMCG et Healthcare. Vous serez le représentant de SB-ILIVIK sur le terrain et l'acteur clé de notre croissance commerciale.",
      requirements: [
        "Expérience réussie dans la vente terrain (FMCG, Healthcare, ou secteur similaire)",
        "Esprit de conquête",
        "Excellente capacité à négocier et à établir des relations de confiance",
        "Mobilité sur toute l'Algérie",
      ],
      location: "Constantine",
    },
    {
      title: "Analyste de données",
      type: "Stage",
      description:
        "Contribuer à l'analyse des données collectées lors de nos études de marché et campagnes marketing. Vous aiderez à transformer des données brutes en insights actionnables pour nos clients.",
      requirements: [
        "Formation en statistiques, marketing ou domaine connexe",
        "Bonne maîtrise d'Excel et des outils d'analyse",
        "Esprit analytique et rigueur",
        "Connaissances en data visualization",
      ],
      location: "Alger",
    },
    {
      title: "Développeur Front-End",
      type: "Freelance",
      description:
        "Concevoir et développer des interfaces utilisateur modernes et réactives pour nos projets digitaux. Vous travaillerez en étroite collaboration avec notre équipe design et back-end.",
      requirements: [
        "Maîtrise de HTML, CSS, JavaScript",
        "Expérience avec React ou Vue.js",
        "Connaissance des principes de responsive design",
        "Portfolio de projets réalisés",
      ],
      location: "Remote",
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
                Carrières
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Rejoignez l'Aventure SB-ILIVIK !
              </h1>
              <p className="text-xl text-gray-600">
                Chez SB-ILIVIK, chaque jour est une nouvelle occasion de créer,
                innover et grandir ensemble. Nous cherchons des individus
                passionnés, ambitieux et curieux pour compléter une équipe qui
                fait la différence.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Join Us Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <div className="relative">
                <div className="absolute inset-0 bg-blue-600 rounded-xl transform rotate-3 scale-105 opacity-10"></div>
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1400&auto=format&fit=crop"
                  alt="Notre équipe"
                  className="relative rounded-xl shadow-lg w-full h-auto"
                />
                <div className="absolute -bottom-5 -right-5 bg-blue-600 text-white p-4 rounded-lg shadow-lg">
                  <span className="text-sm md:text-base font-medium">
                    Dream Team
                  </span>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4">
                Pourquoi nous rejoindre
              </span>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Bien plus qu'un simple poste
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Rejoindre SB-ILIVIK, c'est un engagement à repousser les
                  limites de l'innovation avec une équipe créative, humaine et
                  ambitieuse. Nous croyons que chaque talent a sa place, et que
                  l'excellence se construit ensemble.
                </p>
                <p>
                  Vous aurez la chance de travailler dans un environnement
                  stimulant, où vos idées se transforment en projets concrets,
                  tout en bénéficiant d'un cadre de travail flexible et propice
                  à l'épanouissement personnel.
                </p>
              </div>

              <div className="mt-8 space-y-6">
                <div className="border-l-4 border-blue-600 pl-4">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Notre culture d'entreprise
                  </h3>
                  <p className="text-gray-600">
                    La culture d'entreprise chez SB-ILIVIK repose sur une
                    collaboration ouverte et l'encouragement de l'esprit
                    d'équipe. Nous croyons que l'innovation naît des échanges,
                    des projets collaboratifs, et des idées audacieuses.
                  </p>
                </div>

                <div className="border-l-4 border-blue-600 pl-4">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Nos engagements RH
                  </h3>
                  <p className="text-gray-600">
                    Nous valorisons la diversité des talents et des parcours.
                    Nous offrons à nos collaborateurs un environnement inclusif,
                    propice à l'innovation et au développement personnel.
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Job Listings Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4">
              Offres d'emploi
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nos postes à pourvoir
            </h2>
            <p className="text-xl text-gray-600">
              Découvrez nos opportunités actuelles et rejoignez une équipe qui
              fait la différence
            </p>
          </AnimatedSection>

          {/* Job Categories Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {jobCategories.map((category) => (
              <button
                key={category.id}
                className="px-4 py-2 bg-white text-blue-600 rounded-full border border-blue-200 hover:bg-blue-50 transition-colors shadow-sm text-sm font-medium"
              >
                {category.label}
              </button>
            ))}
          </div>

          {/* Job Listings */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {jobOpenings.map((job, index) => (
              <AnimatedSection
                key={index}
                delay={index * 0.1}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-1">
                        {job.title}
                      </h3>
                      <p className="text-gray-600">{job.location}</p>
                    </div>
                    <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                      {job.type}
                    </span>
                  </div>

                  <p className="text-gray-600 mb-4">{job.description}</p>

                  <div className="mb-6">
                    <h4 className="font-medium text-gray-900 mb-2">
                      Profil recherché:
                    </h4>
                    <ul className="list-disc pl-5 text-gray-600 space-y-1">
                      {job.requirements.map((req, i) => (
                        <li key={i}>{req}</li>
                      ))}
                    </ul>
                  </div>

                  <Button className="w-full bg-blue-600 hover:bg-blue-700">
                    Postuler maintenant
                  </Button>
                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* Spontaneous Application */}
          <AnimatedSection className="mt-16 bg-white rounded-lg shadow-md p-8 max-w-3xl mx-auto">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Candidature Spontanée
              </h3>
              <p className="text-gray-600 mb-6">
                Vous n'avez pas trouvé de poste correspondant à vos attentes ?
                N'attendez plus ! Envoyez-nous votre candidature spontanée et
                rejoignez une équipe qui est toujours �� la recherche de
                talents.
              </p>
              <Button
                className="bg-blue-600 hover:bg-blue-700"
                asChild
                size="lg"
              >
                <Link to="/contact">Envoyer ma candidature</Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Les avantages de travailler chez SB-ILIVIK
            </h2>
            <p className="text-xl text-gray-600">
              Un environnement de travail stimulant et bienveillant
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: (
                  <svg
                    className="h-12 w-12"
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
                title: "Flexibilité",
                description:
                  "Horaires flexibles et possibilité de télétravail partiel pour un meilleur équilibre vie professionnelle/personnelle.",
              },
              {
                icon: (
                  <svg
                    className="h-12 w-12"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                    />
                  </svg>
                ),
                title: "Environnement stimulant",
                description:
                  "Des bureaux modernes et confortables, conçus pour favoriser la créativité et la collaboration.",
              },
              {
                icon: (
                  <svg
                    className="h-12 w-12"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                    />
                  </svg>
                ),
                title: "Formation continue",
                description:
                  "Programme de formation pour développer vos compétences et rester à la pointe de votre domaine.",
              },
              {
                icon: (
                  <svg
                    className="h-12 w-12"
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
                title: "Esprit d'équipe",
                description:
                  "Événements et activités régulières pour renforcer la cohésion d'équipe et créer des liens durables.",
              },
              {
                icon: (
                  <svg
                    className="h-12 w-12"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                ),
                title: "Rémunération attractive",
                description:
                  "Salaires compétitifs et bonus basés sur la performance et la contribution aux projets.",
              },
              {
                icon: (
                  <svg
                    className="h-12 w-12"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                    />
                  </svg>
                ),
                title: "Évolution de carrière",
                description:
                  "Des opportunités d'avancement claires et un accompagnement personnalisé pour votre développement professionnel.",
              },
            ].map((benefit, index) => (
              <AnimatedSection
                key={index}
                delay={index * 0.1}
                className="bg-blue-50 rounded-lg p-6 text-center"
              >
                <div className="text-blue-600 mb-4 flex justify-center">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">{benefit.description}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700 relative overflow-hidden">
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
                Prêt à rejoindre l'aventure ?
              </h2>
              <p className="text-xl text-blue-100 mb-8">
                Découvrez nos offres d'emploi et devenez membre d'une équipe
                passionnée et innovante. Votre talent pourrait faire la
                différence chez SB-ILIVIK !
              </p>
              <Button
                asChild
                size="lg"
                className="bg-white hover:bg-blue-50 text-blue-600"
              >
                <a href="#" onClick={(e) => e.preventDefault()}>
                  Voir les offres
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
                </a>
              </Button>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Careers;
