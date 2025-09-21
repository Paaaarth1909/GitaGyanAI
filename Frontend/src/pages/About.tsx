import React from "react";
import { BookOpen, Clock, Globe, Star, Users, Heart } from "lucide-react";

const About: React.FC = () => {
  const highlights = [
    {
      icon: Clock,
      title: "5000+ Years Old",
      description: "Ancient wisdom that remains relevant today",
    },
    {
      icon: Globe,
      title: "Universal Truth",
      description: "Teachings that transcend culture and religion",
    },
    {
      icon: Star,
      title: "18 Chapters",
      description: "700 verses of profound spiritual guidance",
    },
    {
      icon: Users,
      title: "Global Impact",
      description: "Studied and revered worldwide",
    },
  ];

  return (
    <div className="min-h-screen bg-[var(--color-background)]">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-20">
          <div className="inline-flex items-center justify-center w-24 h-24 rounded-full shadow-lg animate-lotus" style={{ background: "var(--gradient-sunrise)" }}>
            <BookOpen className="w-12 h-12 text-[var(--color-primary-foreground)]" />
          </div>
          <h1 className="mt-6 text-5xl font-bold text-primary">
            The Bhagavad Gita
          </h1>
          <p className="text-xl text-[var(--color-muted-foreground)] max-w-3xl mx-auto mt-6 leading-relaxed">
            <span className="sacred-text">
              "गीता सुगीता कर्तव्या किमन्यैः शास्त्रविस्तरैः"
            </span>
            <br />
            <span className="text-lg italic text-gray-700 mt-2 block">
              "The Gita should be sung (studied) beautifully; what is the need
              for other elaborate scriptures?"
            </span>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="glass-effect p-6 shadow-primary shadow-md hover:shadow-xl transition-all duration-300 animate-float"
              >
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center mb-4 bg-primary"
                //   style={{ background: "bg-primary" }}
                >
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-bold text-primary mb-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-md">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="glass-effect p-8 shadow-xl">
            <div className="flex items-center mb-6">
              <div
                className="w-12 h-12 flex items-center justify-center rounded-full mr-4 bg-primary"
              >
                <Globe className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-[var(--color-foreground)]">
                Origin & Context
              </h2>
            </div>
            <div className="space-y-4 text-[var(--color-foreground)]">
              <p>
                The Bhagavad Gita, meaning "Song of God," is a 700-verse dialogue
                between Prince Arjuna and Lord Krishna on the battlefield of
                Kurukshetra. This sacred text forms part of the Mahabharata.
              </p>
              <p>
                Facing a moral dilemma, Arjuna questions the purpose of duty and
                life. Krishna imparts timeless wisdom on dharma, karma, and the
                nature of reality.
              </p>
              <p>
                The Gita addresses universal questions: What is the purpose of
                life? How should we act? How do we find peace?
              </p>
            </div>
          </div>

          <div className="glass-effect p-8 shadow-xl">
            <div className="flex items-center mb-6">
              <div
                className="w-12 h-12 flex items-center justify-center rounded-full mr-4 bg-primary"
              >
                <Heart className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-[var(--color-foreground)]">
                Core Teachings
              </h2>
            </div>
            <div className="space-y-6">
              {[
                { title: "Dharma", desc: "Living according to one’s duty without attachment to results." },
                { title: "Karma Yoga", desc: "The path of selfless action, free from ego and desire." },
                { title: "Bhakti Yoga", desc: "Devotion and surrender to the Divine with love." },
                { title: "Jnana Yoga", desc: "Wisdom and realization of the Self and ultimate reality." },
              ].map((t, i) => (
                <div
                  key={i}
                  className="border-l-4 pl-4"
                  style={{ borderColor: "var(--color-primary)" }}
                >
                  <h3 className="font-semibold text-[var(--color-foreground)] mb-1">
                    {t.title}
                  </h3>
                  <p className="text-sm text-[var(--color-muted-foreground)]">
                    {t.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div
          className="mt-20 p-10 rounded-2xl text-white animate-shine bg-primary"
        >
          <h2 className="text-3xl font-bold text-center mb-8">Global Influence</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="text-xl font-semibold mb-2">Philosophy</h3>
              <p className="text-sm text-gray-100">
                Inspired thinkers from Schopenhauer to Gandhi.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Literature</h3>
              <p className="text-sm text-gray-100">
                Countless works of poetry, prose, and art across cultures.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Modern Life</h3>
              <p className="text-sm text-gray-100">
                Guides millions in finding meaning and peace today.
              </p>
            </div>
          </div>
        </div>

        {/* Quote */}
        <div className="mt-20 glass-effect p-12 shadow-xl text-center">
          <div
            className="w-20 h-20 flex items-center justify-center mx-auto mb-6 rounded-full animate-float"
            style={{ background: "var(--gradient-sunrise)" }}
          >
            <Star className="w-10 h-10 text-white" />
          </div>
          <blockquote className="sacred-text text-2xl mb-4">
            "यदा यदा हि धर्मस्य ग्लानिर्भवति भारत।<br />
            अभ्युत्थानमधर्मस्य तदात्मानं सृजाम्यहम्॥"
          </blockquote>
          <p className="text-lg italic text-[var(--color-muted-foreground)]">
            "Whenever there is a decline in righteousness and rise of
            unrighteousness, I manifest Myself."
          </p>
          <p className="text-sm text-gray-500 mt-2">
            — Bhagavad Gita, Chapter 4, Verse 7
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
