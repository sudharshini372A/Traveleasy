import React from 'react';
import { Helmet } from 'react-helmet';
import { useParams } from 'react-router-dom';

// Define meta data for each district
const districtData = {
    ariyalur: {
        title: "Ariyalur-TravelEasy | The Cement City of Tamil Nadu.",
        description: "Ariyalur-TravelEasy is renowned for its rich history, cultural heritage, ancient temples, and limestone industries, it a unique and historically significant place.",
        keywords: "ariyalur, tamil nadu, tourism, traveleasy, famous places in ariyalur, best places in ariyalur, tourist place in ariyalur",
        url: "https://traveleasy.co.in/destination/ariyalur",
        image: "https://traveleasystorage.s3.eu-north-1.amazonaws.com/Districts/gangaikonda-cholapuram-1653462626_d1ad072dfb78c46813de.webp"
    },
    chengalpattu: {
        title: "Chengalpattu-TravelEasy | The Gateway to Chennai City.",
        description: "Chengalpattu-TravelEasy offers a journey through spirituality, and natural beauty, featuring ancient temples, historic sites, and scenic landscapes to explore.",
        keywords: "chengalpattu, gateway to chennai, tamil nadu, tourism, traveleasy, famous places in chengalpattu, best places in chengalpattu, tourist place in chengalpattu",
        url: "https://traveleasy.co.in/destination/chengalpattu",
        image: "https://traveleasystorage.s3.eu-north-1.amazonaws.com/Districts/Chengalpattu.jpg"
    },
    chennai: {
        title: "Chennai-TravelEasy | Explore Freely in the Capital City.",
        description: "Chennai-TravelEasy, Detroit of India, boasts a booming automobile industry, housing major manufacturers and contributing significantly to India's economy.",
        keywords: "chennai, capital city, tamil nadu, tourism, traveleasy, famous places in chennai, best places in chennai, tourist place in chennai",
        url: "https://traveleasy.co.in/destination/chennai",
        image: "https://traveleasystorage.s3.eu-north-1.amazonaws.com/Districts/1-marina-beach-city-hero.jpeg"
    },
    coimbatore: {
        title: "Coimbatore-TravelEasy | The Manchester of South India.",
        description: "Coimbatore-TravelEasy, the “Manchester of South India,” is a vibrant city known for its textile industry, smooth connectivity, rich culture, and growth.",
        keywords: "coimbatore, tamil nadu, tourism, traveleasy, manchester of south india, famous places in coimbatore, best places in coimbatore, tourist place in coimbatore",
        url: "https://traveleasy.co.in/destination/coimbatore",
        image: "https://traveleasystorage.s3.eu-north-1.amazonaws.com/Districts/CBE.webp"
    },
    cuddalore: {
        title: "Cuddalore-TravelEasy | Explore the Famous Spice City.",
        description: "Cuddalore-TravelEasy, a coastal city in southeastern Tamil Nadu, is known for its beaches, temples, and rich history, offering a seamless travel experience.",
        keywords: "cuddalore, tamil nadu, tourism, traveleasy, famous places in cuddalore, best places in cuddalore, tourist place in cuddalore",
        url: "https://traveleasy.co.in/destination/cuddalore",
        image: "https://traveleasystorage.s3.eu-north-1.amazonaws.com/Districts/pichavaram+baoting.jpg"
    },
    dharmapuri: {
        title: "Dharmapuri-TravelEasy | Explore the Land of Tamarind.",
        description: "Dharmapuri-TravelEasy, located in northwestern Tamil Nadu, is known for its rich history, scenic landscapes, and famous attractions like Hogenakkal Falls.",
        keywords: "dharmapuri, land of tamarind, tamil nadu, tourism, traveleasy, famous places in dharmapuri, best places in dharmapuri, tourist place in dharmapuri",
        url: "https://traveleasy.co.in/destination/dharmapuri",
        image: "https://traveleasystorage.s3.eu-north-1.amazonaws.com/Districts/Dharmapuri.webp"
    },
    dindigal: {
        title: "Dindigal-TravelEasy | Explore Historic Lock City.",
        description: "Dindigul-TravelEasy, known as the 'Lock City,' is famous for its high-quality locks, historical significance, scenic beauty, and vibrant cultural heritage.",
        keywords: "dindigal, lock city, tamil nadu, tourism, traveleasy, famous places in dindigal, best places in dindigal, tourist place in dindigal, kodaikanal, kodaikanal places, kodaikanal spots, hill station in tamilnadu",
        url: "https://traveleasy.co.in/destination/dindigal",
        image: "https://traveleasystorage.s3.eu-north-1.amazonaws.com/Districts/dindupalani.jpg"
    },
    erode: {
        title: "Erode-TravelEasy | Textile City | Handloom City.",
        description: "Erode-TravelEasy, known as the 'Textile City,' is famous for its thriving textile and handloom industries, rich culture, and strong commercial significance.",
        keywords: "erode, textile city, handloom city, tamil nadu, tourism, traveleasy, famous places in erode, best places in erode, tourist place in erode",
        url: "https://traveleasy.co.in/destination/erode",
        image: "https://traveleasystorage.s3.eu-north-1.amazonaws.com/Districts/Erode.webp"
    },
    kallakurichi: {
        title: "Kallakurichi-TravelEasy | Explore The Sugar Town.",
        description: "Kallakurichi-TravelEasy, popularly known as the 'Sugar Town,' is renowned for its thriving sugarcane industry, rich agriculture, and cultural heritage.",
        keywords: "kallakurichi, sugar town, tamil nadu, tourism, traveleasy, famous places in kallakurichi, best places in kallakurichi, tourist place in kallakurichi",
        url: "https://traveleasy.co.in/destination/kallakurichi",
        image: "https://traveleasystorage.s3.eu-north-1.amazonaws.com/Districts/Kallakurichi.webp"
    },
    kanchipuram: {
        title: "Kanchipuram-TravelEasy | City of a Thousand Temples.",
        description: "Kanchipuram-TravelEasy, one of India's most ancient cities, is renowned for its rich history, magnificent temples, and world-famous silk saree weaving tradition.",
        keywords: "kanchipuram, famous for temples, thousand temples, tamil nadu, tourism, traveleasy, famous places in kanchipuram, best places in kanchipuram, tourist place in kanchipuram",
        url: "https://traveleasy.co.in/destination/kanchipuram",
        image: "https://traveleasystorage.s3.eu-north-1.amazonaws.com/Districts/kancheepuram-1656094320_3f77ec88eada40ee1f36.webp"
    },
    kanniyakumari: {
        title: "Kanniyakumari-TravelEasy | Land's End | Cape Comorin.",
        description: "Kanniyakumari-TravelEasy, the southernmost point of mainland India, is famous for its stunning sunrise, serene beaches, and rich cultural and historical significance.",
        keywords: "kanniyakumari, land's End, cape comorin, tamil nadu, tourism, traveleasy, famous places in chengalpattu, best places in kanniyakumari, tourist place in kanniyakumari",
        url: "https://traveleasy.co.in/destination/kanniyakumari",
        image: "https://traveleasystorage.s3.eu-north-1.amazonaws.com/Districts/kanyakumari-1656091428_cf69d9a9dbec82018046+1.webp"
    },
    karur: {
        title: "Karur-TravelEasy | The Textile Town | The Textile Hub.",
        description: "Karur-TravelEasy, a city in Tamil Nadu, is popularly known as the 'Textile Town' for its thriving textile, home furnishing, and bus body-building industries.",
        keywords: "karur, capital city, tamil nadu, tourism, traveleasy, famous places in karur, best places in karur, tourist place in karur",
        url: "https://traveleasy.co.in/destination/karur",
        image: "https://traveleasystorage.s3.eu-north-1.amazonaws.com/Districts/KARUR.jpg"
    },
    krishnagiri: {
        title: "Krishnagiri-TravelEasy | Explore Land of Mangoes.",
        description: "Krishnagiri-TravelEasy, known as the 'Land of Mangoes,' is famous for its abundant mango cultivation, scenic hills, rich history, and vibrant agricultural economy.",
        keywords: "krishnagiri, tamil nadu, tourism, traveleasy, famous places in krishnagiri, best places in krishnagiri, tourist place in krishnagiri",
        url: "https://traveleasy.co.in/destination/krishnagiri",
        image: "https://traveleasystorage.s3.eu-north-1.amazonaws.com/Districts/KRISHNAGIRI.jpg"
    },
    madurai: {
        title: "Madurai-TravelEasy | Explore The Temple City.",
        description: "Madurai-TravelEasy, famous for the historic Meenakshi Temple, is a city rich in cultural heritage, ancient architecture, and a vibrant traditional lifestyle.",
        keywords: "madurai, temple city, tamil nadu, tourism, traveleasy, famous places in madurai, best places in madurai, tourist place in madurai",
        url: "https://traveleasy.co.in/destination/madurai",
        image: "https://traveleasystorage.s3.eu-north-1.amazonaws.com/Districts/madurai-1653924923_1dd348c18c11422ee10f.webp"
    },
    mayiladuthurai: {
        title: "Mayiladuthurai-TravelEasy | Explore The Temple Town.",
        description: "Mayiladuthurai-TravelEasy known as the Temple Town, is a historic city in Tamil Nadu renowned for its ancient temples, cultural heritage, proximity Kaveri river.",
        keywords: "mayiladuthurai, temple town, tamil nadu, tourism, traveleasy, famous places in mayiladuthurai, best places in mayiladuthurai, tourist place in mayiladuthurai, mayuram, kaveri river, famous temples, cultural heritage, pilgrimage",
        url: "https://traveleasy.co.in/destination/mayiladuthurai",
        image: "https://traveleasystorage.s3.eu-north-1.amazonaws.com/Districts/mayiladuthurai.webp"
    },
    nagapattinam: {
        title: "Nagapattinam-TravelEasy | Rice Bowl of Tamil Nadu.",
        description: "Nagapattinam-TravelEasy is popularly known as the 'Rice Bowl of Tamil Nadu' because of its fertile lands and extensive paddy fields with rich culture.",
        keywords: "nagapattinam, rice bowl of tamil nadu, tamil nadu, tourism, traveleasy, famous places in nagapattinam, best places in nagapattinam, tourist place in nagapattinam",
        url: "https://traveleasy.co.in/destination/nagapattinam",
        image: "https://traveleasystorage.s3.eu-north-1.amazonaws.com/Districts/1-marina-beach-city-hero.jpeg"
    },
    namakkal: {
        title: "Namakkal-TravelEasy | The Egg City of India.",
        description: "Namakkal-TravelEasy is popularly known as the 'Egg City of India' due to its significant contribution to the poultry industry, especially egg production",
        keywords: "namakkal, Egg City of India, tamil nadu, tourism, traveleasy, famous places in namakkal, best places in namakkal, tourist place in namakkal",
        url: "https://traveleasy.co.in/destination/namakkal",
        image: "https://traveleasystorage.s3.eu-north-1.amazonaws.com/Districts/Namakkal.jpg"
    },
    nilgiris: {
        title: "Nilgiris-TravelEasy | Discover The Blue Mountains.",
        description: "Nilgiris-TravelEasy, known as the 'Blue Mountains,' gets its name from the bluish hue of its scenic hills, offering breathtaking landscapes and a serene retreat.",
        keywords: "nilgiris, Blue Mountains, tamil nadu, tourism, traveleasy, famous places in nilgiris, best places in nilgiris, tourist place in nilgiris, ooty, ooty best places to visit, places in ooty",
        url: "https://traveleasy.co.in/destination/nilgiris",
        image: "https://traveleasystorage.s3.eu-north-1.amazonaws.com/Districts/Nilgiri.jpg"
    },
    perambalur: {
        title: "Perambalur-TravelEasy | Explore The Limestone District.",
        description: "Perambalur-TravelEasy, known as the 'Limestone District,' is famous for its abundant limestone deposits and historical significance.",
        keywords: "perambalur, Limestone District, tamil nadu, tourism, traveleasy, famous places in perambalur, best places in perambalur, tourist place in perambalur",
        url: "https://traveleasy.co.in/destination/perambalur",
        image: "https://traveleasystorage.s3.eu-north-1.amazonaws.com/Districts/Perambalur.jpg"
    },
    pudukkottai: {
        title: "Pudukkottai-TravelEasy | Explore Historical Places.",
        description: "Pudukkottai-TravelEasy, a culturally rich town is known for its ancient temples and prehistoric sites like Sittannavasal Cave and Thirumayam Fort.",
        keywords: "pudukkottai, tamil nadu, tourism, traveleasy, land of temples, heritage town, sittannavasal cave, thirumayam fort, famous places in pudukkottai, best places in pudukkottai, tourist place in pudukkottai",
        url: "https://traveleasy.co.in/destination/pudukkottai",
        image: "https://traveleasystorage.s3.eu-north-1.amazonaws.com/Districts/pudhugai.jpg"
    },
    ramanathapuram: {
        title: "Ramanathapuram-TravelEasy | Ramnad the Heritage.",
        description: "Ramanathapuram-TravelEasy, popularly known as 'Ramnad,' is a shortened version of its name and is famous for its rich history and cultural heritage.",
        keywords: "ramanathapuram, Ramnad, Rameswaram, tamil nadu, tourism, traveleasy, famous places in ramanathapuram, best places in ramanathapuram, tourist place in ramanathapuram",
        url: "https://traveleasy.co.in/destination/ramanathapuram",
        image: "https://traveleasystorage.s3.eu-north-1.amazonaws.com/Districts/Ramanathapuram.jpg"
    },
    ranipet: {
        title: "Ranipet-TravelEasy | Explore the Industrial Hub.",
        description: "Ranipet-TravelEasy is particularly renowned for its leather industries, which contribute significantly to both the local economy and exports.",
        keywords: "ranipet, Industrial Hub of Tamil Nadu, tamil nadu, tourism, traveleasy, famous places in ranipet, best places in ranipet, tourist place in ranipet",
        url: "https://traveleasy.co.in/destination/ranipet",
        image: "https://traveleasystorage.s3.eu-north-1.amazonaws.com/Districts/Ranipet.jpg"
    },
    salem: {
        title: "Salem-TravelEasy | Explore The Steel City of Tamil Nadu.",
        description: "Salem-TravelEasy is known for its thriving steel industry and the presence of Salem Steel Plant, a unit of SAIL, contributing to its industrial growth.",
        keywords: "salem, tamil nadu, tourism, steel city of tamilnadu, mango city, traveleasy, famous places in salem, best places in salem, tourist place in salem",
        url: "https://traveleasy.co.in/destination/salem",
        image: "https://traveleasystorage.s3.eu-north-1.amazonaws.com/Districts/salem.webp"
    },
    sivagangai: {
        title: "Sivagangai-TravelEasy | Discover the Sivagangai places.",
        description: "Sivagangai-TravelEasy is known for its historical landmarks, ancient temples, and rich cultural heritage, making it a must-visit destination.",
        keywords: "sivagangai, Sivaganga Palace, tamil nadu, tourism, traveleasy, famous places in sivagangai, best places in sivagangai, tourist place in sivagangai",
        url: "https://traveleasy.co.in/destination/sivagangai",
        image: "https://traveleasystorage.s3.eu-north-1.amazonaws.com/Districts/Sivagangai.jpg"
    },
    tenkasi: {
        title: "Tenkasi-TravelEasy | Explore the Kashi of South.",
        description: "Tenkasi, popularly known as the Kashi of South, is famous for its rich spiritual heritage, ancient temples, proximity to Courtallam waterfalls.",
        keywords: "tenkasi, Kashi of South, tamil nadu, tourism, traveleasy, famous places in tenkasi, best places in tenkasi, tourist place in tenkasi",
        url: "https://traveleasy.co.in/destination/tenkasi",
        image: "https://traveleasystorage.s3.eu-north-1.amazonaws.com/Districts/Tenkasi.jpg"
    },
    thanjavur: {
        title: "Thanjavur-TravelEasy | The Rice Bowl of Tamil Nadu.",
        description: "Thanjavur-TravelEasy is renowned for its historical significance, especially as the cultural and architectural hub of the great Chola dynasty.",
        keywords: "thanjavur, Rice Bowl of Tamil Nadu, tamil nadu, tourism, traveleasy, famous places in thanjavur, best places in thanjavur, tourist place in thanjavur",
        url: "https://traveleasy.co.in/destination/thanjavur",
        image: "https://traveleasystorage.s3.eu-north-1.amazonaws.com/Districts/Thanjavur.jpg"
    },
    theni: {
        title: "Theni-TravelEasy | The Gateway to the Western Ghats.",
        description: "Theni-TravelEasy is a town in the southern part of Tamil Nadu, India, and it is popularly known as the 'Gateway to the Western Ghats'.",
        keywords: "theni, gateway to the western ghats, tamil nadu, tourism, traveleasy, famous places in theni, best places in theni, tourist place in theni",
        url: "https://traveleasy.co.in/destination/theni",
        image: "https://traveleasystorage.s3.eu-north-1.amazonaws.com/Districts/Theni.jpg"
    },
    thirunelveli: {
        title: "Thirunelveli-TravelEasy | The Oxford of South India.",
        description: "Tirunelveli-TravelEasy is popularly known as the 'Oxford of South India' due to its historical significance in education.",
        keywords: "thirunelveli, Oxford of South India, City of Temples, tamil nadu, tourism, traveleasy, famous places in thirunelveli, best places in thirunelveli, tourist place in thirunelveli",
        url: "https://traveleasy.co.in/destination/thirunelveli",
        image: "https://traveleasystorage.s3.eu-north-1.amazonaws.com/Districts/Thirunelveli.jpg"
    },
    thirupathur: {
        title: "Thirupathur-TravelEasy | Explore the Land of Temples.",
        description: "Thirupathur-TravelEasy is popularly known as 'Thirupathur, the Land of Temples' due to its rich cultural and the religious heritage.",
        keywords: "thirupathur, Land of Temples, tamil nadu, tourism, traveleasy, famous places in thirupathur, best places in thirupathur, tourist place in thirupathur",
        url: "https://traveleasy.co.in/destination/thirupathur",
        image: "https://traveleasystorage.s3.eu-north-1.amazonaws.com/Districts/Tirupattur.jpg"
    },
    thiruppur: {
        title: "Thiruppur-TravelEasy | The Knitwear Capital of India.",
        description: "Tiruppur-TravelEasy is renowned for its vast textile industry, especially for its leading production of high-quality knitted garments.",
        keywords: "thiruppur, Knitwear Capital of India, tamil nadu, tourism, traveleasy, famous places in thiruppur, best places in thiruppur, tourist place in thiruppur",
        url: "https://traveleasy.co.in/destination/thiruppur",
        image: "https://traveleasystorage.s3.eu-north-1.amazonaws.com/fulldistrictimage/thirupur.webp"
    },
    thiruvallur: {
        title: "Thiruvallur-TravelEasy | Explore The Land of Temples.",
        description: "Thiruvallur-TravelEasy due to its rich historical and cultural heritage, with many ancient temples scattered throughout the region.",
        keywords: "thiruvallur, The Land of Temples, tamil nadu, tourism, traveleasy, famous places in thiruvallur, best places in thiruvallur, tourist place in thiruvallur",
        url: "https://traveleasy.co.in/destination/thiruvallur",
        image: "https://traveleasystorage.s3.eu-north-1.amazonaws.com/Districts/Thiruvallur.webp"
    },
    thiruvannamalai: {
        title: "Thiruvannamalai-TravelEasy | The Spiritual Capital.",
        description: "Thiruvannamalai-TravelEasy is popularly known as the 'Spiritual Capital' of Tamil Nadu and is a significant pilgrimage destination.",
        keywords: "thiruvannamalai, Spiritual Capital, tamil nadu, tourism, traveleasy, famous places in thiruvannamalai, best places in thiruvannamalai, tourist place in thiruvannamalai",
        url: "https://traveleasy.co.in/destination/thiruvannamalai",
        image: "https://traveleasystorage.s3.eu-north-1.amazonaws.com/Districts/Tiruvannamalai.jpg"
    },
    thiruvarur: {
        title: "Thiruvarur-TravelEasy | Explore the historic Temple Town.",
        description: "Thiruvarur-TravelEasy is a renowned center for religious and cultural activities, famous for its ancient temples and rich heritage.",
        keywords: "thiruvarur, Temple Town, tamil nadu, tourism, traveleasy, famous places in thiruvarur, best places in thiruvarur, tourist place in thiruvarur",
        url: "https://traveleasy.co.in/destination/thiruvarur",
        image: "https://traveleasystorage.s3.eu-north-1.amazonaws.com/Districts/Thiruvarur.jpg"
    },
    trichy: {
        title: "Trichy-TravelEasy | Explore Rockfort City.",
        description: "Trichy-TravelEasy is popularly known as the 'Rockfort City' for its iconic Rockfort Temple, perched atop ancient rock formation.",
        keywords: "trichy, Rockfort City, tamil nadu, tourism, traveleasy, famous places in trichy, best places in trichy, tourist place in trichy",
        url: "https://traveleasy.co.in/destination/trichy",
        image: "https://traveleasystorage.s3.eu-north-1.amazonaws.com/Districts/Tiruchirappalli.jpeg"
    },
    tuticorin: {
        title: "Tuticorin-TravelEasy | Discover the Beauty of Pearl City.",
        description: "Tuticorin-TravelEasy | Named for its rich history in pearl fishing, the city has long been a renowned center for maritime trade.",
        keywords: "tuticorin, Pearl City, tamil nadu, tourism, traveleasy, famous places in tuticorin, best places in tuticorin, tourist place in tuticorin",
        url: "https://traveleasy.co.in/destination/tuticorin",
        image: "https://traveleasystorage.s3.eu-north-1.amazonaws.com/Districts/Tuticorin.jpg"
    },
    vellore: {
        title: "Vellore-TravelEasy | Explore the Historic Fort City.",
        description: "Vellore-TravelEasy is known as the 'Fort City' for its historic Vellore Fort in Tamil Nadu, one of the most significant forts.",
        keywords: "vellore, Fort City, tamil nadu, tourism, traveleasy, famous places in vellore, best places in vellore, tourist place in vellore",
        url: "https://traveleasy.co.in/destination/vellore",
        image: "https://traveleasystorage.s3.eu-north-1.amazonaws.com/Districts/vellore.webp"
    },
    vilupuram: {
        title: "Vilupuram-TravelEasy | Gateway to South Tamil Nadu.",
        description: "Vilupuram-TravelEasy reflects its strategic location, as it serves as a key entry point to the southern regions of Tamil Nadu.",
        keywords: "vilupuram, Gateway to South Tamil Nadu, tamil nadu, tourism, traveleasy, famous places in vilupuram, best places in vilupuram, tourist place in vilupuram",
        url: "https://traveleasy.co.in/destination/vilupuram",
        image: "https://traveleasystorage.s3.eu-north-1.amazonaws.com/Districts/viluppuram.jpg"
    },
    virudhunagar: {
        title: "Virudhunagar-TravelEasy | City of Pilgrim | City of Trade",
        description: "Virudhunagar-TravelEasy is often called the 'Birth-place of the Freedom Struggle' for its significant role in India's independence movement on.",
        keywords: "virudhunagar, City of Pilgrim, City of Trade, tamil nadu, tourism, traveleasy, famous places in virudhunagar, best places in virudhunagar, tourist place in virudhunagar",
        url: "https://traveleasy.co.in/destination/virudhunagar",
        image: "https://traveleasystorage.s3.eu-north-1.amazonaws.com/Districts/virudhunagar.webp"
    },
    pondicherry: {
        title: "Pondicherry-TravelEasy | The French Riviera of the East.",
        description: "Pondicherry-TravelEasy is known for its colonial French architecture, serene beaches, lasting French influence in its culture, language and lifestyle.",
        keywords: "pondicherry, The French Riviera of the East, tamil nadu, tourism, traveleasy, famous places in pondicherry, best places in pondicherry, tourist place in pondicherry, puducherry, french colony, beaches, sri aurobindo ashram",
        url: "https://traveleasy.co.in/destination/pondicherry",
        image: "https://traveleasystorage.s3.eu-north-1.amazonaws.com/Districts/Pondy.jpg"
    }
};

const DistrictPage = () => {
    const { name } = useParams(); 
    console.log(name);
    
    const districtName = name || 'salem';
    const districtKey = typeof districtName === 'string' ? districtName.toLowerCase() : '';
    const meta = districtData[districtKey] 
   
    return (
        <>
            <Helmet>
                <title>{meta.title}</title>
                <meta name='title' content={meta.title} />
                <meta name="description" content={meta.description} />
                <meta name="keywords" content={meta.keywords} />
                <meta property="og:url" content={meta.url} />
                <meta property="og:title" content={meta.title} />
                <meta property="og:description" content={meta.description} />
                <meta property="og:site_name" content="TravelEasy" />
                <meta property="og:image" content={meta.image} />
                <meta property="og:type" content="website" />
                <link rel="canonical" href={meta.url} />
            </Helmet>
        </>
    );
};

export default DistrictPage;
