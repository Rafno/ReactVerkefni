const API = "https://vefforritun2-2018-v4-synilausn.herokuapp.com";

export async function fetchNavigation() {
  const response = await fetch(API);
  const data = await response.json();
  data.schools.map(async el => {
    el.slug = await fetchDynamic(el.slug);
    el.slug = await el.slug.school;
    console.log(el.slug);
  });
  return data.schools;
}

export async function fetchDynamic(slug) {
  const response = await fetch(`${API}/${slug}`);
  const data = await response.json();
  return data;
}