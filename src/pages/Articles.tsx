import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { articles } from "@/data/articles";

const Articles = () => {
  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="relative py-20 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-black mb-4 uppercase text-foreground">
            ----- Actualités -----
          </h1>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <p className="text-muted-foreground mb-12">
            1 - {articles.length} sur {articles.length} articles
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {articles.map((article) => (
              <Link 
                key={article.id} 
                to={`/articles/${article.id}`}
                className="group"
              >
                <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 h-full">
                  <div className="relative aspect-video overflow-hidden bg-secondary/20">
                    <img 
                      src={article.image} 
                      alt={article.title}
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <p className="text-sm text-muted-foreground mb-3">{article.date}</p>
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {article.title}
                    </h3>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Articles;
