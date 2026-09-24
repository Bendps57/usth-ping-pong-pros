import { Card } from "@/components/ui/card";
import { MapPin, Clock } from "lucide-react";

const Contact = () => {
  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="relative py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-black mb-4 uppercase">Contactez-nous</h1>
          <div className="w-20 h-1 bg-white mx-auto mb-6"></div>
          <p className="text-xl max-w-2xl mx-auto">
            Retrouvez notre adresse et nos horaires d'ouverture
          </p>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-black text-foreground mb-2 uppercase text-center">Nos Coordonnées</h2>
            <div className="w-16 h-1 bg-primary mx-auto mb-8"></div>
            
            <div className="space-y-6">
              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Adresse</h3>
                    <p className="text-muted-foreground">
                      Complexe Sportif Régine Cavagnoud<br />
                      57700 Hayange
                    </p>
                  </div>
                </div>
              </Card>


              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Horaires d'Ouverture</h3>
                    <div className="text-sm text-muted-foreground space-y-1">
                      <p><span className="font-medium">Mardi:</span> 20h00 - 22h30</p>
                      <p><span className="font-medium">Jeudi:</span> 15h00 - 17h00</p>
                      <p><span className="font-medium">Vendredi:</span> 20h30 - 22h30</p>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Map Placeholder */}
              <Card className="overflow-hidden">
                <div className="h-64 bg-muted flex items-center justify-center">
                  <div className="text-center text-muted-foreground">
                    <MapPin className="h-12 w-12 mx-auto mb-2" />
                    <p className="text-sm">Carte Interactive</p>
                    <p className="text-xs mt-1">Complexe Sportif Régine Cavagnoud, Hayange</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-primary mb-8 text-center">Questions Fréquentes</h2>
            
            <div className="space-y-4">
              <Card className="p-6">
                <h3 className="font-semibold text-lg mb-2">Comment s'inscrire au club ?</h3>
                <p className="text-muted-foreground">
                  Venez directement au gymnase pendant les horaires d'ouverture : un membre du bureau
                  vous accueillera et vous fournira toutes les informations nécessaires pour rejoindre le club.
                </p>
              </Card>

              <Card className="p-6">
                <h3 className="font-semibold text-lg mb-2">Quel est le tarif de la licence ?</h3>
                <p className="text-muted-foreground">
                  Le tarif est de 75 € pour une saison complète. Contactez-nous au gymnase pour
                  toute question concernant l'inscription.
                </p>
              </Card>

              <Card className="p-6">
                <h3 className="font-semibold text-lg mb-2">Faut-il avoir son propre matériel ?</h3>
                <p className="text-muted-foreground">
                  Pour débuter, le club peut prêter des raquettes. Pour une pratique régulière, nous 
                  recommandons l'achat d'une raquette personnelle (nous pouvons vous conseiller).
                </p>
              </Card>

              <Card className="p-6">
                <h3 className="font-semibold text-lg mb-2">Y a-t-il des cours pour débutants ?</h3>
                <p className="text-muted-foreground">
                  Oui, nous proposons des créneaux d'initiation encadrés par nos entraîneurs diplômés. 
                  Tous les niveaux sont les bienvenus !
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
