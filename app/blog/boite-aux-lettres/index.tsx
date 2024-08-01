import { Image } from "@nextui-org/react";
import img1 from "./images/1.webp";
import img3 from "./images/3.webp";
import img4 from "./images/4.webp";
import img5 from "./images/5.webp";
import img6 from "./images/6.webp";
import img7 from "./images/7.webp";
import img8 from "./images/8.webp";
import img9 from "./images/9.webp";
import img10 from "./images/10.webp";
import img11 from "./images/11.webp";
import img12 from "./images/12.webp";
import img13 from "./images/13.webp";

export default function BoiteAuxLettresPost() {
  return (
    <div>
      <p className="p-4 font-mulish lg:mb-12">
        Vous avez envie d’introduire un peu plus d’écriture dans le quotidien de
        votre enfant (et le vôtre 😉) ? Voici une façon de le faire et que j’ai
        moi-même introduite dans ma maisonnée. Il s’agit de la boite aux
        lettres! On se bricole une belle boite aux lettres que l’on peut ensuite
        accrocher près de sa porte de chambre. Et papa et maman aussi peuvent en
        avoir une! C’est même encouragé pour établir une correspondance écrite
        dans la vie familiale. Les enfants peuvent donc écrire des lettres et
        aller les placer dans la boite aux lettres du destinataire.
      </p>
      Voici comment j’ai fabriqué ma boite :
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <Image
          src={img1}
          alt="Boite aux lettres étape 1"
          className="max-w-xs"
        />
        <div className="lg:col-span-2 col-span-1">
          <h2 className="md:px-10 pt-4 font-mulish font-semibold">
            Matériel :
          </h2>
          <div className="flex flex-col border-4 border-lbf-orange rounded-lg md:mx-10 mb-4 p-6 gap-2 font-mulish">
            <ul className="list-disc list-outside pl-6">
              <li className="sm:pl-2">Boite de mouchoirs vide ;</li>
              <li className="sm:pl-2">
                Papier d’emballage au choix (pour décorer) ;
              </li>
              <li className="sm:pl-2">
                2 cartons rigides (largeur de la boite) ;
              </li>
              <li className="sm:pl-2">Corde ;</li>
              <li className="sm:pl-2">Velcro (facultatif) ;</li>
              <li className="sm:pl-2">Ciseaux ;</li>
              <li className="sm:pl-2">Papier collant ;</li>
              <li className="sm:pl-2">Crayon</li>
            </ul>
          </div>
        </div>
      </div>
      <h2 className="md:px-10 pt-4 font-mulish font-semibold">
        Comment faire :
      </h2>
      <div className="flex flex-col border-4 border-lbf-orange rounded-lg md:mx-10 mb-4 p-6 gap-2 font-mulish">
        <ol className="list-decimal list-outside pl-6 space-y-8">
          <li className="sm:pl-2">
            Placer la boite de mouchoirs devant soi, à la verticale. Au tiers de
            la boite à partir du haut, venir tracer une ligne horizontale.
            Poursuivre cette ligne sur les côtés de la boite en diagonale pour
            rejoindre les sommets qui pointent vers l’extérieur.{" "}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 m-2">
              <Image
                src={img3}
                alt="Boite aux lettres étape 3"
                className="max-w-xs"
              />
              <Image
                src={img4}
                alt="Boite aux lettres étape 4"
                className="max-w-xs"
              />
            </div>
          </li>
          <li className="sm:pl-2">
            Découper en suivant toute la ligne tracée. Ça devrait ressembler à
            ça :
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 m-2">
              <Image
                src={img5}
                alt="Boite aux lettres étape 5"
                className="max-w-xs"
              />
              <Image
                src={img6}
                alt="Boite aux lettres étape 6"
                className="max-w-xs"
              />
            </div>
          </li>
          <li className="sm:pl-2">
            <div className="grid grid-cols-1 min-[850px]:grid-cols-2  min-[850px]:gap-4 m-2">
              <div>
                <p>
                  Ouvrir le dessus de la boite pour retirer les 2 triangles sur
                  les côtés avec les ciseaux. Ici :{" "}
                </p>
                <Image
                  src={img7}
                  alt="Boite aux lettres étape 7"
                  className="max-w-xs"
                />
              </div>
              <div>
                <p>Ce qui donne ceci : </p>
                <Image
                  src={img8}
                  alt="Boite aux lettres étape 8"
                  className="max-w-xs"
                />
                <Image
                  src={img9}
                  alt="Boite aux lettres étape 9"
                  className="max-w-xs"
                />
                <p>Forme finale de la boite aux lettres</p>
              </div>
            </div>
          </li>
          <li className="sm:pl-2">
            <div className="grid grid-col-1 md:grid-cols-3">
              <p className="md:pr-2">
                Coller un carton rigide (qui respecte les mesures de la boite)
                sur la partie supérieure du devant de la boite (celle qui se
                relève), à l’intérieur de la boite pour solidifier :
              </p>
              <Image
                src={img10}
                alt="Boite aux lettres étape 10"
                className="max-w-xs"
              />
            </div>
          </li>
          <li className="sm:pl-2">
            <div className="grid grid-col-1 md:grid-cols-3">
              <p>Répéter l’étape 4 pour la partie inférieure du devant.</p>
              <Image
                src={img11}
                alt="Boite aux lettres étape 11"
                className="max-w-xs"
              />
            </div>
          </li>
          <li className="sm:pl-2">
            Décorer la boite en l’emballant avec du papier d’emballage.
          </li>
          <li className="sm:pl-2">
            <div className="grid grid-col-1 md:grid-cols-3">
              <p>
                Coller la corde derrière la boite pour pouvoir l’accrocher au
                mur.
              </p>
              <Image
                src={img12}
                alt="Boite aux lettres étape 12"
                className="max-w-xs"
              />
            </div>
          </li>
          <li className="sm:pl-2">
            <div className="grid grid-col-1 md:grid-cols-3">
              <p>
                Facultatif : coller du velcro pour bien maintenir fermée la
                boite aux lettres
              </p>
              <Image
                src={img13}
                alt="Boite aux lettres étape 13"
                className="max-w-xs"
              />
            </div>
          </li>
        </ol>
      </div>
      Vous pouvez trouver ce DIY en vidéo (reel) sur ma page Instagram
      @laurencebf.orthopédagogue.
    </div>
  );
}
