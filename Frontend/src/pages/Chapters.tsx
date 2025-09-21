import React, { useState } from 'react';
import { Book, ChevronRight, Users } from 'lucide-react';

const Chapters: React.FC = () => {
  const [selectedChapter, setSelectedChapter] = useState<number | null>(null);

  const chapters = [
    {
      number: 1,
      title: "Arjuna Vishada Yoga",
      subtitle: "The Dejection of Arjuna",
      summary: "Arjuna's moral dilemma on seeing his relatives and teachers in the opposing army, leading to his refusal to fight.",
      keyTopics: ["Moral conflict", "Duty vs. emotion", "Setting the stage"],
      verses: 47
    },
    {
      number: 2,
      title: "Sankhya Yoga",
      subtitle: "Transcendental Knowledge",
      summary: "Krishna begins his teachings about the eternal soul, the temporary nature of the body, and the importance of duty.",
      keyTopics: ["Soul's immortality", "Karma Yoga", "Equanimity", "Right action"],
      verses: 72
    },
    {
      number: 3,
      title: "Karma Yoga",
      subtitle: "The Path of Action",
      summary: "The importance of performing one's duty without attachment to results, and the concept of yajna (sacrifice).",
      keyTopics: ["Selfless action", "Duty", "Sacrifice", "Freedom from bondage"],
      verses: 43
    },
    {
      number: 4,
      title: "Jnana Yoga",
      subtitle: "Transcendental Knowledge",
      summary: "Krishna reveals his divine nature, the concept of Avatar, and the relationship between knowledge and action.",
      keyTopics: ["Divine incarnation", "Knowledge", "Action in inaction", "Spiritual wisdom"],
      verses: 42
    },
    {
      number: 5,
      title: "Karma Sanyasa Yoga",
      subtitle: "Action and Renunciation",
      summary: "The relationship between renunciation and action, showing that true renunciation comes through proper action.",
      keyTopics: ["Renunciation", "Action vs. inaction", "Inner peace", "Brahman consciousness"],
      verses: 29
    },
    {
      number: 6,
      title: "Dhyana Yoga",
      subtitle: "The Path of Meditation",
      summary: "Detailed instructions on meditation, self-control, and achieving union with the Divine.",
      keyTopics: ["Meditation", "Self-control", "Mind control", "Yoga practice"],
      verses: 47
    },
    {
      number: 7,
      title: "Jnana Vijnana Yoga",
      subtitle: "Knowledge and Realization",
      summary: "Krishna explains his material and spiritual energies, and how everything emanates from him.",
      keyTopics: ["Divine nature", "Material vs. spiritual", "Devotion", "Divine energies"],
      verses: 30
    },
    {
      number: 8,
      title: "Akshara Brahma Yoga",
      subtitle: "The Imperishable Absolute",
      summary: "Discussion of Brahman, Adhyatma, Karma, and the importance of remembering God at the time of death.",
      keyTopics: ["Brahman", "Death", "Remembrance", "Supreme destination"],
      verses: 28
    },
    {
      number: 9,
      title: "Raja Vidya Yoga",
      subtitle: "The Royal Knowledge",
      summary: "The most confidential knowledge about devotion, Krishna's divine nature, and how he pervades everything.",
      keyTopics: ["Divine pervasion", "Devotion", "Faith", "Confidential knowledge"],
      verses: 34
    },
    {
      number: 10,
      title: "Vibhuti Yoga",
      subtitle: "Divine Glories",
      summary: "Krishna describes his various manifestations and opulences in the material world.",
      keyTopics: ["Divine manifestations", "God's presence", "Opulences", "Recognition of divinity"],
      verses: 42
    },
    {
      number: 11,
      title: "Vishvarupa Darshana Yoga",
      subtitle: "The Universal Form",
      summary: "Arjuna witnesses Krishna's cosmic form, overwhelming and magnificent, revealing the universal nature of God.",
      keyTopics: ["Universal form", "Divine vision", "Cosmic reality", "Devotion"],
      verses: 55
    },
    {
      number: 12,
      title: "Bhakti Yoga",
      subtitle: "The Path of Devotion",
      summary: "Krishna explains the superiority of devotional service and the qualities of his devotees.",
      keyTopics: ["Devotion", "Bhakti", "Divine qualities", "Devotee's characteristics"],
      verses: 20
    },
    {
      number: 13,
      title: "Ksherta Kshtetrajna Vibhaga Yoga",
      subtitle: "The Field and Its Knower",
      summary: "Distinction between the body (field) and the soul (knower), and the Supreme Soul who knows all fields.",
      keyTopics: ["Body vs. soul", "Knowledge", "Field of activity", "Supreme consciousness"],
      verses: 35
    },
    {
      number: 14,
      title: "Gunatraya Vibhaga Yoga",
      subtitle: "The Three Modes of Nature",
      summary: "Detailed explanation of the three modes of material nature: goodness, passion, and ignorance.",
      keyTopics: ["Three gunas", "Modes of nature", "Transcendence", "Material bondage"],
      verses: 27
    },
    {
      number: 15,
      title: "Purushottama Yoga",
      subtitle: "The Supreme Person",
      summary: "The cosmic tree metaphor, the nature of the Supreme Person, and the path to reach Him.",
      keyTopics: ["Cosmic tree", "Supreme Person", "Material world", "Liberation"],
      verses: 20
    },
    {
      number: 16,
      title: "Daivasura Sampad Vibhaga Yoga",
      subtitle: "Divine and Demonic Natures",
      summary: "Characteristics of divine and demonic natures, and their respective destinies.",
      keyTopics: ["Divine qualities", "Demonic qualities", "Character development", "Spiritual progress"],
      verses: 24
    },
    {
      number: 17,
      title: "Shraddhatraya Vibhaga Yoga",
      subtitle: "The Threefold Faith",
      summary: "Three types of faith, food, sacrifice, austerity, and charity according to the three modes.",
      keyTopics: ["Faith types", "Austerity", "Charity", "Sacred practices"],
      verses: 28
    },
    {
      number: 18,
      title: "Moksha Sanyasa Yoga",
      subtitle: "Liberation Through Renunciation",
      summary: "The conclusion of Krishna's teachings, covering renunciation, liberation, and complete surrender.",
      keyTopics: ["Renunciation", "Liberation", "Surrender", "Final teaching"],
      verses: 78
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 font-sanskrit">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-orange-500 to-amber-600 rounded-full mb-6 shadow-lg">
            <Book className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-orange-800 mb-4">18 Chapters of the Gita</h1>
          <p className="text-lg text-orange-600">
            Explore the profound teachings organized into 18 chapters, each focusing on different aspects of spiritual wisdom
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {chapters.map((chapter) => (
            <div
              key={chapter.number}
              className={`bg-white rounded-2xl shadow-lg border border-orange-100 p-6 transition-all duration-300 hover:shadow-xl cursor-pointer ${
                selectedChapter === chapter.number ? 'ring-2 ring-orange-500 shadow-xl' : ''
              }`}
              onClick={() => setSelectedChapter(selectedChapter === chapter.number ? null : chapter.number)}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-amber-600 rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-white font-bold">{chapter.number}</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-orange-800">{chapter.title}</h3>
                    <p className="text-sm text-orange-600 italic">{chapter.subtitle}</p>
                  </div>
                </div>
                <ChevronRight 
                  className={`w-5 h-5 text-orange-500 transition-transform duration-200 ${
                    selectedChapter === chapter.number ? 'rotate-90' : ''
                  }`} 
                />
              </div>

              <div className="flex items-center space-x-4 mb-4 text-sm text-gray-500">
                <div className="flex items-center space-x-1">
                  <Book className="w-4 h-4" />
                  <span>{chapter.verses} verses</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Users className="w-4 h-4" />
                  <span>{chapter.keyTopics.length} key topics</span>
                </div>
              </div>

              {selectedChapter === chapter.number && (
                <div className="mt-6 pt-6 border-t border-orange-100 space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Summary</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">{chapter.summary}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Key Topics</h4>
                    <div className="flex flex-wrap gap-2">
                      {chapter.keyTopics.map((topic, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-xs font-medium"
                        >
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-orange-500 to-amber-600 rounded-2xl p-8 text-white">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6">Complete Scripture</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <div className="text-4xl font-bold mb-2">18</div>
                <p className="text-orange-100">Chapters</p>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">700</div>
                <p className="text-orange-100">Verses</p>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">∞</div>
                <p className="text-orange-100">Wisdom</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chapters;
