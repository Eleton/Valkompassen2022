export const levelToParty = (level) => {
  switch (level) {
    case 0:
      return "sd";
    case 1:
      return "kd";
    case 2:
      return "m";
    case 3:
      return "l";
    case 4:
      return "s";
    case 5:
      return "v";
    case 6:
      return "c";
    case 7:
      return "mp";
    default:
      return "sd";
  }
};

export const levelToParty2 = (level) => {
  switch (level) {
    case -1:
      return "afs";
    case 0:
      return "med";
    case 4:
      return "pp";
    case 9:
      return "fi";
    case 10:
      return "pn";
    default:
      return "afs";
  }
};
