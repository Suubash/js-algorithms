// Exercise 3: get only the companies that have category Retail, increment their start by 1 and append in the DOM a div that has the name, the category, the start and the end in paragraphs elements

const companies = [
  { name: "Company One", category: "Finance", start: 1981, end: 2004 },
  { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
  { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
  { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
  { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
  { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
  { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
  { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
  { name: "Company Nine", category: "Retail", start: 1981, end: 1989 },
];

const retailCategoryComapies = companies.filter(
  (company) => company.category === "Retail"
);
retailCategoryComapies.forEach(
  (company) => (company.start = company.start + 1)
);

let text = "";
retailCategoryComapies.map((company) => {
  console.log(company);
  text += `${company.name}, ${company.category}, ${company.start}, ${company.end} </br>`;
});

const paragraph = document.getElementById("paragraph");
paragraph.innerHTML = text;
