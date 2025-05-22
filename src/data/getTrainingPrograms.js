export const getTrainingPrograms = (lang = "en") => {
    const programs = {
      en: [
        {
          id: 1,
          title: "Basic Obedience",
          image: "/images/obedience.jpg",
          category: "Foundational",
          description: "Master sit, stay, come, and leash walking using reward-based methods.",
          duration: "4 weeks",
          price: "€150",
          skills: [{ name: "Sit" }, { name: "Stay" }, { name: "Leash Walking" }],
        },
        {
          id: 2,
          title: "Puppy Socialization",
          image: "/images/puppy.jpg",
          category: "Early Learning",
          description: "Confidence-building, bite inhibition, and social skills for young pups.",
          duration: "3 weeks",
          price: "€120",
          skills: [{ name: "Confidence" }, { name: "Bite Inhibition" }],
        },
        {
          id: 3,
          title: "Recall & Impulse Control",
          image: "/images/recall.jpg",
          category: "Behavioral",
          description: "Teach your dog to return reliably and make better decisions off leash.",
          duration: "2 weeks",
          price: "€100",
          skills: [{ name: "Recall" }, { name: "Impulse Control" }],
        }
      ],
      de: [
        {
          id: 1,
          title: "Grundgehorsam",
          image: "/images/obedience.jpg",
          category: "Grundlagen",
          description: "Lernen Sie Sitz, Platz und an der Leine laufen mit positiver Verstärkung.",
          duration: "4 Wochen",
          price: "€150",
          skills: [{ name: "Sitz" }, { name: "Platz" }, { name: "Leinenführung" }],
        },
      ]
    };
  
    return programs[lang] || programs["en"];
  };
  