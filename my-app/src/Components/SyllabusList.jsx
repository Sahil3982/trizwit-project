// components/SyllabusList.js
'use client'
import React, { useState, useEffect } from "react";
import SyllabusCard from "./SyllabusCard";

const SyllabusList = () => {
  const [syllabuses, setSyllabuses] = useState([]);

  useEffect(() => {
    fetch("/api/syllabuses")
      .then((res) => res.json())
      .then((data) => setSyllabuses(data))
      .catch((error) => console.error("Error fetching syllabuses:", error));
  }, []);

  return (
    <div>
      <div>
        {syllabuses.map((syllabus) => (
          <SyllabusCard key={syllabus.id} syllabus={syllabus} />
        ))}
      </div>
    </div>
  );
};

export default SyllabusList;
