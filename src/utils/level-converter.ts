export const levelConverter = (num: number): string => {
  const level = num + 1;
  const units = ['', 'یک', 'دو', 'سه', 'چهار', 'پنج', 'شش', 'هفت', 'هشت', 'نه'];
  const tens = [
    '',
    'ده',
    'بیست',
    'سی',
    'چهل',
    'پنجاه',
    'شصت',
    'هفتاد',
    'هشتاد',
    'نود',
  ];
  const teens = [
    'ده',
    'یازده',
    'دوازده',
    'سیزده',
    'چهارده',
    'پانزده',
    'شانزده',
    'هفده',
    'هجده',
    'نوزده',
  ];

  if (level > 100) {
    return 'بیشتر از 100 ...';
  }

  if (level === 100) {
    return 'سطح صد';
  }

  let levelText = 'سطح ';

  if (level < 10) {
    levelText += units[level];
  } else if (level >= 10 && level < 20) {
    levelText += teens[level - 10];
  } else {
    const unitPart = level % 10;
    const tenPart = Math.floor(level / 10);

    levelText += tens[tenPart];
    if (unitPart > 0) {
      levelText += ' و ' + units[unitPart];
    }
  }

  return levelText;
};
