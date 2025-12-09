import { Link, useParams, Navigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { getArticleById } from "@/data/articles";

const ArticleDetail = () => {
  const { id } = useParams<{ id: string }>();
  const article = id ? getArticleById(id) : null;

  if (!article) {
    return <Navigate to="/articles" replace />;
  }

  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="relative py-12 bg-background border-b">
        <div className="container mx-auto px-4">
          <Link to="/articles">
            <Button variant="ghost" className="mb-6 hover:text-primary">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Tous les articles
            </Button>
          </Link>
          
          <h1 className="text-4xl md:text-5xl font-black mb-4 uppercase text-foreground">
            {article.title}
          </h1>
          <p className="text-muted-foreground">{article.date}</p>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="mb-8">
            <img 
              src={article.image} 
              alt={article.title}
              className="w-full h-96 object-cover rounded-lg shadow-lg"
            />
          </div>
          
          <div className="prose prose-lg max-w-none">
            {article.content.split('\n\n').map((paragraph, index) => (
              <p key={index} className="text-foreground mb-6 leading-relaxed whitespace-pre-line">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="mt-12 pt-8 border-t">
            <Link to="/articles">
              <Button variant="default" className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold uppercase">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Tous les articles
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ArticleDetail;
