import { Search } from "lucide-react";
import { type ChangeEvent, type ComponentProps, type Dispatch } from "react";
import { useTranslation } from "react-i18next";

interface SearchInputFieldProps extends ComponentProps<"input"> {
  value?: string;
  debouncedValue?: string;
  inputOnChange?: Dispatch<ChangeEvent<HTMLInputElement>>;
}

export const SearchInputField = ({
  value,
  // debouncedValue,
  inputOnChange,
  ...props
}: SearchInputFieldProps) => {
  const { t } = useTranslation();

  return (
    <div className="relative mr-6 ">
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />

      <input
        className="pl-10 pr-4 py-2 bg-[#EDEDEF] rounded-3xl h-10 w-full"
        placeholder={t("Search Here ...")}
        value={value}
        type="search"
        onChange={inputOnChange}
        {...props}
      />
    </div>
  );
};
