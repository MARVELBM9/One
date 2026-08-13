const marvelCategories = [
    {
        name: "MCU",
        items: [
            { id: "m1", title: "Spider-Man", year: "2002", duration: "ساعتان و1 دقيقة", poster: "https://www.image2url.com/r2/default/images/1785745254267-9d68ff9f-8789-45ea-b103-dc77bf7d3025.jpg" },
            { id: "m2", title: "Spider-Man 2", year: "2004", duration: "ساعتان و7 دقائق", poster: "https://www.image2url.com/r2/default/images/1785746520083-fad57928-b410-40dc-8e23-05158c881988.jpg" },
            { id: "m3", title: "Spider-Man 3", year: "2007", duration: "ساعتان و36 دقيقة", poster: "https://www.image2url.com/r2/default/images/1785746723860-7f0c9352-a713-4e75-ab2b-daef773aba12.jpg" },
            { id: "m4", title: "Iron Man", year: "2008", duration: "ساعتان و6 دقائق", poster: "https://image.tmdb.org/t/p/w500/78lPtwv72eTNqFW9COBYI0dWDJa.jpg" },
            { id: "m5", title: "The Incredible Hulk", year: "2008", duration: "ساعة و52 دقيقة", poster: "https://image.tmdb.org/t/p/w500/gKzYx79y0AQTL4UAk1cBQJ3nvrm.jpg" },
            { id: "m6", title: "Iron Man 2", year: "2010", duration: "ساعتان و4 دقائق", poster: "https://upload.wikimedia.org/wikipedia/en/e/ed/Iron_Man_2_poster.jpg" },
            { id: "m7", title: "Thor", year: "2011", duration: "ساعة و55 دقيقة", poster: "https://www.image2url.com/r2/default/images/1785617033813-c4416c9b-3b83-4a93-bc78-46087b32b550.jpg" },
            { id: "m8", title: "Captain America: The First Avenger", year: "2011", duration: "ساعتان و4 دقائق", poster: "https://image.tmdb.org/t/p/w500/vSNxAJTlD0r02V9sPYpOjqDZXUK.jpg" },
            { id: "m9", title: "The Avengers", year: "2012", duration: "ساعتان و23 دقيقة", poster: "https://image.tmdb.org/t/p/w500/RYMX2wcKCBAr24UyPD7xwmjaTn.jpg" },
            { id: "m10", title: "The Amazing Spider-Man", year: "2012", duration: "ساعتان و16 دقيقة", poster: "https://www.image2url.com/r2/default/images/1785608171527-c32b986f-58c0-4fc4-af11-f8e4417ccc42.jpg" },
            { id: "m12", title: "Iron Man 3", year: "2013", duration: "ساعتان و10 دقائق", poster: "https://upload.wikimedia.org/wikipedia/en/1/19/Iron_Man_3_poster.jpg" },
            { id: "m13", title: "Thor: The Dark World", year: "2013", duration: "ساعة و52 دقيقة", poster: "https://image.tmdb.org/t/p/w500/wp6OxE4poJ4G7c0U2ZIXasTSMR7.jpg" },
            { id: "m11", title: "The Amazing Spider-Man 2", year: "2014", duration: "ساعتان و22 دقيقة", poster: "https://www.image2url.com/r2/default/images/1785608131214-7bec9943-7222-401a-b9ea-39d93be8d0c4.jpg" },
            { id: "m14", title: "Captain America: The Winter Soldier", year: "2014", duration: "ساعتان و16 دقيقة", poster: "https://www.image2url.com/r2/default/images/1785617244931-4ad689df-ca57-4b7a-8bb3-64671e3d173c.jpg" },
            { id: "m15", title: "Guardians of the Galaxy", year: "2014", duration: "ساعتان و1 دقيقة", poster: "https://image.tmdb.org/t/p/w500/r7vmZjiyZw9rpJMQJdXpjgiCOk9.jpg" },
            { id: "m16", title: "Avengers: Age of Ultron", year: "2015", duration: "ساعتان و21 دقيقة", poster: "https://image.tmdb.org/t/p/w500/4ssDuvEDkSArWEdyBl2X5EHvYKU.jpg" },
            { id: "m17", title: "Ant-Man", year: "2015", duration: "ساعة و57 دقيقة", poster: "https://www.image2url.com/r2/default/images/1785617374640-a035242b-ca47-421b-b838-979b7674ad2e.jpg" },
            { id: "m18", title: "Captain America: Civil War", year: "2016", duration: "ساعتان و27 دقيقة", poster: "https://upload.wikimedia.org/wikipedia/en/5/53/Captain_America_Civil_War_poster.jpg" },
            { id: "m20", title: "Doctor Strange", year: "2016", duration: "ساعة و55 دقيقة", poster: "https://image.tmdb.org/t/p/w500/uGBVj3bEbCoZbDjjl9wTxcygko1.jpg" },
            { id: "m21", title: "Guardians of the Galaxy Vol. 2", year: "2017", duration: "ساعتان و16 دقيقة", poster: "https://www.image2url.com/r2/default/images/1785617501040-f5a76fcd-ae68-4d73-8141-73a7603c73c2.jpg" },
            { id: "m22", title: "Spider-Man: Homecoming", year: "2017", duration: "ساعتان و13 دقيقة", poster: "https://image.tmdb.org/t/p/w500/c24sv2weTHPsmDa7jEMN0m2P3RT.jpg" },
            { id: "m23", title: "Thor: Ragnarok", year: "2017", duration: "ساعتان و10 دقائق", poster: "https://image.tmdb.org/t/p/w500/rzRwTcFvttcN1ZpX2xv4j3tSdJu.jpg" },
            { id: "m24", title: "Black Panther", year: "2018", duration: "ساعتان و14 دقيقة", poster: "https://www.image2url.com/r2/default/images/1785617660169-1eb05af8-e92e-43e7-bb4a-44cf9f4147f1.jpg" },
            { id: "venom1", title: "Venom", year: "2018", duration: "ساعة و52 دقيقة", poster: "https://image.tmdb.org/t/p/w500/2uNW4WbgBXL25BAbXGLnLqX71Sw.jpg" },
            { id: "m25", title: "Avengers: Infinity War", year: "2018", duration: "ساعتان و29 دقيقة", poster: "https://image.tmdb.org/t/p/w500/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg" },
            { id: "m26", title: "Ant-Man and the Wasp", year: "2018", duration: "ساعة و58 دقيقة", poster: "https://upload.wikimedia.org/wikipedia/en/2/2c/Ant-Man_and_the_Wasp_poster.jpg" },
            { id: "m27", title: "Captain Marvel", year: "2019", duration: "ساعتان و4 دقائق", poster: "https://www.image2url.com/r2/default/images/1785618061721-b02169d4-17bd-40ca-951e-4d92d1bc06da.jpg" },
            { id: "m28", title: "Avengers: Endgame", year: "2019", duration: "ثلاث ساعات و1 دقيقة", poster: "https://www.image2url.com/r2/default/images/1785618127334-a67d21d6-0aa1-444e-87d7-70cc0aaf10bc.jpg" },
            { id: "m29", title: "Spider-Man: Far From Home", year: "2019", duration: "ساعتان و9 دقائق", poster: "https://image.tmdb.org/t/p/w500/4q2NNj4S5dG2RLF9CpXsej7yXl.jpg" },
            { id: "m19", title: "Black Widow", year: "2021", duration: "ساعتان و14 دقيقة", poster: "https://www.image2url.com/r2/default/images/1785617435279-cc39e2e6-9c1a-4fd3-9eea-830f07a4fa2e.jpg" },
            { id: "venom2", title: "Venom: Let There Be Carnage", year: "2021", duration: "ساعة و37 دقيقة", poster: "https://image.tmdb.org/t/p/w500/rjkmN1dniUHVYAtwuV3Tji7FsDO.jpg" },
            { id: "m30", title: "Shang-Chi", year: "2021", duration: "ساعتان و12 دقيقة", poster: "https://upload.wikimedia.org/wikipedia/en/7/74/Shang-Chi_and_the_Legend_of_the_Ten_Rings_poster.jpeg" },
            { id: "m31", title: "Eternals", year: "2021", duration: "ساعتان و36 دقيقة", poster: "https://image.tmdb.org/t/p/w500/bcCBq9N1EMo3daNIjWJ8kYvrQm6.jpg" },
            { id: "m32", title: "Spider-Man: No Way Home", year: "2021", duration: "ساعتان و28 دقيقة", poster: "https://upload.wikimedia.org/wikipedia/en/0/00/Spider-Man_No_Way_Home_poster.jpg" },
            { id: "m33", title: "Doctor Strange in the Multiverse of Madness", year: "2022", duration: "ساعتان و6 دقائق", poster: "https://image.tmdb.org/t/p/w500/9Gtg2DzBhmYamXBS1hKAhiwbBKS.jpg" },
            { id: "m34", title: "Thor: Love and Thunder", year: "2022", duration: "ساعة و59 دقيقة", poster: "https://image.tmdb.org/t/p/w500/pIkRyD18kl4FhoCNQuWxWu5cBLM.jpg" },
            { id: "m35", title: "Black Panther: Wakanda Forever", year: "2022", duration: "ساعتان و41 دقيقة", poster: "https://upload.wikimedia.org/wikipedia/en/3/3b/Black_Panther_Wakanda_Forever_poster.jpg" },
            { id: "m36", title: "Ant-Man and the Wasp: Quantumania", year: "2023", duration: "ساعتان و5 دقائق", poster: "https://image.tmdb.org/t/p/w500/ngl2FKBlU4fhbdsrtdom9LVLBXw.jpg" },
            { id: "m37", title: "Guardians of the Galaxy Vol. 3", year: "2023", duration: "ساعتان و30 دقيقة", poster: "https://upload.wikimedia.org/wikipedia/en/7/74/Guardians_of_the_Galaxy_Vol._3_poster.jpg" },
            { id: "m38", title: "The Marvels", year: "2023", duration: "ساعة و45 دقيقة", poster: "https://www.image2url.com/r2/default/images/1785618352887-5bde1bc5-4090-42cb-8bc5-67bb9318f18a.jpg" },
            { id: "venom3", title: "Venom: The Last Dance", year: "2024", duration: "ساعة و50 دقيقة", poster: "https://image.tmdb.org/t/p/w500/aosm8NMQ3UyoBVpSxyimorCQykC.jpg" },
            { id: "m39", title: "Deadpool & Wolverine", year: "2024", duration: "ساعتان و8 دقائق", poster: "https://image.tmdb.org/t/p/w500/8cdWjvZQUExUUTzyp4t6EDMubfO.jpg" },
            { id: "m40", title: "Captain America: Brave New World", year: "2025", duration: "ساعتان و0 دقيقة", poster: "https://www.image2url.com/r2/default/images/1785608441949-f18129b9-5ca2-4e1c-9da6-8c178cb8bbe2.jpg" },
            { id: "m41", title: "Thunderbolts*", year: "2025", duration: "ساعتان و10 دقائق", poster: "https://www.image2url.com/r2/default/images/1785618432548-42ab0be3-d75c-451f-978e-9606c8c72d81.jpg" },
            { id: "m42", title: "The Fantastic Four: First Steps", year: "2025", duration: "ساعتان و0 دقيقة", poster: "https://www.image2url.com/r2/default/images/1785618486142-0cfc50c2-25b9-471b-b226-bd63af08a2fe.jpg" },
            { id: "m43", title: "Spider-Man: Brand New Day", year: "2026", duration: "ساعتان و20 دقيقة", poster: "https://www.image2url.com/r2/default/images/1785608501842-c550c4d0-5fe3-45c4-a4fb-233a306b0172.jpg" },
            { id: "m44", title: "Avengers: Doomsday", year: "2026", duration: "ساعتان و30 دقيقة", poster: "https://www.image2url.com/r2/default/images/1785618543535-36d20f85-d7df-4a19-b2ea-f440614f48e6.jpg" }
        ]
    },
    {
        name: "المسلسلات",
        items: [
            { id: "c24", title: "Agent Carter – Season 1", year: "2015", duration: "8 حلقات", poster: "https://www.image2url.com/r2/default/images/1785726283933-ac18e98f-858d-4f25-96c7-910a14e1052f.jpg" },
            { id: "s1", title: "Daredevil – Season 1", year: "2015", duration: "13 حلقة", poster: "https://www.image2url.com/r2/default/images/1785620435460-254694ed-6c5b-4e36-9a1a-337f451814ac.jpg" },
            { id: "s2", title: "Jessica Jones – Season 1", year: "2015", duration: "13 حلقة", poster: "https://www.image2url.com/r2/default/images/1785620992119-826a13e9-f295-43f0-bdf7-62428da35e91.jpg" },
            { id: "c25", title: "Agent Carter – Season 2", year: "2016", duration: "10 حلقات", poster: "https://www.image2url.com/r2/default/images/1785726237505-02b5bf50-8e88-4417-94b4-8809bf697561.jpg" },
            { id: "s3", title: "Daredevil – Season 2", year: "2016", duration: "13 حلقة", poster: "https://www.image2url.com/r2/default/images/1785620576446-ee22ea02-050b-4d94-a434-fa64acd378c7.jpg" },
            { id: "s4", title: "Luke Cage – Season 1", year: "2016", duration: "13 حلقة", poster: "https://www.image2url.com/r2/default/images/1785621432566-190e4464-5cc1-40da-bb62-0925f7626b6e.jpg" },
            { id: "s5", title: "Iron Fist – Season 1", year: "2017", duration: "13 حلقة", poster: "https://www.image2url.com/r2/default/images/1785621565644-f34b0b5d-a812-4ab0-8e6d-e0d2c86c4264.jpg" },
            { id: "s6", title: "The Defenders", year: "2017", duration: "8 حلقات", poster: "https://www.image2url.com/r2/default/images/1785621671847-ba2ab502-2331-49e7-bba2-ec5f3f4f0411.jpg" },
            { id: "s7", title: "The Punisher – Season 1", year: "2017", duration: "13 حلقة", poster: "https://www.image2url.com/r2/default/images/1785621788713-e60b2864-87e1-44f6-832d-3e2412c102ac.jpg" },
            { id: "s8", title: "Jessica Jones – Season 2", year: "2018", duration: "13 حلقة", poster: "https://www.image2url.com/r2/default/images/1785621107551-8053c804-5dcd-4128-ac57-a1c6d14ab155.jpg" },
            { id: "s9", title: "Luke Cage – Season 2", year: "2018", duration: "13 حلقة", poster: "https://www.image2url.com/r2/default/images/1785621489937-eb3ea105-6d83-44cf-b4b3-8f84ccc7fbda.jpg" },
            { id: "s10", title: "Iron Fist – Season 2", year: "2018", duration: "10 حلقات", poster: "https://www.image2url.com/r2/default/images/1785621616998-f6ac15be-6fe5-4f5f-9d6f-e2ddd66d2a1f.jpg" },
            { id: "s11", title: "Daredevil – Season 3", year: "2018", duration: "13 حلقة", poster: "https://www.image2url.com/r2/default/images/1785620843895-3b83095c-9779-4d88-9a46-6a9887b7da4f.webp" },
            { id: "s12", title: "The Punisher – Season 2", year: "2019", duration: "13 حلقة", poster: "https://www.image2url.com/r2/default/images/1785621853801-ddeba2c7-8858-4c5b-915e-7700bb5ff73e.jpg" },
            { id: "s13", title: "Jessica Jones – Season 3", year: "2019", duration: "13 حلقة", poster: "https://www.image2url.com/r2/default/images/1785621179915-64b1a02e-43ba-44fc-9de0-b608f1127a61.jpg" },
            { id: "s14", title: "WandaVision", year: "2021", duration: "9 حلقات", poster: "https://www.image2url.com/r2/default/images/1785621904423-a9555846-93d9-4365-b555-0072c7fa8d22.jpg" },
            { id: "s15", title: "The Falcon and the Winter Soldier", year: "2021", duration: "6 حلقات", poster: "https://image.tmdb.org/t/p/w500/6kbAMLteGO8yyewYau6bJ683sw7.jpg" },
            { id: "s16", title: "Loki – Season 1", year: "2021", duration: "6 حلقات", poster: "https://image.tmdb.org/t/p/w500/kEl2t3OhXc3Zb9FBh1AuYzRTgZp.jpg" },
            { id: "s17", title: "What If...? – Season 1", year: "2021", duration: "9 حلقات", poster: "https://image.tmdb.org/t/p/w500/lztz5XBMG1x6Y5ubz7CxfPFsAcW.jpg" },
            { id: "s18", title: "Hawkeye", year: "2021", duration: "6 حلقات", poster: "https://image.tmdb.org/t/p/w500/pqzjCxPVc9TkVgGRWeAoMmyqkZV.jpg" },
            { id: "s19", title: "Moon Knight", year: "2022", duration: "6 حلقات", poster: "https://www.image2url.com/r2/default/images/1785607757031-937dfb26-e520-43c9-92d6-b114155a385b.jpg" },
            { id: "s20", title: "Ms. Marvel", year: "2022", duration: "6 حلقات", poster: "https://www.image2url.com/r2/default/images/1785621960287-74b38747-c061-4dd6-a104-5e2e896320ab.jpg" },
            { id: "s21", title: "I Am Groot", year: "2022", duration: "5 حلقات", poster: "https://www.image2url.com/r2/default/images/1785622660939-30894733-f069-4248-bfe0-a231bbb9d3c8.jpg" },
            { id: "s22", title: "She-Hulk: Attorney at Law", year: "2022", duration: "9 حلقات", poster: "https://www.image2url.com/r2/default/images/1785622065608-38fc60ef-8c96-46ad-a2e1-627be095d06b.jpg" },
            { id: "s23", title: "Werewolf by Night", year: "2022", duration: "حلقة خاصة", poster: "https://www.image2url.com/r2/default/images/1785622110320-7eea451f-40c1-4784-bd38-1b0ad8299872.jpg" },
            { id: "s24", title: "The Guardians Holiday Special", year: "2022", duration: "حلقة خاصة", poster: "https://www.image2url.com/r2/default/images/1785622165686-25fa15ad-9bda-4420-8eff-302e1d5d2b6b.jpg" },
            { id: "s25", title: "Secret Invasion", year: "2023", duration: "6 حلقات", poster: "https://www.image2url.com/r2/default/images/1785622256700-f0dc9de8-86ac-4ff8-acbe-6deaf0901329.jpg" },
            { id: "s26", title: "Loki – Season 2", year: "2023", duration: "6 حلقات", poster: "https://www.image2url.com/r2/default/images/1785622304101-af2f46c0-286f-4606-94fd-7d460b899ef1.jpg" },
            { id: "c38", title: "I Am Groot – Season 2", year: "2023", duration: "5 حلقات", poster: "https://www.image2url.com/r2/default/images/1785726335311-8e4fa863-272e-4ba6-81d2-316ac2003cc3.jpg" },
            { id: "s27", title: "Echo", year: "2024", duration: "5 حلقات", poster: "https://www.image2url.com/r2/default/images/1785622390270-5ad08e00-b999-42b7-912b-3303b261cdb3.jpg" },
            { id: "s28", title: "Agatha All Along", year: "2024", duration: "9 حلقات", poster: "https://www.image2url.com/r2/default/images/1785622432074-1e30b22c-67dd-457a-b9be-a5373298c548.jpg" },
            { id: "s29", title: "Daredevil: Born Again – Season 1", year: "2025", duration: "9 حلقات", poster: "https://www.image2url.com/r2/default/images/1786610850861-0b2678b6-3dbd-4719-ac43-809bd79f0727.jpg" },
            { id: "s30", title: "Ironheart", year: "2025", duration: "6 حلقات", poster: "https://www.image2url.com/r2/default/images/1785622484387-6f5bbf89-1929-4cb7-8952-a7e4fb63840f.jpg" },
            { id: "s33", title: "Daredevil: Born Again – Season 2", year: "2026", duration: "9 حلقات", poster: "https://www.image2url.com/r2/default/images/1786610227861-ffb6ce60-230f-49f0-8995-05db47ead538.jpg" },
            { id: "s31", title: "The Punisher - One Last Kill", year: "2026", duration: "حلقة خاصة", poster: "https://www.image2url.com/r2/default/images/1785623239251-33b1a791-ee77-4e4f-a919-39936b1bd8fa.jpg" },
            { id: "s32", title: "Wonder Man", year: "2026", duration: "8 حلقات", poster: "https://www.image2url.com/r2/default/images/1785622591505-f70d996e-93dc-41a8-ba7e-7c6db081ec60.jpg" }
        ]
    },
    {
        name: "الأكس مين",
        items: [
            { id: "x1", title: "X-Men", year: "2000", duration: "ساعة و44 دقيقة", poster: "https://www.image2url.com/r2/default/images/1785623915359-0f47ac91-4e50-47ff-b389-03df5c694480.jpg" },
            { id: "x2", title: "X2: X-Men United", year: "2003", duration: "ساعتان و13 دقيقة", poster: "https://www.image2url.com/r2/default/images/1785623974345-c1d0f75a-2f38-4f37-b10c-a9aebc1d463c.jpg" },
            { id: "x3", title: "X-Men: The Last Stand", year: "2006", duration: "ساعة و44 دقيقة", poster: "https://www.image2url.com/r2/default/images/1785624010877-99ab2d0e-c52f-48ef-abac-7033c1f182f6.jpg" },
            { id: "x4", title: "X-Men Origins: Wolverine", year: "2009", duration: "ساعة و47 دقيقة", poster: "https://www.image2url.com/r2/default/images/1785624094846-65d63e4e-4622-4aa8-9845-a5002b5ea1ab.jpg" },
            { id: "x5", title: "X-Men: First Class", year: "2011", duration: "ساعتان و12 دقيقة", poster: "https://www.image2url.com/r2/default/images/1785624183173-a71b0256-7b92-4cfa-a33b-664a91fdff4d.jpg" },
            { id: "x6", title: "The Wolverine", year: "2013", duration: "ساعتان و6 دقائق", poster: "https://www.image2url.com/r2/default/images/1785624422341-b1876ff6-d9bd-46bf-a53e-c51a3fc09cea.jpg" },
            { id: "x7", title: "X-Men: Days of Future Past", year: "2014", duration: "ساعتان و11 دقيقة", poster: "https://www.image2url.com/r2/default/images/1785624315911-38c6cd26-2263-41ae-b893-3b738c1489db.jpg" },
            { id: "x8", title: "Deadpool", year: "2016", duration: "ساعة و48 دقيقة", poster: "https://www.image2url.com/r2/default/images/1785624505797-e1913401-3d93-4c50-84cc-c0980863e663.jpg" },
            { id: "x9", title: "X-Men: Apocalypse", year: "2016", duration: "ساعتان و24 دقيقة", poster: "https://www.image2url.com/r2/default/images/1785625499320-f0ea7fc2-b460-4ff4-8abc-3b85727081a1.jpg" },
            { id: "x10", title: "Logan", year: "2017", duration: "ساعتان و17 دقيقة", poster: "https://www.image2url.com/r2/default/images/1785624651426-9fd2df45-c64c-459d-a243-4bf3d360c4cb.jpg" },
            { id: "x11", title: "Deadpool 2", year: "2018", duration: "ساعة و59 دقيقة", poster: "https://www.image2url.com/r2/default/images/1785624547516-8221138e-8909-436b-89b1-1ea4034b1a81.jpg" },
            { id: "x12", title: "X-Men : Dark Phoenix", year: "2019", duration: "ساعة و53 دقيقة", poster: "https://www.image2url.com/r2/default/images/1785624705281-96b60e1a-0462-4ca2-9dab-d458084657cc.jpg" },
            { id: "x13", title: "The New Mutants", year: "2020", duration: "ساعة و34 دقيقة", poster: "https://www.image2url.com/r2/default/images/1785624791659-d020b96f-e9ba-40dd-a208-55cfb1ae1d9a.jpg" },
            { id: "x14", title: "X-Men '97", year: "2024", duration: "10 حلقات", poster: "https://www.image2url.com/r2/default/images/1785624855328-a0060e66-91cc-4619-bf82-4ac75b1f977e.jpg" },
            { id: "x15", title: "Deadpool & Wolverine", year: "2024", duration: "ساعتان و8 دقائق", poster: "https://image.tmdb.org/t/p/w500/8cdWjvZQUExUUTzyp4t6EDMubfO.jpg" }
        ]
    },
    {
        name: "الفانتاستك فور",
        items: [
            { id: "f1", title: "Fantastic Four", year: "2005", duration: "ساعة و46 دقيقة", poster: "https://www.image2url.com/r2/default/images/1785624900646-06123306-bd49-47ec-b97d-f58b5136c710.jpg" },
            { id: "f2", title: "Fantastic Four: Rise of the Silver Surfer", year: "2007", duration: "ساعة و32 دقيقة", poster: "https://www.image2url.com/r2/default/images/1785624968967-c5b4362f-9c78-4178-a489-3be5c0208dba.jpg" },
            { id: "f4", title: "The Fantastic Four: First Steps", year: "2025", duration: "ساعتان و0 دقيقة", poster: "https://www.image2url.com/r2/default/images/1785618486142-0cfc50c2-25b9-471b-b226-bd63af08a2fe.jpg" }
        ]
    }
];

const allMarvelItems = {};
marvelCategories.forEach(cat => {
    cat.items.forEach(item => {
        allMarvelItems[item.id] = item;
    });
});

const chronologicalData = [
    "x5", "x7", "x4", "x9", "x12", "x14", "x1", "x2", "x3", "x6", "x8", "x11", "x13", "x10",
    "f1", "f2",
    "m1", "m2", "m3", "m10", "m11",
    "m8",
    "c24", "c25",
    "m27", "m4", "m6", "m5", "m7", "m9", "m12", "m13", "m14", "m15", "m21", "s21", "c38",
    "m16", "m17",
    "s1", "s2", "s3", "s4", "s5", "s6",
    "m18", "m19", "m24", "m22", "m20",
    "s8", "s9", "s10", "s7", "s11", "s12", "s13",
    "m23", "m26", "m25", "m28", "venom1",
    "s16", "s26", "m39", "s14", "s15", "m30", "m31", "m29", "venom2", "m32", "venom3", "m33",
    "s18", "s19", "s20", "s22", "m35", "m34", "s23", "s24", "m36", "s25", "m38", "s27", "m37",
    "s28", "s29", "s33", "m40", "m41", "m42", "s31", "m43"
];

let watchedList = JSON.parse(localStorage.getItem('marvel_watched_v6')) || {};
let imagesList = JSON.parse(localStorage.getItem('marvel_images_v6')) || {};

let activeTab = 0;
let currentFilter = 'all';
let searchQuery = '';

const grid = document.getElementById('moviesGrid');
let audioCtx = null;

function getAudioContext() {
    if (!audioCtx) {
        audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
    return audioCtx;
}

function playSound(type) {
    const ctx = getAudioContext();
    if (ctx.state === 'suspended') {
        ctx.resume();
    }
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain);
    gain.connect(ctx.destination);

    if (type === 'tab') {
        osc.frequency.setValueAtTime(350, ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(600, ctx.currentTime + 0.1);
        gain.gain.setValueAtTime(0.2, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.1);
        osc.start();
        osc.stop(ctx.currentTime + 0.1);
    } else if (type === 'toggle') {
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(500, ctx.currentTime);
        osc.frequency.setValueAtTime(850, ctx.currentTime + 0.08);
        gain.gain.setValueAtTime(0.25, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.15);
        osc.start();
        osc.stop(ctx.currentTime + 0.15);
    } else if (type === 'focus') {
        osc.frequency.setValueAtTime(400, ctx.currentTime);
        gain.gain.setValueAtTime(0.15, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.08);
        osc.start();
        osc.stop(ctx.currentTime + 0.08);
    }
}

document.addEventListener('click', () => {
    const ctx = getAudioContext();
    if (ctx.state === 'suspended') {
        ctx.resume();
    }
}, { once: true });

function init() {
    render();
}

function changeTab(newTabIndex) {
    if (activeTab === newTabIndex || !grid) return;
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
    if (!grid) return;
    grid.innerHTML = '';
    grid.classList.remove('has-focus');
    
    let itemsToRender = [];
    const isChronological = (currentFilter === 'chronological');

    if (isChronological) {
        itemsToRender = chronologicalData.map(idOrObj => {
            if (typeof idOrObj === 'string') {
                return allMarvelItems[idOrObj] || { id: idOrObj, title: "مفقود", year: "-", duration: "-", poster: "" };
            }
            return idOrObj;
        }).filter(Boolean);
        
        document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    } else {
        itemsToRender = marvelCategories[activeTab].items;
        document.querySelectorAll('.tab-btn').forEach(btn => {
            if (parseInt(btn.getAttribute('data-tab')) === activeTab) {
                btn.classList.add('active');
            }
        });
    }

    let catWatchedCount = 0;
    let catTotalCount = itemsToRender.length;

    itemsToRender.forEach((item, index) => {
        const isWatched = !!watchedList[item.id];
        if (isWatched) catWatchedCount++;

        const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesFilter = 
            (currentFilter === 'all') || 
            (currentFilter === 'chronological') || 
            (currentFilter === 'watched' && isWatched);

        if (!matchesSearch || !matchesFilter) return;

        const card = document.createElement('div');
        card.className = `card ${isWatched ? 'watched' : ''}`;

        const fallbackText = encodeURIComponent(item.title);
        const posterSrc = imagesList[item.id] || item.poster || `https://via.placeholder.com/300x450/020617/ffffff?text=${fallbackText}`;

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
                    <div class="duration-info" style="font-size: 0.8rem; color: #38bdf8; margin-top: 2px; font-weight: bold;">⏱ ${item.duration}</div>
                </div>

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
    const counterEl = document.getElementById('counterText');
    const percentEl = document.getElementById('percentText');
    const progressEl = document.getElementById('progressBar');

    if (counterEl) {
        if (isChronological) {
            counterEl.innerText = `شاهدت ${catWatchedCount} من أصل ${catTotalCount} في الترتيب الزمني`;
        } else {
            counterEl.innerText = `شاهدت ${catWatchedCount} من أصل ${catTotalCount} في هذا القسم`;
        }
    }
    if (percentEl) percentEl.innerText = `${percent}%`;
    if (progressEl) progressEl.style.width = `${percent}%`;
}

document.addEventListener('click', (e) => {
    if (!e.target.closest('.card') && grid) {
        document.querySelectorAll('.card').forEach(c => c.classList.remove('focused'));
        grid.classList.remove('has-focus');
    }
});

function toggleWatch(itemId) {
    playSound('toggle');
    watchedList[itemId] = !watchedList[itemId];
    localStorage.setItem('marvel_watched_v6', JSON.stringify(watchedList));
    render();
}

document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
        e.currentTarget.classList.add('active');
        
        if (currentFilter === 'chronological') {
            currentFilter = 'all';
            document.querySelectorAll('.filter-btn').forEach(fb => fb.classList.remove('active'));
            document.querySelector('.filter-btn[data-filter="all"]').classList.add('active');
        }

        const nextTab = parseInt(e.currentTarget.getAttribute('data-tab'));
        changeTab(nextTab);
    });
});

const searchInput = document.getElementById('searchInput');
if (searchInput) {
    searchInput.addEventListener('input', (e) => {
        searchQuery = e.target.value;
        render();
    });
}

document.querySelectorAll('.filter-btn').forEach(b => {
    b.addEventListener('click', (e) => {
        playSound('tab');
        document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
        e.currentTarget.classList.add('active');
        currentFilter = e.currentTarget.getAttribute('data-filter');
        
        grid.classList.add('fade-out');
        setTimeout(() => {
            render();
            grid.classList.remove('fade-out');
            grid.classList.add('fade-in');
            setTimeout(() => grid.classList.remove('fade-in'), 200);
        }, 150);
    });
});

init();
