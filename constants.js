export const removeTitles = (name) => {
  return name.replace(/^(Dr\.|Mr\.|Ms\.|Eng\.)\s+/i, '');
};
