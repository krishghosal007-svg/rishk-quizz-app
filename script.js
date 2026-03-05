const quizCategories = [
    {
        "id": "cat_1",
        "name": "General Knowledge",
        "questions": [
            {
                "question": "What is the capital of France?",
                "options": [
                    "London",
                    "Berlin",
                    "Paris",
                    "Madrid"
                ],
                "correctAnswer": 2
            },
            {
                "question": "Which planet is known as the Red Planet?",
                "options": [
                    "Mars",
                    "Jupiter",
                    "Venus",
                    "Saturn"
                ],
                "correctAnswer": 0
            },
            {
                "question": "Who painted the Mona Lisa?",
                "options": [
                    "Vincent van Gogh",
                    "Pablo Picasso",
                    "Leonardo da Vinci",
                    "Claude Monet"
                ],
                "correctAnswer": 2
            },
            {
                "question": "In what year did the Titanic sink?",
                "options": [
                    "1912",
                    "1905",
                    "1898",
                    "1923"
                ],
                "correctAnswer": 0
            },
            {
                "question": "What is the largest ocean on Earth?",
                "options": [
                    "Atlantic",
                    "Indian",
                    "Arctic",
                    "Pacific"
                ],
                "correctAnswer": 3
            }
        ]
    },
    {
        "id": "cat_2",
        "name": "Science",
        "questions": [
            {
                "question": "What is the chemical symbol for Gold?",
                "options": [
                    "Au",
                    "Ag",
                    "Fe",
                    "Cu"
                ],
                "correctAnswer": 0
            },
            {
                "question": "What is the powerhouse of the cell?",
                "options": [
                    "Nucleus",
                    "Ribosome",
                    "Mitochondria",
                    "Golgi Body"
                ],
                "correctAnswer": 2
            },
            {
                "question": "What gas do plants absorb from the atmosphere?",
                "options": [
                    "Oxygen",
                    "Carbon Dioxide",
                    "Nitrogen",
                    "Methane"
                ],
                "correctAnswer": 1
            },
            {
                "question": "What is the hardest natural substance on Earth?",
                "options": [
                    "Gold",
                    "Iron",
                    "Diamond",
                    "Quartz"
                ],
                "correctAnswer": 2
            },
            {
                "question": "Who developed the theory of relativity?",
                "options": [
                    "Isaac Newton",
                    "Albert Einstein",
                    "Nikola Tesla",
                    "Marie Curie"
                ],
                "correctAnswer": 1
            }
        ]
    },
    {
        "id": "cat_3",
        "name": "Mathematics",
        "questions": [
            {
                "question": "What is the value of Pi to two decimal places?",
                "options": [
                    "3.12",
                    "3.14",
                    "3.16",
                    "3.18"
                ],
                "correctAnswer": 1
            },
            {
                "question": "What is 15% of 200?",
                "options": [
                    "20",
                    "25",
                    "30",
                    "35"
                ],
                "correctAnswer": 2
            },
            {
                "question": "What is the square root of 144?",
                "options": [
                    "10",
                    "12",
                    "14",
                    "16"
                ],
                "correctAnswer": 1
            },
            {
                "question": "How many degrees are in a right angle?",
                "options": [
                    "45",
                    "90",
                    "180",
                    "360"
                ],
                "correctAnswer": 1
            },
            {
                "question": "What is the formula for the area of a circle?",
                "options": [
                    "pi*r",
                    "2*pi*r",
                    "pi*r^2",
                    "pi*d"
                ],
                "correctAnswer": 2
            }
        ]
    },
    {
        "id": "cat_4",
        "name": "History",
        "questions": [
            {
                "question": "Who was the first President of the United States?",
                "options": [
                    "Thomas Jefferson",
                    "John Adams",
                    "George Washington",
                    "James Madison"
                ],
                "correctAnswer": 2
            },
            {
                "question": "In which year did World War II end?",
                "options": [
                    "1941",
                    "1943",
                    "1945",
                    "1947"
                ],
                "correctAnswer": 2
            },
            {
                "question": "Who built the Great Wall of China?",
                "options": [
                    "Qin Shi Huang",
                    "Sun Tzu",
                    "Confucius",
                    "Laozi"
                ],
                "correctAnswer": 0
            },
            {
                "question": "The French Revolution began in what year?",
                "options": [
                    "1776",
                    "1789",
                    "1804",
                    "1812"
                ],
                "correctAnswer": 1
            },
            {
                "question": "Who was the first female Prime Minister of the UK?",
                "options": [
                    "Theresa May",
                    "Margaret Thatcher",
                    "Angela Merkel",
                    "Indira Gandhi"
                ],
                "correctAnswer": 1
            }
        ]
    },
    {
        "id": "cat_5",
        "name": "Geography",
        "questions": [
            {
                "question": "What is the capital of Australia?",
                "options": [
                    "Sydney",
                    "Melbourne",
                    "Canberra",
                    "Perth"
                ],
                "correctAnswer": 2
            },
            {
                "question": "Which is the longest river in the world?",
                "options": [
                    "Amazon",
                    "Nile",
                    "Yangtze",
                    "Mississippi"
                ],
                "correctAnswer": 1
            },
            {
                "question": "What is the smallest country in the world?",
                "options": [
                    "Monaco",
                    "San Marino",
                    "Vatican City",
                    "Liechtenstein"
                ],
                "correctAnswer": 2
            },
            {
                "question": "Mount Everest is located in which mountain range?",
                "options": [
                    "Andes",
                    "Rockies",
                    "Alps",
                    "Himalayas"
                ],
                "correctAnswer": 3
            },
            {
                "question": "Which continent is the Sahara Desert located on?",
                "options": [
                    "Asia",
                    "Africa",
                    "South America",
                    "Australia"
                ],
                "correctAnswer": 1
            }
        ]
    },
    {
        "id": "cat_6",
        "name": "Literature",
        "questions": [
            {
                "question": "Who wrote 'Romeo and Juliet'?",
                "options": [
                    "Charles Dickens",
                    "William Shakespeare",
                    "Jane Austen",
                    "Mark Twain"
                ],
                "correctAnswer": 1
            },
            {
                "question": "What is the pen name of Samuel Langhorne Clemens?",
                "options": [
                    "George Orwell",
                    "Mark Twain",
                    "Dr. Seuss",
                    "Lewis Carroll"
                ],
                "correctAnswer": 1
            },
            {
                "question": "In which novel does the character 'Holden Caulfield' appear?",
                "options": [
                    "The Great Gatsby",
                    "The Catcher in the Rye",
                    "To Kill a Mockingbird",
                    "1984"
                ],
                "correctAnswer": 1
            },
            {
                "question": "Who wrote 'The Odyssey'?",
                "options": [
                    "Sophocles",
                    "Homer",
                    "Virgil",
                    "Ovid"
                ],
                "correctAnswer": 1
            },
            {
                "question": "What is the first book of the New Testament?",
                "options": [
                    "Genesis",
                    "Matthew",
                    "Mark",
                    "Luke"
                ],
                "correctAnswer": 1
            }
        ]
    },
    {
        "id": "cat_7",
        "name": "Art & Architecture",
        "questions": [
            {
                "question": "Who painted 'The Starry Night'?",
                "options": [
                    "Vincent van Gogh",
                    "Claude Monet",
                    "Leonardo da Vinci",
                    "Pablo Picasso"
                ],
                "correctAnswer": 0
            },
            {
                "question": "In what city would you find the Colosseum?",
                "options": [
                    "Athens",
                    "Rome",
                    "Paris",
                    "London"
                ],
                "correctAnswer": 1
            },
            {
                "question": "Who designed the Eiffel Tower?",
                "options": [
                    "Gustave Eiffel",
                    "Le Corbusier",
                    "Antoni Gaudi",
                    "Frank Lloyd Wright"
                ],
                "correctAnswer": 0
            },
            {
                "question": "What art movement was Salvador Dali associated with?",
                "options": [
                    "Impressionism",
                    "Cubism",
                    "Surrealism",
                    "Pop Art"
                ],
                "correctAnswer": 2
            },
            {
                "question": "Where is the Louvre museum located?",
                "options": [
                    "Berlin",
                    "London",
                    "Madrid",
                    "Paris"
                ],
                "correctAnswer": 3
            }
        ]
    },
    {
        "id": "cat_8",
        "name": "Music",
        "questions": [
            {
                "question": "Who is known as the 'King of Pop'?",
                "options": [
                    "Elvis Presley",
                    "Michael Jackson",
                    "Prince",
                    "Freddie Mercury"
                ],
                "correctAnswer": 1
            },
            {
                "question": "How many keys are on a standard piano?",
                "options": [
                    "66",
                    "76",
                    "88",
                    "92"
                ],
                "correctAnswer": 2
            },
            {
                "question": "Which instrument does a flautist play?",
                "options": [
                    "Flute",
                    "Violin",
                    "Piano",
                    "Trumpet"
                ],
                "correctAnswer": 0
            },
            {
                "question": "What was Beethoven's first name?",
                "options": [
                    "Wolfgang",
                    "Ludwig",
                    "Johann",
                    "Franz"
                ],
                "correctAnswer": 1
            },
            {
                "question": "Who sang 'Bohemian Rhapsody'?",
                "options": [
                    "The Rolling Stones",
                    "The Beatles",
                    "Queen",
                    "Led Zeppelin"
                ],
                "correctAnswer": 2
            }
        ]
    },
    {
        "id": "cat_9",
        "name": "Movies",
        "questions": [
            {
                "question": "Who directed 'Jurassic Park'?",
                "options": [
                    "George Lucas",
                    "Steven Spielberg",
                    "James Cameron",
                    "Christopher Nolan"
                ],
                "correctAnswer": 1
            },
            {
                "question": "What is the name of the hobbit played by Elijah Wood in 'The Lord of the Rings'?",
                "options": [
                    "Sam",
                    "Pippin",
                    "Merry",
                    "Frodo"
                ],
                "correctAnswer": 3
            },
            {
                "question": "Which movie features the quote 'May the Force be with you'?",
                "options": [
                    "Star Trek",
                    "Star Wars",
                    "Matrix",
                    "E.T."
                ],
                "correctAnswer": 1
            },
            {
                "question": "Who played Jack in 'Titanic'?",
                "options": [
                    "Brad Pitt",
                    "Tom Cruise",
                    "Leonardo DiCaprio",
                    "Johnny Depp"
                ],
                "correctAnswer": 2
            },
            {
                "question": "What is the highest-grossing film of all time (as of 2023)?",
                "options": [
                    "Avatar",
                    "Avengers: Endgame",
                    "Titanic",
                    "Star Wars: The Force Awakens"
                ],
                "correctAnswer": 0
            }
        ]
    },
    {
        "id": "cat_10",
        "name": "Television",
        "questions": [
            {
                "question": "What is the longest-running animated sitcom in the US?",
                "options": [
                    "Family Guy",
                    "South Park",
                    "The Simpsons",
                    "Bob's Burgers"
                ],
                "correctAnswer": 2
            },
            {
                "question": "Who played Michael Scott in 'The Office' (US)?",
                "options": [
                    "Steve Carell",
                    "Rainn Wilson",
                    "John Krasinski",
                    "Ed Helms"
                ],
                "correctAnswer": 0
            },
            {
                "question": "In 'Game of Thrones', what is the name of Jon Snow's direwolf?",
                "options": [
                    "Grey Wind",
                    "Lady",
                    "Nymeria",
                    "Ghost"
                ],
                "correctAnswer": 3
            },
            {
                "question": "What city is the setting for 'Breaking Bad'?",
                "options": [
                    "Chicago",
                    "Albuquerque",
                    "Los Angeles",
                    "Houston"
                ],
                "correctAnswer": 1
            },
            {
                "question": "What streaming service produced 'Stranger Things'?",
                "options": [
                    "Hulu",
                    "Amazon Prime",
                    "Netflix",
                    "Disney+"
                ],
                "correctAnswer": 2
            }
        ]
    },
    {
        "id": "cat_11",
        "name": "Sports",
        "questions": [
            {
                "question": "In which sport would you perform a slam dunk?",
                "options": [
                    "Football",
                    "Tennis",
                    "Basketball",
                    "Volleyball"
                ],
                "correctAnswer": 2
            },
            {
                "question": "How many players are on a standard soccer team on the field?",
                "options": [
                    "9",
                    "10",
                    "11",
                    "12"
                ],
                "correctAnswer": 2
            },
            {
                "question": "Who has won the most Grand Slam titles in men's tennis?",
                "options": [
                    "Roger Federer",
                    "Rafael Nadal",
                    "Novak Djokovic",
                    "Pete Sampras"
                ],
                "correctAnswer": 2
            },
            {
                "question": "What is the diameter of a standard basketball hoop in inches?",
                "options": [
                    "16",
                    "18",
                    "20",
                    "22"
                ],
                "correctAnswer": 1
            },
            {
                "question": "Which country hosts the Wimbledon tennis tournament?",
                "options": [
                    "USA",
                    "France",
                    "Australia",
                    "UK"
                ],
                "correctAnswer": 3
            }
        ]
    },
    {
        "id": "cat_12",
        "name": "Technology",
        "questions": [
            {
                "question": "Who is the co-founder of Microsoft?",
                "options": [
                    "Steve Jobs",
                    "Bill Gates",
                    "Mark Zuckerberg",
                    "Larry Page"
                ],
                "correctAnswer": 1
            },
            {
                "question": "What does CPU stand for?",
                "options": [
                    "Central Process Unit",
                    "Computer Personal Unit",
                    "Central Processing Unit",
                    "Central Processor Unit"
                ],
                "correctAnswer": 2
            },
            {
                "question": "Which company created the iPhone?",
                "options": [
                    "Samsung",
                    "Google",
                    "Apple",
                    "Nokia"
                ],
                "correctAnswer": 2
            },
            {
                "question": "What does 'HTTP' stand for?",
                "options": [
                    "HyperText Transfer Protocol",
                    "HyperText Transmission Protocol",
                    "HyperText Transfer Program",
                    "HyperText Transmission Program"
                ],
                "correctAnswer": 0
            },
            {
                "question": "Who invented the World Wide Web?",
                "options": [
                    "Alan Turing",
                    "Tim Berners-Lee",
                    "Vint Cerf",
                    "Marc Andreessen"
                ],
                "correctAnswer": 1
            }
        ]
    },
    {
        "id": "cat_13",
        "name": "Programming",
        "questions": [
            {
                "question": "Which language is primarily used for web browser scripting?",
                "options": [
                    "Python",
                    "Java",
                    "JavaScript",
                    "C++"
                ],
                "correctAnswer": 2
            },
            {
                "question": "What does CSS stand for?",
                "options": [
                    "Computer Style Sheets",
                    "Cascading Style Sheets",
                    "Creative Style Sheets",
                    "Colorful Style Sheets"
                ],
                "correctAnswer": 1
            },
            {
                "question": "In Python, which keyword is used to define a function?",
                "options": [
                    "func",
                    "def",
                    "function",
                    "define"
                ],
                "correctAnswer": 1
            },
            {
                "question": "What does SQL stand for?",
                "options": [
                    "Structured Query Language",
                    "Strong Question Language",
                    "Structured Question Language",
                    "Strong Query Language"
                ],
                "correctAnswer": 0
            },
            {
                "question": "Which programming language uses a 'turtle' module for graphics?",
                "options": [
                    "Java",
                    "C#",
                    "Python",
                    "Ruby"
                ],
                "correctAnswer": 2
            }
        ]
    },
    {
        "id": "cat_14",
        "name": "Computer Science",
        "questions": [
            {
                "question": "What is a finite sequence of well-defined instructions to solve a problem?",
                "options": [
                    "Data Structure",
                    "Algorithm",
                    "Variable",
                    "Loop"
                ],
                "correctAnswer": 1
            },
            {
                "question": "In binary, what is the value of 101?",
                "options": [
                    "3",
                    "4",
                    "5",
                    "6"
                ],
                "correctAnswer": 2
            },
            {
                "question": "What is the Big-O notation for binary search?",
                "options": [
                    "O(1)",
                    "O(n)",
                    "O(n^2)",
                    "O(log n)"
                ],
                "correctAnswer": 3
            },
            {
                "question": "Which of these is a LIFO data structure?",
                "options": [
                    "Queue",
                    "Stack",
                    "Tree",
                    "Graph"
                ],
                "correctAnswer": 1
            },
            {
                "question": "What does API stand for?",
                "options": [
                    "Application Programming Interface",
                    "Advanced Programming Interface",
                    "Application Process Interface",
                    "Advanced Process Interface"
                ],
                "correctAnswer": 0
            }
        ]
    },
    {
        "id": "cat_15",
        "name": "Biology",
        "questions": [
            {
                "question": "What is the largest organ in the human body?",
                "options": [
                    "Heart",
                    "Liver",
                    "Skin",
                    "Lungs"
                ],
                "correctAnswer": 2
            },
            {
                "question": "What molecule carries genetic instructions?",
                "options": [
                    "RNA",
                    "DNA",
                    "Protein",
                    "Lipid"
                ],
                "correctAnswer": 1
            },
            {
                "question": "What is the process by which plants make food?",
                "options": [
                    "Respiration",
                    "Digestion",
                    "Photosynthesis",
                    "Fermentation"
                ],
                "correctAnswer": 2
            },
            {
                "question": "How many chromosomes do human cells typically have?",
                "options": [
                    "23",
                    "46",
                    "48",
                    "92"
                ],
                "correctAnswer": 1
            },
            {
                "question": "Which part of the brain controls balance?",
                "options": [
                    "Cerebrum",
                    "Cerebellum",
                    "Brainstem",
                    "Thalamus"
                ],
                "correctAnswer": 1
            }
        ]
    },
    {
        "id": "cat_16",
        "name": "Chemistry",
        "questions": [
            {
                "question": "What is a fundamental concept in Chemistry?",
                "options": [
                    "Core Theory",
                    "Basic Concept",
                    "Key Principle",
                    "Main Idea"
                ],
                "correctAnswer": 2
            },
            {
                "question": "Which term is commonly used in Chemistry?",
                "options": [
                    "Element A",
                    "Variable X",
                    "Standard Format",
                    "Primary Function"
                ],
                "correctAnswer": 1
            },
            {
                "question": "Who is a prominent historical figure in Chemistry?",
                "options": [
                    "Leading Expert",
                    "Famous Pioneer",
                    "Renowned Scholar",
                    "Key Innovator"
                ],
                "correctAnswer": 1
            },
            {
                "question": "What is a modern challenge studied in Chemistry?",
                "options": [
                    "Data Scaling",
                    "Resource Limits",
                    "System Integration",
                    "Future Adaptation"
                ],
                "correctAnswer": 3
            },
            {
                "question": "Which tool or method is synonymous with Chemistry?",
                "options": [
                    "Analyzer Tool",
                    "Standard Metric",
                    "Core Framework",
                    "Primary Index"
                ],
                "correctAnswer": 2
            }
        ]
    },
    {
        "id": "cat_17",
        "name": "Physics",
        "questions": [
            {
                "question": "What is a fundamental concept in Physics?",
                "options": [
                    "Core Theory",
                    "Basic Concept",
                    "Key Principle",
                    "Main Idea"
                ],
                "correctAnswer": 2
            },
            {
                "question": "Which term is commonly used in Physics?",
                "options": [
                    "Element A",
                    "Variable X",
                    "Standard Format",
                    "Primary Function"
                ],
                "correctAnswer": 1
            },
            {
                "question": "Who is a prominent historical figure in Physics?",
                "options": [
                    "Leading Expert",
                    "Famous Pioneer",
                    "Renowned Scholar",
                    "Key Innovator"
                ],
                "correctAnswer": 1
            },
            {
                "question": "What is a modern challenge studied in Physics?",
                "options": [
                    "Data Scaling",
                    "Resource Limits",
                    "System Integration",
                    "Future Adaptation"
                ],
                "correctAnswer": 3
            },
            {
                "question": "Which tool or method is synonymous with Physics?",
                "options": [
                    "Analyzer Tool",
                    "Standard Metric",
                    "Core Framework",
                    "Primary Index"
                ],
                "correctAnswer": 2
            }
        ]
    },
    {
        "id": "cat_18",
        "name": "Astronomy",
        "questions": [
            {
                "question": "Which is the hottest planet in our solar system?",
                "options": [
                    "Venus",
                    "Mercury",
                    "Mars",
                    "Jupiter"
                ],
                "correctAnswer": 0
            },
            {
                "question": "What is the closest star to Earth (excl. Sun)?",
                "options": [
                    "Sirius",
                    "Alpha Centauri A",
                    "Proxima Centauri",
                    "Betelgeuse"
                ],
                "correctAnswer": 2
            },
            {
                "question": "Who was the first person in space?",
                "options": [
                    "Yuri Gagarin",
                    "Neil Armstrong",
                    "Buzz Aldrin",
                    "John Glenn"
                ],
                "correctAnswer": 0
            },
            {
                "question": "What galaxy is Earth located in?",
                "options": [
                    "Andromeda",
                    "Triangulum",
                    "Milky Way",
                    "Sombrero"
                ],
                "correctAnswer": 2
            },
            {
                "question": "What do you call a star that suddenly explodes?",
                "options": [
                    "Quasar",
                    "Pulsar",
                    "Black Hole",
                    "Supernova"
                ],
                "correctAnswer": 3
            }
        ]
    },
    {
        "id": "cat_19",
        "name": "Mythology",
        "questions": [
            {
                "question": "Who is the king of the gods in Greek mythology?",
                "options": [
                    "Poseidon",
                    "Hades",
                    "Apollo",
                    "Zeus"
                ],
                "correctAnswer": 3
            },
            {
                "question": "In Norse mythology, who is the god of thunder?",
                "options": [
                    "Odin",
                    "Loki",
                    "Thor",
                    "Freyr"
                ],
                "correctAnswer": 2
            },
            {
                "question": "Who turned everything he touched to gold?",
                "options": [
                    "Midas",
                    "Hercules",
                    "Achilles",
                    "Perseus"
                ],
                "correctAnswer": 0
            },
            {
                "question": "What creature is half man and half horse?",
                "options": [
                    "Minotaur",
                    "Centaur",
                    "Satyr",
                    "Griffin"
                ],
                "correctAnswer": 1
            },
            {
                "question": "Who is the Roman god of war?",
                "options": [
                    "Ares",
                    "Mars",
                    "Jupiter",
                    "Apollo"
                ],
                "correctAnswer": 1
            }
        ]
    },
    {
        "id": "cat_20",
        "name": "Politics",
        "questions": [
            {
                "question": "What is a fundamental concept in Politics?",
                "options": [
                    "Core Theory",
                    "Basic Concept",
                    "Key Principle",
                    "Main Idea"
                ],
                "correctAnswer": 2
            },
            {
                "question": "Which term is commonly used in Politics?",
                "options": [
                    "Element A",
                    "Variable X",
                    "Standard Format",
                    "Primary Function"
                ],
                "correctAnswer": 1
            },
            {
                "question": "Who is a prominent historical figure in Politics?",
                "options": [
                    "Leading Expert",
                    "Famous Pioneer",
                    "Renowned Scholar",
                    "Key Innovator"
                ],
                "correctAnswer": 1
            },
            {
                "question": "What is a modern challenge studied in Politics?",
                "options": [
                    "Data Scaling",
                    "Resource Limits",
                    "System Integration",
                    "Future Adaptation"
                ],
                "correctAnswer": 3
            },
            {
                "question": "Which tool or method is synonymous with Politics?",
                "options": [
                    "Analyzer Tool",
                    "Standard Metric",
                    "Core Framework",
                    "Primary Index"
                ],
                "correctAnswer": 2
            }
        ]
    },
    {
        "id": "cat_21",
        "name": "Economics",
        "questions": [
            {
                "question": "What is a fundamental concept in Economics?",
                "options": [
                    "Core Theory",
                    "Basic Concept",
                    "Key Principle",
                    "Main Idea"
                ],
                "correctAnswer": 2
            },
            {
                "question": "Which term is commonly used in Economics?",
                "options": [
                    "Element A",
                    "Variable X",
                    "Standard Format",
                    "Primary Function"
                ],
                "correctAnswer": 1
            },
            {
                "question": "Who is a prominent historical figure in Economics?",
                "options": [
                    "Leading Expert",
                    "Famous Pioneer",
                    "Renowned Scholar",
                    "Key Innovator"
                ],
                "correctAnswer": 1
            },
            {
                "question": "What is a modern challenge studied in Economics?",
                "options": [
                    "Data Scaling",
                    "Resource Limits",
                    "System Integration",
                    "Future Adaptation"
                ],
                "correctAnswer": 3
            },
            {
                "question": "Which tool or method is synonymous with Economics?",
                "options": [
                    "Analyzer Tool",
                    "Standard Metric",
                    "Core Framework",
                    "Primary Index"
                ],
                "correctAnswer": 2
            }
        ]
    },
    {
        "id": "cat_22",
        "name": "Philosophy",
        "questions": [
            {
                "question": "What is a fundamental concept in Philosophy?",
                "options": [
                    "Core Theory",
                    "Basic Concept",
                    "Key Principle",
                    "Main Idea"
                ],
                "correctAnswer": 2
            },
            {
                "question": "Which term is commonly used in Philosophy?",
                "options": [
                    "Element A",
                    "Variable X",
                    "Standard Format",
                    "Primary Function"
                ],
                "correctAnswer": 1
            },
            {
                "question": "Who is a prominent historical figure in Philosophy?",
                "options": [
                    "Leading Expert",
                    "Famous Pioneer",
                    "Renowned Scholar",
                    "Key Innovator"
                ],
                "correctAnswer": 1
            },
            {
                "question": "What is a modern challenge studied in Philosophy?",
                "options": [
                    "Data Scaling",
                    "Resource Limits",
                    "System Integration",
                    "Future Adaptation"
                ],
                "correctAnswer": 3
            },
            {
                "question": "Which tool or method is synonymous with Philosophy?",
                "options": [
                    "Analyzer Tool",
                    "Standard Metric",
                    "Core Framework",
                    "Primary Index"
                ],
                "correctAnswer": 2
            }
        ]
    },
    {
        "id": "cat_23",
        "name": "Psychology",
        "questions": [
            {
                "question": "What is a fundamental concept in Psychology?",
                "options": [
                    "Core Theory",
                    "Basic Concept",
                    "Key Principle",
                    "Main Idea"
                ],
                "correctAnswer": 2
            },
            {
                "question": "Which term is commonly used in Psychology?",
                "options": [
                    "Element A",
                    "Variable X",
                    "Standard Format",
                    "Primary Function"
                ],
                "correctAnswer": 1
            },
            {
                "question": "Who is a prominent historical figure in Psychology?",
                "options": [
                    "Leading Expert",
                    "Famous Pioneer",
                    "Renowned Scholar",
                    "Key Innovator"
                ],
                "correctAnswer": 1
            },
            {
                "question": "What is a modern challenge studied in Psychology?",
                "options": [
                    "Data Scaling",
                    "Resource Limits",
                    "System Integration",
                    "Future Adaptation"
                ],
                "correctAnswer": 3
            },
            {
                "question": "Which tool or method is synonymous with Psychology?",
                "options": [
                    "Analyzer Tool",
                    "Standard Metric",
                    "Core Framework",
                    "Primary Index"
                ],
                "correctAnswer": 2
            }
        ]
    },
    {
        "id": "cat_24",
        "name": "Sociology",
        "questions": [
            {
                "question": "What is a fundamental concept in Sociology?",
                "options": [
                    "Core Theory",
                    "Basic Concept",
                    "Key Principle",
                    "Main Idea"
                ],
                "correctAnswer": 2
            },
            {
                "question": "Which term is commonly used in Sociology?",
                "options": [
                    "Element A",
                    "Variable X",
                    "Standard Format",
                    "Primary Function"
                ],
                "correctAnswer": 1
            },
            {
                "question": "Who is a prominent historical figure in Sociology?",
                "options": [
                    "Leading Expert",
                    "Famous Pioneer",
                    "Renowned Scholar",
                    "Key Innovator"
                ],
                "correctAnswer": 1
            },
            {
                "question": "What is a modern challenge studied in Sociology?",
                "options": [
                    "Data Scaling",
                    "Resource Limits",
                    "System Integration",
                    "Future Adaptation"
                ],
                "correctAnswer": 3
            },
            {
                "question": "Which tool or method is synonymous with Sociology?",
                "options": [
                    "Analyzer Tool",
                    "Standard Metric",
                    "Core Framework",
                    "Primary Index"
                ],
                "correctAnswer": 2
            }
        ]
    },
    {
        "id": "cat_25",
        "name": "Business",
        "questions": [
            {
                "question": "What is a fundamental concept in Business?",
                "options": [
                    "Core Theory",
                    "Basic Concept",
                    "Key Principle",
                    "Main Idea"
                ],
                "correctAnswer": 2
            },
            {
                "question": "Which term is commonly used in Business?",
                "options": [
                    "Element A",
                    "Variable X",
                    "Standard Format",
                    "Primary Function"
                ],
                "correctAnswer": 1
            },
            {
                "question": "Who is a prominent historical figure in Business?",
                "options": [
                    "Leading Expert",
                    "Famous Pioneer",
                    "Renowned Scholar",
                    "Key Innovator"
                ],
                "correctAnswer": 1
            },
            {
                "question": "What is a modern challenge studied in Business?",
                "options": [
                    "Data Scaling",
                    "Resource Limits",
                    "System Integration",
                    "Future Adaptation"
                ],
                "correctAnswer": 3
            },
            {
                "question": "Which tool or method is synonymous with Business?",
                "options": [
                    "Analyzer Tool",
                    "Standard Metric",
                    "Core Framework",
                    "Primary Index"
                ],
                "correctAnswer": 2
            }
        ]
    },
    {
        "id": "cat_26",
        "name": "Marketing",
        "questions": [
            {
                "question": "What is a fundamental concept in Marketing?",
                "options": [
                    "Core Theory",
                    "Basic Concept",
                    "Key Principle",
                    "Main Idea"
                ],
                "correctAnswer": 2
            },
            {
                "question": "Which term is commonly used in Marketing?",
                "options": [
                    "Element A",
                    "Variable X",
                    "Standard Format",
                    "Primary Function"
                ],
                "correctAnswer": 1
            },
            {
                "question": "Who is a prominent historical figure in Marketing?",
                "options": [
                    "Leading Expert",
                    "Famous Pioneer",
                    "Renowned Scholar",
                    "Key Innovator"
                ],
                "correctAnswer": 1
            },
            {
                "question": "What is a modern challenge studied in Marketing?",
                "options": [
                    "Data Scaling",
                    "Resource Limits",
                    "System Integration",
                    "Future Adaptation"
                ],
                "correctAnswer": 3
            },
            {
                "question": "Which tool or method is synonymous with Marketing?",
                "options": [
                    "Analyzer Tool",
                    "Standard Metric",
                    "Core Framework",
                    "Primary Index"
                ],
                "correctAnswer": 2
            }
        ]
    },
    {
        "id": "cat_27",
        "name": "Finance",
        "questions": [
            {
                "question": "What is a fundamental concept in Finance?",
                "options": [
                    "Core Theory",
                    "Basic Concept",
                    "Key Principle",
                    "Main Idea"
                ],
                "correctAnswer": 2
            },
            {
                "question": "Which term is commonly used in Finance?",
                "options": [
                    "Element A",
                    "Variable X",
                    "Standard Format",
                    "Primary Function"
                ],
                "correctAnswer": 1
            },
            {
                "question": "Who is a prominent historical figure in Finance?",
                "options": [
                    "Leading Expert",
                    "Famous Pioneer",
                    "Renowned Scholar",
                    "Key Innovator"
                ],
                "correctAnswer": 1
            },
            {
                "question": "What is a modern challenge studied in Finance?",
                "options": [
                    "Data Scaling",
                    "Resource Limits",
                    "System Integration",
                    "Future Adaptation"
                ],
                "correctAnswer": 3
            },
            {
                "question": "Which tool or method is synonymous with Finance?",
                "options": [
                    "Analyzer Tool",
                    "Standard Metric",
                    "Core Framework",
                    "Primary Index"
                ],
                "correctAnswer": 2
            }
        ]
    },
    {
        "id": "cat_28",
        "name": "Accounting",
        "questions": [
            {
                "question": "What is a fundamental concept in Accounting?",
                "options": [
                    "Core Theory",
                    "Basic Concept",
                    "Key Principle",
                    "Main Idea"
                ],
                "correctAnswer": 2
            },
            {
                "question": "Which term is commonly used in Accounting?",
                "options": [
                    "Element A",
                    "Variable X",
                    "Standard Format",
                    "Primary Function"
                ],
                "correctAnswer": 1
            },
            {
                "question": "Who is a prominent historical figure in Accounting?",
                "options": [
                    "Leading Expert",
                    "Famous Pioneer",
                    "Renowned Scholar",
                    "Key Innovator"
                ],
                "correctAnswer": 1
            },
            {
                "question": "What is a modern challenge studied in Accounting?",
                "options": [
                    "Data Scaling",
                    "Resource Limits",
                    "System Integration",
                    "Future Adaptation"
                ],
                "correctAnswer": 3
            },
            {
                "question": "Which tool or method is synonymous with Accounting?",
                "options": [
                    "Analyzer Tool",
                    "Standard Metric",
                    "Core Framework",
                    "Primary Index"
                ],
                "correctAnswer": 2
            }
        ]
    },
    {
        "id": "cat_29",
        "name": "Medicine",
        "questions": [
            {
                "question": "What is a fundamental concept in Medicine?",
                "options": [
                    "Core Theory",
                    "Basic Concept",
                    "Key Principle",
                    "Main Idea"
                ],
                "correctAnswer": 2
            },
            {
                "question": "Which term is commonly used in Medicine?",
                "options": [
                    "Element A",
                    "Variable X",
                    "Standard Format",
                    "Primary Function"
                ],
                "correctAnswer": 1
            },
            {
                "question": "Who is a prominent historical figure in Medicine?",
                "options": [
                    "Leading Expert",
                    "Famous Pioneer",
                    "Renowned Scholar",
                    "Key Innovator"
                ],
                "correctAnswer": 1
            },
            {
                "question": "What is a modern challenge studied in Medicine?",
                "options": [
                    "Data Scaling",
                    "Resource Limits",
                    "System Integration",
                    "Future Adaptation"
                ],
                "correctAnswer": 3
            },
            {
                "question": "Which tool or method is synonymous with Medicine?",
                "options": [
                    "Analyzer Tool",
                    "Standard Metric",
                    "Core Framework",
                    "Primary Index"
                ],
                "correctAnswer": 2
            }
        ]
    },
    {
        "id": "cat_30",
        "name": "Anatomy",
        "questions": [
            {
                "question": "What is a fundamental concept in Anatomy?",
                "options": [
                    "Core Theory",
                    "Basic Concept",
                    "Key Principle",
                    "Main Idea"
                ],
                "correctAnswer": 2
            },
            {
                "question": "Which term is commonly used in Anatomy?",
                "options": [
                    "Element A",
                    "Variable X",
                    "Standard Format",
                    "Primary Function"
                ],
                "correctAnswer": 1
            },
            {
                "question": "Who is a prominent historical figure in Anatomy?",
                "options": [
                    "Leading Expert",
                    "Famous Pioneer",
                    "Renowned Scholar",
                    "Key Innovator"
                ],
                "correctAnswer": 1
            },
            {
                "question": "What is a modern challenge studied in Anatomy?",
                "options": [
                    "Data Scaling",
                    "Resource Limits",
                    "System Integration",
                    "Future Adaptation"
                ],
                "correctAnswer": 3
            },
            {
                "question": "Which tool or method is synonymous with Anatomy?",
                "options": [
                    "Analyzer Tool",
                    "Standard Metric",
                    "Core Framework",
                    "Primary Index"
                ],
                "correctAnswer": 2
            }
        ]
    },
    {
        "id": "cat_31",
        "name": "Nutrition",
        "questions": [
            {
                "question": "What is a fundamental concept in Nutrition?",
                "options": [
                    "Core Theory",
                    "Basic Concept",
                    "Key Principle",
                    "Main Idea"
                ],
                "correctAnswer": 2
            },
            {
                "question": "Which term is commonly used in Nutrition?",
                "options": [
                    "Element A",
                    "Variable X",
                    "Standard Format",
                    "Primary Function"
                ],
                "correctAnswer": 1
            },
            {
                "question": "Who is a prominent historical figure in Nutrition?",
                "options": [
                    "Leading Expert",
                    "Famous Pioneer",
                    "Renowned Scholar",
                    "Key Innovator"
                ],
                "correctAnswer": 1
            },
            {
                "question": "What is a modern challenge studied in Nutrition?",
                "options": [
                    "Data Scaling",
                    "Resource Limits",
                    "System Integration",
                    "Future Adaptation"
                ],
                "correctAnswer": 3
            },
            {
                "question": "Which tool or method is synonymous with Nutrition?",
                "options": [
                    "Analyzer Tool",
                    "Standard Metric",
                    "Core Framework",
                    "Primary Index"
                ],
                "correctAnswer": 2
            }
        ]
    },
    {
        "id": "cat_32",
        "name": "Cooking",
        "questions": [
            {
                "question": "What is a fundamental concept in Cooking?",
                "options": [
                    "Core Theory",
                    "Basic Concept",
                    "Key Principle",
                    "Main Idea"
                ],
                "correctAnswer": 2
            },
            {
                "question": "Which term is commonly used in Cooking?",
                "options": [
                    "Element A",
                    "Variable X",
                    "Standard Format",
                    "Primary Function"
                ],
                "correctAnswer": 1
            },
            {
                "question": "Who is a prominent historical figure in Cooking?",
                "options": [
                    "Leading Expert",
                    "Famous Pioneer",
                    "Renowned Scholar",
                    "Key Innovator"
                ],
                "correctAnswer": 1
            },
            {
                "question": "What is a modern challenge studied in Cooking?",
                "options": [
                    "Data Scaling",
                    "Resource Limits",
                    "System Integration",
                    "Future Adaptation"
                ],
                "correctAnswer": 3
            },
            {
                "question": "Which tool or method is synonymous with Cooking?",
                "options": [
                    "Analyzer Tool",
                    "Standard Metric",
                    "Core Framework",
                    "Primary Index"
                ],
                "correctAnswer": 2
            }
        ]
    },
    {
        "id": "cat_33",
        "name": "Fashion",
        "questions": [
            {
                "question": "What is a fundamental concept in Fashion?",
                "options": [
                    "Core Theory",
                    "Basic Concept",
                    "Key Principle",
                    "Main Idea"
                ],
                "correctAnswer": 2
            },
            {
                "question": "Which term is commonly used in Fashion?",
                "options": [
                    "Element A",
                    "Variable X",
                    "Standard Format",
                    "Primary Function"
                ],
                "correctAnswer": 1
            },
            {
                "question": "Who is a prominent historical figure in Fashion?",
                "options": [
                    "Leading Expert",
                    "Famous Pioneer",
                    "Renowned Scholar",
                    "Key Innovator"
                ],
                "correctAnswer": 1
            },
            {
                "question": "What is a modern challenge studied in Fashion?",
                "options": [
                    "Data Scaling",
                    "Resource Limits",
                    "System Integration",
                    "Future Adaptation"
                ],
                "correctAnswer": 3
            },
            {
                "question": "Which tool or method is synonymous with Fashion?",
                "options": [
                    "Analyzer Tool",
                    "Standard Metric",
                    "Core Framework",
                    "Primary Index"
                ],
                "correctAnswer": 2
            }
        ]
    },
    {
        "id": "cat_34",
        "name": "Pop Culture",
        "questions": [
            {
                "question": "What is a fundamental concept in Pop Culture?",
                "options": [
                    "Core Theory",
                    "Basic Concept",
                    "Key Principle",
                    "Main Idea"
                ],
                "correctAnswer": 2
            },
            {
                "question": "Which term is commonly used in Pop Culture?",
                "options": [
                    "Element A",
                    "Variable X",
                    "Standard Format",
                    "Primary Function"
                ],
                "correctAnswer": 1
            },
            {
                "question": "Who is a prominent historical figure in Pop Culture?",
                "options": [
                    "Leading Expert",
                    "Famous Pioneer",
                    "Renowned Scholar",
                    "Key Innovator"
                ],
                "correctAnswer": 1
            },
            {
                "question": "What is a modern challenge studied in Pop Culture?",
                "options": [
                    "Data Scaling",
                    "Resource Limits",
                    "System Integration",
                    "Future Adaptation"
                ],
                "correctAnswer": 3
            },
            {
                "question": "Which tool or method is synonymous with Pop Culture?",
                "options": [
                    "Analyzer Tool",
                    "Standard Metric",
                    "Core Framework",
                    "Primary Index"
                ],
                "correctAnswer": 2
            }
        ]
    },
    {
        "id": "cat_35",
        "name": "Video Games",
        "questions": [
            {
                "question": "What is the best-selling video game of all time?",
                "options": [
                    "Tetris",
                    "Minecraft",
                    "GTA V",
                    "Wii Sports"
                ],
                "correctAnswer": 1
            },
            {
                "question": "Who is the protagonist of 'The Legend of Zelda'?",
                "options": [
                    "Zelda",
                    "Link",
                    "Ganon",
                    "Mario"
                ],
                "correctAnswer": 1
            },
            {
                "question": "What year was the original PlayStation released in Japan?",
                "options": [
                    "1992",
                    "1994",
                    "1996",
                    "1998"
                ],
                "correctAnswer": 1
            },
            {
                "question": "Which company created 'Sonic the Hedgehog'?",
                "options": [
                    "Nintendo",
                    "Capcom",
                    "Sega",
                    "Konami"
                ],
                "correctAnswer": 2
            },
            {
                "question": "In what game do you 'catch \\'em all'?",
                "options": [
                    "Digimon",
                    "Pokemon",
                    "Monster Hunter",
                    "Animal Crossing"
                ],
                "correctAnswer": 1
            }
        ]
    },
    {
        "id": "cat_36",
        "name": "Board Games",
        "questions": [
            {
                "question": "What is a fundamental concept in Board Games?",
                "options": [
                    "Core Theory",
                    "Basic Concept",
                    "Key Principle",
                    "Main Idea"
                ],
                "correctAnswer": 2
            },
            {
                "question": "Which term is commonly used in Board Games?",
                "options": [
                    "Element A",
                    "Variable X",
                    "Standard Format",
                    "Primary Function"
                ],
                "correctAnswer": 1
            },
            {
                "question": "Who is a prominent historical figure in Board Games?",
                "options": [
                    "Leading Expert",
                    "Famous Pioneer",
                    "Renowned Scholar",
                    "Key Innovator"
                ],
                "correctAnswer": 1
            },
            {
                "question": "What is a modern challenge studied in Board Games?",
                "options": [
                    "Data Scaling",
                    "Resource Limits",
                    "System Integration",
                    "Future Adaptation"
                ],
                "correctAnswer": 3
            },
            {
                "question": "Which tool or method is synonymous with Board Games?",
                "options": [
                    "Analyzer Tool",
                    "Standard Metric",
                    "Core Framework",
                    "Primary Index"
                ],
                "correctAnswer": 2
            }
        ]
    },
    {
        "id": "cat_37",
        "name": "Comic Books",
        "questions": [
            {
                "question": "What is a fundamental concept in Comic Books?",
                "options": [
                    "Core Theory",
                    "Basic Concept",
                    "Key Principle",
                    "Main Idea"
                ],
                "correctAnswer": 2
            },
            {
                "question": "Which term is commonly used in Comic Books?",
                "options": [
                    "Element A",
                    "Variable X",
                    "Standard Format",
                    "Primary Function"
                ],
                "correctAnswer": 1
            },
            {
                "question": "Who is a prominent historical figure in Comic Books?",
                "options": [
                    "Leading Expert",
                    "Famous Pioneer",
                    "Renowned Scholar",
                    "Key Innovator"
                ],
                "correctAnswer": 1
            },
            {
                "question": "What is a modern challenge studied in Comic Books?",
                "options": [
                    "Data Scaling",
                    "Resource Limits",
                    "System Integration",
                    "Future Adaptation"
                ],
                "correctAnswer": 3
            },
            {
                "question": "Which tool or method is synonymous with Comic Books?",
                "options": [
                    "Analyzer Tool",
                    "Standard Metric",
                    "Core Framework",
                    "Primary Index"
                ],
                "correctAnswer": 2
            }
        ]
    },
    {
        "id": "cat_38",
        "name": "Anime & Manga",
        "questions": [
            {
                "question": "What is a fundamental concept in Anime & Manga?",
                "options": [
                    "Core Theory",
                    "Basic Concept",
                    "Key Principle",
                    "Main Idea"
                ],
                "correctAnswer": 2
            },
            {
                "question": "Which term is commonly used in Anime & Manga?",
                "options": [
                    "Element A",
                    "Variable X",
                    "Standard Format",
                    "Primary Function"
                ],
                "correctAnswer": 1
            },
            {
                "question": "Who is a prominent historical figure in Anime & Manga?",
                "options": [
                    "Leading Expert",
                    "Famous Pioneer",
                    "Renowned Scholar",
                    "Key Innovator"
                ],
                "correctAnswer": 1
            },
            {
                "question": "What is a modern challenge studied in Anime & Manga?",
                "options": [
                    "Data Scaling",
                    "Resource Limits",
                    "System Integration",
                    "Future Adaptation"
                ],
                "correctAnswer": 3
            },
            {
                "question": "Which tool or method is synonymous with Anime & Manga?",
                "options": [
                    "Analyzer Tool",
                    "Standard Metric",
                    "Core Framework",
                    "Primary Index"
                ],
                "correctAnswer": 2
            }
        ]
    },
    {
        "id": "cat_39",
        "name": "Languages",
        "questions": [
            {
                "question": "What is a fundamental concept in Languages?",
                "options": [
                    "Core Theory",
                    "Basic Concept",
                    "Key Principle",
                    "Main Idea"
                ],
                "correctAnswer": 2
            },
            {
                "question": "Which term is commonly used in Languages?",
                "options": [
                    "Element A",
                    "Variable X",
                    "Standard Format",
                    "Primary Function"
                ],
                "correctAnswer": 1
            },
            {
                "question": "Who is a prominent historical figure in Languages?",
                "options": [
                    "Leading Expert",
                    "Famous Pioneer",
                    "Renowned Scholar",
                    "Key Innovator"
                ],
                "correctAnswer": 1
            },
            {
                "question": "What is a modern challenge studied in Languages?",
                "options": [
                    "Data Scaling",
                    "Resource Limits",
                    "System Integration",
                    "Future Adaptation"
                ],
                "correctAnswer": 3
            },
            {
                "question": "Which tool or method is synonymous with Languages?",
                "options": [
                    "Analyzer Tool",
                    "Standard Metric",
                    "Core Framework",
                    "Primary Index"
                ],
                "correctAnswer": 2
            }
        ]
    },
    {
        "id": "cat_40",
        "name": "Linguistics",
        "questions": [
            {
                "question": "What is a fundamental concept in Linguistics?",
                "options": [
                    "Core Theory",
                    "Basic Concept",
                    "Key Principle",
                    "Main Idea"
                ],
                "correctAnswer": 2
            },
            {
                "question": "Which term is commonly used in Linguistics?",
                "options": [
                    "Element A",
                    "Variable X",
                    "Standard Format",
                    "Primary Function"
                ],
                "correctAnswer": 1
            },
            {
                "question": "Who is a prominent historical figure in Linguistics?",
                "options": [
                    "Leading Expert",
                    "Famous Pioneer",
                    "Renowned Scholar",
                    "Key Innovator"
                ],
                "correctAnswer": 1
            },
            {
                "question": "What is a modern challenge studied in Linguistics?",
                "options": [
                    "Data Scaling",
                    "Resource Limits",
                    "System Integration",
                    "Future Adaptation"
                ],
                "correctAnswer": 3
            },
            {
                "question": "Which tool or method is synonymous with Linguistics?",
                "options": [
                    "Analyzer Tool",
                    "Standard Metric",
                    "Core Framework",
                    "Primary Index"
                ],
                "correctAnswer": 2
            }
        ]
    },
    {
        "id": "cat_41",
        "name": "World Religions",
        "questions": [
            {
                "question": "What is a fundamental concept in World Religions?",
                "options": [
                    "Core Theory",
                    "Basic Concept",
                    "Key Principle",
                    "Main Idea"
                ],
                "correctAnswer": 2
            },
            {
                "question": "Which term is commonly used in World Religions?",
                "options": [
                    "Element A",
                    "Variable X",
                    "Standard Format",
                    "Primary Function"
                ],
                "correctAnswer": 1
            },
            {
                "question": "Who is a prominent historical figure in World Religions?",
                "options": [
                    "Leading Expert",
                    "Famous Pioneer",
                    "Renowned Scholar",
                    "Key Innovator"
                ],
                "correctAnswer": 1
            },
            {
                "question": "What is a modern challenge studied in World Religions?",
                "options": [
                    "Data Scaling",
                    "Resource Limits",
                    "System Integration",
                    "Future Adaptation"
                ],
                "correctAnswer": 3
            },
            {
                "question": "Which tool or method is synonymous with World Religions?",
                "options": [
                    "Analyzer Tool",
                    "Standard Metric",
                    "Core Framework",
                    "Primary Index"
                ],
                "correctAnswer": 2
            }
        ]
    },
    {
        "id": "cat_42",
        "name": "Law",
        "questions": [
            {
                "question": "What is a fundamental concept in Law?",
                "options": [
                    "Core Theory",
                    "Basic Concept",
                    "Key Principle",
                    "Main Idea"
                ],
                "correctAnswer": 2
            },
            {
                "question": "Which term is commonly used in Law?",
                "options": [
                    "Element A",
                    "Variable X",
                    "Standard Format",
                    "Primary Function"
                ],
                "correctAnswer": 1
            },
            {
                "question": "Who is a prominent historical figure in Law?",
                "options": [
                    "Leading Expert",
                    "Famous Pioneer",
                    "Renowned Scholar",
                    "Key Innovator"
                ],
                "correctAnswer": 1
            },
            {
                "question": "What is a modern challenge studied in Law?",
                "options": [
                    "Data Scaling",
                    "Resource Limits",
                    "System Integration",
                    "Future Adaptation"
                ],
                "correctAnswer": 3
            },
            {
                "question": "Which tool or method is synonymous with Law?",
                "options": [
                    "Analyzer Tool",
                    "Standard Metric",
                    "Core Framework",
                    "Primary Index"
                ],
                "correctAnswer": 2
            }
        ]
    },
    {
        "id": "cat_43",
        "name": "Environmental Science",
        "questions": [
            {
                "question": "What is a fundamental concept in Environmental Science?",
                "options": [
                    "Core Theory",
                    "Basic Concept",
                    "Key Principle",
                    "Main Idea"
                ],
                "correctAnswer": 2
            },
            {
                "question": "Which term is commonly used in Environmental Science?",
                "options": [
                    "Element A",
                    "Variable X",
                    "Standard Format",
                    "Primary Function"
                ],
                "correctAnswer": 1
            },
            {
                "question": "Who is a prominent historical figure in Environmental Science?",
                "options": [
                    "Leading Expert",
                    "Famous Pioneer",
                    "Renowned Scholar",
                    "Key Innovator"
                ],
                "correctAnswer": 1
            },
            {
                "question": "What is a modern challenge studied in Environmental Science?",
                "options": [
                    "Data Scaling",
                    "Resource Limits",
                    "System Integration",
                    "Future Adaptation"
                ],
                "correctAnswer": 3
            },
            {
                "question": "Which tool or method is synonymous with Environmental Science?",
                "options": [
                    "Analyzer Tool",
                    "Standard Metric",
                    "Core Framework",
                    "Primary Index"
                ],
                "correctAnswer": 2
            }
        ]
    },
    {
        "id": "cat_44",
        "name": "Agriculture",
        "questions": [
            {
                "question": "What is a fundamental concept in Agriculture?",
                "options": [
                    "Core Theory",
                    "Basic Concept",
                    "Key Principle",
                    "Main Idea"
                ],
                "correctAnswer": 2
            },
            {
                "question": "Which term is commonly used in Agriculture?",
                "options": [
                    "Element A",
                    "Variable X",
                    "Standard Format",
                    "Primary Function"
                ],
                "correctAnswer": 1
            },
            {
                "question": "Who is a prominent historical figure in Agriculture?",
                "options": [
                    "Leading Expert",
                    "Famous Pioneer",
                    "Renowned Scholar",
                    "Key Innovator"
                ],
                "correctAnswer": 1
            },
            {
                "question": "What is a modern challenge studied in Agriculture?",
                "options": [
                    "Data Scaling",
                    "Resource Limits",
                    "System Integration",
                    "Future Adaptation"
                ],
                "correctAnswer": 3
            },
            {
                "question": "Which tool or method is synonymous with Agriculture?",
                "options": [
                    "Analyzer Tool",
                    "Standard Metric",
                    "Core Framework",
                    "Primary Index"
                ],
                "correctAnswer": 2
            }
        ]
    },
    {
        "id": "cat_45",
        "name": "Architecture",
        "questions": [
            {
                "question": "What is a fundamental concept in Architecture?",
                "options": [
                    "Core Theory",
                    "Basic Concept",
                    "Key Principle",
                    "Main Idea"
                ],
                "correctAnswer": 2
            },
            {
                "question": "Which term is commonly used in Architecture?",
                "options": [
                    "Element A",
                    "Variable X",
                    "Standard Format",
                    "Primary Function"
                ],
                "correctAnswer": 1
            },
            {
                "question": "Who is a prominent historical figure in Architecture?",
                "options": [
                    "Leading Expert",
                    "Famous Pioneer",
                    "Renowned Scholar",
                    "Key Innovator"
                ],
                "correctAnswer": 1
            },
            {
                "question": "What is a modern challenge studied in Architecture?",
                "options": [
                    "Data Scaling",
                    "Resource Limits",
                    "System Integration",
                    "Future Adaptation"
                ],
                "correctAnswer": 3
            },
            {
                "question": "Which tool or method is synonymous with Architecture?",
                "options": [
                    "Analyzer Tool",
                    "Standard Metric",
                    "Core Framework",
                    "Primary Index"
                ],
                "correctAnswer": 2
            }
        ]
    },
    {
        "id": "cat_46",
        "name": "Automotive",
        "questions": [
            {
                "question": "What is a fundamental concept in Automotive?",
                "options": [
                    "Core Theory",
                    "Basic Concept",
                    "Key Principle",
                    "Main Idea"
                ],
                "correctAnswer": 2
            },
            {
                "question": "Which term is commonly used in Automotive?",
                "options": [
                    "Element A",
                    "Variable X",
                    "Standard Format",
                    "Primary Function"
                ],
                "correctAnswer": 1
            },
            {
                "question": "Who is a prominent historical figure in Automotive?",
                "options": [
                    "Leading Expert",
                    "Famous Pioneer",
                    "Renowned Scholar",
                    "Key Innovator"
                ],
                "correctAnswer": 1
            },
            {
                "question": "What is a modern challenge studied in Automotive?",
                "options": [
                    "Data Scaling",
                    "Resource Limits",
                    "System Integration",
                    "Future Adaptation"
                ],
                "correctAnswer": 3
            },
            {
                "question": "Which tool or method is synonymous with Automotive?",
                "options": [
                    "Analyzer Tool",
                    "Standard Metric",
                    "Core Framework",
                    "Primary Index"
                ],
                "correctAnswer": 2
            }
        ]
    },
    {
        "id": "cat_47",
        "name": "Aviation",
        "questions": [
            {
                "question": "What is a fundamental concept in Aviation?",
                "options": [
                    "Core Theory",
                    "Basic Concept",
                    "Key Principle",
                    "Main Idea"
                ],
                "correctAnswer": 2
            },
            {
                "question": "Which term is commonly used in Aviation?",
                "options": [
                    "Element A",
                    "Variable X",
                    "Standard Format",
                    "Primary Function"
                ],
                "correctAnswer": 1
            },
            {
                "question": "Who is a prominent historical figure in Aviation?",
                "options": [
                    "Leading Expert",
                    "Famous Pioneer",
                    "Renowned Scholar",
                    "Key Innovator"
                ],
                "correctAnswer": 1
            },
            {
                "question": "What is a modern challenge studied in Aviation?",
                "options": [
                    "Data Scaling",
                    "Resource Limits",
                    "System Integration",
                    "Future Adaptation"
                ],
                "correctAnswer": 3
            },
            {
                "question": "Which tool or method is synonymous with Aviation?",
                "options": [
                    "Analyzer Tool",
                    "Standard Metric",
                    "Core Framework",
                    "Primary Index"
                ],
                "correctAnswer": 2
            }
        ]
    },
    {
        "id": "cat_48",
        "name": "Maritime",
        "questions": [
            {
                "question": "What is a fundamental concept in Maritime?",
                "options": [
                    "Core Theory",
                    "Basic Concept",
                    "Key Principle",
                    "Main Idea"
                ],
                "correctAnswer": 2
            },
            {
                "question": "Which term is commonly used in Maritime?",
                "options": [
                    "Element A",
                    "Variable X",
                    "Standard Format",
                    "Primary Function"
                ],
                "correctAnswer": 1
            },
            {
                "question": "Who is a prominent historical figure in Maritime?",
                "options": [
                    "Leading Expert",
                    "Famous Pioneer",
                    "Renowned Scholar",
                    "Key Innovator"
                ],
                "correctAnswer": 1
            },
            {
                "question": "What is a modern challenge studied in Maritime?",
                "options": [
                    "Data Scaling",
                    "Resource Limits",
                    "System Integration",
                    "Future Adaptation"
                ],
                "correctAnswer": 3
            },
            {
                "question": "Which tool or method is synonymous with Maritime?",
                "options": [
                    "Analyzer Tool",
                    "Standard Metric",
                    "Core Framework",
                    "Primary Index"
                ],
                "correctAnswer": 2
            }
        ]
    },
    {
        "id": "cat_49",
        "name": "Military History",
        "questions": [
            {
                "question": "What is a fundamental concept in Military History?",
                "options": [
                    "Core Theory",
                    "Basic Concept",
                    "Key Principle",
                    "Main Idea"
                ],
                "correctAnswer": 2
            },
            {
                "question": "Which term is commonly used in Military History?",
                "options": [
                    "Element A",
                    "Variable X",
                    "Standard Format",
                    "Primary Function"
                ],
                "correctAnswer": 1
            },
            {
                "question": "Who is a prominent historical figure in Military History?",
                "options": [
                    "Leading Expert",
                    "Famous Pioneer",
                    "Renowned Scholar",
                    "Key Innovator"
                ],
                "correctAnswer": 1
            },
            {
                "question": "What is a modern challenge studied in Military History?",
                "options": [
                    "Data Scaling",
                    "Resource Limits",
                    "System Integration",
                    "Future Adaptation"
                ],
                "correctAnswer": 3
            },
            {
                "question": "Which tool or method is synonymous with Military History?",
                "options": [
                    "Analyzer Tool",
                    "Standard Metric",
                    "Core Framework",
                    "Primary Index"
                ],
                "correctAnswer": 2
            }
        ]
    },
    {
        "id": "cat_50",
        "name": "Space Exploration",
        "questions": [
            {
                "question": "What was the name of the first artificial Earth satellite?",
                "options": [
                    "Apollo 1",
                    "Sputnik 1",
                    "Explorer 1",
                    "Vostok 1"
                ],
                "correctAnswer": 1
            },
            {
                "question": "When did humans first land on the moon?",
                "options": [
                    "1965",
                    "1969",
                    "1971",
                    "1975"
                ],
                "correctAnswer": 1
            },
            {
                "question": "What is the current space station orbiting Earth?",
                "options": [
                    "Skylab",
                    "Mir",
                    "ISS",
                    "Tiangong"
                ],
                "correctAnswer": 2
            },
            {
                "question": "Which space telescope was launched in 1990?",
                "options": [
                    "James Webb",
                    "Hubble",
                    "Kepler",
                    "Spitzer"
                ],
                "correctAnswer": 1
            },
            {
                "question": "What rover landed on Mars in 2021?",
                "options": [
                    "Curiosity",
                    "Spirit",
                    "Opportunity",
                    "Perseverance"
                ],
                "correctAnswer": 3
            }
        ]
    },
    {
        "id": "cat_51",
        "name": "Robotics",
        "questions": [
            {
                "question": "What is a fundamental concept in Robotics?",
                "options": [
                    "Core Theory",
                    "Basic Concept",
                    "Key Principle",
                    "Main Idea"
                ],
                "correctAnswer": 2
            },
            {
                "question": "Which term is commonly used in Robotics?",
                "options": [
                    "Element A",
                    "Variable X",
                    "Standard Format",
                    "Primary Function"
                ],
                "correctAnswer": 1
            },
            {
                "question": "Who is a prominent historical figure in Robotics?",
                "options": [
                    "Leading Expert",
                    "Famous Pioneer",
                    "Renowned Scholar",
                    "Key Innovator"
                ],
                "correctAnswer": 1
            },
            {
                "question": "What is a modern challenge studied in Robotics?",
                "options": [
                    "Data Scaling",
                    "Resource Limits",
                    "System Integration",
                    "Future Adaptation"
                ],
                "correctAnswer": 3
            },
            {
                "question": "Which tool or method is synonymous with Robotics?",
                "options": [
                    "Analyzer Tool",
                    "Standard Metric",
                    "Core Framework",
                    "Primary Index"
                ],
                "correctAnswer": 2
            }
        ]
    },
    {
        "id": "cat_52",
        "name": "Artificial Intelligence",
        "questions": [
            {
                "question": "What is a fundamental concept in Artificial Intelligence?",
                "options": [
                    "Core Theory",
                    "Basic Concept",
                    "Key Principle",
                    "Main Idea"
                ],
                "correctAnswer": 2
            },
            {
                "question": "Which term is commonly used in Artificial Intelligence?",
                "options": [
                    "Element A",
                    "Variable X",
                    "Standard Format",
                    "Primary Function"
                ],
                "correctAnswer": 1
            },
            {
                "question": "Who is a prominent historical figure in Artificial Intelligence?",
                "options": [
                    "Leading Expert",
                    "Famous Pioneer",
                    "Renowned Scholar",
                    "Key Innovator"
                ],
                "correctAnswer": 1
            },
            {
                "question": "What is a modern challenge studied in Artificial Intelligence?",
                "options": [
                    "Data Scaling",
                    "Resource Limits",
                    "System Integration",
                    "Future Adaptation"
                ],
                "correctAnswer": 3
            },
            {
                "question": "Which tool or method is synonymous with Artificial Intelligence?",
                "options": [
                    "Analyzer Tool",
                    "Standard Metric",
                    "Core Framework",
                    "Primary Index"
                ],
                "correctAnswer": 2
            }
        ]
    },
    {
        "id": "cat_53",
        "name": "Blockchain & Crypto",
        "questions": [
            {
                "question": "What is a fundamental concept in Blockchain & Crypto?",
                "options": [
                    "Core Theory",
                    "Basic Concept",
                    "Key Principle",
                    "Main Idea"
                ],
                "correctAnswer": 2
            },
            {
                "question": "Which term is commonly used in Blockchain & Crypto?",
                "options": [
                    "Element A",
                    "Variable X",
                    "Standard Format",
                    "Primary Function"
                ],
                "correctAnswer": 1
            },
            {
                "question": "Who is a prominent historical figure in Blockchain & Crypto?",
                "options": [
                    "Leading Expert",
                    "Famous Pioneer",
                    "Renowned Scholar",
                    "Key Innovator"
                ],
                "correctAnswer": 1
            },
            {
                "question": "What is a modern challenge studied in Blockchain & Crypto?",
                "options": [
                    "Data Scaling",
                    "Resource Limits",
                    "System Integration",
                    "Future Adaptation"
                ],
                "correctAnswer": 3
            },
            {
                "question": "Which tool or method is synonymous with Blockchain & Crypto?",
                "options": [
                    "Analyzer Tool",
                    "Standard Metric",
                    "Core Framework",
                    "Primary Index"
                ],
                "correctAnswer": 2
            }
        ]
    },
    {
        "id": "cat_54",
        "name": "Internet Culture",
        "questions": [
            {
                "question": "What is a fundamental concept in Internet Culture?",
                "options": [
                    "Core Theory",
                    "Basic Concept",
                    "Key Principle",
                    "Main Idea"
                ],
                "correctAnswer": 2
            },
            {
                "question": "Which term is commonly used in Internet Culture?",
                "options": [
                    "Element A",
                    "Variable X",
                    "Standard Format",
                    "Primary Function"
                ],
                "correctAnswer": 1
            },
            {
                "question": "Who is a prominent historical figure in Internet Culture?",
                "options": [
                    "Leading Expert",
                    "Famous Pioneer",
                    "Renowned Scholar",
                    "Key Innovator"
                ],
                "correctAnswer": 1
            },
            {
                "question": "What is a modern challenge studied in Internet Culture?",
                "options": [
                    "Data Scaling",
                    "Resource Limits",
                    "System Integration",
                    "Future Adaptation"
                ],
                "correctAnswer": 3
            },
            {
                "question": "Which tool or method is synonymous with Internet Culture?",
                "options": [
                    "Analyzer Tool",
                    "Standard Metric",
                    "Core Framework",
                    "Primary Index"
                ],
                "correctAnswer": 2
            }
        ]
    }
];

document.addEventListener("DOMContentLoaded", () => {
    // ---- DOM Elements ----
    const screens = {
        auth: document.getElementById('auth-screen'),
        dashboard: document.getElementById('dashboard-screen'),
        category: document.getElementById('category-screen'),
        quiz: document.getElementById('quiz-screen'),
        result: document.getElementById('result-screen')
    };

    // Auth
    const tabLogin = document.getElementById('tab-login');
    const tabSignup = document.getElementById('tab-signup');
    const loginForm = document.getElementById('login-form');
    const signupForm = document.getElementById('signup-form');
    const loginUser = document.getElementById('login-username');
    const loginPass = document.getElementById('login-password');
    const signupUser = document.getElementById('signup-username');
    const signupPass = document.getElementById('signup-password');

    // Dashboard
    const userDisplayName = document.getElementById('user-display-name');
    const statAttempted = document.getElementById('stat-attempted');
    const statScore = document.getElementById('stat-score');
    const statAccuracy = document.getElementById('stat-accuracy');
    const logoutBtn = document.getElementById('logout-btn');
    const startNewQuizBtn = document.getElementById('start-new-quiz-btn');
    const marksheetBody = document.getElementById('marksheet-body');
    const noMarksMsg = document.getElementById('no-marks-msg');

    // Category
    const b2DashboardBtn = document.getElementById('back-to-dashboard-btn');
    const categorySearch = document.getElementById('category-search');
    const categoriesGrid = document.getElementById('categories-grid');

    // Quiz
    const quizCategoryTitle = document.getElementById('quiz-category-title');
    const quitQuizBtn = document.getElementById('quit-quiz-btn');
    const progressBar = document.getElementById('progress-bar');
    const questionCountText = document.getElementById('question-count');
    const scoreDisplay = document.getElementById('score-display');
    const questionText = document.getElementById('question-text');
    const optionsContainer = document.getElementById('options-container');
    const feedbackContainer = document.getElementById('feedback-container');
    const feedbackMessage = document.getElementById('feedback-message');
    const nextBtn = document.getElementById('next-btn');

    // Result
    const finalScoreDisplay = document.getElementById('final-score');
    const resultMessageText = document.getElementById('result-message');
    const restartBtn = document.getElementById('restart-btn');
    const resultDashboardBtn = document.getElementById('result-dashboard-btn');
    const toastContainer = document.getElementById('toast-container');

    // Timer & Badges
    const timerText = document.getElementById('timer-text');
    const timerBar = document.getElementById('timer-bar');
    const badgesContainer = document.getElementById('badges-container');

    // ---- State ----
    let currentUser = null;
    let usersDb = JSON.parse(localStorage.getItem('quizUsersDb')) || {};
    let currentCategoryData = null;
    let quizState = {
        questionIndex: 0,
        score: 0,
        totalQuestions: 0,
        timerInterval: null,
        timeLeft: 15
    };

    // ---- Helper functions ----
    function showToast(message, isError = false) {
        const toast = document.createElement('div');
        toast.className = `toast ${isError ? 'error' : ''}`;
        toast.textContent = message;
        toastContainer.appendChild(toast);
        setTimeout(() => toast.remove(), 3000);
    }

    function switchScreen(screenName) {
        Object.values(screens).forEach(screen => {
            screen.classList.remove('active');
        });
        setTimeout(() => {
            if (screens[screenName]) screens[screenName].classList.add('active');
        }, 50);
    }

    // ---- Auth Logic ----
    tabLogin.addEventListener('click', () => {
        tabLogin.classList.add('active');
        tabSignup.classList.remove('active');
        loginForm.classList.remove('hidden');
        signupForm.classList.add('hidden');
    });

    tabSignup.addEventListener('click', () => {
        tabSignup.classList.add('active');
        tabLogin.classList.remove('active');
        signupForm.classList.remove('hidden');
        loginForm.classList.add('hidden');
    });

    signupForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const username = signupUser.value.trim();
        const password = signupPass.value;

        if (usersDb[username]) {
            showToast("Username already exists", true);
            return;
        }

        usersDb[username] = { password, stats: [] };
        localStorage.setItem('quizUsersDb', JSON.stringify(usersDb));
        showToast("Account created successfully! You can now login.");
        tabLogin.click();
        signupForm.reset();
    });

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const username = loginUser.value.trim();
        const password = loginPass.value;

        if (!usersDb[username] || usersDb[username].password !== password) {
            showToast("Invalid username or password", true);
            return;
        }

        currentUser = { username, data: usersDb[username] };
        loginForm.reset();
        showToast("Logged in successfully!");
        initDashboard();
    });

    logoutBtn.addEventListener('click', () => {
        currentUser = null;
        switchScreen('auth');
    });

    // ---- Dashboard Logic ----
    function initDashboard() {
        if (!currentUser) return;
        userDisplayName.textContent = currentUser.username;
        const stats = currentUser.data.stats;

        statAttempted.textContent = stats.length;

        let totalScore = 0;
        let totalQuestionsAll = 0;

        marksheetBody.innerHTML = '';
        if (stats.length === 0) {
            noMarksMsg.style.display = 'block';
            statScore.textContent = '0';
            statAccuracy.textContent = '0%';
        } else {
            noMarksMsg.style.display = 'none';
            // Render table reversed (newest first)
            [...stats].reverse().forEach(stat => {
                totalScore += stat.score;
                totalQuestionsAll += stat.total;

                const tr = document.createElement('tr');
                const p = (stat.score / stat.total) * 100;

                tr.innerHTML = `
                    <td>${stat.date}</td>
                    <td>${stat.category}</td>
                    <td>${stat.score}/${stat.total}</td>
                    <td style="color:${p >= 50 ? 'var(--success-color)' : 'var(--error-color)'}">${p >= 50 ? 'Pass' : 'Fail'}</td>
                `;
                marksheetBody.appendChild(tr);
            });
            statScore.textContent = totalScore;
            statAccuracy.textContent = totalQuestionsAll > 0 ? Math.round((totalScore / totalQuestionsAll) * 100) + '%' : '0%';
        }
        
        renderBadges(stats, totalQuestionsAll > 0 ? Math.round((totalScore / totalQuestionsAll) * 100) : 0);

        switchScreen('dashboard');
    }

    function renderBadges(stats, accuracy) {
        badgesContainer.innerHTML = '';
        const hasPerfect = stats.some(s => s.score === s.total);
        const attempted = stats.length;

        const badges = [
            { name: "First Steps 🚶", unlocked: attempted > 0 },
            { name: "Loyal Learner 📚", unlocked: attempted >= 5 },
            { name: "Perfectionist 🎯", unlocked: hasPerfect },
            { name: "Quiz Master 👑", unlocked: attempted >= 10 && accuracy >= 80 }
        ];

        badges.forEach(b => {
            const el = document.createElement('div');
            el.className = `badge ${b.unlocked ? '' : 'badge-locked'}`;
            el.innerHTML = `<i class="icon">${b.name.slice(-2)}</i> ${b.name.slice(0, -2)}`;
            badgesContainer.appendChild(el);
        });
    }

    startNewQuizBtn.addEventListener('click', () => {
        initCategories();
    });

    b2DashboardBtn.addEventListener('click', () => switchScreen('dashboard'));
    resultDashboardBtn.addEventListener('click', initDashboard);

    // ---- Category Logic ----
    function initCategories() {
        renderCategories(quizCategories);
        switchScreen('category');
    }

    categorySearch.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase();
        const filtered = quizCategories.filter(cat => cat.name.toLowerCase().includes(query));
        renderCategories(filtered);
    });

    function renderCategories(categoriesList) {
        categoriesGrid.innerHTML = '';
        categoriesList.forEach((cat, index) => {
            const card = document.createElement('div');
            card.className = 'category-card';
            card.style.animationDelay = `${(index % 10) * 0.05}s`;
            card.innerHTML = `<h4>${cat.name}</h4>`;
            card.addEventListener('click', () => startQuiz(cat));
            categoriesGrid.appendChild(card);
        });
    }

    // ---- Quiz Logic ----
    quitQuizBtn.addEventListener('click', () => {
        if (confirm("Are you sure you want to quit? Your progress will not be saved.")) {
            clearInterval(quizState.timerInterval);
            switchScreen('dashboard');
        }
    });

    restartBtn.addEventListener('click', () => {
        initCategories();
    });

    function startQuiz(category) {
        if (!category.questions || category.questions.length === 0) {
            showToast("This category has no questions yet!", true);
            return;
        }
        currentCategoryData = category;
        quizState.questionIndex = 0;
        quizState.score = 0;
        quizState.totalQuestions = category.questions.length;

        quizCategoryTitle.textContent = category.name;
        loadQuestion();
        switchScreen('quiz');
    }

    function loadQuestion() {
        const question = currentCategoryData.questions[quizState.questionIndex];

        const progress = (quizState.questionIndex / quizState.totalQuestions) * 100;
        progressBar.style.setProperty('--progress', `${progress}%`);
        questionCountText.textContent = `Question ${quizState.questionIndex + 1}/${quizState.totalQuestions}`;
        scoreDisplay.textContent = `Score: ${quizState.score}`;

        questionText.textContent = question.question;

        optionsContainer.innerHTML = '';
        optionsContainer.classList.remove('answered');
        feedbackContainer.classList.add('hidden');
        feedbackContainer.classList.remove('success', 'error');
        nextBtn.classList.add('hidden');

        question.options.forEach((optText, i) => {
            const optDiv = document.createElement('div');
            optDiv.className = 'option animate-scale-in';
            optDiv.style.animationDelay = `${i * 0.1}s`;
            optDiv.textContent = optText;
            optDiv.dataset.index = i;
            optDiv.addEventListener('click', () => handleOptionSelection(i, optDiv, question));
            optionsContainer.appendChild(optDiv);
        });

        startTimer();
    }

    function startTimer() {
        clearInterval(quizState.timerInterval);
        quizState.timeLeft = 15;
        updateTimerDisplay();

        quizState.timerInterval = setInterval(() => {
            quizState.timeLeft--;
            updateTimerDisplay();

            if (quizState.timeLeft <= 0) {
                clearInterval(quizState.timerInterval);
                const question = currentCategoryData.questions[quizState.questionIndex];
                handleOptionSelection(-1, null, question); // Time out counts as incorrect
            }
        }, 1000);
    }

    function updateTimerDisplay() {
        timerText.textContent = `${quizState.timeLeft}s`;
        const p = (quizState.timeLeft / 15) * 100;
        timerBar.style.width = `${p}%`;
        
        if (quizState.timeLeft <= 5) {
            timerText.style.color = 'var(--error-color)';
            timerBar.style.backgroundColor = 'var(--error-color)';
        } else {
            timerText.style.color = '#fca5a5';
            timerBar.style.backgroundColor = '#ef4444';
        }
    }

    function handleOptionSelection(selectedIndex, clickedEl, question) {
        if (optionsContainer.classList.contains('answered')) return;
        optionsContainer.classList.add('answered');
        clearInterval(quizState.timerInterval); // Stop timer

        const isCorrect = selectedIndex === question.correctAnswer;

        Array.from(optionsContainer.children).forEach(opt => {
            opt.classList.add('disabled');
            const idx = parseInt(opt.dataset.index);
            if (idx === question.correctAnswer) {
                opt.classList.add('correct');
            } else if (idx === selectedIndex && !isCorrect) {
                opt.classList.add('incorrect');
            }
        });

        if (isCorrect) {
            quizState.score++;
            scoreDisplay.textContent = `Score: ${quizState.score}`;
        }

        showFeedback(isCorrect, question.options[question.correctAnswer]);
    }

    function showFeedback(isCorrect, correctText) {
        feedbackContainer.classList.remove('hidden');
        if (isCorrect) {
            feedbackContainer.classList.add('success');
            feedbackMessage.textContent = "Correct! Well done ✅";
            feedbackMessage.style.color = "var(--success-color)";
        } else {
            feedbackContainer.classList.add('error');
            if (quizState.timeLeft <= 0) {
                 feedbackMessage.textContent = `Time's up! ⏰ The right answer was: ${correctText}`;
            } else {
                 feedbackMessage.textContent = `Incorrect ❌ The right answer was: ${correctText}`;
            }
            feedbackMessage.style.color = "var(--error-color)";
        }
        nextBtn.classList.remove('hidden');
    }

    nextBtn.addEventListener('click', () => {
        quizState.questionIndex++;
        if (quizState.questionIndex < quizState.totalQuestions) {
            loadQuestion();
        } else {
            endQuiz();
        }
    });

    function endQuiz() {
        progressBar.style.setProperty('--progress', `100%`);
        // Save to user stats
        const date = new Date().toLocaleDateString();
        currentUser.data.stats.push({
            date,
            category: currentCategoryData.name,
            score: quizState.score,
            total: quizState.totalQuestions
        });

        // Save back to local storage
        usersDb[currentUser.username] = currentUser.data;
        localStorage.setItem('quizUsersDb', JSON.stringify(usersDb));

        // Display results
        finalScoreDisplay.textContent = `${quizState.score}/${quizState.totalQuestions}`;

        const pt = (quizState.score / quizState.totalQuestions) * 100;
        if (pt === 100) resultMessageText.textContent = "Perfect! Flawless Victory 🏆";
        else if (pt >= 80) resultMessageText.textContent = "Great job! Almost perfect 🌟";
        else if (pt >= 50) resultMessageText.textContent = "Good try, but you can do better! 👍";
        else resultMessageText.textContent = "Keep practicing! You'll get it next time 📚";

        switchScreen('result');
    }
});
