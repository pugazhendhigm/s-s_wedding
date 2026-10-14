const weddingData = {
  language: {
    tamil: "அன்புடன் வரவேற்கிறோம்",
    english: "You are cordially invited"
  },

  couple: {
    groom: {
      name: "S. Surya Prakash",
      qualifications: "B.Sc., MBA",
      profession: "Proprietor",
      company: "SHIV Associates"
    },
    bride: {
      name: "S. Shamila",
      qualifications: "B.E., ECE",
      profession: "Software Consultant",
      company: "CTCS"
    }
  },

  invitation: {
    title: "Wedding Invitation",
    tamilTitle: "திருமண அழைப்பிதழ்",
    message:
      "It is with immense joy and heartfelt appreciation that we welcome your presence as we celebrate the beginning of our forever.",
    tamilMessage:
      "எங்கள் வாழ்வின் புதிய அத்தியாயத்தைத் தொடங்கும் இந்த இனிய திருமண விழாவில் தாங்கள் குடும்பத்துடன் கலந்து கொண்டு மணமக்களை வாழ்த்த அன்புடன் அழைக்கிறோம்.",
    closingMessage: "Your presence will make our special day even more memorable.",
    closingTamilMessage:
      "தங்கள் வருகையே எங்களுக்கு மகிழ்ச்சியும் பெருமையும் அளிக்கும்."
  },

  wedding: {
    title: "Wedding Ceremony",
    tamilTitle: "திருமண விழா",
    date: "2026-11-11",
    day: "Wednesday",
    time: { start: "09:30", end: "10:30", display: "9:30 AM – 10:30 AM" },
    venue: {
      name: "Kesava Perumal Kovil",
      tamilName: "கேசவப் பெருமாள் கோவில்",
      area: "Mylapore",
      city: "Chennai",
      state: "Tamil Nadu",
      country: "India",
      address: "Kesava Perumal Kovil, Mylapore, Chennai, Tamil Nadu, India",
      mapUrl:
        "https://www.google.com/maps/search/?api=1&query=Kesava+Perumal+Kovil+Mylapore+Chennai"
    }
  },

  reception: {
    title: "Wedding Reception",
    tamilTitle: "திருமண வரவேற்பு",
    date: "2026-11-15",
    day: "Sunday",
    time: { start: "18:30", display: "6:30 PM onwards" },
    venue: {
      name: "SS Mahal",
      address:
        "No. 10/208, Masthan Gori Street, Ambattur, Chennai – 600053, Tamil Nadu, India",
      street: "No. 10/208, Masthan Gori Street",
      area: "Ambattur",
      city: "Chennai",
      state: "Tamil Nadu",
      pincode: "600053",
      landmarks: "Near Ambattur Statue and Ambattur Railway Station",
      mapUrl:
        "https://www.google.com/maps/search/?api=1&query=SS+Mahal+Masthan+Gori+Street+Ambattur+Chennai"
    }
  },

  families: {
    groups: [
      { members: ["M Selvaraj", "S Meena"] },
      { members: ["D. Sankar", "S. Vijaya Lakshmi"] }
    ],
    display: "M Selvaraj & S Meena · D. Sankar, S. Vijaya Lakshmi",
    tamilDisplay: "செல்வராஜ் குடும்பத்தினர் மற்றும் சங்கர் குடும்பத்தினர்"
  },

  // Photographs (Pexels, free to use). `src` is the base image URL; script.js adds size parameters.
  // Photos are illustrative only: they do not depict the couple or the actual venues.
  images: {
    credit: "Photographs from Pexels, free to use. Images are illustrative and do not show the couple or the actual venues.",
    hero: {
      src: "homeBG2.jpeg",
      raw: true,
      alt: "Wedding home page background",
      position: "50% 25%"
    },
    ceremony: {
      src: "https://images.pexels.com/photos/12603609/pexels-photo-12603609.jpeg",
      alt: "A traditional Indian wedding ceremony",
      position: "50% 40%"
    },
    couple: {
      src: "couple%20image.png",
      raw: true,
      alt: "The couple",
      position: "50% 30%"
    },
    transition: {
      src: "https://images.pexels.com/photos/33485965/pexels-photo-33485965.jpeg",
      alt: "Floral decor at an Indian palace wedding",
      position: "50% 55%"
    },
    reception: {
      src: "https://images.pexels.com/photos/31307956/pexels-photo-31307956.jpeg",
      alt: "Elegant floral wedding decoration at an Indian wedding",
      position: "50% 50%"
    },
    closing: {
      src: "https://images.pexels.com/photos/35825625/pexels-photo-35825625.jpeg",
      alt: "Gopuram of a South Indian temple, Chennai",
      position: "50% 60%"
    }
  },

  timeline: { title: "Our celebrations", tamilTitle: "திருமண நிகழ்வுகள்" },

  countdown: {
    targetDate: "2026-11-11T09:15:00+05:30",
    title: "Counting down to our special day",
    tamilTitle: "திருமண நாளை நோக்கி"
  },

  website: {
    title: "Surya Prakash & Shamila",
    subtitle: "Together Forever",
    tamilSubtitle: "இணையும் இரு இதயங்கள்",
    footerMessage: "With Love and Best Wishes from Yogesh "
  }
};

// Export for use in a browser or other JavaScript environment.
if (typeof module !== "undefined" && module.exports) {
  module.exports = weddingData;
}
