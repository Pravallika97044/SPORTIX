export const sportsList = [
  { id: 'Basketball', name: 'Basketball', iconName: 'Activity', color: 'bg-orange-500/20 text-orange-500 border-orange-500/30' },
  { id: 'Football', name: 'Football', iconName: 'Flame', color: 'bg-emerald-500/20 text-emerald-500 border-emerald-500/30' },
  { id: 'Cricket', name: 'Cricket', iconName: 'Target', color: 'bg-amber-500/20 text-amber-500 border-amber-500/30' },
  { id: 'Volleyball', name: 'Volleyball', iconName: 'Activity', color: 'bg-sky-500/20 text-sky-500 border-sky-500/30' },
  { id: 'Badminton', name: 'Badminton', iconName: 'Trophy', color: 'bg-green-500/20 text-green-500 border-green-500/30' },
  { id: 'Swimming', name: 'Swimming', iconName: 'Waves', color: 'bg-blue-500/20 text-blue-500 border-blue-500/30' },
  { id: 'Athletics', name: 'Athletics', iconName: 'Zap', color: 'bg-red-500/20 text-red-500 border-red-500/30' },
  { id: 'Esports', name: 'Esports', iconName: 'Gamepad2', color: 'bg-violet-500/20 text-violet-500 border-violet-500/30' }
];

export const arenasData = [
  // BASKETBALL
  {
    id: 1,
    name: 'Elite Sports Complex',
    sport: 'Basketball',
    city: 'Bangalore',
    rating: 4.8,
    reviews: 245,
    type: 'Indoor',
    price: '2,500',
    image: 'https://images.unsplash.com/photo-1544698310-74ea9d1c8258?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 2,
    name: 'Skyline Basketball Court',
    sport: 'Basketball',
    city: 'Mumbai',
    rating: 4.6,
    reviews: 112,
    type: 'Outdoor',
    price: '1,500',
    image: 'https://images.unsplash.com/photo-1505666287802-931dc83948e9?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 3,
    name: 'Hoop Dreams Club',
    sport: 'Basketball',
    city: 'Delhi',
    rating: 4.7,
    reviews: 95,
    type: 'Indoor',
    price: '2,200',
    image: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 4,
    name: 'Dunk Nation Arena',
    sport: 'Basketball',
    city: 'Chennai',
    rating: 4.5,
    reviews: 78,
    type: 'Indoor',
    price: '2,000',
    image: 'https://images.unsplash.com/photo-1519766304817-4f37bda74a27?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 5,
    name: 'Legacy Hoops Center',
    sport: 'Basketball',
    city: 'Kolkata',
    rating: 4.9,
    reviews: 320,
    type: 'Outdoor',
    price: '1,200',
    image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=600&q=80'
  },

  // FOOTBALL
  {
    id: 6,
    name: 'Victory Arena',
    sport: 'Football',
    city: 'Mumbai',
    rating: 4.7,
    reviews: 189,
    type: 'Indoor',
    price: '1,800',
    image: 'https://images.unsplash.com/photo-1575361204480-aadea25e6e68?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 7,
    name: 'Wembley Turf',
    sport: 'Football',
    city: 'Bangalore',
    rating: 4.9,
    reviews: 412,
    type: 'Outdoor',
    price: '2,400',
    image: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 8,
    name: 'KickOff Football Ground',
    sport: 'Football',
    city: 'Delhi',
    rating: 4.4,
    reviews: 156,
    type: 'Outdoor',
    price: '1,600',
    image: 'https://images.unsplash.com/photo-1459865264687-595d652de67e?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 9,
    name: 'GoalStrike Turf',
    sport: 'Football',
    city: 'Chennai',
    rating: 4.6,
    reviews: 89,
    type: 'Indoor',
    price: '1,950',
    image: 'https://images.unsplash.com/photo-1518063319789-7217e6706b04?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 10,
    name: 'Red Goal Stadium',
    sport: 'Football',
    city: 'Kolkata',
    rating: 4.8,
    reviews: 233,
    type: 'Outdoor',
    price: '2,200',
    image: 'https://images.unsplash.com/photo-1529900748604-07564a03e7a6?auto=format&fit=crop&w=600&q=80'
  },

  // CRICKET
  {
    id: 11,
    name: "Lord's Indoor Pitch",
    sport: 'Cricket',
    city: 'Delhi',
    rating: 4.8,
    reviews: 147,
    type: 'Indoor',
    price: '3,000',
    image: 'https://images.unsplash.com/photo-1531415080290-bc9b85db8090?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 12,
    name: 'Eden Nets',
    sport: 'Cricket',
    city: 'Kolkata',
    rating: 4.9,
    reviews: 356,
    type: 'Indoor',
    price: '1,500',
    image: 'https://images.unsplash.com/photo-1624526261953-ab309d43ec72?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 13,
    name: 'Boundary Cricket Club',
    sport: 'Cricket',
    city: 'Bangalore',
    rating: 4.5,
    reviews: 98,
    type: 'Outdoor',
    price: '1,800',
    image: 'https://images.unsplash.com/photo-1589487391730-58f20eb2c308?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 14,
    name: 'Wankhede Indoor Nets',
    sport: 'Cricket',
    city: 'Mumbai',
    rating: 4.7,
    reviews: 201,
    type: 'Indoor',
    price: '2,800',
    image: 'https://images.unsplash.com/photo-1608245449230-4ac19066d2d0?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 15,
    name: 'Chepauk Cricket Academy',
    sport: 'Cricket',
    city: 'Chennai',
    rating: 4.6,
    reviews: 132,
    type: 'Outdoor',
    price: '2,000',
    image: 'https://images.unsplash.com/photo-1593341606243-e040d500040e?auto=format&fit=crop&w=600&q=80'
  },

  // VOLLEYBALL
  {
    id: 16,
    name: 'Sunshine Volleyball Sand',
    sport: 'Volleyball',
    city: 'Chennai',
    rating: 4.6,
    reviews: 74,
    type: 'Outdoor',
    price: '1,000',
    image: 'https://images.unsplash.com/photo-1592656094267-764a45023304?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 17,
    name: 'Spike Indoor Arena',
    sport: 'Volleyball',
    city: 'Bangalore',
    rating: 4.8,
    reviews: 143,
    type: 'Indoor',
    price: '2,100',
    image: 'https://images.unsplash.com/photo-1579952362744-48a36d40f283?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 18,
    name: 'NetForce Court',
    sport: 'Volleyball',
    city: 'Mumbai',
    rating: 4.5,
    reviews: 82,
    type: 'Outdoor',
    price: '1,400',
    image: 'https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 19,
    name: 'Horizon Volleyball Club',
    sport: 'Volleyball',
    city: 'Delhi',
    rating: 4.7,
    reviews: 110,
    type: 'Indoor',
    price: '1,900',
    image: 'https://images.unsplash.com/photo-1578332924151-570a256df27a?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 20,
    name: 'Coastal Volleyball Academy',
    sport: 'Volleyball',
    city: 'Kolkata',
    rating: 4.4,
    reviews: 65,
    type: 'Outdoor',
    price: '1,100',
    image: 'https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=600&q=80'
  },

  // BADMINTON
  {
    id: 21,
    name: 'Smash Badminton Courts',
    sport: 'Badminton',
    city: 'Bangalore',
    rating: 4.9,
    reviews: 312,
    type: 'Indoor',
    price: '1,100',
    image: 'https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 22,
    name: 'Shuttle Pro Club',
    sport: 'Badminton',
    city: 'Delhi',
    rating: 4.7,
    reviews: 190,
    type: 'Indoor',
    price: '900',
    image: 'https://images.unsplash.com/photo-1613918431201-70bf824c965c?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 23,
    name: 'Yonex Elite Academy',
    sport: 'Badminton',
    city: 'Mumbai',
    rating: 4.8,
    reviews: 245,
    type: 'Indoor',
    price: '1,300',
    image: 'https://images.unsplash.com/photo-1617083934555-ac7d4fee377c?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 24,
    name: 'Ace Badminton Center',
    sport: 'Badminton',
    city: 'Chennai',
    rating: 4.6,
    reviews: 84,
    type: 'Indoor',
    price: '800',
    image: 'https://images.unsplash.com/photo-1563816627-4a2293006a58?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 25,
    name: 'DropShot Badminton Arena',
    sport: 'Badminton',
    city: 'Kolkata',
    rating: 4.5,
    reviews: 121,
    type: 'Indoor',
    price: '950',
    image: 'https://images.unsplash.com/photo-1521537634199-673b522a03cf?auto=format&fit=crop&w=600&q=80'
  },

  // SWIMMING
  {
    id: 26,
    name: 'Blue Water Aquatics Center',
    sport: 'Swimming',
    city: 'Bangalore',
    rating: 4.8,
    reviews: 204,
    type: 'Indoor',
    price: '1,600',
    image: 'https://images.unsplash.com/photo-1530541930197-ff16ac917b0e?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 27,
    name: 'Olympian Swimming Pool',
    sport: 'Swimming',
    city: 'Delhi',
    rating: 4.9,
    reviews: 165,
    type: 'Outdoor',
    price: '2,200',
    image: 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 28,
    name: 'Wave Aquatic Club',
    sport: 'Swimming',
    city: 'Mumbai',
    rating: 4.6,
    reviews: 120,
    type: 'Indoor',
    price: '1,800',
    image: 'https://images.unsplash.com/photo-1476525223214-c31ff100e1ae?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 29,
    name: 'Splash Swimming Academy',
    sport: 'Swimming',
    city: 'Chennai',
    rating: 4.5,
    reviews: 94,
    type: 'Outdoor',
    price: '1,200',
    image: 'https://images.unsplash.com/photo-1519766304817-4f37bda74a27?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 30,
    name: 'Aqua Marine Pool',
    sport: 'Swimming',
    city: 'Kolkata',
    rating: 4.7,
    reviews: 110,
    type: 'Indoor',
    price: '1,500',
    image: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=600&q=80'
  },

  // ATHLETICS
  {
    id: 31,
    name: 'Speedster Tracks',
    sport: 'Athletics',
    city: 'Bangalore',
    rating: 4.7,
    reviews: 145,
    type: 'Outdoor',
    price: '1,400',
    image: 'https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 32,
    name: 'Olympian Running Ground',
    sport: 'Athletics',
    city: 'Delhi',
    rating: 4.8,
    reviews: 198,
    type: 'Outdoor',
    price: '1,600',
    image: 'https://images.unsplash.com/photo-1502224562085-639556652f33?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 33,
    name: 'Apex Athletics Club',
    sport: 'Athletics',
    city: 'Mumbai',
    rating: 4.5,
    reviews: 73,
    type: 'Outdoor',
    price: '1,300',
    image: 'https://images.unsplash.com/photo-1486218119243-13883505764c?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 34,
    name: 'Sprint Academy Stadium',
    sport: 'Athletics',
    city: 'Chennai',
    rating: 4.6,
    reviews: 104,
    type: 'Outdoor',
    price: '1,200',
    image: 'https://images.unsplash.com/photo-1434596994096-19d4e89a7159?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 35,
    name: 'Red Oval Track',
    sport: 'Athletics',
    city: 'Kolkata',
    rating: 4.9,
    reviews: 215,
    type: 'Outdoor',
    price: '1,800',
    image: 'https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?auto=format&fit=crop&w=600&q=80'
  },

  // ESPORTS
  {
    id: 36,
    name: 'Cyber Arena Gaming Cafe',
    sport: 'Esports',
    city: 'Mumbai',
    rating: 4.9,
    reviews: 412,
    type: 'Indoor',
    price: '1,200',
    image: 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 37,
    name: 'Pixel PC Lounge',
    sport: 'Esports',
    city: 'Bangalore',
    rating: 4.8,
    reviews: 289,
    type: 'Indoor',
    price: '1,000',
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 38,
    name: 'Vortex Esports Center',
    sport: 'Esports',
    city: 'Delhi',
    rating: 4.7,
    reviews: 156,
    type: 'Indoor',
    price: '1,100',
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 39,
    name: 'Nexus Gaming Hub',
    sport: 'Esports',
    city: 'Chennai',
    rating: 4.6,
    reviews: 98,
    type: 'Indoor',
    price: '900',
    image: 'https://images.unsplash.com/photo-1560253023-3ec5d502959f?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 40,
    name: 'Respawn Esports Arena',
    sport: 'Esports',
    city: 'Kolkata',
    rating: 4.8,
    reviews: 184,
    type: 'Indoor',
    price: '1,050',
    image: 'https://images.unsplash.com/photo-1600861195091-690c92f1d2cc?auto=format&fit=crop&w=600&q=80'
  }
];
