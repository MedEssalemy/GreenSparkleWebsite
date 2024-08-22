import React from 'react';
import { Droplet, Zap, Thermometer, CloudRain, Lightbulb, Sprout, Droplets, Wifi, Users2, Leaf, Home, ShoppingBag } from 'lucide-react';

// Custom ModularGarden icon component
const ModularGardenIcon = ({ size = 24, color = "currentColor", ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <rect x="3" y="3" width="6" height="6" />
    <rect x="15" y="3" width="6" height="6" />
    <rect x="3" y="15" width="6" height="6" />
    <rect x="15" y="15" width="6" height="6" />
    <path d="M9 6 H15" />
    <path d="M9 18 H15" />
    <path d="M6 9 V15" />
    <path d="M18 9 V15" />
  </svg>
);

const GreenSparkleWebsite = () => {
  const scrollToSolutions = () => {
    const solutionsSection = document.getElementById('nos-solutions');
    if (solutionsSection) {
      solutionsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-green-50 text-gray-800 font-sans">
      <header className="relative h-[50vh] min-h-[400px] bg-cover bg-center" style={{backgroundImage: 'url("/headerPic.webp")'}}>
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/30 flex items-center justify-center">
          <div className="text-center text-white p-4 max-w-3xl">
            <h1 className="text-5xl sm:text-6xl font-bold mb-4 text-shadow leading-tight">
              Green Sparkle
            </h1>
            <p className="text-2xl sm:text-3xl text-shadow mb-8">
              Des Oasis Vertes en Ville
            </p>
            <button 
              onClick={scrollToSolutions}
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-full transition duration-300 text-lg"
            >
              Découvrir nos solutions
            </button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <section className="mb-12 bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-semibold mb-6">Un Projet Innovant pour des Villes Durables</h2>
          <p className="text-lg mb-6">
            Green Sparkle transforme les espaces urbains inutilisés en jardins écologiques productifs. 
            Nos solutions clés en main créent des oasis vertes sur toits et terrasses, alliant technologie 
            et expertise agronomique pour des villes durables et autosuffisantes.
          </p>
          <div className="bg-green-100 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Notre approche intégrée comprend :</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Leaf className="text-green-600 w-6 h-6 mr-4 flex-shrink-0 mt-1" />
                <span>La conception et l'installation de jardins et mini-fermes sur mesure</span>
              </li>
              <li className="flex items-start">
                <Leaf className="text-green-600 w-6 h-6 mr-4 flex-shrink-0 mt-1" /> 
                <span>Des systèmes d'irrigation automatisés et de monitoring digital</span>
              </li>
              <li className="flex items-start">
                <Leaf className="text-green-600 w-6 h-6 mr-4 flex-shrink-0 mt-1" /> 
                <span>Un service de maintenance pour assurer la durabilité des installations</span>
              </li>
            </ul>
          </div>
        </section>

        <section id="nos-solutions" className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">Nos Solutions Innovantes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow">
              <ModularGardenIcon className="text-green-500 w-12 h-12 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Jardins Modulaires Autonomes</h3>
              <p>Conception et mise en place de jardins intelligents et adaptables pour terrasses et toits, maximisant l'espace urbain disponible.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <Droplets className="text-blue-500 w-12 h-12 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Irrigation Intelligente</h3>
              <p>Systèmes d'arrosage automatisés et écologiques, optimisant l'utilisation de l'eau selon les besoins spécifiques de chaque plante.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <Wifi className="text-purple-500 w-12 h-12 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Monitoring à Distance</h3>
              <p>Suivi en temps réel de l'état de santé des jardins via une plateforme digitale, permettant une gestion proactive et efficace.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <Users2 className="text-orange-500 w-12 h-12 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Conseil en Agriculture Urbaine</h3>
              <p>Expertise en smart agriculture et conception de mini-fermes urbaines, adaptées aux contraintes et opportunités des espaces citadins.</p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">Nos Solutions aux Défis Urbains</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow">
              <Leaf className="text-green-500 w-12 h-12 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Sécurité Alimentaire</h3>
              <p>Augmentation de l'autosuffisance locale en produits frais.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <Thermometer className="text-red-500 w-12 h-12 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Îlots de Chaleur</h3>
              <p>Réduction des températures urbaines grâce aux toitures végétalisées.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <CloudRain className="text-blue-500 w-12 h-12 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Gestion des Eaux</h3>
              <p>Rétention efficace des eaux de pluie, réduisant les risques d'inondations.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <Lightbulb className="text-yellow-500 w-12 h-12 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Efficacité Énergétique</h3>
              <p>Amélioration de l'isolation thermique des bâtiments.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <Sprout className="text-green-700 w-12 h-12 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Espaces Verts</h3>
              <p>Augmentation des espaces verts par habitant dans les zones urbaines.</p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">Nos Avantages</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow">
              <Sprout className="text-green-500 w-12 h-12 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Solution Intégrée</h3>
              <p>De la conception à la maintenance, nous simplifions le processus pour nos clients.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <Droplet className="text-blue-500 w-12 h-12 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Expertise Locale</h3>
              <p>Notre connaissance du climat marocain optimise nos solutions pour un meilleur rendement.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <Zap className="text-yellow-500 w-12 h-12 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Technologie Avancée</h3>
              <p>Systèmes d'irrigation automatisés et monitoring pour une gestion précise des ressources.</p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">Notre Marché Cible</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start bg-white p-6 rounded-lg shadow">
              <Home className="text-green-500 w-12 h-12 mr-4 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Propriétaires Immobiliers</h3>
                <p>Particuliers avec terrasses ou toits plats, copropriétés en milieu urbain.</p>
              </div>
            </div>
            <div className="flex items-start bg-white p-6 rounded-lg shadow">
              <ShoppingBag className="text-blue-500 w-12 h-12 mr-4 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Secteur Commercial</h3>
                <p>Hôtels, restaurants, centres commerciaux, immeubles de bureaux.</p>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-semibold mb-4">Restez Informé</h2>
          <p className="text-lg mb-4">
            Green Sparkle est en cours de développement. Inscrivez-vous à notre newsletter pour être parmi les premiers à bénéficier de nos solutions d'agriculture urbaine innovantes.
          </p>
          <button className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition duration-300">
            S'inscrire à la newsletter
          </button>
        </section>
      </main>

      <footer className="bg-green-600 text-white py-4 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 Green Sparkle. Tous droits réservés.</p>
        </div>
      </footer>
    </div>
  );
};

export default GreenSparkleWebsite;