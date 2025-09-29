import React, { useState } from 'react';
import { 
  Calendar, 
  Archive, 
  Map, 
  ShoppingCart, 
  Share2, 
  Play, 
  Download, 
  Star, 
  MapPin, 
  Phone, 
  Mail, 
  Facebook, 
  Twitter, 
  Instagram, 
  Youtube,
  Filter,
  Heart,
  VolumeX,
  Volume2,
  Search,
  Camera,
  BookOpen,
  Users,
  Clock,
  Award,
  Navigation,
  Hotel,
  Car,
  Compass,
  TrendingUp,
  ChevronLeft,
  ChevronRight,
  Eye,
  MessageCircle,
  Send,
  Bookmark,
  MoreHorizontal,
  Flame,
  Sparkles,
  Mountain,
  Music,
  UtensilsCrossed
} from 'lucide-react';

const Monastery360 = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [cart, setCart] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [videoFilter, setVideoFilter] = useState('popular');
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [selectedCartItem, setSelectedCartItem] = useState(null);
  const [showARVideo, setShowARVideo] = useState(false);
  const [selectedMapMonastery, setSelectedMapMonastery] = useState(null);
  const [showChatbot, setShowChatbot] = useState(false);
  const [chatMessages, setChatMessages] = useState([
    { type: 'bot', text: 'Hello! 👋 How may I help you in recommending the best monastery of your interest?' }
  ]);
  const [chatInput, setChatInput] = useState('');

  // Sample data
  const monasteries = [
    {
      id: 1,
      name: 'Rumtek Monastery',
      location: 'East Sikkim',
      rating: 4.8,
      image: 'https://static.toiimg.com/thumb/msid-56621791,width=1200,height=900/56621791.jpg',
      description: 'Known as the Dharma Chakra Centre, this is one of the largest monasteries in Sikkim.',
      events: ['Prayer Session at 6 AM', 'Evening Meditation'],
      founded: '1740',
      type: 'Kagyu'
    },
    {
      id: 2,
      name: 'Pemayangtse Monastery',
      location: 'West Sikkim',
      rating: 4.7,
      image: 'https://sikkimproject.org/wp-content/uploads/2021/09/DSC_0037.jpg',
      description: 'One of the oldest and premier monasteries of Sikkim.',
      events: ['Morning Prayers', 'Losar Festival'],
      founded: '1705',
      type: 'Nyingma'
    },
    {
      id: 3,
      name: 'Tashiding Monastery',
      location: 'West Sikkim',
      rating: 4.6,
      image: 'https://s7ap1.scene7.com/is/image/incredibleindia/spiritual-spots-in-pelling-popular?qlt=82&ts=1726655959297',
      description: 'Sacred monastery with holy water ceremonies.',
      events: ['Bumchu Festival', 'Daily Prayers'],
      founded: '1641',
      type: 'Nyingma'
    },
    {
      id: 4,
      name: 'Enchey Monastery',
      location: 'East Sikkim',
      rating: 4.5,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIyBdm721owEP14gIoZxBw8E_cWqbBKYrCkw&s',
      description: 'Located on a hilltop, offering panoramic views.',
      events: ['Cham Dance', 'Puja Ceremonies'],
      founded: '1840',
      type: 'Nyingma'
    },
    {
      id: 5,
      name: 'Dubdi Monastery',
      location: 'West Sikkim',
      rating: 4.4,
      image: 'https://www.gosahin.com/go/p/h/1557593354_dubdi-monastery.jpg',
      description: 'The first monastery established in Sikkim.',
      events: ['Silent Meditation', 'Scripture Reading'],
      founded: '1701',
      type: 'Nyingma'
    }
  ];

  // Content categories and videos data
  const contentCategories = [
    {
      id: 'funny',
      name: 'Funny',
      icon: Sparkles,
      color: 'from-yellow-500 to-orange-500',
      description: 'Hilarious moments and fun experiences'
    },
    {
      id: 'aesthetic',
      name: 'Aesthetic',
      icon: Camera,
      color: 'from-pink-500 to-purple-500',
      description: 'Beautiful visuals and peaceful moments'
    },
    {
      id: 'adventurous',
      name: 'Adventurous',
      icon: Mountain,
      color: 'from-green-500 to-blue-500',
      description: 'Thrilling journeys and explorations'
    },
    {
      id: 'dance',
      name: 'Dance & Culture',
      icon: Music,
      color: 'from-purple-500 to-pink-500',
      description: 'Traditional performances and cultural events'
    },
    {
      id: 'cuisine',
      name: 'Cuisine',
      icon: UtensilsCrossed,
      color: 'from-red-500 to-orange-500',
      description: 'Delicious local food and recipes'
    }
  ];

  const videoContent = {
    funny: [
      {
        id: 'f1',
        title: 'Monks Teaching Tourists to Meditate',
        monastery: 'Rumtek Monastery',
        views: '2.1M',
        likes: '95K',
        thumbnail: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=400',
        duration: '0:45',
        description: 'Hilarious attempt of tourists trying meditation with patient monks',
        uploadDate: '2 days ago',
        isPopular: true
      },
      {
        id: 'f2',
        title: 'Prayer Wheels Gone Wrong',
        monastery: 'Enchey Monastery',
        views: '1.8M',
        likes: '87K',
        thumbnail: 'https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?w=400',
        duration: '0:32',
        description: 'Funny moments when visitors spin prayer wheels too fast',
        uploadDate: '5 days ago',
        isPopular: true
      },
      {
        id: 'f3',
        title: 'Lost Tourist Finds Enlightenment',
        monastery: 'Pemayangtse Monastery',
        views: '956K',
        likes: '45K',
        thumbnail: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400',
        duration: '1:12',
        description: 'A lost tourist accidentally joins a meditation session',
        uploadDate: '1 week ago',
        isPopular: false
      }
    ],
    aesthetic: [
      {
        id: 'a1',
        title: 'Golden Hour at Tashiding',
        monastery: 'Tashiding Monastery',
        views: '3.2M',
        likes: '156K',
        thumbnail: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400',
        duration: '1:30',
        description: 'Breathtaking sunrise views over the sacred monastery',
        uploadDate: '3 days ago',
        isPopular: true
      },
      {
        id: 'a2',
        title: 'Prayer Flags Dancing in Wind',
        monastery: 'Rumtek Monastery',
        views: '2.7M',
        likes: '134K',
        thumbnail: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=400',
        duration: '0:55',
        description: 'Mesmerizing movement of colorful prayer flags',
        uploadDate: '1 day ago',
        isPopular: true
      },
      {
        id: 'a3',
        title: 'Candlelit Evening Prayers',
        monastery: 'Dubdi Monastery',
        views: '1.9M',
        likes: '98K',
        thumbnail: 'https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?w=400',
        duration: '2:15',
        description: 'Peaceful evening prayer ceremony with hundreds of candles',
        uploadDate: '4 days ago',
        isPopular: false
      }
    ],
    adventurous: [
      {
        id: 'ad1',
        title: 'Trek to Hidden Monastery',
        monastery: 'Tashiding Monastery',
        views: '1.5M',
        likes: '78K',
        thumbnail: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400',
        duration: '3:45',
        description: 'Epic hiking adventure through mountain trails',
        uploadDate: '6 days ago',
        isPopular: true
      },
      {
        id: 'ad2',
        title: 'Paragliding Over Monasteries',
        monastery: 'Rumtek Monastery',
        views: '2.8M',
        likes: '142K',
        thumbnail: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400',
        duration: '2:20',
        description: 'Aerial views of monasteries from paraglider',
        uploadDate: '2 days ago',
        isPopular: true
      }
    ],
    dance: [
      {
        id: 'd1',
        title: 'Cham Dance Performance',
        monastery: 'Enchey Monastery',
        views: '4.1M',
        likes: '201K',
        thumbnail: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=400',
        duration: '4:30',
        description: 'Traditional masked dance during annual festival',
        uploadDate: '1 day ago',
        isPopular: true
      },
      {
        id: 'd2',
        title: 'Losar Festival Celebration',
        monastery: 'Pemayangtse Monastery',
        views: '3.6M',
        likes: '178K',
        thumbnail: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400',
        duration: '5:15',
        description: 'Grand Tibetan New Year celebration with dances',
        uploadDate: '3 days ago',
        isPopular: true
      }
    ],
    cuisine: [
      {
        id: 'c1',
        title: 'Monastery Kitchen Secrets',
        monastery: 'Rumtek Monastery',
        views: '2.3M',
        likes: '112K',
        thumbnail: 'https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?w=400',
        duration: '3:20',
        description: 'How monks prepare traditional Tibetan meals',
        uploadDate: '4 days ago',
        isPopular: true
      },
      {
        id: 'c2',
        title: 'Butter Tea Making Process',
        monastery: 'Tashiding Monastery',
        views: '1.7M',
        likes: '89K',
        thumbnail: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=400',
        duration: '2:45',
        description: 'Traditional Tibetan butter tea preparation',
        uploadDate: '1 week ago',
        isPopular: false
      }
    ]
  };

  const archives = [
    {
      id: 1,
      title: 'Ancient Tibetan Manuscripts',
      monastery: 'Rumtek Monastery',
      year: '1740',
      type: 'Manuscript',
      description: 'Collection of Buddhist scriptures in Tibetan script.'
    },
    {
      id: 2,
      title: 'Sacred Murals of Pemayangtse',
      monastery: 'Pemayangtse Monastery',
      year: '1705',
      type: 'Mural',
      description: 'Intricate wall paintings depicting Buddhist mythology.'
    },
    {
      id: 3,
      title: 'Historical Documents',
      monastery: 'Tashiding Monastery',
      year: '1641',
      type: 'Document',
      description: 'Records of monastery establishment and royal patronage.'
    }
  ];

  const events = [
    {
      id: 1,
      name: 'Losar Festival',
      monastery: 'Pemayangtse Monastery',
      date: '2025-02-10',
      time: '6:00 AM',
      description: 'Tibetan New Year celebration with traditional dances and rituals.',
      category: 'Festival'
    },
    {
      id: 2,
      name: 'Bumchu Festival',
      monastery: 'Tashiding Monastery',
      date: '2025-03-15',
      time: '5:00 AM',
      description: 'Sacred water ceremony and blessing ritual.',
      category: 'Religious'
    },
    {
      id: 3,
      name: 'Cham Dance',
      monastery: 'Enchey Monastery',
      date: '2025-09-26',
      time: '10:00 AM',
      description: 'Traditional masked dance performance.',
      category: 'Cultural'
    }
  ];

  const addToCart = (item) => {
    setCart(prev => [...prev, item]);
  };

  const removeFromCart = (id) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  const toggleFavorite = (item) => {
    setFavorites(prev => {
      const exists = prev.find(fav => fav.id === item.id);
      if (exists) {
        return prev.filter(fav => fav.id !== item.id);
      }
      return [...prev, item];
    });
  };

  const handleChatSend = () => {
    if (chatInput.trim() === '') return;
    
    // Add user message
    setChatMessages(prev => [...prev, { type: 'user', text: chatInput }]);
    
    // Simple bot responses
    setTimeout(() => {
      let botResponse = '';
      const input = chatInput.toLowerCase();
      
      if (input.includes('aesthetic') || input.includes('beautiful') || input.includes('peaceful')) {
        botResponse = '🏔️ For aesthetic and peaceful experiences, I highly recommend Tashiding Monastery! It offers breathtaking views and serene atmosphere. Would you like to add it to your cart?';
      } else if (input.includes('old') || input.includes('historic') || input.includes('ancient')) {
        botResponse = '📜 The oldest monastery in Sikkim is Dubdi Monastery, founded in 1701! Pemayangtse (1705) is also one of the premier monasteries. Both have incredible historical significance!';
      } else if (input.includes('dance') || input.includes('festival') || input.includes('culture')) {
        botResponse = '💃 Enchey Monastery is famous for its Cham Dance performances! Also check out Pemayangtse during the Losar Festival for amazing cultural experiences.';
      } else if (input.includes('near') || input.includes('close') || input.includes('gangtok')) {
        botResponse = '📍 Rumtek and Enchey monasteries are closest to Gangtok. Rumtek is the largest and most popular, while Enchey offers stunning hilltop views!';
      } else if (input.includes('best') || input.includes('top') || input.includes('recommend')) {
        botResponse = '⭐ Based on ratings, Rumtek Monastery (4.8★) is the most popular! It\'s known as the Dharma Chakra Centre and offers amazing architecture and spiritual vibes.';
      } else {
        botResponse = 'I can help you find monasteries based on: 🎨 Aesthetics, 🏛️ History, 🎭 Cultural events, 📍 Location, or ⭐ Ratings. What interests you most?';
      }
      
      setChatMessages(prev => [...prev, { type: 'bot', text: botResponse }]);
    }, 1000);
    
    setChatInput('');
  };

  const Chatbot = () => {
    if (!showChatbot) {
      return (
        <button
          onClick={() => setShowChatbot(true)}
          className="fixed bottom-8 right-8 w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform duration-300 z-40"
          style={{ animation: 'bounce 1s infinite' }}
        >
          <MessageCircle className="h-8 w-8 text-white" />
        </button>
      );
    }

    return (
      <div className="fixed bottom-8 right-8 w-96 bg-white rounded-2xl shadow-2xl z-40 overflow-hidden">
        <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
              <span className="text-2xl">🙏</span>
            </div>
            <div>
              <h3 className="text-white font-bold">Monastery Guide</h3>
              <p className="text-purple-100 text-xs">Online • Ready to help</p>
            </div>
          </div>
          <button
            onClick={() => setShowChatbot(false)}
            className="text-white hover:text-gray-200 transition-colors"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>

        <div className="h-96 overflow-y-auto p-4 bg-gray-50">
          {chatMessages.map((msg, index) => (
            <div key={index} className={`mb-4 flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-xs px-4 py-2 rounded-2xl ${
                msg.type === 'user' 
                  ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white' 
                  : 'bg-white text-gray-800 shadow-md'
              }`}>
                {msg.text}
              </div>
            </div>
          ))}
        </div>

        <div className="p-4 bg-white border-t border-gray-200">
          <div className="flex gap-2">
            <input
              type="text"
              value={chatInput}
              onChange={(e) => setChatInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleChatSend()}
              placeholder="Ask me anything..."
              className="flex-1 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-800"
            />
            <button
              onClick={handleChatSend}
              className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-2 rounded-full hover:scale-110 transition-transform"
            >
              <Send className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    );
  };

  const NavBar = () => (
    <nav className="bg-gradient-to-r from-amber-900 via-orange-800 to-red-900 shadow-2xl sticky top-0 z-50 backdrop-blur-md bg-opacity-95">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <h1 
              className="text-2xl font-bold text-amber-100 cursor-pointer hover:text-white transition-colors duration-300"
              onClick={() => {
                setActiveSection('home');
                setSelectedCategory(null);
              }}
            >
              Monastery360
            </h1>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {[
                { id: 'events', icon: Calendar, label: 'Events' },
                { id: 'archives', icon: Archive, label: 'Archives' },
                { id: 'maps', icon: Map, label: 'Maps' },
                { id: 'explore', icon: Compass, label: 'Explore Us' },
                { id: 'cart', icon: ShoppingCart, label: `Cart (${cart.length})` },
                { id: 'share', icon: Share2, label: 'ShareIt' }
              ].map(({ id, icon: Icon, label }) => (
                <button
                  key={id}
                  onClick={() => {
                    setActiveSection(id);
                    setSelectedCategory(null);
                  }}
                  className={`flex items-center px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                    activeSection === id
                      ? 'bg-amber-700 text-white shadow-lg transform scale-105'
                      : 'text-amber-200 hover:bg-amber-800 hover:text-white'
                  }`}
                >
                  <Icon className="h-4 w-4 mr-2" />
                  {label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );

  const HeroSection = () => (
    <div className="relative bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-70">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="text-center mb-16">
          <h1 className="text-6xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 mb-6">
            Monastery360
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Immerse yourself in the spiritual heritage of Sikkim's monasteries through cutting-edge virtual reality and AI-powered experiences
          </p>
          <button className="bg-gradient-to-r from-amber-500 to-orange-600 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-xl hover:from-amber-600 hover:to-orange-700 transition-all duration-300">
            Start Virtual Tour
          </button>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-8">Top 5 AI Recommended Monasteries</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {monasteries.slice(0, 5).map((monastery) => (
              <div key={monastery.id} className="group relative bg-white bg-opacity-10 backdrop-blur-lg rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                <div className="relative">
                  <img 
                    src={monastery.image} 
                    alt={monastery.name}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>

                  <div className="absolute top-2 right-2">
                    <button 
                      onClick={() => toggleFavorite(monastery)}
                      className="p-2 rounded-full bg-white bg-opacity-20 backdrop-blur-md hover:bg-opacity-30 transition-all"
                    >
                      <Heart className={`h-4 w-4 ${favorites.find(fav => fav.id === monastery.id) ? 'text-red-500 fill-red-500' : 'text-white'}`} />
                    </button>
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-white font-bold text-lg mb-1 text-shadow">{monastery.name}</h3>
                    <p className="text-gray-200 text-sm mb-2 text-shadow">{monastery.location}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                        <span className="text-white ml-1 text-sm text-shadow">{monastery.rating}</span>
                      </div>
                      <button 
                        onClick={() => addToCart(monastery)}
                        className="bg-amber-500 hover:bg-amber-600 text-white p-2 rounded-full transition-colors"
                      >
                        <ShoppingCart className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <button
           onClick={() => setActiveSection('maps')}
           className="text-center p-8 bg-white bg-opacity-10 backdrop-blur-lg rounded-xl hover:bg-opacity-20 transition-all w-full"
          >
           <Camera className="h-12 w-12 text-amber-400 mx-auto mb-4" />
           <h3 className="text-xl font-bold text-white mb-2">Virtual Tours</h3>
           <p className="text-gray-300">360° panoramic monastery experiences</p>
          </button>
          <button
           onClick={() => setActiveSection('archives')}
           className="text-center p-8 bg-white bg-opacity-10 backdrop-blur-lg rounded-xl hover:bg-opacity-20 transition-all w-full"
          >
           <BookOpen className="h-12 w-12 text-amber-400 mx-auto mb-4" />
           <h3 className="text-xl font-bold text-white mb-2">Digital Archives</h3>
           <p className="text-gray-300">Ancient manuscripts and documents</p>
          </button>
          <button
            onClick={() => setActiveSection('share')}
            className="text-center p-8 bg-white bg-opacity-10 backdrop-blur-lg rounded-xl hover:bg-opacity-20 transition-all w-full"
          >
            <Users className="h-12 w-12 text-amber-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">Community</h3>
            <p className="text-gray-300">Share experiences and stories</p>
          </button>
         </div>
        </div>
      </div>
    </div>
  );

  const ExploreUsSection = () => (
    <div className="bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 min-h-screen p-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 mb-4">
            Explore Us
          </h2>
          <p className="text-xl text-gray-300">
            Discover Sikkim's monasteries through viral content that will make you pack your bags!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {contentCategories.map((category) => {
            const Icon = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className="group relative overflow-hidden bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-8 hover:bg-opacity-20 transition-all duration-500 transform hover:scale-105 hover:rotate-1"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-20 group-hover:opacity-40 transition-opacity duration-500`}></div>
                
                <div className="relative z-10 text-center">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br ${category.color} flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-yellow-300 transition-colors">
                    {category.name}
                  </h3>
                  
                  <p className="text-gray-300 text-sm group-hover:text-gray-200">
                    {category.description}
                  </p>
                  
                  <div className="mt-4 flex items-center justify-center space-x-1">
                    <Flame className="h-4 w-4 text-orange-400" />
                    <span className="text-orange-300 text-sm font-semibold">Trending</span>
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-pink-400 mb-2">10M+</div>
              <div className="text-gray-300">Views This Month</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">500K+</div>
              <div className="text-gray-300">People Inspired</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-indigo-400 mb-2">15K+</div>
              <div className="text-gray-300">Visitors This Year</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-2">#1</div>
              <div className="text-gray-300">Trending Destination</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const VideoFeedSection = () => {
    if (!selectedCategory) return null;
    
    const categoryName = contentCategories.find(cat => cat.id === selectedCategory)?.name;
    const videos = videoContent[selectedCategory] || [];
    
    const filteredVideos = videos.filter(video => 
      videoFilter === 'popular' ? video.isPopular : true
    ).sort((a, b) => {
      if (videoFilter === 'latest') {
        return new Date(b.uploadDate) - new Date(a.uploadDate);
      }
      return parseInt(b.views.replace(/[^\d]/g, '')) - parseInt(a.views.replace(/[^\d]/g, ''));
    });

    const currentVideo = filteredVideos[currentVideoIndex];

    const nextVideo = () => {
      setCurrentVideoIndex((prev) => (prev + 1) % filteredVideos.length);
    };

    const prevVideo = () => {
      setCurrentVideoIndex((prev) => (prev - 1 + filteredVideos.length) % filteredVideos.length);
    };

    return (
      <div className="bg-black min-h-screen flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-4 bg-gray-900 sticky top-0 z-50">
          <button 
            onClick={() => setSelectedCategory(null)}
            className="flex items-center text-white hover:text-gray-300 transition-colors"
          >
            <ChevronLeft className="h-6 w-6 mr-2" />
            Back to Categories
          </button>
          
          <h2 className="text-xl font-bold text-white">{categoryName} Content</h2>
          
          <div className="flex items-center space-x-4">
            <select 
              value={videoFilter}
              onChange={(e) => setVideoFilter(e.target.value)}
              className="bg-gray-800 text-white rounded-lg px-3 py-2 text-sm"
            >
              <option value="popular">Popular</option>
              <option value="latest">Latest</option>
            </select>
          </div>
        </div>

        {/* Video Player Area */}
        <div className="flex-1 flex">
          {/* Main Video */}
          <div className="flex-1 flex flex-col justify-center items-center bg-gray-900 relative">
            {currentVideo && (
              <>
                {/* Video Thumbnail/Player */}
                <div className="relative w-full max-w-md aspect-[9/16] bg-black rounded-lg overflow-hidden shadow-2xl">
                  <img 
                    src={currentVideo.thumbnail} 
                    alt={currentVideo.title}
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30">
                    <button className="w-16 h-16 bg-white bg-opacity-90 rounded-full flex items-center justify-center hover:bg-opacity-100 transition-all duration-300 transform hover:scale-110">
                      <Play className="h-8 w-8 text-gray-800 ml-1" />
                    </button>
                  </div>

                  {/* Video Duration */}
                  <div className="absolute bottom-4 right-4 bg-black bg-opacity-75 text-white px-2 py-1 rounded text-sm">
                    {currentVideo.duration}
                  </div>

                  {/* Navigation Arrows */}
                  <button 
                    onClick={prevVideo}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-black bg-opacity-50 rounded-full flex items-center justify-center text-white hover:bg-opacity-75 transition-all"
                  >
                    <ChevronLeft className="h-6 w-6" />
                  </button>
                  
                  <button 
                    onClick={nextVideo}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-black bg-opacity-50 rounded-full flex items-center justify-center text-white hover:bg-opacity-75 transition-all"
                  >
                    <ChevronRight className="h-6 w-6" />
                  </button>
                </div>

                {/* Video Actions */}
                <div className="flex items-center justify-center space-x-8 mt-6">
                  <div className="flex flex-col items-center">
                    <button className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors mb-2">
                      <Heart className="h-6 w-6 text-white" />
                    </button>
                    <span className="text-white text-sm">{currentVideo.likes}</span>
                  </div>
                  
                  <div className="flex flex-col items-center">
                    <button className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors mb-2">
                      <MessageCircle className="h-6 w-6 text-white" />
                    </button>
                    <span className="text-white text-sm">Comments</span>
                  </div>
                  
                  <div className="flex flex-col items-center">
                    <button className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors mb-2">
                      <Send className="h-6 w-6 text-white" />
                    </button>
                    <span className="text-white text-sm">Share</span>
                  </div>
                  
                  <div className="flex flex-col items-center">
                    <button className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center hover:bg-yellow-600 transition-colors mb-2">
                      <Bookmark className="h-6 w-6 text-white" />
                    </button>
                    <span className="text-white text-sm">Save</span>
                  </div>
                </div>
              </>
            )}
          </div>

          {/* Video Info Sidebar */}
          <div className="w-80 bg-gray-800 p-6 overflow-y-auto">
            {currentVideo && (
              <>
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-white mb-2">{currentVideo.title}</h3>
                  <div className="flex items-center text-gray-400 text-sm mb-3">
                    <Eye className="h-4 w-4 mr-1" />
                    <span className="mr-4">{currentVideo.views} views</span>
                    <Clock className="h-4 w-4 mr-1" />
                    <span>{currentVideo.uploadDate}</span>
                  </div>
                  <p className="text-gray-300 text-sm mb-4">{currentVideo.description}</p>
                </div>

                {/* Location & Add to Cart */}
                <div className="bg-gradient-to-r from-amber-500 to-orange-600 rounded-lg p-4 mb-6">
                  <div className="flex items-center text-white mb-3">
                    <MapPin className="h-5 w-5 mr-2" />
                    <span className="font-semibold">Near {currentVideo.monastery}</span>
                  </div>
                  <button 
                    onClick={() => {
                      const monastery = monasteries.find(m => m.name === currentVideo.monastery);
                      if (monastery) addToCart(monastery);
                    }}
                    className="w-full bg-white text-amber-600 font-bold py-2 px-4 rounded-lg hover:bg-gray-100 transition-colors flex items-center justify-center"
                  >
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    Add {currentVideo.monastery} to Cart
                  </button>
                </div>

                {/* More Videos */}
                <div>
                  <h4 className="text-lg font-bold text-white mb-4">More {categoryName} Videos</h4>
                  <div className="space-y-3">
                    {filteredVideos.slice(0, 5).map((video, index) => (
                      <button
                        key={video.id}
                        onClick={() => setCurrentVideoIndex(index)}
                        className={`w-full flex items-center space-x-3 p-2 rounded-lg transition-colors ${
                          index === currentVideoIndex ? 'bg-gray-700' : 'hover:bg-gray-700'
                        }`}
                      >
                        <img 
                          src={video.thumbnail} 
                          alt={video.title}
                          className="w-16 h-16 object-cover rounded-lg"
                        />
                        <div className="flex-1 text-left">
                          <h5 className="text-white text-sm font-semibold line-clamp-2 mb-1">
                            {video.title}
                          </h5>
                          <div className="text-gray-400 text-xs">
                            {video.views} views • {video.uploadDate}
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    );
  };

  const EventsSection = () => (
    <div className="bg-gradient-to-br from-blue-900 via-purple-800 to-indigo-900 min-h-screen p-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-white text-center mb-12">Monastery Events & Festivals</h2>
        
        <div className="mb-8 flex flex-wrap gap-4 justify-center">
          <div className="relative">
            <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
            <input 
              type="text" 
              placeholder="Search events..." 
              className="pl-10 pr-4 py-2 bg-white bg-opacity-20 backdrop-blur-md rounded-lg text-white placeholder-gray-400"
            />
          </div>
          <select className="bg-white bg-opacity-20 backdrop-blur-md text-white rounded-lg px-4 py-2">
            <option>All Categories</option>
            <option>Festival</option>
            <option>Religious</option>
            <option>Cultural</option>
          </select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event) => (
            <div key={event.id} className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              <div className="flex items-center justify-between mb-4">
                <span className="bg-amber-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {event.category}
                </span>
                <button 
                  onClick={() => addToCart(event)}
                  className="text-amber-400 hover:text-amber-300 transition-colors"
                >
                  <ShoppingCart className="h-5 w-5" />
                </button>
              </div>
              
              <h3 className="text-xl font-bold text-white mb-2">{event.name}</h3>
              <div className="flex items-center text-gray-300 mb-2">
                <MapPin className="h-4 w-4 mr-2" />
                {event.monastery}
              </div>
              <div className="flex items-center text-gray-300 mb-2">
                <Calendar className="h-4 w-4 mr-2" />
                {event.date}
              </div>
              <div className="flex items-center text-gray-300 mb-4">
                <Clock className="h-4 w-4 mr-2" />
                {event.time}
              </div>
              <p className="text-gray-300 text-sm mb-4">{event.description}</p>
              
              <div className="flex gap-2">
                <button className="flex-1 bg-gradient-to-r from-amber-500 to-orange-600 text-white py-2 px-4 rounded-lg font-semibold hover:from-amber-600 hover:to-orange-700 transition-all duration-300">
                  Join Event
                </button>
                <button className="bg-white bg-opacity-20 text-white p-2 rounded-lg hover:bg-opacity-30 transition-all">
                  <Heart className="h-5 w-5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const ArchivesSection = () => (
    <div className="bg-gradient-to-br from-amber-900 via-orange-800 to-red-900 min-h-screen p-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-white text-center mb-12">Digital Archives</h2>
        
        <div className="mb-8 flex flex-wrap gap-4 justify-center">
          <select className="bg-white bg-opacity-20 backdrop-blur-md text-white rounded-lg px-4 py-2">
            <option>All Years</option>
            <option>1600-1700</option>
            <option>1700-1800</option>
            <option>1800-1900</option>
          </select>
          <select className="bg-white bg-opacity-20 backdrop-blur-md text-white rounded-lg px-4 py-2">
            <option>All Types</option>
            <option>Manuscript</option>
            <option>Mural</option>
            <option>Document</option>
          </select>
          <select className="bg-white bg-opacity-20 backdrop-blur-md text-white rounded-lg px-4 py-2">
            <option>All Monasteries</option>
            {monasteries.map(m => (
              <option key={m.id}>{m.name}</option>
            ))}
          </select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {archives.map((archive) => (
            <div key={archive.id} className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              <div className="h-48 bg-gradient-to-br from-amber-400 to-orange-600 flex items-center justify-center">
                <BookOpen className="h-16 w-16 text-white" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{archive.title}</h3>
                <div className="flex items-center text-gray-300 mb-2">
                  <MapPin className="h-4 w-4 mr-2" />
                  {archive.monastery}
                </div>
                <div className="flex items-center text-gray-300 mb-2">
                  <Calendar className="h-4 w-4 mr-2" />
                  {archive.year}
                </div>
                <span className="bg-purple-600 text-white px-2 py-1 rounded text-sm mb-4 inline-block">
                  {archive.type}
                </span>
                <p className="text-gray-300 text-sm mb-4">{archive.description}</p>
                
                <div className="flex gap-2">
                  <button className="flex-1 bg-gradient-to-r from-purple-500 to-blue-600 text-white py-2 px-4 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300">
                    View Archive
                  </button>
                  <button 
                    onClick={() => addToCart(archive)}
                    className="bg-white bg-opacity-20 text-white p-2 rounded-lg hover:bg-opacity-30 transition-all"
                  >
                    <ShoppingCart className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const MapsSection = () => (
    <div className="bg-gradient-to-br from-green-900 via-teal-800 to-blue-900 min-h-screen p-8 relative">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-white text-center mb-12">Interactive Monastery Map</h2>
        
        <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-6 mb-8">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-2xl font-bold text-white">AI Voice Assistant</h3>
            <button 
              onClick={() => setIsPlaying(!isPlaying)}
              className={`p-3 rounded-full transition-all duration-300 ${
                isPlaying ? 'bg-red-500 hover:bg-red-600' : 'bg-green-500 hover:bg-green-600'
              }`}
            >
              {isPlaying ? <VolumeX className="h-6 w-6 text-white" /> : <Volume2 className="h-6 w-6 text-white" />}
            </button>
          </div>
          <p className="text-gray-300 mb-4">
            "Welcome to Monastery360! I can help you navigate to any monastery using GPS or Bluetooth beacons. 
            Would you like directions to Rumtek Monastery?"
          </p>
          <div className="flex gap-2">
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors">
              Enable GPS
            </button>
            <button className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded-lg transition-colors">
              Connect Bluetooth
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-6">
            <h3 className="text-2xl font-bold text-white mb-6">Map View</h3>
            <div className="aspect-w-16 aspect-h-12 bg-gradient-to-br from-green-400 to-blue-500 rounded-lg flex items-center justify-center mb-4">
              <div className="text-center text-white">
                <Map className="h-16 w-16 mx-auto mb-4" />
                <p className="text-lg font-semibold">Interactive Map Loading...</p>
                <p className="text-sm opacity-75">Sikkim Monasteries with AI Recommendations</p>
              </div>
            </div>
            <div className="flex gap-2 flex-wrap">
              <button className="bg-amber-500 hover:bg-amber-600 text-white px-3 py-1 rounded-full text-sm transition-colors">
                Show All
              </button>
              <button className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-full text-sm transition-colors">
                Nearby
              </button>
              <button className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded-full text-sm transition-colors">
                Popular
              </button>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white mb-6">Monastery Locations</h3>
            {monasteries.map((monastery) => (
              <div 
                key={monastery.id} 
                className={`bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-4 transition-all duration-300 cursor-pointer ${
                  selectedMapMonastery?.id === monastery.id 
                    ? 'ring-4 ring-amber-400 bg-opacity-20' 
                    : 'hover:bg-opacity-20'
                }`}
                onClick={() => setSelectedMapMonastery(monastery)}
              >
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-lg font-bold text-white">{monastery.name}</h4>
                  <div className="flex items-center gap-2">
                    <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                    <span className="text-white text-sm">{monastery.rating}</span>
                  </div>
                </div>
                <div className="flex items-center text-gray-300 mb-3">
                  <MapPin className="h-4 w-4 mr-2" />
                  {monastery.location}
                </div>
                
                {selectedMapMonastery?.id === monastery.id && (
                  <div className="mt-4 p-4 bg-gradient-to-r from-amber-500/20 to-orange-500/20 rounded-lg border-2 border-amber-500 mb-3">
                    <h5 className="text-amber-300 font-bold mb-2">Monastery Details</h5>
                    <p className="text-gray-200 text-sm mb-2">{monastery.description}</p>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div className="flex items-center text-gray-300">
                        <Calendar className="h-3 w-3 mr-1" />
                        Founded: {monastery.founded}
                      </div>
                      <div className="flex items-center text-gray-300">
                        <Award className="h-3 w-3 mr-1" />
                        Type: {monastery.type}
                      </div>
                    </div>
                  </div>
                )}

                <div className="flex gap-2 flex-wrap mb-3">
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedMapMonastery(monastery);
                      setShowARVideo(true);
                    }}
                    className="bg-gradient-to-r from-blue-500 to-cyan-600 text-white px-3 py-1 rounded-full text-sm hover:from-blue-600 hover:to-cyan-700 transition-all duration-300"
                  >
                    <Navigation className="h-3 w-3 mr-1 inline" />
                    AR Navigation
                  </button>
                  <button className="bg-purple-500 hover:bg-purple-600 text-white px-3 py-1 rounded-full text-sm transition-colors">
                    <Camera className="h-3 w-3 mr-1 inline" />
                    VR Tour
                  </button>
                  <button className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded-full text-sm transition-colors">
                    <Download className="h-3 w-3 mr-1 inline" />
                    Offline
                  </button>
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      addToCart(monastery);
                    }}
                    className="bg-orange-500 hover:bg-orange-600 text-white px-3 py-1 rounded-full text-sm transition-colors"
                  >
                    <ShoppingCart className="h-3 w-3 mr-1 inline" />
                    Add
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* AR Video Modal for Maps */}
        {showARVideo && selectedMapMonastery && (
          <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
            <div className="relative w-full max-w-4xl">
              <button
                onClick={() => {
                  setShowARVideo(false);
                  setSelectedMapMonastery(null);
                }}
                className="absolute -top-12 right-0 text-white text-2xl hover:text-gray-300"
              >
                × Close
              </button>
              <div className="bg-gray-900 rounded-xl overflow-hidden">
                <div className="aspect-video bg-black flex items-center justify-center">
                  <div className="text-center text-white p-8">
                    <Navigation className="h-16 w-16 mx-auto mb-4 text-blue-400 animate-pulse" />
                    <h3 className="text-2xl font-bold mb-4">AR Navigation to {selectedMapMonastery.name}</h3>
                    <p className="text-gray-300 mb-6">
                      Point your camera and follow the AR arrows to navigate to the monastery
                    </p>
                    <div className="grid grid-cols-2 gap-4 text-left max-w-md mx-auto">
                      <div className="bg-blue-500/20 p-4 rounded-lg">
                        <div className="text-2xl font-bold text-blue-400">2.5 km</div>
                        <div className="text-sm text-gray-300">Distance</div>
                      </div>
                      <div className="bg-green-500/20 p-4 rounded-lg">
                        <div className="text-2xl font-bold text-green-400">35 min</div>
                        <div className="text-sm text-gray-300">Walking Time</div>
                      </div>
                      <div className="bg-purple-500/20 p-4 rounded-lg">
                        <div className="text-2xl font-bold text-purple-400">Live</div>
                        <div className="text-sm text-gray-300">AR Tracking</div>
                      </div>
                      <div className="bg-orange-500/20 p-4 rounded-lg">
                        <div className="text-2xl font-bold text-orange-400">GPS</div>
                        <div className="text-sm text-gray-300">+ Compass</div>
                      </div>
                    </div>
                    <button className="mt-6 bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold transition-all">
                      Start AR Navigation
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Chatbot Component */}
      <Chatbot />
    </div>
  );

  const CartSection = () => {
    // Auto-select first item if none selected and cart has items
    if (cart.length > 0 && !selectedCartItem) {
      setSelectedCartItem(cart[0]);
    }

    return (
      <div className="bg-gradient-to-br from-purple-900 via-pink-800 to-red-900 min-h-screen p-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-12">Your Spiritual Journey Cart</h2>
          
          {cart.length === 0 ? (
            <div className="text-center py-16">
              <ShoppingCart className="h-24 w-24 text-gray-400 mx-auto mb-4" />
              <p className="text-xl text-gray-400">Your cart is empty</p>
              <p className="text-gray-500">Add monasteries, events, or archives to start planning your journey</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Cart Items List */}
              <div className="lg:col-span-2 space-y-4">
                {cart.map((item, index) => (
                  <div 
                    key={index} 
                    onClick={() => setSelectedCartItem(item)}
                    className={`bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-6 flex items-center gap-4 cursor-pointer transition-all duration-300 ${
                      selectedCartItem === item ? 'ring-4 ring-amber-400 bg-opacity-20 scale-105' : 'hover:bg-opacity-15'
                    }`}
                  >
                    <div className="w-20 h-20 bg-gradient-to-br from-amber-400 to-orange-600 rounded-lg flex items-center justify-center overflow-hidden">
                      {item.image ? (
                        <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                      ) : (
                        <BookOpen className="h-10 w-10 text-white" />
                      )}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="text-lg font-bold text-white">{item.name || item.title}</h4>
                        {selectedCartItem === item && (
                          <span className="bg-amber-500 text-white text-xs px-2 py-1 rounded-full">Selected</span>
                        )}
                      </div>
                      <p className="text-gray-300 text-sm line-clamp-2">{item.description}</p>
                      {item.location && (
                        <div className="flex items-center text-gray-400 text-sm mt-2">
                          <MapPin className="h-3 w-3 mr-1" />
                          {item.location}
                        </div>
                      )}
                      {item.rating && (
                        <div className="flex items-center mt-2">
                          <Star className="h-4 w-4 text-yellow-400 fill-yellow-400 mr-1" />
                          <span className="text-yellow-400 text-sm font-semibold">{item.rating}</span>
                        </div>
                      )}
                    </div>
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        removeFromCart(item.id);
                        if (selectedCartItem === item) {
                          setSelectedCartItem(cart[0] === item ? cart[1] : cart[0]);
                        }
                      }}
                      className="text-red-400 hover:text-red-300 transition-colors text-2xl"
                    >
                      ×
                    </button>
                  </div>
                ))}
              </div>

              {/* Individual Journey Summary */}
              {selectedCartItem && (
                <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-6 h-fit">
                  <h3 className="text-xl font-bold text-white mb-6">Journey Details</h3>
                  
                  {/* Selected Item Info */}
                  <div className="mb-6 p-4 bg-gradient-to-r from-amber-500/20 to-orange-500/20 rounded-lg border-2 border-amber-500">
                    <h4 className="text-lg font-bold text-amber-300 mb-2">
                      {selectedCartItem.name || selectedCartItem.title}
                    </h4>
                    {selectedCartItem.location && (
                      <div className="flex items-center text-gray-300 text-sm mb-2">
                        <MapPin className="h-4 w-4 mr-2" />
                        {selectedCartItem.location}
                      </div>
                    )}
                    {selectedCartItem.founded && (
                      <div className="flex items-center text-gray-300 text-sm mb-2">
                        <Calendar className="h-4 w-4 mr-2" />
                        Founded: {selectedCartItem.founded}
                      </div>
                    )}
                    {selectedCartItem.type && (
                      <div className="flex items-center text-gray-300 text-sm">
                        <Award className="h-4 w-4 mr-2" />
                        Type: {selectedCartItem.type}
                      </div>
                    )}
                  </div>

                  {/* Journey Stats */}
                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between text-gray-300">
                      <span>Estimated Visit Duration:</span>
                      <span className="font-semibold text-white">2-3 hours</span>
                    </div>
                    <div className="flex justify-between text-gray-300">
                      <span>Best Time to Visit:</span>
                      <span className="font-semibold text-white">6 AM - 6 PM</span>
                    </div>
                    <div className="flex justify-between text-gray-300">
                      <span>Difficulty Level:</span>
                      <span className="font-semibold text-green-400">Easy</span>
                    </div>
                  </div>

                  {/* AR Video Modal */}
                  {showARVideo && (
                    <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
                      <div className="relative w-full max-w-4xl">
                        <button
                          onClick={() => setShowARVideo(false)}
                          className="absolute -top-12 right-0 text-white text-2xl hover:text-gray-300"
                        >
                          × Close
                        </button>
                        <div className="bg-gray-900 rounded-xl overflow-hidden">
                          <div className="aspect-video bg-black flex items-center justify-center">
                            <div className="text-center text-white p-8">
                              <Navigation className="h-16 w-16 mx-auto mb-4 text-blue-400 animate-pulse" />
                              <h3 className="text-2xl font-bold mb-4">AR Navigation to {selectedCartItem.name}</h3>
                              <p className="text-gray-300 mb-6">
                                Point your camera and follow the AR arrows to navigate to the monastery
                              </p>
                              <div className="grid grid-cols-2 gap-4 text-left max-w-md mx-auto">
                                <div className="bg-blue-500/20 p-4 rounded-lg">
                                  <div className="text-2xl font-bold text-blue-400">2.5 km</div>
                                  <div className="text-sm text-gray-300">Distance</div>
                                </div>
                                <div className="bg-green-500/20 p-4 rounded-lg">
                                  <div className="text-2xl font-bold text-green-400">35 min</div>
                                  <div className="text-sm text-gray-300">Walking Time</div>
                                </div>
                                <div className="bg-purple-500/20 p-4 rounded-lg">
                                  <div className="text-2xl font-bold text-purple-400">Live</div>
                                  <div className="text-sm text-gray-300">AR Tracking</div>
                                </div>
                                <div className="bg-orange-500/20 p-4 rounded-lg">
                                  <div className="text-2xl font-bold text-orange-400">GPS</div>
                                  <div className="text-sm text-gray-300">+ Compass</div>
                                </div>
                              </div>
                              <button className="mt-6 bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold transition-all">
                                Start AR Navigation
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Action Buttons */}
                  <div className="space-y-3">
                    <button 
                      onClick={() => setShowARVideo(true)}
                      className="w-full bg-gradient-to-r from-blue-500 to-cyan-600 text-white py-3 px-4 rounded-lg font-semibold hover:from-blue-600 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center"
                    >
                      <Navigation className="h-5 w-5 mr-2" />
                      AR Navigation
                    </button>

                    <button className="w-full bg-gradient-to-r from-purple-500 to-pink-600 text-white py-3 px-4 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-700 transition-all duration-300 flex items-center justify-center">
                      <Camera className="h-5 w-5 mr-2" />
                      VR Tour
                    </button>

                    <button className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-3 px-4 rounded-lg font-semibold hover:from-indigo-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center">
                      <Hotel className="h-5 w-5 mr-2" />
                      Book Nearby Hotels
                    </button>

                    <button className="w-full bg-gradient-to-r from-green-500 to-teal-600 text-white py-3 px-4 rounded-lg font-semibold hover:from-green-600 hover:to-teal-700 transition-all duration-300 flex items-center justify-center">
                      <Car className="h-5 w-5 mr-2" />
                      Book Transport
                    </button>

                    <button className="w-full bg-gradient-to-r from-amber-500 to-orange-600 text-white py-3 px-4 rounded-lg font-semibold hover:from-amber-600 hover:to-orange-700 transition-all duration-300 flex items-center justify-center">
                      <Play className="h-5 w-5 mr-2" />
                      Start This Journey
                    </button>
                  </div>

                  {/* Total Summary */}
                  <div className="mt-6 pt-6 border-t border-gray-600">
                    <h4 className="text-sm font-semibold text-gray-400 mb-3">Complete Journey</h4>
                    <div className="flex justify-between text-gray-300 text-sm">
                      <span>Total Monasteries:</span>
                      <span className="font-semibold text-white">{cart.length}</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    );
  };

  const ShareSection = () => (
    <div className="bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 min-h-screen p-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-white text-center mb-12">ShareIt - Community Stories</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-6 text-center">
            <BookOpen className="h-12 w-12 text-amber-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">Write Blog</h3>
            <p className="text-gray-300 mb-4">Share your monastery experiences in detailed blog posts</p>
            <button className="bg-gradient-to-r from-amber-500 to-orange-600 text-white px-6 py-2 rounded-lg hover:from-amber-600 hover:to-orange-700 transition-all duration-300">
              Start Writing
            </button>
          </div>
          
          <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-6 text-center">
            <Camera className="h-12 w-12 text-blue-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">Upload Video</h3>
            <p className="text-gray-300 mb-4">Share video tours and cultural performances</p>
            <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2 rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300">
              Upload Video
            </button>
          </div>
          
          <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-6 text-center">
            <Volume2 className="h-12 w-12 text-green-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">Audio Stories</h3>
            <p className="text-gray-300 mb-4">Record audio experiences and spiritual reflections</p>
            <button className="bg-gradient-to-r from-green-500 to-teal-600 text-white px-6 py-2 rounded-lg hover:from-green-600 hover:to-teal-700 transition-all duration-300">
              Record Audio
            </button>
          </div>
        </div>

        <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-6 mb-8">
          <h3 className="text-2xl font-bold text-white mb-6">Featured Content</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white bg-opacity-10 rounded-lg p-4">
              <div className="flex items-center mb-3">
                <div className="w-10 h-10 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">TJ</span>
                </div>
                <div className="ml-3">
                  <p className="text-white font-semibold">Tenzin Journey</p>
                  <p className="text-gray-400 text-sm">2 days ago</p>
                </div>
                <div className="ml-auto flex items-center">
                  <Award className="h-4 w-4 text-yellow-400 mr-1" />
                  <span className="text-yellow-400 text-sm">Featured</span>
                </div>
              </div>
              <h4 className="text-white font-bold mb-2">My Spiritual Journey to Rumtek</h4>
              <p className="text-gray-300 text-sm">An incredible experience visiting the largest monastery in Sikkim...</p>
            </div>

            <div className="bg-white bg-opacity-10 rounded-lg p-4">
              <div className="flex items-center mb-3">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">SK</span>
                </div>
                <div className="ml-3">
                  <p className="text-white font-semibold">Sarah Kim</p>
                  <p className="text-gray-400 text-sm">5 days ago</p>
                </div>
                <div className="ml-auto flex items-center">
                  <Award className="h-4 w-4 text-yellow-400 mr-1" />
                  <span className="text-yellow-400 text-sm">Featured</span>
                </div>
              </div>
              <h4 className="text-white font-bold mb-2">Losar Festival at Pemayangtse</h4>
              <p className="text-gray-300 text-sm">The most beautiful celebration I've ever witnessed...</p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl p-6 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">Earn Rewards</h3>
          <p className="text-gray-200 mb-4">
            Share quality content and earn rewards when your posts generate engagement on our social media!
          </p>
          <div className="flex justify-center gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-white">₹500</div>
              <div className="text-sm text-gray-200">Per Featured Post</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">₹1000</div>
              <div className="text-sm text-gray-200">Per Viral Content</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const Footer = () => (
    <footer className="bg-gradient-to-r from-gray-900 to-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold text-amber-400 mb-4">Monastery360</h3>
            <p className="text-gray-300 mb-4">
              Preserving and sharing the spiritual heritage of Sikkim's monasteries through immersive digital experiences.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-pink-400 transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-red-400 transition-colors">
                <Youtube className="h-6 w-6" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-amber-400 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-amber-400 transition-colors">Virtual Tours</a></li>
              <li><a href="#" className="hover:text-amber-400 transition-colors">Cultural Calendar</a></li>
              <li><a href="#" className="hover:text-amber-400 transition-colors">Community</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contact</h4>
            <div className="space-y-2 text-gray-300">
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2" />
                <span>+91-1234567890</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-2" />
                <span>info@monastery360.com</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-2" />
                <span>Gangtok, Sikkim</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 Syantax Warriors. All rights reserved. Built for SIH25 (PS25061)
          </p>
        </div>
      </div>
    </footer>
  );

  const renderSection = () => {
    if (selectedCategory) {
      return <VideoFeedSection />;
    }
    
    switch (activeSection) {
      case 'events':
        return <EventsSection />;
      case 'archives':
        return <ArchivesSection />;
      case 'maps':
        return <MapsSection />;
      case 'explore':
        return <ExploreUsSection />;
      case 'cart':
        return <CartSection />;
      case 'share':
        return <ShareSection />;
      default:
        return <HeroSection />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-900">
      <NavBar />
      {renderSection()}
      <Footer />
    </div>
  );
};

export default Monastery360;
