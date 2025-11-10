import { Card } from "@/components/ui/card";
import { History, Target, Users2, Award } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import trainingHall from "@/assets/training-hall.jpg";
import equipment from "@/assets/equipment.jpg";
import logo from "@/assets/logo-usth.png";

const Club = () => {
  const historyAnim = useScrollAnimation();
  const valuesAnim = useScrollAnimation();
  const objectivesAnim = useScrollAnimation();

  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="relative py-20 bg-primary text-white">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: `url(${trainingHall})`,
            filter: 'brightness(0.3)'
          }}
        ></div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-black mb-4 uppercase">Le Club</h1>
          <div className="w-20 h-1 bg-white mx-auto"></div>
        </div>
      </section>

      {/* Histoire */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div 
            ref={historyAnim.ref}
            className={`grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto transition-all duration-700 ${
              historyAnim.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div>
              <h2 className="text-4xl md:text-5xl font-black text-foreground mb-2 uppercase">Notre Histoire</h2>
              <div className="w-20 h-1 bg-primary mb-8"></div>

              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Le club de Tennis de Table de l'USTH (Union Sportive Thionville Hayange) est né de la passion 
                  de quelques passionnés désireux de promouvoir ce sport accessible et convivial dans la région.
                </p>
                <p>
                  Depuis sa création, le club n'a cessé de grandir. De l'initiation à la compétition, 
                  l'USTH TT offre un environnement propice à la progression de chacun.
                </p>
                <p>
                  Fort de son expérience et de son encadrement qualifié, le club participe activement aux 
                  championnats départementaux, tout en maintenant un esprit familial et convivial qui fait sa renommée.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-square rounded-lg overflow-hidden shadow-2xl">
                <img 
                  src={logo} 
                  alt="Logo USTH Tennis de Table" 
                  className="w-full h-full object-contain bg-white p-8"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Valeurs */}
      <section className="py-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div 
            ref={valuesAnim.ref}
            className={`text-center mb-12 transition-all duration-700 ${
              valuesAnim.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-black text-foreground mb-4 uppercase">Nos Valeurs</h2>
            <div className="w-20 h-1 bg-primary mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="p-10 text-center hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group border-2 hover:border-primary">
              <div className="mb-6 flex justify-center">
                <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Target className="h-12 w-12 text-primary" />
                </div>
              </div>
              <h3 className="text-2xl font-black mb-3 uppercase">Excellence Sportive</h3>
              <p className="text-muted-foreground leading-relaxed">
                Nous encourageons le dépassement de soi et la progression constante, 
                quel que soit le niveau de départ.
              </p>
            </Card>

            <Card className="p-10 text-center hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group border-2 hover:border-primary">
              <div className="mb-6 flex justify-center">
                <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Users2 className="h-12 w-12 text-primary" />
                </div>
              </div>
              <h3 className="text-2xl font-black mb-3 uppercase">Esprit d'Équipe</h3>
              <p className="text-muted-foreground leading-relaxed">
                La solidarité et l'entraide sont au cœur de notre club. Nous gagnons et apprenons ensemble.
              </p>
            </Card>

            <Card className="p-10 text-center hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group border-2 hover:border-primary">
              <div className="mb-6 flex justify-center">
                <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Award className="h-12 w-12 text-primary" />
                </div>
              </div>
              <h3 className="text-2xl font-black mb-3 uppercase">Fair-Play</h3>
              <p className="text-muted-foreground leading-relaxed">
                Le respect de l'adversaire, des règles et des décisions arbitrales est fondamental.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Objectifs */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div 
            ref={objectivesAnim.ref}
            className={`max-w-4xl mx-auto transition-all duration-700 ${
              objectivesAnim.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-black text-foreground mb-4 uppercase">Nos Objectifs</h2>
              <div className="w-20 h-1 bg-primary mx-auto"></div>
            </div>
            
            <div className="space-y-6">
              <Card className="p-6 hover:shadow-lg hover:-translate-x-2 transition-all duration-300">
                <h3 className="text-xl font-semibold mb-2 text-primary">Développer la pratique du tennis de table</h3>
                <p className="text-muted-foreground">
                  Rendre notre sport accessible au plus grand nombre en proposant des créneaux variés 
                  et des tarifs abordables.
                </p>
              </Card>

              <Card className="p-6 hover:shadow-lg hover:-translate-x-2 transition-all duration-300">
                <h3 className="text-xl font-semibold mb-2 text-primary">Former les jeunes talents</h3>
                <p className="text-muted-foreground">
                  Mettre en place une école de tennis de table performante avec un encadrement diplômé 
                  pour accompagner les jeunes joueurs.
                </p>
              </Card>

              <Card className="p-6 hover:shadow-lg hover:-translate-x-2 transition-all duration-300">
                <h3 className="text-xl font-semibold mb-2 text-primary">Rayonner en compétition</h3>
                <p className="text-muted-foreground">
                  Faire progresser nos équipes dans les championnats et viser l'accession aux niveaux supérieurs 
                  tout en maintenant notre esprit familial.
                </p>
              </Card>

              <Card className="p-6 hover:shadow-lg hover:-translate-x-2 transition-all duration-300">
                <h3 className="text-xl font-semibold mb-2 text-primary">Créer du lien social</h3>
                <p className="text-muted-foreground">
                  Organiser des événements conviviaux (tournois loisirs, soirées club, stages) pour renforcer 
                  la cohésion et l'ambiance au sein du club.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Bureau */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-primary mb-8 text-center">Le Bureau</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6">
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold">
                    P
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Président</h3>
                    <p className="text-sm text-muted-foreground">Jean Dupont</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  Coordination générale du club et représentation auprès de la fédération
                </p>
              </Card>

              <Card className="p-6">
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold">
                    VP
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Vice-Président</h3>
                    <p className="text-sm text-muted-foreground">Marie Martin</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  Support au président et gestion des événements
                </p>
              </Card>

              <Card className="p-6">
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold">
                    T
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Trésorier</h3>
                    <p className="text-sm text-muted-foreground">Pierre Bernard</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  Gestion financière et recherche de sponsors
                </p>
              </Card>

              <Card className="p-6">
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold">
                    S
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Secrétaire</h3>
                    <p className="text-sm text-muted-foreground">Sophie Leroy</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  Communication et gestion administrative
                </p>
              </Card>
            </div>

            <div className="mt-8">
              <Card className="p-6 bg-primary/5">
                <h3 className="font-semibold text-lg mb-2">Entraîneurs</h3>
                <p className="text-muted-foreground">
                  Notre équipe d'entraîneurs diplômés d'État assure l'encadrement technique 
                  de toutes les catégories, du débutant au compétiteur confirmé.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Club;
