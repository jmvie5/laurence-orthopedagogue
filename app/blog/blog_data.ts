import { ReactNode } from "react";

import DePost from "./de";
import deImage from "./de/des.webp";

import BoiteAuxLettresPost from "./boite-aux-lettres";
import boiteAuxLettresImage from "./boite-aux-lettres/images/thumbnail.webp";

import FeeDesLivresPost from "./fee-des-livres";
import feeDesLivresImage from "./fee-des-livres/images/fee-des-livres.webp";

import GuessWhoPost from "./guess-who";
import guessWhoImage from "./guess-who/guess-who.webp";

import MotsCroisesPost from "./mots-croises";
import motsCroisesImage from "./mots-croises/images/mots-croises.webp";

import OrthographePost from "./orthographe";
import orthographeImage from "./orthographe/images/thumbnail.webp";

import RencontreParentPost from "./rencontre-parents";
import rencontreParentImage from "./rencontre-parents/Thumbnail.webp";

import RentreePost from "./rentree";
import rentreeImage from "./rentree/images/thumbnail.webp";

export type Post = {
  title: string;
  date: Date;
  author: string;
  slug: string;
  summary: string;
  image: string;
  image_alt: string;
  post: ReactNode;
};

const posts: Post[] = [
  {
    title: "Boite aux lettres",
    date: new Date("2023-09-26T00:00:00"),
    author: "Laurence B-F",
    slug: "boite-aux-lettres",
    summary:
      "Vous avez envie d’introduire un peu plus d’écriture dans le quotidien de votre enfant (et le vôtre 😉) ? Voici une façon de le faire et que j’ai moi-même introduite dans ma maisonnée. Il s’agit de la boite aux lettres!",
    image: boiteAuxLettresImage,
    image_alt: "La boîte aux lettres",
    post: BoiteAuxLettresPost(),
  },
  {
    title: "Un dé pour étudier les verbes?",
    date: new Date("2023-01-30T00:00:00"),
    author: "Laurence B-F",
    slug: "de",
    summary:
      "Étudier des verbes, ce n’est pas toujours la chose la plus amusante pendant la période de devoirs et de leçons. Pour rendre ce moment plus agréable pour les enfants (et pour les parents, on ne se le cachera pas 😉 ), j’ai décidé de créer un petit jeu tout simple que vous pouvez tout à fait confectionner à la maison.",
    image: deImage,
    image_alt: "Un dé pour étudier les verbes",
    post: DePost(),
  },
  {
    title: "La fée des livres",
    date: new Date("2023-06-28T00:00:00"),
    author: "Laurence B-F",
    slug: "fee-des-livres",
    summary:
      "Il y a quelque temps, j’ai entendu parler d’une créature mystérieuse qui s’appelle la fée des livres. Cette idée, de la talentueuse Julie Provencher, est tout simplement géniale! J’ai donc décidé de l’introduire dans ma maisonnée. Laissez-moi vous présenter la fée des livres!",
    image: feeDesLivresImage,
    image_alt: "Fée des livres",
    post: FeeDesLivresPost(),
  },
  {
    title: "Guess Who pour étudier les mots de vocabulaire?",
    date: new Date("2023-05-11T00:00:00"),
    author: "Laurence B-F",
    slug: "guess-who",
    summary:
      "L’idée, c’est de reprendre le concept de Guess Who, mais plutôt que de faire deviner des personnages, votre enfant doit deviner et faire deviner des mots.",
    image: guessWhoImage,
    image_alt: "Guess Who pour étudier les mots de vocabulaire",
    post: GuessWhoPost(),
  },
  {
    title: "Des mots croisés pour étudier les mots de vocabulaire?",
    date: new Date("2023-02-08T00:00:00"),
    author: "Laurence B-F",
    slug: "mots-croises",
    summary:
      "Si une étude réfléchie et analytique est efficace et encouragée, il est aussi tout à fait possible d’intégrer des petits jeux éducatifs et efficaces à votre routine de leçons. La création de mots croisés est une façon ludique de travailler sur le sens et l’appropriation des mots.",
    image: motsCroisesImage,
    image_alt: "Exemple de mot croisé généré sur le site educol.net",
    post: MotsCroisesPost(),
  },
  {
    title: "Comment ça s’écrit, écureuil?",
    date: new Date("2024-02-07T00:00:00"),
    author: "Laurence B-F",
    slug: "orthographe",
    summary:
      "Comment faire pour que notre enfant qui rencontre des difficultés apprenne à respecter l’orthographe d’usage? Il ne peut quand même pas apprendre TOUS les mots de la langue française par coeur. Et même quand il apprend des listes de mots par coeur (mots de vocabulaire de la semaine), il n’arrive pas à bien les orthographier dans d’autres contextes ou même deux semaines plus tard. Ça sonne familier?",
    image: orthographeImage,
    image_alt: "Apprentissage de l'orthographe au quotidien",
    post: OrthographePost(),
  },
  {
    title:
      "Quelles questions poser à l’enseignante de votre enfant lors de la première rencontre individuelle?",
    date: new Date("2023-11-01T00:00:00"),
    author: "Laurence B-F",
    slug: "rencontre-bulletin",
    summary:
      "Les rencontres parents-enseignants peuvent être stressantes (pour le prof et pour le parent!) Parfois, on ne sait pas trop à quoi s’attendre. Et c’est normal! Vous connaissez bien votre enfant, mais l’élève, il est bien rare que vous le voyiez.",
    image: rencontreParentImage,
    image_alt: "Questions à poser à l'enseignante de mon enfant",
    post: RencontreParentPost(),
  },
  {
    title: "Se préparer à la rentrée",
    date: new Date("2023-08-07T00:00:00"),
    author: "Laurence B-F",
    slug: "rentree",
    summary:
      "Dans ce guide, vous retrouverez des trucs d’organisation et des idées pour se remettre tranquillement dans le bain de l’école, ce qui peut faciliter la transition vacances d’été - routine scolaire pour votre enfant (et pour vous 😉)",
    image: rentreeImage,
    image_alt: "Guide de préparation à la rentrée",
    post: RentreePost(),
  },
];

export { posts };
