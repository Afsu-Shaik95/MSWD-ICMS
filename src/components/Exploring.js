import { useEffect, useState } from "react";
import ExploringData from "./ExploringData";
import "./ExploringStyles.css";
import slide1 from "../assests/silide1.jpg"


const Exploring = () => {
  const images = [
    "https://images.unsplash.com/photo-1479813183133-f2e9b38ed6c4?auto=format&fit=crop&q=80&w=2623&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1621788893417-fb8b2e03d1e7?auto=format&fit=crop&q=80&w=2670&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://lp-cms-production.imgix.net/2019-06/384e10f39ebc6fab9b991467541ce8ed-dal-lake.jpg",
    // Add more image paths as needed
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000);

    return () => clearInterval(interval); // Clean up the interval on component unmount

  }, []);
  return (
    <>
    <div className="image-slider">
      <img
        src={images[currentImageIndex]}
        alt={`Slide ${currentImageIndex + 1}`}
      />
    </div>
    <div className="destination">
      <h1>Capturing the Essence of India's Diverse Culture</h1>
      <ExploringData
        className="first-des"
        heading="Andhra Pradesh"
        link="/andhrapradesh"
        text="Andhra Pradesh is a state located in the southeastern region of India. Known for its rich history, cultural heritage, and scenic beauty, it boasts a diverse landscape that includes the Eastern Ghats mountain range, lush coastal areas, and fertile plains along the Krishna and Godavari rivers. With its capital in Amaravati, Andhra Pradesh is one of India's rapidly developing states and has made significant strides in various sectors, such as agriculture, industry, and information technology. The state is also renowned for its delectable cuisine, which features a variety of spicy and flavorful dishes. Andhra Pradesh has a unique cultural identity with a blend of classical and folk art forms, including the famous Kuchipudi dance and Telugu literature."
        img1="https://images.unsplash.com/photo-1593511657608-e648e7d80352?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YW5kaHJhJTIwcHJhZGVzaHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
        img2="https://images.unsplash.com/photo-1588528940113-e908c691801e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YW5kaHJhJTIwcHJhZGVzaHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
      />
       <ExploringData
        className="first-des-reverse"
        heading="Arunachal Pradesh"
        link="/arunachalpradesh"
        text="Arunachal Pradesh, situated in the northeastern part of India, holds immense historical significance, primarily due to its strategic location and cultural diversity. The state's border regions have been pivotal in India's historical interactions with Tibet, Bhutan, and Southeast Asia. Arunachal Pradesh's rugged terrain has contributed to its isolation, preserving indigenous cultures and traditions among its various tribes, many of which have origins dating back centuries. The ancient pilgrimage site of Parashuram Kund and the medieval fortresses like Bhismaknagar offer glimpses into the state's historical past. The region also played a role in the centuries-old trade routes connecting India with Tibet and other neighboring regions. Arunachal Pradesh's historical heritage, intertwined with its cultural diversity, continues to be a subject of interest and exploration for historians and archaeologists, offering valuable insights into the broader history of the Indian subcontinent."
        img1="https://images.unsplash.com/photo-1598429725052-bbd6eca769d1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YXJ1bmFjaGFsJTIwcHJhZGVzaHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
        img2="https://images.unsplash.com/photo-1600947509785-29fb4e7d1362?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YXJ1bmFjaGFsJTIwcHJhZGVzaHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"/>
       
       <ExploringData
        className="first-des"
        heading="Assam"
        text="Assam, with its intricate history, has held a significant place in India's historical narrative. The region has been inhabited for centuries, with a rich tapestry of cultures and traditions. It was part of various powerful empires, including the Mauryan and Gupta dynasties. Assam played a pivotal role in the spread of Buddhism, as it was the birthplace of the prominent Buddhist scholar, Kumarajiva. The Ahom Kingdom, which ruled the region for six centuries, left a lasting legacy, with its distinctive governance, art, and architecture. Assam also witnessed the arrival of the British colonial powers, leading to social and political transformations. The state's historical significance is further enriched by its role as a center for trade and cultural exchange with neighboring countries, such as Bhutan, China, and Southeast Asia. This diverse historical background has helped shape Assam into a culturally rich and multifaceted region within India."
        img1="https://images.unsplash.com/photo-1602020277883-8441715993df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXNzYW18ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60"
        img2="https://images.unsplash.com/photo-1602020277972-99978250c8bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXNzYW18ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60"/>
    
    <ExploringData
        className="first-des-reverse"
        heading="Bihar"
        text="Bihar holds immense historical significance in the annals of India's past, primarily because of its role as a cradle of ancient Indian civilization. The region was the seat of several influential empires and dynasties, including the Mauryas and Guptas, who played a critical role in shaping the subcontinent's political and cultural landscape. Pataliputra, now modern-day Patna, served as the capital of these empires and was renowned as a thriving center of trade, governance, and learning. Bihar was the birthplace of Lord Mahavira, the 24th Tirthankara of Jainism, and was also closely associated with the life and teachings of Lord Buddha, as it was in Bihar that he attained enlightenment in Bodh Gaya. The state is dotted with numerous historical sites, monasteries, and ancient universities, underscoring its enduring significance in India's heritage and the evolution of its philosophical, religious, and cultural traditions."
        img1="https://images.unsplash.com/photo-1602308951223-d9cb63de8766?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YmloYXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60"
        img2="https://images.unsplash.com/photo-1613502046140-a326183a0bae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fGJpaGFyJTIwZmVzdGl2YWx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60"/>
    </div>
    </>
    
  );
};

export default Exploring;