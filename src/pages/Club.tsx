import { Card } from "@/components/ui/card";
import { History, Target, Users2, Award } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import trainingHall from "@/assets/training-hall.jpg";
import equipment from "@/assets/equipment.jpg";

const Club = () => {
  const historyAnim = useScrollAnimation();
  const valuesAnim = useScrollAnimation();
  const objectivesAnim = useScrollAnimation();

  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="bg-gradient-primary py-20 text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4 animate-fade-in">Le Club USTH TT</h1>
          <p className="text-xl opacity-95 max-w-2xl mx-auto">
            Découvrez l'histoire, les valeurs et l'organisation de notre club
          </p>
        </div>
      </section>

      {/* Histoire */}
      <section className="py-20 bg-background relative overflow-hidden">
        <div 
          className="absolute left-0 top-1/4 w-1/2 h-96 opacity-5 bg-cover bg-center"
          style={{ backgroundImage: `url(${trainingHall})` }}
        ></div>
        <div className="container mx-auto px-4">
          <div 
            ref={historyAnim.ref}
            className={`max-w-4xl mx-auto transition-all duration-700 ${
              historyAnim.isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                <History className="h-8 w-8 text-primary" />
              </div>
              <h2 className="text-4xl font-bold text-primary">Notre Histoire</h2>
            </div>

            <div className="space-y-6 text-lg text-foreground/80">
              <p>
                Le club de Tennis de Table de l'USTH (Union Sportive Thionville Hayange) est né de la passion 
                de quelques passionnés désireux de promouvoir ce sport accessible et convivial dans la région.
              </p>
              <p>
                Depuis sa création, le club n'a cessé de grandir, accueillant aujourd'hui plus d'une centaine 
                de licenciés de tous âges et tous niveaux. De l'initiation à la compétition de haut niveau, 
                l'USTH TT offre un environnement propice à la progression de chacun.
              </p>
              <p>
                Fort de son expérience et de son encadrement qualifié, le club participe activement aux 
                championnats départementaux et régionaux, tout en maintenant un esprit familial et convivial 
                qui fait sa renommée.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Valeurs */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div 
            ref={valuesAnim.ref}
            className={`text-center mb-12 transition-all duration-700 ${
              valuesAnim.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <h2 className="text-4xl font-bold text-primary mb-4">Nos Valeurs</h2>
            <p className="text-lg text-muted-foreground">
              Ce qui nous anime au quotidien
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="p-8 text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group">
              <Target className="h-12 w-12 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold mb-3">Excellence Sportive</h3>
              <p className="text-muted-foreground">
                Nous encourageons le dépassement de soi et la progression constante, 
                quel que soit le niveau de départ.
              </p>
            </Card>

            <Card className="p-8 text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group">
              <Users2 className="h-12 w-12 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold mb-3">Esprit d'Équipe</h3>
              <p className="text-muted-foreground">
                La solidarité et l'entraide sont au cœur de notre club. Nous gagnons et apprenons ensemble.
              </p>
            </Card>

            <Card className="p-8 text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group">
              <Award className="h-12 w-12 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold mb-3">Fair-Play</h3>
              <p className="text-muted-foreground">
                Le respect de l'adversaire, des règles et des décisions arbitrales est fondamental.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Objectifs */}
      <section className="py-20 bg-background relative overflow-hidden">
        <div 
          className="absolute right-0 top-1/3 w-1/3 h-80 opacity-5 bg-cover bg-center"
          style={{ backgroundImage: `url(${equipment})` }}
        ></div>
        <div className="container mx-auto px-4">
          <div 
            ref={objectivesAnim.ref}
            className={`max-w-4xl mx-auto transition-all duration-700 ${
              objectivesAnim.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <h2 className="text-4xl font-bold text-primary mb-8 text-center">Nos Objectifs</h2>
            
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
