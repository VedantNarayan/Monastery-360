import React, { useState, useEffect } from 'react';
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
  Car
} from 'lucide-react';

const Monastery360 = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [cart, setCart] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [isPlaying, setIsPlaying] = useState(false);

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

  const NavBar = () => (
    <nav className="bg-gradient-to-r from-amber-900 via-orange-800 to-red-900 shadow-2xl sticky top-0 z-50 backdrop-blur-md bg-opacity-95">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <h1 
              className="text-2xl font-bold text-amber-100 cursor-pointer hover:text-white transition-colors duration-300"
              onClick={() => setActiveSection('home')}
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
                { id: 'cart', icon: ShoppingCart, label: `Cart (${cart.length})` },
                { id: 'share', icon: Share2, label: 'ShareIt' }
              ].map(({ id, icon: Icon, label }) => (
                <button
                  key={id}
                  onClick={() => setActiveSection(id)}
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
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="text-center mb-16">
          <h1 className="text-6xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 mb-6">
            Monastery360
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Immerse yourself in the spiritual heritage of Sikkim's monasteries through cutting-edge virtual reality and AI-powered experiences
          </p>
          <button className="bg-gradient-to-r from-amber-500 to-orange-600 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-xl hover:from-amber-600 hover:to-orange-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
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
                  {/* Stronger gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>

                  <div className="absolute top-2 right-2">
                    <button 
                      onClick={() => toggleFavorite(monastery)}
                      className="p-2 rounded-full bg-white bg-opacity-20 backdrop-blur-md hover:bg-opacity-30 transition-all"
                    >
                      <Heart className={`h-4 w-4 ${favorites.find(fav => fav.id === monastery.id) ? 'text-red-500 fill-red-500' : 'text-white'}`} />
                    </button>
                  </div>

                  {/* Text with shadow for readability */}
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
          <div className="text-center p-8 bg-white bg-opacity-10 backdrop-blur-lg rounded-xl">
            <Camera className="h-12 w-12 text-amber-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">Virtual Tours</h3>
            <p className="text-gray-300">360° panoramic monastery experiences</p>
          </div>
          <div className="text-center p-8 bg-white bg-opacity-10 backdrop-blur-lg rounded-xl">
            <BookOpen className="h-12 w-12 text-amber-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">Digital Archives</h3>
            <p className="text-gray-300">Ancient manuscripts and documents</p>
          </div>
          <div className="text-center p-8 bg-white bg-opacity-10 backdrop-blur-lg rounded-xl">
            <Users className="h-12 w-12 text-amber-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">Community</h3>
            <p className="text-gray-300">Share experiences and stories</p>
          </div>
        </div>
      </div>
    </div>
  );

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
    <div className="bg-gradient-to-br from-green-900 via-teal-800 to-blue-900 min-h-screen p-8">
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
              <div key={monastery.id} className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-4 hover:bg-opacity-20 transition-all duration-300">
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
                <div className="flex gap-2 flex-wrap mb-3">
                  <button className="bg-gradient-to-r from-amber-500 to-orange-600 text-white px-3 py-1 rounded-full text-sm hover:from-amber-600 hover:to-orange-700 transition-all">
                    <Navigation className="h-3 w-3 mr-1 inline" />
                    Navigate
                  </button>
                  <button className="bg-purple-500 hover:bg-purple-600 text-white px-3 py-1 rounded-full text-sm transition-colors">
                    <Play className="h-3 w-3 mr-1 inline" />
                    Virtual Tour
                  </button>
                  <button className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded-full text-sm transition-colors">
                    <Download className="h-3 w-3 mr-1 inline" />
                    Offline
                  </button>
                  <button 
                    onClick={() => addToCart(monastery)}
                    className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-full text-sm transition-colors"
                  >
                    <ShoppingCart className="h-3 w-3 mr-1 inline" />
                    Add
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const CartSection = () => (
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
            <div className="lg:col-span-2 space-y-4">
              {cart.map((item, index) => (
                <div key={index} className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-6 flex items-center gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-orange-600 rounded-lg flex items-center justify-center">
                    {item.image ? (
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover rounded-lg" />
                    ) : (
                      <BookOpen className="h-8 w-8 text-white" />
                    )}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-bold text-white">{item.name || item.title}</h4>
                    <p className="text-gray-300 text-sm">{item.description}</p>
                    {item.location && (
                      <div className="flex items-center text-gray-400 text-sm mt-1">
                        <MapPin className="h-3 w-3 mr-1" />
                        {item.location}
                      </div>
                    )}
                  </div>
                  <button 
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-400 hover:text-red-300 transition-colors"
                  >
                    ×
                  </button>
                </div>
              ))}
            </div>

            <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-6 h-fit">
              <h3 className="text-xl font-bold text-white mb-6">Journey Summary</h3>
              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-gray-300">
                  <span>Selected Items:</span>
                  <span>{cart.length}</span>
                </div>
                <div className="flex justify-between text-gray-300">
                  <span>Estimated Duration:</span>
                  <span>{cart.length * 2} hours</span>
                </div>
              </div>

              <div className="space-y-3">
                <button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 px-4 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center">
                  <Hotel className="h-5 w-5 mr-2" />
                  Book Hotels
                </button>
                <button className="w-full bg-gradient-to-r from-green-500 to-teal-600 text-white py-3 px-4 rounded-lg font-semibold hover:from-green-600 hover:to-teal-700 transition-all duration-300 flex items-center justify-center">
                  <Car className="h-5 w-5 mr-2" />
                  Book Transport
                </button>
                <button className="w-full bg-gradient-to-r from-amber-500 to-orange-600 text-white py-3 px-4 rounded-lg font-semibold hover:from-amber-600 hover:to-orange-700 transition-all duration-300">
                  Start Journey
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );

  const ShareSection = () => (
    <div className="bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 min-h-screen p-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-white text-center mb-12">ShareIt - Community Stories</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-6 text-center">
            <BookOpen className="h-12 w-12 text-amber-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">Write Blog</h3>
            <p className="text-gray-300 mb-4">Share your monastery experiences in detailed blog posts</p>
            <button className="bg-gradient-to-r from-amber-500 to-orange-600 text-white px-6 py-2 rounded-lg hover:from-amber-600 hover:to-orange-700 transition-all">
              Start Writing
            </button>
          </div>
          
          <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-6 text-center">
            <Camera className="h-12 w-12 text-blue-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">Upload Video</h3>
            <p className="text-gray-300 mb-4">Share video tours and cultural performances</p>
            <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2 rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all">
              Upload Video
            </button>
          </div>
          
          <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-6 text-center">
            <Volume2 className="h-12 w-12 text-green-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">Audio Stories</h3>
            <p className="text-gray-300 mb-4">Record audio experiences and spiritual reflections</p>
            <button className="bg-gradient-to-r from-green-500 to-teal-600 text-white px-6 py-2 rounded-lg hover:from-green-600 hover:to-teal-700 transition-all">
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
            © 2025 Syantax Warriors. All rights reserved. Built for SIH25 (PS25061) - Preserving Heritage Through Technology.
          </p>
        </div>
      </div>
    </footer>
  );

  const renderSection = () => {
    switch (activeSection) {
      case 'events':
        return <EventsSection />;
      case 'archives':
        return <ArchivesSection />;
      case 'maps':
        return <MapsSection />;
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
