// import axios from 'axios';
// import cheerio from 'cheerio';

// export const scrapeTravelPlanFromThomasCook = async (location) => {
//     try {
//         const response = await axios.get(`https://www.thomascook.in/search?location=${location}`);
//         const $ = cheerio.load(response.data);

//         const itinerary = [];
//         $('.itinerary-day').each((_, element) => {
//             const dayDetails = {
//                 day: $(element).find('.day-number').text().trim(),
//                 plan: [],
//             };

//             $(element)
//                 .find('.place-card')
//                 .each((__, placeElem) => {
//                     dayDetails.plan.push({
//                         placeName: $(placeElem).find('.place-name').text().trim(),
//                         placeDetails: $(placeElem).find('.place-details').text().trim(),
//                         placeImageURL: $(placeElem).find('.place-image').attr('src'),
//                         geoCoordinates: $(placeElem).find('.geo-coordinates').data('geo') || null,
//                         ticketPricing: $(placeElem).find('.ticket-price').text().trim(),
//                         rating: $(placeElem).find('.place-rating').text().trim(),
//                         travelTime: $(placeElem).find('.travel-time').text().trim(),
//                         bestTimeToVisit: $(placeElem).find('.best-time-to-visit').text().trim(),
//                         link: $(placeElem).find('a.place-link').attr('href'),
//                     });
//                 });

//             itinerary.push(dayDetails);
//         });

//         return { itinerary };
//     } catch (error) {
//         console.error('Error scraping travel plans:', error.message);
//         throw new Error('Failed to scrape travel plans');
//     }
// };


