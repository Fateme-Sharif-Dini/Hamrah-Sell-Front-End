export const jsonToFormData = (json: Record<string, any>): FormData => {
  const formData = new FormData();

  const buildFormData = (
    formData: FormData,
    data: any,
    parentKey: string | null = null
  ): void => {
    if (
      data &&
      typeof data === "object" &&
      !Array.isArray(data) &&
      !(data instanceof File)
    ) {
      Object.entries(data).forEach(([key, value]) => {
        const formKey = parentKey ? `${parentKey}[${key}]` : key;
        buildFormData(formData, value, formKey);
      });
    } else if (Array.isArray(data)) {
      if (data.every((item) => item instanceof File)) {
        const fileList = data.map((file: File) => ({
          name: file.name,
          file: file
        }));
        formData.append(parentKey as string, JSON.stringify(fileList));
      } else {
        data.forEach((value, index) => {
          const formKey = parentKey ? `${parentKey}[${index}]` : `${index}`;
          buildFormData(formData, value, formKey);
        });
      }
    } else {
      if (parentKey) {
        formData.append(parentKey, data);
      }
    }
  };

  buildFormData(formData, json);

  return formData;
};
