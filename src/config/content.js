export const siteContent = {
  global: {
    siteName: 'The Top Gym',
    tagline: 'No Pain No Gain',
    location: 'Greater Noida',
    phone: '+91 70291 39659',
    email: 'hello@thetopgym.in',
    whatsapp: "https://wa.me/917029139659?text=Hey%20The%20Top%20Gym!%20%F0%9F%8F%8B%EF%B8%8F%E2%80%8D%E2%99%82%EF%B8%8F%20I'm%20ready%20to%20train%20insane%20and%20transform%20myself.%20Could%20you%20share%20some%20details%20about%20your%20membership%20plans%3F",
    addressLine1: 'The Top Gym, JBM Complex',
    addressLine2: 'Greater Noida, UP',
    mapIframeUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.0!2d77.4800!3d28.4700!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sGreater+Noida!5e0!3m2!1sen!2sin!4v1',
    mapDirectionsUrl: 'https://maps.google.com/?q=Greater+Noida,Uttar+Pradesh',
  },
  hero: {
    tag: "Greater Noida's Premier Fitness Centre",
    headingLine1: 'TRAIN ',
    headingEm: 'INSANE',
    headingLine2: 'OR REMAIN THE SAME',
    sub: 'State-of-the-art equipment, certified trainers, and a culture that transforms beginners into champions — every single day.',
    stats: [
      { target: 500, label: 'Active Members' },
      { target: 50, label: 'Equipment Pieces' },
      { target: 10, label: 'Expert Trainers' },
      { target: 5, label: 'Years Strong' }
    ]
  },
  about: {
    badgeNum: '5+',
    badgeLabel: 'Years of\\nExcellence',
    tag: 'About Us',
    headingPlain: 'WE BUILD ',
    headingEm: 'CHAMPIONS',
    p1: "The Top Gym is Greater Noida's most dedicated fitness centre, built by JBM for people serious about results. Our facility features premium equipment, motivational atmosphere, and certified trainers who live and breathe fitness.",
    p2: 'From beginners stepping in for the first time to competitive athletes chasing personal bests, we provide the environment, tools, and expertise to make every rep count.',
    feats: [
      'Premium Equipment', 'Certified Trainers', 'Personal Training',
      'Diet Guidance', 'Cardio Zone', 'Free Weights Area'
    ]
  },
  gallery: {
    tag: 'Our Facility',
    headingPlain: 'BUILT TO ',
    headingEm: 'PERFORM'
  },
  classes: {
    tag: 'What We Offer',
    headingPlain: 'OUR ',
    headingEm: 'CLASSES',
    items: [
      { category: 'Strength', level: 'All Levels', icon: '🏋️', name: 'Strength Training', desc: 'Build raw power and muscle with guided compound lifts and progressive overload programming.', tags: ['Daily', '60 min'], intensity: 100 },
      { category: 'Cardio', level: 'All Levels', icon: '🚴', name: 'Cardio & Cycling', desc: 'High-intensity cycling sessions designed to shred fat and boost cardiovascular endurance.', tags: ['Morning', '45 min'], intensity: 80 },
      { category: 'Personal', level: '1-on-1', icon: '💪', name: 'Personal Training', desc: 'One-on-one sessions tailored to your exact goals — weight loss, muscle gain, or peak performance.', tags: ['Flexible', '60 min'], intensity: 100 },
      { category: 'HIIT', level: 'Intermediate', icon: '🔥', name: 'HIIT Circuit', desc: 'Explosive full-body circuits combining strength and cardio for maximum calorie burn.', tags: ['Evening', '50 min'], intensity: 100 },
      { category: 'Functional', level: 'All Levels', icon: '🥊', name: 'Functional Fitness', desc: 'Move better, live better. Improve mobility, core strength and everyday athletic performance.', tags: ['Weekend', '60 min'], intensity: 60 },
      { category: 'Recovery', level: 'All Levels', icon: '🧘', name: 'Recovery & Stretch', desc: 'Active recovery to reduce soreness, improve flexibility and keep you performing at your best.', tags: ['Morning', '40 min'], intensity: 20 },
    ]
  },
  schedule: {
    tag: 'Weekly Timetable',
    headingPlain: 'CLASS ',
    headingEm: 'SCHEDULE',
    rows: [
      { time: '6:00 AM', name: 'Morning Strength', trainer: 'Rahul Sir', duration: '60 min', level: 'All Levels', status: 'Open' },
      { time: '7:30 AM', name: 'Cardio Cycling', trainer: 'Arjun Sir', duration: '45 min', level: 'All Levels', status: 'Open' },
      { time: '9:00 AM', name: 'HIIT Circuit', trainer: 'Vikram Sir', duration: '50 min', level: 'Intermediate', status: 'Full' },
      { time: '11:00 AM', name: 'Functional Fitness', trainer: 'Rahul Sir', duration: '60 min', level: 'All Levels', status: 'Open' },
      { time: '5:00 PM', name: 'Personal Training', trainer: 'Arjun Sir', duration: '60 min', level: 'Personalised', status: 'Open' },
      { time: '6:30 PM', name: 'Evening Strength', trainer: 'Vikram Sir', duration: '60 min', level: 'All Levels', status: 'Open' },
      { time: '8:00 PM', name: 'Recovery & Stretch', trainer: 'Rahul Sir', duration: '40 min', level: 'All Levels', status: 'Open' }
    ]
  },
  trainers: {
    tag: 'Expert Team',
    headingPlain: 'MEET YOUR ',
    headingEm: 'TRAINERS',
    list: [
      { id: 0, name: 'RAHUL SHARMA', roleHead: 'Head Trainer · Strength & Conditioning', roleBack: 'Head Trainer · Strength', bio: 'Certified strength coach with 6+ years of experience transforming physiques at all fitness levels. Specialises in progressive overload programming, barbell mechanics, and sustainable muscle hypertrophy. Clients consistently surpass personal records within 90 days.',
        stats: [{n: '6+', l: 'Yrs Exp'}, {n: '200+', l: 'Clients'}, {n: '50+', l: 'PRs Broken'}, {n: '98%', l: 'Retention'}],
        certs: ['ISSA Certified Strength & Conditioning Coach', 'Sports Nutrition & Supplementation Specialist', 'First Aid & CPR Certified'],
        specs: ['Powerlifting', 'Muscle Building', 'Body Recomposition', 'Fat Loss', 'Beginner Programs'],
        schedule: [
          {day: 'Mon / Wed / Fri', time: '6:00 – 9:00 AM', cls: 'Morning Strength'},
          {day: 'Mon / Wed / Fri', time: '7:00 – 9:00 PM', cls: 'Evening Strength'},
          {day: 'Tue / Thu', time: '11:00 AM – 1:00 PM', cls: 'Functional Fitness'},
          {day: 'Saturday', time: '7:00 – 10:00 AM', cls: 'Open Floor PT'}
        ]
      },
      { id: 1, name: 'VIKRAM SINGH', roleHead: 'Senior Trainer · Bodybuilding', roleBack: 'Senior Trainer · Bodybuilding', bio: 'Competitive bodybuilder and certified personal trainer with 5+ years of transformation coaching. Combines precision hypertrophy training with macro-based meal plans for visible results within 8 weeks.',
        stats: [{n: '5+', l: 'Yrs Exp'}, {n: '150+', l: 'Clients'}, {n: '12', l: 'Comp Wins'}, {n: '95%', l: 'Goal Rate'}],
        certs: ['ACE Certified Personal Trainer', 'Precision Nutrition Level 1', 'Body Composition Specialist'],
        specs: ['Bodybuilding', 'Hypertrophy', 'Contest Prep', 'Diet Planning', 'Supplement Guidance'],
        schedule: [
          {day: 'Mon / Tue / Thu', time: '5:30 – 8:30 AM', cls: 'Early Bird Strength'},
          {day: 'Mon / Wed / Fri', time: '6:00 – 9:00 PM', cls: 'Evening Bodybuilding'},
          {day: 'Wednesday', time: '10:00 AM – 12:00 PM', cls: 'Personal Training'},
          {day: 'Sunday', time: '8:00 – 11:00 AM', cls: 'Weekend Conditioning'}
        ]
      },
      { id: 2, name: 'ARJUN VERMA', roleHead: 'Trainer · HIIT & Functional Fitness', roleBack: 'Trainer · HIIT & Functional', bio: 'Athletic performance specialist with 4+ years coaching explosive, functional movement patterns. Sessions burn up to 800 calories and are designed for maximum metabolic output for all fitness levels.',
        stats: [{n: '4+', l: 'Yrs Exp'}, {n: '120+', l: 'Clients'}, {n: '800', l: 'Cal/Session'}, {n: '92%', l: 'Satisfaction'}],
        certs: ['NASM Certified Personal Trainer', 'TRX Suspension Training Specialist', 'Mobility & Flexibility Coach'],
        specs: ['HIIT Circuits', 'Mobility Training', 'Athletic Performance', 'Agility & Speed', 'Weight Loss'],
        schedule: [
          {day: 'Tue / Thu / Sat', time: '7:30 – 9:30 AM', cls: 'Cardio Cycling'},
          {day: 'Mon / Wed / Fri', time: '9:00 – 10:30 AM', cls: 'HIIT Circuit'},
          {day: 'Tue / Fri', time: '5:00 – 7:00 PM', cls: 'Personal Training'},
          {day: 'Sunday', time: '9:00 – 11:00 AM', cls: 'Recovery & Stretch'}
        ]
      }
    ]
  },
  pricing: {
    tag: 'Membership Plans',
    headingPlain: 'CHOOSE YOUR ',
    headingEm: 'PLAN',
    plans: [
      { name: 'Basic', price: '799', period: 'per month', isPopular: false,
        features: [
          { text: 'Gym Floor Access', off: false },
          { text: 'All Equipment Use', off: false },
          { text: 'Locker Room', off: false },
          { text: 'Personal Trainer', off: true },
          { text: 'Diet Consultation', off: true },
          { text: 'Group Classes', off: true }
        ]
      },
      { name: 'Standard', price: '1,499', period: 'per month', isPopular: true,
        features: [
          { text: 'Gym Floor Access', off: false },
          { text: 'All Equipment Use', off: false },
          { text: 'Locker Room', off: false },
          { text: 'Group Classes', off: false },
          { text: 'Diet Consultation', off: false },
          { text: 'Personal Trainer Sessions', off: true }
        ]
      },
      { name: 'Premium', price: '2,499', period: 'per month', isPopular: false,
        features: [
          { text: 'Gym Floor Access', off: false },
          { text: 'All Equipment Use', off: false },
          { text: 'Locker Room', off: false },
          { text: 'Group Classes', off: false },
          { text: 'Diet Consultation', off: false },
          { text: '8 Personal Trainer Sessions', off: false }
        ]
      }
    ]
  },
  contact: {
    tag: 'Get In Touch',
    headingPlain: 'CONTACT ',
    headingEm: 'US',
    openingHours: [
      { day: 'Mon – Fri', time: '5:30 AM – 10:30 PM' },
      { day: 'Saturday', time: '6:00 AM – 9:00 PM' },
      { day: 'Sunday', time: '7:00 AM – 2:00 PM' },
      { day: 'Public Holidays', time: '7:00 AM – 12:00 PM' }
    ]
  },
  footer: {
    taglineParams: ['No Pain', 'No Gain', 'Greater Noida'],
    description: "Greater Noida's premier fitness centre by JBM. Premium equipment, certified trainers, and a community that champions results.",
    bottomText: '© 2026 The Top Gym · JBM, Greater Noida. All rights reserved.',
    bottomTag: 'No Fear · No Limits · No Excuses'
  }
};
