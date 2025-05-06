import { ComboOption } from "@/app/_components/form-input/combo-input/combo-input.types";
import { City } from "@/stores/province.store";

export const getProvinceByCityId = (cityId: number, cities: City[]) => {
  const findProvince = cities?.find(({ id }) => id === cityId);
  return findProvince?.provinceId || undefined;
};

export const createCityOptionModel = (
  provinceId: number,
  cities: City[]
): ComboOption[] => {
  const findCities = cities?.filter((city) => city.provinceId === provinceId);
  return findCities?.map?.(({ id, name }) => ({ label: name, value: id }));
};
