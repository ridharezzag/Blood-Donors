-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Jan 11, 2019 at 03:21 AM
-- Server version: 5.5.61-cll
-- PHP Version: 7.2.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `allmofid_donors`
--

-- --------------------------------------------------------

--
-- Table structure for table `members`
--

CREATE TABLE `members` (
  `id` int(11) NOT NULL,
  `firstName` varchar(255) NOT NULL,
  `lastName` varchar(255) NOT NULL,
  `gender` varchar(255) NOT NULL,
  `bloodType` varchar(15) NOT NULL,
  `state` varchar(38) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `mobileNumber` varchar(22) NOT NULL,
  `profileImage` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `members`
--

INSERT INTO `members` (`id`, `firstName`, `lastName`, `gender`, `bloodType`, `state`, `email`, `password`, `mobileNumber`, `profileImage`) VALUES
(1, 'Rida', 'Rezzag', 'male', 'O+', 'Florida', 'rida47@gmail.com', '123456', '+10552473339', 'images/members/redaS.jpg'),
(2, 'John Fitzgerald', 'Kennedy', 'male', 'O+', 'Massachusetts', 'JohnFitzgerald@yahoo.com', '1478963', '+10552473339', 'images/members/Jfk.jpg'),
(3, 'Abraham', 'Lincoln', 'male', 'AB+', 'Kentucky', 'AbrahamLincoln@yahoo.com', '1478963', '+10552473339', 'images/members/abraham.jpg'),
(4, 'Maria Salomea', 'Skłodowska', 'female', 'O-', 'Alabama', 'maria@gmail.com', '1478963', '+10552473339', 'images/members/Marie_Curie.jpg'),
(5, 'Barack', 'Obama', 'male', 'AB+', 'Hawaii', 'BarackObama@gmail.com', '1478963', '+10552473339', 'images/members/BarackObama.jpg');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `members`
--
ALTER TABLE `members`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `members`
--
ALTER TABLE `members`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
