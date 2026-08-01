const marvelCategories = [
    {
        name: "MCU",
        items: [
            { id: "m1", title: "Spider-Man", year: "2002", duration: "ساعتان و1 دقيقة (121 دقيقة)", poster: "https://upload.wikimedia.org/wikipedia/en/f/f3/Spider-Man2002Poster.jpg" },
            { id: "m2", title: "Spider-Man 2", year: "2004", duration: "ساعتان و7 دقائق (127 دقيقة)", poster: "https://upload.wikimedia.org/wikipedia/en/0/00/Spider-Man_2_poster.jpg" },
            { id: "m3", title: "Spider-Man 3", year: "2007", duration: "ساعتان و36 دقيقة (156 دقيقة)", poster: "https://upload.wikimedia.org/wikipedia/en/7/7a/Spider-Man_3%2C_Poster.jpg" },
            { id: "m4", title: "Iron Man", year: "2008", duration: "ساعتان و6 دقائق (126 دقيقة)", poster: "https://upload.wikimedia.org/wikipedia/en/0/02/Iron_Man_poster.jpg" },
            { id: "m5", title: "The Incredible Hulk", year: "2008", duration: "ساعة و52 دقيقة (112 دقيقة)", poster: "https://upload.wikimedia.org/wikipedia/en/8/88/The_Incredible_Hulk_poster.jpg" },
            { id: "m6", title: "Iron Man 2", year: "2010", duration: "ساعتان و4 دقائق (124 دقيقة)", poster: "https://upload.wikimedia.org/wikipedia/en/e/ed/Iron_Man_2_poster.jpg" },
            { id: "m7", title: "Thor", year: "2011", duration: "ساعة و55 دقيقة (115 دقيقة)", poster: "https://upload.wikimedia.org/wikipedia/en/7/7f/Thor_poster.jpg" },
            { id: "m8", title: "Captain America: The First Avenger", year: "2011", duration: "ساعتان و4 دقائق (124 دقيقة)", poster: "https://upload.wikimedia.org/wikipedia/en/3/37/Captain_America_The_First_Avenger_poster.jpg" },
            { id: "m9", title: "The Avengers", year: "2012", duration: "ساعتان و23 دقيقة (143 دقيقة)", poster: "https://upload.wikimedia.org/wikipedia/en/8/8a/The_Avengers_%282012_film%29_poster.jpg" },
            { id: "m10", title: "The Amazing Spider-Man", year: "2012", duration: "ساعتان و16 دقيقة (136 دقيقة)", poster: "https://upload.wikimedia.org/wikipedia/en/2/21/The_Amazing_Spider-Man_poster.jpg" },
            { id: "m11", title: "The Amazing Spider-Man 2", year: "2014", duration: "ساعتان و22 دقيقة (142 دقيقة)", poster: "https://upload.wikimedia.org/wikipedia/en/0/02/The_Amazing_Spider-Man_2_poster.jpg" },
            { id: "m12", title: "Iron Man 3", year: "2013", duration: "ساعتان و10 دقائق (130 دقيقة)", poster: "https://upload.wikimedia.org/wikipedia/en/1/19/Iron_Man_3_poster.jpg" },
            { id: "m13", title: "Thor: The Dark World", year: "2013", duration: "ساعة و52 دقيقة (112 دقيقة)", poster: "https://upload.wikimedia.org/wikipedia/en/7/7e/Thor_-_The_Dark_World_poster.jpg" },
            { id: "m14", title: "Captain America: The Winter Soldier", year: "2014", duration: "ساعتان و16 دقيقة (136 دقيقة)", poster: "https://upload.wikimedia.org/wikipedia/en/9/9e/Captain_America_The_Winter_Soldier_poster.jpg" },
            { id: "m15", title: "Guardians of the Galaxy", year: "2014", duration: "ساعتان و1 دقيقة (121 دقيقة)", poster: "https://upload.wikimedia.org/wikipedia/en/b/b5/Guardians_of_the_Galaxy_poster.jpg" },
            { id: "m16", title: "Avengers: Age of Ultron", year: "2015", duration: "ساعتان و21 دقيقة (141 دقيقة)", poster: "https://upload.wikimedia.org/wikipedia/en/f/ff/Avengers_Age_of_Ultron_poster.jpg" },
            { id: "m17", title: "Ant-Man", year: "2015", duration: "ساعة و57 دقيقة (117 دقيقة)", poster: "https://upload.wikimedia.org/wikipedia/en/1/12/Ant-Man_poster.jpg" },
            { id: "m18", title: "Captain America: Civil War", year: "2016", duration: "ساعتان و27 دقيقة (147 دقيقة)", poster: "https://upload.wikimedia.org/wikipedia/en/5/53/Captain_America_Civil_War_poster.jpg" },
            { id: "m19", title: "Black Widow", year: "2021", duration: "ساعتان و14 دقيقة (134 دقيقة)", poster: "https://upload.wikimedia.org/wikipedia/en/e/e7/Black_Widow_poster.jpg" },
            { id: "m20", title: "Doctor Strange", year: "2016", duration: "ساعة و55 دقيقة (115 دقيقة)", poster: "https://upload.wikimedia.org/wikipedia/en/c/c7/Doctor_Strange_poster.jpg" },
            { id: "m21", title: "Guardians of the Galaxy Vol. 2", year: "2017", duration: "ساعتان و16 دقيقة (136 دقيقة)", poster: "https://upload.wikimedia.org/wikipedia/en/a/ab/Guardians_of_the_Galaxy_Vol_2_poster.jpg" },
            { id: "m22", title: "Spider-Man: Homecoming", year: "2017", duration: "ساعتان و13 دقيقة (133 دقيقة)", poster: "https://upload.wikimedia.org/wikipedia/en/f/f9/Spider-Man_Homecoming_poster.jpg" },
            { id: "m23", title: "Thor: Ragnarok", year: "2017", duration: "ساعتان و10 دقائق (130 دقيقة)", poster: "https://upload.wikimedia.org/wikipedia/en/7/7d/Thor_Ragnarok_poster.jpg" },
            { id: "m24", title: "Black Panther", year: "2018", duration: "ساعتان و14 دقيقة (134 دقيقة)", poster: "https://upload.wikimedia.org/wikipedia/en/d/d6/Black_Panther_film_poster.jpg" },
            { id: "venom1", title: "Venom", year: "2018", duration: "ساعة و52 دقيقة (112 دقيقة)", poster: "https://upload.wikimedia.org/wikipedia/en/f/f8/Venom_%282018_film%29_poster.jpg" },
            { id: "m25", title: "Avengers: Infinity War", year: "2018", duration: "ساعتان و29 دقيقة (149 دقيقة)", poster: "https://upload.wikimedia.org/wikipedia/en/4/4d/Avengers_Infinity_War_poster.jpg" },
            { id: "m26", title: "Ant-Man and the Wasp", year: "2018", duration: "ساعة و58 دقيقة (118 دقيقة)", poster: "https://upload.wikimedia.org/wikipedia/en/2/2c/Ant-Man_and_the_Wasp_poster.jpg" },
            { id: "m27", title: "Captain Marvel", year: "2019", duration: "ساعتان و4 دقائق (124 دقيقة)", poster: "https://upload.wikimedia.org/wikipedia/en/4/4e/Captain_Marvel_poster.jpg" },
            { id: "m28", title: "Avengers: Endgame", year: "2019", duration: "ثلاث ساعات و1 دقيقة (181 دقيقة)", poster: "https://upload.wikimedia.org/wikipedia/en/0/0d/AVENGERS_ENDGAME.jpg" },
            { id: "m29", title: "Spider-Man: Far From Home", year: "2019", duration: "ساعتان و9 دقائق (129 دقيقة)", poster: "https://upload.wikimedia.org/wikipedia/en/b/bd/Spider-Man_Far_From_Home_poster.jpg" },
            { id: "venom2", title: "Venom: Let There Be Carnage", year: "2021", duration: "ساعة و37 دقيقة (97 دقيقة)", poster: "https://upload.wikimedia.org/wikipedia/en/8/8b/Venom_Let_There_Be_Carnage_poster.jpg" },
            { id: "m30", title: "Shang-Chi", year: "2021", duration: "ساعتان و12 دقيقة (132 دقيقة)", poster: "https://upload.wikimedia.org/wikipedia/en/7/74/Shang-Chi_and_the_Legend_of_the_Ten_Rings_poster.jpeg" },
            { id: "m31", title: "Eternals", year: "2021", duration: "ساعتان و36 دقيقة (156 دقيقة)", poster: "https://upload.wikimedia.org/wikipedia/en/9/9b/Eternals_poster.jpeg" },
            { id: "m32", title: "Spider-Man: No Way Home", year: "2021", duration: "ساعتان و28 دقيقة (148 دقيقة)", poster: "https://upload.wikimedia.org/wikipedia/en/0/00/Spider-Man_No_Way_Home_poster.jpg" },
            { id: "m33", title: "Doctor Strange in the Multiverse of Madness", year: "2022", duration: "ساعتان و6 دقائق (126 دقيقة)", poster: "https://upload.wikimedia.org/wikipedia/en/1/17/Doctor_Strange_in_the_Multiverse_of_Madness_poster.jpg" },
            { id: "m34", title: "Thor: Love and Thunder", year: "2022", duration: "ساعة و59 دقيقة (119 دقيقة)", poster: "https://upload.wikimedia.org/wikipedia/en/7/7f/Thor_Love_and_Thunder_poster.jpeg" },
            { id: "m35", title: "Black Panther: Wakanda Forever", year: "2022", duration: "ساعتان و41 دقيقة (161 دقيقة)", poster: "https://upload.wikimedia.org/wikipedia/en/3/3b/Black_Panther_Wakanda_Forever_poster.jpg" },
            { id: "m36", title: "Ant-Man and the Wasp: Quantumania", year: "2023", duration: "ساعتان و5 دقائق (125 دقيقة)", poster: "https://upload.wikimedia.org/wikipedia/en/3/31/Ant-Man_and_the_Wasp_Quantumania_poster.jpg" },
            { id: "m37", title: "Guardians of the Galaxy Vol. 3", year: "2023", duration: "ساعتان و30 دقيقة (150 دقيقة)", poster: "https://upload.wikimedia.org/wikipedia/en/7/74/Guardians_of_the_Galaxy_Vol._3_poster.jpg" },
            { id: "m38", title: "The Marvels", year: "2023", duration: "ساعة و45 دقيقة (105 دقيقة)", poster: "https://upload.wikimedia.org/wikipedia/en/3/34/The_Marvels_poster.jpg" },
            { id: "venom3", title: "Venom: The Last Dance", year: "2024", duration: "ساعة و50 دقيقة (110 دقيقة)", poster: "https://upload.wikimedia.org/wikipedia/en/b/b5/Venom_The_Last_Dance_poster.jpg" },
            { id: "m39", title: "Deadpool & Wolverine", year: "2024", duration: "ساعتان و8 دقائق (128 دقيقة)", poster: "https://upload.wikimedia.org/wikipedia/en/4/4c/Deadpool_%26_Wolverine_poster.jpg" },
            { id: "m40", title: "Captain America: Brave New World", year: "2025", duration: "ساعتان و0 دقيقة (120 دقيقة)", poster: "https://upload.wikimedia.org/wikipedia/en/e/e0/Captain_America_Brave_New_World_poster.jpg" },
            { id: "m41", title: "Thunderbolts*", year: "2025", duration: "ساعتان و10 دقائق (130 دقيقة)", poster: "https://upload.wikimedia.org/wikipedia/en/6/69/Thunderbolts_*_poster.jpg" },
            { id: "m42", title: "The Fantastic Four: First Steps", year: "2025", duration: "ساعتان و0 دقيقة (120 دقيقة)", poster: "https://upload.wikimedia.org/wikipedia/en/8/87/The_Fantastic_Four_First_Steps_poster.jpg" },
            { id: "m43", title: "Spider-Man: Brand New Day", year: "2026", duration: "ساعتان و20 دقيقة (140 دقيقة)", poster: "https://upload.wikimedia.org/wikipedia/en/0/00/Spider-Man_No_Way_Home_poster.jpg" },
            { id: "m44", title: "Avengers: Doomsday", year: "2026", duration: "ساعتان و30 دقيقة (150 دقيقة)", poster: "https://upload.wikimedia.org/wikipedia/en/0/0d/AVENGERS_ENDGAME.jpg" }
        ]
    },
    {
        name: "المسلسلات",
        items: [
            { id: "s1", title: "Daredevil – Season 1", year: "2015", duration: "13 حلقة (54 دقيقة لكل حلقة)", poster: "https://upload.wikimedia.org/wikipedia/en/1/1b/Daredevil_season_1_poster.jpg" },
            { id: "s2", title: "Jessica Jones – Season 1", year: "2015", duration: "13 حلقة (52 دقيقة لكل حلقة)", poster: "https://upload.wikimedia.org/wikipedia/en/0/0a/Jessica_Jones_season_1_poster.jpg" },
            { id: "s3", title: "Daredevil – Season 2", year: "2016", duration: "13 حلقة (53 دقيقة لكل حلقة)", poster: "https://upload.wikimedia.org/wikipedia/en/4/4b/Daredevil_season_2_poster.jpg" },
            { id: "s4", title: "Luke Cage – Season 1", year: "2016", duration: "13 حلقة (55 دقيقة لكل حلقة)", poster: "https://upload.wikimedia.org/wikipedia/en/1/14/Luke_Cage_season_1_poster.jpg" },
            { id: "s5", title: "Iron Fist – Season 1", year: "2017", duration: "13 حلقة (55 دقيقة لكل حلقة)", poster: "https://upload.wikimedia.org/wikipedia/en/c/c2/Iron_Fist_season_1_poster.jpg" },
            { id: "s6", title: "The Defenders", year: "2017", duration: "8 حلقات (50 دقيقة لكل حلقة)", poster: "https://upload.wikimedia.org/wikipedia/en/0/0b/The_Defenders_poster.jpg" },
            { id: "s7", title: "The Punisher – Season 1", year: "2017", duration: "13 حلقة (53 دقيقة لكل حلقة)", poster: "https://upload.wikimedia.org/wikipedia/en/a/a2/The_Punisher_season_1_poster.jpg" },
            { id: "s8", title: "Jessica Jones – Season 2", year: "2018", duration: "13 حلقة (52 دقيقة لكل حلقة)", poster: "https://upload.wikimedia.org/wikipedia/en/0/0a/Jessica_Jones_season_1_poster.jpg" },
            { id: "s9", title: "Luke Cage – Season 2", year: "2018", duration: "13 حلقة (55 دقيقة لكل حلقة)", poster: "https://upload.wikimedia.org/wikipedia/en/1/14/Luke_Cage_season_1_poster.jpg" },
            { id: "s10", title: "Iron Fist – Season 2", year: "2018", duration: "10 حلقات (52 دقيقة لكل حلقة)", poster: "https://upload.wikimedia.org/wikipedia/en/c/c2/Iron_Fist_season_1_poster.jpg" },
            { id: "s11", title: "Daredevil – Season 3", year: "2018", duration: "13 حلقة (50 دقيقة لكل حلقة)", poster: "https://upload.wikimedia.org/wikipedia/en/1/1b/Daredevil_season_1_poster.jpg" },
            { id: "s12", title: "The Punisher – Season 2", year: "2019", duration: "13 حلقة (51 دقيقة لكل حلقة)", poster: "https://upload.wikimedia.org/wikipedia/en/a/a2/The_Punisher_season_1_poster.jpg" },
            { id: "s13", title: "Jessica Jones – Season 3", year: "2019", duration: "13 حلقة (52 دقيقة لكل حلقة)", poster: "https://upload.wikimedia.org/wikipedia/en/0/0a/Jessica_Jones_season_1_poster.jpg" },
            { id: "s14", title: "WandaVision", year: "2021", duration: "9 حلقات (35 دقيقة لكل حلقة)", poster: "https://upload.wikimedia.org/wikipedia/en/1/15/WandaVision_poster.jpg" },
            { id: "s15", title: "The Falcon and the Winter Soldier", year: "2021", duration: "6 حلقات (50 دقيقة لكل حلقة)", poster: "https://upload.wikimedia.org/wikipedia/en/0/03/The_Falcon_and_the_Winter_Soldier_poster.jpg" },
            { id: "s16", title: "Loki – Season 1", year: "2021", duration: "6 حلقات (52 دقيقة لكل حلقة)", poster: "https://upload.wikimedia.org/wikipedia/en/c/c3/Loki_season_1_poster.jpg" },
            { id: "s17", title: "What If...? – Season 1", year: "2021", duration: "9 حلقات (32 دقيقة لكل حلقة)", poster: "https://upload.wikimedia.org/wikipedia/en/2/23/What_If...%3F_season_1_poster.jpg" },
            { id: "s18", title: "Hawkeye", year: "2021", duration: "6 حلقات (45 دقيقة لكل حلقة)", poster: "https://upload.wikimedia.org/wikipedia/en/0/01/Hawkeye_poster.jpg" },
            { id: "s19", title: "Moon Knight", year: "2022", duration: "6 حلقات (47 دقيقة لكل حلقة)", poster: "https://upload.wikimedia.org/wikipedia/en/3/30/Moon_Knight_poster.jpg" },
            { id: "s20", title: "Ms. Marvel", year: "2022", duration: "6 حلقات (50 دقيقة لكل حلقة)", poster: "https://upload.wikimedia.org/wikipedia/en/0/0e/Ms._Marvel_poster.jpg" },
            { id: "s21", title: "I Am Groot", year: "2022", duration: "5 حلقات (4 دقائق لكل حلقة)", poster: "https://upload.wikimedia.org/wikipedia/en/b/b3/I_Am_Groot_poster.jpg" },
            { id: "s22", title: "She-Hulk: Attorney at Law", year: "2022", duration: "9 حلقات (30 دقيقة لكل حلقة)", poster: "https://upload.wikimedia.org/wikipedia/en/0/09/She-Hulk_Attorney_at_Law_poster.jpg" },
            { id: "s23", title: "Werewolf by Night", year: "2022", duration: "حلقة خاصة واحدة (53 دقيقة)", poster: "https://upload.wikimedia.org/wikipedia/en/3/39/Werewolf_by_Night_poster.jpg" },
            { id: "s24", title: "The Guardians Holiday Special", year: "2022", duration: "حلقة خاصة واحدة (44 دقيقة)", poster: "https://upload.wikimedia.org/wikipedia/en/e/eb/The_Guardians_of_the_Galaxy_Holiday_Special_poster.jpg" },
            { id: "s25", title: "Secret Invasion", year: "2023", duration: "6 حلقات (54 دقيقة لكل حلقة)", poster: "https://upload.wikimedia.org/wikipedia/en/1/12/Secret_Invasion_poster.jpg" },
            { id: "s26", title: "Loki – Season 2", year: "2023", duration: "6 حلقات (50 دقيقة لكل حلقة)", poster: "https://upload.wikimedia.org/wikipedia/en/e/e8/Loki_season_2_poster.jpg" },
            { id: "s27", title: "Echo", year: "2024", duration: "5 حلقات (48 دقيقة لكل حلقة)", poster: "https://upload.wikimedia.org/wikipedia/en/1/13/Echo_poster.jpg" },
            { id: "s28", title: "Agatha All Along", year: "2024", duration: "9 حلقات (40 دقيقة لكل حلقة)", poster: "https://upload.wikimedia.org/wikipedia/en/f/f6/Agatha_All_Along_poster.jpg" },
            { id: "s29", title: "Daredevil: Born Again", year: "2025", duration: "9 حلقات (50 دقيقة لكل حلقة)", poster: "https://upload.wikimedia.org/wikipedia/en/1/1b/Daredevil_season_1_poster.jpg" },
            { id: "s30", title: "Ironheart", year: "2025", duration: "6 حلقات (45 دقيقة لكل حلقة)", poster: "https://upload.wikimedia.org/wikipedia/en/1/12/Secret_Invasion_poster.jpg" },
            { id: "s31", title: "The Punisher - Special", year: "2026", duration: "حلقة خاصة (60 دقيقة)", poster: "https://upload.wikimedia.org/wikipedia/en/a/a2/The_Punisher_season_1_poster.jpg" },
            { id: "s32", title: "Wonder Man", year: "2026", duration: "8 حلقات (45 دقيقة لكل حلقة)", poster: "https://upload.wikimedia.org/wikipedia/en/0/0e/Ms._Marvel_poster.jpg" }
        ]
    },
    {
        name: "الأكس مين",
        items: [
            { id: "x1", title: "X-Men", year: "2000", duration: "ساعة و44 دقيقة (104 دقيقة)", poster: "https://upload.wikimedia.org/wikipedia/en/8/81/X-Men_film_poster.jpg" },
            { id: "x2", title: "X2: X-Men United", year: "2003", duration: "ساعتان و13 دقيقة (133 دقيقة)", poster: "https://upload.wikimedia.org/wikipedia/en/3/38/X2_poster.jpg" },
            { id: "x3", title: "X-Men: The Last Stand", year: "2006", duration: "ساعة و44 دقيقة (104 دقيقة)", poster: "https://upload.wikimedia.org/wikipedia/en/5/5a/X-Men_The_Last_Stand_poster.jpg" },
            { id: "x4", title: "X-Men Origins: Wolverine", year: "2009", duration: "ساعة و47 دقيقة (107 دقيقة)", poster: "https://upload.wikimedia.org/wikipedia/en/3/30/X-Men_Origins_Wolverine_poster.jpg" },
            { id: "x5", title: "X-Men: First Class", year: "2011", duration: "ساعتان و12 دقيقة (132 دقيقة)", poster: "https://upload.wikimedia.org/wikipedia/en/5/55/X-Men_First_Class_poster.jpg" },
            { id: "x6", title: "The Wolverine", year: "2013", duration: "ساعتان و6 دقائق (126 دقيقة)", poster: "https://upload.wikimedia.org/wikipedia/en/7/74/The_Wolverine_poster.jpg" },
            { id: "x7", title: "X-Men: Days of Future Past", year: "2014", duration: "ساعتان و11 دقيقة (131 دقيقة)", poster: "https://upload.wikimedia.org/wikipedia/en/0/0c/X-Men_Days_of_Future_Past_poster.jpg" },
            { id: "x8", title: "Deadpool", year: "2016", duration: "ساعة و48 دقيقة (108 دقيقة)", poster: "https://upload.wikimedia.org/wikipedia/en/2/23/Deadpool_%282016_poster%29.png" },
            { id: "x9", title: "X-Men: Apocalypse", year: "2016", duration: "ساعتان و24 دقيقة (144 دقيقة)", poster: "https://upload.wikimedia.org/wikipedia/en/0/04/X-Men_-_Apocalypse.jpg" },
            { id: "x10", title: "Logan", year: "2017", duration: "ساعتان و17 دقيقة (137 دقيقة)", poster: "https://upload.wikimedia.org/wikipedia/en/3/37/Logan_2017_poster.jpg" },
            { id: "x11", title: "Deadpool 2", year: "2018", duration: "ساعة و59 دقيقة (119 دقيقة)", poster: "https://upload.wikimedia.org/wikipedia/en/c/cf/Deadpool_2_poster.jpg" },
            { id: "x12", title: "Dark Phoenix", year: "2019", duration: "ساعة و53 دقيقة (113 دقيقة)", poster: "https://upload.wikimedia.org/wikipedia/en/2/2c/Dark_Phoenix_poster.jpg" },
            { id: "x13", title: "The New Mutants", year: "2020", duration: "ساعة و34 دقيقة (94 دقيقة)", poster: "https://upload.wikimedia.org/wikipedia/en/f/f8/The_New_Mutants_poster.jpg" },
            { id: "x14", title: "X-Men '97", year: "2024", duration: "10 حلقات (32 دقيقة لكل حلقة)", poster: "https://upload.wikimedia.org/wikipedia/en/b/b3/X-Men_%2797_poster.jpg" },
            { id: "x15", title: "Deadpool & Wolverine", year: "2024", duration: "ساعتان و8 دقائق (128 دقيقة)", poster: "https://upload.wikimedia.org/wikipedia/en/4/4c/Deadpool_%26_Wolverine_poster.jpg" }
        ]
    },
    {
        name: "الفانتاستك فور",
        items: [
            { id: "f1", title: "Fantastic Four", year: "2005", duration: "ساعة و46 دقيقة (106 دقيقة)", poster: "https://upload.wikimedia.org/wikipedia/en/c/c4/Fantastic_Four_%282005_film_poster%29.jpg" },
            { id: "f2", title: "Fantastic Four: Rise of the Silver Surfer", year: "2007", duration: "ساعة و32 دقيقة (92 دقيقة)", poster: "https://upload.wikimedia.org/wikipedia/en/1/12/Fantastic_Four_Rise_of_the_Silver_Surfer_poster.jpg" },
            { id: "f3", title: "Fantastic Four", year: "2015", duration: "ساعة و40 دقيقة (100 دقيقة)", poster: "https://upload.wikimedia.org/wikipedia/en/2/2d/Fantastic_Four_%282015_film_poster%29.jpg" },
            { id: "f4", title: "The Fantastic Four: First Steps", year: "2025", duration: "ساعتان و0 دقيقة (120 دقيقة)", poster: "https://upload.wikimedia.org/wikipedia/en/8/87/The_Fantastic_Four_First_Steps_poster.jpg" }
        ]
    }
];

let watchedList = JSON.parse(localStorage.getItem('marvel_watched_v6')) || {};
let imagesList = JSON.parse(localStorage.getItem('marvel_images_v6')) || {};

let activeTab = 0;
let currentFilter = 'all';
let searchQuery = '';

const grid = document.getElementById('moviesGrid');
const audioCtx = new (window.AudioContext || window.webkitAudioContext)();

function playSound(type) {
    if (audioCtx.state === 'suspended') {
        audioCtx.resume();
    }
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.connect(gain);
    gain.connect(audioCtx.destination);

    if (type === 'tab') {
        osc.frequency.setValueAtTime(350, audioCtx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(600, audioCtx.currentTime + 0.1);
        gain.gain.setValueAtTime(0.2, audioCtx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.1);
        osc.start();
        osc.stop(audioCtx.currentTime + 0.1);
    } else if (type === 'toggle') {
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(500, audioCtx.currentTime);
        osc.frequency.setValueAtTime(850, audioCtx.currentTime + 0.08);
        gain.gain.setValueAtTime(0.25, audioCtx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.15);
        osc.start();
        osc.stop(audioCtx.currentTime + 0.15);
    } else if (type === 'focus') {
        osc.frequency.setValueAtTime(400, audioCtx.currentTime);
        gain.gain.setValueAtTime(0.15, audioCtx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.08);
        osc.start();
        osc.stop(audioCtx.currentTime + 0.08);
    }
}

document.addEventListener('click', () => {
    if (audioCtx.state === 'suspended') {
        audioCtx.resume();
    }
}, { once: true });

function init() {
    render();
}

function changeTab(newTabIndex) {
    if (activeTab === newTabIndex) return;
    playSound('tab');

    grid.classList.add('fade-out');

    setTimeout(() => {
        activeTab = newTabIndex;
        render();
        grid.classList.remove('fade-out');
        grid.classList.add('fade-in');

        setTimeout(() => grid.classList.remove('fade-in'), 200);
    }, 150);
}

function render() {
    grid.innerHTML = '';
    grid.classList.remove('has-focus');
    
    const currentCategory = marvelCategories[activeTab];
    let catWatchedCount = 0;
    let catTotalCount = currentCategory.items.length;

    currentCategory.items.forEach((item, index) => {
        const isWatched = !!watchedList[item.id];
        if (isWatched) catWatchedCount++;

        const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesFilter = 
            currentFilter === 'all' ||
            (currentFilter === 'watched' && isWatched) ||
            (currentFilter === 'unwatched' && !isWatched);

        if (!matchesSearch || !matchesFilter) return;

        const card = document.createElement('div');
        card.className = `card ${isWatched ? 'watched' : ''}`;

        const posterSrc = imagesList[item.id] || item.poster;

        card.innerHTML = `
            <div class="poster-box">
                <img class="poster-img" src="${posterSrc}" alt="${item.title}" loading="lazy" onerror="this.onerror=null; this.src='https://via.placeholder.com/300x450/020617/ffffff?text=Marvel';">
            </div>
            <div class="card-details">
                <div>
                    <div class="card-meta">
                        <span class="order-tag">#${index + 1}</span>
                        <span>${item.year}</span>
                    </div>
                    <div class="title">${item.title}</div>
                    <div class="duration-info" style="font-size: 0.85rem; color: #38bdf8; margin-top: 4px; font-weight: bold;">⏱ ${item.duration}</div>
                </div>
                
                <label class="upload-btn-label" onclick="event.stopPropagation();">
                    📷 رفع صورة
                    <input type="file" class="upload-input-file" accept="image/*" onchange="uploadImage(event, '${item.id}')">
                </label>

                <button class="watch-btn" onclick="event.stopPropagation(); toggleWatch('${item.id}')">
                    ${isWatched ? '✔ تم المشاهدة' : 'لم أشاهده'}
                </button>
            </div>
        `;

        card.addEventListener('click', () => {
            playSound('focus');
            const isAlreadyFocused = card.classList.contains('focused');
            
            document.querySelectorAll('.card').forEach(c => c.classList.remove('focused'));
            
            if (!isAlreadyFocused) {
                card.classList.add('focused');
                grid.classList.add('has-focus');
            } else {
                grid.classList.remove('has-focus');
            }
        });

        grid.appendChild(card);
    });

    const percent = catTotalCount > 0 ? Math.round((catWatchedCount / catTotalCount) * 100) : 0;
    document.getElementById('counterText').innerText = `شاهدت ${catWatchedCount} من أصل ${catTotalCount} في هذا القسم`;
    document.getElementById('percentText').innerText = `${percent}%`;
    document.getElementById('progressBar').style.width = `${percent}%`;
}

document.addEventListener('click', (e) => {
    if (!e.target.closest('.card')) {
        document.querySelectorAll('.card').forEach(c => c.classList.remove('focused'));
        grid.classList.remove('has-focus');
    }
});

function uploadImage(event, itemId) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function(e) {
        const img = new Image();
        img.onload = function() {
            const canvas = document.createElement('canvas');
            canvas.width = 300;
            canvas.height = 450;
            const ctx = canvas.getContext('2d');
            ctx.drawImage(img, 0, 0, 300, 450);

            const compressedBase64 = canvas.toDataURL('image/webp', 0.7);

            try {
                imagesList[itemId] = compressedBase64;
                localStorage.setItem('marvel_images_v6', JSON.stringify(imagesList));
                render();
            } catch (err) {
                alert("الذاكرة مليئة جداً.");
            }
        };
        img.src = e.target.result;
    };
    reader.readAsDataURL(file);
}

function toggleWatch(itemId) {
    playSound('toggle');
    watchedList[itemId] = !watchedList[itemId];
    localStorage.setItem('marvel_watched_v6', JSON.stringify(watchedList));
    render();
}

document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
        e.target.classList.add('active');
        const nextTab = parseInt(e.target.getAttribute('data-tab'));
        changeTab(nextTab);
    });
});

document.getElementById('searchInput').addEventListener('input', (e) => {
    searchQuery = e.target.value;
    render();
});

document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        playSound('tab');
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        e.target.classList.add('active');
        currentFilter = e.target.getAttribute('data-filter');
        render();
    });
});

init();
