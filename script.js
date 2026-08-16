const marvelRawData = [
    // --- أفلام MCU / AVENGERS ---
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
    { id: "m30", title: "Shang-Chi and the Legend of the Ten Rings", year: "2021", duration: "ساعتان و12 دقيقة", poster: "https://upload.wikimedia.org/wikipedia/en/7/74/Shang-Chi_and_the_Legend_of_the_Ten_Rings_poster.jpeg" },
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

    // --- مسلسلات و أعمال MCU / DEFENDERS ---
    { id: "c24", title: "Agent Carter — Season 1", year: "2015", duration: "8 حلقات", poster: "https://www.image2url.com/r2/default/images/1785726283933-ac18e98f-858d-4f25-96c7-910a14e1052f.jpg" },
    { id: "s1", title: "Daredevil — Season 1", year: "2015", duration: "13 حلقة", poster: "https://www.image2url.com/r2/default/images/1785620435460-254694ed-6c5b-4e36-9a1a-337f451814ac.jpg" },
    { id: "s2", title: "Jessica Jones — Season 1", year: "2015", duration: "13 حلقة", poster: "https://www.image2url.com/r2/default/images/1785620992119-826a13e9-f295-43f0-bdf7-62428da35e91.jpg" },
    { id: "c25", title: "Agent Carter — Season 2", year: "2016", duration: "10 حلقات", poster: "https://www.image2url.com/r2/default/images/1785726237505-02b5bf50-8e88-4417-94b4-8809bf697561.jpg" },
    { id: "s3", title: "Daredevil — Season 2", year: "2016", duration: "13 حلقة", poster: "https://www.image2url.com/r2/default/images/1785620576446-ee22ea02-050b-4d94-a434-fa64acd378c7.jpg" },
    { id: "s4", title: "Luke Cage — Season 1", year: "2016", duration: "13 حلقة", poster: "https://www.image2url.com/r2/default/images/1785621432566-190e4464-5cc1-40da-bb62-0925f7626b6e.jpg" },
    { id: "s5", title: "Iron Fist — Season 1", year: "2017", duration: "13 حلقة", poster: "https://www.image2url.com/r2/default/images/1785621565644-f34b0b5d-a812-4ab0-8e6d-e0d2c86c4264.jpg" },
    { id: "s6", title: "The Defenders", year: "2017", duration: "8 حلقات", poster: "https://www.image2url.com/r2/default/images/1785621671847-ba2ab502-2331-49e7-bba2-ec5f3f4f0411.jpg" },
    { id: "s7", title: "The Punisher — Season 1", year: "2017", duration: "13 حلقة", poster: "https://www.image2url.com/r2/default/images/1785621788713-e60b2864-87e1-44f6-832d-3e2412c102ac.jpg" },
    { id: "s8", title: "Jessica Jones — Season 2", year: "2018", duration: "13 حلقة", poster: "https://www.image2url.com/r2/default/images/1785621107551-8053c804-5dcd-4128-ac57-a1c6d14ab155.jpg" },
    { id: "s9", title: "Luke Cage — Season 2", year: "2018", duration: "13 حلقة", poster: "https://www.image2url.com/r2/default/images/1785621489937-eb3ea105-6d83-44cf-b4b3-8f84ccc7fbda.jpg" },
    { id: "s10", title: "Iron Fist — Season 2", year: "2018", duration: "10 حلقات", poster: "https://www.image2url.com/r2/default/images/1785621616998-f6ac15be-6fe5-4f5f-9d6f-e2ddd66d2a1f.jpg" },
    { id: "s11", title: "Daredevil — Season 3", year: "2018", duration: "13 حلقة", poster: "https://www.image2url.com/r2/default/images/1785620843895-3b83095c-9779-4d88-9a46-6a9887b7da4f.webp" },
    { id: "s12", title: "The Punisher — Season 2", year: "2019", duration: "13 حلقة", poster: "https://www.image2url.com/r2/default/images/1785621853801-ddeba2c7-8858-4c5b-915e-7700bb5ff73e.jpg" },
    { id: "s13", title: "Jessica Jones — Season 3", year: "2019", duration: "13 حلقة", poster: "https://www.image2url.com/r2/default/images/1785621179915-64b1a02e-43ba-44fc-9de0-b608f1127a61.jpg" },
    { id: "s14", title: "WandaVision", year: "2021", duration: "9 حلقات", poster: "https://www.image2url.com/r2/default/images/1785621904423-a9555846-93d9-4365-b555-0072c7fa8d22.jpg" },
    { id: "s15", title: "The Falcon and the Winter Soldier", year: "2021", duration: "6 حلقات", poster: "https://image.tmdb.org/t/p/w500/6kbAMLteGO8yyewYau6bJ683sw7.jpg" },
    { id: "s16", title: "Loki — Season 1", year: "2021", duration: "6 حلقات", poster: "https://image.tmdb.org/t/p/w500/kEl2t3OhXc3Zb9FBh1AuYzRTgZp.jpg" },
    { id: "s18", title: "Hawkeye", year: "2021", duration: "6 حلقات", poster: "https://image.tmdb.org/t/p/w500/pqzjCxPVc9TkVgGRWeAoMmyqkZV.jpg" },
    { id: "s19", title: "Moon Knight", year: "2022", duration: "6 حلقات", poster: "https://www.image2url.com/r2/default/images/1785607757031-937dfb26-e520-43c9-92d6-b114155a385b.jpg" },
    { id: "s20", title: "Ms. Marvel", year: "2022", duration: "6 حلقات", poster: "https://www.image2url.com/r2/default/images/1785621960287-74b38747-c061-4dd6-a104-5e2e896320ab.jpg" },
    { id: "s22", title: "She-Hulk: Attorney at Law", year: "2022", duration: "9 حلقات", poster: "https://www.image2url.com/r2/default/images/1785622065608-38fc60ef-8c96-46ad-a2e1-627be095d06b.jpg" },
    { id: "s23", title: "Werewolf by Night", year: "2022", duration: "حلقة خاصة", poster: "https://www.image2url.com/r2/default/images/1785622110320-7eea451f-40c1-4784-bd38-1b0ad8299872.jpg" },
    { id: "s24", title: "The Guardians of the Galaxy Holiday Special", year: "2022", duration: "حلقة خاصة", poster: "https://www.image2url.com/r2/default/images/1785622165686-25fa15ad-9bda-4420-8eff-302e1d5d2b6b.jpg" },
    { id: "s25", title: "Secret Invasion", year: "2023", duration: "6 حلقات", poster: "https://www.image2url.com/r2/default/images/1785622256700-f0dc9de8-86ac-4ff8-acbe-6deaf0901329.jpg" },
    { id: "s26", title: "Loki — Season 2", year: "2023", duration: "6 حلقات", poster: "https://www.image2url.com/r2/default/images/1785622304101-af2f46c0-286f-4606-94fd-7d460b899ef1.jpg" },
    { id: "s27", title: "Echo", year: "2024", duration: "5 حلقات", poster: "https://www.image2url.com/r2/default/images/1785622390270-5ad08e00-b999-42b7-912b-3303b261cdb3.jpg" },
    { id: "s28", title: "Agatha All Along", year: "2024", duration: "9 حلقات", poster: "https://www.image2url.com/r2/default/images/1785622432074-1e30b22c-67dd-457a-b9be-a5373298c548.jpg" },
    { id: "s29", title: "Daredevil: Born Again — Season 1", year: "2025", duration: "9 حلقات", poster: "https://www.image2url.com/r2/default/images/1786610850861-0b2678b6-3dbd-4719-ac43-809bd79f0727.jpg" },
    { id: "s30", title: "Ironheart", year: "2025", duration: "6 حلقات", poster: "https://www.image2url.com/r2/default/images/1785622484387-6f5bbf89-1929-4cb7-8952-a7e4fb63840f.jpg" },
    { id: "s33", title: "Daredevil: Born Again — Season 2", year: "2026", duration: "9 حلقات", poster: "https://www.image2url.com/r2/default/images/1786610227861-ffb6ce60-230f-49f0-8995-05db47ead538.jpg" },
    { id: "s32", title: "Wonder Man", year: "2026", duration: "8 حلقات", poster: "https://www.image2url.com/r2/default/images/1785622591505-f70d996e-93dc-41a8-ba7e-7c6db081ec60.jpg" },
    { id: "s31", title: "The Punisher: One Last Kill", year: "2026", duration: "حلقة خاصة", poster: "https://www.image2url.com/r2/default/images/1785623239251-33b1a791-ee77-4e4f-a919-39936b1bd8fa.jpg" },

    // --- أفلام X-Men والفانتاستك فور (FOX) ---
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
    { id: "x12", title: "X-Men: Dark Phoenix", year: "2019", duration: "ساعة و53 دقيقة", poster: "https://www.image2url.com/r2/default/images/1785624705281-96b60e1a-0462-4ca2-9dab-d458084657cc.jpg" },
    { id: "x13", title: "The New Mutants", year: "2020", duration: "ساعة و34 دقيقة", poster: "https://www.image2url.com/r2/default/images/1785624791659-d020b96f-e9ba-40dd-a208-55cfb1ae1d9a.jpg" },
    { id: "f1", title: "Fantastic Four", year: "2005", duration: "ساعة و46 دقيقة", poster: "https://www.image2url.com/r2/default/images/1785624900646-06123306-bd49-47ec-b97d-f58b5136c710.jpg" },
    { id: "f2", title: "Fantastic Four: Rise of the Silver Surfer", year: "2007", duration: "ساعة و32 دقيقة", poster: "https://www.image2url.com/r2/default/images/1785624968967-c5b4362f-9c78-4178-a489-3be5c0208dba.jpg" }
];

const allMarvelItems = {};
marvelRawData.forEach(item => { allMarvelItems[item.id] = item; });

// --- FOX Lists ---
const foxXmenReleaseIds = ["x1", "x2", "x3", "x4", "x5", "x6", "x7", "x8", "x9", "x10", "x11", "x12", "x13", "m39"];
const foxXmenChronoIds = ["x5", "x7", "x4", "x9", "x12", "x1", "x2", "x3", "x6", "x8", "x11", "m39", "x13", "x10"];

const foxF4ReleaseIds = ["f1", "f2"];
const foxF4ChronoIds = ["f1", "f2"];

// --- MCU DEFENDERS Lists ---
const mcuDefendersReleaseIds = ["s1", "s2", "s3", "s4", "s5", "s6", "s7", "s8", "s9", "s10", "s11", "s12", "s13", "s29", "s33", "s31"];
const mcuDefendersChronoIds = ["s1", "s2", "s3", "s4", "s5", "s6", "s7", "s8", "s9", "s10", "s11", "s12", "s13", "s29", "s33", "s31"];

// --- MCU AVENGERS Lists ---
const mcuAvengersReleaseIds = [
    "m1", "m2", "m3", "m4", "m5", "m6", "m7", "m8", "m9", "m10", "m12", "m13", "m14", "m11", "m15", "m16",
    "c24", "m17", "c25", "m18", "m20", "m21", "m22", "m23", "m24", "venom1", "m25", "m26", "m27", "m28",
    "m29", "s14", "s15", "s16", "m19", "m30", "venom2", "m31", "s18", "m32", "m33", "s19", "s20", "m34",
    "s22", "s23", "m35", "s24", "m37", "m36", "s25", "s26", "m38", "s27", "s28", "venom3", "s30", "m40",
    "m41", "m42", "s32", "m43"
];

const mcuAvengersChronoIds = [
    "m1", "m2", "m3", "m10", "m11", "m8", "c24", "c25", "m27", "m4", "m6", "m5", "m7", "m9", "m12", "m13",
    "m14", "m15", "m21", "m16", "m17", "m18", "m19", "m24", "m22", "m20", "m23", "m26", "m25", "m28",
    "s16", "s26", "s14", "s15", "m30", "m31", "venom1", "m29", "venom2", "m32", "m33", "venom3", "s18",
    "s19", "s20", "m35", "s27", "s22", "m34", "s23", "s24", "m37", "m36", "s25", "m38", "s28", "s30",
    "m40", "m41", "m42", "s32", "m43"
];

let watchedList = JSON.parse(localStorage.getItem('marvel_watched_v6')) || {};
let favList = JSON.parse(localStorage.getItem('marvel_favorites_v1')) || {};

let currentUniverse = null; 
let currentType = null; 
let currentTab = 'release'; 
let currentFilter = 'all';
let searchQuery = '';

let isAppInitialized = false;

let audioCtx = null;
function getAudioContext() {
    if (!audioCtx) {
        audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
    return audioCtx;
}

function playSound(type) {
    try {
        const ctx = getAudioContext();
        
        if (type === 'click') {
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            osc.connect(gain);
            gain.connect(ctx.destination);
            osc.type = 'sine';
            osc.frequency.setValueAtTime(600, ctx.currentTime);
            osc.frequency.exponentialRampToValueAtTime(300, ctx.currentTime + 0.1);
            gain.gain.setValueAtTime(0.05, ctx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.1);
            osc.start();
            osc.stop(ctx.currentTime + 0.1);
            
        } else if (type === 'watch') {
            const osc1 = ctx.createOscillator();
            const gain1 = ctx.createGain();
            osc1.type = 'sine';
            osc1.frequency.value = 600; 
            osc1.connect(gain1);
            gain1.connect(ctx.destination);
            
            gain1.gain.setValueAtTime(0, ctx.currentTime);
            gain1.gain.linearRampToValueAtTime(0.1, ctx.currentTime + 0.02);
            gain1.gain.linearRampToValueAtTime(0, ctx.currentTime + 0.1);
            
            osc1.start(ctx.currentTime);
            osc1.stop(ctx.currentTime + 0.1);

            const osc2 = ctx.createOscillator();
            const gain2 = ctx.createGain();
            osc2.type = 'sine';
            osc2.frequency.value = 800; 
            osc2.connect(gain2);
            gain2.connect(ctx.destination);
            
            gain2.gain.setValueAtTime(0, ctx.currentTime + 0.1);
            gain2.gain.linearRampToValueAtTime(0.1, ctx.currentTime + 0.12);
            gain2.gain.linearRampToValueAtTime(0, ctx.currentTime + 0.3);
            
            osc2.start(ctx.currentTime + 0.1);
            osc2.stop(ctx.currentTime + 0.3);
            
        } else if (type === 'fav') {
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            osc.connect(gain);
            gain.connect(ctx.destination);
            osc.type = 'sine';
            osc.frequency.setValueAtTime(300, ctx.currentTime);
            osc.frequency.exponentialRampToValueAtTime(600, ctx.currentTime + 0.05);
            gain.gain.setValueAtTime(0, ctx.currentTime);
            gain.gain.linearRampToValueAtTime(0.1, ctx.currentTime + 0.01);
            gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.05);
            osc.start(ctx.currentTime);
            osc.stop(ctx.currentTime + 0.05);
            
        } else if (type === 'movie') {
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            osc.connect(gain);
            gain.connect(ctx.destination);
            osc.type = 'sine';
            osc.frequency.setValueAtTime(400, ctx.currentTime);
            gain.gain.setValueAtTime(0, ctx.currentTime);
            gain.gain.linearRampToValueAtTime(0.04, ctx.currentTime + 0.01);
            gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.08);
            osc.start(ctx.currentTime);
            osc.stop(ctx.currentTime + 0.08);
        }
    } catch (e) {}
}

// ----------------------------------------------------
// نظام التنقل الجديد باستخدام History API
// ----------------------------------------------------

function renderTypeSelection() {
    const container = document.getElementById('typeCardsContainer');
    const logo = document.getElementById('typeSelectionLogo');
    if (!container) return;

    if (currentUniverse === 'mcu') {
        if (logo) logo.innerHTML = 'MCU <span>CATEGORY</span>';
        container.innerHTML = `
            <div class="uni-card type-card type-uniform" onclick="openType('avengers')">
                <div class="card-bg-effect"></div>
                <h2>AVENGERS</h2>
            </div>
            <div class="uni-card type-card type-uniform" onclick="openType('defenders')">
                <div class="card-bg-effect"></div>
                <h2>DEFENDERS</h2>
            </div>
        `;
    } else if (currentUniverse === 'fox') {
        if (logo) logo.innerHTML = 'FOX <span>CATEGORY</span>';
        container.innerHTML = `
            <div class="uni-card type-card type-uniform" onclick="openType('xmen')">
                <div class="card-bg-effect"></div>
                <h2>X-MEN</h2>
            </div>
            <div class="uni-card type-card type-uniform" onclick="openType('f4')">
                <div class="card-bg-effect"></div>
                <h2>Fantastic Four</h2>
            </div>
        `;
    }
}

function showView(hash) {
    const overlay = document.getElementById('introOverlay');
    const uniSel = document.getElementById('universeSelection');
    const typeSel = document.getElementById('typeSelection');
    const mainCont = document.getElementById('mainContainer');

    if ((hash === '#main' && (!currentUniverse || !currentType)) ||
        (hash === '#type' && !currentUniverse)) {
        history.replaceState(null, '', '#intro');
        hash = '#intro';
    }

    if (overlay) overlay.style.display = 'none';
    if (uniSel) uniSel.classList.add('hidden-content');
    if (typeSel) typeSel.classList.add('hidden-content');
    if (mainCont) mainCont.classList.add('hidden-content');

    if (hash === '#universe') {
        if (uniSel) uniSel.classList.remove('hidden-content');
        isAppInitialized = true;
    } else if (hash === '#type') {
        renderTypeSelection();
        if (typeSel) typeSel.classList.remove('hidden-content');
    } else if (hash === '#main') {
        if (mainCont) mainCont.classList.remove('hidden-content');
        if (document.getElementById('moviesGrid') && document.getElementById('moviesGrid').innerHTML === '') {
            openMainContainer();
        }
    } else {
        if (overlay) {
            overlay.style.display = 'flex';
            setTimeout(() => {
                overlay.classList.remove('fade-out-overlay');
            }, 10);
        }
    }
}

window.addEventListener('popstate', () => {
    const hash = window.location.hash || '#intro';
    showView(hash);
});

window.addEventListener('load', () => {
    if (!window.location.hash || window.location.hash === '') {
        history.replaceState(null, '', '#intro');
        showView('#intro');
    } else {
        showView(window.location.hash);
    }
});

function openUniverse(uni) {
    playSound('click');
    currentUniverse = uni;
    renderTypeSelection();
    history.pushState(null, '', '#type');
    showView('#type');
}

function openType(type) {
    playSound('click');
    currentType = type;
    history.pushState(null, '', '#main');
    showView('#main');
    openMainContainer();
}

function goBackToUniverseSelection() {
    playSound('click');
    history.back();
}

function goBackToSelection() {
    playSound('click');
    history.back();
}

function openMainContainer() {
    currentTab = 'release'; 
    currentFilter = 'all'; 
    searchQuery = '';
    document.getElementById('searchInput').value = '';
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    document.querySelector('.filter-btn[data-filter="all"]').classList.add('active');
    
    renderTabs();
    renderGridWithAnimation();
}

function renderTabs() {
    const tabsWrapper = document.getElementById('dynamicTabs');
    tabsWrapper.innerHTML = '';
    
    const tabs = [
        { id: 'release', name: 'حسب الإصدار' },
        { id: 'chrono', name: 'حسب الأحداث' }
    ];

    tabs.forEach(tab => {
        const btn = document.createElement('button');
        btn.className = `tab-btn ${currentTab === tab.id ? 'active' : ''}`;
        btn.textContent = tab.name;
        btn.onclick = () => {
            if (currentTab !== tab.id) {
                playSound('click');
                currentTab = tab.id;
                renderTabs(); 
                renderGridWithAnimation();
            }
        };
        tabsWrapper.appendChild(btn);
    });
}

function renderGridWithAnimation() {
    const grid = document.getElementById('moviesGrid');
    
    const currentHeight = grid.offsetHeight;
    if (currentHeight > 0) {
        grid.style.minHeight = currentHeight + 'px';
    }

    grid.style.opacity = '0';
    grid.style.transform = 'translateY(10px) scale(0.99)';
    grid.style.transition = 'opacity 0.2s cubic-bezier(0.4, 0, 0.2, 1), transform 0.2s cubic-bezier(0.4, 0, 0.2, 1)';

    setTimeout(() => {
        renderGrid();
        
        void grid.offsetWidth;
        
        grid.style.opacity = '1';
        grid.style.transform = 'translateY(0) scale(1)';
        
        setTimeout(() => {
            grid.style.minHeight = '';
            grid.style.transition = '';
        }, 250);
    }, 200); 
}

function getDisplayIds() {
    if (currentUniverse === 'fox') {
        if (currentType === 'xmen') {
            return currentTab === 'release' ? foxXmenReleaseIds : foxXmenChronoIds;
        } else if (currentType === 'f4') {
            return currentTab === 'release' ? foxF4ReleaseIds : foxF4ChronoIds;
        }
    } else if (currentUniverse === 'mcu') {
        if (currentType === 'defenders') {
            return currentTab === 'release' ? mcuDefendersReleaseIds : mcuDefendersChronoIds;
        } else if (currentType === 'avengers') {
            return currentTab === 'release' ? mcuAvengersReleaseIds : mcuAvengersChronoIds;
        }
    }
    return [];
}

function updateProgress() {
    const ids = getDisplayIds();
    let visibleCount = 0;
    let watchedCount = 0;

    ids.forEach((id) => {
        const item = allMarvelItems[id];
        if (!item) return;
        if (searchQuery && !item.title.toLowerCase().includes(searchQuery.toLowerCase())) return;

        const isWatched = watchedList[id] || false;
        const isFav = favList[id] || false;

        if (currentFilter === 'watched' && !isWatched) return;
        if (currentFilter === 'favorites' && !isFav) return;

        visibleCount++;
        if (isWatched) watchedCount++;
    });

    const percent = visibleCount === 0 ? 0 : Math.round((watchedCount / visibleCount) * 100);
    document.getElementById('counterText').textContent = `${watchedCount} من ${visibleCount}`;
    document.getElementById('percentText').textContent = `${percent}%`;
    document.getElementById('progressBar').style.width = `${percent}%`;
}

function renderGrid() {
    const ids = getDisplayIds();
    const grid = document.getElementById('moviesGrid');
    grid.innerHTML = ''; 
    
    ids.forEach((id, index) => {
        const item = allMarvelItems[id];
        if (!item) return;

        if (searchQuery && !item.title.toLowerCase().includes(searchQuery.toLowerCase())) return;

        const isWatched = watchedList[id] || false;
        const isFav = favList[id] || false;

        if (currentFilter === 'watched' && !isWatched) return;
        if (currentFilter === 'favorites' && !isFav) return;

        const card = document.createElement('div');
        card.className = `card ${isWatched ? 'watched' : ''}`;
        
        card.addEventListener('click', (e) => {
            if(e.target.closest('.watch-btn') || e.target.closest('.fav-btn')) return;

            playSound('movie');
            
            const isAlreadyFocused = card.classList.contains('focused');

            document.querySelectorAll('.card').forEach(c => c.classList.remove('focused'));
            grid.classList.remove('has-focus');

            if (!isAlreadyFocused) {
                grid.classList.add('has-focus');
                card.classList.add('focused');
            }
        });

        card.innerHTML = `
            <div class="poster-box">
                <img src="${item.poster}" class="poster-img" loading="lazy" alt="${item.title}">
                <div class="fav-btn ${isFav ? 'active' : ''}" onclick="toggleFav('${id}', this, event)">
                    <svg viewBox="0 0 24 24"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
                </div>
            </div>
            <div class="card-details">
                <div class="card-meta">
                    <span class="order-tag">#${index + 1}</span>
                    <span>${item.year}</span>
                </div>
                <h3 class="title">${item.title}</h3>
                <button class="watch-btn" onclick="toggleWatched('${id}', this, event)">
                    ${isWatched ? 'تمت المشاهدة ✓' : 'تحديد كمُشاهد'}
                </button>
            </div>
        `;
        grid.appendChild(card);
    });

    updateProgress();
}

document.addEventListener('click', (e) => {
    if (!e.target.closest('.card')) {
        const grid = document.getElementById('moviesGrid');
        if(grid) {
            grid.classList.remove('has-focus');
            document.querySelectorAll('.card').forEach(c => c.classList.remove('focused'));
        }
    }
});

window.toggleWatched = function(id, btnElement, e) {
    e.preventDefault();
    e.stopPropagation(); 
    playSound('watch'); 
    watchedList[id] = !watchedList[id];
    localStorage.setItem('marvel_watched_v6', JSON.stringify(watchedList));
    
    if (currentFilter === 'watched' && !watchedList[id]) {
        document.getElementById('moviesGrid').classList.remove('has-focus');
        renderGridWithAnimation();
    } else {
        const card = btnElement.closest('.card');
        
        btnElement.classList.add('btn-pop-anim');
        setTimeout(() => btnElement.classList.remove('btn-pop-anim'), 300);

        if (watchedList[id]) {
            card.classList.add('watched');
            btnElement.innerHTML = 'تمت المشاهدة ✓';
        } else {
            card.classList.remove('watched');
            btnElement.innerHTML = 'تحديد كمُشاهد';
        }
        updateProgress();
    }
};

window.toggleFav = function(id, btnElement, e) {
    e.preventDefault();
    e.stopPropagation(); 
    playSound('fav'); 
    favList[id] = !favList[id];
    localStorage.setItem('marvel_favorites_v1', JSON.stringify(favList));
    
    if (currentFilter === 'favorites' && !favList[id]) {
        document.getElementById('moviesGrid').classList.remove('has-focus');
        renderGridWithAnimation();
    } else {
        btnElement.classList.add('btn-pop-anim');
        setTimeout(() => btnElement.classList.remove('btn-pop-anim'), 300);

        if (favList[id]) {
            btnElement.classList.add('active');
        } else {
            btnElement.classList.remove('active');
        }
    }
};

document.getElementById('searchInput').addEventListener('input', (e) => {
    searchQuery = e.target.value;
    renderGrid(); 
});

document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        playSound('click');
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        e.target.classList.add('active');
        currentFilter = e.target.dataset.filter;
        renderGridWithAnimation();
    });
});

document.getElementById('startBtn').addEventListener('click', () => {
    playSound('click');
    document.getElementById('introOverlay').classList.add('fade-out-overlay');
    
    setTimeout(() => {
        if (!isAppInitialized) {
            history.pushState(null, '', '#universe');
            showView('#universe');
        } else {
            history.back(); 
        }
    }, 400);
});

document.getElementById('openNoteBtn').addEventListener('click', () => {
    playSound('click');
    history.pushState(null, '', '#note');
    showView('#note');
});
