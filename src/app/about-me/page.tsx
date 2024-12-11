"use client"

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function AboutMe() {
  const [showMore, setShowMore] = useState(false);
  const [randomSkill, setRandomSkill] = useState("");

  const skills = [
    "I can play a clarinet",
    "My peak elo is chess was 1.3K",
    "i love modding minecraft"
  ];

  const toggleShowMore = () => setShowMore(!showMore);

  const getRandomSkill = () => {
    const randomIndex = Math.floor(Math.random() * skills.length);
    setRandomSkill(skills[randomIndex]);
  };

  return (
    <div className="p-6 bg-gradient-to-r from-blue-50 to-white">
      <h2 className="text-3xl font-bold text-center mb-6">About Me</h2>
      <Card className="shadow-lg hover:shadow-2xl transition-shadow duration-300">
        <CardHeader>
          <CardTitle className="text-2xl text-center">Hello, I'm Tian Sen</CardTitle>
          <img
            src="pfp.png"
            className="w-48 h-auto rounded-full mx-auto mb-4 border-4 border-blue-300"
            alt="Jessica"
          />
          <CardDescription className="text-center text-lg">I love to game a lot!</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="mb-4">
            <p className="font-bold">Name:</p> Tian Sen
          </div>
          <div className="mb-4">
            <p className="font-bold">Major:</p> O levels
          
          </div>
          <div className="mb-4 text-center">
            <p className="font-bold">Im a chill guy go with the flow!</p>
            <img
              src="/chillguy.png"
              alt="Cute Capybara"
              className="w-auto h-auto mx-auto rounded-lg"
            />
          </div>
          {showMore && (
            <div className="mt-2">
              <p className="font-bold">Fun facts about me:</p>
              <div className="flex overflow-x-auto space-x-4 p-2">
                {skills.map((skill, index) => (
                  <div key={index} className="bg-green-100 p-3 rounded-lg shadow-md flex-shrink-0">
                    {skill}
                  </div>
                ))}
              </div>
              <div className="mt-4">
                <p className="font-bold">Bio:</p>
                <p>
                  Coffee addict
                </p>
              </div>
             
            </div>
          )}
          <button
            className="mt-4 p-2 bg-blue-500 text-white rounded transition-colors duration-200 hover:bg-blue-600"
            onClick={toggleShowMore}
          >
            {showMore ? "Show Less" : "Show More"}
          </button>
          <button
            className="mt-2 p-2 bg-green-500 text-white rounded transition-colors duration-200 hover:bg-green-600"
            onClick={getRandomSkill}
          >
            Random Skill
          </button>
          {randomSkill && <p className="mt-2 text-lg">Your random skill: <strong>{randomSkill}</strong></p>}
        </CardContent>
      </Card>
    </div>
  );
}