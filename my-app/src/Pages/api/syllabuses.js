// pages/api/syllabuses.js

export default function handler(req, res) {
    // Assuming syllabuses data is fetched from a database or external API
    const syllabuses = [
      { id: 1, name: "Math (NCERT)" },
      { id: 2, name: "Math Foundations" },
      { id: 3, name: "Math (Maharashtra)" },
      { id: 4, name: "PACE (SOE Punjab"},
      { id: 5, name: "Science (NCERT)"},
      { id: 6, name: "All State Board"},

      // Add more syllabuses as needed
    ];
  
    res.status(200).json(syllabuses);
  }
  