## `core/` - Code global, initialisé une fois

__Contient :__
- Services globaux (AuthService...)
- Interceptors Http
- Guards (AuthGuard, RoleGuard)
- Configuration globale si besoin (ex : constantes)

Ne contient pas de composant UI. 

exemple : 

```
core/
├── services/
│   └── auth.service.ts
├── interceptors/
│   └── auth.interceptor.ts
├── guards/
│   └── auth.guard.ts
└── config/
```
