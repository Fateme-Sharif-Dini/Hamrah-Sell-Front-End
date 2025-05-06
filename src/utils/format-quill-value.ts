export const formatQuillValue = (data: string): string => {
  let sentences = "";
  if (data) {
    try {
      const jsonFormat = JSON.parse(data);
      for (const item of jsonFormat.ops) {
        sentences += " " + item.insert;
      }
    } catch (error) {
      return data;
    }
  }
  return sentences;
};
