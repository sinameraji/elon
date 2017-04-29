cards = [
  {
    "id": 1,
    "description": "We just reached 1000 paying customers.",
    "character": "office-manager",
    "conditions": "",
    "choices": {
      "a": {
        "label": "Awesome",
        "values": {
          "valuation": 2,
          "happiness": 5,
          "time": 0
        }
      },
      "b": {
        "label": "Awesome",
        "values": {
          "valuation": 2,
          "happiness": 5,
          "time": 0
        }
      }
    }
  },
  {
    "id": 2,
    "description": "Slack is down.",
    "character": "victor-frontend, tanya-frontend",
    "conditions": "",
    "choices": {
      "a": {
        "label": "Use Skype",
        "values": {
          "valuation": 0,
          "happiness": -1,
          "time": -1
        }
      },
      "b": {
        "label": "Bring the beers",
        "values": {
          "valuation": 0,
          "happiness": 2,
          "time": -1
        }
      }
    }
  },
  {
    "id": 3,
    "description": "Github is down.",
    "character": "victor-frontend, tanya-frontend",
    "conditions": "",
    "choices": {
      "a": {
        "label": "Work in local",
        "values": {
          "valuation": 0,
          "happiness": -1,
          "time": -1
        }
      },
      "b": {
        "label": "Grab a beer",
        "values": {
          "valuation": 0,
          "happiness": 2,
          "time": -1
        }
      }
    }
  },
  {
    "id": 4,
    "description": "We should rewrite everything in PHP.",
    "character": "victor-frontend, tanya-frontend",
    "conditions": "",
    "choices": {
      "a": {
        "label": "Sure",
        "values": {
          "valuation": 0,
          "happiness": -2,
          "time": -1
        }
      },
      "b": {
        "label": "No",
        "values": {
          "valuation": 0,
          "happiness": 0,
          "time": 0
        }
      }
    }
  },
  {
    "id": 5,
    "description": "A lot of time has elapsed, but still no MVP. Maybe PHP wasn't the way to go...",
    "character": "",
    "conditions": "choice(4.a) & beforeWeek(6) & aboveValuation(500)",
    "choices": {
      "a": {
        "label": "No, PHP rocks!",
        "values": {
          "valuation": -5,
          "happiness": -3,
          "time": -3
        }
      },
      "b": {
        "label": "Damn PHP",
        "values": {
          "valuation": -5,
          "happiness": -3,
          "time": -3
        }
      }
    }
  },
  {
    "id": 6,
    "description": "We need a Terms of Service.",
    "character": "office-manager",
    "conditions": "",
    "choices": {
      "a": {
        "label": "Use expensive lawyer",
        "values": {
          "valuation": 1,
          "happiness": 0,
          "time": -1
        }
      },
      "b": {
        "label": "Do it yourself",
        "values": {
          "valuation": 1,
          "happiness": -1,
          "time": -3
        }
      }
    }
  },
  {
    "id": 7,
    "description": "Office morale is down.",
    "character": "office-manager",
    "conditions": "belowHappiness(30)",
    "choices": {
      "a": {
        "label": "Office party",
        "values": {
          "valuation": 0,
          "happiness": 5,
          "time": -1
        }
      },
      "b": {
        "label": "Give out bonuses",
        "values": {
          "valuation": -1,
          "happiness": 5,
          "time": 0
        }
      }
    }
  },
  {
    "id": 8,
    "description": "The binge lasts for a week. A prostitute is found dead.",
    "character": "",
    "conditions": "choice(7.a) & immediate & aboveValuation(500)",
    "choices": {
      "a": {
        "label": "Oh no...",
        "values": {
          "valuation": -5,
          "happiness": 0,
          "time": -1
        }
      },
      "b": {
        "label": "Happens...",
        "values": {
          "valuation": -5,
          "happiness": 0,
          "time": -1
        }
      }
    }
  },
  {
    "id": 9,
    "description": "We need to hire a product manager. Which one do you choose?",
    "character": "office-manager",
    "conditions": "",
    "choices": {
      "a": {
        "label": "Genius douche",
        "values": {
          "valuation": 3,
          "happiness": -3,
          "time": -1
        }
      },
      "b": {
        "label": "Ambitious rookie",
        "values": {
          "valuation": 0,
          "happiness": 0,
          "time": -3
        }
      }
    }
  },
  {
    "id": 10,
    "description": "Our competitor just filed their IPO.",
    "character": "chad-marketing",
    "conditions": "afterWeek(3)",
    "choices": {
      "a": {
        "label": "Drunk tweet them",
        "values": {
          "valuation": -4,
          "happiness": 2,
          "time": -1
        }
      },
      "b": {
        "label": "Be civil about it",
        "values": {
          "valuation": -2,
          "happiness": -1,
          "time": -1
        }
      }
    }
  },
  {
    "id": 11,
    "description": "New hiring software is available for $40 a month.",
    "character": "office-manager",
    "conditions": "",
    "choices": {
      "a": {
        "label": "Get it",
        "values": {
          "valuation": 0,
          "happiness": 1,
          "time": -3
        }
      },
      "b": {
        "label": "Ignore",
        "values": {
          "valuation": 0,
          "happiness": -1,
          "time": -1
        }
      }
    }
  },
  {
    "id": 12,
    "description": "Someone posted a nasty tweet about our company.",
    "character": "chad-marketing",
    "conditions": "",
    "choices": {
      "a": {
        "label": "Get in a fight",
        "values": {
          "valuation": 1,
          "happiness": 2,
          "time": -3
        }
      },
      "b": {
        "label": "Be cool",
        "values": {
          "valuation": -1,
          "happiness": -2,
          "time": -1
        }
      }
    }
  },
  {
    "id": 13,
    "description": "One of our employees left their unlocked phone at a bar. This is a serious security breach",
    "character": "backend-dev-01",
    "conditions": "",
    "choices": {
      "a": {
        "label": "Fire them",
        "values": {
          "valuation": -2,
          "happiness": 0,
          "time": -2
        }
      },
      "b": {
        "label": "Let them stay",
        "values": {
          "valuation": 0,
          "happiness": 0,
          "time": 0
        }
      }
    }
  },
  {
    "id": 14,
    "description": "We've been working on a mobile app for 3 months but it's still not ready.",
    "character": "product-manager",
    "conditions": "",
    "choices": {
      "a": {
        "label": "Launch it anyway",
        "values": {
          "valuation": -3,
          "happiness": -2,
          "time": 0
        }
      },
      "b": {
        "label": "Give them time",
        "values": {
          "valuation": -1,
          "happiness": 2,
          "time": -3
        }
      }
    }
  },
  {
    "id": 15,
    "description": "I want to invest in your company and I want 40%.",
    "character": "richard-branson",
    "conditions": "belowValuation(500)",
    "choices": {
      "a": {
        "label": "Fuck this guy",
        "values": {
          "valuation": -3,
          "happiness": 2,
          "time": -1
        }
      },
      "b": {
        "label": "Let's do it",
        "values": {
          "valuation": 2,
          "happiness": -2,
          "time": -1
        }
      }
    }
  },
  {
    "id": 16,
    "description": "I wanna invest in your startup - but you have to step down as CEO.",
    "character": "vc-fred, vc-mike",
    "conditions": "",
    "choices": {
      "a": {
        "label": "I'm here to stay",
        "values": {
          "valuation": -2,
          "happiness": 3,
          "time": -1
        }
      },
      "b": {
        "label": "It's for the best",
        "values": {
          "valuation": 2,
          "happiness": -3,
          "time": -2
        }
      }
    }
  },
  {
    "id": 17,
    "description": "You step down and become \"Chief Happiness Officer\".",
    "character": "",
    "conditions": "choice(16.b) & immediate",
    "choices": {
      "a": {
        "label": "How clever!",
        "values": {
          "valuation": 2,
          "happiness": -1,
          "time": 0
        }
      },
      "b": {
        "label": "Cry a bit",
        "values": {
          "valuation": 2,
          "happiness": -1,
          "time": 0
        }
      }
    }
  },
  {
    "id": 18,
    "description": "A Google algorithm update killed our website rank!",
    "character": "seo-manager",
    "conditions": "",
    "choices": {
      "a": {
        "label": "Hire an expert",
        "values": {
          "valuation": 2,
          "happiness": 0,
          "time": -2
        }
      },
      "b": {
        "label": "Who cares",
        "values": {
          "valuation": -2,
          "happiness": -2,
          "time": -1
        }
      }
    }
  },
  {
    "id": 19,
    "description": "I want to use your blood in my longevity experiment in exchange for investment.",
    "character": "vc-mike, vc-fred",
    "conditions": "",
    "choices": {
      "a": {
        "label": "Sure",
        "values": {
          "valuation": 3,
          "happiness": -2,
          "time": -2
        }
      },
      "b": {
        "label": "No way",
        "values": {
          "valuation": -2,
          "happiness": 2,
          "time": -1
        }
      }
    }
  },
  {
    "id": 20,
    "description": "A famous CEO will be your mentor if you have sex with them.",
    "character": "vc-raiden, vc-fred",
    "conditions": "",
    "choices": {
      "a": {
        "label": "Yeah",
        "values": {
          "valuation": 4,
          "happiness": -3,
          "time": -2
        }
      },
      "b": {
        "label": "Nah",
        "values": {
          "valuation": -2,
          "happiness": 3,
          "time": 0
        }
      }
    }
  },
  {
    "id": 21,
    "description": "Users are complaining about one of our rude support employees.",
    "character": "support-01",
    "conditions": "",
    "choices": {
      "a": {
        "label": "Fire them",
        "values": {
          "valuation": 2,
          "happiness": -2,
          "time": -2
        }
      },
      "b": {
        "label": "Whatever",
        "values": {
          "valuation": -1,
          "happiness": 3,
          "time": 0
        }
      }
    }
  },
  {
    "id": 22,
    "description": "Your best friend just got an MBA and wants to join your company in BizDev.",
    "character": "assistant",
    "conditions": "",
    "choices": {
      "a": {
        "label": "Sure",
        "values": {
          "valuation": -1,
          "happiness": 2,
          "time": -4
        }
      },
      "b": {
        "label": "No way",
        "values": {
          "valuation": 0,
          "happiness": -3,
          "time": 0
        }
      }
    }
  },
  {
    "id": 23,
    "description": "It's time to scale up! We need five new people.",
    "character": "vc-mike, vc-fred",
    "conditions": "",
    "choices": {
      "a": {
        "label": "Hire for sales",
        "values": {
          "valuation": 4,
          "happiness": -2,
          "time": -4
        }
      },
      "b": {
        "label": "Hire developers",
        "values": {
          "valuation": 1,
          "happiness": 2,
          "time": 0
        }
      }
    }
  },
  {
    "id": 24,
    "description": "Huffington Post wants to publish an article about you.",
    "character": "journalist",
    "conditions": "",
    "choices": {
      "a": {
        "label": "Sure!",
        "values": {
          "valuation": 3,
          "happiness": 3,
          "time": -4
        }
      },
      "b": {
        "label": "No time",
        "values": {
          "valuation": 0,
          "happiness": -2,
          "time": 0
        }
      }
    }
  },
  {
    "id": 25,
    "description": "Huffington Post published an article calling you a moron",
    "character": "",
    "conditions": "choice(24.b) & immediate",
    "choices": {
      "a": {
        "label": "Call them a moron",
        "values": {
          "valuation": -2,
          "happiness": 0,
          "time": 0
        }
      },
      "b": {
        "label": "Be cool",
        "values": {
          "valuation": -2,
          "happiness": 0,
          "time": 0
        }
      }
    }
  },
  {
    "id": 26,
    "description": "I would like to know your pricing strategy.",
    "character": "vc-fred, vc-mike",
    "conditions": "",
    "choices": {
      "a": {
        "label": "Pricing strategy?",
        "values": {
          "valuation": -5,
          "happiness": -2,
          "time": 0
        }
      },
      "b": {
        "label": "Bluff",
        "values": {
          "valuation": 2,
          "happiness": 1,
          "time": 0
        }
      }
    }
  },
  {
    "id": 27,
    "description": "Where should we build our new HQ?",
    "character": "office-manager",
    "conditions": "",
    "choices": {
      "a": {
        "label": "Silicon Valley",
        "values": {
          "valuation": 4,
          "happiness": -2,
          "time": -2
        }
      },
      "b": {
        "label": "Berlin",
        "values": {
          "valuation": -2,
          "happiness": 4,
          "time": 0
        }
      }
    }
  },
  {
    "id": 28,
    "description": "I want to be a digital nomad and work remotely from Bangkok.",
    "character": "tanya-frontend, victor-frontend",
    "conditions": "",
    "choices": {
      "a": {
        "label": "No way",
        "values": {
          "valuation": 0,
          "happiness": -4,
          "time": 0
        }
      },
      "b": {
        "label": "Remote work for everyone",
        "values": {
          "valuation": -3,
          "happiness": 5,
          "time": 0
        }
      }
    }
  },
  {
    "id": 29,
    "description": "We're buried under paperwork! What should we do?",
    "character": "assistant",
    "conditions": "",
    "choices": {
      "a": {
        "label": "Outsource",
        "values": {
          "valuation": -2,
          "happiness": 3,
          "time": 0
        }
      },
      "b": {
        "label": "Automate",
        "values": {
          "valuation": 0,
          "happiness": -2,
          "time": -3
        }
      }
    }
  },
  {
    "id": 30,
    "description": "It's the middle of the night and the site is down!",
    "character": "support-01",
    "conditions": "",
    "choices": {
      "a": {
        "label": "Try to fix it",
        "values": {
          "valuation": 0,
          "happiness": -2,
          "time": -5
        }
      },
      "b": {
        "label": "Wait for devs",
        "values": {
          "valuation": 0,
          "happiness": 2,
          "time": 0
        }
      }
    }
  },
  {
    "id": 31,
    "description": "The market is turning! Should we adapt our business plan?",
    "character": "chad-marketing",
    "conditions": "",
    "choices": {
      "a": {
        "label": "Pivot now!",
        "values": {
          "valuation": 3,
          "happiness": -2,
          "time": -3
        }
      },
      "b": {
        "label": "Stick to the plan",
        "values": {
          "valuation": -2,
          "happiness": 2,
          "time": 0
        }
      }
    }
  },
  {
    "id": 32,
    "description": "Your pivot isn't working out.",
    "character": "",
    "conditions": "choice(31.a)",
    "choices": {
      "a": {
        "label": "Scrap it",
        "values": {
          "valuation": 1,
          "happiness": 0,
          "time": 0
        }
      },
      "b": {
        "label": "Just keep swimming",
        "values": {
          "valuation": -1,
          "happiness": 2,
          "time": -1
        }
      }
    }
  },
  {
    "id": 33,
    "description": "I'm getting married and I want 2 months off.",
    "character": "product-manager",
    "conditions": "",
    "choices": {
      "a": {
        "label": "Sure",
        "values": {
          "valuation": -2,
          "happiness": 3,
          "time": -4
        }
      },
      "b": {
        "label": "No way",
        "values": {
          "valuation": 0,
          "happiness": -3,
          "time": 0
        }
      }
    }
  },
  {
    "id": 34,
    "description": "I quit.",
    "character": "product-manager",
    "conditions": "choice(33.b) & immediate",
    "choices": {
      "a": {
        "label": "How about a raise?",
        "values": {
          "valuation": -1,
          "happiness": 1,
          "time": -1
        }
      },
      "b": {
        "label": "Ignore",
        "values": {
          "valuation": 0,
          "happiness": -2,
          "time": -1
        }
      }
    }
  },
  {
    "id": 35,
    "description": "I want a $10,000 raise or I'll quit.",
    "character": "designer-01, designer-02",
    "conditions": "",
    "choices": {
      "a": {
        "label": "Give the raise",
        "values": {
          "valuation": -2,
          "happiness": 4,
          "time": 0
        }
      },
      "b": {
        "label": "Negotiate",
        "values": {
          "valuation": 2,
          "happiness": -2,
          "time": -3
        }
      }
    }
  },
  {
    "id": 36,
    "description": "I'm looking around for a new job.",
    "character": "designer-01, designer-02",
    "conditions": "choice(35.b) & immediate",
    "choices": {
      "a": {
        "label": "Give them raise",
        "values": {
          "valuation": 0,
          "happiness": 1,
          "time": -1
        }
      },
      "b": {
        "label": "Cool story",
        "values": {
          "valuation": 0,
          "happiness": -3,
          "time": 0
        }
      }
    }
  },
  {
    "id": 37,
    "description": "I've found a better paying job. kthxbye",
    "character": "designer-01, designer-02",
    "conditions": "choice(36.b)",
    "choices": {
      "a": {
        "label": "...",
        "values": {
          "valuation": -5,
          "happiness": -2,
          "time": -3
        }
      },
      "b": {
        "label": "...",
        "values": {
          "valuation": -5,
          "happiness": -2,
          "time": -3
        }
      }
    }
  },
  {
    "id": 38,
    "description": "Our biggest customer just cancelled their subscription.",
    "character": "roy-sales",
    "conditions": "",
    "choices": {
      "a": {
        "label": "Beg them to come back",
        "values": {
          "valuation": 0,
          "happiness": -3,
          "time": -2
        }
      },
      "b": {
        "label": "Get drunk",
        "values": {
          "valuation": -3,
          "happiness": 5,
          "time": -2
        }
      }
    }
  },
  {
    "id": 39,
    "description": "Cash flow is down and you're too busy pinching pennies to look for a new funding round.",
    "character": "cfo",
    "conditions": "",
    "choices": {
      "a": {
        "label": "Call investors",
        "values": {
          "valuation": 3,
          "happiness": -4,
          "time": -2
        }
      },
      "b": {
        "label": "Cut bonuses",
        "values": {
          "valuation": 0,
          "happiness": -5,
          "time": -2
        }
      }
    }
  },
  {
    "id": 40,
    "description": "I need more leads, chief!",
    "character": "roy-sales",
    "conditions": "",
    "choices": {
      "a": {
        "label": "Get good",
        "values": {
          "valuation": -2,
          "happiness": 0,
          "time": -2
        }
      },
      "b": {
        "label": "Do a marketing stunt",
        "values": {
          "valuation": 3,
          "happiness": 3,
          "time": -3
        }
      }
    }
  },
  {
    "id": 41,
    "description": "A competitor has copied our best feature!",
    "character": "product-manager",
    "conditions": "afterWeek(3)",
    "choices": {
      "a": {
        "label": "Sue them",
        "values": {
          "valuation": -4,
          "happiness": 0,
          "time": -5
        }
      },
      "b": {
        "label": "Ignore",
        "values": {
          "valuation": -1,
          "happiness": 2,
          "time": 0
        }
      }
    }
  },
  {
    "id": 42,
    "description": "We know that there's this important deadline coming up but it's Thanksgiving and we want to go home.",
    "character": "tanya-frontend, victor-frontend",
    "conditions": "",
    "choices": {
      "a": {
        "label": "Let them go home",
        "values": {
          "valuation": -3,
          "happiness": 5,
          "time": -4
        }
      },
      "b": {
        "label": "Make them work",
        "values": {
          "valuation": 4,
          "happiness": -4,
          "time": 0
        }
      }
    }
  },
  {
    "id": 43,
    "description": "Your employees want a fancy new coffee machine.",
    "character": "office-manager",
    "conditions": "",
    "choices": {
      "a": {
        "label": "Buy it",
        "values": {
          "valuation": -1,
          "happiness": 3,
          "time": -1
        }
      },
      "b": {
        "label": "Denied",
        "values": {
          "valuation": 0,
          "happiness": -5,
          "time": 0
        }
      }
    }
  },
  {
    "id": 44,
    "description": "Your employees want health insurance.",
    "character": "office-manager",
    "conditions": "",
    "choices": {
      "a": {
        "label": "Sure",
        "values": {
          "valuation": -2,
          "happiness": 4,
          "time": -3
        }
      },
      "b": {
        "label": "No way",
        "values": {
          "valuation": 3,
          "happiness": -5,
          "time": 0
        }
      }
    }
  },
  {
    "id": 45,
    "description": "Your company offers no health insurance. 2 employees just died of Pneumonia.",
    "character": "bad-consequence",
    "conditions": "choice(44.b)",
    "choices": {
      "a": {
        "label": "Offer insurance",
        "values": {
          "valuation": -5,
          "happiness": -5,
          "time": -5
        }
      },
      "b": {
        "label": "Just hire new people",
        "values": {
          "valuation": -5,
          "happiness": -5,
          "time": -5
        }
      }
    }
  },
  {
    "id": 46,
    "description": "Your company still offers no health insurance. An employee just died of Syphilis.",
    "character": "bad-consequence",
    "conditions": "choice(45.b)",
    "choices": {
      "a": {
        "label": "Offer insurance",
        "values": {
          "valuation": -5,
          "happiness": -5,
          "time": -5
        }
      },
      "b": {
        "label": "Just hire new people",
        "values": {
          "valuation": -5,
          "happiness": -5,
          "time": -5
        }
      }
    }
  },
  {
    "id": 47,
    "description": "Your mom offers to do your accounting.",
    "character": "assistant",
    "conditions": "",
    "choices": {
      "a": {
        "label": "Thanks, mom.",
        "values": {
          "valuation": -2,
          "happiness": 3,
          "time": -4
        }
      },
      "b": {
        "label": "Stay out of this!",
        "values": {
          "valuation": 2,
          "happiness": -2,
          "time": 0
        }
      }
    }
  },
  {
    "id": 48,
    "description": "I know it's kinda late, but can we change the platform?",
    "character": "tanya-frontend, victor-frontend",
    "conditions": "",
    "choices": {
      "a": {
        "label": "Change everything",
        "values": {
          "valuation": -4,
          "happiness": 2,
          "time": -5
        }
      },
      "b": {
        "label": "Stick to current platform",
        "values": {
          "valuation": 3,
          "happiness": -5,
          "time": 0
        }
      }
    }
  },
  {
    "id": 49,
    "description": "The codebase is a mess and we're fighting the platform every inch of the way...",
    "character": "tanya-frontend, victor-frontend",
    "conditions": "choice(48.b)",
    "choices": {
      "a": {
        "label": "Hire more devs",
        "values": {
          "valuation": 2,
          "happiness": -2,
          "time": -1
        }
      },
      "b": {
        "label": "Refactor what you can",
        "values": {
          "valuation": -1,
          "happiness": 2,
          "time": -5
        }
      }
    }
  },
  {
    "id": 50,
    "description": "Thanks for letting us switch platforms. The rewrite is coming along really well!",
    "character": "tanya-frontend, victor-frontend",
    "conditions": "choice(48.a)",
    "choices": {
      "a": {
        "label": "Cool",
        "values": {
          "valuation": 4,
          "happiness": 4,
          "time": -1
        }
      },
      "b": {
        "label": "Very cool",
        "values": {
          "valuation": 4,
          "happiness": 5,
          "time": -1
        }
      }
    }
  },
  {
    "id": 51,
    "description": "Your sister just had a baby - 3000 miles from here.",
    "character": "assistant",
    "conditions": "",
    "choices": {
      "a": {
        "label": "Fly to see her",
        "values": {
          "valuation": -3,
          "happiness": 2,
          "time": -5
        }
      },
      "b": {
        "label": "See you at Christmas",
        "values": {
          "valuation": 3,
          "happiness": -2,
          "time": 0
        }
      }
    }
  },
  {
    "id": 52,
    "description": "Zesty offers you a deal to cater lunches to your office, for a mere $200 a day!",
    "character": "office-manager",
    "conditions": "",
    "choices": {
      "a": {
        "label": "Sure",
        "values": {
          "valuation": -2,
          "happiness": 4,
          "time": 0
        }
      },
      "b": {
        "label": "Stay hungry",
        "values": {
          "valuation": 2,
          "happiness": -5,
          "time": 0
        }
      }
    }
  },
  {
    "id": 53,
    "description": "500 Startups wants you to become a mentor.",
    "character": "vc-raiden",
    "conditions": "",
    "choices": {
      "a": {
        "label": "Let's do it",
        "values": {
          "valuation": 3,
          "happiness": -2,
          "time": -5
        }
      },
      "b": {
        "label": "No way",
        "values": {
          "valuation": -1,
          "happiness": 2,
          "time": 0
        }
      }
    }
  },
  {
    "id": 54,
    "description": "I've adopted a baby chimp. Can I bring it to the office?",
    "character": "tanya-frontend, victor-frontend",
    "conditions": "",
    "choices": {
      "a": {
        "label": "Aww cuute",
        "values": {
          "valuation": 0,
          "happiness": 3,
          "time": -4
        }
      },
      "b": {
        "label": "This is not a zoo",
        "values": {
          "valuation": 2,
          "happiness": -5,
          "time": 0
        }
      }
    }
  },
  {
    "id": 55,
    "description": "You've been completely ignoring us for the past month and we're really pissed off.",
    "character": "vc-fred, vc-mike",
    "conditions": "",
    "choices": {
      "a": {
        "label": "Schedule some meetings",
        "values": {
          "valuation": 4,
          "happiness": -5,
          "time": -5
        }
      },
      "b": {
        "label": "Go dark",
        "values": {
          "valuation": -5,
          "happiness": 3,
          "time": 0
        }
      }
    }
  },
  {
    "id": 56,
    "description": "You can't ignore us forever.",
    "character": "vc-fred, vc-mike",
    "conditions": "choice(55.b)",
    "choices": {
      "a": {
        "label": "OK let's talk",
        "values": {
          "valuation": 1,
          "happiness": 1,
          "time": -4
        }
      },
      "b": {
        "label": "Hide",
        "values": {
          "valuation": -2,
          "happiness": 0,
          "time": 0
        }
      }
    }
  },
  {
    "id": 57,
    "description": "Another app with the same name just appeared. Apparently they have a trademark and everything...",
    "character": "product-manager",
    "conditions": "",
    "choices": {
      "a": {
        "label": "Brainstorm for new name",
        "values": {
          "valuation": -2,
          "happiness": -5,
          "time": -3
        }
      },
      "b": {
        "label": "Sue them",
        "values": {
          "valuation": -5,
          "happiness": -2,
          "time": -5
        }
      }
    }
  },
  {
    "id": 58,
    "description": "I'm having trouble finding employees...",
    "character": "product-manager",
    "conditions": "",
    "choices": {
      "a": {
        "label": "Make a neat hiring video",
        "values": {
          "valuation": -2,
          "happiness": 4,
          "time": -5
        }
      },
      "b": {
        "label": "Hire a recruitment agency",
        "values": {
          "valuation": -5,
          "happiness": -2,
          "time": 0
        }
      }
    }
  },
  {
    "id": 59,
    "description": "You remember you have a pitch coming up early tomorrow morning, right?",
    "character": "assistant",
    "conditions": "",
    "choices": {
      "a": {
        "label": "I'll improvise",
        "values": {
          "valuation": -2,
          "happiness": -3,
          "time": 0
        }
      },
      "b": {
        "label": "Prepare slideshow",
        "values": {
          "valuation": 2,
          "happiness": -2,
          "time": -3
        }
      }
    }
  },
  {
    "id": 60,
    "description": "You stayed up late preparing. You overslept and missed the presentation.",
    "character": "",
    "conditions": "choice(59.b) & immediate",
    "choices": {
      "a": {
        "label": "Go back to sleep",
        "values": {
          "valuation": 0,
          "happiness": 0,
          "time": -3
        }
      },
      "b": {
        "label": "Get to work",
        "values": {
          "valuation": 0,
          "happiness": 0,
          "time": -1
        }
      }
    }
  },
  {
    "id": 61,
    "description": "A former employee is bashing you in a Medium post.",
    "character": "office-manager",
    "conditions": "",
    "choices": {
      "a": {
        "label": "Call them out publicly",
        "values": {
          "valuation": -2,
          "happiness": -1,
          "time": -3
        }
      },
      "b": {
        "label": "Ignore",
        "values": {
          "valuation": -4,
          "happiness": -3,
          "time": -1
        }
      }
    }
  },
  {
    "id": 62,
    "description": "We need a theme for the office party.",
    "character": "office-manager",
    "conditions": "",
    "choices": {
      "a": {
        "label": "Mafia and hookers!",
        "values": {
          "valuation": -3,
          "happiness": 4,
          "time": -1
        }
      },
      "b": {
        "label": "The 80s are back!",
        "values": {
          "valuation": -1,
          "happiness": 2,
          "time": -2
        }
      }
    }
  },
  {
    "id": 63,
    "description": "We need extra marketing resources for the product launch.",
    "character": "chad-marketing",
    "conditions": "",
    "choices": {
      "a": {
        "label": "Hire an agency",
        "values": {
          "valuation": -4,
          "happiness": -3,
          "time": 0
        }
      },
      "b": {
        "label": "Use your brain Chad",
        "values": {
          "valuation": 0,
          "happiness": 0,
          "time": -5
        }
      }
    }
  },
  {
    "id": 64,
    "description": "TechCrunch Disrupt is next week - are you coming?",
    "character": "vc-raiden",
    "conditions": "",
    "choices": {
      "a": {
        "label": "I'm busy",
        "values": {
          "valuation": -2,
          "happiness": 2,
          "time": 0
        }
      },
      "b": {
        "label": "Free beer?",
        "values": {
          "valuation": 3,
          "happiness": -2,
          "time": -4
        }
      }
    }
  },
  {
    "id": 65,
    "description": "One of our account managers just told a client to eat dog shit...",
    "character": "support-01",
    "conditions": "",
    "choices": {
      "a": {
        "label": "Fire them",
        "values": {
          "valuation": 3,
          "happiness": -3,
          "time": 0
        }
      },
      "b": {
        "label": "Sit them down",
        "values": {
          "valuation": -2,
          "happiness": 2,
          "time": -3
        }
      }
    }
  },
  {
    "id": 66,
    "description": "A local podcast wants to do a 3 hour interview with you.",
    "character": "chad-marketing",
    "conditions": "",
    "choices": {
      "a": {
        "label": "Of course",
        "values": {
          "valuation": 1,
          "happiness": -2,
          "time": -5
        }
      },
      "b": {
        "label": "No time",
        "values": {
          "valuation": 0,
          "happiness": 2,
          "time": -1
        }
      }
    }
  },
  {
    "id": 67,
    "description": "Transparency is so hot right now - can I do a blog post about our growth data?",
    "character": "chad-marketing",
    "conditions": "",
    "choices": {
      "a": {
        "label": "Let's do it",
        "values": {
          "valuation": -2,
          "happiness": 2,
          "time": -3
        }
      },
      "b": {
        "label": "Keep it private",
        "values": {
          "valuation": 0,
          "happiness": -1,
          "time": 0
        }
      }
    }
  },
  {
    "id": 68,
    "description": "Your significant other is having an affair with one of your investors.",
    "character": "vc-fred, vc-mike",
    "conditions": "",
    "choices": {
      "a": {
        "label": "Kill them both",
        "values": {
          "valuation": -4,
          "happiness": 3,
          "time": -3
        }
      },
      "b": {
        "label": "Spare the investor",
        "values": {
          "valuation": 2,
          "happiness": 1,
          "time": -1
        }
      }
    }
  },
  {
    "id": 69,
    "description": "Another startup wants to hire you for consulting.",
    "character": "assistant",
    "conditions": "",
    "choices": {
      "a": {
        "label": "No time",
        "values": {
          "valuation": 0,
          "happiness": 2,
          "time": 0
        }
      },
      "b": {
        "label": "Better make it rain!",
        "values": {
          "valuation": 2,
          "happiness": -2,
          "time": -3
        }
      }
    }
  },
  {
    "id": 70,
    "description": "The cops busted our Christmas party - seems there was something special in the punch.",
    "character": "office-manager",
    "conditions": "",
    "choices": {
      "a": {
        "label": "Chaaad!",
        "values": {
          "valuation": -2,
          "happiness": -3,
          "time": -5
        }
      },
      "b": {
        "label": "Switch the phone off",
        "values": {
          "valuation": -3,
          "happiness": 2,
          "time": -1
        }
      }
    }
  },
  {
    "id": 71,
    "description": "Elon Musk invites you to his office to talk about Mars.",
    "character": "assistant",
    "conditions": "",
    "choices": {
      "a": {
        "label": "Awesome!",
        "values": {
          "valuation": 3,
          "happiness": 3,
          "time": -3
        }
      },
      "b": {
        "label": "No time",
        "values": {
          "valuation": 0,
          "happiness": -2,
          "time": -1
        }
      }
    }
  },
  {
    "id": 72,
    "description": "We're about to raise series A funding. Where are those documents you promised?",
    "character": "cfo",
    "conditions": "",
    "choices": {
      "a": {
        "label": "Blame it on Chad",
        "values": {
          "valuation": -3,
          "happiness": 2,
          "time": 0
        }
      },
      "b": {
        "label": "Put something together",
        "values": {
          "valuation": -1,
          "happiness": -3,
          "time": -3
        }
      }
    }
  },
  {
    "id": 73,
    "description": "We should get Toggl for tracking our time.",
    "character": "product-manager",
    "conditions": "",
    "choices": {
      "a": {
        "label": "Ok",
        "values": {
          "valuation": 1,
          "happiness": 1,
          "time": 0
        }
      },
      "b": {
        "label": "Timesheets are fine",
        "values": {
          "valuation": 0,
          "happiness": -2,
          "time": -5
        }
      }
    }
  },
  {
    "id": 74,
    "description": "Our competitor just got a billion dollar valuation.",
    "character": "product-manager",
    "conditions": "",
    "choices": {
      "a": {
        "label": "Bash them publicly",
        "values": {
          "valuation": 1,
          "happiness": 2,
          "time": -3
        }
      },
      "b": {
        "label": "Whatever",
        "values": {
          "valuation": 0,
          "happiness": 1,
          "time": -1
        }
      }
    }
  },
  {
    "id": 75,
    "description": "A former employee wrote a book bashing you and the company. Everybody's reading it!",
    "character": "chad-marketing",
    "conditions": "",
    "choices": {
      "a": {
        "label": "Pay someone to kill them",
        "values": {
          "valuation": -2,
          "happiness": 3,
          "time": 0
        }
      },
      "b": {
        "label": "Write a vague blog post",
        "values": {
          "valuation": 0,
          "happiness": -2,
          "time": -3
        }
      }
    }
  },
  {
    "id": 76,
    "description": "One of your employees has been living in the office because they can't pay rent.",
    "character": "office-manager",
    "conditions": "",
    "choices": {
      "a": {
        "label": "Help them out",
        "values": {
          "valuation": 0,
          "happiness": 3,
          "time": -3
        }
      },
      "b": {
        "label": "It's not that cold out",
        "values": {
          "valuation": 0,
          "happiness": -4,
          "time": -1
        }
      }
    }
  },
  {
    "id": 77,
    "description": "Your developers want to bring go-go dancers to a conference event we're hosting.",
    "character": "office-manager",
    "conditions": "",
    "choices": {
      "a": {
        "label": "Absolutely not",
        "values": {
          "valuation": 0,
          "happiness": -3,
          "time": -1
        }
      },
      "b": {
        "label": "Hell yeah!",
        "values": {
          "valuation": -2,
          "happiness": 3,
          "time": -1
        }
      }
    }
  },
  {
    "id": 78,
    "description": "We really should start saving money, what should we do?",
    "character": "cfo",
    "conditions": "",
    "choices": {
      "a": {
        "label": "Fire someone",
        "values": {
          "valuation": 0,
          "happiness": -4,
          "time": -1
        }
      },
      "b": {
        "label": "Review the perks",
        "values": {
          "valuation": 0,
          "happiness": -2,
          "time": -2
        }
      }
    }
  },
  {
    "id": 79,
    "description": "Chad just sent a racist email to 5,000 contacts.",
    "character": "support-01",
    "conditions": "",
    "choices": {
      "a": {
        "label": "Chaaad!",
        "values": {
          "valuation": -1,
          "happiness": -3,
          "time": -1
        }
      },
      "b": {
        "label": "Take their side",
        "values": {
          "valuation": -4,
          "happiness": 5,
          "time": -2
        }
      }
    }
  },
  {
    "id": 80,
    "description": "One of your ex-employees went to the press saying you spend all your days googling yourself.",
    "character": "journalist",
    "conditions": "",
    "choices": {
      "a": {
        "label": "Google the article",
        "values": {
          "valuation": -1,
          "happiness": 0,
          "time": -1
        }
      },
      "b": {
        "label": "Defend yourself in the blog",
        "values": {
          "valuation": 0,
          "happiness": 0,
          "time": -4
        }
      }
    }
  },
  {
    "id": 81,
    "description": "A Chinese company copied our design and has just filed for an IPO!",
    "character": "product-manager",
    "conditions": "",
    "choices": {
      "a": {
        "label": "Sue them",
        "values": {
          "valuation": -5,
          "happiness": -3,
          "time": -5
        }
      },
      "b": {
        "label": "Call the press!",
        "values": {
          "valuation": -1,
          "happiness": -1,
          "time": -2
        }
      }
    }
  },
  {
    "id": 82,
    "description": "You're being accused of sexual harassment.",
    "character": "office-manager",
    "conditions": "",
    "choices": {
      "a": {
        "label": "Father I have sinned!",
        "values": {
          "valuation": -1,
          "happiness": 2,
          "time": -1
        }
      },
      "b": {
        "label": "Wasn't me",
        "values": {
          "valuation": -3,
          "happiness": -2,
          "time": 0
        }
      }
    }
  },
  {
    "id": 83,
    "description": "We caught two employees getting it on in the office kitchen.",
    "character": "office-manager",
    "conditions": "",
    "choices": {
      "a": {
        "label": "Ban relationships",
        "values": {
          "valuation": -1,
          "happiness": -3,
          "time": -1
        }
      },
      "b": {
        "label": "Join in",
        "values": {
          "valuation": -1,
          "happiness": 1,
          "time": -3
        }
      }
    }
  },
  {
    "id": 84,
    "description": "I'm quitting to start a rap career.",
    "character": "rapper-01",
    "conditions": "",
    "choices": {
      "a": {
        "label": "Good riddance",
        "values": {
          "valuation": -1,
          "happiness": -3,
          "time": 0
        }
      },
      "b": {
        "label": "Sign a promotional deal",
        "values": {
          "valuation": 0,
          "happiness": 3,
          "time": -1
        }
      }
    }
  },
  {
    "id": 85,
    "description": "My first song made it to no. 1 - and it's named after your startup!",
    "character": "rapper-02",
    "conditions": "choice(84.b)",
    "choices": {
      "a": {
        "label": "Cash out",
        "values": {
          "valuation": 3,
          "happiness": 1,
          "time": 0
        }
      },
      "b": {
        "label": "Make them partner",
        "values": {
          "valuation": 1,
          "happiness": 1,
          "time": -1
        }
      }
    }
  },
  {
    "id": 86,
    "description": "I crashed the company Cadillac into a police car. On purpose.",
    "character": "rapper-03",
    "conditions": "choice(85.b)",
    "choices": {
      "a": {
        "label": "We're done here",
        "values": {
          "valuation": -3,
          "happiness": 0,
          "time": 0
        }
      },
      "b": {
        "label": "Fuck the system!",
        "values": {
          "valuation": -5,
          "happiness": 1,
          "time": 0
        }
      }
    }
  },
  {
    "id": 87,
    "description": "Google just announced an exact copy of our product and made all their users sign up.",
    "character": "product-manager",
    "conditions": "",
    "choices": {
      "a": {
        "label": "Write an open letter",
        "values": {
          "valuation": -2,
          "happiness": 3,
          "time": -3
        }
      },
      "b": {
        "label": "Keep calm and carry on",
        "values": {
          "valuation": -3,
          "happiness": -2,
          "time": 0
        }
      }
    }
  },
  {
    "id": 88,
    "description": "You hear gossip that one of your investors is bashing you to other investors.",
    "character": "vc-fred, vc-mike",
    "conditions": "",
    "choices": {
      "a": {
        "label": "Give them a call",
        "values": {
          "valuation": -1,
          "happiness": 0,
          "time": -1
        }
      },
      "b": {
        "label": "Start a rumor about them",
        "values": {
          "valuation": 0,
          "happiness": 0,
          "time": -2
        }
      }
    }
  },
  {
    "id": 89,
    "description": "Changes to our partner's Terms of Service just killed our most important integration.",
    "character": "product-manager",
    "conditions": "",
    "choices": {
      "a": {
        "label": "Screw them",
        "values": {
          "valuation": -5,
          "happiness": 0,
          "time": -1
        }
      },
      "b": {
        "label": "Work out a solution",
        "values": {
          "valuation": 0,
          "happiness": 0,
          "time": -5
        }
      }
    }
  },
  {
    "id": 90,
    "description": "I'll give you 10 million dollars if you agree to share offices with my Initech team.",
    "character": "richard-branson",
    "conditions": "afterWeek(4)",
    "choices": {
      "a": {
        "label": "Sure",
        "values": {
          "valuation": 3,
          "happiness": -2,
          "time": -2
        }
      },
      "b": {
        "label": "No thanks",
        "values": {
          "valuation": -2,
          "happiness": 1,
          "time": -1
        }
      }
    }
  },
  {
    "id": 91,
    "description": "We really hate sharing offices with Initech.",
    "character": "tanya-frontend, victor-frontend",
    "conditions": "choice(90.a)",
    "choices": {
      "a": {
        "label": "Kick them out",
        "values": {
          "valuation": -5,
          "happiness": 3,
          "time": -2
        }
      },
      "b": {
        "label": "Sharing is caring",
        "values": {
          "valuation": 2,
          "happiness": -3,
          "time": -1
        }
      }
    }
  },
  {
    "id": 92,
    "description": "Initech employees managed to wipe all of our servers.",
    "character": "backend-dev-01",
    "conditions": "choice(91.b)",
    "choices": {
      "a": {
        "label": "Kick them out",
        "values": {
          "valuation": -4,
          "happiness": -3,
          "time": -5
        }
      },
      "b": {
        "label": "It happens...",
        "values": {
          "valuation": -4,
          "happiness": -5,
          "time": -3
        }
      }
    }
  },
  {
    "id": 93,
    "description": "Donald Trump sent you an invite to attend his 4th wedding.",
    "character": "assistant",
    "conditions": "",
    "choices": {
      "a": {
        "label": "Tremendous!",
        "values": {
          "valuation": 2,
          "happiness": -1,
          "time": -4
        }
      },
      "b": {
        "label": "No way Jose",
        "values": {
          "valuation": 0,
          "happiness": 5,
          "time": -1
        }
      }
    }
  },
  {
    "id": 94,
    "description": "We should invest company money to buy 1000 bitcoins.",
    "character": "cfo",
    "conditions": "",
    "choices": {
      "a": {
        "label": "Yes",
        "values": {
          "valuation": 2,
          "happiness": 0,
          "time": -1
        }
      },
      "b": {
        "label": "No",
        "values": {
          "valuation": 0,
          "happiness": 0,
          "time": 0
        }
      }
    }
  },
  {
    "id": 95,
    "description": "Bitcoin market crashes, your 1000 bitcoins are now worth $46.",
    "character": "cfo",
    "conditions": "choice(94.a)",
    "choices": {
      "a": {
        "label": "Cash out",
        "values": {
          "valuation": -3,
          "happiness": 0,
          "time": -1
        }
      },
      "b": {
        "label": "Try dogecoin",
        "values": {
          "valuation": 0,
          "happiness": 0,
          "time": -1
        }
      }
    }
  },
  {
    "id": 96,
    "description": "Dogecoin market crashes, your dogecoins are now worth $4.6.",
    "character": "cfo",
    "conditions": "choice(95.b) & immediate",
    "choices": {
      "a": {
        "label": "Have faith...",
        "values": {
          "valuation": -4,
          "happiness": -1,
          "time": -1
        }
      },
      "b": {
        "label": "Fuck this",
        "values": {
          "valuation": -5,
          "happiness": -1,
          "time": -1
        }
      }
    }
  },
  {
    "id": 97,
    "description": "Private emails between you and a former investor end up in the press.",
    "character": "journalist",
    "conditions": "",
    "choices": {
      "a": {
        "label": "Sue the paper",
        "values": {
          "valuation": -3,
          "happiness": 1,
          "time": -2
        }
      },
      "b": {
        "label": "Mexico, here I come",
        "values": {
          "valuation": -1,
          "happiness": 0,
          "time": -5
        }
      }
    }
  },
  {
    "id": 98,
    "description": "Your co-founder gets a divorce and doesn't show up to work for a week.",
    "character": "office-manager",
    "conditions": "",
    "choices": {
      "a": {
        "label": "Give them time",
        "values": {
          "valuation": 0,
          "happiness": 3,
          "time": -2
        }
      },
      "b": {
        "label": "Get it together!",
        "values": {
          "valuation": 0,
          "happiness": -3,
          "time": -1
        }
      }
    }
  },
  {
    "id": 99,
    "description": "I want to spend $150,000 on this killer PR stunt!",
    "character": "chad-marketing",
    "conditions": "",
    "choices": {
      "a": {
        "label": "Absolutely not",
        "values": {
          "valuation": 0,
          "happiness": -2,
          "time": 0
        }
      },
      "b": {
        "label": "Go big or go home!",
        "values": {
          "valuation": 4,
          "happiness": 2,
          "time": -4
        }
      }
    }
  },
  {
    "id": 100,
    "description": "I got a buddy working for Shark Tank - we should put together a crazy pitch!",
    "character": "vc-raiden",
    "conditions": "beforeWeek(2)",
    "choices": {
      "a": {
        "label": "Hire a comedian",
        "values": {
          "valuation": 1,
          "happiness": 0,
          "time": -2
        }
      },
      "b": {
        "label": "I hate that show",
        "values": {
          "valuation": 0,
          "happiness": 0,
          "time": 0
        }
      }
    }
  },
  {
    "id": 101,
    "description": "We caught an employee copying company files to their private Dropbox.",
    "character": "product-manager",
    "conditions": "",
    "choices": {
      "a": {
        "label": "Bring them to me!",
        "values": {
          "valuation": 0,
          "happiness": -2,
          "time": -1
        }
      },
      "b": {
        "label": "Probably a backup",
        "values": {
          "valuation": -2,
          "happiness": 0,
          "time": -1
        }
      }
    }
  },
  {
    "id": 102,
    "description": "Our user data got wiped! Luckily an employee had a backup in Dropbox.",
    "character": "product-manager",
    "conditions": "choice(101.b)",
    "choices": {
      "a": {
        "label": "Phew!",
        "values": {
          "valuation": 0,
          "happiness": 1,
          "time": 0
        }
      },
      "b": {
        "label": "Phew!",
        "values": {
          "valuation": 0,
          "happiness": 1,
          "time": 0
        }
      }
    }
  },
  {
    "id": 103,
    "description": "There's a fire in the server closet!",
    "character": "backend-dev-01",
    "conditions": "afterWeek(3)",
    "choices": {
      "a": {
        "label": "Pour water on it",
        "values": {
          "valuation": -3,
          "happiness": 0,
          "time": -1
        }
      },
      "b": {
        "label": "Turn it off and on again",
        "values": {
          "valuation": -3,
          "happiness": 0,
          "time": -1
        }
      }
    }
  },
  {
    "id": 104,
    "description": "Umm, I just learned our codebase has no unit tests...",
    "character": "tanya-frontend, victor-frontend",
    "conditions": "",
    "choices": {
      "a": {
        "label": "Fix it",
        "values": {
          "valuation": 0,
          "happiness": 3,
          "time": -3
        }
      },
      "b": {
        "label": "YOLO",
        "values": {
          "valuation": -1,
          "happiness": -3,
          "time": -1
        }
      }
    }
  },
  {
    "id": 105,
    "description": "You're nominated for Forbes 30 under 30!",
    "character": "chad-marketing",
    "conditions": "",
    "choices": {
      "a": {
        "label": "Ride the wave",
        "values": {
          "valuation": 3,
          "happiness": 3,
          "time": -5
        }
      },
      "b": {
        "label": "Ignore",
        "values": {
          "valuation": 1,
          "happiness": 2,
          "time": 0
        }
      }
    }
  },
  {
    "id": 106,
    "description": "I need next yearâ€™s budget plans.",
    "character": "cfo",
    "conditions": "",
    "choices": {
      "a": {
        "label": "Come up with a plan",
        "values": {
          "valuation": 2,
          "happiness": -3,
          "time": -3
        }
      },
      "b": {
        "label": "No time",
        "values": {
          "valuation": -2,
          "happiness": 2,
          "time": 0
        }
      }
    }
  },
  {
    "id": 107,
    "description": "The new Go programmer claims he doesn't need generics.",
    "character": "tanya-frontend, victor-frontend",
    "conditions": "",
    "choices": {
      "a": {
        "label": "Fire him",
        "values": {
          "valuation": 2,
          "happiness": -3,
          "time": -3
        }
      },
      "b": {
        "label": "Ignore and fire later",
        "values": {
          "valuation": -1,
          "happiness": 0,
          "time": -1
        }
      }
    }
  },
  {
    "id": 108,
    "description": "Your lead developer calls you a n00b in front of the whole team.",
    "character": "tanya-frontend, victor-frontend",
    "conditions": "",
    "choices": {
      "a": {
        "label": "Call them \"Fired!\"",
        "values": {
          "valuation": -2,
          "happiness": -2,
          "time": -3
        }
      },
      "b": {
        "label": "Laugh it off",
        "values": {
          "valuation": -1,
          "happiness": -4,
          "time": -1
        }
      }
    }
  },
  {
    "id": 109,
    "description": "You still haven't used your 7 days of mandatory vacation this year.",
    "character": "office-manager",
    "conditions": "",
    "choices": {
      "a": {
        "label": "Pretend you're not working for 7 days",
        "values": {
          "valuation": 0,
          "happiness": -2,
          "time": -2
        }
      },
      "b": {
        "label": "Ignore the rules",
        "values": {
          "valuation": -1,
          "happiness": 2,
          "time": -1
        }
      }
    }
  },
  {
    "id": 110,
    "description": "We suggest new markets after the pivot.",
    "character": "vc-raiden, vc-fred, vc-mike",
    "conditions": "",
    "choices": {
      "a": {
        "label": "Ignore them",
        "values": {
          "valuation": -3,
          "happiness": 2,
          "time": 0
        }
      },
      "b": {
        "label": "Re-calculate",
        "values": {
          "valuation": 2,
          "happiness": -3,
          "time": -3
        }
      }
    }
  },
  {
    "id": 111,
    "description": "We have a record number of customers this month.",
    "character": "product-manager",
    "conditions": "",
    "choices": {
      "a": {
        "label": "Let's celebrate!",
        "values": {
          "valuation": -2,
          "happiness": 3,
          "time": -3
        }
      },
      "b": {
        "label": "Whatever",
        "values": {
          "valuation": 0,
          "happiness": -4,
          "time": 0
        }
      }
    }
  },
  {
    "id": 112,
    "description": "People are still talking about our epic party!",
    "character": "office-manager",
    "conditions": "choice(111.a)",
    "choices": {
      "a": {
        "label": "Awesome",
        "values": {
          "valuation": 1,
          "happiness": 2,
          "time": -1
        }
      },
      "b": {
        "label": "Awesome",
        "values": {
          "valuation": 1,
          "happiness": 2,
          "time": -1
        }
      }
    }
  },
  {
    "id": 113,
    "description": "I just bought Snapchat spectacles for the whole team with company money. Rad!",
    "character": "chad-marketing",
    "conditions": "",
    "choices": {
      "a": {
        "label": "Ooh, show me!",
        "values": {
          "valuation": -2,
          "happiness": 4,
          "time": -2
        }
      },
      "b": {
        "label": "Send them back",
        "values": {
          "valuation": 0,
          "happiness": -5,
          "time": 0
        }
      }
    }
  },
  {
    "id": 114,
    "description": "I've found 249 conflicts after â€˜git merge develop masterâ€™ and it's three days before deadline.",
    "character": "tanya-frontend, victor-frontend",
    "conditions": "",
    "choices": {
      "a": {
        "label": "Make devs fix conflicts",
        "values": {
          "valuation": 2,
          "happiness": -5,
          "time": -2
        }
      },
      "b": {
        "label": "Extend deadline",
        "values": {
          "valuation": -2,
          "happiness": 3,
          "time": -4
        }
      }
    }
  },
  {
    "id": 115,
    "description": "A bunch of tech writers will be at this party tonight. Are you coming?",
    "character": "chad-marketing",
    "conditions": "",
    "choices": {
      "a": {
        "label": "Yes",
        "values": {
          "valuation": 1,
          "happiness": 3,
          "time": -2
        }
      },
      "b": {
        "label": "No",
        "values": {
          "valuation": 0,
          "happiness": -1,
          "time": 0
        }
      }
    }
  },
  {
    "id": 116,
    "description": "You get drunk, hit on every person in the room and end up being banned from TechCrunch forever.",
    "character": "journalist",
    "conditions": "choice(115.a) & immediate",
    "choices": {
      "a": {
        "label": "Whatever",
        "values": {
          "valuation": -2,
          "happiness": -1,
          "time": -1
        }
      },
      "b": {
        "label": "Whatever",
        "values": {
          "valuation": -2,
          "happiness": -1,
          "time": -1
        }
      }
    }
  },
  {
    "id": 117,
    "description": "Hey our partner wants to \"touch base\" - got time?",
    "character": "assistant",
    "conditions": "",
    "choices": {
      "a": {
        "label": "Yes",
        "values": {
          "valuation": 2,
          "happiness": -3,
          "time": -3
        }
      },
      "b": {
        "label": "No",
        "values": {
          "valuation": -2,
          "happiness": 3,
          "time": 0
        }
      }
    }
  },
  {
    "id": 118,
    "description": "People love our product, but I think it's because we're cheap. Should we raise the price?",
    "character": "product-manager",
    "conditions": "",
    "choices": {
      "a": {
        "label": "Only for new users",
        "values": {
          "valuation": 1,
          "happiness": 3,
          "time": 0
        }
      },
      "b": {
        "label": "Hit them hard!",
        "values": {
          "valuation": 3,
          "happiness": -2,
          "time": 0
        }
      }
    }
  },
  {
    "id": 119,
    "description": "It turns out our app's name means \"dick\" in Japanese, what do we do?",
    "character": "product-manager",
    "conditions": "",
    "choices": {
      "a": {
        "label": "Change the name",
        "values": {
          "valuation": -2,
          "happiness": -3,
          "time": -2
        }
      },
      "b": {
        "label": "Just ignore it",
        "values": {
          "valuation": -5,
          "happiness": -1,
          "time": 0
        }
      }
    }
  },
  {
    "id": 120,
    "description": "We have technical debt but need to start the next sprint.",
    "character": "tanya-frontend, victor-frontend",
    "conditions": "",
    "choices": {
      "a": {
        "label": "Fire the team",
        "values": {
          "valuation": -2,
          "happiness": -4,
          "time": -4
        }
      },
      "b": {
        "label": "Sit them down",
        "values": {
          "valuation": -1,
          "happiness": -2,
          "time": -5
        }
      }
    }
  },
  {
    "id": 121,
    "description": "Operations and Developers are fighting over Git workflow.",
    "character": "product-manager",
    "conditions": "",
    "choices": {
      "a": {
        "label": "Step in",
        "values": {
          "valuation": 2,
          "happiness": 3,
          "time": -5
        }
      },
      "b": {
        "label": "Ignore",
        "values": {
          "valuation": -2,
          "happiness": -3,
          "time": 0
        }
      }
    }
  },
  {
    "id": 122,
    "description": "Can I have a standing desk? I have a bad back.",
    "character": "chad-marketing",
    "conditions": "",
    "choices": {
      "a": {
        "label": "Come on!",
        "values": {
          "valuation": 0,
          "happiness": -2,
          "time": 0
        }
      },
      "b": {
        "label": "Sure",
        "values": {
          "valuation": -2,
          "happiness": 1,
          "time": -2
        }
      }
    }
  },
  {
    "id": 123,
    "description": "I see Chad got a standing desk. Can I have one too?",
    "character": "tanya-frontend, victor-frontend",
    "conditions": "choice(122.b)",
    "choices": {
      "a": {
        "label": "No",
        "values": {
          "valuation": 0,
          "happiness": -2,
          "time": 0
        }
      },
      "b": {
        "label": "Fine",
        "values": {
          "valuation": -3,
          "happiness": 1,
          "time": -3
        }
      }
    }
  },
  {
    "id": 124,
    "description": "I see frontend has standing desks. I have a bad back too...",
    "character": "backend-dev-01",
    "conditions": "choice(123.b)",
    "choices": {
      "a": {
        "label": "You're fine",
        "values": {
          "valuation": 0,
          "happiness": -4,
          "time": 0
        }
      },
      "b": {
        "label": "OK",
        "values": {
          "valuation": -3,
          "happiness": 1,
          "time": -3
        }
      }
    }
  },
  {
    "id": 125,
    "description": "Everybody wants standing desks now - it's a can of worms!",
    "character": "office-manager",
    "conditions": "choice(124.b)",
    "choices": {
      "a": {
        "label": "Squash the rebellion",
        "values": {
          "valuation": 0,
          "happiness": -5,
          "time": -3
        }
      },
      "b": {
        "label": "Give in",
        "values": {
          "valuation": -4,
          "happiness": 2,
          "time": -3
        }
      }
    }
  },
  {
    "id": 126,
    "description": "Chad brought a dog to the office, but 2 other employees are allergic.",
    "character": "office-manager",
    "conditions": "",
    "choices": {
      "a": {
        "label": "Chaaad!?",
        "values": {
          "valuation": 0,
          "happiness": 2,
          "time": 0
        }
      },
      "b": {
        "label": "Hey, it's a startup",
        "values": {
          "valuation": 0,
          "happiness": 5,
          "time": -2
        }
      }
    }
  },
  {
    "id": 127,
    "description": "The users are asking for more features.",
    "character": "product-manager",
    "conditions": "",
    "choices": {
      "a": {
        "label": "Let's keep focus",
        "values": {
          "valuation": -2,
          "happiness": 2,
          "time": 0
        }
      },
      "b": {
        "label": "Do all the features!",
        "values": {
          "valuation": 2,
          "happiness": -3,
          "time": -3
        }
      }
    }
  },
  {
    "id": 128,
    "description": "The Black Friday campaign is all set up but the discount codes don't work.",
    "character": "backend-dev-01",
    "conditions": "",
    "choices": {
      "a": {
        "label": "Abort!",
        "values": {
          "valuation": -2,
          "happiness": 3,
          "time": 0
        }
      },
      "b": {
        "label": "Get this fixed now",
        "values": {
          "valuation": 3,
          "happiness": -3,
          "time": -2
        }
      }
    }
  },
  {
    "id": 129,
    "description": "Black Friday traffic has crashed our website and the developers are out shopping!",
    "character": "support-01",
    "conditions": "choice(128.b)",
    "choices": {
      "a": {
        "label": "Wake them up",
        "values": {
          "valuation": 0,
          "happiness": -2,
          "time": -1
        }
      },
      "b": {
        "label": "Fix it yourself",
        "values": {
          "valuation": -3,
          "happiness": 0,
          "time": -3
        }
      }
    }
  },
  {
    "id": 130,
    "description": "Our paid traffic ROI is low.",
    "character": "chad-marketing",
    "conditions": "",
    "choices": {
      "a": {
        "label": "Spend harder",
        "values": {
          "valuation": 2,
          "happiness": -2,
          "time": -4
        }
      },
      "b": {
        "label": "Drop the ads",
        "values": {
          "valuation": -2,
          "happiness": 3,
          "time": 0
        }
      }
    }
  },
  {
    "id": 131,
    "description": "Our payments system is offline.",
    "character": "backend-dev-01",
    "conditions": "",
    "choices": {
      "a": {
        "label": "Profits are for losers",
        "values": {
          "valuation": -2,
          "happiness": 3,
          "time": 0
        }
      },
      "b": {
        "label": "Get them up",
        "values": {
          "valuation": 3,
          "happiness": -2,
          "time": -3
        }
      }
    }
  },
  {
    "id": 132,
    "description": "Our revenue is skyrocketing! But now we have to pay more taxes.",
    "character": "cfo",
    "conditions": "",
    "choices": {
      "a": {
        "label": "Hire an accountant",
        "values": {
          "valuation": 3,
          "happiness": -2,
          "time": -2
        }
      },
      "b": {
        "label": "Ignore the taxes",
        "values": {
          "valuation": -3,
          "happiness": 2,
          "time": 0
        }
      }
    }
  },
  {
    "id": 133,
    "description": "Your alma mater wants you to do a commencement speech.",
    "character": "assistant",
    "conditions": "",
    "choices": {
      "a": {
        "label": "Of course",
        "values": {
          "valuation": 0,
          "happiness": 0,
          "time": -3
        }
      },
      "b": {
        "label": "No time",
        "values": {
          "valuation": 0,
          "happiness": -2,
          "time": 0
        }
      }
    }
  },
  {
    "id": 134,
    "description": "Forbes names you \"The Most Inspiring College Drop-Out\".",
    "character": "journalist",
    "conditions": "choice(133.a) & immediate",
    "choices": {
      "a": {
        "label": "Ok",
        "values": {
          "valuation": 2,
          "happiness": 2,
          "time": 0
        }
      },
      "b": {
        "label": "Ok",
        "values": {
          "valuation": 2,
          "happiness": 2,
          "time": 0
        }
      }
    }
  },
  {
    "id": 135,
    "description": "Hey, they want you on Celebrity Bachelorette.",
    "character": "assistant",
    "conditions": "",
    "choices": {
      "a": {
        "label": "Anything for publicity",
        "values": {
          "valuation": -1,
          "happiness": 2,
          "time": -4
        }
      },
      "b": {
        "label": "What, that's lame...",
        "values": {
          "valuation": 0,
          "happiness": -2,
          "time": 0
        }
      }
    }
  },
  {
    "id": 136,
    "description": "There's a new doughnut place next to the office.",
    "character": "office-manager",
    "conditions": "",
    "choices": {
      "a": {
        "label": "Doughnuts for all!",
        "values": {
          "valuation": -1,
          "happiness": 3,
          "time": -1
        }
      },
      "b": {
        "label": "Doughnuts for me!",
        "values": {
          "valuation": 0,
          "happiness": -2,
          "time": 0
        }
      }
    }
  },
  {
    "id": 137,
    "description": "Our app got featured in the App Store!",
    "character": "product-manager",
    "conditions": "",
    "choices": {
      "a": {
        "label": "Brag to startup friends",
        "values": {
          "valuation": 3,
          "happiness": 5,
          "time": 0
        }
      },
      "b": {
        "label": "Call the investors!",
        "values": {
          "valuation": 5,
          "happiness": 5,
          "time": -1
        }
      }
    }
  },
  {
    "id": 138,
    "description": "One of Google's star developers wants to join our startup.",
    "character": "product-manager",
    "conditions": "",
    "choices": {
      "a": {
        "label": "You're hired!",
        "values": {
          "valuation": 3,
          "happiness": 0,
          "time": -2
        }
      },
      "b": {
        "label": "There's only 1 star here",
        "values": {
          "valuation": 0,
          "happiness": -1,
          "time": 0
        }
      }
    }
  },
  {
    "id": 139,
    "description": "Twitter is enraged because you bragged about your \"all-man wreckin' crew\".",
    "character": "support-01",
    "conditions": "",
    "choices": {
      "a": {
        "label": "Whatever",
        "values": {
          "valuation": 0,
          "happiness": -2,
          "time": 0
        }
      },
      "b": {
        "label": "Hire 2 female developers",
        "values": {
          "valuation": 2,
          "happiness": 4,
          "time": -4
        }
      }
    }
  },
  {
    "id": 140,
    "description": "Our employees are spending too much money on business travel.",
    "character": "cfo",
    "conditions": "",
    "choices": {
      "a": {
        "label": "Life's an adventure!",
        "values": {
          "valuation": 0,
          "happiness": 3,
          "time": -3
        }
      },
      "b": {
        "label": "Video calls are fine",
        "values": {
          "valuation": 0,
          "happiness": -3,
          "time": 0
        }
      }
    }
  },
  {
    "id": 141,
    "description": "You got featured in Business Insider and it's driving tons of traffic to us!",
    "character": "chad-marketing",
    "conditions": "",
    "choices": {
      "a": {
        "label": "Celebrate with beers",
        "values": {
          "valuation": 2,
          "happiness": 3,
          "time": -1
        }
      },
      "b": {
        "label": "Celebrate with LSD",
        "values": {
          "valuation": 2,
          "happiness": 3,
          "time": -1
        }
      }
    }
  },
  {
    "id": 142,
    "description": "You come up with a cool new business idea and make tons of money.",
    "character": "good-consequence",
    "conditions": "choice(141.b) & immediate",
    "choices": {
      "a": {
        "label": "Groovy!",
        "values": {
          "valuation": 3,
          "happiness": 2,
          "time": -2
        }
      },
      "b": {
        "label": "Groovy!",
        "values": {
          "valuation": 3,
          "happiness": 2,
          "time": -2
        }
      }
    }
  },
  {
    "id": 143,
    "description": "Chad showed up at work in a tank top again. Should we enforce a formal dress code?",
    "character": "office-manager",
    "conditions": "",
    "choices": {
      "a": {
        "label": "No way, this is a startup",
        "values": {
          "valuation": 0,
          "happiness": 4,
          "time": 0
        }
      },
      "b": {
        "label": "Suit up, Chad!",
        "values": {
          "valuation": 1,
          "happiness": -4,
          "time": -2
        }
      }
    }
  },
  {
    "id": 144,
    "description": "Your therapist suggests 30 days of rehab.",
    "character": "assistant",
    "conditions": "",
    "choices": {
      "a": {
        "label": "For what!?",
        "values": {
          "valuation": 0,
          "happiness": -3,
          "time": 0
        }
      },
      "b": {
        "label": "Yes, I need it badly",
        "values": {
          "valuation": -3,
          "happiness": 5,
          "time": -3
        }
      }
    }
  },
  {
    "id": 145,
    "description": "Hey, we met in rehab. Are you still looking for investors?",
    "character": "vc-fred, vc-mike",
    "conditions": "choice(145.b)",
    "choices": {
      "a": {
        "label": "Yes, gimme!",
        "values": {
          "valuation": 4,
          "happiness": 1,
          "time": 0
        }
      },
      "b": {
        "label": "I'm good",
        "values": {
          "valuation": 0,
          "happiness": -1,
          "time": 0
        }
      }
    }
  },
  {
    "id": 146,
    "description": "Three of our key employees want to go on a sabbatical... together.",
    "character": "product-manager",
    "conditions": "",
    "choices": {
      "a": {
        "label": "Sounds fishy",
        "values": {
          "valuation": 0,
          "happiness": -4,
          "time": 0
        }
      },
      "b": {
        "label": "Whatever they need",
        "values": {
          "valuation": 0,
          "happiness": 5,
          "time": -5
        }
      }
    }
  },
  {
    "id": 147,
    "description": "We need to collect more e-mails for leads. I'm thinking full-page pop ups - EVERYWHERE.",
    "character": "chad-marketing",
    "conditions": "",
    "choices": {
      "a": {
        "label": "Popups are awful",
        "values": {
          "valuation": -1,
          "happiness": 2,
          "time": 0
        }
      },
      "b": {
        "label": "We will bury them!",
        "values": {
          "valuation": 1,
          "happiness": -1,
          "time": -2
        }
      }
    }
  },
  {
    "id": 148,
    "description": "You're invited to a gala but all you own are black turtlenecks and jeans.",
    "character": "vc-fred, vc-mike, vc-raiden",
    "conditions": "",
    "choices": {
      "a": {
        "label": "It worked for Steve",
        "values": {
          "valuation": 1,
          "happiness": 0,
          "time": 0
        }
      },
      "b": {
        "label": "Get a suit",
        "values": {
          "valuation": 2,
          "happiness": 0,
          "time": -2
        }
      }
    }
  },
  {
    "id": 149,
    "description": "Mashable wants to do an interview with you.",
    "character": "journalist",
    "conditions": "beforeWeek(2)",
    "choices": {
      "a": {
        "label": "Lights! Camera!",
        "values": {
          "valuation": 2,
          "happiness": 0,
          "time": -2
        }
      },
      "b": {
        "label": "Not now",
        "values": {
          "valuation": 0,
          "happiness": 0,
          "time": 0
        }
      }
    }
  },
  {
    "id": 150,
    "description": "Techcrunch wants to do a story about your company but you have to publish all your business data and investors advise you not to do it.",
    "character": "journalist",
    "conditions": "",
    "choices": {
      "a": {
        "label": "Do it anyway",
        "values": {
          "valuation": 3,
          "happiness": -2,
          "time": -1
        }
      },
      "b": {
        "label": "Listen to the investors",
        "values": {
          "valuation": 1,
          "happiness": 3,
          "time": 0
        }
      }
    }
  },
  {
    "id": 151,
    "description": "I want to build a startup game as a side-project - with our upsell, of course.",
    "character": "chad-marketing",
    "conditions": "",
    "choices": {
      "a": {
        "label": "Sounds great",
        "values": {
          "valuation": 0,
          "happiness": 2,
          "time": -2
        }
      },
      "b": {
        "label": "Get back to work",
        "values": {
          "valuation": 0,
          "happiness": -3,
          "time": 0
        }
      }
    }
  },
  {
    "id": 152,
    "description": "Chad quit to start a game studio, he took half our team with him!",
    "character": "product-manager",
    "conditions": "choice(151.a)",
    "choices": {
      "a": {
        "label": "Chaaad!",
        "values": {
          "valuation": -4,
          "happiness": 0,
          "time": -3
        }
      },
      "b": {
        "label": "Chaaad!",
        "values": {
          "valuation": -4,
          "happiness": 0,
          "time": -3
        }
      }
    }
  },
  {
    "id": 153,
    "description": "Things are going well! Can we celebrate with weed?",
    "character": "tanya-frontend, victor-frontend",
    "conditions": "",
    "choices": {
      "a": {
        "label": "No drugs",
        "values": {
          "valuation": 0,
          "happiness": -3,
          "time": 0
        }
      },
      "b": {
        "label": "Pass the dutchie",
        "values": {
          "valuation": 0,
          "happiness": 5,
          "time": -3
        }
      }
    }
  },
  {
    "id": 154,
    "description": "Your developers disappear for two weeks.",
    "character": "product-manager",
    "conditions": "choice(153.b) & immediate",
    "choices": {
      "a": {
        "label": "Weep",
        "values": {
          "valuation": 0,
          "happiness": 0,
          "time": -3
        }
      },
      "b": {
        "label": "Weep",
        "values": {
          "valuation": 0,
          "happiness": 0,
          "time": -3
        }
      }
    }
  },
  {
    "id": 155,
    "description": "There's a new overtime law and you have to raise salaries or hire more people to avoid paying higher overtime wages.",
    "character": "cfo",
    "conditions": "",
    "choices": {
      "a": {
        "label": "Raise salaries",
        "values": {
          "valuation": -2,
          "happiness": 3,
          "time": 0
        }
      },
      "b": {
        "label": "Hire new people",
        "values": {
          "valuation": -2,
          "happiness": 0,
          "time": -3
        }
      }
    }
  },
  {
    "id": 156,
    "description": "We've moved our website to the hosting server but I'm still seeing the â€œComing Soonâ€ page.",
    "character": "backend-dev-01",
    "conditions": "",
    "choices": {
      "a": {
        "label": "Change hosting",
        "values": {
          "valuation": -1,
          "happiness": -3,
          "time": -3
        }
      },
      "b": {
        "label": "Ask devs for advice",
        "values": {
          "valuation": 0,
          "happiness": 3,
          "time": -5
        }
      }
    }
  },
  {
    "id": 157,
    "description": "Just got a call from the landlord - office rent is going up starting next month.",
    "character": "cfo",
    "conditions": "afterWeek(1)",
    "choices": {
      "a": {
        "label": "Find another place",
        "values": {
          "valuation": -2,
          "happiness": -3,
          "time": -3
        }
      },
      "b": {
        "label": "Pay to stay",
        "values": {
          "valuation": -3,
          "happiness": 2,
          "time": 0
        }
      }
    }
  },
  {
    "id": 158,
    "description": "Your app's on ProductHunt today, Ryan Hoover tweets it with a :shrug: emoji.",
    "character": "seo-manager",
    "conditions": "",
    "choices": {
      "a": {
        "label": "Start an angry tweetstorm",
        "values": {
          "valuation": -2,
          "happiness": 2,
          "time": -3
        }
      },
      "b": {
        "label": "Ignore",
        "values": {
          "valuation": -2,
          "happiness": -2,
          "time": 0
        }
      }
    }
  },
  {
    "id": 159,
    "description": "Your angry tweets have been seen by Donald Trump. He wants to invest!",
    "character": "twitter-bird",
    "conditions": "choice(158.a)",
    "choices": {
      "a": {
        "label": "Terrific!",
        "values": {
          "valuation": 4,
          "happiness": -2,
          "time": 0
        }
      },
      "b": {
        "label": "Tremendous!",
        "values": {
          "valuation": 4,
          "happiness": -2,
          "time": 0
        }
      }
    }
  },
  {
    "id": 160,
    "description": "Your co-founder is leaving.",
    "character": "office-manager",
    "conditions": "",
    "choices": {
      "a": {
        "label": "I need to process this",
        "values": {
          "valuation": 0,
          "happiness": -3,
          "time": -2
        }
      },
      "b": {
        "label": "No looking back",
        "values": {
          "valuation": -1,
          "happiness": 2,
          "time": -3
        }
      }
    }
  },
  {
    "id": 161,
    "description": "A tech giant is offering us a $300 million buyout!",
    "character": "cfo",
    "conditions": "",
    "choices": {
      "a": {
        "label": "Take it",
        "values": {
          "valuation": 0,
          "happiness": 0,
          "time": 0
        }
      },
      "b": {
        "label": "No way",
        "values": {
          "valuation": 3,
          "happiness": -3,
          "time": 0
        }
      }
    }
  },
  {
    "id": 162,
    "description": "The offer is withdrawn at the last moment. Are we that terrible?",
    "character": "cfo",
    "conditions": "choice(161.a) & immediate",
    "choices": {
      "a": {
        "label": "It's them, not us",
        "values": {
          "valuation": -5,
          "happiness": 2,
          "time": -2
        }
      },
      "b": {
        "label": "No...?",
        "values": {
          "valuation": -5,
          "happiness": 2,
          "time": -2
        }
      }
    }
  },
  {
    "id": 163,
    "description": "Recruiters have been sending aggressive emails to my engineers.",
    "character": "product-manager",
    "conditions": "",
    "choices": {
      "a": {
        "label": "Raise salaries",
        "values": {
          "valuation": -2,
          "happiness": 3,
          "time": 0
        }
      },
      "b": {
        "label": "Start poaching talent yourself",
        "values": {
          "valuation": 2,
          "happiness": 0,
          "time": -3
        }
      }
    }
  },
  {
    "id": 164,
    "description": "My designer brother told me that our home page looks ugly.",
    "character": "designer-01, designer-02",
    "conditions": "",
    "choices": {
      "a": {
        "label": "Redesign it",
        "values": {
          "valuation": -2,
          "happiness": 2,
          "time": -5
        }
      },
      "b": {
        "label": "He's just jealous",
        "values": {
          "valuation": 0,
          "happiness": -2,
          "time": 0
        }
      }
    }
  },
  {
    "id": 165,
    "description": "Some users are asking for refunds after our service was down for an hour.",
    "character": "roy-sales",
    "conditions": "",
    "choices": {
      "a": {
        "label": "Ignore them",
        "values": {
          "valuation": 0,
          "happiness": -2,
          "time": 0
        }
      },
      "b": {
        "label": "Offer swag",
        "values": {
          "valuation": -1,
          "happiness": 2,
          "time": -2
        }
      }
    }
  },
  {
    "id": 166,
    "description": "Your site is not ranking well in Google.",
    "character": "seo-manager",
    "conditions": "",
    "choices": {
      "a": {
        "label": "Hire an SEO expert",
        "values": {
          "valuation": 3,
          "happiness": 0,
          "time": -3
        }
      },
      "b": {
        "label": "Buy more ads!",
        "values": {
          "valuation": 1,
          "happiness": 0,
          "time": -1
        }
      }
    }
  },
  {
    "id": 167,
    "description": "We accidentally hired a black hat SEO and Google banned us",
    "character": "seo-manager",
    "conditions": "choice(166.a)",
    "choices": {
      "a": {
        "label": "You're kidding me?",
        "values": {
          "valuation": -5,
          "happiness": 0,
          "time": -2
        }
      },
      "b": {
        "label": "You're kidding me?",
        "values": {
          "valuation": -5,
          "happiness": 0,
          "time": -2
        }
      }
    }
  },
  {
    "id": 168,
    "description": "I heard an ex-employee is using our client list to promote their new product.",
    "character": "product-manager",
    "conditions": "",
    "choices": {
      "a": {
        "label": "Ignore",
        "values": {
          "valuation": -2,
          "happiness": -2,
          "time": 0
        }
      },
      "b": {
        "label": "Start bashing them publicly",
        "values": {
          "valuation": 2,
          "happiness": 2,
          "time": -5
        }
      }
    }
  },
  {
    "id": 169,
    "description": "Local startup club wants you to become a mentor to new startup founders.",
    "character": "vc-raiden",
    "conditions": "",
    "choices": {
      "a": {
        "label": "Sure",
        "values": {
          "valuation": 2,
          "happiness": 2,
          "time": -5
        }
      },
      "b": {
        "label": "No time",
        "values": {
          "valuation": 0,
          "happiness": -2,
          "time": 0
        }
      }
    }
  },
  {
    "id": 170,
    "description": "We need to find alternative monetization options for our product.",
    "character": "product-manager",
    "conditions": "",
    "choices": {
      "a": {
        "label": "The product is fine",
        "values": {
          "valuation": -4,
          "happiness": -1,
          "time": 0
        }
      },
      "b": {
        "label": "Brainstorm ideas",
        "values": {
          "valuation": 3,
          "happiness": 0,
          "time": -5
        }
      }
    }
  },
  {
    "id": 171,
    "description": "Customers are asking for phone support. Should we give them our number?",
    "character": "support-01",
    "conditions": "",
    "choices": {
      "a": {
        "label": "The customer is king",
        "values": {
          "valuation": 1,
          "happiness": -2,
          "time": -3
        }
      },
      "b": {
        "label": "E-mail is fine",
        "values": {
          "valuation": -2,
          "happiness": 1,
          "time": 0
        }
      }
    }
  },
  {
    "id": 172,
    "description": "Our customers are asking for a multilingual product.",
    "character": "support-01",
    "conditions": "",
    "choices": {
      "a": {
        "label": "No habla espanol",
        "values": {
          "valuation": -3,
          "happiness": 0,
          "time": 0
        }
      },
      "b": {
        "label": "Hire a translator",
        "values": {
          "valuation": 3,
          "happiness": 0,
          "time": -3
        }
      }
    }
  },
  {
    "id": 173,
    "description": "Our site just got banned in China.",
    "character": "backend-dev-01",
    "conditions": "",
    "choices": {
      "a": {
        "label": "OK",
        "values": {
          "valuation": -3,
          "happiness": -1,
          "time": 0
        }
      },
      "b": {
        "label": "OK",
        "values": {
          "valuation": -3,
          "happiness": -1,
          "time": 0
        }
      }
    }
  },
  {
    "id": 174,
    "description": "The Spotify team started using our product.",
    "character": "roy-sales",
    "conditions": "",
    "choices": {
      "a": {
        "label": "Do a cross-promotion",
        "values": {
          "valuation": 2,
          "happiness": 3,
          "time": -2
        }
      },
      "b": {
        "label": "Music to my ears",
        "values": {
          "valuation": 1,
          "happiness": 1,
          "time": 0
        }
      }
    }
  },
  {
    "id": 175,
    "description": "The Red Cross wants to use our product with 100% discount.",
    "character": "roy-sales",
    "conditions": "",
    "choices": {
      "a": {
        "label": "Cross it out",
        "values": {
          "valuation": 0,
          "happiness": -1,
          "time": 0
        }
      },
      "b": {
        "label": "Charity is good",
        "values": {
          "valuation": 0,
          "happiness": 4,
          "time": -3
        }
      }
    }
  },
  {
    "id": 176,
    "description": "One of the clients is demanding to \"speak to a manager\" about our refund policy.",
    "character": "support-01",
    "conditions": "",
    "choices": {
      "a": {
        "label": "No time",
        "values": {
          "valuation": -1,
          "happiness": 2,
          "time": 0
        }
      },
      "b": {
        "label": "Put them through",
        "values": {
          "valuation": 1,
          "happiness": -2,
          "time": -3
        }
      }
    }
  },
  {
    "id": 177,
    "description": "More and more customers are asking for a free trial.",
    "character": "roy-sales",
    "conditions": "",
    "choices": {
      "a": {
        "label": "Nobody rides for free",
        "values": {
          "valuation": 0,
          "happiness": 0,
          "time": 0
        }
      },
      "b": {
        "label": "Yeah, sure",
        "values": {
          "valuation": 1,
          "happiness": 0,
          "time": -1
        }
      }
    }
  },
  {
    "id": 178,
    "description": "SXSW wants us to sponsor the event with $75,000, and they'll offer 6 banners and a website link in return.",
    "character": "chad-marketing",
    "conditions": "",
    "choices": {
      "a": {
        "label": "Too expensive",
        "values": {
          "valuation": -1,
          "happiness": -2,
          "time": 0
        }
      },
      "b": {
        "label": "Let's do it!",
        "values": {
          "valuation": 2,
          "happiness": 2,
          "time": -2
        }
      }
    }
  },
  {
    "id": 179,
    "description": "The Uber team just started using our app!",
    "character": "roy-sales",
    "conditions": "",
    "choices": {
      "a": {
        "label": "Awesome!",
        "values": {
          "valuation": 1,
          "happiness": 1,
          "time": 0
        }
      },
      "b": {
        "label": "Let's milk this",
        "values": {
          "valuation": 3,
          "happiness": 1,
          "time": -2
        }
      }
    }
  },
  {
    "id": 180,
    "description": "Our app is booming in Japan!",
    "character": "seo-manager",
    "conditions": "",
    "choices": {
      "a": {
        "label": "Arigato!",
        "values": {
          "valuation": 1,
          "happiness": 1,
          "time": 0
        }
      },
      "b": {
        "label": "Make some landing pages",
        "values": {
          "valuation": 3,
          "happiness": 1,
          "time": -4
        }
      }
    }
  },
  {
    "id": 181,
    "description": "Lady Gaga just mentioned our app in an interview.",
    "character": "chad-marketing",
    "conditions": "",
    "choices": {
      "a": {
        "label": "Po-po-poker face",
        "values": {
          "valuation": 1,
          "happiness": 1,
          "time": 0
        }
      },
      "b": {
        "label": "Tweet about it",
        "values": {
          "valuation": 2,
          "happiness": 1,
          "time": -3
        }
      }
    }
  },
  {
    "id": 182,
    "description": "Our leads are crap. We're not selling fast enough.",
    "character": "roy-sales",
    "conditions": "beforeWeek(2)",
    "choices": {
      "a": {
        "label": "Always be closing!",
        "values": {
          "valuation": 3,
          "happiness": -3,
          "time": -2
        }
      },
      "b": {
        "label": "Slow and steady",
        "values": {
          "valuation": -3,
          "happiness": 1,
          "time": -1
        }
      }
    }
  },
  {
    "id": 183,
    "description": "We should buy some print advertising, It'll be cheap, I promise",
    "character": "chad-marketing",
    "conditions": "beforeWeek(2)",
    "choices": {
      "a": {
        "label": "If you say so",
        "values": {
          "valuation": 1,
          "happiness": 1,
          "time": -2
        }
      },
      "b": {
        "label": "No",
        "values": {
          "valuation": 0,
          "happiness": -1,
          "time": 0
        }
      }
    }
  },
  {
    "id": 184,
    "description": "We should add a background video to our front page.",
    "character": "chad-marketing",
    "conditions": "beforeWeek(2)",
    "choices": {
      "a": {
        "label": "Let's do it!",
        "values": {
          "valuation": 1,
          "happiness": 2,
          "time": -5
        }
      },
      "b": {
        "label": "Too much hassle",
        "values": {
          "valuation": 0,
          "happiness": -2,
          "time": 0
        }
      }
    }
  },
  {
    "id": 185,
    "description": "Our blog post is no. 1 on Hacker News!",
    "character": "chad-marketing",
    "conditions": "",
    "choices": {
      "a": {
        "label": "Great!",
        "values": {
          "valuation": 2,
          "happiness": 4,
          "time": 0
        }
      },
      "b": {
        "label": "Great!",
        "values": {
          "valuation": 2,
          "happiness": 4,
          "time": 0
        }
      }
    }
  },
  {
    "id": 186,
    "description": "New customers have a hard time finding the key features our product.",
    "character": "support-01",
    "conditions": "",
    "choices": {
      "a": {
        "label": "Create tutorial videos",
        "values": {
          "valuation": 0,
          "happiness": -2,
          "time": -3
        }
      },
      "b": {
        "label": "Hire UX engineer",
        "values": {
          "valuation": -2,
          "happiness": 2,
          "time": -1
        }
      }
    }
  },
  {
    "id": 187,
    "description": "60% of your users quit before the trial period ends.",
    "character": "product-manager",
    "conditions": "",
    "choices": {
      "a": {
        "label": "Investigate",
        "values": {
          "valuation": 0,
          "happiness": -3,
          "time": -2
        }
      },
      "b": {
        "label": "Hire more salespeople",
        "values": {
          "valuation": -2,
          "happiness": 0,
          "time": -1
        }
      }
    }
  },
  {
    "id": 188,
    "description": "You should hire way more people.",
    "character": "vc-raiden",
    "conditions": "",
    "choices": {
      "a": {
        "label": "Check overtime hours",
        "values": {
          "valuation": 0,
          "happiness": -2,
          "time": -2
        }
      },
      "b": {
        "label": "Hire HR manager",
        "values": {
          "valuation": -2,
          "happiness": 3,
          "time": -1
        }
      }
    }
  },
  {
    "id": 189,
    "description": "A customer says your company's Google+ page is not up to date.",
    "character": "support-01",
    "conditions": "",
    "choices": {
      "a": {
        "label": "Who cares",
        "values": {
          "valuation": 0,
          "happiness": 2,
          "time": 0
        }
      },
      "b": {
        "label": "Chaad?!",
        "values": {
          "valuation": 0,
          "happiness": -3,
          "time": -3
        }
      }
    }
  },
  {
    "id": 190,
    "description": "Our blog is pretty slow.",
    "character": "seo-manager",
    "conditions": "",
    "choices": {
      "a": {
        "label": "Ask devs",
        "values": {
          "valuation": 0,
          "happiness": -2,
          "time": -3
        }
      },
      "b": {
        "label": "Whatever",
        "values": {
          "valuation": -1,
          "happiness": 2,
          "time": 0
        }
      }
    }
  },
  {
    "id": 191,
    "description": "Should we focus on brand awareness or lead generation?",
    "character": "chad-marketing",
    "conditions": "",
    "choices": {
      "a": {
        "label": "Brand Awareness",
        "values": {
          "valuation": -1,
          "happiness": 2,
          "time": -3
        }
      },
      "b": {
        "label": "Lead Gen",
        "values": {
          "valuation": 4,
          "happiness": -2,
          "time": -1
        }
      }
    }
  },
  {
    "id": 192,
    "description": "The White House started to use our product but we can't publish this information.",
    "character": "chad-marketing",
    "conditions": "",
    "choices": {
      "a": {
        "label": "Whatever",
        "values": {
          "valuation": 0,
          "happiness": 1,
          "time": 0
        }
      },
      "b": {
        "label": "Leak it",
        "values": {
          "valuation": 1,
          "happiness": 2,
          "time": -1
        }
      }
    }
  },
  {
    "id": 193,
    "description": "Somebody has registered a Twitter handle with your company name already but they have 0 followers.",
    "character": "product-manager",
    "conditions": "",
    "choices": {
      "a": {
        "label": "Contact Twitter",
        "values": {
          "valuation": 2,
          "happiness": 0,
          "time": -2
        }
      },
      "b": {
        "label": "Buy their account",
        "values": {
          "valuation": -2,
          "happiness": 0,
          "time": 0
        }
      }
    }
  },
  {
    "id": 194,
    "description": "Airbnb starts to use your product and wants to do a cross-promotion with you.",
    "character": "product-manager",
    "conditions": "",
    "choices": {
      "a": {
        "label": "Let's do it!",
        "values": {
          "valuation": 1,
          "happiness": 1,
          "time": -4
        }
      },
      "b": {
        "label": "Not my target demographic",
        "values": {
          "valuation": 0,
          "happiness": -1,
          "time": 0
        }
      }
    }
  },
  {
    "id": 195,
    "description": "60 Minutes wants to do an interview with you.",
    "character": "assistant",
    "conditions": "",
    "choices": {
      "a": {
        "label": "Let's do it!",
        "values": {
          "valuation": 2,
          "happiness": 0,
          "time": -4
        }
      },
      "b": {
        "label": "Don't have 60 minutes",
        "values": {
          "valuation": 0,
          "happiness": 0,
          "time": 0
        }
      }
    }
  },
  {
    "id": 196,
    "description": "Good news! We just moved into our new office and things are looking bright.",
    "character": "office-manager",
    "conditions": "immediate",
    "choices": {
      "a": {
        "label": "Cool",
        "values": {
          "valuation": 0,
          "happiness": 2,
          "time": -1
        }
      },
      "b": {
        "label": "Sweet",
        "values": {
          "valuation": 0,
          "happiness": 2,
          "time": -1
        }
      }
    }
  },
  {
    "id": 197,
    "description": "You are invited to speak at SXSW about failure.",
    "character": "assistant",
    "conditions": "",
    "choices": {
      "a": {
        "label": "Sure, free publicity!",
        "values": {
          "valuation": 2,
          "happiness": -3,
          "time": -3
        }
      },
      "b": {
        "label": "Failure? No way",
        "values": {
          "valuation": 0,
          "happiness": 0,
          "time": 0
        }
      }
    }
  },
  {
    "id": 198,
    "description": "Our Time Square banner has our product name misspelled.",
    "character": "chad-marketing",
    "conditions": "",
    "choices": {
      "a": {
        "label": "Take it down",
        "values": {
          "valuation": -2,
          "happiness": -2,
          "time": 0
        }
      },
      "b": {
        "label": "Bash the agency",
        "values": {
          "valuation": 2,
          "happiness": 2,
          "time": -3
        }
      }
    }
  },
  {
    "id": 199,
    "description": "An old friend comes to you with a cool new startup idea and wants you to be the cofounder.",
    "character": "assistant",
    "conditions": "",
    "choices": {
      "a": {
        "label": "2 startups is better than 1.",
        "values": {
          "valuation": -2,
          "happiness": 2,
          "time": -4
        }
      },
      "b": {
        "label": "No time",
        "values": {
          "valuation": 1,
          "happiness": -3,
          "time": 0
        }
      }
    }
  },
  {
    "id": 200,
    "description": "We should offer a public API.",
    "character": "backend-dev-01",
    "conditions": "",
    "choices": {
      "a": {
        "label": "Open the gates",
        "values": {
          "valuation": 1,
          "happiness": 0,
          "time": -3
        }
      },
      "b": {
        "label": "No way",
        "values": {
          "valuation": 0,
          "happiness": -2,
          "time": 0
        }
      }
    }
  },
  {
    "id": 201,
    "description": "We reached 100,000 Twitter followers.",
    "character": "chad-marketing",
    "conditions": "",
    "choices": {
      "a": {
        "label": "Awesome",
        "values": {
          "valuation": 2,
          "happiness": 2,
          "time": 0
        }
      },
      "b": {
        "label": "Awesome",
        "values": {
          "valuation": 2,
          "happiness": 2,
          "time": 0
        }
      }
    }
  },
  {
    "id": 202,
    "description": "We reached 10,000 paying customers.",
    "character": "roy-sales",
    "conditions": "beforeWeek(6) & card(1)",
    "choices": {
      "a": {
        "label": "Awesome",
        "values": {
          "valuation": 2,
          "happiness": 2,
          "time": 0
        }
      },
      "b": {
        "label": "Awesome",
        "values": {
          "valuation": 2,
          "happiness": 2,
          "time": 0
        }
      }
    }
  },
  {
    "id": 203,
    "description": "Our company became profitable.",
    "character": "cfo",
    "conditions": "",
    "choices": {
      "a": {
        "label": "Awesome",
        "values": {
          "valuation": 3,
          "happiness": 3,
          "time": 0
        }
      },
      "b": {
        "label": "Awesome",
        "values": {
          "valuation": 3,
          "happiness": 3,
          "time": 0
        }
      }
    }
  },
  {
    "id": 204,
    "description": "We reached 100,000 paying customers.",
    "character": "product-manager",
    "conditions": "aboveValuation(500) & card(193)",
    "choices": {
      "a": {
        "label": "Awesome",
        "values": {
          "valuation": 2,
          "happiness": 3,
          "time": 0
        }
      },
      "b": {
        "label": "Awesome",
        "values": {
          "valuation": 2,
          "happiness": 3,
          "time": 0
        }
      }
    }
  },
  {
    "id": 205,
    "description": "We just doubled our monthly revenue.",
    "character": "cfo",
    "conditions": "",
    "choices": {
      "a": {
        "label": "Awesome",
        "values": {
          "valuation": 3,
          "happiness": 3,
          "time": 0
        }
      },
      "b": {
        "label": "Awesome",
        "values": {
          "valuation": 3,
          "happiness": 3,
          "time": 0
        }
      }
    }
  },
  {
    "id": 206,
    "description": "I just checked our company's bank account and saw 1 million dollars for the first time!",
    "character": "cfo",
    "conditions": "",
    "choices": {
      "a": {
        "label": "Awesome",
        "values": {
          "valuation": 3,
          "happiness": 3,
          "time": -2
        }
      },
      "b": {
        "label": "Awesome",
        "values": {
          "valuation": 3,
          "happiness": 3,
          "time": -2
        }
      }
    }
  },
  {
    "id": 207,
    "description": "We just made a witty tweet about Beyonce and she retweeted it.",
    "character": "chad-marketing",
    "conditions": "",
    "choices": {
      "a": {
        "label": "Post the screenshot",
        "values": {
          "valuation": 1,
          "happiness": 2,
          "time": -3
        }
      },
      "b": {
        "label": "Awesome",
        "values": {
          "valuation": 1,
          "happiness": 1,
          "time": 0
        }
      }
    }
  },
  {
    "id": 208,
    "description": "Verizon wants to feature our product in their newsletter to 50K people.",
    "character": "seo-manager",
    "conditions": "",
    "choices": {
      "a": {
        "label": "Let's celebrate!",
        "values": {
          "valuation": 1,
          "happiness": 3,
          "time": -3
        }
      },
      "b": {
        "label": "Awesome",
        "values": {
          "valuation": 1,
          "happiness": 1,
          "time": 0
        }
      }
    }
  },
  {
    "id": 209,
    "description": "Yesterday's takeaway made everyone sick for a week.",
    "character": "office-manager",
    "conditions": "",
    "choices": {
      "a": {
        "label": "Oh...",
        "values": {
          "valuation": 0,
          "happiness": -2,
          "time": -10
        }
      },
      "b": {
        "label": "Great...",
        "values": {
          "valuation": 0,
          "happiness": -2,
          "time": -10
        }
      }
    }
  },
  {
    "id": 210,
    "description": "We're halfway through the year. We should start thinking about money more.",
    "character": "season-01",
    "conditions": "afterWeek(6) & immediate",
    "choices": {
      "a": {
        "label": "I got this",
        "values": {
          "valuation": 0,
          "happiness": 0,
          "time": 0
        }
      },
      "b": {
        "label": "I got this",
        "values": {
          "valuation": 0,
          "happiness": 0,
          "time": 0
        }
      }
    }
  },
  {
    "id": 211,
    "description": "Winter is coming. We need to hit 1 Billion soon.",
    "character": "season-02",
    "conditions": "afterWeek(10) & immediate",
    "choices": {
      "a": {
        "label": "Brace yourself",
        "values": {
          "valuation": 0,
          "happiness": 0,
          "time": 0
        }
      },
      "b": {
        "label": "Brace yourself",
        "values": {
          "valuation": 0,
          "happiness": 0,
          "time": 0
        }
      }
    }
  }
]

function update(order){
  var x = Math.floor((Math.random() * 100) + 1);
  var temp = cards[x]
  $("#description").text(temp.description);
  $("#name").text(temp.character);
  if (order==1){
    var choice = [temp.a.label,temp.a.values.valuation,temp.a]
  }
  $("money").text();
  $("environment").text();
  $("time").text();
}

$(document).ready(function(){
    $("#a").click(function(){
        update(1);
    });
});

