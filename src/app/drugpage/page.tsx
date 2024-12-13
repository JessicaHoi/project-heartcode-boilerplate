
import "../globals.css";

import React from 'react';
import Link from 'next/link';
import { Toaster } from '@/components/ui/toaster'; // Assuming a toaster is being used to show messages

const DrugAwarenessPage = () => {
  return (
    <div className="bg-gradient-to-t from-gray-100 to-white min-h-screen text-gray-800">
      <header className="text-center py-10 bg-gray-300 text-gray-900 shadow-lg">
        <h1 className="text-4xl font-semibold">Drug Awareness and Support</h1>
        <p className="mt-4 text-lg">Understanding the impact of drugs and finding help.</p>
      </header>

      <div className="container mx-auto px-6 py-10">
        <section className="intro mb-12">
          <h2 className="text-3xl font-bold text-gray-700 mb-6">What Are Drugs?</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Drugs are substances that, when taken into the body, alter the function of the body and mind. 
            While some drugs are used for medical purposes, others are misused and can lead to physical and psychological harm.
          </p>
        </section>

        <section className="impact mb-12">
          <h2 className="text-3xl font-bold text-gray-700 mb-6">The Impact of Drugs</h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-4">
            The misuse of drugs can have significant impacts on physical and mental health, leading to addiction, long-term health problems, 
            and impaired cognitive and emotional functioning. Drugs can also affect relationships, careers, and lead to social or legal issues.
          </p>
        </section>

        <section className="help-resources mb-12">
          <h2 className="text-3xl font-bold text-gray-700 mb-6">How to Get Help</h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-4">
            If you or someone you know is struggling with drug abuse or addiction, there are many resources available to help. Seeking help early is important for better recovery outcomes. Below are some organizations that provide support and guidance:
          </p>
          <ul className="space-y-4">
            <li>
              <a
                className="text-blue-600 hover:text-blue-800 transition duration-300"
                href="https://www.imh.com.sg/Clinical-Services/Specialised-Services/Pages/Addictions-Management.aspx"
                target="_blank"
                rel="noopener noreferrer"
              >
                Addictions Management at IMH
              </a>
            </li>
            <li>
              <a
                className="text-blue-600 hover:text-blue-800 transition duration-300"
                href="https://www.psychologytoday.com/us/blog/almost-addicted/201312/five-must-do-things-if-family-member-is-abusing-drugs?msockid=034fd5807b9068c5169ac0d07ad569b0"
                target="_blank"
                rel="noopener noreferrer"
              >
                National Council on Alcoholism and Drug Dependence
              </a>
            </li>
            <li>
              <a
                className="text-blue-600 hover:text-blue-800 transition duration-300"
                href="https://www.drugabuse.gov/"
                target="_blank"
                rel="noopener noreferrer"
              >
                National Institute on Drug Abuse
              </a>
            </li>
          </ul>
        </section>

        <section className="prevention mb-12">
          <h2 className="text-3xl font-bold text-gray-700 mb-6">Preventing Drug Abuse</h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-4">
            Prevention is key when it comes to avoiding the harmful effects of drug misuse. Educating yourself and others, practicing healthy coping mechanisms, and avoiding situations where drugs are present can help reduce the risk of addiction.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed">
            If you're looking to educate others or need more information, visit our{' '}
            <Link href="/resources" className="text-gray-700 hover:text-gray-900 transition duration-300">
              resource page
            </Link>{' '}
            for helpful tools.
          </p>
        </section>

        <section className="support mb-12">
          <h2 className="text-3xl font-bold text-gray-700 mb-6">Find Support Near You</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Many communities offer local support groups, therapy, and rehabilitation centers. If you need assistance, you can contact your local healthcare provider, or visit the websites linked above for resources available in your area.
          </p>
        </section>
      </div>

      <footer className="bg-gray-300 text-gray-900 py-6">
        <div className="text-center">
          <p>&copy; 2024 Drug Awareness Initiative | All rights reserved.</p>
          <Toaster /> {/* If you're using a toaster to display messages */}
        </div>
      </footer>
    </div>
  );
};

export default DrugAwarenessPage;
