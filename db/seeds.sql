
-- Most of this data is extracted from mySQL's 
-- employee sample db.

INSERT INTO business_unit ( name )
VALUES
    ( "Customer Service" ),
    ( "Development" ),
    ( "Finance" ),
    ( "Human Resources" ),
    ( "Marketing" ),
    ( "Production" ),
    ( "Quality Management" ),
    ( "Research" ),
    ( "Sales" ), 
    ( "Corporate Relations" );

INSERT INTO position_titles ( position_title, salary, business_unit_id )
VALUES
    ("Engineer","68715","1"),
    ("Senior Engineer","75202","1"),
    ("Senior Staff","107613","1"),
    ("Senior Staff","67613","1"),
    ("Staff","55812","1"),
    ("Assistant Engineer","41569","2"),
    ("Engineer","86106","2"),
    ("Senior Engineer","80424","2"),
    ("Technique Leader","79742","2"),
    ("Technique Leader","95903","2"),
    ("Senior Staff","90457","3"),
    ("Staff","67328","3"),
    ("Senior Staff","85098","4"),
    ("Staff","66083","4"),
    ("Senior Staff","79229","4"),
    ("Senior Staff","72509","5"),
    ("Staff","67138","5"),
    ("Assistant Engineer","59053","6"),
    ("Engineer","72694","6"),
    ("Senior Engineer","99039","6"),
    ("Senior Engineer","112583","6"),
    ("Technique Leader","72777","6"),
    ("Technique Leader","75121","6"),
    ("Engineer","74450","7"),
    ("Senior Engineer","81229","7"),
    ("Technique Leader","75121","7"),
    ("Technique Leader","93193","7"),
    ("Staff","69570","8"),
    ("Senior Staff","79393","8"),
    ("Staff","69570","8"),
    ("Staff","79393","8"),
    ("Technique Leader","73459","8"),
    ("Senior Staff","109426","9"),
    ("Staff","82251","9"),
    ("Senior Staff","101987","9"),
    ("Senior Staff","99500","10");

INSERT INTO employee ( first_name, last_name, position_id, manager_id )
VALUES
    ("Yagil","Savasere","7","211"),
    ("Matk","Streng","18","207"),
    ("Kagan","Emmart","16","201"),
    ("Toshimori","Schlegelmilch","6","211"),
    ("Chaoyi","Rodite","11","203"),
    ("Vidar","Speer","7","211"),
    ("Satosi","Kuszyk","7","211"),
    ("Aiichiro","Comte","7","211"),
    ("Kyoichi","Axelband","18","207"),
    ("Kristian","Usery","18","207"),
    ("Froduald","Winter","12","205"),
    ("Tadahiko","Comte","20","207"),
    ("Yongmao","Perz","29","217"),
    ("Gro","Cheshire","18","207"),
    ("Weiye","Masand","29","217"),
    ("Arunas","Milicic","7","211"),
    ("Feixiong","Syrzycki","22","213"),
    ("Goo","Skogmar","18","207"),
    ("Gererd","Axelband","18","207"),
    ("Masanao","Holburn","16","201"),
    ("Ziya","Barriga","29","217"),
    ("Hirochika","Schwartzbauer","5","211"),
    ("Shigeo","Scallan","11","203"),
    ("Vojin","Lieblein","7","211"),
    ("Yurii","Demir","6","211"),
    ("Leon","Schrooten","2","221"),
    ("Vatsa","Gaughan","29","217"),
    ("Sakthirel","Emmerich","28","217"),
    ("Elvia","Schaaf","7","211"),
    ("Kendra","Baranowski","16","201"),
    ("Hilary","Biron","7","211"),
    ("Eran","Cesareni","29","217"),
    ("Shigeo","Dayana","11","203"),
    ("Shaleah","Sanella","4","221"),
    ("Chiranjit","Thisen","8","211"),
    ("Berni","Worfolk","22","213"),
    ("Mohit","Preusig","18","207"),
    ("Aamod","Buescher","28","217"),
    ("Erzsebet","Moffat","16","201"),
    ("Piyawadee","Aseltine","6","211"),
    ("Sachio","Rullman","29","217"),
    ("Youssef","Vrecion","16","201"),
    ("Aran","Peha","5","211"),
    ("Van","Strooper","18","207"),
    ("Bodo","Zhiwei","16","201"),
    ("Gou","Lowrie","25","219"),
    ("Herb","Schicker","27","219"),
    ("Aran","Rubsam","18","207"),
    ("Lubomir","Verhaegen","29","217"),
    ("Elvia","Sambasivam","4","221"),
    ("Lalit","Toyoshima","29","217"),
    ("Baziley","Peyn","13","205"),
    ("Snehasis","Shimshoni","7","211"),
    ("Udi","Bultermann","18","207"),
    ("Charlene","Fabrizio","22","213"),
    ("Hongzhu","Spinelli","28","217"),
    ("Niteen","Crooks","6","211"),
    ("Poorav","Atchley","18","207"),
    ("Susumu","DuCasse","29","217"),
    ("Yolla","Gire","6","211"),
    ("Aleksandar","Speek","18","207"),
    ("Roddy","Lalonde","7","211"),
    ("Miyeon","Cooley","12","205"),
    ("Yongmao","Lindenbaum","18","207"),
    ("Niclas","Lalonde","7","211"),
    ("Ennio","Conde","18","207"),
    ("Pascal","Deverell","7","211"),
    ("Laurentiu","Weisert","4","221"),
    ("Badri","Suermann","13","205"),
    ("Marsha","Gecsel","7","211"),
    ("Gretta","Peron","29","217"),
    ("Sanjay","Acton","7","211"),
    ("Mana","Randi","6","211"),
    ("Shmuel","Maccarone","18","207"),
    ("Lucien","Cunliffe","18","207"),
    ("Sergi","Lipner","12","205"),
    ("Yuichiro","Awdeh","20","207"),
    ("Thodoros","Scharstein","18","207"),
    ("Genevieve","Varman","18","207"),
    ("Mats","Binkley","12","205"),
    ("Sivanarayana","Rodite","18","207"),
    ("Chaitali","Shigei","25","219"),
    ("Charmane","Speek","3","221"),
    ("Syozo","Majewski","11","203"),
    ("Limsoon","Baek","29","217"),
    ("Kwan","Casperson","7","211"),
    ("Kousuke","Erdi","1","221"),
    ("Sachin","Kemmerer","18","207"),
    ("Giordano","Emden","25","219"),
    ("Iara","Whittlesey","7","211"),
    ("Indrajit","Rohrbach","7","211"),
    ("Demin","Gerteisen","6","211"),
    ("Barna","Schreiter","12","205"),
    ("Martien","Ramsey","29","217"),
    ("Shrikanth","Huttel","18","207"),
    ("Srinidhi","Prenel","22","213"),
    ("Jiafu","Kitai","29","217"),
    ("Arnd","Reeker","18","207"),
    ("Ingemar","Lieblein","6","211"),
    ("Hirochika","Siepmann","13","205"),
    ("Souichi","Colorni","22","213"),
    ("Vishwani","Glinert","7","211"),
    ("Yuguang","Hainaut","8","211"),
    ("Yoshinari","Kavvadias","25","219"),
    ("Pasqua","Kohling","11","203"),
    ("Zhonghui","Peng","8","211"),
    ("Taegyun","Pappas","22","213"),
    ("Masasuke","Roison","22","213"),
    ("Kiyotoshi","Kragelund","29","217"),
    ("Gully","Plump","7","211"),
    ("Margareta","Sommen","7","211"),
    ("Cordelia","DeMori","29","217"),
    ("Lech","Linares","28","217"),
    ("Monique","Katalagarianos","13","205"),
    ("Xiadong","Thimonier","29","217"),
    ("Snehasis","Swiss","29","217"),
    ("Constantino","Karunanithi","4","221"),
    ("Aloke","Motley","18","207"),
    ("Gregory","Vidya","7","211"),
    ("Berthier","Zhang","6","211"),
    ("Luisa","Karcich","8","211"),
    ("Kwangyoen","Steenbeek","7","211"),
    ("Moto","Ruther","17","207"),
    ("Shunichi","Barinka","29","217"),
    ("Bojan","Reghbati","18","207"),
    ("Fusako","Heusch","4","221"),
    ("Hiroyasu","Muntz","16","201"),
    ("Pintsang","Bratten","29","217"),
    ("Ebru","Benner","22","213"),
    ("Caolyn","Riesenhuber","11","203"),
    ("Rosalie","Gopalakrishnan","16","201"),
    ("Josyula","Beeson","28","217"),
    ("Maya","Braunschweig","7","211"),
    ("Constantijn","Poupard","6","211"),
    ("Ramzi","Brobst","6","211"),
    ("Eran","Beeson","18","207"),
    ("Qiwen","Improta","11","203"),
    ("Chanjung","Schade","18","207"),
    ("Maia","Tomescu","16","201"),
    ("Bikash","Mansanne","13","205"),
    ("Sven","Nollmann","18","207"),
    ("Heekeun","Rassart","18","207"),
    ("Yannik","Itzigehl","7","211"),
    ("Jessie","Range","18","207"),
    ("Sushant","Wroclawski","1","221"),
    ("Kolar","Riesenhuber","29","217"),
    ("Zita","Katzenelson","22","213"),
    ("Roddy","Zallocco","29","217"),
    ("Doohun","Plessier","29","217"),
    ("Guiseppe","Openshaw","18","207"),
    ("Munehiko","Fontan","29","217"),
    ("Terresa","Caine","18","207"),
    ("Hitomi","Lubachevsky","13","205"),
    ("Heekeun","Baezner","22","213"),
    ("Lobel","Schlumberger","22","213"),
    ("Khun","Ranka","16","201"),
    ("Xianlong","Valiente","11","203"),
    ("Gonzalo","Bisiani","6","211"),
    ("Barun","Grabner","25","219"),
    ("Shahid","Xiaoshan","16","201"),
    ("Sumant","Hutter","13","205"),
    ("Ymte","Spinelli","25","219"),
    ("Nigel","Muhlberg","29","217"),
    ("Arumugam","Wynblatt","18","207"),
    ("Emran","Penn","6","211"),
    ("Yishai","Boudaillier","29","217"),
    ("Sukumar","Shiratori","16","201"),
    ("Atreyi","Shihab","11","203"),
    ("Shrikanth","Mitina","6","211"),
    ("Mats","Farrel","23","213"),
    ("Tesuya","Plavsic","6","212"),
    ("Filipe","Seiwald","7","211"),
    ("Tzvetan","Herath","25","219"),
    ("Shir","Ohori","13","205"),
    ("Zissis","Rosca","6","211"),
    ("Hatsukazu","Murrill","18","207"),
    ("Gererd","Unno","16","201"),
    ("Przemyslawa","Beilner","2","221"),
    ("Houman","Marciano","1","221"),
    ("Yuriy","Ghazalie","29","217"),
    ("Rosalyn","Olivero","8","211"),
    ("Hatim","Rosca","6","211"),
    ("Douadi","Swan","20","207"),
    ("Supot","Vidya","7","211"),
    ("Berhard","Quadeer","18","207"),
    ("Jeong","Ginneken","8","211"),
    ("Sarita","Wrigley","4","221"),
    ("Karlis","Mullainathan","6","211"),
    ("Yongdong","Reistad","25","219"),
    ("Ebbe","Beausoleil","13","205"),
    ("Hilari","Pocchiola","6","211"),
    ("Bernd","Anger","16","201"),
    ("Hironobu","Bolotov","11","203"),
    ("Khalid","Kropp","18","207"),
    ("Uta","Szemeredi","18","207"),
    ("Oscal","Pero","29","217"),
    ("Munehiko","Orlowska","6","211"),
    ("Danai","McFarlan","7","211"),
    ("Amstein","Ernst","25","219"),
    ("Sampalli","Tempesti","13","205"),
    ("Margareta","Markovitch","15",null),
    ("Vishwani","Minakawa","15",null),
    ("Ebru","Alpin","10",null),
    ("Isamu","Legleitner","10",null),
    ("Shirish","Ossenbruggen","14",null),
    ("Karsten","Sigstam","12",null),
    ("Krassimir","Wegerle","21",null),
    ("Rosine","Cools","21",null),
    ("Shem","Kieras","21",null),
    ("Oscar","Ghazalie","19",null),
    ("DeForest","Hagimont","9",null),
    ("Leon","DasSarma","9",null),
    ("Peternela","Onuegbe","24",null),
    ("Rutger","Hofmeyr","24",null),
    ("Sanjoy","Quadeer","24",null),
    ("Dung","Pesch","24",null),
    ("Przemyslawa","Kaelbling","30",null),
    ("Hauke","Zhang","30",null),
    ("Arie","Staelin","26",null),
    ("Hilary","Kambil","26",null),
    ("Tonny","Butterworth","4",null),
    ("Marjo","Giarratana","4",null),
    ("Xiaobin","Spinelli","31",null),
    ("Yuchang","Weedman","31",null);