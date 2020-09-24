import axiod from "https://deno.land/x/axiod/mod.ts";

const quote =  await axiod.get("http://swquotesapi.digitaljedi.dk/api/SWQuote/RandomStarWarsQuote")
  .then(({data:{starWarsQuote}}) => starWarsQuote);

export default quote