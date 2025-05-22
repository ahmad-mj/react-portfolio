import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import TrainingProgramsGrid from "./TrainingProgramsGrid";
import { useTranslation } from "../../hooks/useTranslation";

const TrainingProgramsPage = () => {
  const { trainingPrograms } = useTranslation("en");

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="bg-white text-gray-800">
      <section className="text-center py-16 bg-gradient-to-br from-indigo-50 to-pink-50">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Training Programs</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Evidence-based, compassionate training for a happier, more confident dog.
        </p>
      </section>

      <TrainingProgramsGrid title="All Training Programs" clickable={false} />

      <section className="bg-gray-100 py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-6">Send Booking Inquiry</h2>
        <form className="max-w-xl mx-auto grid gap-4">
          <input
            type="text"
            placeholder="Your Name"
            className="p-3 border rounded"
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            className="p-3 border rounded"
            required
          />
          <select className="p-3 border rounded" required>
            <option value="">Select a Program</option>
            {trainingPrograms.map((p) => (

              <option key={p.id} value={p.title}>
                {p.category
                }
              </option>
            )


          
          )}
          </select>
          <textarea
            rows="4"
            placeholder="Tell us more (e.g., preferred days, issues, goals)"
            className="p-3 border rounded"
          />
          <button className="bg-blue-600 text-white py-3 rounded hover:bg-blue-700 transition">
            Send Request
          </button>
        </form>
      </section>
    </div>
  );
};

export default TrainingProgramsPage;
