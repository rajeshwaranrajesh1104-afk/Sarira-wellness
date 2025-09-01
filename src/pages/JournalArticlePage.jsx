import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/Button';
import { ArrowLeft, Home, BookOpen, Heart, Leaf, Sparkles } from 'lucide-react';
import { JOURNAL } from '@/constants/content';

function JournalArticlePage() {
  const { id } = useParams();
  const [isVisible, setIsVisible] = useState(false);
  
  // Find the article by ID
  const article = JOURNAL.posts.find(post => post.id === id);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);
  
  if (!article) {
    return (
      <div className="min-h-screen bg-secondary flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-primary mb-4">Article Not Found</h1>
          <p className="text-muted-foreground mb-6">The article you're looking for doesn't exist.</p>
          <Button asChild>
            <Link to="/">Return Home</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Breadcrumb Navigation */}
      <nav className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <Link to="/" className="flex items-center hover:text-primary transition-colors duration-300 hover:scale-105">
              <Home className="w-4 h-4 mr-1" />
              Home
            </Link>
            <span className="text-[#E38A30]">/</span>
            <Link to="/#journal" className="flex items-center hover:text-primary transition-colors duration-300 hover:scale-105">
              <BookOpen className="w-4 h-4 mr-1" />
              Journal
            </Link>
            <span className="text-[#E38A30]">/</span>
            <span className="text-primary font-medium truncate">{article.title}</span>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Article Title */}
            <div className="text-center mb-12">
              <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight animate-fade-in bg-gradient-to-r from-[#364A22] to-[#E38A30] bg-clip-text text-transparent">
                  {article.title}
                </h1>
                <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto animate-fade-in-delay">
                  {article.description}
                </p>
              </div>
            </div>

            {/* Article Content with Enhanced Design */}
            <article className="prose prose-lg max-w-none bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-gray-100">
              {/* Decorative Header */}
              <div className="text-center mb-8">
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#E38A30] to-[#F4A261] text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
                  <Leaf className="w-4 h-4" />
                  <span>Tamil Wellness Wisdom</span>
                  <Heart className="w-4 h-4" />
                </div>
                <div className="w-24 h-1 bg-gradient-to-r from-[#364A22] to-[#E38A30] mx-auto rounded-full"></div>
              </div>

              {/* Article Content with Animations */}
              <div className="text-gray-800 leading-relaxed space-y-6 text-lg">
                {article.fullArticle.split('\n\n').map((paragraph, index) => (
                  <div 
                    key={index} 
                    className={`transform transition-all duration-700 delay-${index * 100} ${
                      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                    }`}
                  >
                    <p className="mb-6 relative">
                      {/* Decorative elements for first paragraph */}
                      {index === 0 && (
                        <span className="absolute -left-4 top-0 text-[#E38A30] text-2xl">❝</span>
                      )}
                      {paragraph}
                      {index === 0 && (
                        <span className="absolute -right-4 bottom-0 text-[#E38A30] text-2xl">❞</span>
                      )}
                    </p>
                    
                    {/* Decorative separator for paragraphs */}
                    {index < article.fullArticle.split('\n\n').length - 1 && (
                      <div className="flex items-center justify-center my-8">
                        <div className="w-8 h-px bg-gradient-to-r from-transparent via-[#E38A30] to-transparent"></div>
                        <Sparkles className="w-4 h-4 text-[#E38A30] mx-2" />
                        <div className="w-8 h-px bg-gradient-to-r from-transparent via-[#E38A30] to-transparent"></div>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Article Footer */}
              <div className="mt-12 pt-8 border-t border-gray-200 text-center">
                <div className="inline-flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-full text-sm text-gray-600">
                  <BookOpen className="w-4 h-4" />
                  <span>SARIRA Wellness Journal</span>
                </div>
              </div>
            </article>

            {/* Enhanced Navigation */}
            <div className="mt-16 pt-8 border-t border-gray-200">
              <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                <Button asChild variant="outline" size="lg" className="group">
                  <Link to="/#journal" className="flex items-center gap-2">
                    <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-300" />
                    Back to Journal
                  </Link>
                </Button>
                
                <div className="flex gap-4">
                  <Button asChild size="lg" className="bg-gradient-to-r from-[#E38A30] to-[#F4A261] text-white hover:from-[#F4A261] hover:to-[#E38A30] shadow-lg transform hover:scale-105 transition-all duration-300">
                    <Link to="/product">Try SARIRA Fig Malt</Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="border-[#364A22] text-[#364A22] hover:bg-[#364A22] hover:text-white transition-all duration-300">
                    <Link to="/tamil-culture">Learn Our Story</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default JournalArticlePage;
