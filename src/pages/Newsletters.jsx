import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Sparkles, TrendingUp, Calendar, ArrowRight, Zap, Filter } from "lucide-react";
import Footer from "@/components/home/Main-footer";

// Images (Reusing existing assets)
import pg1 from "../assets/team/pg1.png";
import pg2 from "../assets/team/pg2.png";
import pg3 from "../assets/team/pg3.png";
import pg4 from "../assets/team/pg4.png";
import pg5 from "../assets/team/pg5.png";
import pg6 from "../assets/team/pg6.png";
import pg7 from "../assets/team/pg7.png";
import pg8 from "../assets/team/pg8.png";

// Sample Data
const newsletters = [
  { id: 1, title: "Design Weekly: The Future of AI in UX", category: "Design", date: "Oct 12, 2024", readTime: "5 min", image: pg1, featured: true, description: "How generative AI is rewriting the rules of user experience design." },
  { id: 2, title: "Tech Digest: Web3 Beyond the Hype", category: "Technology", date: "Oct 05, 2024", readTime: "4 min", image: pg2, featured: false, description: "A deep dive into real-world applications of decentralized tech." },
  { id: 3, title: "Startup Spotlight: Green Energy Disruptors", category: "Business", date: "Sep 28, 2024", readTime: "6 min", image: pg3, featured: false, description: "Meet the founders changing the energy landscape." },
  { id: 4, title: "Innovation Hub: Bio-hacking 101", category: "Innovation", date: "Sep 21, 2024", readTime: "7 min", image: pg4, featured: false, description: "From wearables to gene editing: what's next?" },
  { id: 5, title: "Creative Minds: Finding Flow", category: "Creativity", date: "Sep 14, 2024", readTime: "5 min", image: pg5, featured: false, description: "Psychological strategies to unlock your best creative work." },
  { id: 6, title: "Future Tech: Quantum Leaps", category: "Futurism", date: "Sep 07, 2024", readTime: "8 min", image: pg6, featured: false, description: "Understanding the race for quantum supremacy." },
  { id: 7, title: "Growth Strategies: Zero to One", category: "Business", date: "Aug 31, 2024", readTime: "6 min", image: pg7, featured: false, description: "Tactical advice for early-stage startup growth." },
  { id: 8, title: "Trends: The Metaverse Reborn", category: "Analysis", date: "Aug 24, 2024", readTime: "5 min", image: pg8, featured: false, description: "Is the metaverse dead, or just getting started?" },
];

const categories = ["All", "Design", "Technology", "Business", "Innovation", "Creativity"];

const Newsletters = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredNewsletters, setFilteredNewsletters] = useState(newsletters);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const filtered = newsletters.filter((item) => {
      const matchesCategory = selectedCategory === "All" || item.category === selectedCategory;
      const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            item.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
    setFilteredNewsletters(filtered);
  }, [selectedCategory, searchQuery]);

  const featuredNewsletter = newsletters.find(n => n.featured);

  return (
    <div className="min-h-screen bg-black text-white relative font-sans selection:bg-purple-500/30">
      
      {/* Background Ambience */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-purple-900/10 rounded-full blur-[128px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-blue-900/10 rounded-full blur-[128px]" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
      </div>

      <div className="relative z-10 pt-32 pb-20 px-4 md:px-8 max-w-7xl mx-auto">
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6 backdrop-blur-md">
            <Sparkles size={14} className="text-yellow-400" />
            <span className="text-sm font-medium text-gray-300">Curated Insights for Visionaries</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 font-[vampire] tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-400">
            EIC Archive
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto font-[font1] leading-relaxed">
            Explore our collection of deep dives into technology, design, and entrepreneurship. 
            Stay ahead of the curve with our weekly analysis.
          </p>
        </motion.div>

        {/* Featured Card */}
        {featuredNewsletter && selectedCategory === "All" && !searchQuery && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
            className="mb-20"
          >
            <div 
                onClick={() => setSelectedImage(featuredNewsletter.image)}
                className="group relative w-full h-[500px] md:h-[600px] rounded-[2rem] overflow-hidden border border-white/10 hover:border-purple-500/30 transition-colors duration-500 cursor-pointer">
              <img 
                src={featuredNewsletter.image} 
                alt={featuredNewsletter.title} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
              
              <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full md:w-2/3">
                <span className="inline-block px-3 py-1 bg-purple-600 text-white text-xs font-bold rounded-full mb-4">
                  FEATURED ISSUE
                </span>
                <h2 className="text-3xl md:text-5xl font-bold mb-4 font-[vampire] leading-tight group-hover:text-purple-200 transition-colors">
                  {featuredNewsletter.title}
                </h2>
                <p className="text-gray-200 text-lg mb-6 font-[font1] line-clamp-2">
                  {featuredNewsletter.description}
                </p>
                <div className="flex items-center gap-6 text-sm text-gray-300">
                  <span className="flex items-center gap-2"><Calendar size={16} /> {featuredNewsletter.date}</span>
                  <span className="flex items-center gap-2"><Zap size={16} /> {featuredNewsletter.readTime} read</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Controls: Search & Filter */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12 sticky top-24 z-50 bg-black/50 backdrop-blur-xl p-4 rounded-2xl border border-white/5">
          
          {/* Categories */}
          <div className="flex gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-hide">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-300 ${
                  selectedCategory === cat 
                    ? "bg-white text-black shadow-lg shadow-white/10" 
                    : "bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search */}
          <div className="relative w-full md:w-72">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
            <input 
              type="text" 
              placeholder="Search articles..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-full py-2.5 pl-12 pr-4 text-white text-sm focus:outline-none focus:border-purple-500/50 transition-all font-[font1]"
            />
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
            {filteredNewsletters.length > 0 ? (
                filteredNewsletters.map((item, index) => (
                <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    onClick={() => setSelectedImage(item.image)}
                    className="group flex flex-col gap-4 cursor-pointer"
                >
                    {/* Card Image */}
                    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/10">
                    <img 
                        src={item.image} 
                        alt={item.title} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-300" />
                    
                    {/* Category Tag on Image */}
                    <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-black/60 backdrop-blur-md text-xs font-semibold rounded-lg border border-white/10">
                        {item.category}
                        </span>
                    </div>
                    </div>

                    {/* Content */}
                    <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-3 text-xs text-gray-500 font-mono">
                        <span className="flex items-center gap-1"><Calendar size={12} /> {item.date}</span>
                        <span>•</span>
                        <span className="flex items-center gap-1"><Zap size={12} /> {item.readTime}</span>
                    </div>
                    
                    <h3 className="text-xl font-bold leading-snug group-hover:text-purple-400 transition-colors">
                        {item.title}
                    </h3>
                    
                    <p className="text-sm text-gray-400 font-[font1] line-clamp-2">
                        {item.description}
                    </p>

                    <div className="mt-2 flex items-center text-sm font-semibold text-white/50 group-hover:text-white transition-colors">
                        Read More <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
                    </div>
                    </div>
                </motion.div>
                ))
            ) : (
                <div className="col-span-full py-20 text-center text-gray-500">
                    <p>No newsletters found matching your criteria.</p>
                </div>
            )}
            </AnimatePresence>
        </div>

        {/* Load More Trigger (Simulated) */}
        <div className="mt-20 flex justify-center">
            <button className="px-8 py-3 rounded-full border border-white/10 hover:bg-white/5 text-sm font-medium transition-all text-gray-300 hover:text-white">
                View All Archives
            </button>
        </div>

      </div>

      <div className="relative z-20 bg-black">
        <Footer />
      </div>

      {/* Image Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 cursor-zoom-out"
          >
            <motion.img
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              src={selectedImage}
              alt="Full view"
              className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()} 
            />
            <button 
                onClick={() => setSelectedImage(null)}
                className="absolute top-8 right-8 text-white/80 hover:text-white"
            >
                <div className="bg-white/10 p-2 rounded-full backdrop-blur-md">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                </div>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Newsletters;