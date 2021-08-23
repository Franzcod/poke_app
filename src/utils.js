export default function colorType(typo) {
  let color = "";
  switch (typo) {
    case "grass":
      color = "#9bcc50";
      break;
    case "fire":
      color = "#fd7d24";
      break;
    case "normal":
      color = "#a4acaf";
      break;
    case "fighting":
      color = "#d56723";
      break;
    case "psychic":
      color = "#f366b9";
      break;
    case "water":
      color = "#4592c4";
      break;
    case "rock":
      color = "#a38c21";
      break;
    case "electric":
      color = "#eed535";
      break;
    case "steel":
      color = "#9eb7b8";
      break;
    case "ice":
      color = "#51c4e7";
      break;
    case "ghost":
      color = "#7b62a3";
      break;
    case "dark":
      color = "#707070";
      break;
    case "fairy":
      color = "#fdb9e9";
      break;
    case "poison":
      color = "#b97fc9";
      break;
    case "dragon":
      color = "#53a4cf";
      break;
    case "bug":
      color = "#729f3f";
      break;
    case "ground":
      color = "#f7de3f";
      break;
    default:
      color = "grey";
      break;
  }
  return color;
}
