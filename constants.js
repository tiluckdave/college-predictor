const constants = {
  TITLE: "Exam Rank College Predictor",
  CATEGORY_LABEL: "Select Category",
  RANK_LABEL: "Enter Category Rank",
  NEET_RANK_LABEL: "Enter Rank As Per Open Rank List",
  GENDER_LABEL: "Select Gender",
  EXAM_LABEL: "Select Exam",
  STATE_LABEL: "Select Your Home State",
  ROUND_NUMBER_LABEL: "Select Round Number:",
  ROUND_NUMBER_OPTIONS: [
    { value: "1", label: "1" },
    { value: "2", label: "2" },
    { value: "3", label: "3" },
    { value: "4", label: "4" },
    { value: "5", label: "5" },
    { value: "6", label: "6" },
  ],
  CATEGORY_OPTIONS: [
    { value: "ews_pwd", label: "EWS (PwD)" },
    { value: "ews", label: "EWS" },
    { value: "obc_ncl_pwd", label: "OBC-NCL (PwD)" },
    { value: "obc_ncl", label: "OBC-NCL" },
    { value: "open_pwd", label: "OPEN (PwD)" },
    { value: "open", label: "OPEN" },
    { value: "sc_pwd", label: "SC (PwD)" },
    { value: "sc", label: "SC" },
    { value: "st_pwd", label: "ST (PwD)" },
    { value: "st", label: "ST" },
  ],
  GENDER_OPTIONS: [
    { value: "gender_neutral", label: "Gender-Neutral" },
    {
      value: "female_only",
      label: "Female-only (including Supernumerary)",
    },
  ],
  EXAM_OPTIONS: [
    { value: "jee_main", label: "JEE Main" },
    { value: "jee_advanced", label: "JEE Advanced" },
    { value: "neet", label: "NEET" },
    { value: "mhtcet", label: "MHT CET" },
    { value: "kcet", label: "KCET" },
  ],
  STATE_OPTIONS: [
    { value: "all_india", label: "All India" },
    { value: "andhra_pradesh", label: "Andhra Pradesh" },
    { value: "arunachal_pradesh", label: "Arunachal Pradesh" },
    { value: "assam", label: "Assam" },
    { value: "bihar", label: "Bihar" },
    { value: "chhatisgarh", label: "Chhatisgarh" },
    { value: "diu", label: "Diu" },
    { value: "goa", label: "Goa" },
    { value: "gujarat", label: "Gujarat" },
    { value: "haryana", label: "Haryana" },
    { value: "himachal_pradesh", label: "Himachal Pradesh" },
    { value: "jharkhand", label: "Jharkhand" },
    { value: "jammu_&_kashmir", label: "Jammu & Kashmir" },
    { value: "karnataka", label: "Karnataka" },
    { value: "kerala", label: "Kerala" },
    { value: "madhya_pradesh", label: "Madhya Pradesh" },
    { value: "maharashtra", label: "Maharashtra" },
    { value: "manipur", label: "Manipur" },
    { value: "meghalaya", label: "Meghalaya" },
    { value: "mizoram", label: "Mizoram" },
    { value: "nagaland", label: "Nagaland" },
    { value: "new_delhi", label: "New Delhi" },
    { value: "odisha", label: "Odisha" },
    { value: "puducherry", label: "Puducherry" },
    { value: "punjab", label: "Punjab" },
    { value: "rajasthan", label: "Rajasthan" },
    { value: "sikkim", label: "Sikkim" },
    { value: "tamil_nadu", label: "Tamil Nadu" },
    { value: "telangana", label: "Telangana" },
    { value: "tripura", label: "Tripura" },
    { value: "uttar_pradesh", label: "Uttar Pradesh" },
    { value: "uttarakhand", label: "Uttarakhand" },
    { value: "west_bengal", label: "West Bengal" },
  ],
  SCHOLARSHIP_TITLE: "Scholarship Finder",
  NUMBER_STATES_IN_SCHOLARSHIP_SHEET: 8,
  NUMBER_CITIES_IN_SCHOLARSHIP_SHEET: 4,
  STATUS_LABEL: "Enter Scholarship Status:",
  GRADE_LABEL: "Enter Grade:",
  STREAM_LABEL: "Enter Stream:",
  CITY_LABEL: "Enter City Name:",
  FAMILY_INCOME_LABEL: "Enter your annual family income in lakhs",
  FAMILY_INCOME_HELP_TEXT: "For example, Rs. 1,20,000 to be entered as 1.2",
  FAMILY_INCOME_HELP_TEXT_TWO:
    " Scholarships might have specific eligibility within the range check requirements",
  GRADE_OPTIONS: [
    { value: "11", label: "11" },
    { value: "12", label: "12" },
    { value: "ug", label: "UG" },
    { value: "other", label: "Other" },
  ],
  STREAM_OPTIONS: [
    { value: "any", label: "Any Stream" },
    { value: "engineering", label: "Engineering" },
    { value: "medical", label: "Medical" },
  ],
  SCHOLARSHIP_GENDER_OPTIONS: [
    { value: "show_both", label: "Show Both" },
    { value: "male", label: "Male" },
    { value: "female", label: "Female" },
  ],
  SCHOLARSHIP_STATUS_OPTIONS: [
    { value: "open", label: "Open" },
    { value: "closed", label: "Closed" },
    { value: "show_both", label: "Both" },
  ],
  CITY_OPTIONS: [
    { value: "all_india", label: "All India" },
    { value: "mumbai", label: "Mumbai" },
    { value: "delhi_ncr", label: "Delhi NCR" },
    { value: "ahmedabad", label: "Ahmedabad" },
    { value: "bangalore", label: "Bangalore" },
    { value: "pune", label: "Pune" },
  ],
  FAMILY_INCOME_OPTIONS: [
    { value: "0.5", label: "0.5 Lakh" },
    { value: "1.0", label: "1 Lakh" },
    { value: "1.5", label: "1.5 Lakh" },
    { value: "2.0", label: "2 Lakh" },
    { value: "2.5", label: "2.5 Lakh" },
    { value: "3.0", label: "3 Lakh" },
    { value: "3.5", label: "3.5 Lakh" },
    { value: "4.0", label: "4 Lakh" },
    { value: "5.0", label: "5 Lakh" },
  ],
  SCHOLARSHIP_CATEGORY_OPTIONS: [
    { value: "pwd", label: "PWD" },
    { value: "sc", label: "SC" },
    { value: "st", label: "ST" },
    { value: "general", label: "General" },
    { value: "minority", label: "Minority" },
    { value: "others", label: "Others" },
  ],
  CATEGORY_HELP_TEXT: "Choose 'Others' if relevant category is not present",
  MHTCET_GENDER_OPTIONS: [
    { value: "Gender-Neutral", label: "Gender-Neutral" },
    { value: "Female-Only", label: "Female-Only" },
  ],
  MHTCET_PWD_LABEL: "Are you a PWD Student?",
  MHTCET_PWD_OPTIONS: [
    { value: "No", label: "No" },
    { value: "Yes", label: "Yes" },
  ],
  MHTCET_DEFENSE_LABEL: "Are you a Defense Ward Student?",
  MHTCET_DEFENSE_OPTIONS: [
    { value: "No", label: "No" },
    { value: "Yes", label: "Yes" },
  ],
  MHTCET_CATEGORY_OPTIONS: [
    { value: "OBC", label: "OBC" },
    { value: "SC", label: "SC" },
    { value: "ST", label: "ST" },
    { value: "Open", label: "Open" },
    { value: "Religious Minority", label: "Religious Minority" },
    { value: "EWS", label: "EWS" },
    { value: "VJ", label: "VJ" },
    { value: "NT", label: "NT" },
    { value: "Orphan", label: "Orphan" },
  ],
  MHTCET_STATE_OPTIONS: [
    { value: "Maharashtra", label: "Maharashtra" },
    { value: "Other", label: "Other" },
  ],
  KCET_CATEGORY_OPTIONS: [
    { value: "1", label: "1" },
    { value: "2A", label: "2A" },
    { value: "2B", label: "2B" },
    { value: "3A", label: "3A" },
    { value: "3B", label: "3B" },
    { value: "General", label: "General" },
    { value: "SC", label: "SC" },
    { value: "ST", label: "ST" },
  ],
  KCET_STATE_OPTIONS: [
    { value: "All India", label: "All India" },
    { value: "Karnataka", label: "Karnataka" },
  ],
  KCET_LANGUAGE_LABEL: "Choose your Class 1 - Class 10 Language",
  KCET_LANGUAGE_OPTIONS: [
    { value: "Any", label: "Any" },
    { value: "Kannada", label: "Kannada" },
  ],
  KCET_RURAL_LABEL: "Choose Your Region",
  KCET_RURAL_OPTIONS: [
    { value: "Rural", label: "Rural" },
    { value: "All", label: "All" },
  ],
  KCET_COURSETYPE_LABEL: "Choose Course Type",
  KCET_COURSETYPE_OPTIONS: [
    { value: "Medical/Dental", label: "Medical/Dental" },
    { value: "Agriculture", label: "Agriculture" },
    { value: "BNYS", label: "BNYS" },
    { value: "Pharma", label: "Pharma" },
    { value: "Engineering", label: "Engineering" },
    { value: "Architecture", label: "Architecture" },
  ],
  COUNSELLING_LABEL: "Choose Your Counselling Process",
  COUNSELLING_OPTIONS: [
    { value: "JOSAA", label: "JOSAA" },
    { value: "JAC", label: "JAC" },
  ],
  JAC_STATE_OPTIONS: [
    { value: "Delhi", label: "Delhi" },
    { value: "Outside Delhi", label: "Outside Delhi" },
  ],
  JAC_CATEGORY_OPTIONS: [
    { value: "EWS", label: "EWS" },
    { value: "Kashmiri Minority", label: "Kashmiri Minority" },
    { value: "OBC", label: "OBC" },
    { value: "General", label: "General" },
    { value: "SC", label: "SC" },
    { value: "ST", label: "ST" },
  ],
};

export default function getConstants() {
  return constants;
}