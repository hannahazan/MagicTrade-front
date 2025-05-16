## `components/` - Composants métiers spécifiques mais réutilisables

__Contient :__
- Composants liés au domaine, mais pas à une seule page (ex: UserRateComponent, WishlistComponent)
- Ils peuvent être utilisés sur plusieurs pages, mais ils ne sont pas "UI génériques" (contrairement à un "ButtonComponent" par exemple)

```
components/
├── user-card/
│   └── user-card.component.ts / html / scss
├── wishlist/
```
