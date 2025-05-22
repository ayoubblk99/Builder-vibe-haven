import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { Link } from "react-router-dom";

// WordPress connection interface
interface WordPressPost {
  id: number;
  date: string;
  title: {
    rendered: string;
  };
  excerpt: {
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
  slug: string;
  link: string;
  categories: number[];
}

interface WordPressCategory {
  id: number;
  name: string;
  slug: string;
  count: number;
}

const Portfolio = () => {
  // State for WordPress data
  const [posts, setPosts] = useState<WordPressPost[]>([]);
  const [categories, setCategories] = useState<WordPressCategory[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Replace with your WordPress URL
  const WORDPRESS_API_URL = "https://your-wordpress-site.com/wp-json/wp/v2";

  // Fetch WordPress posts and categories
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        // Fetch posts with embedded featured media
        const postsResponse = await fetch(
          `${WORDPRESS_API_URL}/posts?_embed=wp:featuredmedia&per_page=12`,
        );

        if (!postsResponse.ok) {
          throw new Error("Impossible de récupérer les articles du blog");
        }

        const postsData = await postsResponse.json();
        setPosts(postsData);

        // Fetch categories
        const categoriesResponse = await fetch(
          `${WORDPRESS_API_URL}/categories`,
        );

        if (!categoriesResponse.ok) {
          throw new Error("Impossible de récupérer les catégories");
        }

        const categoriesData = await categoriesResponse.json();
        setCategories(categoriesData);

        setLoading(false);
      } catch (err) {
        console.error("Erreur lors de la récupération des données:", err);
        setError("Une erreur est survenue lors du chargement des projets");
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Filter posts by category
  const filteredPosts = selectedCategory
    ? posts.filter((post) => post.categories.includes(selectedCategory))
    : posts;

  // For demo purposes when WordPress is not connected
  const demoProjects = [
    {
      id: 1,
      title: { rendered: "Campagne FMCG Nationale" },
      excerpt: {
        rendered:
          "<p>Recensement de produits dans 58 wilayas d'Algérie, touchant plus de 10 000 points de vente avec une augmentation de 25% des ventes.</p>",
      },
      _embedded: {
        "wp:featuredmedia": [
          {
            source_url:
              "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=700&auto=format&fit=crop",
            alt_text: "Campaign Analytics",
          },
        ],
      },
      categories: [1, 4],
      slug: "campagne-fmcg-nationale",
    },
    {
      id: 2,
      title: { rendered: "Étude de Marché Pharmaceutique" },
      excerpt: {
        rendered:
          "<p>Supervision d'un recensement de produits dans plus de 500 pharmacies pour un leader du secteur Healthcare avec optimisation des stocks.</p>",
      },
      _embedded: {
        "wp:featuredmedia": [
          {
            source_url:
              "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=700&auto=format&fit=crop",
            alt_text: "Pharmaceutical Market Study",
          },
        ],
      },
      categories: [2, 5],
      slug: "etude-marche-pharmaceutique",
    },
    {
      id: 3,
      title: { rendered: "Lancement Produit Cosmétique" },
      excerpt: {
        rendered:
          "<p>Recensement sur 300 points de vente et étude de satisfaction auprès de 1000 consommateurs pour un nouveau produit cosmétique.</p>",
      },
      _embedded: {
        "wp:featuredmedia": [
          {
            source_url:
              "https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=700&auto=format&fit=crop",
            alt_text: "Cosmetic Product Launch",
          },
        ],
      },
      categories: [1, 3],
      slug: "lancement-produit-cosmetique",
    },
    {
      id: 4,
      title: { rendered: "PLV Interactive pour Grande Surface" },
      excerpt: {
        rendered:
          "<p>Création de supports PLV digitaux interactifs pour une chaîne de supermarchés, augmentant l'engagement client de 35%.</p>",
      },
      _embedded: {
        "wp:featuredmedia": [
          {
            source_url:
              "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=700&auto=format&fit=crop",
            alt_text: "Interactive PLV",
          },
        ],
      },
      categories: [3, 6],
      slug: "plv-interactive-grande-surface",
    },
    {
      id: 5,
      title: { rendered: "Base de Données Consommateurs" },
      excerpt: {
        rendered:
          "<p>Développement d'une base de données vérifiée avec plus de 50 000 contacts qualifiés à travers l'Algérie.</p>",
      },
      _embedded: {
        "wp:featuredmedia": [
          {
            source_url:
              "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=700&auto=format&fit=crop",
            alt_text: "Consumer Database",
          },
        ],
      },
      categories: [4, 5],
      slug: "base-donnees-consommateurs",
    },
    {
      id: 6,
      title: { rendered: "Client Mystère Secteur Bancaire" },
      excerpt: {
        rendered:
          "<p>Opération client mystère dans plus de 100 agences bancaires pour identifier les points d'amélioration du service client.</p>",
      },
      _embedded: {
        "wp:featuredmedia": [
          {
            source_url:
              "https://images.unsplash.com/photo-1579621970588-a35d0e7ab9b6?q=80&w=700&auto=format&fit=crop",
            alt_text: "Mystery Client Banking",
          },
        ],
      },
      categories: [2, 6],
      slug: "client-mystere-secteur-bancaire",
    },
  ];

  const demoCategories = [
    { id: 1, name: "Études de Marché", slug: "etudes-marche", count: 10 },
    { id: 2, name: "Clients Mystères", slug: "clients-mysteres", count: 8 },
    { id: 3, name: "PLV Créative", slug: "plv-creative", count: 12 },
    { id: 4, name: "FMCG", slug: "fmcg", count: 15 },
    { id: 5, name: "Healthcare", slug: "healthcare", count: 7 },
    { id: 6, name: "Services", slug: "services", count: 9 },
  ];

  const displayPosts = posts.length > 0 ? filteredPosts : demoProjects;
  const displayCategories = categories.length > 0 ? categories : demoCategories;

  // HTML parser helper for WordPress content
  const createMarkup = (html: string) => {
    return { __html: html };
  };

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
                Notre portefeuille
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Projets et études de cas
              </h1>
              <p className="text-xl text-gray-600">
                Découvrez notre sélection de projets réalisés et les résultats
                obtenus pour nos clients à travers l'Algérie.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          {/* Categories Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button
              onClick={() => setSelectedCategory(null)}
              className={`px-4 py-2 rounded-full border text-sm font-medium transition-colors 
                ${
                  selectedCategory === null
                    ? "bg-blue-600 text-white border-blue-600"
                    : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
                }`}
            >
              Tous les projets
            </button>

            {displayCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-full border text-sm font-medium transition-colors 
                  ${
                    selectedCategory === category.id
                      ? "bg-blue-600 text-white border-blue-600"
                      : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
                  }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>

          {/* Error Message */}
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded mb-8 text-center">
              {error}
            </div>
          )}

          {/* Portfolio Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {loading
              ? // Loading skeletons
                Array.from({ length: 6 }).map((_, index) => (
                  <div
                    key={index}
                    className="rounded-lg overflow-hidden shadow-md"
                  >
                    <Skeleton className="w-full h-48" />
                    <div className="p-6">
                      <Skeleton className="h-6 w-3/4 mb-4" />
                      <Skeleton className="h-4 w-full mb-2" />
                      <Skeleton className="h-4 w-full mb-2" />
                      <Skeleton className="h-4 w-2/3 mb-4" />
                      <Skeleton className="h-10 w-1/3 mt-4" />
                    </div>
                  </div>
                ))
              : // Projects
                displayPosts.map((post, index) => (
                  <AnimatedSection
                    key={post.id}
                    delay={index * 0.1}
                    className="bg-white rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl group"
                  >
                    {/* Project Image */}
                    <div className="relative overflow-hidden aspect-[4/3]">
                      <img
                        src={
                          post._embedded?.["wp:featuredmedia"]?.[0]
                            ?.source_url ||
                          "https://via.placeholder.com/600x400?text=Projet"
                        }
                        alt={
                          post._embedded?.["wp:featuredmedia"]?.[0]?.alt_text ||
                          post.title.rendered
                        }
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>

                    <div className="p-6">
                      {/* Project Title */}
                      <h3 className="text-xl font-bold text-gray-900 mb-3">
                        {post.title.rendered}
                      </h3>

                      {/* Project Excerpt */}
                      <div
                        className="text-gray-600 mb-4"
                        dangerouslySetInnerHTML={createMarkup(
                          post.excerpt.rendered,
                        )}
                      />

                      {/* View Project Button */}
                      <div className="mt-4">
                        <Button variant="outline" asChild>
                          <Link to={`/portfolio/${post.slug}`}>
                            Voir le projet
                            <svg
                              className="ml-2 w-4 h-4"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
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
                  </AnimatedSection>
                ))}
          </div>

          {/* Load More Button */}
          <div className="mt-12 text-center">
            <Button variant="outline" size="lg">
              Charger plus de projets
              <svg
                className="ml-2 w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </Button>
          </div>
        </div>
      </section>

      {/* Integration with WordPress Blog Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4">
              Notre blog
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Derniers articles
            </h2>
            <p className="text-xl text-gray-600">
              Consultez nos derniers articles et insights sur le marketing, les
              études de marché et les tendances en Algérie.
            </p>
          </AnimatedSection>

          <div className="flex flex-col items-center">
            <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-8 mb-12">
              <div className="flex items-center space-x-4 mb-6">
                <div className="h-14 w-14 rounded-full bg-blue-600 flex items-center justify-center text-white">
                  <svg
                    className="h-8 w-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    Comment connecter votre WordPress
                  </h3>
                  <p className="text-gray-600">
                    Instructions pour l'administrateur
                  </p>
                </div>
              </div>

              <div className="pl-8 border-l-2 border-blue-200 ml-7">
                <ol className="space-y-4 text-gray-700">
                  <li className="flex items-start">
                    <span className="flex-shrink-0 inline-flex items-center justify-center h-6 w-6 rounded-full bg-blue-100 text-blue-800 font-semibold mr-3">
                      1
                    </span>
                    <p>
                      Installez et configurez votre site WordPress si ce n'est
                      pas déjà fait.
                    </p>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 inline-flex items-center justify-center h-6 w-6 rounded-full bg-blue-100 text-blue-800 font-semibold mr-3">
                      2
                    </span>
                    <p>
                      Assurez-vous que l'API REST de WordPress est activée (elle
                      l'est par défaut).
                    </p>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 inline-flex items-center justify-center h-6 w-6 rounded-full bg-blue-100 text-blue-800 font-semibold mr-3">
                      3
                    </span>
                    <p>
                      Dans ce fichier, remplacez la variable{" "}
                      <code className="bg-gray-100 px-1 py-0.5 rounded text-sm">
                        WORDPRESS_API_URL
                      </code>{" "}
                      par l'URL de votre site WordPress suivie de{" "}
                      <code className="bg-gray-100 px-1 py-0.5 rounded text-sm">
                        /wp-json/wp/v2
                      </code>
                      .
                    </p>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 inline-flex items-center justify-center h-6 w-6 rounded-full bg-blue-100 text-blue-800 font-semibold mr-3">
                      4
                    </span>
                    <p>
                      Pour ajouter de nouveaux projets au portfolio, créez
                      simplement des posts dans WordPress et assignez-leur des
                      catégories.
                    </p>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 inline-flex items-center justify-center h-6 w-6 rounded-full bg-blue-100 text-blue-800 font-semibold mr-3">
                      5
                    </span>
                    <p>
                      Utilisez des images à la une (featured images) pour les
                      visuels des projets.
                    </p>
                  </li>
                </ol>
              </div>
            </div>

            <Button className="bg-blue-600 hover:bg-blue-700">
              Se connecter à l'admin WordPress
            </Button>
          </div>
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
                Commençons votre prochain projet ensemble
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl">
                Vous avez un projet en tête ? SB-ILIVIK est prêt à transformer
                vos défis en opportunités. Contactez-nous pour découvrir comment
                nous pouvons vous aider à atteindre vos objectifs.
              </p>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-white hover:bg-blue-50 text-blue-600 border-white"
              >
                <Link to="/contact">
                  Discutons de votre projet
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

export default Portfolio;
