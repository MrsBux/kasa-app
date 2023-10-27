import DropdownItem from "../DropdownItem/DropdownItem";

import "../../style/build/dropdownmenu.css";

function DropdownMenu() {
  const menuItems = [
    {
      id: 1,
      title: "Fiabilité",
      description:
        "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements et toutes les informations sont régulièrement vérifiées par nos équipes.",
    },
    {
      id: 2,
      title: "Respect",
      description:
        "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de pertubation du voisinage entrainera une exclusion de notre plateforme.",
    },
    {
      id: 3,
      title: "Service",
      description:
        "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de pertubation du voisinage entrainera une exclusion de notre plateforme..",
    },
    {
      id: 4,
      title: "Sécurité",
      description:
        "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi à lhote quau locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestiques pour nos hôtes.",
    },
  ];
  return (
    <div className="menu">
      {menuItems.map((menuItems, index) => (
        <DropdownItem
          key={menuItems.id}
          title={menuItems.title}
          description={menuItems.description}
        />
      ))}
    </div>
  );
}

export default DropdownMenu;