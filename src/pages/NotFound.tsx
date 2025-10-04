import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Home, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-6">
      <div className="text-center max-w-2xl mx-auto">
        {/* Animated 404 */}
        <div className="relative mb-8">
          <h1 className="text-8xl md:text-9xl font-orbitron font-bold text-primary/20 animate-glow-pulse">
            404
          </h1>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-20 h-20 border-2 border-primary rounded-lg animate-float" />
          </div>
        </div>

        <div className="animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-orbitron font-bold text-foreground mb-4">
            Page Not Found
          </h2>
          <p className="text-xl text-muted-foreground font-rajdhani mb-8 leading-relaxed">
            Oops! The page you're looking for seems to have been moved or doesn't exist. 
            Let's get you back to safety.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-scale-in">
          <Button 
            onClick={() => window.location.href = '/'}
            className="bg-gradient-primary hover:shadow-glow font-rajdhani font-semibold text-lg px-8 py-6"
          >
            <Home className="w-5 h-5 mr-2" />
            Go Home
          </Button>
          
          <Button 
            onClick={() => window.history.back()}
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-rajdhani font-semibold text-lg px-8 py-6"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Go Back
          </Button>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-16 h-16 border border-primary/30 rounded-lg animate-float" />
        <div className="absolute bottom-32 right-16 w-12 h-12 border border-accent/40 rounded-full animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/3 right-20 w-8 h-8 bg-primary/20 rounded-lg animate-float" style={{ animationDelay: '2s' }} />
      </div>
    </div>
  );
};

export default NotFound;
