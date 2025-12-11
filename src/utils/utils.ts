import { Section } from '../types';

export const groupAnagrams = (words: string[]): Section[] => {
  const map = new Map<string, string[]>();
  const groups: Section[] = [];
  const singles: Section = {
    title: 'Остальные',
    data: [],
  };

  words.forEach(word => {
    const key = word.toLowerCase().replace(/\s/g, '').split('').sort().join('');

    if (!map.has(key)) {
      map.set(key, []);
    }
    map.get(key)!.push(word);
  });

  map.forEach(wordList => {
    if (wordList.length > 1) {
      groups.push({
        title: '',
        data: wordList,
      });
    } else {
      singles.data.push(wordList[0]);
    }
  });

  const result = singles.data.length > 0 ? [...groups, singles] : groups;

  return result.map((section, index) => ({
    ...section,
    title: index === result.length - 1 ? 'Остальные' : `Значение ${index + 1}`,
  }));
};
