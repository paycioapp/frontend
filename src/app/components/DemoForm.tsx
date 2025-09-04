"use client";
import toast from "react-hot-toast";
import usePost from "@/lib/useFetch";
import { CONTACTUS_US } from "@/lib/API";
import ReusableForm, { FieldConfig } from "./utils/ReUsableForm";
import { useTranslations } from "next-intl";

interface FormData {
  name: string;
  email: string;
  company: string;
  country: string;
  howdoyouknow: string;
  comment: string;
  type: string;
  [key: string]: unknown; // Add index signature
}

const DemoForm = () => {
  const { loading, postData } = usePost();
  const t = useTranslations();
  const fields: FieldConfig[] = [
    { name: "name", type: "text", placeholder: t("placeholder_name") },
    { name: "email", type: "text", placeholder: t("placeholder_email") },
    { name: "company", type: "text", placeholder: t("placeholder_company") },
    { name: "country", type: "select", placeholder: t("placeholder_country"), options: currency_list },
    { name: "howdoyouknow", type: "select", placeholder: t("placeholder_howdoyouknow"), options: howdoyouknow },
    { name: "comment", type: "textarea", placeholder: t("placeholder_comment") }
  ];

  const initialValues: FormData = {
    name: "",
    email: "",
    company: "",
    country: "",
    howdoyouknow: "",
    comment: "",
    type: "Contact",
  };

  const validate = (values: FormData): Partial<Record<keyof FormData, string>> => {
    const errors: Partial<Record<keyof FormData, string>> = {};

    if (!values.name.trim()) errors.name = t("error_name_required");
    if (!values.email.trim()) {
      errors.email = t("error_email_required");
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = t("error_email_invalid");
    }
    if (!values.company.trim()) errors.company = t("error_company_required");
    if (!values.country.trim()) errors.country = t("error_country_required");
    if (!values.howdoyouknow.trim()) errors.howdoyouknow = t("error_howdoyouknow_required");
    if (!values.comment.trim()) errors.comment = t("error_comment_required");

    return errors;
  };

  const handleSubmit = async (data: FormData) => {
    const response = await postData(CONTACTUS_US, data);
    if (response?.responsecode === 200) {
      toast.success(response.message || "Submitted successfully!");
    } else {
      toast.error(response?.message || "Submission failed.");
    }
  };

  return (
    <ReusableForm
      initialValues={initialValues}
      validate={validate}
      onSubmit={handleSubmit}
      fields={fields}
      loading={loading}

    />
  );
};

export default DemoForm;
const howdoyouknow = [
  { label: 'Search Engine', value: "Search Engine" },
  { label: 'Referral', value: "Referral" },
  { label: 'Trade show', value: "Trade show" },
  { label: 'Seminar', value: "Seminar" },
  { label: 'Social Media', value: "Social Media" },
  { label: 'Email Marketing', value: "Email Marketing" },
  { label: 'Online Advertising', value: "Online Advertising" },
  { label: 'Other', value: "Other" }
]
const currency_list = [
  { label: "Afghanistan", currency: "Afghani", value: "AFN" },
  { label: "Albania", currency: "Lek", value: "ALL" },
  { label: "Algeria", currency: "Algerian Dinar", value: "DZD" },
  { label: "American Samoa", currency: "US Dollar", value: "USD" },
  { label: "Andorra", currency: "Euro", value: "EUR" },
  { label: "Angola", currency: "Kwanza", value: "AOA" },
  { label: "Anguilla", currency: "East Caribbean Dollar", value: "XCD" },
  { label: "Antigua and Barbuda", currency: "East Caribbean Dollar", value: "XCD" },
  { label: "Argentina", currency: "Argentine Peso", value: "ARS" },
  { label: "Armenia", currency: "Armeniam Dram", value: "AMD" },
  { label: "Aruba", currency: "Aruban Florin", value: "AWG" },
  { label: "Australia", currency: "Australian Dollar", value: "AUD" },
  { label: "Austria", currency: "Euro", value: "EUR" },
  { label: "Azerbaijan", currency: "Azerbaijanian Manat", value: "AZN" },
  { label: "Bahamas", currency: "Bahamian Dollar", value: "BSD" },
  { label: "Bahrain", currency: "Bahraini Dinar", value: "BHD" },
  { label: "Bangladesh", currency: "Taka", value: "BDT" },
  { label: "Barbados", currency: "Barbados Dollar", value: "BBD" },
  { label: "Belarus", currency: "Belarusian Ruble", value: "BYN" },
  { label: "Belgium", currency: "Euro", value: "EUR" },
  { label: "Belize", currency: "Belize Dollar", value: "BZD" },
  { label: "Benin", currency: "CFA Franc (BCEAO)", value: "XOF" },
  { label: "Bermuda", currency: "Bermudian Dollar", value: "BMD" },
  { label: "Bhutan", currency: "Ngultrum", value: "BTN" },
  { label: "Bolivia (Plurinat.State)", currency: "Boliviano", value: "BOB" },
  { label: "Bonaire/S.Eustatius/Saba", currency: "US Dollar", value: "USD" },
  { label: "Bosnia and Herzegovina", currency: "Convertible Mark", value: "BAM" },
  { label: "Botswana", currency: "Pula", value: "BWP" },
  { label: "Brazil", currency: "Brazilian Real", value: "BRL" },
  { label: "British Indian Ocean Ter", currency: "US Dollar", value: "USD" },
  { label: "British Virgin Islands", currency: "US Dollar", value: "USD" },
  { label: "Brunei Darussalam", currency: "Brunei Dollar", value: "BND" },
  { label: "Bulgaria", currency: "Bulgarian Lev", value: "BGN" },
  { label: "Burkina Faso", currency: "CFA Franc (BCEAO)", value: "XOF" },
  { label: "Burundi", currency: "Burundi Franc", value: "BIF" },
  { label: "Cape Verde", currency: "Cabo Verde Escudo", value: "CVE" },
  { label: "Cambodia", currency: "Riel", value: "KHR" },
  { label: "Cameroon", currency: "CFA Franc (BEAC)", value: "XAF" },
  { label: "Canada", currency: "Canadian Dollar", value: "CAD" },
  { label: "Cayman Islands", currency: "Cayman Islands Dollar", value: "KYD" },
  { label: "Central African Republic", currency: "CFA Franc (BEAC)", value: "XAF" },
  { label: "Chad", currency: "CFA Franc (BEAC)", value: "XAF" },
  { label: "Channel Islands", currency: "Pound Sterling", value: "GBP" },
  { label: "Chile", currency: "Chilean Peso", value: "CLP" },
  { label: "China", currency: "Yuan Renminbi", value: "CNY" },
  { label: "China, Hong Kong SAR", currency: "Hong Kong Dollar", value: "HKD" },
  { label: "China, Macao SAR", currency: "Pataca", value: "MOP" },
  { label: "Taiwan Province of China", currency: "New Taiwan Dollar", value: "TWD" },
  { label: "Christmas Island", currency: "Australian Dollar", value: "AUD" },
  { label: "Cocos (Keeling) Islands", currency: "Australian Dollar", value: "AUD" },
  { label: "Colombia", currency: "Colombian Peso", value: "COP" },
  { label: "Comoros", currency: "Comoro Franc", value: "KMF" },
  { label: "Congo", currency: "CFA Franc (BEAC)", value: "XAF" },
  { label: "Congo, Dem. Rep. of the", currency: "Congolese Franc", value: "CDF" },
  { label: "Cook Islands", currency: "New Zealand Dollar", value: "NZD" },
  { label: "Costa Rica", currency: "Costa Rican Colón", value: "CRC" },
  { label: "Côte d'Ivoire", currency: "CFA Franc (BCEAO)", value: "XOF" },
  { label: "Croatia", currency: "Croatian Kuna", value: "HRK" },
  { label: "Cuba", currency: "Cuban Peso", value: "CUP" },
  { label: "Curaçao", currency: "Netherlands Antillian Guilder", value: "ANG" },
  { label: "Cyprus", currency: "Euro", value: "EUR" },
  { label: "Czechia", currency: "Czech Koruna", value: "CZK" },
  { label: "Denmark", currency: "Danish Krone", value: "DKK" },
  { label: "Djibouti", currency: "Djibouti Franc", value: "DJF" },
  { label: "Dominica", currency: "East Caribbean Dollar", value: "XCD" },
  { label: "Dominican Republic", currency: "Dominican Peso", value: "DOP" },
  { label: "Ecuador", currency: "US Dollar", value: "USD" },
  { label: "Egypt", currency: "Egyptian Pound", value: "EGP" },
  { label: "El Salvador", currency: "US Dollar", value: "USD" },
  { label: "Equatorial Guinea", currency: "CFA Franc (BEAC)", value: "XAF" },
  { label: "Eritrea", currency: "Nakfa", value: "ERN" },
  { label: "Estonia", currency: "Euro", value: "EUR" },
  { label: "Ethiopia", currency: "Ethiopian Birr", value: "ETB" },
  { label: "Falkland Is.(Malvinas)", currency: "Falkland Islands Pound", value: "FKP" },
  { label: "Faroe Islands", currency: "Danish Krone", value: "DKK" },
  { label: "Fiji, Republic of", currency: "Fiji Dollar", value: "FJD" },
  { label: "Finland", currency: "Euro", value: "EUR" },
  { label: "France", currency: "Euro", value: "EUR" },
  { label: "French Guiana", currency: "Euro", value: "EUR" },
  { label: "French Polynesia", currency: "CFP Franc", value: "XPF" },
  { label: "French Southern Terr", currency: "Euro", value: "EUR" },
  { label: "Gabon", currency: "CFA Franc (BEAC)", value: "XAF" },
  { label: "Gambia", currency: "Dalasi", value: "GMD" },
  { label: "Georgia", currency: "Lari", value: "GEL" },
  { label: "Germany", currency: "Euro", value: "EUR" },
  { label: "Ghana", currency: "Ghana Cedi", value: "GHS" },
  { label: "Gibraltar", currency: "Gibraltar Pound", value: "GIP" },
  { label: "Greece", currency: "Euro", value: "EUR" },
  { label: "Greenland", currency: "Danish Krone", value: "DKK" },
  { label: "Grenada", currency: "East Caribbean Dollar", value: "XCD" },
  { label: "Guadeloupe", currency: "Euro", value: "EUR" },
  { label: "Guam", currency: "US Dollar", value: "USD" },
  { label: "Guatemala", currency: "Quetzal", value: "GTQ" },
  { label: "Guernsey", currency: "Pound Sterling", value: "GBP" },
  { label: "Guinea", currency: "Guinea Franc", value: "GNF" },
  { label: "Guinea-Bissau", currency: "CFA Franc (BCEAO)", value: "XOF" },
  { label: "Guyana", currency: "Guyana Dollar", value: "GYD" },
  { label: "Haiti", currency: "Gourde", value: "HTG" },
  { label: "Honduras", currency: "Lempira", value: "HNL" },
  { label: "Hungary", currency: "Forint", value: "HUF" },
  { label: "Iceland", currency: "Iceland Króna", value: "ISK" },
  { label: "India", currency: "Indian Rupee", value: "INR" },
  { label: "Indonesia", currency: "Rupiah", value: "IDR" },
  { label: "Iran (Islamic Rep. of)", currency: "Iranian Rial", value: "IRR" },
  { label: "Iraq", currency: "Iraqi Dinar", value: "IQD" },
  { label: "Ireland", currency: "Euro", value: "EUR" },
  { label: "Isle of Man", currency: "Pound Sterling", value: "GBP" },
  { label: "Israel", currency: "New Israeli Sheqel", value: "ILS" },
  { label: "Italy", currency: "Euro", value: "EUR" },
  { label: "Jamaica", currency: "Jamaican Dollar", value: "JMD" },
  { label: "Japan", currency: "Yen", value: "JPY" },
  { label: "Jersey", currency: "Pound Sterling", value: "GBP" },
  { label: "Jordan", currency: "Jordanian Dinar", value: "JOD" },
  { label: "Kazakhstan", currency: "Tenge", value: "KZT" },
  { label: "Kenya", currency: "Kenyan Shilling", value: "KES" },
  { label: "Kiribati", currency: "Australian Dollar", value: "AUD" },
  { label: "Korea, Dem. People's Rep", currency: "North Korean Won", value: "KPW" },
  { label: "Korea, Republic of", currency: "Won", value: "KRW" },
  { label: "Kuwait", currency: "Kuwaiti Dinar", value: "KWD" },
  { label: "Kyrgyzstan", currency: "Som", value: "KGS" },
  { label: "Lao People's Dem. Rep.", currency: "Kip", value: "LAK" },
  { label: "Latvia", currency: "Euro", value: "EUR" },
  { label: "Lebanon", currency: "Lebanese Pound", value: "LBP" },
  { label: "Lesotho", currency: "Loti", value: "LSL" },
  { label: "Liberia", currency: "Liberian Dollar", value: "LRD" },
  { label: "Libya", currency: "Libyan Dinar", value: "LYD" },
  { label: "Liechtenstein", currency: "Swiss Franc", value: "CHF" },
  { label: "Lithuania", currency: "Euro", value: "EUR" },
  { label: "Luxembourg", currency: "Euro", value: "EUR" },
  { label: "Macedonia, Fmr Yug Rp of", currency: "Denar", value: "MKD" },
  { label: "Madagascar", currency: "Malagasy Ariary", value: "MGA" },
  { label: "Malawi", currency: "Malawi Kwacha", value: "MWK" },
  { label: "Malaysia", currency: "Malaysian Ringgit", value: "MYR" },
  { label: "Maldives", currency: "Rufiyaa", value: "MVR" },
  { label: "Mali", currency: "CFA Franc (BCEAO)", value: "XOF" },
  { label: "Malta", currency: "Euro", value: "EUR" },
  { label: "Marshall Islands", currency: "US Dollar", value: "USD" },
  { label: "Martinique", currency: "Euro", value: "EUR" },
  { label: "Mauritania", currency: "Ouguiya", value: "MRO" },
  { label: "Mauritius", currency: "Mauritius Rupee", value: "MUR" },
  { label: "Mayotte", currency: "Euro", value: "EUR" },
  { label: "Mexico", currency: "Mexican Peso", value: "MXN" },
  { label: "Micronesia,Fed.States of", currency: "US Dollar", value: "USD" },
  { label: "Moldova, Republic of", currency: "Moldovan Leu", value: "MDL" },
  { label: "Mongolia", currency: "Tugrik", value: "MNT" },
  { label: "Montenegro", currency: "Euro", value: "EUR" },
  { label: "Montserrat", currency: "East Caribbean Dollar", value: "XCD" },
  { label: "Morocco", currency: "Moroccan Dirham", value: "MAD" },
  { label: "Mozambique", currency: "Metical", value: "MZN" },
  { label: "Myanmar", currency: "Kyat", value: "MMK" },
  { label: "Namibia", currency: "Namibian Dollar", value: "NAD" },
  { label: "Nauru", currency: "Australian Dollar", value: "AUD" },
  { label: "Nepal", currency: "Nepalese Rupee", value: "NPR" },
  { label: "Netherlands", currency: "Euro", value: "EUR" },
  { label: "New Caledonia", currency: "CFP Franc", value: "XPF" },
  { label: "New Zealand", currency: "New Zealand Dollar", value: "NZD" },
  { label: "Nicaragua", currency: "Córdoba Oro", value: "NIO" },
  { label: "Niger", currency: "CFA Franc (BCEAO)", value: "XOF" },
  { label: "Nigeria", currency: "Naira", value: "NGN" },
  { label: "Niue", currency: "New Zealand Dollar", value: "NZD" },
  { label: "Northern Mariana Is.", currency: "US Dollar", value: "USD" },
  { label: "Norway", currency: "Norwegian Krone", value: "NOK" },
  { label: "Oman", currency: "Rial Omani", value: "OMR" },
  { label: "Pakistan", currency: "Pakistan Rupee", value: "PKR" },
  { label: "Palau", currency: "US Dollar", value: "USD" },
  { label: "Panama", currency: "Balboa", value: "PAB" },
  { label: "Papua New Guinea", currency: "Kina", value: "PGK" },
  { label: "Paraguay", currency: "Guaraní", value: "PYG" },
  { label: "Peru", currency: "Sol", value: "PEN" },
  { label: "Philippines", currency: "Philippine Peso", value: "PHP" },
  { label: "Pitcairn Islands", currency: "New Zealand Dollar", value: "NZD" },
  { label: "Poland", currency: "Zloty", value: "PLN" },
  { label: "Portugal", currency: "Euro", value: "EUR" },
  { label: "Puerto Rico", currency: "US Dollar", value: "USD" },
  { label: "Qatar", currency: "Qatari Rial", value: "QAR" },
  { label: "Réunion", currency: "Euro", value: "EUR" },
  { label: "Romania", currency: "Romanian Leu", value: "RON" },
  { label: "Russian Federation", currency: "Russian Ruble", value: "RUB" },
  { label: "Rwanda", currency: "Rwanda Franc", value: "RWF" },
  { label: "Saint Barthélemy", currency: "Euro", value: "EUR" },
  { label: "Saint Helena", currency: "Saint Helena Pound", value: "SHP" },
  { label: "Saint Kitts and Nevis", currency: "East Caribbean Dollar", value: "XCD" },
  { label: "Saint Lucia", currency: "East Caribbean Dollar", value: "XCD" },
  { label: "Saint-Martin", currency: "Euro", value: "EUR" },
  { label: "St. Pierre and Miquelon", currency: "Euro", value: "EUR" },
  { label: "Saint Vincent/Grenadines", currency: "East Caribbean Dollar", value: "XCD" },
  { label: "Samoa", currency: "Tala", value: "WST" },
  { label: "Sao Tome and Principe", currency: "Dobra", value: "STD" },
  { label: "Saudi Arabia", currency: "Saudi Riyal", value: "SAR" },
  { label: "Senegal", currency: "CFA Franc (BCEAO)", value: "XOF" },
  { label: "Serbia", currency: "Serbian Dinar", value: "RSD" },
  { label: "Seychelles", currency: "Seychelles Rupee", value: "SCR" },
  { label: "Sierra Leone", currency: "Leone", value: "SLL" },
  { label: "Singapore", currency: "Singapore Dollar", value: "SGD" },
  { label: "Sint Maarten", currency: "Netherlands Antillian Guilder", value: "ANG" },
  { label: "Slovakia", currency: "Euro", value: "EUR" },
  { label: "Slovenia", currency: "Euro", value: "EUR" },
  { label: "Solomon Islands", currency: "Solomon Islands Dollar", value: "SBD" },
  { label: "Somalia", currency: "Somali Shilling", value: "SOS" },
  { label: "South Africa", currency: "Rand", value: "ZAR" },
  { label: "South Sudan", currency: "South Sudanese Pound", value: "SSP" },
  { label: "Spain", currency: "Euro", value: "EUR" },
  { label: "Sri Lanka", currency: "Sri Lanka Rupee", value: "LKR" },
  { label: "Sudan", currency: "Sudanese Pound", value: "SDG" },
  { label: "Suriname", currency: "Suriname Dollar", value: "SRD" },
  { label: "Swaziland", currency: "Lilangeni", value: "SZL" },
  { label: "Sweden", currency: "Swedish Krona", value: "SEK" },
  { label: "Switzerland", currency: "Swiss Franc", value: "CHF" },
  { label: "Syrian Arab Republic", currency: "Syrian Pound", value: "SYP" },
  { label: "Tajikistan", currency: "Somoni", value: "TJS" },
  { label: "Tanzania, United Rep. of", currency: "Tanzanian Shilling", value: "TZS" },
  { label: "Thailand", currency: "Baht", value: "THB" },
  { label: "Timor-Leste", currency: "US Dollar", value: "USD" },
  { label: "Togo", currency: "CFA Franc (BCEAO)", value: "XOF" },
  { label: "Tokelau", currency: "New Zealand Dollar", value: "NZD" },
  { label: "Tonga", currency: "Pa'anga", value: "TOP" },
  { label: "Trinidad and Tobago", currency: "Trinidad and Tobago Dollar", value: "TTD" },
  { label: "Tunisia", currency: "Tunisian Dinar", value: "TND" },
  { label: "Turkey", currency: "Turkish Lira", value: "TRY" },
  { label: "Turkmenistan", currency: "Turkmenistan New Manat", value: "TMT" },
  { label: "Turks and Caicos Is.", currency: "US Dollar", value: "USD" },
  { label: "Tuvalu", currency: "Australian Dollar", value: "AUD" },
  { label: "Uganda", currency: "Uganda Shilling", value: "UGX" },
  { label: "Ukraine", currency: "Hryvnia", value: "UAH" },
  { label: "United Arab Emirates", currency: "UAE Dirham", value: "AED" },
  { label: "United Kingdom", currency: "Pound Sterling", value: "GBP" },
  { label: "United States of America", currency: "US Dollar", value: "USD" },
  { label: "US Virgin Islands", currency: "US Dollar", value: "USD" },
  { label: "Uruguay", currency: "Peso Uruguayo", value: "UYU" },
  { label: "Uzbekistan", currency: "Uzbekistan Sum", value: "UZS" },
  { label: "Vanuatu", currency: "Vatu", value: "VUV" },
  { label: "Venezuela, Boliv Rep of", currency: "Bolívar", value: "VEF" },
  { label: "Viet Nam", currency: "Dong", value: "VND" },
  { label: "Wallis and Futuna Is.", currency: "CFP Franc", value: "XPF" },
  { label: "Western Sahara", currency: "Moroccan Dirham", value: "MAD" },
  { label: "Yemen", currency: "Yemeni Rial", value: "YER" },
  { label: "Zambia", currency: "Zambian Kwacha", value: "ZMW" },
  { label: "Zimbabwe", currency: "Zimbabwe Dollar", value: "ZWL" }
]