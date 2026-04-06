const trips = [
  { 
    id: 'last-resort', 
    title: 'The Last Resort Bar', 
    state: 'FL', 
    region: 'Port Orange, FL', 
    category: 'crime', 
    desc: 'The final hangout of Aileen Wuornos before her arrest.', 
    history: 'A notorious biker bar where Aileen Wuornos spent her final days of freedom. It remains a pilgrimage site for those studying her case.', 
    facts: ['Aileen\'s favorite seat is still noted', 'Original artifacts from the era remain', 'Part of the Highway Killer road trip'], 
    related: [] 
  },
  { 
    id: 'clutter-house', 
    title: 'The Clutter Home', 
    state: 'KS', 
    region: 'Holcomb, KS', 
    category: 'crime', 
    desc: 'The site of the murders that inspired "In Cold Blood."', 
    history: 'The 1959 murders of the Clutter family changed the American psyche and led Truman Capote to write his masterpiece.', 
    facts: ['Private residence (view from road)', 'Inspired the true crime genre', 'Site of intense historical interest'], 
    related: [] 
  },
  { 
    id: 'sloss', 
    title: 'Sloss Furnaces', 
    state: 'AL', 
    region: 'Birmingham, AL', 
    category: 'haunted', 
    desc: 'A massive iron plant where the "Graveyard Shift" never truly ended.', 
    history: 'Operating from 1882 to 1971, this industrial giant was known for brutal working conditions.', 
    facts: ['National Historic Landmark', 'Documented shadow figures', 'Iron-ore dust forms strange mist'], 
    related: [] 
  },
  { 
    id: 'eureka', 
    title: 'Eureka Springs', 
    state: 'AR', 
    region: 'Carroll County, AR', 
    category: 'historic', 
    desc: 'A Victorian-era town built on healing springs and deep lore.', 
    history: 'Founded in 1879, Eureka Springs was built around 60 natural cold-water springs.', 
    facts: ['No two streets intersect at 90 degrees', 'Underground tunnels', 'Victorian architecture preserved'], 
    related: ['crescent'] 
  },
  { 
    id: 'skunk-ape-headquarters', 
    title: 'Skunk Ape Research Headquarters', 
    state: 'FL', 
    region: 'Ochopee, FL', 
    category: 'cryptid', 
    desc: 'The official tracking hub for the Everglades’ elusive, foul-smelling swamp monster.', 
    history: 'The Skunk Ape is Florida’s version of Bigfoot—a large, multi-ton hominid said to roam the deep cypress swamps.', 
    facts: ['Named for its pungent, rotting-garbage smell', 'The area has thousands of documented sightings since the 1970s', 'Located in the smallest post office town in the US'], 
    related: [] 
  },
  { 
    id: 'bachelor-grove', 
    title: 'Bachelors Grove Cemetery', 
    state: 'IL', 
    region: 'Midlothian, IL', 
    category: 'cemetery', 
    desc: 'Widely considered the most haunted graveyard in the United States.', 
    history: 'Hidden deep within the Rubio Woods Forest Preserve, this abandoned cemetery was a dumping ground for Chicago Mob victims in the 1920s.', 
    facts: ['Home to the "Madonna of Bachelors Grove" ghost photo', 'Reports of phantom cars on the nearby turnpike', 'Frequent sightings of a two-headed ghost near the pond'], 
    related: [] 
  },
  { 
    id: 'point-pleasant-mothman-statue', 
    title: 'Mothman Statue & Museum', 
    state: 'WV', 
    region: 'Point Pleasant, WV', 
    category: 'cryptid', 
    desc: 'The epicentre of the 1966 winged-man sightings that preceded the Silver Bridge collapse.', 
    history: 'For 13 months, the residents of Point Pleasant were terrorized by a 7-foot creature with glowing red eyes.', 
    facts: ['The "TNT Area" nearby is where the creature was first seen', 'The statue is the only one of its kind in the world', 'Inspired the 1975 book and 2002 film'], 
    related: [] 
  },
  { 
    id: 'aurora-ufo-grave', 
    title: 'Aurora Cemetery UFO Grave', 
    state: 'TX', 
    region: 'Aurora, TX', 
    category: 'alien', 
    desc: 'The resting place of a "pilot not of this world" who crashed his ship in 1897.', 
    history: 'Six years before the Wright Brothers took flight, a cigar-shaped craft reportedly hit a windmill in Aurora.', 
    facts: ['The original headstone featured a carved flying saucer', 'The crash was reported in the Dallas Morning News in 1897', 'The grave site is a protected historical landmark'], 
    related: [] 
  },
  { 
    id: 'winchester-mystery-house-hist', 
    title: 'Winchester Mystery House', 
    state: 'CA', 
    region: 'San Jose, CA', 
    category: 'historic', 
    desc: 'An architectural maze built to confuse the spirits of those killed by the Winchester rifle.', 
    history: 'Sarah Winchester, widow of the rifle magnate, believed she was haunted. A medium told her she must never stop building.', 
    facts: ['The number 13 is repeated throughout the architecture', 'Contains 160 rooms but only one working shower', 'Sarah Winchester never slept in the same bedroom twice'], 
    related: [] 
  },
  { 
    id: 'marfa-lights-main', 
    title: 'Marfa Lights Viewing Center', 
    state: 'TX', 
    region: 'Marfa, TX', 
    category: 'alien', 
    desc: 'Mysterious, dancing orbs of light that have appeared on the desert horizon for over a century.', 
    history: 'First reported by settlers in 1883, these "ghost lights" appear as glowing spheres that change colors and merge.', 
    facts: ['The lights are often the size of basketballs', 'Local legend says they are the spirits of Apache ancestors', 'The state of Texas built a dedicated viewing park for them'], 
    related: [] 
  },
  {
    id: "adx-florence-supermax",
    title: "ADX Florence: The Silent Tomb",
    state: "CO",
    region: "Florence",
    category: "crime",
    safety_rating: "High Caution",
    disclaimers: ["Federal Property. No Trespassing.", "No public access to facility."],
    desc: "The world's most secure 'Supermax' prison, designed for total sensory deprivation.",
    parking_tip: "View the 'Prison Valley' safely from the pull-outs on Skyline Drive in Cañon City."
  },
  {
    id: "bonnie-clyde-joplin-hideout",
    title: "The Historic Joplin Hideout",
    state: "MO",
    region: "Joplin",
    category: "crime",
    booking: { url: "https://www.airbnb.com/rooms/855978867173917336", type: "Airbnb" },
    desc: "The garage apartment where the Barrow Gang's 1933 shootout occurred.",
    parking_tip: "Located at 3347 1/2 Oak Ridge Drive. Please respect the residential neighbors."
  },
  {
    id: "sand-creek-massacre-site",
    title: "Sand Creek: The Sacred Wound",
    state: "CO",
    region: "Eads",
    category: "historic",
    safety_rating: "Safe",
    desc: "The site of the 1864 unprovoked slaughter of peaceful Cheyenne and Arapaho villagers.",
    parking_tip: "Park at the NPS Visitor Center off County Road 54. Stay on the designated trails."
  },
  {
    id: "bird-girl-bonaventure",
    title: "The Bird Girl Ground Zero",
    state: "GA",
    region: "Savannah",
    category: "historic",
    desc: "The original cemetery plot that birthed the 'Midnight in the Garden of Good and Evil' icon.",
    parking_tip: "Visit the Trosdal Plot in Bonaventure Cemetery. Free parking at the main gate."
  },
  {
    id: "wichita-state-crash-site",
    title: "Wichita State Plane Wreckage",
    state: "CO",
    region: "Silver Plume",
    category: "historic",
    safety_rating: "Caution",
    disclaimers: ["Extremely steep hike.", "High altitude (10,800ft).", "Treat wreckage as a cemetery."],
    desc: "The preserved debris field of the 1970 aviation disaster that killed 31 people.",
    parking_tip: "Park at Dry Gulch (I-70 Exit 216) and follow the social trail up Mt. Trelease."
  },
  {
    id: "ludlow-massacre-site",
    title: "The Ludlow Massacre: The Death Pit",
    state: "CO",
    region: "Ludlow",
    category: "historic",
    desc: "A somber granite monument marking the deadliest labor conflict in U.S. history.",
    parking_tip: "Take I-25 Exit 27 and follow the signs west for about half a mile."
  },
  {
    id: "fort-robinson-outbreak",
    title: "Fort Robinson: The Winter Breakout",
    state: "NE",
    region: "Crawford",
    category: "historic",
    booking: { url: "https://outdoornebraska.gov/fortrobinson/", type: "State Park & History" },
    desc: "A military outpost where the Northern Cheyenne chose death over a return to the south."
  },
  {
    id: "kid-curry-grave-linwood",
    title: "The Grave of the Wild Bunch King",
    state: "CO",
    region: "Glenwood Springs",
    category: "crime",
    desc: "The final, unmarked resting place of the most violent member of Butch Cassidy’s Wild Bunch.",
    parking_tip: "Park at the trailhead on 12th St and Bennett Ave. 0.7-mile hike up."
  },
  {
    id: "jesse-james-home-museum",
    title: "Jesse James Home",
    state: "MO",
    region: "St. Joseph",
    category: "crime",
    booking: { phone: "816-232-8206", type: "Museum" },
    desc: "The house where the 'Robin Hood of the West' was shot in the back of the head."
  },
  {
    id: "bonnie-clyde-ambush-site",
    title: "The Hwy 154 Ambush Marker",
    state: "LA",
    region: "Gibsland",
    category: "crime",
    safety_rating: "Safe",
    desc: "The exact coordinates where the most famous crime spree in history came to a violent end.",
    parking_tip: "Located on Hwy 154 south of Gibsland. Small pull-off area directly in front of the monument."
  },
  {
    id: "ambush-museum-gibsland",
    title: "The Ambush Museum",
    state: "LA",
    region: "Gibsland",
    category: "crime",
    desc: "Located in the former café where Bonnie and Clyde bought their final sandwiches."
  },
  {
    id: "crescent-hotel-eureka",
    title: "1886 Crescent Hotel & Spa",
    state: "AR",
    region: "Eureka Springs",
    category: "haunted",
    booking: { url: "https://crescent-hotel.com", phone: "855-725-5720", type: "Hotel & Tours" },
    desc: "A grand hotel that served as a fraudulent cancer hospital under Norman Baker in the 1930s."
  },
  {
    id: "basin-park-hotel",
    title: "The Basin Park Hotel",
    state: "AR",
    region: "Eureka Springs",
    category: "crime",
    booking: { url: "https://basinpark.com", phone: "877-456-9679", type: "Hotel & Tours" },
    desc: "A rugged limestone fortress built into the bluffs, hiding a history of prohibition-era crime."
  },
  {
    id: "arlington-hotel-capone",
    title: "The Arlington Resort Hotel",
    state: "AR",
    region: "Hot Springs",
    category: "crime",
    booking: { url: "https://www.arlingtonhotel.com", phone: "501-623-7771", type: "Hotel" },
    desc: "Al Capone's favorite retreat and the mob's neutral ground in the 1920s and 30s."
  },
  {
    id: "ohio-club-hot-springs",
    title: "The Ohio Club",
    state: "AR",
    region: "Hot Springs",
    category: "crime",
    desc: "The oldest bar in Arkansas and a former front for illegal gambling and mob meetings."
  },
  {
    id: "gangster-museum-america",
    title: "The Gangster Museum of America",
    state: "AR",
    region: "Hot Springs",
    category: "crime",
    desc: "Houses the artifacts of the 'Spa City' era when the city was a massive illegal gambling empire."
  },
  {
    id: "greenwood-cemetery-madden",
    title: "Greenwood Cemetery (Owney Madden)",
    state: "AR",
    region: "Hot Springs",
    category: "cemetery",
    desc: "Contains the grave of Owney 'The Killer' Madden, the New York mobster who ran Hot Springs."
  },
  {
    id: "fordyce-bathhouse",
    title: "Fordyce Bathhouse",
    state: "AR",
    region: "Hot Springs",
    category: "historic",
    desc: "The most grand of the Bathhouse Row buildings, home to the 'Phantom Bather'."
  },
  {
    id: "malco-theatre-hot-springs",
    title: "The Malco Theatre",
    state: "AR",
    region: "Hot Springs",
    category: "haunted",
    desc: "A former vaudeville house where a woman allegedly vanished during an 1880s magic act."
  },
  {
    id: "baker-institute-muscatine",
    title: "The Baker Institute Site",
    state: "IA",
    region: "Muscatine",
    category: "crime",
    desc: "The site of Norman Baker's first fraudulent 'Cancer Hospital'."
  },
  {
    id: "blue-angel-muscatine",
    title: "The Blue Angel of Greenwood",
    state: "IA",
    region: "Muscatine",
    category: "cemetery",
    desc: "A mournful, handless guardian of the dead that casts a lethal omen in local lore."
  },
  {
    id: "tipton-cow-war",
    title: "The Cow War Battleground",
    state: "IA",
    region: "Tipton",
    category: "crime",
    desc: "A forgotten site of civil unrest where a 'medical cult' led to martial law in 1931."
  },
  {
    id: "edinburgh-poor-farm",
    title: "Edinburgh 'Poor Farm'",
    state: "IA",
    region: "Monticello",
    category: "haunted",
    desc: "A massive, decaying stone asylum featuring a 'dying room' and a cemetery of numbered graves."
  },
  {
    id: "black-angel-iowa-city",
    title: "The Black Angel of Oakland",
    state: "IA",
    region: "Iowa City",
    category: "cemetery",
    desc: "A towering bronze omen that turned pitch black under mysterious circumstances."
  },
  {
    id: "villisca-axe-house",
    title: "Villisca Axe Murder House",
    state: "IA",
    region: "Villisca",
    category: "crime",
    booking: { url: "https://www.villiscaiowa.com", phone: "847-977-5601", type: "Tours & Overnight" },
    desc: "The site of a brutal, unsolved 1912 mass murder of an entire family."
  },
  {
    id: "gacy-house-site",
    title: "The Summerdale Death Site",
    state: "IL",
    region: "Norwood Park",
    category: "crime",
    safety_rating: "Caution",
    disclaimers: ["Private residence. View from public sidewalk only."],
    desc: "The exact lot where John Wayne Gacy buried 29 victims in his crawlspace."
  },
  {
    id: "bobby-franks-kidnap-site",
    title: "Bobby Franks Kidnap Site",
    state: "IL",
    region: "Chicago",
    category: "crime",
    desc: "The quiet Kenwood street where Leopold and Loeb snatched their victim in 1924."
  },
  {
    id: "cherry-mine-disaster",
    title: "The Cherry Mine Disaster Site",
    state: "IL",
    region: "Cherry",
    category: "historic",
    desc: "The site of the 1909 fire that trapped 259 men underground. Marked by massive slag heaps."
  },
  {
    id: "st-valentines-massacre",
    title: "St. Valentine's Day Massacre Site",
    state: "IL",
    region: "Chicago",
    category: "crime",
    desc: "The former site of the SMC Cartage Company where Capone's men gunned down rival gang members."
  },
  {
    id: "eastland-disaster-site",
    title: "SS Eastland Disaster Site",
    state: "IL",
    region: "Chicago",
    category: "historic",
    desc: "The river walk spot where the SS Eastland rolled over in 1915, killing 844 passengers."
  },
  {
    id: "holmes-murder-castle",
    title: "H.H. Holmes 'Murder Castle' Site",
    state: "IL",
    region: "Chicago",
    category: "crime",
    desc: "Now an Englewood post office, this is the footprint of America's first serial killer's hotel."
  },
  {
    id: "little-gracie-watson-grave",
    title: "Little Gracie: The Lone Resident",
    state: "GA",
    region: "Savannah",
    category: "cemetery",
    desc: "The most beloved and haunted funerary monument in Georgia."
  },
  {
    id: "mercer-williams-house",
    title: "Mercer-Williams House",
    state: "GA",
    region: "Savannah",
    category: "crime",
    desc: "The site of the 1981 shooting of Danny Hansford and a tragic 1969 impalement."
  },
  {
    id: "marshall-house-savannah",
    title: "The Marshall House: The Surgeon's Floor",
    state: "GA",
    region: "Savannah",
    category: "haunted",
    desc: "A luxury hotel sitting atop a literal mountain of Civil War-era amputated remains."
  },
  {
    id: "wright-square-hanging",
    title: "Wright Square (The Hanging Square)",
    state: "GA",
    region: "Savannah",
    category: "historic",
    desc: "The site of 18th-century gallows. Spanish Moss allegedly will not grow on the trees here."
  },
  {
    id: "moon-river-brewing",
    title: "Moon River Brewing Company",
    state: "GA",
    region: "Savannah",
    category: "haunted",
    desc: "Located in the 1821 City Hotel. Notorious for a violent shadow entity in the basement."
  },
  {
    id: "colonial-park-cemetery",
    title: "Colonial Park Cemetery",
    state: "GA",
    region: "Savannah",
    category: "cemetery",
    desc: "Over 10,000 bodies are buried here, many in mass 'plague pits'."
  },
  {
    id: "snippy-horse-site",
    title: "The Snippy Mutilation Ground Zero",
    state: "CO",
    region: "Alamosa",
    category: "alien",
    desc: "The Harry King Ranch site where the infamous 'Snippy the Horse' mutilation occurred in 1967."
  },
  {
    id: "crestone-ziggurat-vortex",
    title: "The Crestone Ziggurat",
    state: "CO",
    region: "Crestone",
    category: "alien",
    desc: "A Babylonian-style spire sitting atop a confirmed spiritual vortex and UFO hotspot."
  },
  {
    id: "san-luis-valley-lane-6",
    title: "Lane 6: The UFO Highway",
    state: "CO",
    region: "Hooper",
    category: "alien",
    desc: "A dark stretch of road known for intense, close-encounter light anomalies."
  },
  {
    id: "the-t-road",
    title: "County Road T",
    state: "CO",
    region: "Crestone",
    category: "alien",
    desc: "A straight shot across the valley floor where residents report silent triangles following cars."
  },
  {
    id: "kristal-reisinger-site",
    title: "Kristal Reisinger Disappearance Area",
    state: "CO",
    region: "Crestone",
    category: "crime",
    desc: "The off-the-grid town where a young mother vanished after a full moon drum circle in 2016."
  },
  {
    id: "gold-camp-road-tunnels",
    title: "The Tunnels of Gold Camp",
    state: "CO",
    region: "Colorado Springs",
    category: "haunted",
    safety_rating: "Caution",
    desc: "A series of dark, soot-stained tunnels with a heavy reputation for phantom activity."
  },
  {
    id: "emma-crawford-mountain",
    title: "Emma Crawford's Red Mountain",
    state: "CO",
    region: "Manitou Springs",
    category: "haunted",
    desc: "The peak where a coffin became dislodged and slid down into the town during a rainstorm."
  },
  {
    id: "deadman-canyon-espinosa",
    title: "Deadman Canyon",
    state: "CO",
    region: "Hwy 115",
    category: "crime",
    desc: "The site where William Harkins was axed to death by the Espinosa Brothers serial killers."
  },
  {
    id: "victor-hotel-morgue",
    title: "The Victor Hotel",
    state: "CO",
    region: "Victor",
    category: "haunted",
    desc: "A former hospital/morgue where frozen bodies were once stored in the current lobby."
  },
  {
    id: "riverview-cemetery-mine",
    title: "Riverview Cemetery",
    state: "CO",
    region: "Crested Butte",
    category: "historic",
    desc: "The 'Cemetery of the Unlucky,' holding a mass grave of 59 miners from an 1884 explosion."
  },
  {
    id: "sin-city-tunnels",
    title: "The 'Sin City' Tunnels",
    state: "CO",
    region: "Old Colorado City",
    category: "crime",
    desc: "An underground network used to move bootleg liquor and escorts between brothels."
  },
  {
    id: "colorado-state-pen-museum",
    title: "Museum of Colorado Prisons",
    state: "CO",
    region: "Cañon City",
    category: "historic",
    desc: "Located in the Old State Pen, featuring the original gas chamber and the 'Hangman’s House'."
  },
  {
    id: "rmnp-disappearances",
    title: "Rocky Mountain National Park",
    state: "CO",
    region: "Estes Park",
    category: "historic",
    safety_rating: "Caution",
    desc: "A breathtaking landscape holding a dark record of high-altitude disappearances."
  },
  {
    id: "stanley-hotel",
    title: "The Stanley Hotel",
    state: "CO",
    region: "Estes Park",
    category: "haunted",
    desc: "The historic, isolated resort that inspired Stephen King's 'The Shining'."
  },
  {
    id: "missouri-state-pen-jeff-city",
    title: "Missouri State Penitentiary",
    state: "MO",
    region: "Jefferson City",
    category: "crime",
    booking: { url: "https://missouripentours.com", type: "Tours" },
    desc: "Once called 'The Bloodiest 47 Acres in America', site of a massive 1954 riot."
  },
  {
    id: "lemp-mansion",
    title: "The Lemp Mansion",
    state: "MO",
    region: "St. Louis",
    category: "haunted",
    desc: "The opulent home of a brewing dynasty that saw four tragic family suicides."
  },
  {
    id: "trans-allegheny-asylum",
    title: "Trans-Allegheny Lunatic Asylum",
    state: "WV",
    region: "Weston",
    category: "haunted",
    booking: { url: "https://trans-alleghenylunaticasylum.com", type: "Tours" },
    desc: "A colossal gothic psychiatric hospital with a dark history of overcrowding and lobotomies."
  },
  {
    id: "wv-pen-moundsville",
    title: "West Virginia Penitentiary",
    state: "WV",
    region: "Moundsville",
    category: "haunted",
    desc: "Home to the violent 'Sugar Shack' and the infamous 'Shadow Man' entity."
  },
  {
    id: "point-pleasant-mothman",
    title: "Point Pleasant Mothman Site",
    state: "WV",
    region: "Point Pleasant",
    category: "alien",
    desc: "The TNT area bunkers where the Mothman cryptid was repeatedly sighted in 1966."
  },
  {
    id: "waverly-hills-sanatorium",
    title: "Waverly Hills Sanatorium",
    state: "KY",
    region: "Louisville",
    category: "haunted",
    booking: { url: "https://www.therealwaverlyhills.com", type: "Tours" },
    desc: "A massive tuberculosis hospital famous for its 'Body Chute' used to secretly remove the dead."
  },
  {
    id: "ohio-state-reformatory",
    title: "Ohio State Reformatory",
    state: "OH",
    region: "Mansfield",
    category: "haunted",
    booking: { url: "https://www.mrps.org", type: "Tours" },
    desc: "A brutal 'humane' prison that became a hellscape of overcrowding (Shawshank filming site)."
  },
  {
    id: "brushy-mountain-pen",
    title: "Brushy Mountain State Pen",
    state: "TN",
    region: "Petros",
    category: "crime",
    desc: "A maximum-security coal mine prison built to break men, famous for James Earl Ray's escape."
  },
  {
    id: "old-idaho-pen",
    title: "Old Idaho Penitentiary",
    state: "ID",
    region: "Boise",
    category: "historic",
    desc: "Site of the 'Rose Garden' executions and home to serial poisoner 'Lady Bluebeard'."
  },
  {
    id: "eastern-state-pen",
    title: "Eastern State Penitentiary",
    state: "PA",
    region: "Philadelphia",
    category: "historic",
    desc: "The world's first true 'penitentiary,' designed to enforce solitary confinement and madness."
  },
  {
    id: "centralia-mine-fire",
    title: "Centralia Mine Fire",
    state: "PA",
    region: "Centralia",
    category: "historic",
    safety_rating: "Caution",
    desc: "A town abandoned due to an underground coal fire that has been burning since 1962."
  },
  {
    id: "lizzie-borden-house",
    title: "Lizzie Borden House",
    state: "MA",
    region: "Fall River",
    category: "crime",
    booking: { url: "https://lizzie-borden.com", type: "Tours & Overnight" },
    desc: "The exact home where Andrew and Abby Borden were brutally killed with a hatchet in 1892."
  },
  {
    id: "salem-witch-memorial",
    title: "Salem Witch Trials Memorial",
    state: "MA",
    region: "Salem",
    category: "historic",
    desc: "A somber memorial at the site where 19 innocent people were hanged for witchcraft."
  },
  {
    id: "danvers-state-hospital",
    title: "Danvers State Hospital Site",
    state: "MA",
    region: "Danvers",
    category: "haunted",
    desc: "The architectural inspiration for Arkham Asylum; only the imposing gothic facade remains."
  },
  {
    id: "winchester-mystery-house",
    title: "Winchester Mystery House",
    state: "CA",
    region: "San Jose",
    category: "haunted",
    booking: { url: "https://www.winchestermysteryhouse.com", type: "Tours" },
    desc: "A sprawling mansion built continuously for decades to confuse the ghosts of rifle victims."
  },
  {
    id: "alcatraz-island",
    title: "Alcatraz Island",
    state: "CA",
    region: "San Francisco",
    category: "crime",
    desc: "The inescapable island fortress that housed Al Capone and the Birdman."
  },
  {
    id: "black-dahlia-dump-site",
    title: "Black Dahlia Dump Site",
    state: "CA",
    region: "Los Angeles",
    category: "crime",
    desc: "The vacant lot on Norton Ave where Elizabeth Short's bisected body was discovered."
  },
  {
    id: "cecil-hotel",
    title: "The Cecil Hotel",
    state: "CA",
    region: "Los Angeles",
    category: "crime",
    desc: "A Skid Row hotel linked to serial killers Richard Ramirez and Jack Unterweger."
  },
  {
    id: "cielo-drive-manson",
    title: "Cielo Drive Manson Site",
    state: "CA",
    region: "Beverly Hills",
    category: "crime",
    safety_rating: "Caution",
    disclaimers: ["Private road. View from public streets only."],
    desc: "The geographical location of the horrific 1969 Tate Murders by the Manson Family."
  },
  {
    id: "golden-gate-bridge",
    title: "Golden Gate Bridge",
    state: "CA",
    region: "San Francisco",
    category: "historic",
    desc: "A majestic landmark that tragically holds the record as the top suicide site in the world."
  },
  {
    id: "donner-pass-campsite",
    title: "Donner Pass Survival Camp",
    state: "CA",
    region: "Truckee",
    category: "historic",
    desc: "The snowbound encampment where pioneers resorted to cannibalism to survive the winter of 1846."
  },
  {
    id: "jonestown-memorial",
    title: "Jonestown Mass Grave",
    state: "CA",
    region: "Oakland",
    category: "historic",
    desc: "A memorial at Evergreen Cemetery marking the mass grave of over 400 unclaimed Jonestown victims."
  },
  {
    id: "bodie-ghost-town",
    title: "Bodie Ghost Town",
    state: "CA",
    region: "Bridgeport",
    category: "historic",
    desc: "A lawless gold rush town frozen in a state of 'arrested decay'."
  },
  {
    id: "mountain-meadows-massacre",
    title: "Mountain Meadows Massacre",
    state: "UT",
    region: "St. George",
    category: "historic",
    desc: "A grim valley where an emigrant wagon train was slaughtered by local militia in 1857."
  },
  {
    id: "skinwalker-ranch-gate",
    title: "Skinwalker Ranch Gate",
    state: "UT",
    region: "Ballard",
    category: "alien",
    safety_rating: "High Caution",
    disclaimers: ["Heavily guarded private property. Do not cross the gate."],
    desc: "The entrance to the most studied and intensely active paranormal hotspot in America."
  },
  {
    id: "wounded-knee-massacre",
    title: "Wounded Knee Massacre Site",
    state: "SD",
    region: "Pine Ridge",
    category: "historic",
    desc: "The somber mass grave of hundreds of Lakota people murdered by the US Cavalry in 1890."
  },
  {
    id: "marfa-lights-viewing",
    title: "Marfa Lights Viewing Area",
    state: "TX",
    region: "Marfa",
    category: "alien",
    desc: "The official observation deck to witness the unexplained glowing orbs of the Texas desert."
  },
  {
    id: "clutter-family-farm",
    title: "The Clutter Family Farm",
    state: "KS",
    region: "Holcomb",
    category: "crime",
    disclaimers: ["Private property. View from public road only."],
    desc: "The rural home where the brutal murders detailed in Truman Capote's 'In Cold Blood' took place."
  },
  {
    id: "bennington-triangle",
    title: "The Bennington Triangle",
    state: "VT",
    region: "Glastenbury",
    category: "historic",
    desc: "A heavily forested anomaly zone where multiple people vanished without a trace between 1945 and 1950."
  },
  {
    id: "maura-murray-route-112",
    title: "Route 112 (Maura Murray)",
    state: "NH",
    region: "Woodsville",
    category: "crime",
    desc: "The dark, snowy bend in the road where nursing student Maura Murray crashed her car and vanished."
  },
  {
    id: "jimmy-hoffa-red-fox",
    title: "Machus Red Fox Site",
    state: "MI",
    region: "Bloomfield Township",
    category: "crime",
    desc: "The restaurant parking lot where union boss Jimmy Hoffa was last seen before vanishing forever."
  },
  {
    id: "fox-hollow-farm",
    title: "Fox Hollow Farm",
    state: "IN",
    region: "Carmel",
    category: "crime",
    disclaimers: ["Private Property."],
    desc: "The estate of serial killer Herb Baumeister, where thousands of bone fragments were recovered."
  },
  {
    id: "the-last-resort-bar-wuornos",
    title: "The Last Resort",
    state: "FL",
    region: "Port Orange",
    category: "crime",
    desc: "The gritty biker bar where serial killer Aileen Wuornos drank her final beer before her arrest."
  },
  {
    id: "wuornos-dump-site",
    title: "Wuornos Dump Site (Richard Mallory)",
    state: "FL",
    region: "Volusia County",
    category: "crime",
    desc: "The desolate woodland area off the highway where Aileen Wuornos hid her first victim."
  },
  {
    id: "st-augustine-lighthouse",
    title: "St. Augustine Lighthouse",
    state: "FL",
    region: "St. Augustine",
    category: "haunted",
    booking: { url: "https://www.staugustinelighthouse.org", phone: "904-829-0745", type: "Tours" },
    desc: "A towering beacon haunted by the spirits of young girls who drowned during its construction."
  },
  {
    id: "st-louis-cemetery-one",
    title: "St. Louis Cemetery No. 1",
    state: "LA",
    region: "New Orleans",
    category: "cemetery",
    desc: "The legendary above-ground necropolis holding the tomb of Voodoo Queen Marie Laveau."
  },
  {
    id: "lalaurie-mansion",
    title: "LaLaurie Mansion",
    state: "LA",
    region: "New Orleans",
    category: "haunted",
    desc: "The site of Madame LaLaurie's horrific attic torture chamber discovered during an 1834 fire."
  },
  {
    id: "myrtles-plantation-hist",
    title: "The Myrtles Plantation",
    state: "LA",
    region: "St. Francisville",
    category: "haunted",
    booking: { url: "https://www.myrtlesplantation.com", phone: "225-635-6277", type: "Hotel" },
    desc: "Known as one of America's most haunted homes, holding the legendary 'Chloe' mirror."
  },
  {
    id: "seattle-underground",
    title: "The Seattle Underground",
    state: "WA",
    region: "Seattle",
    category: "historic",
    desc: "A subterranean network of abandoned 19th-century storefronts buried after the Great Fire."
  },
  {
    id: "ted-bundy-issaquah",
    title: "Bundy Dump Site (Issaquah)",
    state: "WA",
    region: "Issaquah",
    category: "crime",
    desc: "The wooded hillside near Taylor Mountain where Ted Bundy discarded several of his victims."
  },
  {
    id: "amityville-horror-house",
    title: "Amityville Horror House",
    state: "NY",
    region: "Amityville",
    category: "crime",
    disclaimers: ["Private Residence. View from the street only."],
    desc: "The site of the brutal 1974 DeFeo family murders that spawned a paranormal empire."
  },
  {
    id: "lost-dutchman-mine",
    title: "Superstition Mountains (Lost Dutchman)",
    state: "AZ",
    region: "Apache Junction",
    category: "historic",
    safety_rating: "Caution",
    desc: "A treacherous mountain range known for a legendary lost gold mine and modern-day disappearances."
  }
];
