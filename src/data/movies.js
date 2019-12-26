const movies = [
  {
    _id: "5af3c86ac12f0832e1ec1a88",
    genres:
      "[{'id': 16, 'name': 'Animation'}, {'id': 35, 'name': 'Comedy'}, {'id': 10751, 'name': 'Family'}]",
    original_title: "Toy Story",
    poster_path: "/rhIRbceoE9lR4veEXuwCC2wARtG.jpg",
    release_date: "1995-10-30",
    spoken_languages: "[{'iso_639_1': 'en', 'name': 'English'}]"
  },
  {
    _id: "5af3c86ac12f0832e1ec1a89",
    genres: "[{'id': 10749, 'name': 'Romance'}, {'id': 35, 'name': 'Comedy'}]",
    original_title: "Grumpier Old Men",
    poster_path: "/6ksm1sjKMFLbO7UY2i6G1ju9SML.jpg",
    release_date: "1995-12-22",
    spoken_languages: "[{'iso_639_1': 'en', 'name': 'English'}]"
  },
  {
    _id: "5af3c86ac12f0832e1ec1a8c",
    genres: "[{'id': 35, 'name': 'Comedy'}]",
    original_title: "Father of the Bride Part II",
    poster_path: "/e64sOI48hQXyru7naBFyssKFxVd.jpg",
    release_date: "1995-02-10",
    spoken_languages: "[{'iso_639_1': 'en', 'name': 'English'}]"
  },
  {
    _id: "5af3c86ac12f0832e1ec25a4",
    genres: "[{'id': 28, 'name': 'Action'}, {'id': 53, 'name': 'Thriller'}]",
    original_title: "Penitentiary II",
    poster_path: "/w5RPBg4ZBn7FV2FoT8laSvBRtir.jpg",
    release_date: "1982-04-02",
    spoken_languages: "[{'iso_639_1': 'en', 'name': 'English'}]"
  },
  {
    _id: "5af3c86ac12f0832e1ec1a91",
    genres:
      "[{'id': 12, 'name': 'Adventure'}, {'id': 28, 'name': 'Action'}, {'id': 53, 'name': 'Thriller'}]",
    original_title: "GoldenEye",
    poster_path: "/5c0ovjT41KnYIHYuF4AWsTe3sKh.jpg",
    release_date: "1995-11-16",
    spoken_languages:
      "[{'iso_639_1': 'en', 'name': 'English'}, {'iso_639_1': 'ru', 'name': 'Pусский'}, {'iso_639_1': 'es', 'name': 'Español'}]"
  },
  {
    _id: "5af3c86ac12f0832e1ec1a94",
    genres:
      "[{'id': 10751, 'name': 'Family'}, {'id': 16, 'name': 'Animation'}, {'id': 12, 'name': 'Adventure'}]",
    original_title: "Balto",
    poster_path: "/gV5PCAVCPNxlOLFM1bKk50EqLXO.jpg",
    release_date: "1995-12-22",
    spoken_languages: "[{'iso_639_1': 'en', 'name': 'English'}]"
  },
  {
    _id: "5af3c86ac12f0832e1ec1a9c",
    genres:
      "[{'id': 35, 'name': 'Comedy'}, {'id': 53, 'name': 'Thriller'}, {'id': 80, 'name': 'Crime'}]",
    original_title: "Get Shorty",
    poster_path: "/vWtDUUgQAsVyvRW4mE75LBgVm2e.jpg",
    release_date: "1995-10-20",
    spoken_languages: "[{'iso_639_1': 'en', 'name': 'English'}]"
  },
  {
    _id: "5af3c86ac12f0832e1ec1aa9",
    genres:
      "[{'id': 14, 'name': 'Fantasy'}, {'id': 18, 'name': 'Drama'}, {'id': 35, 'name': 'Comedy'}, {'id': 10751, 'name': 'Family'}]",
    original_title: "Babe",
    poster_path: "/gN6X3fwPya8pLffk9OEWV3DqBnE.jpg",
    release_date: "1995-07-18",
    spoken_languages: "[{'iso_639_1': 'en', 'name': 'English'}]"
  },
  {
    _id: "5af3c86ac12f0832e1ec1a9a",
    genres:
      "[{'id': 80, 'name': 'Crime'}, {'id': 35, 'name': 'Comedy'}, {'id': 12, 'name': 'Adventure'}]",
    original_title: "Ace Ventura: When Nature Calls",
    poster_path: "/wRlGnJhEzcxBjvWtvbjhDSU1cIY.jpg",
    release_date: "1995-11-10",
    spoken_languages: "[{'iso_639_1': 'en', 'name': 'English'}]"
  },
  {
    _id: "5af3c86ac12f0832e1ec1acc",
    genres: "[{'id': 35, 'name': 'Comedy'}]",
    original_title: "Friday",
    poster_path: "/kkoGT4bnK5oGiNbzGGcXzrXMSxn.jpg",
    release_date: "1995-04-26",
    spoken_languages: "[{'iso_639_1': 'en', 'name': 'English'}]"
  },
  {
    _id: "5af3c86ac12f0832e1ec1ab7",
    genres:
      "[{'id': 12, 'name': 'Adventure'}, {'id': 16, 'name': 'Animation'}, {'id': 18, 'name': 'Drama'}, {'id': 10751, 'name': 'Family'}]",
    original_title: "Pocahontas",
    poster_path: "/qk95miOV8wDABbO5gyCpCrvbVFu.jpg",
    release_date: "1995-06-14",
    spoken_languages: "[{'iso_639_1': 'en', 'name': 'English'}]"
  },
  {
    _id: "5af3c86ac12f0832e1ec1b04",
    genres: "[{'id': 14, 'name': 'Fantasy'}]",
    original_title: "The NeverEnding Story III",
    poster_path: "/driZCEKL79PaCsZNICSU3xd59sk.jpg",
    release_date: "1994-10-26",
    spoken_languages: "[{'iso_639_1': 'en', 'name': 'English'}]"
  },
  {
    _id: "5af3c86ac12f0832e1ec1ac9",
    genres:
      "[{'id': 28, 'name': 'Action'}, {'id': 878, 'name': 'Science Fiction'}]",
    original_title: "Lawnmower Man 2: Beyond Cyberspace",
    poster_path: "/i0hBsWBLw64XRehFzCL44PaCs1y.jpg",
    release_date: "1996-01-12",
    spoken_languages:
      "[{'iso_639_1': 'en', 'name': 'English'}, {'iso_639_1': 'hu', 'name': 'Magyar'}]"
  },
  {
    _id: "5af3c86ac12f0832e1ec1b21",
    genres: "[{'id': 35, 'name': 'Comedy'}]",
    original_title: "Blue in the Face",
    poster_path: "/qa9yf3OlfXbYBb0af0mpawGB6TI.jpg",
    release_date: "1995-09-15",
    spoken_languages: "[{'iso_639_1': 'en', 'name': 'English'}]"
  },
  {
    _id: "5af3c86ac12f0832e1ec1b1e",
    genres:
      "[{'id': 28, 'name': 'Action'}, {'id': 80, 'name': 'Crime'}, {'id': 14, 'name': 'Fantasy'}]",
    original_title: "Batman Forever",
    poster_path: "/eTMrHEhlFPHNxpqGwpGGTdAa0xV.jpg",
    release_date: "1995-06-16",
    spoken_languages: "[{'iso_639_1': 'en', 'name': 'English'}]"
  },
  {
    _id: "5af3c86ac12f0832e1ec1ad3",
    genres:
      "[{'id': 27, 'name': 'Horror'}, {'id': 878, 'name': 'Science Fiction'}]",
    original_title: "Screamers",
    poster_path: "/aFEs7D7IQ2IehTsniRIojDkiDl6.jpg",
    release_date: "1995-09-08",
    spoken_languages: "[{'iso_639_1': 'en', 'name': 'English'}]"
  },
  {
    _id: "5af3c86ac12f0832e1ec1b28",
    genres:
      "[{'id': 53, 'name': 'Thriller'}, {'id': 28, 'name': 'Action'}, {'id': 80, 'name': 'Crime'}]",
    original_title: "Desperado",
    poster_path: "/7eVo5DbP7gcsDzHcpRCTA6JAuF2.jpg",
    release_date: "1995-08-25",
    spoken_languages: "[{'iso_639_1': 'en', 'name': 'English'}]"
  },
  {
    _id: "5af3c86ac12f0832e1ec1acd",
    genres:
      "[{'id': 27, 'name': 'Horror'}, {'id': 28, 'name': 'Action'}, {'id': 53, 'name': 'Thriller'}, {'id': 80, 'name': 'Crime'}]",
    original_title: "From Dusk Till Dawn",
    poster_path: "/ce0d4kM5KxT4x1Oq8JkSuNYevri.jpg",
    release_date: "1996-01-19",
    spoken_languages:
      "[{'iso_639_1': 'en', 'name': 'English'}, {'iso_639_1': 'es', 'name': 'Español'}]"
  },
  {
    _id: "5af3c86ac12f0832e1ec1b2a",
    genres: "[{'id': 28, 'name': 'Action'}, {'id': 53, 'name': 'Thriller'}]",
    original_title: "Die Hard: With a Vengeance",
    poster_path: "/ivpXGcsPZglyYrN65THWSD7JM3q.jpg",
    release_date: "1995-05-19",
    spoken_languages:
      "[{'iso_639_1': 'en', 'name': 'English'}, {'iso_639_1': 'de', 'name': 'Deutsch'}, {'iso_639_1': 'ro', 'name': 'Română'}]"
  },
  {
    _id: "5af3c86ac12f0832e1ec25b4",
    genres: "[{'id': 27, 'name': 'Horror'}, {'id': 53, 'name': 'Thriller'}]",
    original_title: "Bats",
    poster_path: "/5sR3GMWGnNrH1PLkxF7w2qRhJJa.jpg",
    release_date: "1999-10-22",
    spoken_languages: "[{'iso_639_1': 'en', 'name': 'English'}]"
  },
  {
    _id: "5af3c86ac12f0832e1ec1b3a",
    genres:
      "[{'id': 28, 'name': 'Action'}, {'id': 12, 'name': 'Adventure'}, {'id': 878, 'name': 'Science Fiction'}, {'id': 10751, 'name': 'Family'}, {'id': 14, 'name': 'Fantasy'}]",
    original_title: "Mighty Morphin Power Rangers: The Movie",
    poster_path: "/A3ijhraMN0tvpDnPoyVP7NulkSr.jpg",
    release_date: "1995-06-30",
    spoken_languages: "[{'iso_639_1': 'en', 'name': 'English'}]"
  },
  {
    _id: "5af3c86ac12f0832e1ec1ab3",
    genres: "[{'id': 28, 'name': 'Action'}, {'id': 14, 'name': 'Fantasy'}]",
    original_title: "Mortal Kombat",
    poster_path: "/bdXWixjWVA7Y03PvW74xufrROiJ.jpg",
    release_date: "1995-08-18",
    spoken_languages: "[{'iso_639_1': 'en', 'name': 'English'}]"
  },
  {
    _id: "5af3c86ac12f0832e1ec1b2e",
    genres: "[{'id': 12, 'name': 'Adventure'}]",
    original_title: "Free Willy 2 - The Adventure Home",
    poster_path: "/yLyyjm4m3fSvbazyFv4RtUnb2uQ.jpg",
    release_date: "1995-07-19",
    spoken_languages:
      "[{'iso_639_1': 'en', 'name': 'English'}, {'iso_639_1': 'id', 'name': 'Bahasa indonesia'}, {'iso_639_1': 'ms', 'name': 'Bahasa melayu'}]"
  },
  {
    _id: "5af3c86ac12f0832e1ec1b41",
    genres:
      "[{'id': 14, 'name': 'Fantasy'}, {'id': 27, 'name': 'Horror'}, {'id': 53, 'name': 'Thriller'}]",
    original_title: "The Prophecy",
    poster_path: "/A3aYGp8LLxuFdzG2ETnhfbWPk7h.jpg",
    release_date: "1995-09-01",
    spoken_languages: "[{'iso_639_1': 'en', 'name': 'English'}]"
  },
  {
    _id: "5af3c86ac12f0832e1ec1b45",
    genres: "[{'id': 35, 'name': 'Comedy'}, {'id': 18, 'name': 'Drama'}]",
    original_title: "Smoke",
    poster_path: "/dku3aLprH3j1ilSsubW9Pbgfe0y.jpg",
    release_date: "1995-06-09",
    spoken_languages: "[{'iso_639_1': 'en', 'name': 'English'}]"
  },
  {
    _id: "5af3c86ac12f0832e1ec1b47",
    genres: "[{'id': 18, 'name': 'Drama'}]",
    original_title: "Showgirls",
    poster_path: "/7O2SxrsXYaGFZ5cZgJF0Ab5SV5J.jpg",
    release_date: "1995-09-22",
    spoken_languages: "[{'iso_639_1': 'en', 'name': 'English'}]"
  },
  {
    _id: "5af3c86ac12f0832e1ec1b49",
    genres:
      "[{'id': 878, 'name': 'Science Fiction'}, {'id': 27, 'name': 'Horror'}, {'id': 28, 'name': 'Action'}]",
    original_title: "Species",
    poster_path: "/94P6kzKH8aPmQmPr9yZjgy7BtQQ.jpg",
    release_date: "1995-07-07",
    spoken_languages: "[{'iso_639_1': 'en', 'name': 'English'}]"
  },
  {
    _id: "5af3c86ac12f0832e1ec1b51",
    genres: "[{'id': 28, 'name': 'Action'}, {'id': 53, 'name': 'Thriller'}]",
    original_title: "Under Siege 2: Dark Territory",
    poster_path: "/6Z1p71nkm45cYuIZWOx5JSCYc0o.jpg",
    release_date: "1995-07-13",
    spoken_languages: "[{'iso_639_1': 'en', 'name': 'English'}]"
  },
  {
    _id: "5af3c86ac12f0832e1ec1b5a",
    genres: "[{'id': 18, 'name': 'Drama'}]",
    original_title: "Утомлённые солнцем",
    poster_path: "/e7bE9BiLyKaZtNF3Q2ro8gVCEQA.jpg",
    release_date: "1994-05-01",
    spoken_languages: "[{'iso_639_1': 'ru', 'name': 'Pусский'}]"
  },
  {
    _id: "5af3c86ac12f0832e1ec1b23",
    genres:
      "[{'id': 14, 'name': 'Fantasy'}, {'id': 35, 'name': 'Comedy'}, {'id': 10751, 'name': 'Family'}]",
    original_title: "Casper",
    poster_path: "/cpMbvFDD2C21pqMNXVPhSWGQBR9.jpg",
    release_date: "1995-05-26",
    spoken_languages: "[{'iso_639_1': 'en', 'name': 'English'}]"
  },
  {
    _id: "5af3c86ac12f0832e1ec1b2b",
    genres:
      "[{'id': 28, 'name': 'Action'}, {'id': 35, 'name': 'Comedy'}, {'id': 80, 'name': 'Crime'}, {'id': 18, 'name': 'Drama'}]",
    original_title: "The Doom Generation",
    poster_path: "/6ZwsSedjyzR0poDrKlJaYWoseaH.jpg",
    release_date: "1995-10-27",
    spoken_languages: "[{'iso_639_1': 'en', 'name': 'English'}]"
  },
  {
    _id: "5af3c86ac12f0832e1ec1af1",
    genres:
      "[{'id': 28, 'name': 'Action'}, {'id': 35, 'name': 'Comedy'}, {'id': 10402, 'name': 'Music'}, {'id': 10751, 'name': 'Family'}, {'id': 12, 'name': 'Adventure'}]",
    original_title: "Muppet Treasure Island",
    poster_path: "/5A8gKzOrF9Z7tSUX6xd5dEx4NXf.jpg",
    release_date: "1996-02-16",
    spoken_languages: "[{'iso_639_1': 'en', 'name': 'English'}]"
  },
  {
    _id: "5af3c86ac12f0832e1ec1b3e",
    genres:
      "[{'id': 80, 'name': 'Crime'}, {'id': 18, 'name': 'Drama'}, {'id': 9648, 'name': 'Mystery'}, {'id': 53, 'name': 'Thriller'}, {'id': 28, 'name': 'Action'}]",
    original_title: "The Net",
    poster_path: "/gKDNaAFzT21cSVeKQop7d1uhoSp.jpg",
    release_date: "1995-07-28",
    spoken_languages:
      "[{'iso_639_1': 'en', 'name': 'English'}, {'iso_639_1': 'es', 'name': 'Español'}]"
  },
  {
    _id: "5af3c86ac12f0832e1ec1b16",
    genres:
      "[{'id': 28, 'name': 'Action'}, {'id': 35, 'name': 'Comedy'}, {'id': 80, 'name': 'Crime'}, {'id': 53, 'name': 'Thriller'}]",
    original_title: "Bad Boys",
    poster_path: "/1dKsSfpAqWSc5UJT9VIqK5JVFI5.jpg",
    release_date: "1995-04-07",
    spoken_languages: "[{'iso_639_1': 'en', 'name': 'English'}]"
  },
  {
    _id: "5af3c86ac12f0832e1ec1b5c",
    genres: "[{'id': 18, 'name': 'Drama'}, {'id': 10749, 'name': 'Romance'}]",
    original_title: "Before Sunrise",
    poster_path: "/jsQy4ZbPHA8hE2O6QU05PpofI61.jpg",
    release_date: "1995-01-27",
    spoken_languages:
      "[{'iso_639_1': 'en', 'name': 'English'}, {'iso_639_1': 'de', 'name': 'Deutsch'}, {'iso_639_1': 'fr', 'name': 'Français'}]"
  },
  {
    _id: "5af3c86ac12f0832e1ec1b63",
    genres: "[{'id': 35, 'name': 'Comedy'}]",
    original_title: "Clerks",
    poster_path: "/dmNytzvQTjylI83qrgDoS1KQ0ev.jpg",
    release_date: "1994-09-13",
    spoken_languages: "[{'iso_639_1': 'en', 'name': 'English'}]"
  },
  {
    _id: "5af3c86ac12f0832e1ec1b6b",
    genres: "[{'id': 35, 'name': 'Comedy'}]",
    original_title: "Dumb and Dumber",
    poster_path: "/3PEAkZHa8ehfUkuKbzmQNRTTAAs.jpg",
    release_date: "1994-12-16",
    spoken_languages: "[{'iso_639_1': 'en', 'name': 'English'}]"
  },
  {
    _id: "5af3c86ac12f0832e1ec1b81",
    genres: "[{'id': 27, 'name': 'Horror'}, {'id': 10749, 'name': 'Romance'}]",
    original_title: "Interview with the Vampire",
    poster_path: "/hldXwwViSfHJS0kIJr07KBGmHJI.jpg",
    release_date: "1994-11-11",
    spoken_languages:
      "[{'iso_639_1': 'en', 'name': 'English'}, {'iso_639_1': 'fr', 'name': 'Français'}]"
  },
  {
    _id: "5af3c86ac12f0832e1ec1b73",
    genres:
      "[{'id': 10749, 'name': 'Romance'}, {'id': 16, 'name': 'Animation'}, {'id': 10751, 'name': 'Family'}, {'id': 35, 'name': 'Comedy'}, {'id': 12, 'name': 'Adventure'}]",
    original_title: "A Goofy Movie",
    poster_path: "/bycmMhO3iIoEDzP768sUjq2RV4T.jpg",
    release_date: "1995-04-07",
    spoken_languages: "[{'iso_639_1': 'en', 'name': 'English'}]"
  },
  {
    _id: "5af3c86ac12f0832e1ec1ba2",
    genres:
      "[{'id': 878, 'name': 'Science Fiction'}, {'id': 28, 'name': 'Action'}, {'id': 53, 'name': 'Thriller'}]",
    original_title: "Nemesis 2 - Nebula",
    poster_path: "/mY7SX6aBDumSweQMTCdfrIbMLAa.jpg",
    release_date: "1995-09-26",
    spoken_languages: "[{'iso_639_1': 'en', 'name': 'English'}]"
  },
  {
    _id: "5af3c86ac12f0832e1ec1ba6",
    genres: "[{'id': 18, 'name': 'Drama'}]",
    original_title: "Once Were Warriors",
    poster_path: "/8QF48QS5lvtrhOclt22RFz3bSQm.jpg",
    release_date: "1994-09-02",
    spoken_languages:
      "[{'iso_639_1': 'en', 'name': 'English'}, {'iso_639_1': 'mi', 'name': ''}]"
  },
  {
    _id: "5af3c86ac12f0832e1ec1ba7",
    genres:
      "[{'id': 18, 'name': 'Drama'}, {'id': 10749, 'name': 'Romance'}, {'id': 53, 'name': 'Thriller'}]",
    original_title: "Poison Ivy II: Lily",
    poster_path: "/bYU4DdtGM4JBu5eZNkauDjJhXpN.jpg",
    release_date: "1996-01-16",
    spoken_languages: "[{'iso_639_1': 'en', 'name': 'English'}]"
  }
];

export default function() {
  return new Promise(resolve => {
    setTimeout(() => resolve(movies), 1000);
  });
}
