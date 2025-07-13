import React from 'react';
import { motion } from 'framer-motion';

const Message = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 to-purple-100 flex items-center justify-center mb-0 p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-2xl bg-white/80 backdrop-blur-sm p-8 rounded-xl shadow-xl text-center"
      >
        <h1 className="text-3xl font-bold text-gray-800 mb-6">
          Dear Sanyaaa💫,
        </h1>
        <p className="text-xl text-gray-700 leading-relaxed mb-6">
          Never thought that one random message from my side would find someone this special🫂💫✨.
I had never texted a girl first before and honestly, I didn’t know what I was doing. But somehow, with you, it all just felt right😭💗.
From small talks to sharing random moments, jokes, thoughts✨💫 and it’s been a journey I didn’t expect but am truly grateful for💫✨.
You’ve been a reason to smile more often, to try a little harder, and to create something I never thought I could.
This isn’t just a birthday wish — it’s a little piece of how special you are to me🫂💗.
Thank you for being the person you are.💗✨💫
Happy Birthday once again! Hope this day is as lovely as you. 🎂💖
        </p>
        <p className="text-lg text-pink-600 font-semibold">
          and on your special day, i wish you the happiest birthday💗💗💗🫂🫂🫂🫂💫💫💫✨✨✨
        </p>
      </motion.div>
    </div>
  );
};

export default Message;
