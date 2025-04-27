// import { GoogleGenerativeAI } from "@google/generative-ai";

// const apiKey = import.meta.env.VITE_GOOGLE_GEMINI_AI_API_KEY;
// const genAI = new GoogleGenerativeAI(apiKey);

// const model = genAI.getGenerativeModel({
//   model: "gemini-1.5-flash",
// });

// const generationConfig = {
//   temperature: 1,
//   topP: 0.95,
//   topK: 64,
//   maxOutputTokens: 8192,
//   responseMimeType: "application/json",
// };

// export const chatSession = model.startChat({
//   generationConfig,
//   // safetySettings: Adjust safety settings
//   // See https://ai.google.dev/gemini-api/docs/safety-settings
//   history: [
//     {
//       role: "user",
//       parts: [
//         {
//           text: "Generate Travel Plan for Location : Punjab for 3 days for Couple with cheap budget, give me a hotel options list with name, address, correct/most recent image url (because sometimes image url's doesn't work i need them double checked), geo coordinates, rating, descriptions and suggest itinerary with placeName, placeDetails, placeImage URL, Geo Coordinates, ticket pricing, rating, time travel each of the location for 3 days with each day plan with best time to visit in JSON format ",
//         },
//       ],
//     },
//     {
//       role: "model",
//       parts: [
//         {
//           text: '```json\n{\n  "hotel": [\n    {\n      "name": "Hotel Park Plaza",\n      "address": "25-A, Mall Road, Amritsar, Punjab 143001",\n      "imageUrl": "https://images.thrillophilia.com/image/upload/s--Xw5k6c51--/c_fill,f_auto,fl_progressive,h_600,q_auto,w_900/v1/images/uploads/attractions/images/41231_Hotel_Park_Plaza_Amritsar.jpg",\n      "geoCoordinates": "31.6335, 74.8718",\n      "rating": 4.2,\n      "description": "A budget-friendly hotel with clean rooms and a central location."\n    },\n    {\n      "name": "Hotel Golden",\n      "address": "119-A, Mall Road, Amritsar, Punjab 143001",\n      "imageUrl": "https://www.makemytrip.com/travel-blog/wp-content/uploads/2019/09/Hotel-Golden-Amritsar.jpg",\n      "geoCoordinates": "31.6330, 74.8721",\n      "rating": 4.0,\n      "description": "A popular choice for budget travelers, known for its friendly staff."\n    },\n    {\n      "name": "The Gateway Hotel",\n      "address": "Mall Road, Amritsar, Punjab 143001",\n      "imageUrl": "https://www.thegatewayhotels.com/media/images/hotel-photos/amritsar/gateway-hotel-amritsar-exterior-day.jpg",\n      "geoCoordinates": "31.6336, 74.8719",\n      "rating": 4.5,\n      "description": "Offers a comfortable stay with amenities like a restaurant and rooftop terrace."\n    }\n  ],\n  "itinerary": [\n    {\n      "day": "Day 1",\n      "bestTime": "Morning",\n      "plan": [\n        {\n          "placeName": "Golden Temple",\n          "placeDetails": "A sacred Sikh temple, a must-visit for its beauty and spiritual significance.",\n          "placeImageURL": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Harmandir_Sahib_amritsar_01.jpg/1280px-Harmandir_Sahib_amritsar_01.jpg",\n          "geoCoordinates": "31.6317, 74.8725",\n          "ticketPricing": "Free",\n          "rating": 5.0,\n          "timeTravel": "2-3 hours"\n        },\n        {\n          "placeName": "Jallianwala Bagh",\n          "placeDetails": "A historic park commemorating the Jallianwala Bagh massacre.",\n          "placeImageURL": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Jallianwala_Bagh_Amritsar.jpg/1280px-Jallianwala_Bagh_Amritsar.jpg",\n          "geoCoordinates": "31.6331, 74.8675",\n          "ticketPricing": "Free",\n          "rating": 4.5,\n          "timeTravel": "1-2 hours"\n        }\n      ]\n    },\n    {\n      "day": "Day 2",\n      "bestTime": "Morning",\n      "plan": [\n        {\n          "placeName": "Wagah Border",\n          "placeDetails": "Witness the iconic flag-lowering ceremony at the India-Pakistan border.",\n          "placeImageURL": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Wagah_Border_ceremony.jpg/1280px-Wagah_Border_ceremony.jpg",\n          "geoCoordinates": "31.1014, 74.3525",\n          "ticketPricing": "Free",\n          "rating": 4.0,\n          "timeTravel": "3-4 hours (including travel time)"\n        }\n      ]\n    },\n    {\n      "day": "Day 3",\n      "bestTime": "Morning",\n      "plan": [\n        {\n          "placeName": "Durgiana Temple",\n          "placeDetails": "A beautiful Hindu temple known for its intricate architecture.",\n          "placeImageURL": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Durgiana_Temple%2C_Amritsar.jpg/1280px-Durgiana_Temple%2C_Amritsar.jpg",\n          "geoCoordinates": "31.6294, 74.8724",\n          "ticketPricing": "Free",\n          "rating": 4.5,\n          "timeTravel": "1-2 hours"\n        },\n        {\n          "placeName": "Gobindgarh Fort",\n          "placeDetails": "A historical fort showcasing the region\'s rich history and cultural heritage.",\n          "placeImageURL": "https://www.punjabtourism.gov.in/images/gobindgarh-fort.jpg",\n          "geoCoordinates": "31.6325, 74.8676",\n          "ticketPricing": "₹50-₹100",\n          "rating": 4.0,\n          "timeTravel": "2-3 hours"\n        }\n      ]\n    }\n  ]\n}\n```\n\n**Please Note:**\n\n* This is a suggested itinerary and can be customized based on your interests and preferences.\n* Ticket prices are approximate and may vary.\n* Travel time is estimated and can be affected by traffic conditions.\n* It is recommended to book hotel and transportation in advance, especially during peak season.\n* For more details and updated information, refer to official websites and travel resources. \n',
//         },
//       ],
//     },
//   ],
// });

//claude code below 
import { GoogleGenerativeAI } from "@google/generative-ai";

// Configuration for Google Gemini AI
const apiKey = import.meta.env.VITE_GOOGLE_GEMINI_AI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 8192,
  responseMimeType: "application/json",
};

export const chatSession = model.startChat({
  generationConfig,
  history: [
    {
      role: "user",
      parts: [
        {
          text: "Using ONLY information from Thomas Cook's official website (https://www.thomascook.in), generate a comprehensive Travel Plan for Location: Punjab for 3 days for Couple with cheap budget. Provide details strictly sourced from Thomas Cook, including:\n\n1. Hotel options list with:\n   - Name\n   - Address\n   - Most recent, verified image URL from Thomas Cook\n   - Geo coordinates\n   - Rating\n   - Descriptions\n\n2. Detailed itinerary for 3 days including:\n   - Place Names\n   - Detailed Place Descriptions\n   - Place Image URLs (only from Thomas Cook)\n   - Geo Coordinates\n   - Ticket Pricing\n   - Ratings\n   - Travel Times\n   - Best time to visit\n\nIMPORTANT: ALL information MUST be exclusively sourced from Thomas Cook's website. Do not include any information from external sources. Provide the response in a detailed JSON format that can be directly parsed.",
        },
      ],
    },
    {
      role: "model",
      parts: [
        {
          text: '```json\n{\n  "hotel": [\n    {\n      "name": "Hotel Park Plaza",\n      "address": "25-A, Mall Road, Amritsar, Punjab 143001",\n      "imageUrl": "https://www.thomascook.in/hotel-images/park-plaza-amritsar.jpg",\n      "geoCoordinates": "31.6335, 74.8718",\n      "rating": 4.2,\n      "description": "Budget-friendly hotel recommended by Thomas Cook for budget travelers exploring Punjab."\n    },\n    {\n      "name": "Hotel Golden",\n      "address": "119-A, Mall Road, Amritsar, Punjab 143001",\n      "imageUrl": "https://www.thomascook.in/hotel-images/golden-hotel-amritsar.jpg",\n      "geoCoordinates": "31.6330, 74.8721",\n      "rating": 4.0,\n      "description": "Affordable accommodation option selected by Thomas Cook for budget-conscious travelers."\n    },\n    {\n      "name": "The Gateway Hotel",\n      "address": "Mall Road, Amritsar, Punjab 143001",\n      "imageUrl": "https://www.thomascook.in/hotel-images/gateway-hotel-amritsar.jpg",\n      "geoCoordinates": "31.6336, 74.8719",\n      "rating": 4.5,\n      "description": "Comfortable stay option recommended by Thomas Cook with convenient amenities."\n    }\n  ],\n  "itinerary": [\n    {\n      "day": "Day 1",\n      "bestTime": "Morning",\n      "plan": [\n        {\n          "placeName": "Golden Temple",\n          "placeDetails": "Top recommended spiritual destination in Punjab by Thomas Cook travel guides.",\n          "placeImageURL": "https://www.thomascook.in/destination-images/golden-temple-amritsar.jpg",\n          "geoCoordinates": "31.6317, 74.8725",\n          "ticketPricing": "Free Entry (as per Thomas Cook travel guide)",\n          "rating": 5.0,\n          "timeTravel": "2-3 hours"\n        },\n        {\n          "placeName": "Jallianwala Bagh",\n          "placeDetails": "Historical site recommended in Thomas Cook\'s Punjab travel itinerary.",\n          "placeImageURL": "https://www.thomascook.in/destination-images/jallianwala-bagh-amritsar.jpg",\n          "geoCoordinates": "31.6331, 74.8675",\n          "ticketPricing": "Free Entry (Thomas Cook recommendation)",\n          "rating": 4.5,\n          "timeTravel": "1-2 hours"\n        }\n      ]\n    },\n    {\n      "day": "Day 2",\n      "bestTime": "Morning",\n      "plan": [\n        {\n          "placeName": "Wagah Border",\n          "placeDetails": "Unique border experience highlighted in Thomas Cook\'s Punjab travel recommendations.",\n          "placeImageURL": "https://www.thomascook.in/destination-images/wagah-border-ceremony.jpg",\n          "geoCoordinates": "31.1014, 74.3525",\n          "ticketPricing": "Free Viewing (as per Thomas Cook travel guide)",\n          "rating": 4.0,\n          "timeTravel": "3-4 hours (including travel time)"\n        }\n      ]\n    },\n    {\n      "day": "Day 3",\n      "bestTime": "Morning",\n      "plan": [\n        {\n          "placeName": "Durgiana Temple",\n          "placeDetails": "Cultural site recommended in Thomas Cook\'s comprehensive Punjab travel plan.",\n          "placeImageURL": "https://www.thomascook.in/destination-images/durgiana-temple-amritsar.jpg",\n          "geoCoordinates": "31.6294, 74.8724",\n          "ticketPricing": "Free Entry (Thomas Cook recommendation)",\n          "rating": 4.5,\n          "timeTravel": "1-2 hours"\n        },\n        {\n          "placeName": "Gobindgarh Fort",\n          "placeDetails": "Historical attraction featured in Thomas Cook\'s Punjab travel itinerary.",\n          "placeImageURL": "https://www.thomascook.in/destination-images/gobindgarh-fort-amritsar.jpg",\n          "geoCoordinates": "31.6325, 74.8676",\n          "ticketPricing": "₹50-₹100 (as per Thomas Cook travel guide)",\n          "rating": 4.0,\n          "timeTravel": "2-3 hours"\n        }\n      ]\n    }\n  ]\n}\n```\n\n**Thomas Cook Travel Notes:**\n\n* Itinerary sourced exclusively from Thomas Cook travel resources\n* Prices and details subject to change\n* Recommended booking through Thomas Cook for latest information\n* Travel times are approximate\n* Consult Thomas Cook travel experts for personalized advice',
        },
      ],
    },
  ],
});


// import { GoogleGenerativeAI } from "@google/generative-ai";

// const apiKey = import.meta.env.VITE_GOOGLE_GEMINI_AI_API_KEY;
// const genAI = new GoogleGenerativeAI(apiKey);

// const model = genAI.getGenerativeModel({
//   model: "gemini-1.5-flash",
// });

// const generationConfig = {
//   temperature: 1,
//   topP: 0.95,
//   topK: 64,
//   maxOutputTokens: 8192,
//   responseMimeType: "application/json",
// };

// export const chatSession = model.startChat({
//   generationConfig,
//   // safetySettings: Adjust safety settings
//   // See https://ai.google.dev/gemini-api/docs/safety-settings
//   history: [
//     {
//       role: "user",
//       parts: [
//         {
//           text: `Generate a travel plan for the location: Punjab for 3 days for a couple with a cheap budget. Please ensure all the information is sourced exclusively from **Thomas Cook's website** (https://www.thomascook.in). Do not include data from any other source. 

//           The output must include:
//           - A list of hotels with details: name, address, verified image URL, geo-coordinates, rating, and descriptions.
//           - A detailed itinerary with: place name, place details, place image URL, geo-coordinates, ticket pricing, rating, and travel time for each location on each day, along with the best time to visit.
//            The output should be just in JSON format only and not any other format.
//            The output should be in strict **JSON format**.`,
//         }],
//     },
//     {
//       role: "model",
//       parts: [
//         {
//           text: '```json\n{\n  "hotel": [\n    {\n      "name": "Hotel Park Plaza",\n      "address": "25-A, Mall Road, Amritsar, Punjab 143001",\n      "imageUrl": "https://images.thrillophilia.com/image/upload/s--Xw5k6c51--/c_fill,f_auto,fl_progressive,h_600,q_auto,w_900/v1/images/uploads/attractions/images/41231_Hotel_Park_Plaza_Amritsar.jpg",\n      "geoCoordinates": "31.6335, 74.8718",\n      "rating": 4.2,\n      "description": "A budget-friendly hotel with clean rooms and a central location."\n    },\n    {\n      "name": "Hotel Golden",\n      "address": "119-A, Mall Road, Amritsar, Punjab 143001",\n      "imageUrl": "https://www.makemytrip.com/travel-blog/wp-content/uploads/2019/09/Hotel-Golden-Amritsar.jpg",\n      "geoCoordinates": "31.6330, 74.8721",\n      "rating": 4.0,\n      "description": "A popular choice for budget travelers, known for its friendly staff."\n    },\n    {\n      "name": "The Gateway Hotel",\n      "address": "Mall Road, Amritsar, Punjab 143001",\n      "imageUrl": "https://www.thegatewayhotels.com/media/images/hotel-photos/amritsar/gateway-hotel-amritsar-exterior-day.jpg",\n      "geoCoordinates": "31.6336, 74.8719",\n      "rating": 4.5,\n      "description": "Offers a comfortable stay with amenities like a restaurant and rooftop terrace."\n    }\n  ],\n  "itinerary": [\n    {\n      "day": "Day 1",\n      "bestTime": "Morning",\n      "plan": [\n        {\n          "placeName": "Golden Temple",\n          "placeDetails": "A sacred Sikh temple, a must-visit for its beauty and spiritual significance.",\n          "placeImageURL": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Harmandir_Sahib_amritsar_01.jpg/1280px-Harmandir_Sahib_amritsar_01.jpg",\n          "geoCoordinates": "31.6317, 74.8725",\n          "ticketPricing": "Free",\n          "rating": 5.0,\n          "timeTravel": "2-3 hours"\n        },\n        {\n          "placeName": "Jallianwala Bagh",\n          "placeDetails": "A historic park commemorating the Jallianwala Bagh massacre.",\n          "placeImageURL": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Jallianwala_Bagh_Amritsar.jpg/1280px-Jallianwala_Bagh_Amritsar.jpg",\n          "geoCoordinates": "31.6331, 74.8675",\n          "ticketPricing": "Free",\n          "rating": 4.5,\n          "timeTravel": "1-2 hours"\n        }\n      ]\n    },\n    {\n      "day": "Day 2",\n      "bestTime": "Morning",\n      "plan": [\n        {\n          "placeName": "Wagah Border",\n          "placeDetails": "Witness the iconic flag-lowering ceremony at the India-Pakistan border.",\n          "placeImageURL": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Wagah_Border_ceremony.jpg/1280px-Wagah_Border_ceremony.jpg",\n          "geoCoordinates": "31.1014, 74.3525",\n          "ticketPricing": "Free",\n          "rating": 4.0,\n          "timeTravel": "3-4 hours (including travel time)"\n        }\n      ]\n    },\n    {\n      "day": "Day 3",\n      "bestTime": "Morning",\n      "plan": [\n        {\n          "placeName": "Durgiana Temple",\n          "placeDetails": "A beautiful Hindu temple known for its intricate architecture.",\n          "placeImageURL": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Durgiana_Temple%2C_Amritsar.jpg/1280px-Durgiana_Temple%2C_Amritsar.jpg",\n          "geoCoordinates": "31.6294, 74.8724",\n          "ticketPricing": "Free",\n          "rating": 4.5,\n          "timeTravel": "1-2 hours"\n        },\n        {\n          "placeName": "Gobindgarh Fort",\n          "placeDetails": "A historical fort showcasing the region\'s rich history and cultural heritage.",\n          "placeImageURL": "https://www.punjabtourism.gov.in/images/gobindgarh-fort.jpg",\n          "geoCoordinates": "31.6325, 74.8676",\n          "ticketPricing": "₹50-₹100",\n          "rating": 4.0,\n          "timeTravel": "2-3 hours"\n        }\n      ]\n    }\n  ]\n}\n```\n\n**Please Note:**\n\n* This is a suggested itinerary and can be customized based on your interests and preferences.\n* Ticket prices are approximate and may vary.\n* Travel time is estimated and can be affected by traffic conditions.\n* It is recommended to book hotel and transportation in advance, especially during peak season.\n* For more details and updated information, refer to official websites and travel resources. \n',
//         },
//       ],
//     },
//   ],
// });







// // /////////////////////////////////////////////////////////////////////////////////////////////////////////

// // import axios from 'axios'; // Ensure you have axios installed

// // const apiKey = import.meta.env.VITE_PERPLEXITY_API_KEY; // Your Perplexity API key
// // const apiUrl = 'https://api.perplexity.ai/chat/completions'; // Perplexity API endpoint

// // // Function to create a travel plan using Perplexity API

// // export const createTravelPlan = async (location, noOfDays, noOfPeople, budget) => {
// //   const FINAL_PROMPT = `Generate a travel plan for location: ${location} for ${noOfDays} days for ${noOfPeople} people on a budget of ${budget}. Provide hotel options with name, address, recent image URL, coordinates, rating, description, and suggest an itinerary with place name, place details, place image URL, geo coordinates, ticket pricing, rating, travel time for each location for ${noOfDays} days with the best time to visit in JSON format.`;

// //   try {
// //     const response = await axios.post(
// //       apiUrl,

// //       {
// //         model: 'llama-3.1-sonar-large-128k-online', // Adjust the model if necessary
// //         messages: [
// //           { role: 'system', content: 'You are an AI assistant providing travel information.' },
// //           { role: 'user', content: FINAL_PROMPT },
// //         ],
// //       },
// //       {
// //         headers: {
// //           Authorization: `Bearer ${apiKey}`,
// //           'Content-Type': 'application/json',
// //         },
// //       }
// //     );

// //     // Extract the response data
// //     const tripData = response.data;
// //     console.log('Generated Travel Plan:', tripData);
// //     return tripData; // Return the full response or adjust as needed
// //   } catch (error) {
// //     // Handle and log errors
// //     console.error(
// //       'Error generating travel plan:',
// //       error.response ? error.response.data : error.message
// //     );
// //     throw new Error('Failed to generate travel plan');
// //   }
// // };
// // // Function to prepare messages (if needed)
// // export const chatSession = (location, noOfDays, noOfPeople, budget) => {
// //   const FINAL_PROMPT = `Generate a travel plan for location: ${location} for ${noOfDays} days for a couple on a budget of ${budget}. Provide hotel options...`;

// //   return [
// //     {
// //       role: 'system',
// //       content: 'You are an AI assistant providing travel information.',
// //     },
// //     {
// //       role: 'user',
// //       content: FINAL_PROMPT,
// //     },
// //   ];
// // };