const marvelCategories = [
    {
        name: "MCU",
        items: [
            { id: "m1", title: "Spider-Man", year: "2002", duration: "ساعتان و1 دقيقة (121 دقيقة)", poster: "https://images.unsplash.com/photo-1635805737707-575885ab0820?w=300&auto=format&fit=crop&q=80" },
            { id: "m2", title: "Spider-Man 2", year: "2004", duration: "ساعتان و7 دقائق (127 دقيقة)", poster: "https://images.unsplash.com/photo-1635805737707-575885ab0820?w=300&auto=format&fit=crop&q=80" },
            { id: "m3", title: "Spider-Man 3", year: "2007", duration: "ساعتان و36 دقيقة (156 دقيقة)", poster: "https://images.unsplash.com/photo-1635805737707-575885ab0820?w=300&auto=format&fit=crop&q=80" },
            { id: "m4", title: "Iron Man", year: "2008", duration: "ساعتان و6 دقائق (126 دقيقة)", poster: "https://images.unsplash.com/photo-1635805737707-575885ab0820?w=300&auto=format&fit=crop&q=80" },
            { id: "m5", title: "The Incredible Hulk", year: "2008", duration: "ساعة و52 دقيقة (112 دقيقة)", poster: "https://images.unsplash.com/photo-1635805737707-575885ab0820?w=300&auto=format&fit=crop&q=80" },
            { id: "m6", title: "Iron Man 2", year: "2010", duration: "ساعتان و4 دقائق (124 دقيقة)", poster: "https://images.unsplash.com/photo-1635805737707-575885ab0820?w=300&auto=format&fit=crop&q=80" },
            { id: "m7", title: "Thor", year: "2011", duration: "ساعة و55 دقيقة (115 دقيقة)", poster: "https://images.unsplash.com/photo-1635805737707-575885ab0820?w=300&auto=format&fit=crop&q=80" },
            { id: "m8", title: "Captain America: The First Avenger", year: "2011", duration: "ساعتان و4 دقائق (124 دقيقة)", poster: "https://images.unsplash.com/photo-1635805737707-575885ab0820?w=300&auto=format&fit=crop&q=80" },
            { id: "m9", title: "The Avengers", year: "2012", duration: "ساعتان و23 دقيقة (143 دقيقة)", poster: "https://images.unsplash.com/photo-1635805737707-575885ab0820?w=300&auto=format&fit=crop&q=80" },
            { id: "m10", title: "The Amazing Spider-Man", year: "2012", duration: "ساعتان و16 دقيقة (136 دقيقة)", poster: "https://images.unsplash.com/photo-1635805737707-575885ab0820?w=300&auto=format&fit=crop&q=80" },
            { id: "m11", title: "The Amazing Spider-Man 2", year: "2014", duration: "ساعتان و22 دقيقة (142 دقيقة)", poster: "https://images.unsplash.com/photo-1635805737707-575885ab0820?w=300&auto=format&fit=crop&q=80" },
            { id: "m12", title: "Iron Man 3", year: "2013", duration: "ساعتان و10 دقائق (130 دقيقة)", poster: "https://images.unsplash.com/photo-1635805737707-575885ab0820?w=300&auto=format&fit=crop&q=80" },
            { id: "m13", title: "Thor: The Dark World", year: "2013", duration: "ساعة و52 دقيقة (112 دقيقة)", poster: "https://images.unsplash.com/photo-1635805737707-575885ab0820?w=300&auto=format&fit=crop&q=80" },
            { id: "m14", title: "Captain America: The Winter Soldier", year: "2014", duration: "ساعتان و16 دقيقة (136 دقيقة)", poster: "https://images.unsplash.com/photo-1635805737707-575885ab0820?w=300&auto=format&fit=crop&q=80" },
            { id: "m15", title: "Guardians of the Galaxy", year: "2014", duration: "ساعتان و1 دقيقة (121 دقيقة)", poster: "https://images.unsplash.com/photo-1635805737707-575885ab0820?w=300&auto=format&fit=crop&q=80" },
            { id: "m16", title: "Avengers: Age of Ultron", year: "2015", duration: "ساعتان و21 دقيقة (141 دقيقة)", poster: "https://images.unsplash.com/photo-1635805737707-575885ab0820?w=300&auto=format&fit=crop&q=80" },
            { id: "m17", title: "Ant-Man", year: "2015", duration: "ساعة و57 دقيقة (117 دقيقة)", poster: "https://images.unsplash.com/photo-1635805737707-575885ab0820?w=300&auto=format&fit=crop&q=80" },
            { id: "m18", title: "Captain America: Civil War", year: "2016", duration: "ساعتان و27 دقيقة (147 دقيقة)", poster: "https://images.unsplash.com/photo-1635805737707-575885ab0820?w=300&auto=format&fit=crop&q=80" },
            { id: "m19", title: "Black Widow", year: "2021", duration: "ساعتان و14 دقيقة (134 دقيقة)", poster: "https://images.unsplash.com/photo-1635805737707-575885ab0820?w=300&auto=format&fit=crop&q=80" },
            { id: "m20", title: "Doctor Strange", year: "2016", duration: "ساعة و55 دقيقة (115 دقيقة)", poster: "https://images.unsplash.com/photo-1635805737707-575885ab0820?w=300&auto=format&fit=crop&q=80" },
            { id: "m21", title: "Guardians of the Galaxy Vol. 2", year: "2017", duration: "ساعتان و16 دقيقة (136 دقيقة)", poster: "https://images.unsplash.com/photo-1635805737707-575885ab0820?w=300&auto=format&fit=crop&q=80" },
            { id: "m22", title: "Spider-Man: Homecoming", year: "2017", duration: "ساعتان و13 دقيقة (133 دقيقة)", poster: "https://images.unsplash.com/photo-1635805737707-575885ab0820?w=300&auto=format&fit=crop&q=80" },
            { id: "m23", title: "Thor: Ragnarok", year: "2017", duration: "ساعتان و10 دقائق (130 دقيقة)", poster: "https://images.unsplash.com/photo-1635805737707-575885ab0820?w=300&auto=format&fit=crop&q=80" },
            { id: "m24", title: "Black Panther", year: "2018", duration: "ساعتان و14 دقيقة (134 دقيقة)", poster: "https://images.unsplash.com/photo-1635805737707-575885ab0820?w=300&auto=format&fit=crop&q=80" },
            { id: "venom1", title: "Venom", year: "2018", duration: "ساعة و52 دقيقة (112 دقيقة)", poster: "https://images.unsplash.com/photo-1635805737707-575885ab0820?w=300&auto=format&fit=crop&q=80" },
            { id: "m25", title: "Avengers: Infinity War", year: "2018", duration: "ساعتان و29 دقيقة (149 دقيقة)", poster: "https://images.unsplash.com/photo-1635805737707-575885ab0820?w=300&auto=format&fit=crop&q=80" },
            { id: "m26", title: "Ant-Man and the Wasp", year: "2018", duration: "ساعة و58 دقيقة (118 دقيقة)", poster: "https://images.unsplash.com/photo-1635805737707-575885ab0820?w=300&auto=format&fit=crop&q=80" },
            { id: "m27", title: "Captain Marvel", year: "2019", duration: "ساعتان و4 دقائق (124 دقيقة)", poster: "https://images.unsplash.com/photo-1635805737707-575885ab0820?w=300&auto=format&fit=crop&q=80" },
            { id: "m28", title: "Avengers: Endgame", year: "2019", duration: "ثلاث ساعات و1 دقيقة (181 دقيقة)", poster: "https://images.unsplash.com/photo-1635805737707-575885ab0820?w=300&auto=format&fit=crop&q=80" },
            { id: "m29", title: "Spider-Man: Far From Home", year: "2019", duration: "ساعتان و9 دقائق (129 دقيقة)", poster: "https://images.unsplash.com/photo-1635805737707-575885ab0820?w=300&auto=format&fit=crop&q=80" },
            { id: "venom2", title: "Venom: Let There Be Carnage", year: "2021", duration: "ساعة و37 دقيقة (97 دقيقة)", poster: "https://images.unsplash.com/photo-1635805737707-575885ab0820?w=300&auto=format&fit=crop&q=80" },
            { id: "m30", title: "Shang-Chi", year: "2021", duration: "ساعتان و12 دقيقة (132 دقيقة)", poster: "https://images.unsplash.com/photo-1635805737707-575885ab0820?w=300&auto=format&fit=crop&q=80" },
            { id: "m31", title: "Eternals", year: "2021", duration: "ساعتان و36 دقيقة (156 دقيقة)", poster: "https://images.unsplash.com/photo-1635805737707-575885ab0820?w=300&auto=format&fit=crop&q=80" },
            { id: "m32", title: "Spider-Man: No Way Home", year: "2021", duration: "ساعتان و28 دقيقة (148 دقيقة)", poster: "https://images.unsplash.com/photo-1635805737707-575885ab0820?w=300&auto=format&fit=crop&q=80" },
            { id: "m33", title: "Doctor Strange in the Multiverse of Madness", year: "2022", duration: "ساعتان و6 دقائق (126 دقيقة)", poster: "https://images.unsplash.com/photo-1635805737707-575885ab0820?w=300&auto=format&fit=crop&q=80" },
            { id: "m34", title: "Thor: Love and Thunder", year: "2022", duration: "ساعة و59 دقيقة (119 دقيقة)", poster: "https://images.unsplash.com/photo-1635805737707-575885ab0820?w=300&auto=format&fit=crop&q=80" },
            { id: "m35", title: "Black Panther: Wakanda Forever", year: "2022", duration: "ساعتان و41 دقيقة (161 دقيقة)", poster: "https://images.unsplash.com/photo-1635805737707-575885ab0820?w=300&auto=format&fit=crop&q=80" },
            { id: "m36", title: "Ant-Man and the Wasp: Quantumania", year: "2023", duration: "ساعتان و5 دقائق (125 دقيقة)", poster: "https://images.unsplash.com/photo-1635805737707-575885ab0820?w=300&auto=format&fit=crop&q=80" },
            { id: "m37", title: "Guardians of the Galaxy Vol. 3", year: "2023", duration: "ساعتان و30 دقيقة (150 دقيقة)", poster: "https://images.unsplash.com/photo-1635805737707-575885ab0820?w=300&auto=format&fit=crop&q=80" },
            { id: "m38", title: "The Marvels", year: "2023", duration: "ساعة و45 دقيقة (105 دقيقة)", poster: "https://images.unsplash.com/photo-1635805737707-575885ab0820?w=300&auto=format&fit=crop&q=80" },
            { id: "venom3", title: "Venom: The Last Dance", year: "2024", duration: "ساعة و50 دقيقة (110 دقيقة)", poster: "https://images.unsplash.com/photo-1635805737707-575885ab0820?w=300&auto=format&fit=crop&q=80" },
            { id: "m39", title: "Deadpool & Wolverine", year: "2024", duration: "ساعتان و8 دقائق (128 دقيقة)", poster: "https://images.unsplash.com/photo-1635805737707-575885ab0820?w=300&auto=format&fit=crop&q=80" },
            { id: "m40", title: "Captain America: Brave New World", year: "2025", duration: "ساعتان و0 دقيقة (120 دقيقة)", poster: "https://images.unsplash.com/photo-1635805737707-575885ab0820?w=300&auto=format&fit=crop&q=80" },
            { id: "m41", title: "Thunderbolts*", year: "2025", duration: "ساعتان و10 دقائق (130 دقيقة)", poster: "https://images.unsplash.com/photo-1635805737707-575885ab0820?w=300&auto=format&fit=crop&q=80" },
            { id: "m42", title: "The Fantastic Four: First Steps", year: "2025", duration: "ساعتان و0 دقيقة (120 دقيقة)", poster: "https://images.unsplash.com/photo-1635805737707-575885ab0820?w=300&auto=format&fit=crop&q=80" },
            { id: "m43", title: "Spider-Man: Brand New Day", year: "2026", duration: "ساعتان و20 دقيقة (140 دقيقة)", poster: "https://images.unsplash.com/photo-1635805737707-575885ab0820?w=300&auto=format&fit=crop&q=80" },
            { id: "m44", title: "Avengers: Doomsday", year: "2026", duration: "ساعتان و30 دقيقة (150 دقيقة)", poster: "https://images.unsplash.com/photo-1635805737707-575885ab0820?w=300&auto=format&fit=crop&q=80" }
        ]
    },
    {
        name: "المسلسلات",
        items: [
            { id: "s1", title: "Daredevil – Season 1", year: "2015", duration: "13 حلقة (54 دقيقة لكل حلقة)", poster: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=300&auto=format&fit=crop&q=80" },
            { id: "s2", title: "Jessica Jones – Season 1", year: "2015", duration: "13 حلقة (52 دقيقة لكل حلقة)", poster: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=300&auto=format&fit=crop&q=80" },
            { id: "s3", title: "Daredevil – Season 2", year: "2016", duration: "13 حلقة (53 دقيقة لكل حلقة)", poster: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=300&auto=format&fit=crop&q=80" },
            { id: "s4", title: "Luke Cage – Season 1", year: "2016", duration: "13 حلقة (55 دقيقة لكل حلقة)", poster: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=300&auto=format&fit=crop&q=80" },
            { id: "s5", title: "Iron Fist – Season 1", year: "2017", duration: "13 حلقة (55 دقيقة لكل حلقة)", poster: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=300&auto=format&fit=crop&q=80" },
            { id: "s6", title: "The Defenders", year: "2017", duration: "8 حلقات (50 دقيقة لكل حلقة)", poster: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=300&auto=format&fit=crop&q=80" },
            { id: "s7", title: "The Punisher – Season 1", year: "2017", duration: "13 حلقة (53 دقيقة لكل حلقة)", poster: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=300&auto=format&fit=crop&q=80" },
            { id: "s8", title: "Jessica Jones – Season 2", year: "2018", duration: "13 حلقة (52 دقيقة لكل حلقة)", poster: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=300&auto=format&fit=crop&q=80" },
            { id: "s9", title: "Luke Cage – Season 2", year: "2018", duration: "13 حلقة (55 دقيقة لكل حلقة)", poster: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=300&auto=format&fit=crop&q=80" },
            { id: "s10", title: "Iron Fist – Season 2", year: "2018", duration: "10 حلقات (52 دقيقة لكل حلقة)", poster: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=300&auto=format&fit=crop&q=80" },
            { id: "s11", title: "Daredevil – Season 3", year: "2018", duration: "13 حلقة (50 دقيقة لكل حلقة)", poster: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=300&auto=format&fit=crop&q=80" },
            { id: "s12", title: "The Punisher – Season 2", year: "2019", duration: "13 حلقة (51 دقيقة لكل حلقة)", poster: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=300&auto=format&fit=crop&q=80" },
            { id: "s13", title: "Jessica Jones – Season 3", year: "2019", duration: "13 حلقة (52 دقيقة لكل حلقة)", poster: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=300&auto=format&fit=crop&q=80" },
            { id: "s14", title: "WandaVision", year: "2021", duration: "9 حلقات (35 دقيقة لكل حلقة)", poster: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=300&auto=format&fit=crop&q=80" },
            { id: "s15", title: "The Falcon and the Winter Soldier", year: "2021", duration: "6 حلقات (50 دقيقة لكل حلقة)", poster: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=300&auto=format&fit=crop&q=80" },
            { id: "s16", title: "Loki – Season 1", year: "2021", duration: "6 حلقات (52 دقيقة لكل حلقة)", poster: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=300&auto=format&fit=crop&q=80" },
            { id: "s17", title: "What If...? – Season 1", year: "2021", duration: "9 حلقات (32 دقيقة لكل حلقة)", poster: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=300&auto=format&fit=crop&q=80" },
            { id: "s18", title: "Hawkeye", year: "2021", duration: "6 حلقات (45 دقيقة لكل حلقة)", poster: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=300&auto=format&fit=crop&q=80" },
            { id: "s19", title: "Moon Knight", year: "2022", duration: "6 حلقات (47 دقيقة لكل حلقة)", poster: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=300&auto=format&fit=crop&q=80" },
            { id: "s20", title: "Ms. Marvel", year: "2022", duration: "6 حلقات (50 دقيقة لكل حلقة)", poster: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=300&auto=format&fit=crop&q=80" },
            { id: "s21", title: "I Am Groot", year: "2022", duration: "5 حلقات (4 دقائق لكل حلقة)", poster: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=300&auto=format&fit=crop&q=80" },
            { id: "s22", title: "She-Hulk: Attorney at Law", year: "2022", duration: "9 حلقات (30 دقيقة لكل حلقة)", poster: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=300&auto=format&fit=crop&q=80" },
            { id: "s23", title: "Werewolf by Night", year: "2022", duration: "حلقة خاصة واحدة (53 دقيقة)", poster: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=300&auto=format&fit=crop&q=80" },
            { id: "s24", title: "The Guardians Holiday Special", year: "2022", duration: "حلقة خاصة واحدة (44 دقيقة)", poster: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=300&auto=format&fit=crop&q=80" },
            { id: "s25", title: "Secret Invasion", year: "2023", duration: "6 حلقات (54 دقيقة لكل حلقة)", poster: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=300&auto=format&fit=crop&q=80" },
            { id: "s26", title: "Loki – Season 2", year: "2023", duration: "6 حلقات (50 دقيقة لكل حلقة)", poster: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=300&auto=format&fit=crop&q=80" },
            { id: "s27", title: "Echo", year: "2024", duration: "5 حلقات (48 دقيقة لكل حلقة)", poster: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=300&auto=format&fit=crop&q=80" },
            { id: "s28", title: "Agatha All Along", year: "2024", duration: "9 حلقات (40 دقيقة لكل حلقة)", poster: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=300&auto=format&fit=crop&q=80" },
            { id: "s29", title: "Daredevil: Born Again", year: "2025", duration: "9 حلقات (50 دقيقة لكل حلقة)", poster: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=300&auto=format&fit=crop&q=80" },
            { id: "s30", title: "Ironheart", year: "2025", duration: "6 حلقات (45 دقيقة لكل حلقة)", poster: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=300&auto=format&fit=crop&q=80" },
            { id: "s31", title: "The Punisher - Special", year: "2026", duration: "حلقة خاصة (60 دقيقة)", poster: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=300&auto=format&fit=crop&q=80" },
            { id: "s32", title: "Wonder Man", year: "2026", duration: "8 حلقات (45 دقيقة لكل حلقة)", poster: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=300&auto=format&fit=crop&q=80" }
        ]
    },
    {
        name: "الأكس مين",
        items: [
            { id: "x1", title: "X-Men", year: "2000", duration: "ساعة و44 دقيقة (104 دقيقة)", poster: "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=300&auto=format&fit=crop&q=80" },
            { id: "x2", title: "X2: X-Men United", year: "2003", duration: "ساعتان و13 دقيقة (133 دقيقة)", poster: "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=300&auto=format&fit=crop&q=80" },
            { id: "x3", title: "X-Men: The Last Stand", year: "2006", duration: "ساعة و44 دقيقة (104 دقيقة)", poster: "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=300&auto=format&fit=crop&q=80" },
            { id: "x4", title: "X-Men Origins: Wolverine", year: "2009", duration: "ساعة و47 دقيقة (107 دقيقة)", poster: "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=300&auto=format&fit=crop&q=80" },
            { id: "x5", title: "X-Men: First Class", year: "2011", duration: "ساعتان و12 دقيقة (132 دقيقة)", poster: "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=300&auto=format&fit=crop&q=80" },
            { id: "x6", title: "The Wolverine", year: "2013", duration: "ساعتان و6 دقائق (126 دقيقة)", poster: "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=300&auto=format&fit=crop&q=80" },
            { id: "x7", title: "X-Men: Days of Future Past", year: "2014", duration: "ساعتان و11 دقيقة (131 دقيقة)", poster: "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=300&auto=format&fit=crop&q=80" },
            { id: "x8", title: "Deadpool", year: "2016", duration: "ساعة و48 دقيقة (108 دقيقة)", poster: "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=300&auto=format&fit=crop&q=80" },
            { id: "x9", title: "X-Men: Apocalypse", year: "2016", duration: "ساعتان و24 دقيقة (144 دقيقة)", poster: "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=300&auto=format&fit=crop&q=80" },
            { id: "x10", title: "Logan", year: "2017", duration: "ساعتان و17 دقيقة (137 دقيقة)", poster: "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=300&auto=format&fit=crop&q=80" },
            { id: "x11", title: "Deadpool 2", year: "2018", duration: "ساعة و59 دقيقة (119 دقيقة)", poster: "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=300&auto=format&fit=crop&q=80" },
            { id: "x12", title: "Dark Phoenix", year: "2019", duration: "ساعة و53 دقيقة (113 دقيقة)", poster: "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=300&auto=format&fit=crop&q=80" },
            { id: "x13", title: "The New Mutants", year: "2020", duration: "ساعة و34 دقيقة (94 دقيقة)", poster: "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=300&auto=format&fit=crop&q=80" },
            { id: "x14", title: "X-Men '97", year: "2024", duration: "10 حلقات (32 دقيقة لكل حلقة)", poster: "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=300&auto=format&fit=crop&q=80" },
            { id: "x15", title: "Deadpool & Wolverine", year: "2024", duration: "ساعتان و8 دقائق (128 دقيقة)", poster: "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=300&auto=format&fit=crop&q=80" }
        ]
    },
    {
        name: "الفانتاستك فور",
        items: [
            { id: "f1", title: "Fantastic Four", year: "2005", duration: "ساعة و46 دقيقة (106 دقيقة)", poster: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=300&auto=format&fit=crop&q=80" },
            { id: "f2", title: "Fantastic Four: Rise of the Silver Surfer", year: "2007", duration: "ساعة و32 دقيقة (92 دقيقة)", poster: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=300&auto=format&fit=crop&q=80" },
            { id: "f3", title: "Fantastic Four", year: "2015", duration: "ساعة و40 دقيقة (100 دقيقة)", poster: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=300&auto=format&fit=crop&q=80" },
            { id: "f4", title: "The Fantastic Four: First Steps", year: "2025", duration: "ساعتان و0 دقيقة (120 دقيقة)", poster: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=300&auto=format&fit=crop&q=80" }
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
