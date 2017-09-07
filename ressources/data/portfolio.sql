-- phpMyAdmin SQL Dump
-- version 4.4.15.7
-- http://www.phpmyadmin.net
--
-- Client :  davidnaupqdavid.mysql.db
-- Généré le :  Jeu 07 Septembre 2017 à 23:25
-- Version du serveur :  5.6.34-log
-- Version de PHP :  5.6.31

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `davidnaupqdavid`
--

-- --------------------------------------------------------

--
-- Structure de la table `messages`
--

CREATE TABLE IF NOT EXISTS `messages` (
  `id_message` int(11) NOT NULL,
  `date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `name` varchar(50) NOT NULL,
  `mail` varchar(60) NOT NULL,
  `object` varchar(50) NOT NULL,
  `content` longtext NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=armscii8;

--
-- Contenu de la table `messages`
--

INSERT INTO `messages` (`id_message`, `date`, `name`, `mail`, `object`, `content`) VALUES
(2, '2017-08-14 11:11:40', 'C?dric de Bruyne', 'psychonewsted@msn.com', 'Chouette site !', 'Yop David,\r\nSuper site, mais j''ai un petit soucis avec la croix en haut ? droite pour fermer les sections. Et je trouve que l''on attend beaucoup pour voir ton message, le temps de dessiner les choses.\r\nFranchement f?licitation pour cette putain d''originalit? !'),
(3, '2017-08-22 01:58:33', 'Namae', 'jasonp2716@gmail.com', 'Pwet', 'Pwetpwet'),
(4, '2017-09-07 21:20:12', 'Leuiller C?dric', 'leuiller.cedric@gmail.com', 'Test', 'pour te casser les couilles ^^'),
(5, '2017-09-07 22:54:45', 'DoudouPike', 'doudoupike@hotmail.fr', 'Dieu est-il un ?tre ?', 'L''homme aurait pu choisir de ne pas d?f?quer, de ne pas ouvrir la fosse anale.\r\nMais il a choisi de chier, comme il a d?cid? de vivre !\r\nIl y a en l''?tre, quelque chose d''attirant.\r\nEt cette chose, c''est justement...\r\nLE CACA !\r\nDieu n''est pas un ?tre,\r\nc''est de LA MERDE !');

-- --------------------------------------------------------

--
-- Structure de la table `project`
--

CREATE TABLE IF NOT EXISTS `project` (
  `id_project` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `image` varchar(100) NOT NULL,
  `description` longtext NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=armscii8;

-- --------------------------------------------------------

--
-- Structure de la table `realisation`
--

CREATE TABLE IF NOT EXISTS `realisation` (
  `id_realisation` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `description` longtext NOT NULL,
  `lien` mediumtext NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

--
-- Contenu de la table `realisation`
--

INSERT INTO `realisation` (`id_realisation`, `name`, `description`, `lien`) VALUES
(1, 'Portfolio', 'Le site que vous visitez actuellement ', 'ressources/upload/realisation/portfolio.png');

-- --------------------------------------------------------

--
-- Structure de la table `user`
--

CREATE TABLE IF NOT EXISTS `user` (
  `id_user` int(11) NOT NULL,
  `pseudo` varchar(50) NOT NULL,
  `password` varchar(72) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=armscii8;

--
-- Contenu de la table `user`
--

INSERT INTO `user` (`id_user`, `pseudo`, `password`) VALUES
(1, 'Okusama', '$2y$10$XRKUX7HZAkjT2kwvT95OTuc57YCTjkAPzawJ.3.8vynTN3Oy3FDC.');

--
-- Index pour les tables exportées
--

--
-- Index pour la table `messages`
--
ALTER TABLE `messages`
  ADD PRIMARY KEY (`id_message`);

--
-- Index pour la table `project`
--
ALTER TABLE `project`
  ADD PRIMARY KEY (`id_project`);

--
-- Index pour la table `realisation`
--
ALTER TABLE `realisation`
  ADD PRIMARY KEY (`id_realisation`);

--
-- Index pour la table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id_user`);

--
-- AUTO_INCREMENT pour les tables exportées
--

--
-- AUTO_INCREMENT pour la table `messages`
--
ALTER TABLE `messages`
  MODIFY `id_message` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=6;
--
-- AUTO_INCREMENT pour la table `project`
--
ALTER TABLE `project`
  MODIFY `id_project` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT pour la table `realisation`
--
ALTER TABLE `realisation`
  MODIFY `id_realisation` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT pour la table `user`
--
ALTER TABLE `user`
  MODIFY `id_user` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=2;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
