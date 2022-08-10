-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 10, 2022 at 11:26 AM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `gs-vinylstock`
--

-- --------------------------------------------------------

--
-- Table structure for table `releases_home`
--

CREATE TABLE `releases_home` (
  `pk_release_id` int(11) NOT NULL,
  `release_id` int(11) NOT NULL,
  `release_marketplace_id` int(11) NOT NULL,
  `title` char(120) NOT NULL,
  `price` char(35) NOT NULL,
  `price_usd` double NOT NULL,
  `label` char(120) NOT NULL,
  `cat` char(80) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `releases_home`
--

INSERT INTO `releases_home` (`pk_release_id`, `release_id`, `release_marketplace_id`, `title`, `price`, `price_usd`, `label`, `cat`) VALUES
(1, 5528468, 2078866547, 'Brighouse & Rastrick Brass Band* - The Floral Dance (7\', Single, Kno)', '£3,000,000.00', 3628935, 'Transatlantic Records', 'BIG 548'),
(2, 15548593, 1942382780, 'Yoko Ono - It\'s Alright (I See Rainbows) (LP, Promo)', '€2,000,000.00', 2044440, 'Polydor', 'POLD 5073'),
(3, 22978313, 1949857247, 'Glass Animals - I Don\'t Wanna Talk (I Just Wanna Dance) (12\', Ltd, Num, Pic)', '£999,999.00', 1209643.79, 'Wolf Tone Records', '4529287'),
(4, 6878694, 1980950813, 'Enjoy Your Parrot - 04 (Sick) (LP, Album)', '£1,000,000.00', 1209645, 'Andersen M Studio', 'AMS005-LP'),
(5, 23139101, 1963359863, 'Give It To God - The Mother Of All Demo Tapes (Cass, Album)', '$1,000,000.00', 1000000, 'Exempli Gratia Ministries', 'none'),
(6, 5029, 1798030900, 'Veracocha - Carte Blanche (12\')', '£689,921.00', 834559.49, 'Deal Records, Deal Records', 'deal 022, DEAL022'),
(7, 23615804, 2025099932, 'Pearl Jam - Live On Two Legs (2xLP, Album, RE, Cle)', '$413,500.00', 413500, 'Epic, Legacy', '19439952191'),
(8, 23502053, 2041044878, 'Hans Zimmer - Dune (Original Motion Picture Soundtrack) (2xCD, Album + CD, Album + Comp, Dlx)', '$283,600.00', 283600, 'WaterTower Music, Mondo (3)', 'none'),
(9, 1318188, 2012793947, 'Kenny Loggins With Jim Messina* - Sittin\' In (LP, Album, Ter)', '$155,555.00', 155555, 'Columbia', 'C 31044'),
(10, 4644665, 2073545192, 'Al Martino - We Could (LP, Album, RE)', 'CA$200,000.00', 155410, 'Pickwick/33 Records', 'SPC-3115'),
(11, 20506360, 1666103899, 'Prince And The Revolution - When Doves Cry (Acetate, 7\', S/Sided)', '$150,000.00', 150000, 'Warner Bros. Records', '23156'),
(12, 20506192, 1666098406, 'Prince And The Revolution - Purple Rain (Acetate, 7\', S/Sided)', '$150,000.00', 150000, 'Warner Bros. Records', '23151'),
(13, 20085265, 1612109605, 'Prince And The Revolution - Let\'s Go Crazy (Acetate, 7\', S/Sided)', '$150,000.00', 150000, 'Warner Bros. Records', '23135'),
(14, 6058578, 1973190581, 'Led Zeppelin - Led Zeppelin III (CD, Album, MP, M/Print, RE)', '€128,000.00', 130844.16, 'Warner Bros. Records', '7599-23720-2'),
(15, 20444002, 1978723517, 'Gorillaz - Meanwhile EP (12\', Ltd, Num, TP)', '€120,000.00', 122666.4, 'Parlophone', 'KONG Studios'),
(16, 2707677, 1993588847, 'The Digger$ - Nobody\'s Fool (7\', Single)', '£100,000.00', 120964.5, 'Creation Records', 'CRE234'),
(17, 1115186, 1932673241, 'David Bowie - The Rise And Fall Of Ziggy Stardust And The Spiders From Mars (LP, Album, Ltd, Num, Pic)', '£100,000.00', 120964.5, 'RCA', 'BOPIC 3'),
(18, 7835209, 1901386121, 'Joe Bari And Pat Easton - Vieni Qui / Fascinating Rhythm (Shellac, 10\')', 'CA$151,270.00', 117544.35, 'Leslie Records, Inc', '919'),
(19, 9834244, 2085743462, 'Hunters Palace - Il​-​Palazz Tal​-​Kaccatur (10\')', '£86,596.10', 104750.42, 'Not On Label', 'HP 001'),
(20, 618906, 2036391164, 'Coldplay - Safety E.P. (CD, EP)', '€100,000.00', 102222, 'Not On Label (Coldplay Self-released)', 'none'),
(21, 8433841, 1951180520, 'Navarra,*, D\'Arco* - Camille Saint-Saëns : Le Cygne, Allegro Appassionato - Gabriel Fauré : Elegie, Sérénade, Papillon -', '€100,000.00', 102222, 'Calliope', 'CAL 1854'),
(22, 6591924, 1540437706, 'Gehenna (5) - En Busca Del Valle De Gehenna (CD, Album, Unofficial)', '$100,000.00', 100000, 'Sade Records', 'SA055'),
(23, 22313869, 1871378518, 'The Mask - Cuban Pete (Acetate, 12\', S/Sided, Promo)', '$100,000.00', 100000, 'Sterling Sound', 'no cat number'),
(24, 22146838, 1873118059, 'Mach-Hommy - Pray For Haiti (LP, Album, Ltd, Num, Hai)', '$99,999.00', 99999, 'Daupe!', 'DM-SP-076'),
(25, 1334394, 2013343508, 'The Beatles - Sgt. Pepper\'s Lonely Hearts Club Band (LP, Album, Gat)', '$85,000.00', 85000, 'Capitol Records, Capitol Records, Capitol Records', 'SMAS 2653, SMAS-2653, 2653'),
(26, 6261872, 1426633558, 'No Artist - Discogs Sandbox Release™ (LP)', '$77,777.00', 77777, 'Not On Label', 'none'),
(27, 129911, 1968898322, 'Sykurmolarnir* - Illur Arfur! (LP, Album, Gat)', '$72,000.00', 72000, 'One Little Indian', 'tplp15L'),
(28, 3564548, 1910520656, 'Grimes (4) - Geidi Primes (Cass, Ltd)', '$69,420.00', 69420, 'Arbutus Records', 'ABT007'),
(29, 22511468, 1951541876, 'Al.divino x Mr. Rose (2) - Hammerabi (LP, Album, Ltd, Obi + Flexi, 7\', Single)', '$69,420.00', 69420, 'Novelty (9)', 'NOV-008'),
(30, 1077198, 1475141014, 'Jones & Stephenson - The First Rebirth (12\', Ltd, Yel)', '€65,000.00', 66444.3, 'Bonzai Records', 'BR 93034'),
(31, 20444002, 2044785599, 'Gorillaz - Meanwhile EP (12\', Ltd, Num, TP)', '£50,000.00', 60482.25, 'Parlophone', 'KONG Studios'),
(32, 12526408, 2033548634, 'Boston Manor - Welcome To The Neighbourhood (LP, Album, Ltd, Num, Cle)', '£50,000.00', 60482.25, 'Pure Noise Records', 'PNE220'),
(33, 21847594, 1885044484, 'Joel Schoch - FAR: Lone Sails Original Soundtrack (2xLP, Album, Ltd)', '€55,000.10', 56222.1, 'Limited Run Games', 'LRV-0028'),
(34, 10462949, 2054865368, 'Shon Dels Unlimited* - Like It Or Lump It / No Two Ways About It (7\')', '£45,073.60', 54522.33, 'Epitome (2)', '7195'),
(35, 20858245, 1703409250, 'Благовест И Светослав Аргирови - Благовест И Светослав Аргирови = Blagovest And Svetoslav Argirov (LP, Album)', '€50,000.00', 51111, 'Балкантон', 'ВТА 11480'),
(36, 6881525, 1847547922, 'Various - Quadrophenia (Music From The Soundtrack Of The Who Film) (2xLP, Comp, Gat)', '€50,000.00', 51111, 'Polydor', '2625 037'),
(37, 4055323, 1939666967, 'Stevie Wonder - Songs In The Key Of Life (2xLP, Album + 7\')', '€47,490.00', 48545.23, 'Motown', 'VIP-6364~5'),
(38, 21847594, 2044803515, 'Joel Schoch - FAR: Lone Sails Original Soundtrack (2xLP, Album, Ltd)', '£40,000.00', 48380.44, 'Limited Run Games', 'LRV-0028'),
(39, 8066727, 1798299037, 'Young Thug (2) - Barter 6 (2xLP, Album)', 'A$65,000.00', 45337.5, 'Atlantic, 300 Entertainment', '549951-1'),
(40, 6261872, 1435174720, 'No Artist - Discogs Sandbox Release™ (LP)', '$44,444.00', 44444, 'Not On Label', 'none'),
(41, 392900, 2075331986, 'Nirvana - Love Buzz b/w Big Cheese (7\', Single, Ltd, Num)', '€43,212.30', 44172.17, 'Sub Pop', 'SP 23'),
(42, 3692689, 1792153777, 'Alan Vega - Outlaw: Live In Europe \'86 (LP)', '$43,210.10', 43210, 'Selfish Records', 'BEL-12016'),
(43, 23512448, 2064199652, 'Stove God Cooks - Reasonable Drought DEADFACE EDT (LP, Album, Num, RE, DEA)', '£35,000.00', 42332.88, 'Near Mint', 'NMR051'),
(44, 18572623, 1967973590, 'The Disciples - Underrave (12\', Ltd, Gre)', '€40,000.00', 40888.8, 'Bonzai Records', 'BR 94069'),
(45, 9085795, 899517913, 'Billboard Combat - Nazi (Cass)', '$40,000.00', 40000, 'Not On Label (Andrew Smith (2) Self-released)', 'none'),
(46, 12298689, 1927274429, 'U2 - Achtung Baby (2xLP, Album, RE, RM, 180)', '£32,975.00', 39883.63, 'Island Records, UMC', '5797009, 00602557970098'),
(47, 1077198, 1155611009, 'Jones & Stephenson - The First Rebirth (12\', Ltd, Yel)', '€35,000.00', 35777.7, 'Bonzai Records', 'BR 93034'),
(48, 7076820, 1504271587, 'High Smile HiFi Feat. S\'Kaya - Deejay Livication (7\', Single)', 'CHF34,819.00', 36584.18, 'Top Smile Records', 'TSR009'),
(49, 5882431, 2059303157, 'Led Zeppelin - Led Zeppelin (4x12\', S/Sided, Album, RE, 200 + 4x12\', S/Sided, A)', '£30,000.00', 36286.35, 'Atlantic, Classic Records', 'RTH 3001-45'),
(50, 14197659, 1806674788, 'Billy Strings - Home (2xLP, Album, Ltd, Ora)', '$33,333.00', 33333, 'Rounder Records', '1166100637'),
(51, 6261872, 1435175416, 'No Artist - Discogs Sandbox Release™ (LP)', '$33,333.00', 33333, 'Not On Label', 'none'),
(52, 16675797, 1656934159, 'Nas - King\'s Disease (2xLP, Album, Ltd, Cle)', '$32,000.00', 32000, 'Mass Appeal', 'MSAP0094LP'),
(53, 21382477, 1902462944, 'Air & Air - A Time to Break the Silence (CD, Album)', '€30,000.00', 30659.1, 'BanglaTrac Media', 'none'),
(54, 13217472, 1222142136, 'David Bowie - The Next Day (2xLP, Album, Ltd, Num, RE, Blu)', '€30,000.00', 30659.1, 'ISO Records, Columbia', '88765 461861'),
(55, 21035263, 1724790877, 'Uriah Heep - Untitled (Acetate, LP, S/Sided)', '£25,000.00', 30238.62, 'Not On Label', 'none'),
(56, 3963192, 2010886160, 'Michael Jackson - I Just Can\'t Stop Loving You (Spanish) (Acetate, 10\', S/Sided)', '£24,800.00', 29996.72, 'CBS', 'none'),
(57, 5502386, 1179407927, 'Far East (5) - Ripper Slasher / Screaming In The Night (7\', Single)', '$30,000.00', 30000, 'BME Records And Tapes', 'BME-784-13'),
(58, 11045824, 1228808430, 'Bruce Springsteen - Sherry Darling (7\', Single, Promo, Wit)', '$30,000.00', 30000, 'CBS', 'CBS 9568'),
(59, 9603420, 437462047, 'Screeching Weasel / The Ozzfish Experience - If You Can\'t Have Fun.. Why Bother Living? (7\', TP)', '$30,000.00', 30000, 'Weaselfish Records', 'none'),
(60, 12459797, 1964954660, 'Nick Mason - Unattended Luggage (LP, Album, RM + LP, Album, RM + LP, Album, RM + Bo)', '$30,000.00', 30000, 'Warner Music Group, Parlophone', '0190295660222'),
(61, 985108, 1583235517, 'Wolf Eyes - Wolf Eyes (Cass, S/Sided, Ltd)', '$30,000.00', 30000, 'Hanson Records', 'HN 043'),
(62, 8651035, 1179416729, 'Warzwolf - Valley Of The Shadow (LP, Album)', '$30,000.00', 30000, 'Raindancer Records', 'MCF 5157'),
(63, 418333, 1962043766, 'The Misfits* - Cough/Cool / She (7\', Single, Ltd)', '$29,999.00', 29999, 'Blank Records (11)', 'BLANK 101'),
(64, 7153391, 2055689027, 'Mary Hopkin - Post Card (LP, Album, Red)', '$28,080.00', 28080, 'Apple Records', 'AP-8644'),
(65, 2161017, 1985468186, 'No Artist - The Nothing Record Album (12\', Album)', '$27,500.10', 27500, 'Solid Gold Records (2)', 'SGR 1002'),
(66, 9723864, 2016776555, 'Tish Hinojosa - Homeland (LP, Album)', '$26,666.00', 26666, 'A&M Records, Sung Eum Limited', 'SP 5263, SEL-RA 1447'),
(67, 13518819, 1991410664, 'Loyle Carner - Not Waving, But Drowning (LP, Album)', '£21,975.00', 26579.75, 'AMF Records (3)', 'AMFLP0012'),
(68, 6508377, 364077899, 'Mörk Gryning - Demo 1994 (Cass)', '€25,000.00', 25549.25, 'Not On Label (Mörk Gryning Self-released)', 'none'),
(69, 5015941, 2013381932, 'The Beatles - Please Please Me (LP, Album, Gol)', '€25,000.00', 25549.25, 'Parlophone', 'PCS 3042'),
(70, 4257631, 1133453235, 'Queen - The Complete Works (14xLP, RM + Box, Comp, Ltd)', '€24,000.00', 24527.28, 'EMI', 'QB 1'),
(71, 3971910, 1805738857, 'Miles Davis - Miles In The Sky (LP, Album, RE)', '$25,000.00', 25000, 'CBS/Sony', '23AP 2573'),
(72, 9810438, 2044486226, 'Arlene - Band Of Gold (12\')', '$25,000.00', 25000, 'ID Records', 'ID 1018'),
(73, 12152246, 725439195, 'Nas With National Symphony Orchestra - Illmatic (Live From The Kennedy Center) (2xLP, Album, Ltd, TP)', '$25,000.00', 25000, 'Mass Appeal', 'MSAP0055-1-T'),
(74, 3080908, 1669702909, 'Janis Joplin - Janis (2xLP, Comp, Mono, Gat)', '$25,000.00', 25000, 'Columbia', 'PG 33345'),
(75, 10462949, 1415789473, 'Shon Dels Unlimited* - Like It Or Lump It / No Two Ways About It (7\')', '$25,000.00', 25000, 'Epitome (2)', '7195'),
(76, 22222921, 1908972194, 'Aretha Franklin - Aretha Now (Reel, 4tr Stereo, Album)', '$25,000.00', 25000, 'Atlantic', '(32) ALX 8186'),
(77, 10089233, 2044487333, 'The Revue - No Tears (12\')', '$25,000.00', 25000, 'Radical Records', 'RR-0001'),
(78, 9849677, 1162839601, 'Laura Nyro - Sweet Blindness / Eli\'s Coming (7\', Single, Promo)', '$25,000.00', 25000, 'Columbia', '4-44531'),
(79, 384928, 1611162973, 'Sex Pistols - God Save The Queen (7\', Single)', '€24,000.00', 24527.28, 'A&M Records', 'AMS 7284'),
(80, 13862491, 1747447924, 'Sarah Bethe Nelson - Weird Glow (LP)', '£18,999.00', 22980.15, 'Burger Records', 'LP-BRGR-1396'),
(81, 12963508, 1698718438, 'Anti (6) - I Don\'t Want To Die In Your War (LP, Album, RE)', '£18,975.00', 22951.12, 'Radiation Reissues', 'RRS65'),
(82, 10457353, 2055761663, 'Ziggy Gonzales* With The Ziggy Gonzales Orch. - Ziggy\'s Turn (LP)', '£19,090.00', 23090.21, 'Glen Records', 'SS 6195-01'),
(83, 435539, 1857590020, 'Falco - Falco 3 (LP, Album)', '€22,222.20', 22710.22, 'GiG Records, TELDEC', 'GIG 222-127, 6.26210'),
(84, 3072293, 1643330332, 'Eagles - Their Greatest Hits 1971-1975 (LP, Album, Comp, RP, Emb)', '€22,222.00', 22710.22, 'Asylum Records', 'P-10150Y'),
(85, 13142179, 1388690851, 'Led Zeppelin - Led Zeppelin (LP, Album, RE, TP, W/Lbl, 180)', '€21,500.00', 21972.36, 'Warner Music Group', 'BD 16356-01'),
(86, 5015941, 2044520924, 'The Beatles - Please Please Me (LP, Album, Gol)', '£18,000.00', 21771.81, 'Parlophone', 'PCS 3042'),
(87, 16254739, 1615019449, 'Alien Sex Fiend - Acid Bath (LP, W/Lbl)', '€21,353.00', 21822.13, 'Rebel Rec.', 'RE 002 A'),
(88, 4579103, 1979749421, 'Syd Barrett - Octopus / Golden Hair (7\', Single)', '€20,000.00', 20439.4, 'Harvest', '2C 006-04435 M'),
(89, 4894222, 1383229297, 'The Pink Floyd* - Arnold Layne / Candy And A Currant Bun (7\', Single, Mono)', '€20,000.00', 20439.4, 'Columbia', '45-DB. 8156'),
(90, 2031147, 2002206830, 'Prince - The Black Album (LP, Album)', '€20,000.00', 20439.4, 'Warner Bros. Records, Warner Bros. Records, Warner Bros. Records', '925 677-1, WX 147, WX147'),
(91, 5867391, 1202216660, 'U2 - All I Want Is You (12\', Single, Gre)', '€20,000.00', 20439.4, 'Island Records', 'X 14678'),
(92, 634283, 818758611, 'Abruptum - Evil (7\', EP)', '€20,000.00', 20439.4, 'PS Records', 'PS-003'),
(93, 6926607, 1744124323, 'The Velvet Underground & Nico (3) - The Velvet Underground & Nico (LP, Album, MP, Eas)', 'A$29,950.00', 20890.12, 'Verve Records', 'V6-5008'),
(94, 16252881, 1208032026, 'Pink Floyd - The Dark Side Of The Moon (LP, TP)', '€20,000.00', 20439.4, 'EMI', 'HW-5149'),
(95, 94804, 1949214251, 'The Pharcyde - Bizarre Ride II The Pharcyde (2xLP, Album, Ltd, Yel)', '€20,000.00', 20439.4, 'Delicious Vinyl', '14221-1'),
(96, 14567491, 1516063123, 'Kandis (2) - Kandis 19 - Latest & Greatest (LP, Album)', '€19,000.00', 19417.43, 'Bellevue Publishing Uk Ltd', '02146-VB'),
(97, 14285060, 1607748352, 'Gary L. Dunker - Where Do I Go From Here / All The Time (7\')', '$20,000.00', 20000, 'GLD Records', '8054S19'),
(98, 10457353, 1669691020, 'Ziggy Gonzales* With The Ziggy Gonzales Orch. - Ziggy\'s Turn (LP)', '$20,000.00', 20000, 'Glen Records', 'SS 6195-01'),
(99, 1533804, 1674719116, 'Rhyme 2 Rhythm - Let The Bass Boom!!! / Whose Got The Skillz (12\')', '$20,000.00', 20000, 'Strictly Hype Recordings', 'SH-109'),
(100, 7183292, 1519705948, 'Sonata Arctica - Ecliptica (CD, Album)', '$20,000.00', 20000, 'NEMS Enterprises', 'NEMS 172'),
(101, 9417667, 1718612599, 'Queen - A Night At The Opera (LP, Album, CSM)', '$20,000.00', 20000, 'Elektra', '7E-1053'),
(102, 15999567, 1179962785, 'The Clash - The Magnificent Seven (7\', Single)', '$20,000.00', 20000, 'Epic', '14-02055'),
(103, 13350358, 1180901267, 'Sabrina (39) - I Love Acoustic (Sweetheart Edition) (2xCD, Comp)', '€19,750.00', 20183.91, 'Universal', '060253719687'),
(104, 7514776, 1818999958, 'Ed Sheeran - The Orange Room EP (CD, EP)', '£16,000.00', 19352.72, 'Sheeran Lock', 'none'),
(105, 7602199, 2069445575, 'Damon Fox (2) - Boney Maronie / Packing Up (7\')', '£16,000.00', 19352.72, 'Fairmount Records', 'F-1021'),
(106, 12382106, 775046379, 'Jake Shears - Jake Shears (LP, Album)', '$18,689.00', 18689, 'Freida Jean Records', 'FREIDA JEAN LP1'),
(107, 219796, 2043840578, 'Ultimate Buzz Featuring M.C. Bee* - The Summer Anthem E.P. (12\', EP)', '£15,000.00', 18143.18, 'Clubscene Records', 'CSRT046'),
(108, 12333986, 2064162257, 'Talk Talk - The Colour Of Spring (LP, Album, EMI)', '£14,995.00', 18137.13, 'EMI, EMI', 'EMC 3506, 24 0491 1'),
(109, 2240692, 1892934962, 'Billy Nicholls - Would You Believe (LP, Album)', '$18,000.00', 18000, 'Immediate', 'IMCP 009'),
(110, 13217472, 896740115, 'David Bowie - The Next Day (2xLP, Album, Ltd, Num, RE, Blu)', '$17,999.00', 17999, 'ISO Records, Columbia', '88765 461861'),
(111, 18816187, 2089593779, 'Hi-Fi Set - The Diary (CD, Album, RE)', 'CHF17,076.90', 17941.6, 'Alfa', 'ALCA-9097'),
(112, 12479637, 1554816607, 'Duke Ellington And His Orchestra - Black And Tan Fantasy (Shellac, 12\', RE)', '€17,000.00', 17376.19, 'Anthologie Du Jazz', 'AFG-8'),
(113, 838287, 1725399382, 'Curtis Mayfield - Rapping (Special Promotional Radio Show) (LP, Promo, Transcription)', '€17,500.00', 17887.26, 'Curtom', 'CRS-SP'),
(114, 11184027, 1857418741, 'Migrant Family - Migrant Family (LP, Album)', '£14,500.00', 17538.4, 'Not On Label', 'none'),
(115, 998617, 1330395916, 'Richter*, Rostropovich*, Schumann* - Piano Concerto • Cello Concerto (LP)', '$17,580.00', 17580, 'Deutsche Grammophon', '2538 025'),
(116, 12581498, 1579805188, 'The Jimi Hendrix Experience - Are You Experienced? (Reel, 4tr Stereo, 7\' Reel, Album)', '€17,000.00', 17376.19, 'Reprise Records', 'RST 6261-C'),
(117, 9958609, 2062864790, 'Randy (4) - The Rest Is Silence (CD, Album)', '$17,099.00', 17099, 'Victor', 'VICP-5776'),
(118, 14838048, 1944573737, 'The Beatles And Frank Ifield - The Beatles And Frank Ifield On Stage (LP, Comp)', '€16,000.00', 16354.06, 'Vee Jay Records', 'VJLPS-1085'),
(119, 11464558, 1753367440, 'Jacob De Vries - Bulletin From Britain 78 Bulletin From Britain 79 (10\')', 'A$24,000.00', 16735.08, 'EMI Custom Service', 'PR.3438'),
(120, 4943900, 1773370057, 'Taylor Swift - Red (2xLP, Album, Ltd, Promo, Red)', '$16,000.00', 16000, 'Big Machine Records', 'BMR310400D'),
(121, 10668650, 1817987725, 'Lifehouse - No Name Face (2xLP, Album, Roo)', '$16,000.00', 16000, 'DreamWorks Records, SMLXL Vinyl', 'B0026481-01'),
(122, 10648144, 1188429504, 'Various - Bonzai Trance Progressive Africa (CD, Comp)', '€15,000.00', 15331.93, 'Bonzai Records', 'CDBSP3070'),
(123, 4257631, 1750829149, 'Queen - The Complete Works (14xLP, RM + Box, Comp, Ltd)', '€15,000.00', 15331.93, 'EMI', 'QB 1'),
(124, 14845774, 1909519121, 'Cousin Feo x Dre Mendoza - Provoleta (12\', EP, Ltd, S/Edition, Blu)', '€15,000.00', 15331.93, 'Loretta Records (5)', 'LOR-61'),
(125, 7768304, 1838583313, 'Led Zeppelin - Led Zeppelin III (LP, Album, Col)', '€15,000.00', 15331.93, 'Atlantic', 'SD 7201'),
(126, 16314525, 1220368605, 'Nirvana - Nevermind (LP, Album)', '€14,995.00', 15326.82, 'The David Geffen Company', 'GEFL 20015'),
(127, 13033037, 1179892061, 'Ike & Tina Turner - River Deep - Mountain High (LP, Album, TP)', '$15,000.00', 15000, 'Philles Records', 'PHLP-4011'),
(128, 23574482, 2019465302, 'Stephen Stills - No One Left To Please (8\', S/Sided, Single, TP, Ace)', '$15,000.00', 15000, 'DCT Recorders', 'none'),
(129, 4426982, 1033281709, 'The Weeknd - Trilogy (Box, Comp, Ltd, Num + 2xLP, Mixtape, RE + 2xLP, Mi)', '$15,000.00', 15000, 'XO, Universal Republic Records', 'B0017792-01, JK01, JK02, JK03'),
(130, 890352, 1718612371, 'Ramones - Ramones (LP, Album, Ter)', '$15,000.00', 15000, 'Sire', 'SASD-7520'),
(131, 11895964, 801246298, 'Nas With National Symphony Orchestra - Illmatic (Live From The Kennedy Center) (2xLP, Album, Ltd, Gol)', '$15,000.00', 15000, 'Mass Appeal', 'MSAP0055LP'),
(132, 13141622, 1769790841, 'Various - Documentary Now! Presents: Original Cast Album: Co-op (LP)', '$15,000.00', 15000, 'IFC (2), Broadway Video', 'IFC/BV1558'),
(133, 15070095, 2001339992, 'Big Memphis Marainey*, Onzie Horne Combo - Call Me Anything, But Call Me / Baby, No, No! (7\', Single)', '$15,000.00', 15000, 'Sun (9)', '184'),
(134, 14702843, 1858473394, 'Spiritbox - Spiritbox (12\', EP, Cle)', '$15,000.00', 15000, 'Pale Chord', 'none'),
(135, 2534664, 1156977140, 'Joan Jett And The Blackhearts* - Good Music (LP, Album)', '$15,000.00', 15000, 'Blackheart Records, CBS Associated Records', 'BFZ 40544'),
(136, 6508618, 236937957, 'Yves Robert - Tout Court (CD, Album)', '€14,295.00', 14611.33, 'Deux Z', 'ZZ 84103'),
(137, 19658647, 1571145997, 'Stevie Wonder / The Band Of The Royal Artillery - Innervisions (LP, Album, MP, Gat)', '£12,345.60', 14932.33, 'Tamla Motown', 'STMA 8011'),
(138, 1273384, 1971509324, 'Gloria Estefan - Mi Tierra (LP, Album)', '€14,121.00', 14433.48, 'Epic', 'EPC 473799 1'),
(139, 7295153, 864913510, 'Red House Painters - Red House Painters (LP, Album, RE)', '€14,500.00', 14820.87, '4AD', 'CAD 3410'),
(140, 6190939, 2067779996, 'The Charlie Mingus Quintet* - Chazz! (LP, Album)', '€14,428.00', 14747.28, 'America Records, Marfer', 'M. 40-006, M. 40-006-S'),
(141, 5155088, 2039611922, 'José Carreras, Placido Domingo, Luciano Pavarotti - Greatest Hits (LP, Comp)', '€14,515.00', 14836.2, 'Edel Company', 'EDL 2562-1'),
(142, 11073896, 1959915005, 'Idles - Brutalism (LP, Album, Ltd, RE, Ash)', '£12,000.00', 14515.02, 'Balley Records', 'BALLEY001'),
(143, 6552471, 1931922659, 'Alco (3) - Threads Of Life (LP, Album)', '£12,000.00', 14515.02, 'Alco (3)', 'ALC 530'),
(144, 15744979, 1151753382, 'Herbert W. Armstrong - The World Tomorrow Programme: Preparing Christ\'s Way / Book Of Revelation (Cass, Ltd, M/Print, Nu', '£12,000.00', 14515.02, 'Not On Label', 'none'),
(145, 7514776, 1972858748, 'Ed Sheeran - The Orange Room EP (CD, EP)', '£12,000.00', 14515.02, 'Sheeran Lock', 'none'),
(146, 5479230, 532159225, 'Various - Wand-er-ful (LP, Comp)', '$14,500.00', 14500, 'Musirama, Wand', 'LMTP-7039, 7039'),
(147, 15960208, 1310158129, 'Lee Fields - Let\'s Get A Groove On (LP, Album, RE, RM, Gre)', '$14,399.00', 14399, 'Desco Records, Daptone Records', 'DSLP004, DAP-062'),
(148, 7356464, 2092282127, 'Nico Fidenco - La Ragazzina - Colonna Sonora Originale (LP, Album)', '€14,000.00', 14308.56, 'CAM', 'CmL 068'),
(149, 9126282, 1880955703, 'David Bowie - The Man Who Sold The World (LP, Album)', '£12,000.00', 14515.02, 'Mercury, Mercury', '6338041, 6338 041'),
(150, 18481507, 1443091783, 'Muddy Waters, Otis Spann, Michael Bloomfield*, Paul Butterfield, Donald \'Duck\' Dunn, Sam Lay - Fathers And Sons (2xLP, A', '€13,499.00', 13796.52, 'Elektra', 'SJET-8181'),
(151, 3178607, 1929712118, 'O Quarteto - Antologia Da Bossa Nova 20 Anos Depois (LP, Album)', 'R$77,449.00', 4682.34, 'Philips', '6349 301'),
(152, 17879458, 2003031758, '孫燕姿* - Leave (LP, Album, Ltd, Num, RE, RM)', '$14,000.00', 14000, 'Warner Music Taiwan', '5054197090417'),
(153, 6835584, 1537284427, 'Bassmint Productions - Under New Management / Cold Room On This Defin Tape (Cass)', 'A$20,000.00', 13945.9, 'Bassmint Productions', 'none'),
(154, 10367239, 2029984478, 'David Bowie - Man Of Words / Man Of Music (LP, Album)', 'CA$18,000.00', 13987.48, 'Mercury', 'SR.61246'),
(155, 1544431, 1872900190, 'Mariah Carey - Daydream (LP, Album)', 'A$20,000.00', 13945.9, 'Columbia', 'COL 481367 1'),
(156, 8278854, 1874710489, 'AWAQS, Quen, Double-V aka W - Operation Atticus (M/Stick, WAV, MiniAlbum, Ltd, S/Edition)', '€12,999.00', 13285.5, 'Not On Label', 'none'),
(157, 11037395, 1400493574, 'Veitzfluch - Und Nimmer Mehr Wird Einer Greis (CD, Album)', '€12,988.00', 13274.26, 'Not On Label', 'Veit-1002-A1'),
(158, 4507228, 1666712281, 'Prince - The Black Album (LP, Album, Num, Gre)', '£11,111.80', 13439.7, 'Warner Bros. Records', '1-45793'),
(159, 1218217, 1919725625, 'Led Zeppelin - Led Zeppelin (LP, Album, Tur)', '$13,500.00', 13500, 'Atlantic', '588171'),
(160, 6381232, 1223121312, 'Pink Floyd - Ummagumma (2xLP, Album, Promo, Red)', '€13,000.00', 13286.52, 'Odeon', 'OP-8912-13'),
(161, 5096499, 1580149549, 'Цo/Цo* - Antifaschistischer Schutzdisco (Антифашистский Обoрoнительный диско) (7\', Ltd, Red)', '€12,500.00', 12775.5, 'F13 Records, Rote Rakete Records', 'F13-13'),
(162, 459606, 1523187874, 'Michael Jackson - Bad (LP, Album, Car)', '$13,076.90', 13076, 'Epic, Epic', 'E 40600, OE 40600'),
(163, 4157845, 1950153509, 'Ryo Fukui - Scenery (LP, Album)', '$13,000.00', 13000, 'Nadja', 'PA-7148'),
(164, 3192820, 1476779005, 'Chris Isaak - Beyond The Sun (2xLP, Album)', '$12,800.00', 12800, 'Vanguard', '78212-1'),
(165, 16142596, 1196899668, 'ABBA, Björn, Benny, Agnetha & Frida* - Waterloo (LP, Album, TP, W/Lbl)', 'SEK129,000.00', 12697.22, 'Polar', 'POLS 252'),
(166, 14745636, 1496168716, 'Cousin Feo x Dre Mendoza - Provoleta (12\', EP, Ltd, Blu)', '€12,000.00', 12264.48, 'Loretta Records (5)', 'LOR-61'),
(167, 2640716, 109967165, 'Dolorex - Rock Against Seija Isonsaari / Suutarinemännän Kehtolaulu 7″ (7\', Single, W/Lbl)', '€12,000.00', 12264.48, 'Safety Products', 'NEUROOSI-1'),
(168, 6736571, 1880158261, 'Pearl Jam - Pearl Jam \'Twenty\' Soundtrack (3xLP, Glo)', '¥1,700,000', 12597.94, 'Monkeywrench Records', '88697-96035-1 20064'),
(169, 9736019, 2019677402, 'The Beatles Vs The Four Seasons - The Beatles Vs The Four Seasons (LP, Album + LP, Comp + Comp, Gat)', '$12,500.00', 12500, 'Vee Jay Records, Vee Jay Records', 'VJLP 1062, VJLP 1065'),
(170, 18377083, 1430776735, 'Ollie Storey - Then (12\', MiniAlbum, Ltd, Num, RM, Lat)', '£10,150.00', 12277.29, 'Misanthrope Music', 'MMLP001'),
(171, 4335601, 1909662068, 'Analogy - Analogy (LP, Album)', '€12,000.00', 12264.48, 'Dischi Produzioni Ventotto, Dischi Produzioni Ventotto', 'PRV LP/2204, PRV/LP 2204'),
(172, 21680998, 1874704021, 'Kylie* - Disco (Guest List Edition) (Box, Album, Dlx, Ltd, Sli + 3xLP, Album, Comp, RE )', '£10,000.00', 12095.85, 'BMG, BMG, BMG, BMG', '538706001, 4050538706000, 538692851, 538695901'),
(173, 1765383, 1940861909, 'Barry Manilow - Barry Manilow II (LP, Album, Ter)', '£10,000.00', 12095.85, 'Bell Records', 'BELL 1314'),
(174, 1675091, 1931506778, 'Popcorn Bubblefish - Metropolis / The Withered Claw (7\', Promo, Unofficial)', '£10,000.00', 12095.85, 'Stark Reality', 'stark.002'),
(175, 4874310, 1709515453, 'J. Boogs - Boricua Applebum (12\')', '£10,000.00', 12095.85, 'Hot Waxx', 'BAL-015'),
(176, 27125, 1886010070, 'Radioactive Man - The Uranium E.P. (12\', EP)', '£10,000.00', 12095.85, 'R.G.C. Records', 'R.G.C.003'),
(177, 2630359, 1022187701, 'Deadmau5 - 4x4=12 (LP, Red + LP, Gre + Album, Ltd, Num)', '£10,000.00', 12095.85, 'Virgin, Mau5trap Recordings', 'MAU5LP05'),
(178, 2996412, 2048312090, 'Tony Sheridan And The Beat Brothers (2) - My Bonnie (Mein Herz Ist Bei Dir Nur) (7\', Single, Mono)', '£9,999.00', 12096.39, 'Polydor', 'NH24673'),
(179, 11250269, 1329176650, 'Bobby Goldsboro - Mornin\' Mornin\' (7\', Single, Mono, Promo)', '€11,717.00', 11975.24, 'United Artists Records', 'UA 50614'),
(180, 2253696, 1144871576, 'Nirvana - Bleach (LP, Album, RP, Red + 7\', Single, RP, Blu + Ltd, Nu)', '£10,000.00', 12097.6, 'Sub Pop', 'SP 34'),
(181, 13764874, 1123777615, 'Bob Dylan - Blonde On Blonde (2xLP, Album)', '£10,000.00', 12095.85, 'CBS', 'SDDP 66012'),
(182, 5498515, 311093707, 'Mile One - Rest On Peace (12\', Single)', '$12,000.00', 12000, 'Pendulum Records (3)', 'PP1010'),
(183, 4574588, 1178711682, 'The Flaming Lips - The Flaming Lips And Heady Fwends (2xLP, Album, Blo)', '$12,000.00', 12000, 'Not On Label (The Flaming Lips Self-released)', 'none'),
(184, 4171568, 1894789445, '高柳昌行* ・ 阿部薫* - 解体的交感 (LP, Album)', '$12,000.00', 12000, 'Sound Creators Inc.', 'SCi - 10101'),
(185, 14592074, 2081881835, 'D.J. Smacks - The \'T\' Town Click (Cass, Album)', '$12,000.00', 12000, 'Not On Label', 'none'),
(186, 21052771, 2091163292, 'Soul On Ice (16) - Music for the Mind (Cass, EP)', '$12,000.00', 12000, 'Star Colony Records', '92-001'),
(187, 19967977, 2081882333, 'Gangstaz Of Love - Mark Of The Beast (Cass, Maxi)', '$12,000.00', 12000, 'ARP Productions (2)', 'none'),
(188, 11991493, 2015201555, 'The Velvet Underground - Loaded (LP, Album, RP)', '£10,000.00', 12097.6, 'Atlantic, Atlantic', 'K40113, K 40113'),
(189, 10610708, 1191920440, 'Frank Sinatra - Gentle On My Mind (Acetate, 7\')', '£9,999.99', 12096.39, 'Pye Records', 'none'),
(190, 19297735, 1955625566, 'La Garde Républicaine De Paris* - Loin Du Bal (Shellac, 10\', S/Sided)', '$11,900.00', 11900, 'Zon-o-phone Record', '1'),
(191, 351134, 2059936961, 'David Joseph - You Can\'t Hide (Your Love From Me) (12\', Single, Sou)', '£9,699.00', 11733.46, 'Island Records', '12IS 101'),
(192, 4426982, 1900738634, 'The Weeknd - Trilogy (Box, Comp, Ltd, Num + 2xLP, Mixtape, RE + 2xLP, Mi)', '€11,220.10', 11467.29, 'XO, Universal Republic Records', 'B0017792-01, JK01, JK02, JK03'),
(193, 8408611, 1747366930, 'Pink Floyd - The Pink Floyd (LP, Comp, Promo)', '$11,162.40', 11162, 'Odeon', 'PRP-32'),
(194, 1852010, 1458670294, 'The Rifles - Fall To Sorrow (7\', Single)', '£9,099.00', 11007.61, '679', '679L165'),
(195, 2721969, 2063350832, 'The Beatles - Magical Mystery Tour (LP, Album, RE, Gat)', '$11,135.80', 11135, 'Parlophone, Apple Records', 'TOJP-60144'),
(196, 13876100, 1990145933, 'Richie Havens - Mixed Bag (LP, Album, RE, MGM)', '$11,111.00', 11111, 'MGM Records', 'SE-4698'),
(197, 2608894, 387942134, 'Led Zeppelin - Physical Graffiti (2xLP, Album, Die)', '$11,100.00', 11100, 'Swan Song', 'SS 2-200'),
(198, 203247, 1579802659, 'Various - Experience In Kool. -2º (2xLP, Comp)', '£9,049.00', 10947.12, '2 Kool', 'TKLP 25'),
(199, 456663, 1953327665, 'The Beatles - The Beatles (2xLP, Album, Mono, M/Print, Num)', 'A$15,950.00', 11122.01, 'Apple Records', 'PMC 7067/8'),
(200, 120169, 1061038929, 'Nurse With Wound - Gyllenskold / Brained (LP, Comp, M/Print)', '$11,000.00', 11000, 'L.A.Y.L.A.H. Antirecords', 'LAY 30'),
(201, 8275155, 792813452, 'The Beatles - Best Of Beatles (LP, Comp)', '£9,000.00', 10888.65, 'Ata (2)', 'AF 106'),
(202, 3174177, 1711144714, 'Windy Corner - The House At Windy Corner (LP, Album)', '€10,346.50', 10574.67, 'Deroy', 'DER 977'),
(203, 12189175, 733222925, 'Norma Jean* - Every Bit Of This Love (7\')', '€10,250.00', 10476.55, 'MCA Records', 'MCA-52676'),
(204, 7250409, 1850562850, 'Underoath - Define The Great Line (Cass, Album, Ltd)', '$10,666.10', 10666, 'Tooth & Nail Records', 'TND42658'),
(205, 18999154, 2075417735, 'Various - Paublum Productions (Cass, Comp)', '€10,500.00', 10732.07, 'Not On Label', 'none'),
(206, 3235317, 1314604606, 'The Beatles - Love Me Do (7\', Single, Promo)', '€9,999.99', 10220, 'Parlophone', '45-R 4949'),
(207, 13128717, 1446649918, 'Mariah Carey - Caution (LP, Album, Ltd, Num, Pic)', '€10,000.00', 10221.02, 'Epic', '19075923531'),
(208, 13228283, 1477887967, 'Mahmood (3) - Gioventù Bruciata (LP, Album)', '€10,000.00', 10221, 'Universal Music Group, Island Records', '0602577530005'),
(209, 1493084, 1528923577, 'Tina Turner - Wildest Dreams (LP, Album)', '€10,000.00', 10221, 'Parlophone, Parlophone', '7243 8 37684 1 7, EST 2279'),
(210, 12139629, 1572317422, 'Theory Of A Deadman - The Truth Is... (LP, Album, RP, Ora)', '€10,000.00', 10221, 'Roadrunner Records', 'RRCAR 7729-1'),
(211, 9358359, 1598573647, 'The Bachelors - The Bachelors (LP, Album)', '€10,000.00', 10221, 'Ricordi International', 'MIR 23-007'),
(212, 4419202, 1949213369, 'Bonobo - The North Borders (2xLP, Album, 180)', '€10,000.00', 10221, 'Ninja Tune', 'ZEN195'),
(213, 11622311, 1834540933, 'Howard Shore - The Lord Of The Rings: The Fellowship Of The Ring - The Complete Recordings (5xLP, Red + Box, Album, Ltd,', '€10,000.00', 10221, 'Reprise Records, WaterTower Music', 'RCV1-563589, 081227932473'),
(214, 12373730, 1813324354, 'Johnny Hallyday - ジョニイ・ハリデイと彼の親衛隊 = Johnny Hallyday Et Ses \'Fans\' (10\', Promo)', '€10,000.00', 10221, 'Polydor', 'LPP-1115'),
(215, 11239656, 1444331542, 'Michele Bravi - Anime Di Carta - Nuove Pagine (2xLP, Album, Ltd, Cle)', '€10,000.00', 10221, 'Universal Music Group', '0602567138174'),
(216, 11427558, 1757781808, 'Pláč Hoven* - Mrtvý Život (LP, Album, Ltd)', '€10,000.00', 10221, 'COS', '001'),
(217, 7602635, 1486398346, 'Eskorbuto - Aki No Keda Ni Dios (CD, Single, Ltd, Num, Smplr)', '€10,000.00', 10221, 'Basati Diskak', 'BDCP 03'),
(218, 992214, 1453133629, 'Green Day - Dookie (LP, Album, Ltd, Num, Gre)', '€10,000.00', 10221, 'Reprise Records', '9362-45813-1'),
(219, 16298373, 1416789982, 'Irama - Crepe (LP, EP, Ltd, Num)', '€10,000.00', 10221, 'Warner Records, Warner Music Group, Warner Music Italy', '5054197090363'),
(220, 16326846, 1806696214, 'Mariah Carey - Merry Christmas II You (LP, Album, Ltd, Red)', '€10,000.00', 10221, 'Island Records', '00602435155463'),
(221, 14187677, 1949214173, 'The Roots - Things Fall Apart (3xLP, Album, Ltd, RE)', '€10,000.00', 10221, 'Geffen Records, Universal Music', '7783093, b0030407-01'),
(222, 1077198, 1284026262, 'Jones & Stephenson - The First Rebirth (12\', Ltd, Yel)', '€10,000.00', 10221, 'Bonzai Records', 'BR 93034'),
(223, 7861409, 1436353801, 'OfflagaDiscoPax* - Socialismo Tascabile (Prove Tecniche Di Trasmissione) (Box, Ltd, Num, Pos + 2xLP, Album, RE, RM + CD,', '€10,000.00', 10221, 'Santeria Records, Unhip Records, Offlaga Disco Pax, Santeria Records, Offlaga Disco Pax', 'San040lp.r, Unhip10.r, #68.r.lp, San040.r, #68.r'),
(224, 19593427, 1757842978, 'Farmworker - Oonaï (LP, Album)', '€10,000.00', 10221, 'Champ\'Caine Records', 'CCR052'),
(225, 4357587, 1108901343, 'New York Dolls - Trash / Personality Crisis (7\', Single)', '€10,000.00', 10221, 'Mercury', '60 52 372'),
(226, 14745636, 1888169935, 'Cousin Feo x Dre Mendoza - Provoleta (12\', EP, Ltd, Blu)', '€10,000.00', 10221, 'Loretta Records (5)', 'LOR-61'),
(227, 12412896, 1935677267, 'hubbabubbaklubb - Drømmen Drømmerne Drømmer (2xLP, Album)', '€10,000.00', 10221, 'Snorkel Records', 'SNRKL004'),
(228, 11894858, 1436368486, 'The Courteeners - St. Jude (LP, Album, Ltd, Red)', '€10,000.00', 10221, 'A&M Records', '6729515'),
(229, 9665494, 945400104, 'Alessandro Mannarino - Apriti Cielo (LP, Album, Ltd, Num, Box + CD)', '€10,000.00', 10221, 'Universal Music Italia s.r.l.', '0602557297324'),
(230, 13053023, 1108901268, 'New York Dolls - Trash / Personality Crisis (7\', Single)', '€10,000.00', 10221, 'Mercury', '60 52 372'),
(231, 15278756, 1105587221, 'Kiss - Strutter (Acetate, 10\', S/Sided, TP, Not)', '€10,000.00', 10221, 'EMI, Abbey Road Studios', 'EMI Studios, 5433/9'),
(232, 18353884, 1953518777, 'Marie Cachet And Varg Vikernes - ForeBears (DVD-V)', '€10,000.00', 10221, 'Not On Label', 'none'),
(233, 4576364, 1949215055, 'Various - Kenya Special (Selected East African Recordings From The 1970s & \'80s) (3xLP + 7\' + Album, Comp)', '€10,000.00', 10221, 'Soundway, Soundway', 'SNDWLP 046, SNDWLP046(7)'),
(234, 1603966, 903077927, 'Nirvana - Come As You Are (12\', Single)', '€9,999.99', 10219.98, 'Geffen Records, Geffen Records', 'dgct 7, DGCT 7'),
(235, 18167572, 1412318911, 'smear (12) - Demor E Cord (CD, Album)', '€9,999.00', 10219.98, 'Genesoap', 'none'),
(236, 18168376, 1412350699, 'Giovanni Boniface - Giovanni Boniface (CDr, EP)', '€9,999.00', 10219.98, 'Not On Label', 'none'),
(237, 3325777, 932964985, 'Michael Jackson - What More Can I Give (CDr, Single, Copy Prot., Promo)', '€9,999.00', 10219.98, 'DNA Mastering', 'none'),
(238, 3206056, 1949212202, 'Portishead - Third (2x12\', Album, Ltd)', '€9,999.00', 10219.98, 'Mercury, Mercury', 'B0011142-01, 176 410-1'),
(239, 247241, 1043672129, 'Pete Rock & C.L. Smooth - The Main Ingredient (2xLP, Album)', '€9,999.00', 10219.98, 'Elektra', '61661-1'),
(240, 21369409, 1771381477, 'Turmoil - The Process Of... (LP, Ltd, Dom)', '€9,999.00', 10219.98, 'Backbite Records', 'BBR-087'),
(241, 9438479, 1949213630, 'Massive Attack - Protection (LP, Album, RE, 180)', '€9,999.00', 10219.98, 'Circa, Circa, Wild Bunch Records, Wild Bunch Records', '5700962, 00602557009620'),
(242, 3782102, 2001663308, 'Adrian Enescu - Invisible Movies (CD, Album)', '€9,999.00', 10219.98, 'MediaPro Music', 'none'),
(243, 6116889, 1880377036, 'Franz Schubert, Michèle Auclair, Genevieve Joy - Intégrale De L\'oeuvre Pour Violon Et Piano (LP)', '€9,995.00', 10215.89, 'Erato', 'STE 50136'),
(244, 2702219, 1659491515, 'Black Jade (2) - I\'ve Got To Get Back Home (7\')', '€9,992.00', 10212.82, 'Pre-Jade', 'JA 001 A'),
(245, 3701162, 663779077, 'Fallout (13) - Rock Hard (7\', Single)', '€10,000.00', 10221, 'Silver Records (11)', 'FO-666'),
(246, 1340914, 903078261, 'Nirvana - Heart-Shaped Box (12\', Single)', '€9,999.99', 10219.98, 'Geffen Records', 'GFST 54'),
(247, 9229862, 931359443, 'Lindwurm (3) - Frühjahr \'76 - Erinnerungen An Klaus (LP, Album)', '€10,000.00', 10221, 'Not On Label', 'none'),
(248, 17721889, 1957752776, 'Miladin Karličić - Slava Junaku (Cass)', '€10,000.00', 10221, 'Srpska Garda', 'none'),
(249, 10511296, 1481199838, 'AC/DC - A Gold Record Presentation (7\', S/Edition, Gol)', 'A$15,000.00', 10460.92, 'Albert Productions', '81012'),
(250, 1551340, 1114296819, 'Hermann Nitsch - Island: Eine Sinfonie In 10 Sätzen (6xLP, Album, Ltd + Box)', '€9,800.50', 10016.86, 'Dieter Roth\'s Verlag', 'JST 246');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `releases_home`
--
ALTER TABLE `releases_home`
  ADD PRIMARY KEY (`pk_release_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `releases_home`
--
ALTER TABLE `releases_home`
  MODIFY `pk_release_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=251;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
