const url: any = process.env.API_URL;

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "144721be69msh3345b23615f2cd7p1c5e40jsna51f7f3e6092",
    "X-RapidAPI-Host": "shoes-collections.p.rapidapi.com",
  },
};

export const getSneakers = async (
  revalidate = { next: { revalidate: 60 } }
) => {
  const response = await fetch(url, { ...options, ...revalidate });
  return response.json();
};
