import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { blogPosts } from "@/lib/data";

const BlogSection = () => {
  // Display only the first 3 blog posts on the homepage
  const featuredPosts = blogPosts.slice(0, 3);
  
  return (
    <section id="blog" className="py-16 bg-muted">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-neutral-900 mb-4">Industry Insights</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Stay updated with the latest trends, innovations, and news in the polymer industry.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
        
        <div className="text-center mt-10">
          <Button asChild variant="outline">
            <Link href="/blog">View All Articles</Link>
          </Button>
        </div>
      </Container>
    </section>
  );
};

interface BlogCardProps {
  post: {
    id: number;
    title: string;
    excerpt: string;
    date: string;
    image: string;
    readTime: string;
    category: string;
  };
}

const BlogCard = ({ post }: BlogCardProps) => {
  return (
    <Card className="overflow-hidden shadow-md hover:shadow-lg transition-all">
      <div className="h-48 overflow-hidden">
        <img 
          src={post.image} 
          alt={post.title} 
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <CardContent className="p-6">
        <div className="flex items-center text-sm text-muted-foreground mb-3">
          <Calendar className="h-4 w-4 mr-2" />
          <span>{post.date}</span>
        </div>
        <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
        <p className="text-muted-foreground mb-4">{post.excerpt}</p>
        <Link href="/blog">
          <a className="text-primary font-medium hover:text-primary/80 transition-all inline-flex items-center">
            Read More
            <ArrowRight className="ml-1 h-4 w-4" />
          </a>
        </Link>
      </CardContent>
    </Card>
  );
};

export default BlogSection;
