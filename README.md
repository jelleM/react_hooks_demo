# React Hooks

> ## "A metaphor for Hooks. You “hang” state onto them from your function component. When you come back it’s hanging there." - Dan Abramov

## Why?

### Reusable stateful logic between components
- Momenteel complex om reusable gedrag aan een component te binden. 
- HOCs of render props zijn een manier, maar hebben een grote impact op de structuur van het component.

### Complex components become hard to understand
- Ongerelateerde logica wordt verspreid over de verschillende lifecycle methods. 
- Met hooks kan je alles opsplitsen in functies gebaseerd op samenhorende logica.
- https://twitter.com/prchdk/status/1056960391543062528?s=20

### Classes confuse both people and machines
- “classes confuse people” = discussieerbaar
- Functies zijn beter optimaliseerbaar dan classes.

## Adoptie disclaimer
Alle classes refactoren word niet aangeraden. Wel wordt aangeraden meer in functies te denken met hooks.

---

## interessante links
- official docs: https://reactjs.org/docs/hooks-intro.html
- react-hanger: https://github.com/kitze/react-hanger
- useHooks: https://usehooks.com/
