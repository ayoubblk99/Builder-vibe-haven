import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";

// WordPress post interface
interface WordPressPost {
  id: number;
  date: string;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
  _embedded?: {
    "wp:featuredmedia"?: Array<{
      source_url: string;
      alt_text: string;
    }>;
  };
  categories: number[];
  acf?: {
    client?: string;
    year?: string;
    location?: string;
    results?: string;
    testimonial?: string;
    client_name?: string;
    gallery?: Array<{
      url: string;
      alt: string;
    }>;
  };
}

const ProjectDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const [project, setProject] = useState<WordPressPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Replace with your WordPress URL
  const WORDPRESS_API_URL = "https://your-wordpress-site.com/wp-json/wp/v2";

  useEffect(() => {
    const fetchProject = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `${WORDPRESS_API_URL}/posts?slug=${slug}&_embed=wp:featuredmedia`,
        );

        if (!response.ok) {
          throw new Error("Impossible de récupérer le projet");
        }

        const data = await response.json();

        if (data && data.length > 0) {
          setProject(data[0]);
        } else {
          // For demo purposes, we'll use a mock project when the API doesn't return data
          setProject(getMockProject(slug));
        }

        setLoading(false);
      } catch (err) {
        console.error("Erreur lors de la récupération du projet:", err);
        setError("Une erreur est survenue lors du chargement du projet");
        // Still use mock data for demo
        setProject(getMockProject(slug));
        setLoading(false);
      }
    };

    fetchProject();
  }, [slug]);

  // HTML parser helper for WordPress content
  const createMarkup = (html: string) => {
    return { __html: html };
  };

  // Mock project data for demonstration
  const getMockProject = (projectSlug: string | undefined): WordPressPost => {
    // Default mock project
    const defaultProject: WordPressPost = {
      id: 1,
      date: "2023-05-15T10:00:00",
      title: {
        rendered: "Étude de Marché Nationale",
      },
      content: {
        rendered: `
          <p>SB-ILIVIK a mené une étude de marché complète à l'échelle nationale, couvrant les 58 wilayas d'Algérie, pour comprendre les tendances de consommation et le comportement des acheteurs.</p>
          <h3>Défis</h3>
          <p>Le client avait besoin de données précises et actualisées sur l'ensemble du territoire algérien, avec des informations spécifiques sur chaque région et différentes catégories démographiques.</p>
          <ul>
            <li>Couverture nationale complète requise</li>
            <li>Données à collecter dans un délai serré</li>
            <li>Nécessité de segments démographiques précis</li>
          </ul>
          <h3>Notre approche</h3>
          <p>Nous avons déployé notre réseau d'enquêteurs qualifiés dans toutes les wilayas, utilisant notre technologie mobile avancée pour recueillir, vérifier et traiter les données en temps réel.</p>
          <p>Notre méthodologie a inclus :</p>
          <ol>
            <li>Enquêtes en personne dans plus de 5000 points de contact</li>
            <li>Sondages en ligne avec géolocalisation</li>
            <li>Groupes de discussion ciblés dans les grandes villes</li>
            <li>Analyse des données avec IA pour identifier les tendances</li>
          </ol>
          <h3>Résultats</h3>
          <p>Cette étude a permis au client de :</p>
          <ul>
            <li>Ajuster sa stratégie marketing régionale</li>
            <li>Identifier de nouveaux segments de marché</li>
            <li>Augmenter ses ventes de 23% dans les zones prioritaires</li>
            <li>Économiser 15% de son budget marketing grâce à un ciblage plus précis</li>
          </ul>
        `,
      },
      _embedded: {
        "wp:featuredmedia": [
          {
            source_url:
              "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1400&auto=format&fit=crop",
            alt_text: "Étude de Marché Nationale",
          },
        ],
      },
      categories: [1, 3],
      acf: {
        client: "Grande Entreprise FMCG",
        year: "2023",
        location: "58 wilayas d'Algérie",
        results: "23% d'augmentation des ventes, 15% d'économies marketing",
        testimonial:
          "SB-ILIVIK nous a fourni des insights précieux que nous n'aurions jamais pu obtenir autrement. Leur couverture nationale et la qualité de leurs données sont impressionnantes.",
        client_name: "Directeur Marketing, Grande Entreprise FMCG",
        gallery: [
          {
            url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1400&auto=format&fit=crop",
            alt: "Collecte de données",
          },
          {
            url: "https://images.unsplash.com/photo-1542744095-291d1f67b221?q=80&w=1400&auto=format&fit=crop",
            alt: "Analyse des résultats",
          },
          {
            url: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1400&auto=format&fit=crop",
            alt: "Présentation client",
          },
        ],
      },
    };

    // Return the same project for any slug in demo mode
    return defaultProject;
  };

  if (loading) {
    return (
      <Layout>
        <section className="pt-32 pb-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Skeleton className="h-10 w-3/4 mb-4" />
              <Skeleton className="h-6 w-1/2 mb-12" />

              <Skeleton className="w-full h-96 mb-12" />

              <div className="grid grid-cols-3 gap-6 mb-12">
                <Skeleton className="h-24" />
                <Skeleton className="h-24" />
                <Skeleton className="h-24" />
              </div>

              <Skeleton className="h-6 w-1/3 mb-4" />
              <Skeleton className="h-4 w-full mb-2" />
              <Skeleton className="h-4 w-full mb-2" />
              <Skeleton className="h-4 w-full mb-8" />

              <Skeleton className="h-6 w-1/3 mb-4" />
              <Skeleton className="h-4 w-full mb-2" />
              <Skeleton className="h-4 w-full mb-2" />
              <Skeleton className="h-4 w-full mb-8" />
            </div>
          </div>
        </section>
      </Layout>
    );
  }

  if (error && !project) {
    return (
      <Layout>
        <section className="pt-32 pb-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">
                {error}
              </div>
              <Button asChild className="mt-6">
                <Link to="/portfolio">Retour au portefeuille</Link>
              </Button>
            </div>
          </div>
        </section>
      </Layout>
    );
  }

  if (!project) {
    return (
      <Layout>
        <section className="pt-32 pb-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-3xl font-bold text-gray-900 mb-6">
                Projet non trouvé
              </h1>
              <p className="text-gray-600 mb-8">
                Le projet que vous recherchez n'existe pas ou a été déplacé.
              </p>
              <Button asChild>
                <Link to="/portfolio">Retour au portefeuille</Link>
              </Button>
            </div>
          </div>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Link
                to="/portfolio"
                className="flex items-center text-sm text-blue-600 hover:text-blue-800 transition-colors mb-4"
              >
                <svg
                  className="mr-2 w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 19l-7-7m0 0l7-7m-7 7h18"
                  />
                </svg>
                Retour au portefeuille
              </Link>

              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {project.title.rendered}
              </h1>

              <div className="flex flex-wrap gap-4 mt-6">
                {project.acf?.client && (
                  <div className="bg-blue-50 px-4 py-2 rounded-full">
                    <span className="text-blue-700 font-medium">Client:</span>{" "}
                    {project.acf.client}
                  </div>
                )}

                {project.acf?.year && (
                  <div className="bg-blue-50 px-4 py-2 rounded-full">
                    <span className="text-blue-700 font-medium">Année:</span>{" "}
                    {project.acf.year}
                  </div>
                )}

                {project.acf?.location && (
                  <div className="bg-blue-50 px-4 py-2 rounded-full">
                    <span className="text-blue-700 font-medium">Lieu:</span>{" "}
                    {project.acf.location}
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="py-10">
        <div className="container mx-auto px-4">
          <AnimatedSection className="max-w-5xl mx-auto">
            <div className="relative rounded-xl overflow-hidden shadow-xl">
              <img
                src={
                  project._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
                  "https://via.placeholder.com/1200x600?text=Project+Image"
                }
                alt={
                  project._embedded?.["wp:featuredmedia"]?.[0]?.alt_text ||
                  project.title.rendered
                }
                className="w-full h-auto"
              />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
              {project.acf?.results && (
                <AnimatedSection className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-lg font-bold text-blue-900 mb-2">
                    Résultats
                  </h3>
                  <p className="text-blue-800">{project.acf.results}</p>
                </AnimatedSection>
              )}

              <AnimatedSection
                delay={0.1}
                className="bg-blue-50 p-6 rounded-lg"
              >
                <h3 className="text-lg font-bold text-blue-900 mb-2">
                  Services
                </h3>
                <ul className="text-blue-800">
                  <li>Études de marché</li>
                  <li>Analyse de données</li>
                  <li>Stratégie marketing</li>
                </ul>
              </AnimatedSection>

              <AnimatedSection
                delay={0.2}
                className="bg-blue-50 p-6 rounded-lg"
              >
                <h3 className="text-lg font-bold text-blue-900 mb-2">
                  Méthodologie
                </h3>
                <ul className="text-blue-800">
                  <li>Enquêtes terrain</li>
                  <li>Sondages digitaux</li>
                  <li>Data mining</li>
                </ul>
              </AnimatedSection>
            </div>

            {/* Project Content */}
            <AnimatedSection className="prose prose-lg max-w-none mb-12">
              <div
                dangerouslySetInnerHTML={createMarkup(project.content.rendered)}
              />
            </AnimatedSection>

            {/* Testimonial if available */}
            {project.acf?.testimonial && (
              <AnimatedSection className="bg-gray-50 rounded-xl p-8 mb-12">
                <div className="flex flex-col md:flex-row items-start gap-6">
                  <div className="text-blue-600 flex-shrink-0">
                    <svg
                      className="w-12 h-12"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h3v10h-9zm-14 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3v10h-9z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-700 italic mb-4">
                      {project.acf.testimonial}
                    </p>
                    {project.acf.client_name && (
                      <p className="font-medium text-gray-900">
                        {project.acf.client_name}
                      </p>
                    )}
                  </div>
                </div>
              </AnimatedSection>
            )}

            {/* Project Gallery */}
            {project.acf?.gallery && project.acf.gallery.length > 0 && (
              <AnimatedSection className="mb-12">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Galerie du projet
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {project.acf.gallery.map((image, index) => (
                    <div
                      key={index}
                      className="rounded-lg overflow-hidden shadow-md"
                    >
                      <img
                        src={image.url}
                        alt={image.alt}
                        className="w-full h-64 object-cover transition-transform duration-300 hover:scale-105"
                      />
                    </div>
                  ))}
                </div>
              </AnimatedSection>
            )}

            {/* Navigation and CTA */}
            <div className="flex flex-col sm:flex-row justify-between items-center mt-12 pt-8 border-t border-gray-200">
              <Button asChild variant="outline">
                <Link to="/portfolio">
                  <svg
                    className="mr-2 w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 19l-7-7m0 0l7-7m-7 7h18"
                    />
                  </svg>
                  Retour au portefeuille
                </Link>
              </Button>

              <Button
                asChild
                className="mt-4 sm:mt-0 bg-blue-600 hover:bg-blue-700"
              >
                <Link to="/contact">
                  Discuter d'un projet similaire
                  <svg
                    className="ml-2 w-4 h-4"
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
        </div>
      </section>
    </Layout>
  );
};

export default ProjectDetail;
