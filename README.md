# 🔌 Habbo Avatar Viewer API

Backend em **Node.js** que fornece dados do Habbo Hotel para consumo pelo frontend ou outras aplicações.  
Inclui informações completas de um usuário, como:

- Perfil
- Emblemas
- Amigos
- Quartos
- Grupos

Projeto focado em **Node.js com Express** e **Prisma + PostgreSQL**, com objetivo de praticar:

- Consumo de APIs públicas (Habbo)
- Persistência de dados com banco relacional
- Organização de código em **controllers, services e repositories**
- Boas práticas de arquitetura e manutenção de APIs

---

## 🚀 Endpoints principais

Todos os endpoints retornam **JSON**:

### `/profile/:username`
Retorna o perfil completo de um usuário:

✅ Avatar renderizado  
✅ Informações do perfil  
✅ Emblemas equipados  
✅ Lista completa de emblemas, amigos, quartos e grupos  
✅ Indicação de novos emblemas  
✅ Contadores de badges, conquistas e totais  

> Exemplo de chamada via `fetch`:
```js
const res = await fetch('https://habbo-avatar-viewer-api.onrender.com/profile/USERNAME');
const data = await res.json();
console.log(data);
```

---

## 🛠 Tecnologias

- Node.js
- Express
- Prisma ORM
- PostgreSQL
- Axios (ou fetch interno) para integração com a API pública do Habbo
- dotenv para variáveis de ambiente

---

## 📂 Estrutura

```
├── 📁 prisma
│   ├── 📁 migrations
│   └── 📄 schema.prisma
├── 📁 src
│   ├── 📁 config
│   │   └── 📄 prisma.js
│   ├── 📁 controllers
│   │   └── 📄 profile.controller.js
│   ├── 📁 integrations
│   │   └── 📄 habbo.api.js
│   ├── 📁 repositories
│   │   ├── 📄 badgesHistory.repository.js
│   │   └── 📄 habbo.repository.js
│   ├── 📁 routes
│   │   └── 📄 profile.routes.js
│   ├── 📁 services
│   │   ├── 📄 achievements.service.js
│   │   ├── 📄 badges.service.js
│   │   ├── 📄 friends.service.js
│   │   ├── 📄 groups.service.js
│   │   ├── 📄 profile.service.js
│   │   └── 📄 rooms.service.js
│   └── 📄 app.js
├── 📝 README.md
├── ⚙️ package.json
├── 📄 prisma.config.ts
└── 📄 server.js
```

---  
👨‍💻 Autor

Leonardo Brito  
GitHub: https://github.com/Leonardo-Bonanno
