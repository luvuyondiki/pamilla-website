(function () {
  'use strict';

  var SLUGS = ['signature', 'bangkok-islands', 'northern'];

  var VARIANTS = {
    signature: {
      pageTitle: 'Thailand — Islands & culture | UbuntuVoyage',
      metaDescription:
        '10-day curated Thailand trip: Bangkok, markets, limestone bays, and island time. Flights, hotels, breakfast, transport, and optional activities.',
      ogTitle: 'Thailand — Islands & culture | UbuntuVoyage',
      ogDescription:
        '10-day curated Thailand trip with flights, hotels, breakfast, transport, and optional activities.',
      tourFormValue: 'Thailand — Islands & culture — signature (10 days)',
      eyebrow: 'Curated group trip',
      h1: 'Thailand — Islands & culture',
      lead:
        'Bangkok’s skyline and street food, limestone bays, and slow afternoons by the water—hosted end-to-end so you can focus on the moments.',
      chips: ['10 days', 'From $2,650 / person', 'Deposit + installments'],
      duration: '10 days / 9 nights',
      pricePp: '$2,650 pp',
      payment: '30% deposit · installments',
      overview: [
        'Thailand pairs high-energy city days with slow coastal chapters. We sequence the trip so you land with an easy welcome day, build into iconic sights and a long-tail bay experience, then unwind on an island before a simple departure path home.',
        'You travel with a small group, set departure windows across the year, and a dedicated UbuntuVoyage coordinator for pre-trip questions and on-trip support.'
      ],
      accommodation: [
        'We prioritise walkable neighbourhoods, reliable air-conditioning, and strong guest reviews. In Bangkok you stay near transit links; on the coast and island we choose properties with pool access and comfortable beds after active days.',
        'Exact property names are shared at booking so you know precisely what to expect.'
      ],
      itinerary: [
        { label: 'Day 1', title: 'Arrivals & welcome', body: 'Airport meet-and-greet, transfer to your Bangkok hotel, and an optional light evening walk for jet-lag reset.' },
        { label: 'Day 2', title: 'Temples & river city', body: 'Guided morning at key river temples, local lunch, and free time for shopping or spa.' },
        { label: 'Day 3', title: 'Markets after dark', body: 'Street-food-forward evening with hosts who explain dishes and how to order like a regular.' },
        { label: 'Day 4', title: 'Coast transfer', body: 'Private road + boat connection to the bay area; sunset free time.' },
        { label: 'Day 5', title: 'Long-tail bay day (included)', body: 'Shared long-tail exploration of limestone scenery, swimming stops, and beach picnic.' },
        { label: 'Days 6–8', title: 'Island pace', body: 'Beach time, optional add-ons (diving, cooking class, kayak), and one hosted group dinner.' },
        { label: 'Day 9', title: 'Return toward Bangkok', body: 'Scenic transfer and final-night city hotel for easy airport access.' },
        { label: 'Day 10', title: 'Departures', body: 'Breakfast and timed airport transfers.' }
      ],
      included: [
        'Return international flights (group allocation)*',
        '3★+ and boutique hotels, twin share',
        'Daily breakfast',
        'Private coach / van / boat transfers as per itinerary',
        'English-speaking guides on included excursions',
        'Long-tail bay day experience',
        'UbuntuVoyage trip lead on select departures'
      ],
      excluded: [
        'Travel insurance (required)',
        'Lunches & dinners unless stated',
        'Visas and personal incidentals',
        'Optional activities booked à la carte',
        'Single-room supplement if requested'
      ],
      activities: [
        'River temple half-day with guide',
        'Hosted evening market food walk',
        'Long-tail limestone bay day',
        'Group sunset dinner on the island'
      ],
      pricingBullets: [
        '<strong>From $2,650</strong> per person (twin share)',
        '<strong>30% deposit</strong> secures your seat',
        'Remaining balance split into <strong>two instalments</strong> (dates in your contract)',
        'Optional single supplement quoted separately'
      ],
      pricingNote:
        '*Flights are ticketed for the group from agreed hub cities; if you need a different origin we quote a supplement or meet-the-group option.'
    },
    'bangkok-islands': {
      pageTitle: 'Thailand — Bangkok & islands | UbuntuVoyage',
      metaDescription:
        '8-day Thailand trip: Bangkok highlights first, then island and bay time—iconic food scene plus limestone coast without the full 10-day arc.',
      ogTitle: 'Thailand — Bangkok & islands | UbuntuVoyage',
      ogDescription:
        '8-day small-group journey from Bangkok energy to bays and beaches, with clear pricing and deposit schedule.',
      tourFormValue: 'Thailand — Bangkok & islands (8 days)',
      eyebrow: 'Curated group trip',
      h1: 'Thailand — Bangkok & islands',
      lead:
        'City highlights first, then island time—designed for travellers who want iconic bays without sacrificing Bangkok’s food scene and river-city rhythm.',
      chips: ['8 days', 'From $2,480 / person', 'Deposit + installments'],
      duration: '8 days / 7 nights',
      pricePp: '$2,480 pp',
      payment: '30% deposit · installments',
      overview: [
        'This pacing keeps Bangkok’s temples, river views, and night markets upfront, then shifts you to the coast for limestone scenery and beach days before a simple return flight path.',
        'You travel with a small group and an UbuntuVoyage coordinator for pre-trip questions and on-trip support; final hotels and timings are confirmed in your written quote.'
      ],
      accommodation: [
        'Bangkok stays favour walkable areas near transit; on the coast we choose well-reviewed hotels with pool access where possible after active sightseeing days.',
        'Exact property names are shared at booking so you know precisely what to expect.'
      ],
      itinerary: [
        { label: 'Day 1', title: 'Arrivals & Bangkok settle-in', body: 'Airport meet-and-greet, hotel transfer, and optional short orientation walk.' },
        { label: 'Day 2', title: 'River temples & old city', body: 'Guided morning at key temples and the riverfront; local lunch and free afternoon.' },
        { label: 'Day 3', title: 'Markets & evening flavours', body: 'Flexible day with a hosted evening food walk—dishes, ordering tips, and neighbourhood favourites.' },
        { label: 'Day 4', title: 'Coast road & bay arrival', body: 'Private transfer to the bay area; sunset free time and welcome to the slower coast chapter.' },
        { label: 'Day 5', title: 'Long-tail bay experience', body: 'Shared long-tail route through limestone scenery, swimming stops, and beach-style downtime.' },
        { label: 'Day 6', title: 'Island / coast pace', body: 'Beach time and optional add-ons (kayak, spa, snorkelling)—your coordinator shares vetted options.' },
        { label: 'Day 7', title: 'Return toward Bangkok', body: 'Scenic transfer back to the capital for a final city night near airport links.' },
        { label: 'Day 8', title: 'Departures', body: 'Breakfast and timed airport transfers.' }
      ],
      included: [
        'Return international flights (group allocation)*',
        '3★+ and boutique hotels, twin share',
        'Daily breakfast',
        'Private coach / van / boat transfers as per itinerary',
        'English-speaking guides on included excursions',
        'Long-tail bay day experience',
        'UbuntuVoyage trip lead on select departures'
      ],
      excluded: [
        'Travel insurance (required)',
        'Lunches & dinners unless stated',
        'Visas and personal incidentals',
        'Optional activities booked à la carte',
        'Single-room supplement if requested'
      ],
      activities: [
        'River temple half-day with guide',
        'Hosted evening market food walk',
        'Long-tail limestone bay day',
        'Hosted group dinner on the coast or island (as per departure)'
      ],
      pricingBullets: [
        '<strong>From $2,480</strong> per person (twin share)',
        '<strong>30% deposit</strong> secures your seat',
        'Remaining balance split into <strong>two instalments</strong> (dates in your contract)',
        'Optional single supplement quoted separately'
      ],
      pricingNote:
        '*Flights are ticketed for the group from agreed hub cities; if you need a different origin we quote a supplement or meet-the-group option.'
    },
    northern: {
      pageTitle: 'Thailand — Northern culture trail | UbuntuVoyage',
      metaDescription:
        '7-day northern Thailand trip: temples, night bazaars, and hill-country pacing—heritage-forward with optional nature add-ons.',
      ogTitle: 'Thailand — Northern culture trail | UbuntuVoyage',
      ogDescription:
        '7-day small-group northern Thailand journey with transparent pricing and deposit schedule.',
      tourFormValue: 'Thailand — Northern culture trail (7 days)',
      eyebrow: 'Curated group trip',
      h1: 'Thailand — Northern culture trail',
      lead:
        'Temples, night bazaars, and slower hill-country pacing—ideal if beaches are optional and heritage, crafts, and local food culture are the priority.',
      chips: ['7 days', 'From $2,320 / person', 'Deposit + installments'],
      duration: '7 days / 6 nights',
      pricePp: '$2,320 pp',
      payment: '30% deposit · installments',
      overview: [
        'This route centres Chiang Mai–style pacing: old-city moats, artisan neighbourhoods, and curated market time, with space for an optional nature day depending on season and group interest.',
        'You travel with a small group and an UbuntuVoyage coordinator; detailed day-by-day timing and guesthouses or boutique picks are confirmed in your personalised quote.'
      ],
      accommodation: [
        'We choose air-conditioned boutique or 3★+ properties with strong reviews, favouring walkable old-city or riverside pockets where available.',
        'Exact property names are shared at booking so you know precisely what to expect.'
      ],
      itinerary: [
        { label: 'Day 1', title: 'Arrivals & welcome', body: 'Airport meet-and-greet, transfer to your base hotel, and optional gentle evening stroll.' },
        { label: 'Day 2', title: 'Old city temples & lanes', body: 'Guided half-day at key temples and lanes; free afternoon for café time or spa.' },
        { label: 'Day 3', title: 'Markets & crafts', body: 'Morning market visit with context on ingredients; afternoon free for cooking class add-on or rest.' },
        { label: 'Day 4', title: 'Hill-country day trip', body: 'Scenic drive to viewpoints and village stops—pace adjusted for weather and group comfort.' },
        { label: 'Day 5', title: 'Night bazaar & food crawl', body: 'Hosted evening walk through night bazaar energy with street-food stops and ordering tips.' },
        { label: 'Day 6', title: 'Free culture day', body: 'Choose your angle—temple revisit, ethical elephant encounter add-on, or slow café day (add-ons quoted separately).' },
        { label: 'Day 7', title: 'Departures', body: 'Breakfast and timed airport transfer.' }
      ],
      included: [
        'Return international flights (group allocation)*',
        '3★+ and boutique hotels, twin share',
        'Daily breakfast',
        'Private van / driver days as per itinerary',
        'English-speaking guides on included excursions',
        'UbuntuVoyage trip lead on select departures'
      ],
      excluded: [
        'Travel insurance (required)',
        'Lunches & dinners unless stated',
        'Visas and personal incidentals',
        'Optional activities (cooking class, elephant programmes, spa) booked à la carte',
        'Single-room supplement if requested'
      ],
      activities: [
        'Old-city temple half-day with guide',
        'Hosted night bazaar & street-food walk',
        'Hill-country scenic day with driver-guide',
        'Market morning with cultural context'
      ],
      pricingBullets: [
        '<strong>From $2,320</strong> per person (twin share)',
        '<strong>30% deposit</strong> secures your seat',
        'Remaining balance split into <strong>two instalments</strong> (dates in your contract)',
        'Optional single supplement quoted separately'
      ],
      pricingNote:
        '*Flights are ticketed for the group from agreed hub cities; if you need a different origin we quote a supplement or meet-the-group option.'
    }
  };

  function setText(id, text) {
    var el = document.getElementById(id);
    if (el) el.textContent = text;
  }

  function fillList(listId, items) {
    var ul = document.getElementById(listId);
    if (!ul || !items) return;
    ul.innerHTML = '';
    items.forEach(function (text) {
      var li = document.createElement('li');
      li.textContent = text;
      ul.appendChild(li);
    });
  }

  function fillListHtml(listId, itemsHtml) {
    var ul = document.getElementById(listId);
    if (!ul || !itemsHtml) return;
    ul.innerHTML = '';
    itemsHtml.forEach(function (html) {
      var li = document.createElement('li');
      li.innerHTML = html;
      ul.appendChild(li);
    });
  }

  function renderItinerary(olId, days) {
    var ol = document.getElementById(olId);
    if (!ol || !days) return;
    ol.innerHTML = '';
    days.forEach(function (d) {
      var li = document.createElement('li');
      li.className = 'itinerary__day';
      li.innerHTML =
        '<span class="itinerary__label"></span><div class="itinerary__body"><h3></h3><p></p></div>';
      li.querySelector('.itinerary__label').textContent = d.label;
      li.querySelector('h3').textContent = d.title;
      li.querySelector('p').textContent = d.body;
      ol.appendChild(li);
    });
  }

  function applyVariant(slug) {
    var v = VARIANTS[slug] || VARIANTS.signature;
    if (!v) return;

    document.title = v.pageTitle;
    var metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', v.metaDescription);
    var ogTitleEl = document.querySelector('meta[property="og:title"]');
    if (ogTitleEl) ogTitleEl.setAttribute('content', v.ogTitle);
    var ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute('content', v.ogDescription);

    setText('trip-hero-eyebrow', v.eyebrow);
    setText('trip-title', v.h1);
    setText('trip-lead', v.lead);

    var chips = document.getElementById('trip-hero-chips');
    if (chips && v.chips) {
      chips.innerHTML = '';
      v.chips.forEach(function (c) {
        var span = document.createElement('span');
        span.className = 'trip-chip';
        span.textContent = c;
        chips.appendChild(span);
      });
    }

    setText('trip-summary-duration', v.duration);
    setText('trip-summary-price', v.pricePp);
    setText('trip-summary-payment', v.payment);

    if (v.overview && v.overview.length >= 2) {
      setText('trip-overview-1', v.overview[0]);
      setText('trip-overview-2', v.overview[1]);
    }

    if (v.accommodation && v.accommodation.length >= 2) {
      setText('trip-acc-1', v.accommodation[0]);
      setText('trip-acc-2', v.accommodation[1]);
    }

    renderItinerary('trip-itinerary', v.itinerary);

    fillList('trip-included-list', v.included);
    fillList('trip-excluded-list', v.excluded);
    fillList('trip-activities-list', v.activities);

    fillListHtml('trip-pricing-bullets', v.pricingBullets);
    setText('trip-pricing-note', v.pricingNote);

    var tourInput = document.getElementById('th-booking-tour');
    if (tourInput) tourInput.value = v.tourFormValue;
  }

  function init() {
    var params = new URLSearchParams(window.location.search);
    var rawParam = params.get('tour');
    var normalized = rawParam
      ? String(rawParam)
          .trim()
          .toLowerCase()
          .replace(/_/g, '-')
      : '';
    var slug = SLUGS.indexOf(normalized) !== -1 ? normalized : 'signature';

    if (params.has('tour') && rawParam && SLUGS.indexOf(normalized) === -1) {
      params.set('tour', 'signature');
      window.history.replaceState(
        {},
        '',
        window.location.pathname + '?' + params.toString()
      );
      slug = 'signature';
    }

    applyVariant(slug);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
