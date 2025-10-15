import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message envoyé avec succès ! Nous vous répondrons dans les plus brefs délais.");
  };

  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="relative py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-black mb-4 uppercase">Contactez-nous</h1>
          <div className="w-20 h-1 bg-white mx-auto mb-6"></div>
          <p className="text-xl max-w-2xl mx-auto">
            Laissez-nous un message ou venez nous rencontrer directement
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-black text-foreground mb-2 uppercase">Contactez-nous</h2>
              <div className="w-16 h-1 bg-primary mb-6"></div>
              <Card className="p-8 border-2">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nom complet *</Label>
                    <Input
                      id="name"
                      placeholder="Jean Dupont"
                      required
                      className="border-primary/20 focus:border-primary"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="jean.dupont@email.com"
                      required
                      className="border-primary/20 focus:border-primary"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Téléphone</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="06 12 34 56 78"
                      className="border-primary/20 focus:border-primary"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Sujet *</Label>
                    <Input
                      id="subject"
                      placeholder="Inscription / Renseignements / Partenariat..."
                      required
                      className="border-primary/20 focus:border-primary"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      placeholder="Décrivez votre demande..."
                      rows={6}
                      required
                      className="border-primary/20 focus:border-primary resize-none"
                    />
                  </div>

                  <Button type="submit" className="w-full bg-primary hover:bg-primary-dark text-white font-bold uppercase">
                    Envoyer
                  </Button>
                </form>
              </Card>
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-black text-foreground mb-2 uppercase">Informations</h2>
              <div className="w-16 h-1 bg-primary mb-6"></div>
              
              <div className="space-y-6">
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Adresse</h3>
                      <p className="text-muted-foreground">
                        Gymnase Municipal<br />
                        Place de la République<br />
                        57100 Thionville
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Email</h3>
                      <a
                        href="mailto:contact@usth-tt.fr"
                        className="text-primary hover:underline"
                      >
                        contact@usth-tt.fr
                      </a>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Téléphone</h3>
                      <a
                        href="tel:+33612345678"
                        className="text-primary hover:underline"
                      >
                        06 12 34 56 78
                      </a>
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
                        <p><span className="font-medium">Lundi - Vendredi:</span> 18h00 - 22h00</p>
                        <p><span className="font-medium">Samedi:</span> 14h00 - 18h00</p>
                        <p><span className="font-medium">Dimanche:</span> Fermé (sauf compétitions)</p>
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
                      <p className="text-xs mt-1">Gymnase Municipal, Thionville</p>
                    </div>
                  </div>
                </Card>
              </div>
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
                  Vous pouvez venir directement au gymnase pendant les horaires d'ouverture ou nous 
                  contacter via ce formulaire. Nous vous fournirons toutes les informations nécessaires.
                </p>
              </Card>

              <Card className="p-6">
                <h3 className="font-semibold text-lg mb-2">Quel est le tarif de la licence ?</h3>
                <p className="text-muted-foreground">
                  Les tarifs varient selon l'âge et le type de pratique (loisir/compétition). Contactez-nous 
                  pour obtenir une grille tarifaire détaillée.
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
