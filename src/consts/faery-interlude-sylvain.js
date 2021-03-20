/**
 * @author Outremer
 * @link http://litteraction.fr/sites/default/files/faery.pdf
 */

export const adventure = {
  "Introduction": {
    text:"Vous  êtes  un  aventurier  expérimenté,  toujours  à  la  recherche  de  nouveaux  exploits.  Nombreux  sont  les  monstres  que  vous  avez  abattus,  les  ruines  que  vous  avez  explorées  et  les  trésors  que  vous avez amassés, mais vous ne vous contentez jamais d’en rester là. Au début de cette histoire, vous venez une nouvelle fois de mener à bien une quête des plus périlleuses et vous êtes sur le chemin du retour, les poches pleines d’un or que vous êtes décidé à mettre à profit en menant la grande vie pendant quelques semaines. Votre itinéraire vous amène à traverser une forêt qui ne vous  est  pas  familière.  Alors  que  la  nuit  tombe  et  que  vous  êtes  sur  le  point  de  dresser  un  bivouac,  vous  êtes  soudain  attiré  par  le  bruit  de  réjouissances  voisines.  Tout  prêt  de  la  route  que  vous suiviez, une fête est en train de se dérouler en plein air, autour d’un grand feu crépitant. Dès qu’ils vous voient, les joyeux convives vous invitent aussitôt à les rejoindre et vous acceptez sans la  moindre  hésitation,  trop  heureux  de  pouvoir  enfin  vous  délasser.  Pendant  les  heures  qui  suivent, vous dansez, mangez et videz de nombreuses coupes de vin. Vos hôtes semblent inépuisables.  Alors  que  vous  commencez  finalement  à  succomber  à  la  fatigue,  bercé  par  le  bruit  de  la  musique et les rires cristallins, il vous semble que leurs visages deviennent plus fins et leurs yeux plus  brillants.  Leurs  cheveux  soyeux  ne  dissimulent  plus  leurs  oreilles  pointues  et  vous  entrevoyez çà et là de larges ailes colorées. Puis l’épuisement vous terrasse et vous sombrez dans le sommeil.",
    choices: [
      {
        text: "Rendez-vous au 1.",
        pageId: "1",
      },
    ],
  },
  "1": {
    /** TODO ajouter ivresse +4 */
    /** TODO ajouter potion qui fait pop le chapitre 58 */
    text: "Vous  vous  réveillez  subitement.  Vous  êtes  seul,  étendu  au  milieu  d’une  petite  clairière  bordée  d’arbres. A en juger par la fraîcheur de l’air et la clarté qui commence à poindre par-dessus les feuillages, ce doit être le matin. Le souvenir de la soirée précédente vous revient en mémoire et vous réalisez avec un choc que vous avez été victime de fées ! Vous aviez entendu dire qu’elles habitaient certaines forêts reculées et qu’elles aimaient à se divertir aux dépens des voyageurs en les égarant. C’est visiblement ce qui vous est arrivé : tout autour de vous, les profondeurs insondables de la forêt s’offrent à vos yeux. La route que vous aviez suivie la veille n’est visible nulle part.  Vous  pressentez  qu’il  ne  sera  pas  facile  de  la  retrouver.  Alors  que  vous  vous  levez,  vous  réalisez brusquement qu’une difficulté supplémentaire s’ajoute à votre situation : vous ressentez encore les effets des festivités de la veille ! Vous avez du mal à tenir sur vos jambes et votre vision est légèrement floue, brouillant les contours et les distances. Au cours de cette aventure, il va vous falloir tenir compte de votre score d’IVRESSE, qui est actuellement de 4. Cette ébriété va nuire à vos prouesses guerrières tant qu’elle durera : vous devrez soustraire la moitié (arrondie à l’entier supérieur) de votre total d’Ivresse de votre score d’Habileté, à chaque fois que ce dernier entrera en jeu. Votre total d’Ivresse diminuera de 1 point tous les cinq paragraphes, mais divers événements pourront également le faire monter ou descendre. Alors que vous examinez votre sac à dos, vous avez la mauvaise surprise de découvrir que, si votre équipement d’aventurier est intact, vos provisions et vos pièces d’or ont disparu, ainsi que tous les trésors que vous aviez découverts lors de votre quête passée. En guise de compensation, on ne vous a laissé qu’une gourde pleine,  contenant  visiblement  du  vin  (vous  pourrez  en  boire  à  tout  moment,  excepté  lors  d’un  combat  :  notez  alors  le  numéro  du  paragraphe  où  vous  vous  trouvez  et  rendez-vous  au  58).  Un  rapide tour de la clairière vous révèle l’existence d’un mince sentier qui s’engage en serpentant",
    choices: [
      {
        text: "Le suivre.",
        pageId: "43",
      },
      {
        text: "Partir dans une autre direction en vous aventurant parmi les broussailles.",
        pageId: "77",
      },
    ],
  },
  "2": {
    text: "Vous vous retrouvez à un endroit de la forêt où le feuillage est si épais qu’il vous semble presque être  sous  terre.  L’atmosphère  est  feutrée  et  même  le  bruit  de  vos  propres  pas  ne  vous  parvient  qu’étouffé.  Les  arbres,  particulièrement  serrés,  vous  empêchent  de  voir  clairement  à  plus  de  quelques pas. Plusieurs directions s’offrent à vous, mais vous n’avez aucun moyen de déterminer laquelle peut être la meilleure.",
    choices: [
      {
        text: "Première.",
        pageId: "11",
      },
      {
        text: "Deuxième.",
        pageId: "86",
      },
      {
        text: "Troisième.",
        pageId: "44",
      },
    ],
  },
  "3": {
    /** TODO automatiser le jet de dé */
    text: "Vous  êtes  parvenu  à  l’intersection  d’une  multitude  de  sentiers  qui  serpentent  parmi  les  arbres.  Rien ne vient les différencier entre eux et vous ne disposez pas du moindre point de repère qui vous  permettrait  de  vous  orienter  avec  certitude.  Vous  vous  mettez  pourtant  en  route,  faisant  confiance au hasard. Lancez deux dés.",
    choices: [
      {
        text: "Le résultat est inférieur ou égal à votre total d’Ivresse.",
        pageId: "38",
      },
      {
        text: "Il est supérieur.",
        pageId: "50",
      },
    ],
  },
  "4": {
    text: "Vous cheminez assez longuement sans interruption. La forêt est un peu moins dense dans la direction  où  vous  avancez  et  vous  voulez  croire  que  c’est  un  bon  présage.  Un  bruit  de  flûte  parvient  soudain  à  vos  oreilles.  Il  semble  que  vous  ne  soyez  pas  seul  dans  les  parages  !  Avançant  avec prudence, vous arrivez finalement à un large rocher éclairé par le soleil, sur lequel est assis un  satyre,  aisément  reconnaissable  à  ses  jambes  de  chèvre  et  aux  cornes  sur  sa  tête.  Il  était  en  train de jouer de la flûte de Pan, mais s’interrompt à votre arrivée et vous fait signe de le rejoin-dre.  «  Par  ici,  voyageur  !  J’ai  de  l’excellent  vin  et  personne  avec  qui  le  boire  !  »  Qu’allez-vous  faire ?",
    choices: [
      {
        text: "Accepter l'invitation.",
        pageId: "8",
      },
      {
        text: "Décliner et poursuivre votre chemin.",
        pageId: "17",
      },
      {
        text: "Menacer le satyre de votre épée pour qu'il vous laisse tranquille.",
        pageId: "26",
      },
    ],
  },
  "5": {
    text: "Les arbres sont plus espacés de ce côté et vous progressez sans trop de peine. Après avoir cheminé quelques instants, vous parvenez à une petite clairière, où vous avez la grande surprise de découvrir un magnifique cheval blanc, occupé à manger les feuilles du sous-bois. L’animal relève la  tête  lorsque  vous  approchez  et  vous  regarde  sans  peur.  C’est  sans  aucun  doute  l’un  des  plus  beaux  chevaux  que  vous  ayez  jamais  vu.",
    choices: [
      {
        text: "Tenter  de  monter  sur  son  dos.",
        pageId: "56",
      },
      {
        text: "Faire un détour et poursuivre votre chemin à travers la forêt.",
        pageId: "10",
      },
    ],
  },
  "6": {
    /** Ajouter 3 repas (+4 pts endurance) */
    text: "Vous vous servez de votre couteau pour découper la chair du sanglier. Quelques instants de travail  vous  permettent  de  récupérer  suffisamment  de  viande  pour  faire  trois  Repas  (chacun  vous  permettant  de  récupérer  4  points  d’Endurance).  Vous  vous  apprêtez  ensuite  à  poursuivre  votre  chemin, mais c’est pour vous apercevoir que le sentier a totalement disparu. Errant quelques instants au hasard, vous finissez par entendre une sorte de martèlement, léger mais répété.",
    choices: [
      {
        text: "Se rapprocher de l’origine de ce son.",
        pageId: "20",
      },
      {
        text: "Prendre une autre direction.",
        pageId: "87",
      },
    ],
  },
  "7": {
    /** TODO
     * + baume écorce / graine d'enchevêtrement / flûte (à utiliser avant n'importe quel combat non surpris)
     * +1 Chance
     */
    text: "Vous  saisissez  la  Dryade  au  moment  où  elle  allait  se  réfugier  à  l’intérieur  de  son  arbre.  Elle  se  répand en imprécations contre vous, mais vous maintenez fermement votre emprise et la menacez de votre épée. A la vue de l’acier tranchant, le comportement de la créature sylvaine change du tout au tout. Elle cesse de se débattre et vous implore de l’épargner, offrant de vous dédommager pour le tort qu’elle vous a causé. Vous savez que les dryades, tout comme la plupart des fées,  ne  sont  pas  dignes  de  confiance,  mais  qu’elles  respectent  scrupuleusement  leurs  marchés.  Après quelques instants de négociation, vous parvenez à un accord avec la Dryade, qui vous offre trois objets en échange de sa vie et de sa liberté. Vous acceptez et elle se baisse pour toucher une épaisse racine de l’arbre, qui s’écarte aussitôt pour dévoiler une cavité où se trouvent les trésors  promis.  Satisfait,  vous  relâchez  la  Dryade,  qui  disparaît  aussitôt  à  l’intérieur  de  son  arbre.  Par prudence, vous emportez tout de même les objets à une certaine distance de l’arbre pour les examiner. Dans un petit flacon de terre cuite, vous avez un Baume d’Écorce, dont vous pourrez enduire  votre  peau  au  début  de  n’importe  quel  combat  (à  condition  de  n’être  pas  surpris).  Il  épaissira  votre  épiderme  au  point  que  les  coups  ne  vous  ôteront  plus  qu’un  point  d’Endurance  lors  des  quatre  premiers  assauts  (voire  aucun  si  vous  tentez  votre  Chance  avec  succès).  Le  deuxième objet est une petite Graine d’Enchevêtrement, que vous pourrez également utiliser au début de n’importe quel combat où vous n’êtes pas surpris. Elle fera instantanément pousser des plantes  grimpantes  qui  s’accrocheront  à  votre  adversaire,  ce  qui  diminuera  son  Habileté  de  2  points pour la durée du combat. Notez que vous n’avez pas le temps d’utiliser à la fois le Baume et la Graine au début d’un même combat. Enfin, le troisième objet est une flûte, très belle mais qui  ne  semble  pas  magique.  Votre  bonne  fortune  vous  vaut  1  point  de  Chance.  Il  ne  vous  reste  plus maintenant qu’à quitter la clairière par l’un des deux sentiers qui vous sont offerts.",
    choices: [
      {
        text: "Prendre le premier.",
        pageId: "2",
      },
      {
        text: "Prendre le deuxième.",
        pageId: "97",
      },
    ],
  },
  "8": {
    /** TODO
     * + flûte de Pan
     * +4 Endurance / +4 Ivresse
     */
    text: "Le satyre n’avait pas menti : son vin est véritablement excellent ! Son goût est âpre mais riche et vous  ne  pouvez  pas  résister  à  la  tentation  d’en  boire  toujours  davantage.  Le  satyre  et  vous  accompagnez  vos  libations  de  diverses  chansons  et  vous  avez  l’impression  d’être  revenu  à  la  fête  de la veille, avant que vos ennuis ne commencent. La gourde finie, le satyre vous offre sa flûte de Pan avant de prendre congé et de disparaître parmi les arbres. Vous vous relevez avec une certaine difficulté et reprenez également votre chemin, titubant quelque peu sous l’effet de la boisson. Ajoutez 4 points à vos totaux d’Endurance et d’Ivresse.",
    choices: [
      {
        text: "Continuer.",
        pageId: "99",
      },
    ],
  },
  "9": {
    /** TODO
     * +2 Ivresse
     */
    text: "Alors que vous dansez, les couleurs et les formes commencent à se fondre les unes dans les autres  jusqu’à  devenir  un  tourbillon  de  vert  et  de  brun.  Le  vertige  vous  gagne  et  c’est  à  peine  si  vous  sentez  encore  vos  pieds  toucher  le  sol.  Vous  avez  l’impression  d’être  léger,  léger...  Puis  vous sentez que vos jambes s’immobilisent et vous cessez de tourner sur vous-même. Il vous faut quelques  instants  pour  que  votre  vision  redevienne  plus  claire.  Des  arbres  vous  entourent  toujours, mais vous n’êtes plus au milieu de la clairière. Le cercle de champignons vous a transporté à un autre endroit de la forêt. Ajoutez 2 points à votre total d’Ivresse.",
    choices: [
      {
        text: "Continuer.",
        pageId: "2",
      },
    ],
  },
  "10": {
    text: "La  forêt  s’éclaire  peu  à  peu  devant  vous  et  vous  parvenez  finalement  à  un  ruisseau  assez  large,  qui serpente joyeusement parmi les arbres. Le soleil fait son apparition entre les arbres, éclairant la surface de l’eau de reflets dorés. Quelques pierres bien disposées vous offrent un moyen aisé de  traverser  le  cours  d’eau.",
    choices: [
      {
        text: "Les  emprunter  et  poursuivre  votre  route.",
        pageId: "4",
      },
      {
        text: "Vous vous sentez d'humeur à pêcher à mains nues.",
        pageId: "15",
      },
    ],
  },
  "11": {
    text: "Le  sol  est  ici  tapissé  d’une  mousse  si  épaisse  qu’elle  étouffe  tous  les  sons.  À  distance,  il  vous  semble pourtant deviner des bruits d’animaux, mais vous seriez incapable de dire de quelle direction ils viennent.",
    choices: [
      {
        text: "Se rendre là.",
        pageId: "97",
      },
      {
        text: "Se rendre là.",
        pageId: "44",
      },
    ],
  },
  "12": {
    text: "Votre arrivée ne semble pas déranger les fées le moins du monde. Au contraire, elles paraissent ravies  !  Plusieurs  d’entre  elles  s’envolent  et  viennent  vous  tirer  jusqu’à  une  large  souche  pour  que  vous  vous  y  asseyiez.  Au  début,  vous  avez  du  mal  à  saisir  le  déluge  de  paroles  cristallines  dont elles vous abreuvent, mais elles s’en rendent rapidement compte et font un effort pour parler plus lentement. Elles vous disent que la nourriture qu’elles consommaient aurait des effets néfastes sur vous, mais vous invitent à goûter quelques-uns des champignons qui se trouvent là. « Ils sont très bons pour les humains ! » insiste une petite fée aux cheveux rouge coquelicot. Qu’allez- vous faire ?",
    choices: [
      {
        text: "Accepter de manger un champignon.",
        pageId: "28",
      },
      {
        text: "Refuser poliment.",
        pageId: "40",
      },
    ],
  },
  "13": {
    /** TODO Ajouter le troll */
    text: "Le troll brandit une lourde hache rouillée au moment où vous vous jetez sur lui : TROLL     Habileté 10     Endurance 10. Vous pouvez prendre la fuite à tout moment, mais il vous infligera une blessure qui vous coûtera 2  points  d’Endurance . Si  vous  êtes  vainqueur,  vous  trouvez  2  pièces  d’or en fouillant le troll.",
    choices: [
      {
        text: "Prendre la fuite.",
        pageId: "93",
      },
      {
        text: "Plus rien ne vous empêche de traverser le pont.",
        pageId: "3",
      },
    ],
  },
  "20": {
    text: "Le bruit se fait peu à peu plus fort, indiquant que vous progressez dans la bonne direction. Fort heureusement, les broussailles sont de plus en plus clairsemées de ce côté, ce qui vous permet de progresser  sans  trop  d’encombre.  Vous  arrivez  finalement  devant  une  souche  d’arbre  massive,  bien que rongée par les champignons et les vers. Assis dessus se trouve un petit homme barbu, vêtu d’habits dépenaillés et coiffé d’une sorte de bonnet informe. S’il était debout, il vous arriverait à peine à la taille. Un épais filet de fumée s’échappe de la pipe entre ses lèvres tandis qu’il s’occupe  à  ressemeller  une  chaussure.  C’est  le  bruit  de  son  marteau  contre  les  clous  qui  vous  a  attiré jusqu’ici. Au bas de la souche, une pile de chaussures de tailles diverses attendent visiblement leur tour. Le petit homme ne vous prête pas la moindre attention et vous n’êtes même pas certain qu’il se soit rendu compte de votre arrivée.",
    choices: [
      {
        text: "Lui adresser la parole.",
        pageId: "35",
      },
      {
        text: "Enlever vos bottes pour les mettre sur la pile.",
        pageId: "61",
      },
      {
        text: "Passer votre chemin.",
        pageId: "2",
      },
    ]
  },
  "43": {
    text:"Le sentier est parfois difficilement visible parmi la végétation du sous-bois, mais il vous permet néanmoins  de  progresser  rapidement.  Ce  constat  vous  emplirait  d’une  certaine  satisfaction  si  vous  aviez  également  la  certitude  de  toujours  progresser  dans  la  même  direction,  mais  ce  n’est  malheureusement pas le cas ! Le chemin que vous suivez est si plein de tournants que vous avez perdu tout sens de l’orientation après seulement quelques instants. Alors que vous vous deman-dez si vous avez eu raison de vous fier à ce sentier qui vous était offert, vous êtes brusquement alerté par le froissement des broussailles tout près de vous. Vous avez tout juste le temps de tirer votre épée avant qu’un sanglier massif n’en surgisse pour vous charger. La fuite est impossible et vous devez mener le combat : SANGLIER     Habileté 7     Endurance 10",
    choices: [
      {
        text: "Si vous l’emportez, rendez-vous au 6.",
        pageId: "6",
      }
    ],
  },
  "61": {

  },
  "87": {

  }
};
