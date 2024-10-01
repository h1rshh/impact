'use client';
import React, { useState } from 'react';

const Speaker = () => {
  // Array of speaker details
  const speakers = [
    {
      name: 'Murari Bapu',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Morari_Bapu.png/1200px-Morari_Bapu.png',
      description: '(Murari Bapu, a revered spiritual leader and storyteller from India, is known for his captivating discourses on the Ramayana. With a deep understanding of Hindu philosophy, he inspires countless devotees through his teachings on love, compassion, and devotion. Born in 1960 in the town of Tulsipur, Uttar Pradesh, he began his journey as a storyteller at a young age, quickly gaining popularity for his engaging style and profound insights. His teachings emphasize the importance of selfless service and moral values, making him a guiding light for many. Murari Bapus contributions to spirituality continue to resonate with audiences worldwide, fostering a sense of peace and unity.)',
    },
    {
      name: 'Sri Sri Ravi Shankar',
      image: 'https://educationpost.in/_next/image?url=https%3A%2F%2Fapi.educationpost.in%2Fs3-images%2F1711707212633-Sri-Sri-Gurudev-Ji-DP-768x467.jpg&w=3840&q=75',
      description: 'Sri Sri Ravi Shankar is a prominent Indian spiritual leader, humanitarian, and founder of the Art of Living Foundation, established in 1981. Born on May 13, 1956, in Papanasam, Tamil Nadu, he is widely recognized for his teachings on yoga, meditation, and stress relief. Through his initiatives, he promotes peace and well-being, emphasizing the importance of self-awareness and compassion. Sri Sri has traveled extensively, conducting workshops and seminars globally, fostering interfaith dialogue and community service. His efforts in disaster relief and rural development have earned him numerous accolades. He remains a significant influence in the field of spirituality and holistic wellness.',
    },
    {
      name: 'Narendra Modi',
      image: 'https://c4.wallpaperflare.com/wallpaper/915/675/763/narendra-modi-prime-minister-presentation-wallpaper-preview.jpg',
      description: 'Narendra Modi, born on September 17, 1950, is the 14th and current Prime Minister of India, having held office since May 2014. A member of the Bharatiya Janata Party (BJP) and the Rashtriya Swayamsevak Sangh (RSS), he previously served as the Chief Minister of Gujarat from 2001 to 2014. Modi is known for his ambitious economic reforms, including the Goods and Services Tax (GST) and the Make in India initiative, aimed at boosting manufacturing and job creation. His government has also focused on digital transformation, infrastructure development, and initiatives like Swachh Bharat (Clean India). Modi is a prominent global figure, advocating for India interests on the international stage.',
    },
    {
      name: 'SadhGuru',
      image: 'https://i.ytimg.com/vi/IMLHxsUKtT8/maxresdefault.jpg',
      description: 'Sadhguru, born Jaggi Vasudev on September 3, 1967, is an Indian yogi, mystic, and author renowned for his teachings on spirituality and well-being. He founded the Isha Foundation in 1992, a non-profit organization offering yoga programs worldwide and various social and environmental initiatives, including the Rally for Rivers campaign to rejuvenate Indias rivers. Sadhguru emphasizes inner transformation through self-awareness and meditation, often integrating ancient wisdom with modern science. He has authored several books, including "Inner Engineering" and "Mystics Musings," and is known for his engaging public talks, addressing global issues, and inspiring millions to explore spirituality and personal growth.',
    },
    {
      name: 'Jaya Kishori',
      image: 'https://blackhattalent.com/wp-content/uploads/2024/01/Jaya-Kishori.jpg',
      description: 'Jaya Kishori, born on July 13, 1996, is a prominent Indian devotional singer, storyteller, and motivational speaker, celebrated for her enchanting bhajans and kirtans. Hailing from Rajasthan, she gained immense popularity at a young age, captivating audiences with her melodious voice and spiritual charisma. Jaya Kishori is known for her unique storytelling style, particularly in the recitation of the Ramayana and Bhagavad Gita, which inspires her followers to connect deeply with their faith. Beyond music, she actively engages in philanthropic work, promoting education and social welfare initiatives. Her positive energy and devotion continue to resonate with millions worldwide.',
    },
  ];

  // State to keep track of the selected speaker
  const [selectedSpeaker, setSelectedSpeaker] = useState(speakers[0]);

  // Function to handle speaker selection
  const handleSpeakerClick = (speaker) => {
    setSelectedSpeaker(speaker);
  };

  return (
    <div className="bg-white p-6 mx-4 my-10 rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold text-center mb-6">Our Speakers</h2>

      {/* Speaker List (Horizontal at the top) */}
      <div className="flex justify-center space-x-4 mb-6">
        {speakers.map((speaker, index) => (
          <button
            key={index}
            onClick={() => handleSpeakerClick(speaker)}
            className={`p-4 border border-black rounded-lg transition-transform duration-300 ease-in-out hover:bg-black hover:text-white ${
              selectedSpeaker.name === speaker.name
                ? 'bg-black text-white font-bold'
                : 'bg-white text-black'
            }`}
          >
            {speaker.name}
          </button>
        ))}
      </div>

      {/* Speaker Details */}
      <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6 transition-opacity duration-500 ease-in-out">
        <img
          src={selectedSpeaker.image}
          alt={selectedSpeaker.name}
          className="w-[30%] h-auto object-cover rounded-lg shadow-lg transition-transform duration-500 ease-in-out transform hover:scale-105"
        />
        <div className="text-center md:text-left">
          <h3 className="text-2xl font-semibold">{selectedSpeaker.name}</h3>
          <p className="mt-2 text-gray-600">{selectedSpeaker.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Speaker;
