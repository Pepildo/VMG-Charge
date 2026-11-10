# Project rules

- Business data (address, phone, price per kWh, hours) lives only in `src/lib/empresa.ts`; pages import it so one edit updates the whole site.
- Pricing math lives in `src/lib/preco.ts` with tests in `src/lib/preco.test.ts`; keep calculations out of components.
- The site is a single page (`src/routes/index.tsx`) with anchored sections; header/footer nav links are built from `SECOES` in `SiteHeader.tsx`, so add a section there and in the page together.
